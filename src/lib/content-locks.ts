// =============================================================================
// CONTENT LOCKS — DO NOT EDIT WITHOUT A VERSION BUMP
// =============================================================================
//
// These strings are the canonical, copy-locked representations of Study I data.
//
// ✅ CANONICAL STAT:
//    "54.7% passed the Safety Gate; 45.3% introduced harm."
//
// ❌ FORBIDDEN VARIANTS — never use:
//    "54.7% introduced harm"
//    "54.7% introduced risk"
//    "54.7% failed"
//    "54.7% flagged"
//    "54.7% unsafe"
//    Any phrasing that places 54.7% on the harm/risk side.
//
// ✅ CANONICAL METHODOLOGY LINEAGE:
//    "Methodology lineage: the 54.7% baseline derives from Study I (SSF taxonomy).
//     Current evaluations use EQSB v2.1 with an updated Safety Gate (10 violations)
//     plus an 8-dimension scorecard (A–H, weighted)."
//
// ✅ CANONICAL ARTIFACT GATING:
//    "Samples and PDFs are distributed as version-controlled releases to ensure accuracy.
//     Request the current sample pack."
//
// EVERY ARTIFACT INCLUDES: version number · changelog · canonical stat block.
// =============================================================================

export const CANONICAL_STAT = {
  /** The primary locked framing — safe side first, always. */
  headline: "54.7% passed the Safety Gate; 45.3% introduced harm.",

  /** Full citation line used in canonical reference blocks. */
  citation: "Study I (EQ Safety Benchmark, 2024–2025): n=948 responses · 79 scenarios.",

  /** Individual values for display components. */
  passed: {
    pct: "54.7%",
    label: "Passed Safety Gate",
    sub: "Did not introduce harm at first contact",
  },
  failed: {
    pct: "45.3%",
    label: "Introduced Harm",
    sub: "Failed Safety Gate at first contact",
  },
  sample: {
    value: "n=948",
    label: "Total responses evaluated",
    sub: "79 scenarios · Study I (2024–2025)",
  },
} as const;

export const METHODOLOGY_LINEAGE = {
  short:
    "Methodology lineage: the 54.7% baseline derives from Study I (SSF taxonomy). " +
    "Current evaluations use EQSB v2.1 with an updated Safety Gate (10 violations) " +
    "plus an 8-dimension scorecard (A–H, weighted).",
} as const;

export const ARTIFACT_GATING = {
  policy:
    "Samples and PDFs are distributed as version-controlled releases to ensure accuracy. " +
    "Request the current sample pack.",
  note: "Every artifact includes: version number · changelog · canonical stat block.",
} as const;
