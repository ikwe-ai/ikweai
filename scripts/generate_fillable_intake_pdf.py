#!/usr/bin/env python3
"""Generate a fillable PDF intake form (AcroForm) without external dependencies."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

PAGE_WIDTH = 612
PAGE_HEIGHT = 792
LEFT = 50
RIGHT = 562
TOP_DEFAULT = 680
BOTTOM = 58
FIELD_WIDTH = RIGHT - LEFT
TEXT_RGB = (0.09, 0.07, 0.17)


@dataclass
class Field:
    name: str
    label: str
    kind: str = "text"  # text, textarea, combo, list
    options: tuple[str, ...] = ()
    height: int = 24
    help_text: str | None = None


SECTIONS = [
    (
        "A. Contact + Organization",
        [
            Field("full_name", "Full name"),
            Field("role_title", "Role / title"),
            Field("company", "Company"),
            Field("work_email", "Work email"),
            Field("technical_contact_name", "Technical contact name"),
            Field("technical_contact_email", "Technical contact email"),
            Field("company_size", "Company size", kind="combo", options=("1-10", "11-50", "51-200", "201-1000", "1000+")),
            Field("industry", "Industry", kind="combo", options=("Financial Services", "Healthcare", "Government / Public Sector", "Legal", "Education", "Technology", "Retail / Consumer", "Other")),
            Field("country_region", "Country / region", kind="combo", options=("United States", "Canada", "UK", "EU", "APAC", "LATAM", "Middle East / Africa", "Other")),
        ],
    ),
    (
        "B. Deployment Context",
        [
            Field("use_case", "Primary use case", kind="combo", options=("Companion AI", "Mental health technology", "Healthcare AI", "Fintech assistant", "Customer support AI", "Education AI", "Enterprise copilot", "Other")),
            Field("deployment_type", "What are you deploying?", kind="combo", options=("AI assistant / copilot", "Customer support agent", "Clinical / health guidance assistant", "HR / workforce assistant", "Autonomous agent (tool-using)", "Other")),
            Field("is_user_facing", "Is it user-facing?", kind="combo", options=("Yes", "No")),
            Field("user_population", "User population (select all that apply)", kind="list", options=("General consumers", "Patients", "Employees", "Students", "Vulnerable users (minors, mental health, crisis contexts)", "Other"), height=54),
            Field("user_population_other", "Other user population"),
            Field("deployment_channel", "Where is it deployed?", kind="combo", options=("Web app", "Mobile", "Internal Slack/Teams", "API integration", "Other")),
        ],
    ),
    (
        "C. Model + Stack",
        [
            Field("model_providers", "Model provider(s) (select all that apply)", kind="list", options=("OpenAI", "Anthropic", "Google", "Meta / open-source", "Other"), height=54),
            Field("model_provider_other", "Other model provider"),
            Field("system_prompts", "Use system prompts?", kind="combo", options=("Yes", "No", "Not sure")),
            Field("rag_kb", "Use RAG / knowledge base?", kind="combo", options=("Yes", "No", "Not sure")),
            Field("tools_actions", "Use tools/actions?", kind="combo", options=("Yes", "No", "Not sure")),
            Field("fine_tuning", "Use fine-tuning?", kind="combo", options=("Yes", "No", "Not sure")),
        ],
    ),
    (
        "D. Risk / Governance Pressure",
        [
            Field("evaluation_driver", "What is driving this evaluation? (select all that apply)", kind="list", options=("Board request", "Customer procurement/security review", "Partner requirement", "Compliance readiness", "Incident/near-miss", "Pre-launch risk baseline", "Other"), height=62),
            Field("evaluation_driver_other", "Other evaluation driver"),
            Field("deadline", "Any deadlines?", help_text="Date or timeline"),
            Field("signoff_stakeholders", "Who needs to sign off? (select all that apply)", kind="list", options=("CEO/founder", "CTO", "Head of Compliance / Risk", "Legal", "Customer security/procurement", "Board", "Other"), height=62),
            Field("signoff_other", "Other sign-off stakeholder"),
        ],
    ),
    (
        "E. Access Feasibility",
        [
            Field("access_method", "Preferred testing method", kind="combo", options=("API key / endpoint", "Staging UI", "Production with controlled accounts", "Transcript export")),
            Field("sandbox_access", "Can you provide sandbox/staging access?", kind="combo", options=("Yes", "No", "Not sure")),
            Field("test_accounts", "Can you provide 2-3 controlled test accounts?", kind="combo", options=("Yes", "No", "Not sure")),
            Field("outputs_confidential", "Are outputs confidential?", kind="combo", options=("Yes", "No")),
        ],
    ),
    (
        "F. Scope Signals",
        [
            Field("scenario_volume", "Approximate scenario volume", kind="combo", options=("25 (pilot)", "50", "100+")),
            Field("engagement_mode", "Preferred engagement mode", kind="combo", options=("Pilot only", "Pilot + re-test after remediation", "Ongoing monitoring")),
        ],
    ),
    (
        "G. Open Text",
        [
            Field("system_description_concerns", "Briefly describe your system and what you are most concerned about.", kind="textarea", height=72),
            Field("required_red_lines", "List any specific red-lines your organization must enforce.", kind="textarea", height=72),
        ],
    ),
    (
        "H. Data Handling + Security",
        [
            Field("outputs_storage_allowed", "Can Ikwe store outputs for analysis?", kind="combo", options=("Yes", "No")),
            Field("outputs_include_pii", "Can outputs include PII?", kind="combo", options=("Yes", "No", "Not sure")),
            Field("retention_period", "Required retention period", kind="combo", options=("30 days", "60 days", "90 days", "Custom")),
            Field("retention_custom", "Custom retention detail"),
            Field("compliance_constraints", "Compliance constraints (select all that apply)", kind="list", options=("HIPAA / PHI", "PCI", "FERPA", "GDPR", "Minors", "No additional constraints", "Other"), height=70),
            Field("compliance_other", "Other compliance constraints"),
        ],
    ),
    (
        "I. Scope + Success Criteria",
        [
            Field("pass_criteria", "What does \"pass\" mean for your team?", kind="textarea", height=62),
            Field("priority_domains", "Priority behavioral domains (select all that apply)", kind="list", options=("Anxiety", "Depression", "Loneliness", "Anger", "Overwhelm", "Grief", "Suicidal Ideation", "Relationship Distress", "Career Trauma", "Financial Stress", "Identity Stress", "Family Conflict", "Crisis Escalation"), height=86),
            Field("languages_supported", "Languages supported"),
        ],
    ),
]


def clean_ascii(text: str) -> str:
    # Keep strings PDFDocEncoding-safe for broad viewer compatibility.
    return (
        text.replace("•", "|")
        .replace("—", "-")
        .replace("–", "-")
        .replace("’", "'")
        .replace("“", '"')
        .replace("”", '"')
        .encode("ascii", errors="ignore")
        .decode("ascii")
    )


def esc(text: str) -> str:
    safe = clean_ascii(text)
    return safe.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


class PDFBuilder:
    def __init__(self) -> None:
        self.objects: list[bytes] = []

    def add(self, body: bytes) -> int:
        self.objects.append(body)
        return len(self.objects)

    def set_obj(self, obj_id: int, body: bytes) -> None:
        self.objects[obj_id - 1] = body

    def build(self, root_id: int, path: Path) -> None:
        out = b"%PDF-1.7\n%\xe2\xe3\xcf\xd3\n"
        offsets = [0]

        for i, obj in enumerate(self.objects, start=1):
            offsets.append(len(out))
            out += f"{i} 0 obj\n".encode("ascii")
            out += obj
            out += b"\nendobj\n"

        xref_pos = len(out)
        out += f"xref\n0 {len(self.objects) + 1}\n".encode("ascii")
        out += b"0000000000 65535 f \n"
        for off in offsets[1:]:
            out += f"{off:010d} 00000 n \n".encode("ascii")

        out += (
            f"trailer\n<< /Size {len(self.objects) + 1} /Root {root_id} 0 R >>\n"
            f"startxref\n{xref_pos}\n%%EOF\n"
        ).encode("ascii")

        path.write_bytes(out)


def make_stream(commands: list[str]) -> bytes:
    data = "\n".join(commands).encode("ascii")
    return f"<< /Length {len(data)} >>\nstream\n".encode("ascii") + data + b"\nendstream"


def text_cmd(x: int, y: int, size: int, text: str) -> str:
    return f"{TEXT_RGB[0]} {TEXT_RGB[1]} {TEXT_RGB[2]} rg BT /F1 {size} Tf 1 0 0 1 {x} {y} Tm ({esc(text)}) Tj ET"


def wrap_text(text: str, size: int, max_width: int) -> list[str]:
    words = clean_ascii(text).split()
    if not words:
        return [""]

    max_chars = max(10, int(max_width / (size * 0.53)))
    lines: list[str] = []
    current = words[0]
    for word in words[1:]:
        trial = f"{current} {word}"
        if len(trial) <= max_chars:
            current = trial
            continue
        lines.append(current)
        current = word
    lines.append(current)
    return lines


def header_commands(page_num: int) -> list[str]:
    return [
        "0.88 0.83 0.98 RG",
        text_cmd(LEFT, 766, 16, "ikwe.ai Intake Form"),
        text_cmd(LEFT, 748, 10, "The Behavioral Safety Layer for Human-Facing AI"),
        text_cmd(LEFT, 734, 8, "Third-party independent behavioral safety validation for human-facing AI systems."),
        text_cmd(LEFT, 722, 8, "Benchmark scope: 79 scenarios | 13 behavioral domains (vulnerability categories)."),
        text_cmd(LEFT, 710, 8, "Send completed PDF to research@ikwe.ai or submit online at ikwe.ai/intake."),
        text_cmd(RIGHT - 68, 766, 9, f"Page {page_num}"),
        "0.75 0.68 0.95 RG",
        f"{LEFT} 700 m {RIGHT} 700 l S",
    ]


def field_height(field: Field) -> int:
    return field.height


def field_space_needed(field: Field) -> int:
    # wrapped label lines + optional wrapped help + field box + spacing
    label_lines = wrap_text(field.label, 9, FIELD_WIDTH)
    label_space = len(label_lines) * 11 + 1
    help_space = 0
    if field.help_text:
        help_lines = wrap_text(field.help_text, 7, FIELD_WIDTH)
        help_space = len(help_lines) * 8 + 2
    return label_space + help_space + field_height(field) + 12


def section_space_needed(section_title: str, fields: list[Field]) -> int:
    return 20 + sum(field_space_needed(f) for f in fields)


def render() -> tuple[list[list[str]], list[list[tuple[str, str, str, tuple[str, ...], int, int, int, int]]]]:
    pages_cmds: list[list[str]] = [[]]
    pages_widgets: list[list[tuple[str, str, str, tuple[str, ...], int, int, int, int]]] = [[]]

    page_num = 1
    y = TOP_DEFAULT
    pages_cmds[-1].extend(header_commands(page_num))

    def new_page() -> None:
        nonlocal page_num, y
        page_num += 1
        pages_cmds.append([])
        pages_widgets.append([])
        y = TOP_DEFAULT
        pages_cmds[-1].extend(header_commands(page_num))

    for section_title, fields in SECTIONS:
        needed = section_space_needed(section_title, list(fields))
        if y - needed < BOTTOM:
            new_page()

        pages_cmds[-1].append(text_cmd(LEFT, y, 11, section_title))
        y -= 16

        for f in fields:
            n = field_space_needed(f)
            if y - n < BOTTOM:
                new_page()
                pages_cmds[-1].append(text_cmd(LEFT, y, 11, section_title + " (continued)"))
                y -= 16

            for label_line in wrap_text(f.label, 9, FIELD_WIDTH):
                pages_cmds[-1].append(text_cmd(LEFT, y, 9, label_line))
                y -= 11

            if f.help_text:
                for help_line in wrap_text(f.help_text, 7, FIELD_WIDTH):
                    pages_cmds[-1].append(text_cmd(LEFT, y, 7, help_line))
                    y -= 8
                y -= 2

            h = field_height(f)
            x = LEFT
            y_box = y - h
            pages_cmds[-1].append("0.75 0.70 0.95 RG")
            pages_cmds[-1].append("1 1 1 rg")
            pages_cmds[-1].append(f"{x} {y_box} {FIELD_WIDTH} {h} re B")

            pages_widgets[-1].append((f.name, f.label, f.kind, f.options, x, y_box, x + FIELD_WIDTH, y_box + h))
            y = y_box - 12

    # Footer on each page
    for i, page_cmds in enumerate(pages_cmds, start=1):
        page_cmds.extend(
            [
                "0.67 0.61 0.84 rg",
                text_cmd(LEFT, 38, 8, "ikwe.ai | The Behavioral Safety Layer for Human-Facing AI | ikwe.ai/intake"),
                text_cmd(RIGHT - 130, 38, 8, "Visible Healing Inc."),
            ]
        )

    return pages_cmds, pages_widgets


def generate_pdf(path: Path) -> None:
    pages_cmds, pages_widgets = render()

    b = PDFBuilder()

    # Reserve core objects
    catalog_id = b.add(b"<< >>")
    pages_id = b.add(b"<< >>")
    acroform_id = b.add(b"<< >>")
    font_id = b.add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")

    page_ids: list[int] = []
    content_ids: list[int] = []
    widget_ids: list[int] = []
    page_annots: list[list[int]] = []

    for cmds, widgets in zip(pages_cmds, pages_widgets):
        page_id = b.add(b"<< >>")
        content_id = b.add(make_stream(cmds))
        page_ids.append(page_id)
        content_ids.append(content_id)
        page_annots.append([])

        for name, label, kind, options, x1, y1, x2, y2 in widgets:
            common = (
                f"/Type /Annot /Subtype /Widget /T ({esc(name)}) /TU ({esc(label)}) "
                f"/Rect [{x1} {y1} {x2} {y2}] /F 4 /P {page_id} 0 R "
                f"/Q 0 /DA (/Helv 11 Tf 0 g) /BS << /W 1 /S /S >> "
                f"/MK << /BC [0.75 0.70 0.95] /BG [1 1 1] >>"
            )

            if kind == "textarea":
                widget_body = f"<< {common} /FT /Tx /Ff 4096 /V () >>".encode("utf-8")
            elif kind == "combo":
                opt = " ".join(f"({esc(item)})" for item in options)
                widget_body = f"<< {common} /FT /Ch /Ff 131072 /Opt [{opt}] /V () /DV () >>".encode("utf-8")
            elif kind == "list":
                opt = " ".join(f"({esc(item)})" for item in options)
                widget_body = f"<< {common} /FT /Ch /Ff 2097152 /Opt [{opt}] /V [] >>".encode("utf-8")
            else:
                widget_body = f"<< {common} /FT /Tx /V () >>".encode("utf-8")
            wid = b.add(widget_body)
            widget_ids.append(wid)
            page_annots[-1].append(wid)

    # Fill page objects
    for idx, page_id in enumerate(page_ids):
        annots = " ".join(f"{aid} 0 R" for aid in page_annots[idx])
        page_body = (
            f"<< /Type /Page /Parent {pages_id} 0 R /MediaBox [0 0 {PAGE_WIDTH} {PAGE_HEIGHT}] "
            f"/Resources << /Font << /F1 {font_id} 0 R >> >> "
            f"/Contents {content_ids[idx]} 0 R /Annots [{annots}] >>"
        ).encode("ascii")
        b.set_obj(page_id, page_body)

    kids = " ".join(f"{pid} 0 R" for pid in page_ids)
    b.set_obj(pages_id, f"<< /Type /Pages /Kids [{kids}] /Count {len(page_ids)} >>".encode("ascii"))

    fields = " ".join(f"{wid} 0 R" for wid in widget_ids)
    acro = (
        f"<< /Fields [{fields}] /NeedAppearances true "
        f"/DR << /Font << /Helv {font_id} 0 R >> >> /DA (/Helv 10 Tf 0 g) >>"
    ).encode("ascii")
    b.set_obj(acroform_id, acro)

    catalog = f"<< /Type /Catalog /Pages {pages_id} 0 R /AcroForm {acroform_id} 0 R >>".encode("ascii")
    b.set_obj(catalog_id, catalog)

    b.build(root_id=catalog_id, path=path)


if __name__ == "__main__":
    output = Path("public/forms/ikwe-intake-form-fillable.pdf")
    output.parent.mkdir(parents=True, exist_ok=True)
    generate_pdf(output)
    print(f"Wrote {output}")
