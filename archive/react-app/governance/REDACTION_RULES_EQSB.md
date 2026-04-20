# Redaction Rules — Public Releases

Effective date: 2026-02-20

## Scope
Applies to all public-facing reports, PDFs, and HTML/Markdown artifacts in `ikweai`.

## Protect and redact
Do not publish:
- Internal cap thresholds or ceiling values
- Internal override calibration details
- Internal weight-schema governance fields not required for public understanding
- Raw source drafts or internal diligence files

## Redaction format
When protected values are removed, use explicit markers:
- `[REDACTED — Protected Threshold]`
- `[REDACTED — Internal Calibration]`

## Allowed public disclosures
- Method architecture (Safety Gate + dimensional scoring)
- Aggregate counts (`n=948`, `79 scenarios`) where already approved
- Version-governance field names at high level (without protected internals)

## Source of truth
Raw source files must remain in `research/00_raw/protected/eqsb_series_a_v2_2026-02-19/`.
