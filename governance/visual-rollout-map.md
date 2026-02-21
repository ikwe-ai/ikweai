# Ikwe.ai Visual Rollout Map

This map defines the first-pass visual target per page for the next image/graphic update cycle.
Use public-safe visuals only. Do not include client-specific, internal, or proprietary artifacts.

## Global rules
- Prioritize comprehension over decoration.
- Use dark, high-contrast assets that match the existing aurora palette.
- Keep labels factual and neutral.
- Prefer SVG/optimized WebP for diagrams and illustration assets.
- Include alt text for every non-decorative visual.

## Page map

| Route | Top visual target | Supporting visual target | Caption style |
|---|---|---|---|
| `/` | Doom loop cycle diagram (stage 1 interruption emphasis) | Benchmark pathway strip | Operational, not marketing |
| `/research` | Benchmark evidence map (N, scenarios, domains) | Phase 1/2 result chart panel | Data framing |
| `/eq-safety-benchmark` | 3-phase process architecture | Public vs engagement boundary graphic | Method summary |
| `/audit` | Audit pathway timeline | Deliverable stack graphic | Process + governance |
| `/deliverables` | Deliverables matrix | Access boundary flow | Transparency boundary |
| `/trust` | Data handling boundary diagram | Confidentiality control stack | Policy clarity |
| `/technology/architecture` | System control map | Monitoring + escalation flow | Technical plain language |
| `/about` | Independence posture visual | Governance discipline card graphic | Institutional posture |
| `/request-audit` | Intake journey map | Review timeline graphic | Submission clarity |
| `/consult` | Scope triage visual | Route-to-audit decision path | Routing guidance |
| `/research/case-studies` | Case trajectory map template | Intervention/outcome comparison panel | Aggregate case framing |
| `/research/writings` | Research canon visual index | Writing type legend | Reading guidance |
| `/research/press` | Publication timeline | Update category key | Release record |
| `/ip-notice` | IP boundary graphic | Permission request flow | Legal plain language |

## Component targets already in place
- `SummaryHero` now renders a reusable `HeroVisualCard` on desktop rail and mobile top-block.
- Homepage now includes a top visual guide block under primary CTA.

## Next implementation order
1. Create reusable SVG diagram templates in `public/graphics/`.
2. Replace hero visual placeholders page-by-page using route map above.
3. Add final alt text and caption QA pass.
4. Re-run `npm run release:guard` and visual regression screenshots.
