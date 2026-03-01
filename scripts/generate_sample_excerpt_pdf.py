#!/usr/bin/env python3
"""Generate a clean one-page public sample excerpt PDF."""

from pathlib import Path

W, H = 612, 792
L, R = 50, 562


def esc(text: str) -> str:
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def t(x: int, y: int, size: int, text: str) -> str:
    return f"BT /F1 {size} Tf 1 0 0 1 {x} {y} Tm ({esc(text)}) Tj ET"


def stream(cmds: list[str]) -> bytes:
    data = "\n".join(cmds).encode("utf-8")
    return f"<< /Length {len(data)} >>\nstream\n".encode("ascii") + data + b"\nendstream"


def build_pdf(path: Path) -> None:
    cmds = [
        "0.09 0.07 0.17 rg",
        "0.82 0.73 0.98 RG",
        t(L, 758, 11, "EQ Safety Benchmark v2.0"),
        t(L, 734, 24, "1-Page Executive Excerpt"),
        t(L, 714, 10, "Public sample deliverable • proprietary format"),
        "0.78 0.68 0.95 RG",
        f"{L} 704 m {R} 704 l S",

        t(L, 678, 11, "This one-page excerpt shows format and structure only. Content is illustrative and redacted."),

        # KPI cards
        "0.93 0.92 0.99 RG", f"{L} 606 160 58 re S",
        t(L + 12, 642, 20, "73%"),
        t(L + 12, 624, 9, "Illustrative overall safety score"),

        "0.93 0.92 0.99 RG", f"{L+176} 606 160 58 re S",
        t(L + 188, 642, 20, "Tier II"),
        t(L + 188, 624, 9, "Illustrative risk classification"),

        "0.93 0.92 0.99 RG", f"{L+352} 606 160 58 re S",
        t(L + 364, 642, 20, "4"),
        t(L + 364, 624, 9, "Priority remediation controls"),

        # Executive summary block
        "0.92 0.9 0.99 RG", f"{L} 490 {R-L} 96 re S",
        t(L + 12, 567, 12, "Executive Summary"),
        t(L + 12, 547, 10, "Stable behavior appears in low-volatility interactions, while escalation pathways show"),
        t(L + 12, 533, 10, "higher interruption and routing risk. Current profile supports controlled rollout with"),
        t(L + 12, 519, 10, "remediation and re-test gates before broad deployment."),

        # Deliverables block
        "0.92 0.9 0.99 RG", f"{L} 336 {R-L} 140 re S",
        t(L + 12, 456, 12, "What Leadership Receives"),
        t(L + 12, 436, 10, "• Executive risk summary for board and procurement review"),
        t(L + 12, 422, 10, "• Severity classification with threshold language"),
        t(L + 12, 408, 10, "• Scenario findings appendix (engagement package)"),
        t(L + 12, 394, 10, "• Remediation roadmap and re-test recommendation"),

        # Boundary note
        "0.92 0.9 0.99 RG", f"{L} 252 {R-L} 68 re S",
        t(L + 12, 300, 12, "Boundary Note"),
        t(L + 12, 282, 10, "Not public: exact scenario text, rubric mechanics, client-identifying evidence, and"),
        t(L + 12, 268, 10, "organization-specific confidential findings."),

        t(L, 214, 10, "Ready for independent review? Request third-party independent behavioral safety evaluation."),
        t(L, 196, 10, "Intake: https://ikwe.ai/intake   |   Full sample report: https://ikwe.ai/sample-report"),

        "0.62 0.56 0.8 rg",
        t(L, 36, 8, "Ikwe.ai • Independent behavioral safety evaluation • Public sample excerpt"),
        t(R - 64, 36, 8, "Page 1"),
    ]

    # objects
    objects = []

    def add(obj: bytes) -> int:
      objects.append(obj)
      return len(objects)

    catalog = add(b"<< >>")
    pages = add(b"<< >>")
    font = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    content = add(stream(cmds))
    page = add(
        f"<< /Type /Page /Parent {pages} 0 R /MediaBox [0 0 {W} {H}] /Resources << /Font << /F1 {font} 0 R >> >> /Contents {content} 0 R >>".encode("ascii")
    )

    objects[pages - 1] = f"<< /Type /Pages /Kids [{page} 0 R] /Count 1 >>".encode("ascii")
    objects[catalog - 1] = f"<< /Type /Catalog /Pages {pages} 0 R >>".encode("ascii")

    out = b"%PDF-1.7\n%\xe2\xe3\xcf\xd3\n"
    offsets = [0]
    for i, obj in enumerate(objects, start=1):
        offsets.append(len(out))
        out += f"{i} 0 obj\n".encode("ascii") + obj + b"\nendobj\n"

    xref = len(out)
    out += f"xref\n0 {len(objects)+1}\n".encode("ascii")
    out += b"0000000000 65535 f \n"
    for off in offsets[1:]:
        out += f"{off:010d} 00000 n \n".encode("ascii")

    out += f"trailer\n<< /Size {len(objects)+1} /Root {catalog} 0 R >>\nstartxref\n{xref}\n%%EOF\n".encode("ascii")
    path.write_bytes(out)


if __name__ == "__main__":
    out = Path("public/reports/ikwe-sample-excerpt-one-page.pdf")
    out.parent.mkdir(parents=True, exist_ok=True)
    build_pdf(out)
    print(f"Wrote {out}")
