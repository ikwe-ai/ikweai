#!/usr/bin/env python3
"""Generate a dark-themed multi-page public sample report PDF — ikwe.ai v2 brand."""

from pathlib import Path
from typing import Optional

W, H = 612, 792
LEFT = 46
RIGHT = W - 46

# ── brand palette (RGB 0-1) ──────────────────────────────────────────────────
BG        = (0.051, 0.059, 0.078)   # #0d0f14
SURFACE   = (0.078, 0.090, 0.125)   # #141720
SURFACE2  = (0.106, 0.122, 0.180)   # #1b1f2e
SURFACE3  = (0.129, 0.149, 0.227)   # #21263a
BORDER    = (0.137, 0.157, 0.251)   # #232840
TEXT      = (0.910, 0.918, 0.957)   # #e8eaf4
MUTED     = (0.616, 0.639, 0.745)   # #9da3be
SUBTLE    = (0.408, 0.439, 0.549)   # #68708c
LILAC     = (0.486, 0.310, 0.827)   # #7c4fd3
LILAC_BR  = (0.545, 0.361, 0.965)   # #8b5cf6
TEAL      = (0.231, 0.749, 0.800)   # #3bbfcc
AMBER     = (0.961, 0.651, 0.137)   # #f5a623
GREEN     = (0.239, 0.839, 0.549)   # #3dd68c
DANGER    = (0.961, 0.353, 0.353)   # #f55a5a
GOLD      = (0.910, 0.788, 0.478)   # #e8c97a
# ─────────────────────────────────────────────────────────────────────────────


def esc(text: str) -> str:
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def rgb_fill(r: float, g: float, b: float) -> str:
    return f"{r:.3f} {g:.3f} {b:.3f} rg"


def rgb_stroke(r: float, g: float, b: float) -> str:
    return f"{r:.3f} {g:.3f} {b:.3f} RG"


def text(x: float, y: float, size: int, value: str, font: str = "F1") -> str:
    return f"BT /{font} {size} Tf 1 0 0 1 {x:.1f} {y:.1f} Tm ({esc(value)}) Tj ET"


def fill_rect(x: float, y: float, w: float, h: float, color: tuple) -> list:
    return [rgb_fill(*color), f"{x:.1f} {y:.1f} {w:.1f} {h:.1f} re f"]


def stroke_rect(x: float, y: float, w: float, h: float, color: tuple, width: float = 0.75) -> list:
    return [f"{width:.2f} w", rgb_stroke(*color), f"{x:.1f} {y:.1f} {w:.1f} {h:.1f} re S"]


def draw_box(x, y, w, h, fill, stroke) -> list:
    return fill_rect(x, y, w, h, fill) + stroke_rect(x, y, w, h, stroke)


def write_lines(
    x: float,
    y: float,
    size: int,
    lines: list,
    *,
    font: str = "F1",
    color: tuple = TEXT,
    leading: Optional[float] = None,
) -> list:
    cmds = [rgb_fill(*color)]
    line_gap = leading if leading is not None else size + 4
    cursor = y
    for line in lines:
        cmds.append(text(x, cursor, size, line, font=font))
        cursor -= line_gap
    return cmds


def wrap(text_value: str, width: int) -> list:
    words = text_value.split()
    lines = []
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


def hline(x1: float, x2: float, y: float, color: tuple, width: float = 0.5) -> list:
    return [f"{width:.2f} w", rgb_stroke(*color), f"{x1:.1f} {y:.1f} m {x2:.1f} {y:.1f} l S"]


def footer(page_number: int) -> list:
    cmds = hline(LEFT, RIGHT, 44, BORDER)
    cmds += write_lines(LEFT, 32, 7, ["Ikwe.ai  ·  Public redacted sample  ·  EQ Safety Benchmark format illustration"], color=SUBTLE)
    cmds += write_lines(RIGHT - 42, 32, 7, [f"Page {page_number}"], color=SUBTLE)
    return cmds


# ── PAGE 1 ───────────────────────────────────────────────────────────────────

def page_one() -> list:
    cmds: list = []

    # Full-page background
    cmds += fill_rect(0, 0, W, H, BG)

    # Header band
    cmds += fill_rect(0, 724, W, 68, SURFACE2)
    cmds += hline(0, W, 724, LILAC, 2.0)
    cmds += write_lines(LEFT, 764, 8, ["IKWE AI  ·  PUBLIC SAMPLE REPORT"], font="F2", color=GOLD)
    cmds += write_lines(LEFT, 742, 20, ["Ikwe EQ Safety Evaluation"], font="F2", color=TEXT)
    cmds += write_lines(LEFT, 726, 9, ["Illustrative report structure only — no client-identifiable content."], color=MUTED)

    # Intro card
    cmds += draw_box(LEFT, 645, RIGHT - LEFT, 56, SURFACE, BORDER)
    cmds += write_lines(LEFT + 14, 680, 10, ["Behavioral Safety Validation"], font="F2", color=LILAC_BR)
    summary = (
        "This sample shows the structure of an Ikwe EQ Safety Evaluation deliverable: risk classification, "
        "dimension scoring, governance framing, and remediation direction."
    )
    cmds += write_lines(LEFT + 14, 663, 9, wrap(summary, 96), color=MUTED, leading=12)

    # 3 KPI cards
    card_y = 565
    card_w = 166
    gap = 10
    cards = [
        ("Overall Score", "73%",              "Illustrative EQ Safety score",           SURFACE2, BORDER,  GREEN),
        ("Safety Gate",   "Conditional Pass", "Issues present, mitigations required",   SURFACE2, AMBER,   AMBER),
        ("Tier",          "Tier II",          "Launch with safeguards and re-test",      SURFACE2, LILAC,   LILAC_BR),
    ]
    for index, (label, value, note, fill, stroke, accent) in enumerate(cards):
        x = LEFT + index * (card_w + gap)
        cmds += draw_box(x, card_y, card_w, 62, fill, stroke)
        cmds += write_lines(x + 12, card_y + 48, 8, [label], font="F2", color=MUTED)
        cmds += write_lines(x + 12, card_y + 28, 16, [value], font="F2", color=accent)
        cmds += write_lines(x + 12, card_y + 13, 8, wrap(note, 28), color=SUBTLE, leading=10)

    # Executive summary + profile row
    cmds += draw_box(LEFT, 396, 340, 144, SURFACE, BORDER)
    cmds += write_lines(LEFT + 14, 520, 11, ["Executive Summary"], font="F2", color=TEXT)
    cmds += hline(LEFT + 14, LEFT + 326, 512, BORDER)
    summary_lines = [
        "Stable behavior appears in low-volatility interactions, but escalation",
        "pathways show interruption and routing risk. Current profile supports",
        "controlled rollout with safeguards, remediation work, and a targeted",
        "re-test before broader deployment.",
        "",
        "This sample mirrors the report structure clients receive after a",
        "completed evaluation cycle: score, risk posture, evidence, next steps.",
    ]
    cmds += write_lines(LEFT + 14, 500, 9, summary_lines, color=MUTED, leading=13)

    # Report profile dark card
    cmds += draw_box(400, 396, RIGHT - 400, 144, SURFACE2, LILAC)
    cmds += write_lines(416, 518, 9, ["Report Profile"], font="F2", color=GOLD)
    cmds += hline(416, RIGHT - 14, 510, LILAC, 0.5)
    profile_data = [
        ("Deployment surface", "Customer support assistant"),
        ("Scenario battery",   "EQSB baseline + deployment slice"),
        ("Analyst note",       "Public sample, redacted"),
    ]
    py = 496
    for key, val in profile_data:
        cmds += write_lines(416, py, 8, [key], color=SUBTLE)
        py -= 11
        cmds += write_lines(416, py, 9, [val], font="F2", color=TEXT)
        py -= 16

    # What leadership gets
    cmds += draw_box(LEFT, 270, RIGHT - LEFT, 100, SURFACE, BORDER)
    cmds += write_lines(LEFT + 14, 350, 11, ["What leadership gets"], font="F2", color=TEXT)
    cmds += hline(LEFT + 14, RIGHT - 14, 342, BORDER)
    leadership = [
        "  Board brief with classification band and threshold language",
        "  Risk scorecard with dimension outcomes and failure mapping",
        "  Evidence pack for procurement, legal, and compliance review",
        "  Remediation roadmap tied to retest readiness",
    ]
    cmds += write_lines(LEFT + 14, 328, 9, leadership, color=MUTED, leading=14)

    # Links row
    cmds += write_lines(LEFT, 248, 9,
        ["PDF sample  \u00b7  https://ikwe.ai/reports/ikwe-sample-report-public.pdf"], color=LILAC_BR)
    cmds += write_lines(LEFT, 234, 9,
        ["Intake  \u00b7  https://ikwe.ai/intake   |   Web preview  \u00b7  https://ikwe.ai/reports/ikwe-sample-report-public.html"], color=LILAC_BR)

    cmds += footer(1)
    return cmds


# ── PAGE 2 ───────────────────────────────────────────────────────────────────

def page_two() -> list:
    cmds: list = []
    cmds += fill_rect(0, 0, W, H, BG)

    # Sub-header
    cmds += fill_rect(0, 748, W, 44, SURFACE)
    cmds += hline(0, W, 748, BORDER)
    cmds += write_lines(LEFT, 769, 8, ["DIMENSION SNAPSHOT"], font="F2", color=LILAC_BR)
    cmds += write_lines(LEFT, 753, 14, ["Illustrative score breakdown"], font="F2", color=TEXT)

    rows = [
        ("Escalation Stability",         70, "Drift under sustained pressure"),
        ("Vulnerable User Response",      60, "Needs stronger handling in higher-risk cases"),
        ("Manipulation Susceptibility",   55, "Additional safeguards needed"),
        ("Dependency Reinforcement",      78, "Limited risk detected"),
        ("Correction & Recovery",         90, "Strong repair and recovery behavior"),
        ("Stress Condition Performance",  63, "Borderline in acute user states"),
    ]

    y = 686
    for label, score, note in rows:
        cmds += draw_box(LEFT, y - 8, RIGHT - LEFT, 52, SURFACE, BORDER)
        cmds += write_lines(LEFT + 14, y + 20, 10, [label], font="F2", color=TEXT)
        cmds += write_lines(LEFT + 14, y + 7, 8, [note], color=MUTED)
        # Bar track
        bar_x = 290
        bar_w = 188
        cmds += fill_rect(bar_x, y + 7, bar_w, 7, SURFACE3)
        tone = GREEN if score >= 80 else TEAL if score >= 65 else AMBER if score >= 50 else DANGER
        cmds += fill_rect(bar_x, y + 7, bar_w * score / 100, 7, tone)
        cmds += write_lines(bar_x + bar_w + 8, y + 13, 10, [f"{score}%"], font="F2", color=tone)
        y -= 68

    # Priority findings
    cmds += draw_box(LEFT, 152, 260, 140, SURFACE, BORDER)
    cmds += write_lines(LEFT + 14, 270, 11, ["Priority findings"], font="F2", color=TEXT)
    cmds += hline(LEFT + 14, LEFT + 246, 262, BORDER)
    findings = [
        "1. Crisis routing inconsistent under higher-intensity prompts.",
        "2. Dependency language appears after prolonged reassurance loops.",
        "3. Repair quality is strong once the system recognizes the miss.",
    ]
    cmds += write_lines(LEFT + 14, 248, 9, findings, color=MUTED, leading=17)

    # Public index comparison — dark accent card
    cmds += draw_box(330, 152, RIGHT - 330, 140, SURFACE2, TEAL)
    cmds += write_lines(346, 270, 11, ["Public index comparison"], font="F2", color=GOLD)
    cmds += hline(346, RIGHT - 14, 262, TEAL, 0.5)
    comparison = [
        ("Claude reference row",         "78.3"),
        ("Illustrative client system",   "73.0"),
        ("GPT-4o Study I baseline",      "51.2"),
        ("Grok Study I baseline",        "40.6"),
    ]
    cy = 248
    for model, val in comparison:
        cmds += write_lines(346, cy, 8, [model], color=MUTED)
        cmds += write_lines(RIGHT - 42, cy, 9, [val], font="F2", color=TEAL)
        cy -= 17
    cmds += write_lines(
        346, 176, 8,
        wrap("Client evaluations stay private but can be positioned against the same public benchmark record.", 36),
        color=SUBTLE, leading=11,
    )

    cmds += footer(2)
    return cmds


# ── PAGE 3 ───────────────────────────────────────────────────────────────────

def page_three() -> list:
    cmds: list = []
    cmds += fill_rect(0, 0, W, H, BG)

    # Sub-header
    cmds += fill_rect(0, 748, W, 44, SURFACE)
    cmds += hline(0, W, 748, BORDER)
    cmds += write_lines(LEFT, 769, 8, ["REMEDIATION AND GOVERNANCE"], font="F2", color=LILAC_BR)
    cmds += write_lines(LEFT, 753, 14, ["What happens after scoring"], font="F2", color=TEXT)

    # 4 audience cards
    cards = [
        ("Board",        "Decision-ready summary",    "Classification band, main failure modes, and immediate next-step recommendation."),
        ("Legal",        "Due diligence record",      "Structured evidence package for liability review and internal governance files."),
        ("Compliance",   "Versioned documentation",   "Artifacts tied to methodology version, scenario set, and review date."),
        ("Engineering",  "Failure mapping",           "Specific problem patterns translated into remediation priorities and retest needs."),
    ]
    positions = [(LEFT, 588), (LEFT + 272, 588), (LEFT, 458), (LEFT + 272, 458)]
    for (title, label, body), (x, y) in zip(cards, positions):
        cmds += draw_box(x, y, 254, 104, SURFACE, BORDER)
        # accent top strip
        cmds += fill_rect(x, y + 88, 254, 16, SURFACE2)
        cmds += write_lines(x + 12, y + 94, 8, [title], font="F2", color=LILAC_BR)
        cmds += write_lines(x + 12, y + 72, 11, [label], font="F2", color=TEXT)
        cmds += write_lines(x + 12, y + 52, 8, wrap(body, 36), color=MUTED, leading=11)

    # Recommended next steps — amber alert card
    cmds += draw_box(LEFT, 282, RIGHT - LEFT, 130, SURFACE2, AMBER)
    cmds += fill_rect(LEFT, 388, RIGHT - LEFT, 24, (0.200, 0.140, 0.040))
    cmds += write_lines(LEFT + 14, 396, 10, ["Recommended next steps"], font="F2", color=AMBER)
    next_steps = [
        "1.  Add stronger crisis-routing controls before wider rollout.",
        "2.  Reinforce user autonomy in emotionally escalated conversations.",
        "3.  Harden prompt and policy layers against dependency reinforcement.",
        "4.  Re-test after changes are in place before broader deployment.",
    ]
    cmds += write_lines(LEFT + 14, 372, 9, next_steps, color=TEXT, leading=16)

    # Boundary note
    cmds += draw_box(LEFT, 178, RIGHT - LEFT, 78, SURFACE, BORDER)
    cmds += write_lines(LEFT + 14, 236, 10, ["Boundary note"], font="F2", color=TEXT)
    cmds += hline(LEFT + 14, RIGHT - 14, 228, BORDER)
    boundary = [
        "Not shown in the public sample: exact scenario text, scoring formulas, raw response evidence,",
        "client-identifying details, and full remediation workstream notes.",
    ]
    cmds += write_lines(LEFT + 14, 214, 9, boundary, color=MUTED, leading=13)

    # CTA card — lilac
    cmds += draw_box(LEFT, 76, RIGHT - LEFT, 72, SURFACE2, LILAC)
    cmds += write_lines(LEFT + 14, 126, 11, ["Request Ikwe EQ Safety Evaluation"], font="F2", color=GOLD)
    cmds += write_lines(LEFT + 14, 106, 9,
        ["ikwe.ai/intake  \u00b7  Compare your system against the same benchmark framework."], color=TEXT)
    cmds += write_lines(LEFT + 14, 90, 8, ["https://ikwe.ai/intake"], color=LILAC_BR)

    cmds += footer(3)
    return cmds


# ── PDF assembly ─────────────────────────────────────────────────────────────

def stream(cmds: list) -> bytes:
    data = "\n".join(cmds).encode("utf-8")
    return f"<< /Length {len(data)} >>\nstream\n".encode("ascii") + data + b"\nendstream"


def build_pdf(path: Path) -> None:
    objects: list = []

    def add(obj: bytes) -> int:
        objects.append(obj)
        return len(objects)

    catalog = add(b"<< >>")
    pages   = add(b"<< >>")
    font_r  = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    font_b  = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")

    page_ids = []
    for commands in (page_one(), page_two(), page_three()):
        content = add(stream(commands))
        page = add((
            f"<< /Type /Page /Parent {pages} 0 R /MediaBox [0 0 {W} {H}] "
            f"/Resources << /Font << /F1 {font_r} 0 R /F2 {font_b} 0 R >> >> "
            f"/Contents {content} 0 R >>"
        ).encode("ascii"))
        page_ids.append(page)

    kids = " ".join(f"{pid} 0 R" for pid in page_ids)
    objects[pages - 1]   = f"<< /Type /Pages /Kids [{kids}] /Count {len(page_ids)} >>".encode("ascii")
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
        f"trailer\n<< /Size {len(objects) + 1} /Root {catalog} 0 R >>\nstartxref\n{xref}\n%%EOF\n"
    ).encode("ascii")
    path.write_bytes(out)


if __name__ == "__main__":
    output = Path("public/reports/ikwe-sample-report-public.pdf")
    output.parent.mkdir(parents=True, exist_ok=True)
    build_pdf(output)
    print(f"Wrote {output}")
