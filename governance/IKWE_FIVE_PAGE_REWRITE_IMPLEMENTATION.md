# Ikwe Five-Page Rewrite - Implementation Brief

Date: 2026-02-28
Purpose: Single source of truth for Codex implementation across Homepage, Benchmark, Research, Deliverables, and Audit pages.

## 1) Dimension Naming Decision (Approved Public Language)

Use these names on all public-facing pages. Do not publish internal technical names.

| Internal Technical Name | Public Dimension Name | Public One-Line Description |
|---|---|---|
| Detection & Triage | Harm Recognition | Does the system recognize when a user is in a vulnerable or high-risk state? |
| Regulation Before Reasoning | Emotional Stability Response | Does the system stay emotionally stable before it analyzes or advises? |
| Validation Without Distortion | Validation Accuracy | Does the system acknowledge user experience without reinforcing harmful distortion? |
| Agency Preservation | User Autonomy Integrity | Does the system preserve user decision-making capacity and avoid dependency pressure? |
| Loop Interruption | Escalation Interruption | Does the system interrupt harmful trajectories before they compound? |
| Pattern Externalization | Behavioral Pattern Clarity | Does the system help users identify harmful patterns clearly and safely? |
| Practical Containment | Risk Containment | Does the system provide concrete next steps that reduce immediate risk? |
| Safety Routing | Crisis Routing Fidelity | Does the system route users to appropriate resources when risk signals rise? |

### Public naming rule
- Public copy names what can go wrong, not internal scoring mechanics.
- Public copy must stay board-readable and citation-safe.

## 2) Public vs Gated Split (Approved)

This split is mandatory across site and documents.

### Public (site, benchmark page, pressable materials)
- Eight public dimension names (above)
- One-line public descriptions
- Two-layer framework concept (Safety Gate + Dimensional Scoring)
- Aggregate benchmark statistics and update date
- Dataset scope at benchmark level (N, scenarios, domains)
- Classification concept language (high-level only)
- Independence and governance positioning

### Gated (technical spec, engagement-only materials)
- Dimension weights and weighting logic
- Composite score formula and severity cap logic
- Rubric thresholds and judge instructions
- SSF taxonomy detail and code mappings
- Safety Gate violation taxonomy details
- Scenario IDs, exact prompts, and internal mappings
- Organization-specific diagnostic outputs

## 3) Page Architecture (Five-Page Model)

### Homepage
Role: Category thesis.
- Lead with: "Recognition is not safety. Measurement is."
- Establish the standard and category truth.
- Keep methodology references brief and directional.
- Keep stats as evidence, not opening argument.

### Benchmark Page (new canonical public framework page)
Role: Public framework ownership.
- Publish the eight approved public dimensions with one-line descriptions.
- Explain Safety Gate + Dimensional Scoring in plain language.
- Show benchmark-level, non-client-specific outcomes.
- Link to Research (evidence) and Audit (engagement path).

### Research Page
Role: Evidence layer.
- Present findings, sample scope, update date, and interpretation.
- Use only public dimension names.
- Keep language benchmark-level and non-client-specific.

### Deliverables Page
Role: Governance output clarity.
- Show what organizations receive and why it matters.
- Keep public/private boundary explicit and singular.
- Confirm that detailed technical artifacts are gated by engagement.

### Audit & Validation Page
Role: Commercial pathway.
- Four-stage path:
  1. Diagnostic Audit
  2. Implementation Support
  3. Active Monitoring
  4. Ikwe Certification (coming)
- Certification is destination language only (no premature product claims).
- Public page avoids hard-pricing publication; commercial terms are scoped via intake.

## 4) Language Guardrails

- Use: behavioral safety, behavioral risk, governance-grade, documented baseline, drift, due diligence.
- Do not use in public copy: internal taxonomy terms, formula mechanics, threshold internals, proprietary calculation details.
- Keep tone category-authoring and independent, not alarmist.
- Write for technical and governance audiences simultaneously.

## 5) Codex Implementation Checklist

- Replace all internal-style dimension labels in public pages with approved public names.
- Ensure one consistent public/gated boundary statement per page (no repetition).
- Confirm benchmark references are aggregate-only and non-client-specific.
- Confirm no internal scoring mechanics are visible on public pages.
- Keep nav architecture aligned:
  - Homepage = thesis
  - Benchmark = framework
  - Research = evidence
  - Deliverables = outputs and boundary
  - Audit & Validation = engagement path

## 6) Canonical Decision Summary

- Hybrid ownership model: approved.
- "Recognition is not safety" thesis: approved.
- Two-tier naming model (public names + gated technical names): approved.
- Public benchmark + gated methodology implementation: approved.
