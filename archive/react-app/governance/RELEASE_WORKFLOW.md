# Release Workflow (ikweai + research)

1. Draft/update from raw protected sources in `research`.
2. Create redacted public artifact in `ikweai/public/reports/`.
3. Run release guard:
   - `npm run release:guard`
4. If guard passes, proceed with normal build/deploy pipeline.

Mandatory boundary:
- `research` stores raw files and lock metadata.
- `ikweai` stores redacted/public files only.
