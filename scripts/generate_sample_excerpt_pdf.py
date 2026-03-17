#!/usr/bin/env python3
"""Generate a dark-themed one-page public sample excerpt PDF — ikwe.ai v2 brand."""

from pathlib import Path

W, H = 612, 792
L, R = 50, 562

# ── brand palette ────────────────────────────────────────────────────────────
BG       = (0.051, 0.059, 0.078)
SURFACE  = (0.078, 0.090, 0.125)
SURFACE2 = (0.106, 0.122, 0.180)
BORDER   = (0.137, 0.157, 0.251)
TEXT     = (0.910, 0.918, 0.957)
MUTED    = (0.616, 0.639, 0.745)
SUBTLE   = (0.408, 0.439, 0.549)
LILAC    = (0.486, 0.310, 0.827)
LILAC_BR = (0.545, 0.361, 0.965)
TEAL     = (0.231, 0.749, 0.800)
AMBER    = (0.961, 0.651, 0.137)
GREEN    = (0.239, 0.839, 0.549)
GOLD     = (0.910, 0.788, 0.478)
# ─────────────────────────────────────────────────────────────────────────────


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def rgb(r, g, b) -> str:
    return f"{r:.3f} {g:.3f} {b:.3f}"


def fill(r, g, b) -> str:
    return f"{rgb(r, g, b)} rg"


def stroke(r, g, b) -> str:
    return f"{rgb(r, g, b)} RG"


def t(x: float, y: float, size: int, value: str, font: str = "F1", color: tuple = TEXT) -> str:
    return f"{fill(*color)} BT /{font} {size} Tf 1 0 0 1 {x:.1f} {y:.1f} Tm ({esc(value)}) Tj ET"


def rect_fill(x, y, w, h, color: tuple) -> list:
    return [fill(*color), f"{x:.1f} {y:.1f} {w:.1f} {h:.1f} re f"]


def rect_stroke(x, y, w, h, color: tuple, lw: float = 0.75) -> list:
    return [f"{lw:.2f} w", stroke(*color), f"{x:.1f} {y:.1f} {w:.1f} {h:.1f} re S"]


def box(x, y, w, h, fill_c, stroke_c) -> list:
    return rect_fill(x, y, w, h, fill_c) + rect_stroke(x, y, w, h, stroke_c)


def hline(x1, x2, y, color, lw=0.5) -> list:
    return [f"{lw:.2f} w", stroke(*color), f"{x1:.1f} {y:.1f} m {x2:.1f} {y:.1f} l S"]


def stream(cmds: list) -> bytes:
    data = "\n".join(cmds).encode("utf-8")
    return f"<< /Length {len(data)} >>\nstream\n".encode("ascii") + data + b"\nendstream"


def build_pdf(path: Path) -> None:
    cmds = []

    # Background
    cmds += rect_fill(0, 0, W, H, BG)

    # ── Header band ──────────────────────────────────────────────────────────
    cmds += rect_fill(0, 730, W, 62, SURFACE2)
    cmds += hline(0, W, 730, LILAC, 2.0)
    cmds += [t(L, 769, 8, "IKWE AI  ·  PUBLIC SAMPLE EXCERPT", font="F2", color=GOLD)]
    cmds += [t(L, 748, 20, "1-Page Executive Excerpt", font="F2", color=TEXT)]
    cmds += [t(L, 733, 8, "EQ Safety Benchmark v2.0  ·  Proprietary format illustration", color=MUTED)]

    # ── Disclaimer strip ─────────────────────────────────────────────────────
    cmds += rect_fill(L, 706, R - L, 20, SURFACE)
    cmds += [t(L + 10, 713, 8, "This excerpt shows format and structure only. Content is illustrative and redacted.", color=MUTED)]

    # ── 3 KPI cards ──────────────────────────────────────────────────────────
    card_w = (R - L - 16) // 3
    cards = [
        ("73%",              "Illustrative overall safety score",   GREEN),
        ("Tier II",          "Illustrative risk classification",    AMBER),
        ("4",                "Priority remediation controls",       LILAC_BR),
    ]
    for i, (val, note, accent) in enumerate(cards):
        cx = L + i * (card_w + 8)
        cmds += box(cx, 634, card_w, 58, SURFACE, BORDER)
        cmds += [t(cx + 12, 670, 18, val, font="F2", color=accent)]
        cmds += [t(cx + 12, 652, 8, note, color=MUTED)]

    # ── Executive Summary card ────────────────────────────────────────────────
    cmds += box(L, 520, R - L, 96, SURFACE, BORDER)
    cmds += [t(L + 12, 597, 11, "Executive Summary", font="F2", color=TEXT)]
    cmds += hline(L + 12, R - 12, 590, BORDER)
    cmds += [
        t(L + 12, 576, 9, "Stable behavior appears in low-volatility interactions, while escalation pathways show", color=MUTED),
        t(L + 12, 563, 9, "higher interruption and routing risk. Current profile supports controlled rollout with", color=MUTED),
        t(L + 12, 550, 9, "remediation and re-test gates before broad deployment.", color=MUTED),
        t(L + 12, 533, 8, "This sample mirrors the report structure clients receive after a completed evaluation cycle.", color=SUBTLE),
    ]

    # ── What Leadership Receives card ────────────────────────────────────────
    cmds += box(L, 376, R - L, 116, SURFACE, BORDER)
    cmds += [t(L + 12, 473, 11, "What Leadership Receives", font="F2", color=TEXT)]
    cmds += hline(L + 12, R - 12, 466, BORDER)
    deliverables = [
        "\u2022  Executive risk summary for board and procurement review",
        "\u2022  Severity classification with threshold language",
        "\u2022  Scenario findings appendix (engagement package)",
        "\u2022  Remediation roadmap and re-test recommendation",
    ]
    dy = 452
    for line in deliverables:
        cmds += [t(L + 12, dy, 9, line, color=MUTED)]
        dy -= 16

    # ── Boundary Note card ───────────────────────────────────────────────────
    cmds += box(L, 270, R - L, 80, SURFACE, BORDER)
    cmds += [t(L + 12, 330, 11, "Boundary Note", font="F2", color=TEXT)]
    cmds += hline(L + 12, R - 12, 323, BORDER)
    cmds += [
        t(L + 12, 308, 9, "Not public: exact scenario text, rubric mechanics, client-identifying evidence, and", color=MUTED),
        t(L + 12, 294, 9, "organization-specific confidential findings.", color=MUTED),
    ]

    # ── CTA card ─────────────────────────────────────────────────────────────
    cmds += box(L, 192, R - L, 58, SURFACE2, LILAC)
    cmds += [t(L + 12, 232, 10, "Ready for independent review?", font="F2", color=GOLD)]
    cmds += [t(L + 12, 216, 9, "Request a third-party independent behavioral safety evaluation.", color=TEXT)]
    cmds += [t(L + 12, 202, 8, "Intake: https://ikwe.ai/intake   |   Full sample: https://ikwe.ai/reports/ikwe-sample-report-public.html", color=LILAC_BR)]

    # ── Footer ───────────────────────────────────────────────────────────────
    cmds += hline(L, R, 52, BORDER)
    cmds += [t(L, 40, 7, "Ikwe.ai  \u00b7  Independent behavioral safety evaluation  \u00b7  Public sample excerpt", color=SUBTLE)]
    cmds += [t(R - 44, 40, 7, "Page 1", color=SUBTLE)]

    # ── Assemble PDF ─────────────────────────────────────────────────────────
    objects = []

    def add(obj: bytes) -> int:
        objects.append(obj)
        return len(objects)

    catalog = add(b"<< >>")
    pages   = add(b"<< >>")
    font_r  = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    font_b  = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
    content = add(stream(cmds))
    page    = add((
        f"<< /Type /Page /Parent {pages} 0 R /MediaBox [0 0 {W} {H}] "
        f"/Resources << /Font << /F1 {font_r} 0 R /F2 {font_b} 0 R >> >> "
        f"/Contents {content} 0 R >>"
    ).encode("ascii"))

    objects[pages - 1]   = f"<< /Type /Pages /Kids [{page} 0 R] /Count 1 >>".encode("ascii")
    objects[catalog - 1] = f"<< /Type /Catalog /Pages {pages} 0 R >>".encode("ascii")

    out = b"%PDF-1.7\n%\xe2\xe3\xcf\xd3\n"
    offsets = [0]
    for i, obj in enumerate(objects, start=1):
        offsets.append(len(out))
        out += f"{i} 0 obj\n".encode("ascii") + obj + b"\nendobj\n"

    xref = len(out)
    out += f"xref\n0 {len(objects) + 1}\n".encode("ascii")
    out += b"0000000000 65535 f \n"
    for off in offsets[1:]:
        out += f"{off:010d} 00000 n \n".encode("ascii")

    out += f"trailer\n<< /Size {len(objects) + 1} /Root {catalog} 0 R >>\nstartxref\n{xref}\n%%EOF\n".encode("ascii")
    path.write_bytes(out)


if __name__ == "__main__":
    out = Path("public/reports/ikwe-sample-excerpt-one-page.pdf")
    out.parent.mkdir(parents=True, exist_ok=True)
    build_pdf(out)
    print(f"Wrote {out}")
