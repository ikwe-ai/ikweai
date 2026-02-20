export const CANONICAL_TERMS = {
  "Safety Gate": {
    canonicalLabel: "Safety Gate",
    publicDescription:
      "Binary pass/fail control at first contact, applied against defined severe-risk violations.",
    hoverText:
      "Did the first response pass or fail the defined severe-risk safety checks?",
    internalNotes:
      "Internal rubric includes violation reason codes and adjudication guidance. Not public.",
  },
  Prohibited: {
    canonicalLabel: "Prohibited",
    publicDescription:
      "Explicitly disallowed response behavior categories under the benchmark policy.",
    hoverText:
      "Did the response include behavior that is explicitly disallowed by policy?",
    internalNotes:
      "Maps to reason-code taxonomy and internal enforcement logic. Not public.",
  },
  "Dimensional Scoring": {
    canonicalLabel: "Dimensional Scoring",
    publicDescription:
      "Weighted scoring across defined quality dimensions after gate evaluation.",
    hoverText:
      "How strong was response quality across the defined dimensions after gate review?",
    internalNotes:
      "Dimension rubric text and scoring mechanics are internal-only.",
  },
  "Severity Cap": {
    canonicalLabel: "Severity Cap",
    publicDescription:
      "A cap that limits maximum score output when severe-risk conditions are present.",
    hoverText:
      "When severe-risk conditions appear, how much can the final score be limited?",
    internalNotes:
      "Cap thresholds and constants are protected implementation details.",
  },
  "Catastrophic Failure": {
    canonicalLabel: "Catastrophic Failure",
    publicDescription:
      "Binary classification for highest-risk failure outcomes under defined criteria.",
    hoverText:
      "Did the response trigger the highest-risk failure classification?",
    internalNotes:
      "Exact criteria and calibration data are internal-only.",
  },
  PASS_QUALITY: {
    canonicalLabel: "PASS_QUALITY",
    publicDescription:
      "Classification applied to gate-passing responses that enter quality scoring.",
    hoverText:
      "This label means the response passed the gate and is scored for quality.",
    internalNotes:
      "Used in internal result routing and reporting views.",
  },
  FAIL_DIAGNOSTIC: {
    canonicalLabel: "FAIL_DIAGNOSTIC",
    publicDescription:
      "Classification applied to gate-failing responses kept for diagnostic analysis.",
    hoverText:
      "This label means the response failed the gate and is retained for diagnostics.",
    internalNotes:
      "Used for remediation analysis and failure tracking.",
  },
  "Synthetic Scenario Monitoring": {
    canonicalLabel: "Synthetic Scenario Monitoring",
    publicDescription:
      "Monitoring process using synthetic scenarios to detect behavioral drift over time.",
    hoverText:
      "Are controlled synthetic scenarios showing drift in model behavior over time?",
    internalNotes:
      "Scenario pool, prompt mechanics, and drift heuristics are internal-only.",
  },
  Endpoint: {
    canonicalLabel: "Endpoint",
    publicDescription:
      "The specific model interface and version instance evaluated in a run.",
    hoverText:
      "Which exact model endpoint/version was evaluated in this run?",
    internalNotes:
      "Endpoint mapping and environment metadata are retained internally.",
  },
  SSF: {
    canonicalLabel: "SSF",
    publicDescription:
      "Scenario Safety Framework taxonomy used to classify scenarios and risk vectors.",
    hoverText:
      "Which scenario and risk pattern category did this case belong to?",
    internalNotes:
      "Legacy and current mappings are retained in internal research artifacts.",
  },
  "Version Lock": {
    canonicalLabel: "Version Lock",
    publicDescription:
      "Governance control that freezes released metrics and language to a declared version.",
    hoverText:
      "Once released, are metrics and wording locked to a specific version?",
    internalNotes:
      "Linked to release IDs, changelogs, and artifact hash records.",
  },
  "Override Logic": {
    canonicalLabel: "Override Logic",
    publicDescription:
      "Predefined rule path that changes interpretation when specific conditions are met.",
    hoverText:
      "Did a predefined override rule adjust how the result was interpreted?",
    internalNotes:
      "Override triggers, thresholds, and reason trees are protected.",
  },
  "Composite Score": {
    canonicalLabel: "Composite Score",
    publicDescription:
      "Final aggregate score from weighted dimensions with applicable caps and rules.",
    hoverText:
      "What is the final combined score after weighting and governance rules are applied?",
    internalNotes:
      "Aggregation internals and tie-break behavior are not public.",
  },
} as const;

export type CanonicalTermKey = keyof typeof CANONICAL_TERMS;

export const CANONICAL_TERM_ORDER: CanonicalTermKey[] = [
  "Safety Gate",
  "Prohibited",
  "Dimensional Scoring",
  "Severity Cap",
  "Catastrophic Failure",
  "PASS_QUALITY",
  "FAIL_DIAGNOSTIC",
  "Synthetic Scenario Monitoring",
  "Endpoint",
  "SSF",
  "Version Lock",
  "Override Logic",
  "Composite Score",
];
