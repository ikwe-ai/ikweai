export const CANONICAL_TERMS = {
  "Safety Gate": {
    canonicalLabel: "Safety Gate",
    publicDescription:
      "Binary pass/fail control at first contact, applied against defined severe-risk violations.",
    hoverText:
      "Identifies categorical violations before dimensional scoring.",
  },
  Prohibited: {
    canonicalLabel: "Prohibited",
    publicDescription:
      "Explicitly disallowed response behavior categories under the benchmark policy.",
    hoverText:
      "Classification assigned when one or more Safety Gate violations are triggered.",
  },
  "Dimensional Scoring": {
    canonicalLabel: "Dimensional Scoring",
    publicDescription:
      "Weighted scoring across defined quality dimensions after gate evaluation.",
    hoverText:
      "Weighted evaluation across eight behavioral dimensions applied only to Safety Gate passes.",
  },
  "Severity Cap": {
    canonicalLabel: "Severity Cap",
    publicDescription:
      "A cap that limits maximum score output when severe-risk conditions are present.",
    hoverText:
      "Override rule that limits the composite score when critical risk dimensions fall below defined thresholds.",
  },
  "Catastrophic Failure": {
    canonicalLabel: "Catastrophic Failure",
    publicDescription:
      "Binary classification for highest-risk failure outcomes under defined criteria.",
    hoverText:
      "Unresolved harm amplification within a conversational trajectory.",
  },
  PASS_QUALITY: {
    canonicalLabel: "PASS_QUALITY",
    publicDescription:
      "Classification applied to gate-passing responses that enter quality scoring.",
    hoverText:
      "This label means the response passed the gate and is scored for quality.",
  },
  FAIL_DIAGNOSTIC: {
    canonicalLabel: "FAIL_DIAGNOSTIC",
    publicDescription:
      "Classification applied to gate-failing responses kept for diagnostic analysis.",
    hoverText:
      "This label means the response failed the gate and is retained for diagnostics.",
  },
  "Synthetic Scenario Monitoring": {
    canonicalLabel: "Synthetic Scenario Monitoring",
    publicDescription:
      "Monitoring process using synthetic scenarios to detect behavioral drift over time.",
    hoverText:
      "Scheduled re-execution of benchmark scenarios to detect behavioral drift over time.",
  },
  Endpoint: {
    canonicalLabel: "Endpoint",
    publicDescription:
      "The specific model interface and version instance evaluated in a run.",
    hoverText:
      "Specific API route or conversational surface evaluated as a unit of record.",
  },
  SSF: {
    canonicalLabel: "SSF",
    publicDescription:
      "Scenario Safety Framework taxonomy used to classify scenarios and risk vectors.",
    hoverText:
      "Taxonomy used to classify scenario type and risk vector.",
  },
  "Version Lock": {
    canonicalLabel: "Version Lock",
    publicDescription:
      "Governance control that freezes released metrics and language to a declared version.",
    hoverText:
      "Formal release discipline ensuring scoring logic does not change silently between evaluations.",
  },
  "Override Logic": {
    canonicalLabel: "Override Logic",
    publicDescription:
      "Predefined rule path that changes interpretation when specific conditions are met.",
    hoverText:
      "Predefined rule path that changes score interpretation when defined conditions are met.",
  },
  "Composite Score": {
    canonicalLabel: "Composite Score",
    publicDescription:
      "Final aggregate score from weighted dimensions with applicable caps and rules.",
    hoverText:
      "Final weighted aggregate after applicable caps and rule logic.",
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
