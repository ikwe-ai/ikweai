#!/usr/bin/env python3
"""Generate a fillable PDF intake form (AcroForm) without external dependencies."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

PAGE_WIDTH = 612
PAGE_HEIGHT = 792
LEFT = 50
RIGHT = 562
TOP_DEFAULT = 730
BOTTOM = 58
FIELD_WIDTH = RIGHT - LEFT


@dataclass
class Field:
    name: str
    label: str
    multiline: bool = False
    height: int = 20
    help_text: str | None = None


SECTIONS = [
    (
        "A. Contact + Organization",
        [
            Field("full_name", "Full name"),
            Field("role_title", "Role / title"),
            Field("company", "Company"),
            Field("work_email", "Work email"),
            Field("company_size", "Company size", help_text="1-10, 11-50, 51-200, 201-1000, 1000+"),
            Field("industry", "Industry"),
            Field("country_region", "Country / region"),
        ],
    ),
    (
        "B. Deployment Context",
        [
            Field("deployment_type", "What are you deploying?", help_text="AI assistant/copilot, support agent, health guidance, HR assistant, autonomous agent, other"),
            Field("is_user_facing", "Is it user-facing?", help_text="Yes / No"),
            Field("user_population", "User population", multiline=True, height=44, help_text="Select all that apply: consumers, patients, employees, students, vulnerable users, other"),
            Field("deployment_channel", "Where is it deployed?", help_text="Web app, mobile, internal Slack/Teams, API integration, other"),
        ],
    ),
    (
        "C. Model + Stack",
        [
            Field("model_providers", "Model provider(s)", multiline=True, height=44, help_text="OpenAI, Anthropic, Google, Meta/open-source, other"),
            Field("system_prompts", "Use system prompts?", help_text="Yes / No"),
            Field("rag_kb", "Use RAG / knowledge base?", help_text="Yes / No"),
            Field("tools_actions", "Use tools/actions?", help_text="Yes / No"),
            Field("fine_tuning", "Use fine-tuning?", help_text="Yes / No"),
        ],
    ),
    (
        "D. Risk / Governance Pressure",
        [
            Field("evaluation_driver", "What is driving this evaluation?", multiline=True, height=54, help_text="Board request, procurement review, partner requirement, compliance readiness, incident/near-miss, pre-launch baseline"),
            Field("deadline", "Any deadlines?", help_text="Date or timeline"),
            Field("signoff_stakeholders", "Who needs to sign off?", multiline=True, height=44, help_text="CEO/founder, CTO, compliance/risk, legal, procurement/security, board"),
        ],
    ),
    (
        "E. Access Feasibility",
        [
            Field("sandbox_access", "Can you provide sandbox/staging access?", help_text="Yes / No / Not sure"),
            Field("test_accounts", "Can you provide 2-3 controlled test accounts?", help_text="Yes / No / Not sure"),
            Field("outputs_confidential", "Are outputs confidential?", help_text="Yes / No"),
        ],
    ),
    (
        "F. Scope Signals",
        [
            Field("scenario_volume", "Approximate scenario volume", help_text="25 (pilot), 50, 100+"),
            Field("engagement_mode", "Preferred engagement mode", help_text="Pilot only, Pilot + re-test, Ongoing monitoring"),
        ],
    ),
    (
        "G. Open Text",
        [
            Field("system_description_concerns", "Briefly describe your system and what you are most concerned about.", multiline=True, height=72),
            Field("required_red_lines", "List any specific red-lines your organization must enforce.", multiline=True, height=72),
        ],
    ),
]


def esc(text: str) -> str:
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


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
    data = "\n".join(commands).encode("utf-8")
    return f"<< /Length {len(data)} >>\nstream\n".encode("ascii") + data + b"\nendstream"


def text_cmd(x: int, y: int, size: int, text: str) -> str:
    return f"BT /F1 {size} Tf 1 0 0 1 {x} {y} Tm ({esc(text)}) Tj ET"


def header_commands(page_num: int) -> list[str]:
    return [
        "0.09 0.07 0.17 rg",
        "0.88 0.83 0.98 RG",
        text_cmd(LEFT, 766, 16, "Ikwe.ai Intake Form"),
        text_cmd(LEFT, 748, 10, "Third-Party Independent Behavioral Safety Evaluation"),
        text_cmd(LEFT, 734, 8, "Public fillable form. Send completed PDF to research@ikwe.ai or submit online at ikwe.ai/intake."),
        text_cmd(RIGHT - 68, 766, 9, f"Page {page_num}"),
        "0.75 0.68 0.95 RG",
        f"{LEFT} 726 m {RIGHT} 726 l S",
    ]


def field_height(field: Field) -> int:
    return field.height if field.multiline else 20


def field_space_needed(field: Field) -> int:
    # label + optional help + field box + spacing
    help_gap = 10 if field.help_text else 0
    return 14 + help_gap + field_height(field) + 12


def section_space_needed(section_title: str, fields: list[Field]) -> int:
    return 20 + sum(field_space_needed(f) for f in fields)


def render() -> tuple[list[list[str]], list[list[tuple[str, str, int, int, int, int, bool]]]]:
    pages_cmds: list[list[str]] = [[]]
    pages_widgets: list[list[tuple[str, str, int, int, int, int, bool]]] = [[]]

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

            pages_cmds[-1].append(text_cmd(LEFT, y, 9, f.label))
            y -= 12

            if f.help_text:
                pages_cmds[-1].append(text_cmd(LEFT, y, 7, f.help_text))
                y -= 10

            h = field_height(f)
            x = LEFT
            y_box = y - h
            pages_cmds[-1].append("0.93 0.91 0.99 RG")
            pages_cmds[-1].append(f"{x} {y_box} {FIELD_WIDTH} {h} re S")

            pages_widgets[-1].append((f.name, f.label, x, y_box, x + FIELD_WIDTH, y_box + h, f.multiline))
            y = y_box - 12

    # Footer on each page
    for i, page_cmds in enumerate(pages_cmds, start=1):
        page_cmds.extend(
            [
                "0.67 0.61 0.84 rg",
                text_cmd(LEFT, 38, 8, "Ikwe.ai • Independent behavioral safety evaluation • ikwe.ai/intake"),
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

        for name, label, x1, y1, x2, y2, multiline in widgets:
            ff = " /Ff 4096" if multiline else ""
            widget_body = (
                f"<< /Type /Annot /Subtype /Widget /FT /Tx /T ({esc(name)}) /TU ({esc(label)}) "
                f"/Rect [{x1} {y1} {x2} {y2}] /F 4 /P {page_id} 0 R{ff} "
                f"/DA (/Helv 10 Tf 0 g) /MK << /BC [0.75 0.7 0.95] /BG [1 1 1] >> /V () >>"
            ).encode("utf-8")
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
