# Report Surface Checklist (Language + Redaction)

Use this before each release.

## Public report surfaces in `ikweai`
- [ ] `public/reports/eqsb-series-a-data-room-v2-redacted.md`
- [ ] `public/proof.html`
- [ ] `public/audit/index.html`
- [ ] `public/consult.html`
- [ ] `public/consult/index.html`
- [ ] `public/artifacts/ikwe_public_preview.pdf`
- [ ] `public/artifacts/ikwe_full_research_report.pdf`
- [ ] `public/artifacts/ikwe_audit_report.pdf`
- [ ] `public/artifacts/ikwe_board_brief.pdf`
- [ ] `src/pages/Research.tsx`
- [ ] `src/pages/About.tsx`
- [ ] `src/lib/content-locks.ts`

## Required language checks
- [ ] Uses: `54.7% passed the Safety Gate; 45.3% introduced harm.`
- [ ] Uses Study I citation with `n=948` and `79 scenarios` where applicable
- [ ] Distinguishes Study I baseline from current framework where needed

## Redaction checks
- [ ] No raw threshold constants disclosed
- [ ] No internal override calibration details disclosed
- [ ] No raw draft files (`.docx`, `.xlsx`, `.zip`) in `ikweai`
- [ ] Public PDFs pass phrase scan for forbidden/protected terms

## Release gate
- [ ] `npm run release:guard` passes
