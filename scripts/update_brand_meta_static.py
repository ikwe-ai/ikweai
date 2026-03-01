#!/usr/bin/env python3
from pathlib import Path

FILES = [
    Path("404.html"),
    Path("emotional-ai-high-trust-environments.html"),
    Path("ikwe-sample-report-public.html"),
    Path("privacy.html"),
    Path("terms.html"),
    Path("research-access-terms.html"),
    Path("public/privacy.html"),
    Path("public/terms.html"),
    Path("public/research-access-terms.html"),
    Path("public/reports/ikwe-sample-report-public.html"),
    Path("public/reports/ikwe-sample-excerpt.html"),
]

CANONICAL = {
    "404.html": "https://ikwe.ai/404",
    "emotional-ai-high-trust-environments.html": "https://ikwe.ai/research/writings/emotional-ai-high-trust-environments",
    "ikwe-sample-report-public.html": "https://ikwe.ai/reports/ikwe-sample-report-public.html",
    "public/reports/ikwe-sample-report-public.html": "https://ikwe.ai/reports/ikwe-sample-report-public.html",
    "public/reports/ikwe-sample-excerpt.html": "https://ikwe.ai/reports/ikwe-sample-excerpt.html",
}

ICON_BLOCK = (
    '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n'
    '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n'
    '<link rel="manifest" href="/site.webmanifest">\n'
)

def ensure_once(text: str, needle: str, insertion: str, after: str) -> str:
    if needle in text:
        return text
    idx = text.find(after)
    if idx == -1:
        return text
    idx_end = idx + len(after)
    return text[:idx_end] + "\n" + insertion + text[idx_end:]


def ensure_canonical(text: str, url: str) -> str:
    if 'rel="canonical"' in text:
        # Replace existing canonical href only
        import re
        return re.sub(r'<link rel="canonical" href="[^"]*"\s*/?>', f'<link rel="canonical" href="{url}">', text)
    marker = '<meta name="viewport"'
    pos = text.find(marker)
    if pos == -1:
        return text
    line_end = text.find('>', pos)
    if line_end == -1:
        return text
    return text[:line_end + 1] + f"\n<link rel=\"canonical\" href=\"{url}\">" + text[line_end + 1:]


def update_file(path: Path) -> None:
    if not path.exists():
        return

    text = path.read_text()

    # theme color
    if 'name="theme-color"' not in text:
        text = ensure_once(text, 'name="theme-color"', '<meta name="theme-color" content="#141218">', '<meta name="viewport" content="width=device-width, initial-scale=1.0">')
        text = ensure_once(text, 'name="theme-color"', '<meta name="theme-color" content="#141218">', '<meta name="viewport" content="width=device-width, initial-scale=1">')

    # icon block
    if 'favicon-32x32.png' not in text:
        for anchor in [
            '<meta name="description"',
            '<link rel="canonical"',
            '<meta name="theme-color"',
        ]:
            pos = text.find(anchor)
            if pos != -1:
                line_end = text.find('>', pos)
                if line_end != -1:
                    text = text[:line_end + 1] + "\n" + ICON_BLOCK + text[line_end + 1:]
                    break

    # canonical for pages missing/legacy
    key = str(path)
    if key in CANONICAL:
        text = ensure_canonical(text, CANONICAL[key])

    # standardize CTA links in static pages
    text = text.replace('/request-audit#application-form', '/intake#application-form')
    text = text.replace('/inquiry', '/intake')

    # remove obsolete internal nav css if present in root sample copy
    text = text.replace('.nav-link.internal { border-color: rgba(61,214,140,.25); background: rgba(61,214,140,.06); color: #a8f0cc; }\n', '')
    text = text.replace('.nav-link.signout { border-color: rgba(255,80,80,.25); background: rgba(255,80,80,.06); color: #f88; }\n', '')

    path.write_text(text)


def main() -> None:
    for p in FILES:
        update_file(p)


if __name__ == "__main__":
    main()
