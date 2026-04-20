# Canonical Language — EQSB Public Artifacts

Effective date: 2026-02-20

## Approved baseline statement
Use this exact framing in public materials:

> 54.7% passed the Safety Gate; 45.3% introduced harm.

## Approved citation line

> Study I (EQ Safety Benchmark, 2024–2025): n=948 responses · 79 scenarios.

## Approved methodology attribution

> The 54.7% finding is from Study I (2024–2025). Current EQSB evaluations use an updated Safety Gate and weighted dimensional scoring.

## Repo boundary statement

> Raw source artifacts are stored in the research repository. Public artifacts in ikweai are redacted and release-checked.

## Language architecture
- Public site: canonical term (fixed) + plain-language hover clarification.
- Internal dashboard and evaluator materials: canonical term only.
- Hover text must clarify, not expand or reinterpret meaning.

## Canonical Language Table
| Canonical Term | Public Description | Hover Text | Internal Notes |
| --- | --- | --- | --- |
| Safety Gate | Binary pass/fail control at first contact, applied against defined severe-risk violations. | Did the first response pass or fail the defined severe-risk safety checks? | Internal rubric includes violation reason codes and adjudication guidance. |
| Prohibited | Explicitly disallowed response behavior categories under the benchmark policy. | Did the response include behavior that is explicitly disallowed by policy? | Maps to reason-code taxonomy and internal enforcement logic. |
| Dimensional Scoring | Weighted scoring across defined quality dimensions after gate evaluation. | How strong was response quality across the defined dimensions after gate review? | Dimension rubric text and scoring mechanics are internal-only. |
| Severity Cap | A cap that limits maximum score output when severe-risk conditions are present. | When severe-risk conditions appear, how much can the final score be limited? | Cap thresholds and constants are protected implementation details. |
| Catastrophic Failure | Binary classification for highest-risk failure outcomes under defined criteria. | Did the response trigger the highest-risk failure classification? | Exact criteria and calibration data are internal-only. |
| PASS_QUALITY | Classification applied to gate-passing responses that enter quality scoring. | This label means the response passed the gate and is scored for quality. | Used in internal result routing and reporting views. |
| FAIL_DIAGNOSTIC | Classification applied to gate-failing responses kept for diagnostic analysis. | This label means the response failed the gate and is retained for diagnostics. | Used for remediation analysis and failure tracking. |
| Synthetic Scenario Monitoring | Monitoring process using synthetic scenarios to detect behavioral drift over time. | Are controlled synthetic scenarios showing drift in model behavior over time? | Scenario pool, prompt mechanics, and drift heuristics are internal-only. |
| Endpoint | The specific model interface and version instance evaluated in a run. | Which exact model endpoint/version was evaluated in this run? | Endpoint mapping and environment metadata are retained internally. |
| SSF | Scenario Safety Framework taxonomy used to classify scenarios and risk vectors. | Which scenario and risk pattern category did this case belong to? | Legacy and current mappings are retained in internal research artifacts. |
| Version Lock | Governance control that freezes released metrics and language to a declared version. | Once released, are metrics and wording locked to a specific version? | Linked to release IDs, changelogs, and artifact hash records. |
| Override Logic | Predefined rule path that changes interpretation when specific conditions are met. | Did a predefined override rule adjust how the result was interpreted? | Override triggers, thresholds, and reason trees are protected. |
| Composite Score | Final aggregate score from weighted dimensions with applicable caps and rules. | What is the final combined score after weighting and governance rules are applied? | Aggregation internals and tie-break behavior are not public. |

## Forbidden framing examples
- "54.7% introduced emotional risk"
- "54.7% failed"
- "54.7% flagged"
- "Certified Safe"
- "Ensures compliance"
- "Prevents harm"
- "Guarantees safety"
- "AI safety standard"
