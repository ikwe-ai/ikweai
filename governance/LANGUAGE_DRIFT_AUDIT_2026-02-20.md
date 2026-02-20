# Language Drift Audit — 2026-02-20

## Scope
- `/Users/stephaniestranko/Documents/GitHub/ikweai` (live repo)
- `/Users/stephaniestranko/Documents/GitHub/ikwe-site` (legacy/static site repo)
- `/Users/stephaniestranko/Documents/GitHub/research` (raw/internal research repo)
- `/Users/stephaniestranko/Documents/GitHub/ikwe` (legacy repo)
- `/Users/stephaniestranko/Documents/GitHub/IKWEmirror` (mirror candidate for unified repo)

## Audit checks
- Forbidden guarantee language: `Certified Safe`, `Ensures compliance`, `Prevents harm`, `Guarantees safety`, `AI safety standard`, `certifiable`
- Inverted/legacy framing checks: `54.7% introduced emotional risk`, `54.7% failed`, `54.7% flagged`
- Canonical framing presence: `54.7% passed the Safety Gate; 45.3% introduced harm`
- Sensitive implementation markers in public surfaces

## Findings
### `ikweai` (live)
- No forbidden guarantee language in public pages after current update.
- Canonical framing present and locked in `/Users/stephaniestranko/Documents/GitHub/ikweai/src/lib/content-locks.ts`.
- Release guard passed on 2026-02-20.
- Expected hits for forbidden phrases exist only in governance docs as explicit "do not use" references:
  - `/Users/stephaniestranko/Documents/GitHub/ikweai/governance/CANONICAL_LANGUAGE_EQSB.md`
  - `/Users/stephaniestranko/Documents/GitHub/ikweai/governance/REPORT_SURFACE_CHECKLIST.md`

### `ikwe-site` (legacy/static)
- Canonical framing appears in active content (for example):
  - `/Users/stephaniestranko/Documents/GitHub/ikwe-site/about.html:252`
- Legacy/archive drift still exists and includes deprecated framing:
  - `/Users/stephaniestranko/Documents/GitHub/ikwe-site/archive/emotional-safety-gap.html:706`
  - `/Users/stephaniestranko/Documents/GitHub/ikwe-site/archive/docs/IKWE_SITE_UPDATE_PROMPT.md:206`
  - `/Users/stephaniestranko/Documents/GitHub/ikwe-site/archive/html/ikwe_preview_page.html:113`
  - `/Users/stephaniestranko/Documents/GitHub/ikwe-site/archive/html/ikwe_preview_branded.html:112`
  - `/Users/stephaniestranko/Documents/GitHub/ikwe-site/index (18).html:7`
  - `/Users/stephaniestranko/Documents/GitHub/ikwe-site/index (18).html:779`
  - `/Users/stephaniestranko/Documents/GitHub/ikwe-site/index copy 2.html:860`
- Historical correction documents intentionally quote deprecated wording for reconciliation:
  - `/Users/stephaniestranko/Documents/GitHub/ikwe-site/PDF_AND_EXTERNAL_CORRECTION_NOTICE_2026-02-18.md`
  - `/Users/stephaniestranko/Documents/GitHub/ikwe-site/DATA_ACCURACY_AUDIT_2026-02-18.md`

### `research` (raw/internal)
- Sensitive terms and implementation details are present in protected raw/internal artifacts, as expected:
  - `/Users/stephaniestranko/Documents/GitHub/research/00_raw/protected/eqsb_series_a_v2_2026-02-19/EQ_Safety_Benchmark_v1_0_Technical_Specification_Ikwe_ai_source.html`
  - `/Users/stephaniestranko/Documents/GitHub/research/eqsb_platform/backend/app.py`
  - `/Users/stephaniestranko/Documents/GitHub/research/eqsb_platform/frontend/index.html`
- `PASS_QUALITY` and `FAIL_DIAGNOSTIC` appear in internal platform code and docs, which is expected for internal operation.

### `ikwe` (legacy)
- Deprecated/inverted phrasing appears only as forbidden examples in comments:
  - `/Users/stephaniestranko/Documents/GitHub/ikwe/src/lib/content-locks.ts:13`
  - `/Users/stephaniestranko/Documents/GitHub/ikwe/src/lib/content-locks.ts:14`

### `IKWEmirror`
- No matches for forbidden guarantee language or inverted 54.7% framing in scanned text surfaces.

## Decision record
- Live publication source remains `/Users/stephaniestranko/Documents/GitHub/ikweai`.
- Raw and sensitive materials remain in `/Users/stephaniestranko/Documents/GitHub/research`.
