#!/usr/bin/env python3
"""Generate a styled multi-page public sample report PDF."""

from pathlib import Path
from typing import Optional

W, H = 612, 792
LEFT = 46
RIGHT = W - 46


def esc(text: str) -> str:
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def rgb_fill(r: float, g: float, b: float) -> str:
    return f"{r:.3f} {g:.3f} {b:.3f} rg"


def rgb_stroke(r: float, g: float, b: float) -> str:
    return f"{r:.3f} {g:.3f} {b:.3f} RG"


def text(x: float, y: float, size: int, value: str, font: str = "F1") -> str:
    return f"BT /{font} {size} Tf 1 0 0 1 {x:.1f} {y:.1f} Tm ({esc(value)}) Tj ET"


def fill_rect(x: float, y: float, w: float, h: float, color: tuple[float, float, float]) -> list[str]:
    return [rgb_fill(*color), f"{x:.1f} {y:.1f} {w:.1f} {h:.1f} re f"]


def stroke_rect(
    x: float, y: float, w: float, h: float, color: tuple[float, float, float], width: float = 1
) -> list[str]:
    return [f"{width:.2f} w", rgb_stroke(*color), f"{x:.1f} {y:.1f} {w:.1f} {h:.1f} re S"]


def draw_box(
    x: float,
    y: float,
    w: float,
    h: float,
    fill: tuple[float, float, float],
    stroke: tuple[float, float, float],
) -> list[str]:
    return fill_rect(x, y, w, h, fill) + stroke_rect(x, y, w, h, stroke)


def write_lines(
    x: float,
    y: float,
    size: int,
    lines: list[str],
    *,
    font: str = "F1",
    color: tuple[float, float, float] = (0.15, 0.17, 0.26),
    leading: Optional[float] = None,
) -> list[str]:
    cmds = [rgb_fill(*color)]
    line_gap = leading if leading is not None else size + 4
    cursor = y
    for line in lines:
        cmds.append(text(x, cursor, size, line, font=font))
        cursor -= line_gap
    return cmds


def wrap(text_value: str, width: int) -> list[str]:
    words = text_value.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = word if not current else f"{current} {word}"
        if len(candidate) <= width:
            current = candidate
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def footer(page_number: int) -> list[str]:
    return write_lines(
        LEFT,
        24,
        8,
        [
            "Ikwe.ai · Public redacted sample deliverable · EQ Safety Benchmark format illustration",
        ],
        color=(0.44, 0.47, 0.57),
    ) + write_lines(RIGHT - 48, 24, 8, [f"Page {page_number}"], color=(0.44, 0.47, 0.57))


def page_one() -> list[str]:
    cmds: list[str] = []
    cmds += fill_rect(0, 724, W, 68, (0.12, 0.08, 0.18))
    cmds += write_lines(LEFT, 764, 11, ["IKWE AI · PUBLIC SAMPLE REPORT"], font="F2", color=(0.91, 0.78, 0.29))
    cmds += write_lines(
        LEFT,
        736,
        24,
        ["Ikwe EQ Safety Evaluation"],
        font="F2",
        color=(0.96, 0.95, 0.99),
        leading=0,
    )
    cmds += write_lines(
        LEFT,
        712,
        11,
        ["Illustrative report structure only. No client-identifiable content."],
        color=(0.79, 0.78, 0.88),
    )

    cmds += draw_box(LEFT, 640, RIGHT - LEFT, 58, (0.97, 0.97, 0.99), (0.88, 0.86, 0.94))
    cmds += write_lines(LEFT + 16, 676, 10, ["Behavioral Safety Validation"], font="F2", color=(0.43, 0.27, 0.76))
    summary = (
        "This sample shows the structure of an Ikwe EQ Safety Evaluation deliverable: risk classification, "
        "dimension scoring, governance framing, and remediation direction."
    )
    cmds += write_lines(LEFT + 16, 656, 10, wrap(summary, 92), color=(0.26, 0.29, 0.38), leading=13)

    card_y = 558
    card_w = 170
    gap = 12
    cards = [
        ("Overall Score", "73%", "Illustrative EQ Safety score", (0.95, 0.98, 0.96), (0.76, 0.89, 0.79), (0.17, 0.64, 0.40)),
        ("Safety Gate", "Conditional Pass", "Issues present, mitigations required", (0.99, 0.97, 0.92), (0.92, 0.85, 0.64), (0.73, 0.56, 0.11)),
        ("Tier", "Tier II", "Launch with safeguards and re-test", (0.96, 0.94, 0.99), (0.84, 0.77, 0.95), (0.43, 0.27, 0.76)),
    ]
    for index, (label, value, note, fill, stroke, accent) in enumerate(cards):
        x = LEFT + index * (card_w + gap)
        cmds += draw_box(x, card_y, card_w, 68, fill, stroke)
        cmds += write_lines(x + 14, card_y + 50, 9, [label], font="F2", color=(0.37, 0.39, 0.49))
        cmds += write_lines(x + 14, card_y + 28, 18, [value], font="F2", color=accent)
        cmds += write_lines(x + 14, card_y + 12, 9, wrap(note, 28), color=(0.37, 0.39, 0.49), leading=11)

    cmds += draw_box(LEFT, 396, 352, 136, (0.98, 0.98, 0.995), (0.88, 0.86, 0.94))
    cmds += write_lines(LEFT + 16, 510, 12, ["Executive Summary"], font="F2", color=(0.12, 0.14, 0.22))
    summary_lines = [
        "Stable behavior appears in low-volatility interactions, but escalation pathways",
        "show interruption and routing risk. Current profile supports controlled rollout",
        "with safeguards, remediation work, and a targeted re-test before broader deployment.",
        "",
        "This sample mirrors the report structure clients receive after a completed",
        "evaluation cycle: score, risk posture, supporting evidence, and next steps.",
    ]
    cmds += write_lines(LEFT + 16, 486, 10, summary_lines, color=(0.28, 0.30, 0.39), leading=14)

    cmds += draw_box(416, 396, RIGHT - 416, 136, (0.12, 0.08, 0.18), (0.26, 0.19, 0.41))
    cmds += write_lines(436, 506, 10, ["Report Profile"], font="F2", color=(0.91, 0.78, 0.29))
    profile_lines = [
        "Deployment surface",
        "Customer support assistant",
        "",
        "Scenario battery",
        "EQSB baseline + deployment slice",
        "",
        "Analyst note",
        "Public sample, redacted",
    ]
    colors = [(0.76, 0.75, 0.84), (0.96, 0.95, 0.99), (0.76, 0.75, 0.84), (0.76, 0.75, 0.84), (0.96, 0.95, 0.99), (0.76, 0.75, 0.84), (0.76, 0.75, 0.84), (0.96, 0.95, 0.99)]
    y = 482
    for line, color in zip(profile_lines, colors):
        if line:
            cmds += write_lines(436, y, 10, [line], font="F1" if color != (0.96, 0.95, 0.99) else "F2", color=color)
        y -= 16

    cmds += draw_box(LEFT, 278, RIGHT - LEFT, 92, (0.985, 0.985, 0.995), (0.88, 0.86, 0.94))
    cmds += write_lines(LEFT + 16, 346, 12, ["What leadership gets"], font="F2", color=(0.12, 0.14, 0.22))
    leadership = [
        "• Board brief with classification band and threshold language",
        "• Risk scorecard with dimension outcomes and failure mapping",
        "• Evidence pack for procurement, legal, and compliance review",
        "• Remediation roadmap tied to retest readiness",
    ]
    cmds += write_lines(LEFT + 16, 324, 10, leadership, color=(0.28, 0.30, 0.39), leading=14)

    cmds += write_lines(
        LEFT,
        238,
        10,
        ["Styled PDF sample asset · https://ikwe.ai/reports/ikwe-sample-report-public.pdf"],
        color=(0.43, 0.27, 0.76),
    )
    cmds += write_lines(
        LEFT,
        222,
        10,
        ["Intake · https://ikwe.ai/intake   |   Full web preview · https://ikwe.ai/sample-report"],
        color=(0.43, 0.27, 0.76),
    )
    cmds += footer(1)
    return cmds


def page_two() -> list[str]:
    cmds: list[str] = []
    cmds += fill_rect(0, 744, W, 48, (0.96, 0.95, 0.99))
    cmds += write_lines(LEFT, 768, 11, ["DIMENSION SNAPSHOT"], font="F2", color=(0.43, 0.27, 0.76))
    cmds += write_lines(LEFT, 748, 18, ["Illustrative score breakdown"], font="F2", color=(0.12, 0.14, 0.22))

    rows = [
        ("Escalation Stability", 70, "Drift under sustained pressure"),
        ("Vulnerable User Response", 60, "Needs stronger handling in higher-risk cases"),
        ("Manipulation Susceptibility", 55, "Additional safeguards needed"),
        ("Dependency Reinforcement", 78, "Limited risk detected"),
        ("Correction & Recovery", 90, "Strong repair and recovery behavior"),
        ("Stress Condition Performance", 63, "Borderline in acute user states"),
    ]
    y = 676
    for label, score, note in rows:
        cmds += draw_box(LEFT, y - 10, RIGHT - LEFT, 56, (0.985, 0.985, 0.995), (0.90, 0.88, 0.95))
        cmds += write_lines(LEFT + 14, y + 22, 11, [label], font="F2", color=(0.12, 0.14, 0.22))
        cmds += write_lines(LEFT + 14, y + 8, 9, [note], color=(0.37, 0.39, 0.49))
        cmds += fill_rect(302, y + 9, 180, 8, (0.90, 0.91, 0.96))
        tone = (0.24, 0.83, 0.55) if score >= 80 else (0.67, 0.49, 0.91) if score >= 65 else (0.91, 0.79, 0.28) if score >= 50 else (0.90, 0.39, 0.39)
        cmds += fill_rect(302, y + 9, 1.8 * score, 8, tone)
        cmds += write_lines(498, y + 15, 11, [f"{score}%"], font="F2", color=tone)
        y -= 72

    cmds += draw_box(LEFT, 146, 268, 150, (0.96, 0.97, 0.995), (0.88, 0.86, 0.94))
    cmds += write_lines(LEFT + 14, 272, 12, ["Priority findings"], font="F2", color=(0.12, 0.14, 0.22))
    findings = [
        "1. Crisis routing is inconsistent under higher-intensity prompts.",
        "2. Dependency language appears after prolonged reassurance loops.",
        "3. Repair quality is strong once the system recognizes the miss.",
    ]
    cmds += write_lines(LEFT + 14, 248, 10, findings, color=(0.28, 0.30, 0.39), leading=18)

    cmds += draw_box(326, 146, RIGHT - 326, 150, (0.12, 0.08, 0.18), (0.26, 0.19, 0.41))
    cmds += write_lines(344, 272, 12, ["Public index comparison"], font="F2", color=(0.91, 0.78, 0.29))
    comparison = [
        "Claude reference row        78.3",
        "Illustrative client system  73.0",
        "GPT-4o Study I baseline     51.2",
        "Grok Study I baseline       40.6",
    ]
    cmds += write_lines(344, 246, 10, comparison, font="F2", color=(0.96, 0.95, 0.99), leading=18)
    cmds += write_lines(
        344,
        170,
        9,
        wrap("Client evaluations stay private but can be positioned against the same public benchmark record.", 36),
        color=(0.79, 0.78, 0.88),
        leading=13,
    )

    cmds += footer(2)
    return cmds


def page_three() -> list[str]:
    cmds: list[str] = []
    cmds += fill_rect(0, 744, W, 48, (0.96, 0.95, 0.99))
    cmds += write_lines(LEFT, 768, 11, ["REMEDIATION AND GOVERNANCE"], font="F2", color=(0.43, 0.27, 0.76))
    cmds += write_lines(LEFT, 748, 18, ["What happens after scoring"], font="F2", color=(0.12, 0.14, 0.22))

    cards = [
        ("Board", "Decision-ready summary", "Classification band, main failure modes, and immediate next-step recommendation."),
        ("Legal", "Due diligence record", "Structured evidence package for liability review and internal governance files."),
        ("Compliance", "Versioned documentation", "Artifacts tied to methodology version, scenario set, and review date."),
        ("Engineering", "Failure mapping", "Specific problem patterns translated into remediation priorities and retest needs."),
    ]
    positions = [(LEFT, 592), (LEFT + 272, 592), (LEFT, 458), (LEFT + 272, 458)]
    for (title, label, body), (x, y) in zip(cards, positions):
        cmds += draw_box(x, y, 250, 108, (0.985, 0.985, 0.995), (0.90, 0.88, 0.95))
        cmds += write_lines(x + 14, y + 84, 9, [title], font="F2", color=(0.43, 0.27, 0.76))
        cmds += write_lines(x + 14, y + 62, 12, [label], font="F2", color=(0.12, 0.14, 0.22))
        cmds += write_lines(x + 14, y + 40, 9, wrap(body, 34), color=(0.37, 0.39, 0.49), leading=12)

    cmds += draw_box(LEFT, 284, RIGHT - LEFT, 132, (0.99, 0.97, 0.93), (0.93, 0.85, 0.64))
    cmds += write_lines(LEFT + 16, 392, 12, ["Recommended next steps"], font="F2", color=(0.48, 0.36, 0.11))
    next_steps = [
        "1. Add stronger crisis-routing controls before wider rollout.",
        "2. Reinforce user autonomy in emotionally escalated conversations.",
        "3. Harden prompt and policy layers against dependency reinforcement.",
        "4. Re-test after changes are in place before broader deployment.",
    ]
    cmds += write_lines(LEFT + 16, 366, 10, next_steps, color=(0.38, 0.31, 0.17), leading=16)

    cmds += draw_box(LEFT, 174, RIGHT - LEFT, 86, (0.96, 0.97, 0.995), (0.88, 0.86, 0.94))
    cmds += write_lines(LEFT + 16, 238, 11, ["Boundary note"], font="F2", color=(0.12, 0.14, 0.22))
    boundary = [
        "Not shown in the public sample: exact scenario text, scoring formulas, raw response evidence,",
        "client-identifying details, and full remediation workstream notes.",
    ]
    cmds += write_lines(LEFT + 16, 216, 10, boundary, color=(0.37, 0.39, 0.49), leading=14)

    cmds += draw_box(LEFT, 76, RIGHT - LEFT, 72, (0.12, 0.08, 0.18), (0.26, 0.19, 0.41))
    cmds += write_lines(LEFT + 16, 122, 12, ["Request Ikwe EQ Safety Evaluation"], font="F2", color=(0.91, 0.78, 0.29))
    cmds += write_lines(
        LEFT + 16,
        100,
        10,
        ["ikwe.ai/intake  ·  Compare your system against the same benchmark framework."],
        color=(0.96, 0.95, 0.99),
    )

    cmds += footer(3)
    return cmds


def stream(cmds: list[str]) -> bytes:
    data = "\n".join(cmds).encode("utf-8")
    return f"<< /Length {len(data)} >>\nstream\n".encode("ascii") + data + b"\nendstream"


def build_pdf(path: Path) -> None:
    objects: list[bytes] = []

    def add(obj: bytes) -> int:
        objects.append(obj)
        return len(objects)

    catalog = add(b"<< >>")
    pages = add(b"<< >>")
    font_regular = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    font_bold = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")

    page_ids = []
    for commands in (page_one(), page_two(), page_three()):
        content = add(stream(commands))
        page = add(
            (
                f"<< /Type /Page /Parent {pages} 0 R /MediaBox [0 0 {W} {H}] "
                f"/Resources << /Font << /F1 {font_regular} 0 R /F2 {font_bold} 0 R >> >> "
                f"/Contents {content} 0 R >>"
            ).encode("ascii")
        )
        page_ids.append(page)

    kids = " ".join(f"{page_id} 0 R" for page_id in page_ids)
    objects[pages - 1] = f"<< /Type /Pages /Kids [{kids}] /Count {len(page_ids)} >>".encode("ascii")
    objects[catalog - 1] = f"<< /Type /Catalog /Pages {pages} 0 R >>".encode("ascii")

    out = b"%PDF-1.7\n%\xe2\xe3\xcf\xd3\n"
    offsets = [0]
    for index, obj in enumerate(objects, start=1):
        offsets.append(len(out))
        out += f"{index} 0 obj\n".encode("ascii") + obj + b"\nendobj\n"

    xref = len(out)
    out += f"xref\n0 {len(objects) + 1}\n".encode("ascii")
    out += b"0000000000 65535 f \n"
    for offset in offsets[1:]:
        out += f"{offset:010d} 00000 n \n".encode("ascii")

    out += (
        f"trailer\n<< /Size {len(objects) + 1} /Root {catalog} 0 R >>\nstartxref\n{xref}\n%%EOF\n".encode(
            "ascii"
        )
    )
    path.write_bytes(out)


if __name__ == "__main__":
    output = Path("public/reports/ikwe-sample-report-public.pdf")
    output.parent.mkdir(parents=True, exist_ok=True)
    build_pdf(output)
    print(f"Wrote {output}")
