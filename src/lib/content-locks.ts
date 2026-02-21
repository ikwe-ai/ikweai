// =============================================================================
// CONTENT LOCKS — DO NOT EDIT WITHOUT A VERSION BUMP
// =============================================================================
//
// These strings are the canonical, copy-locked representations of current
// public benchmark framing.
//
// ✅ CANONICAL STAT:
//    "54.7% failed the Safety Gate at first contact;
//     43% showed no repair behavior after introducing harm."
//
// ✅ CANONICAL METHODOLOGY LINEAGE:
//    "Current benchmark snapshot reflects 79 structured scenarios in 12 behavioral
//     risk domains, scored through a Safety Gate and an 8-dimension weighted model
//     (weighting proprietary)."
//
// ✅ CANONICAL ARTIFACT GATING:
//    "Samples and PDFs are distributed as version-controlled releases to ensure accuracy.
//     Request the current sample pack."
//
// EVERY ARTIFACT INCLUDES: version number · changelog · canonical stat block.
// =============================================================================

export const CANONICAL_STAT = {
  /** The primary locked framing for current benchmark positioning. */
  headline:
    "54.7% failed the Safety Gate at first contact; 43% showed no repair behavior after introducing harm.",

  /** Full citation line used in canonical reference blocks. */
  citation:
    "Benchmark snapshot (updated February 20, 2026): N = 21,000+ responses · 79 scenarios · 12 behavioral risk domains.",

  /** Individual values for display components. */
  failedGate: {
    pct: "54.7%",
    label: "Failed Safety Gate",
    sub: "Introduced harm at first contact",
  },
  noRepair: {
    pct: "43%",
    label: "No Repair Behavior",
    sub: "After introducing harm",
  },
  sample: {
    value: "N = 21,000+",
    label: "Total responses evaluated",
    sub: "79 scenarios · 12 behavioral risk domains",
  },
} as const;

export const METHODOLOGY_LINEAGE = {
  short:
    "Current benchmark snapshot reflects 79 structured scenarios in 12 behavioral risk domains, " +
    "scored through a Safety Gate and an 8-dimension weighted model (weighting proprietary).",
} as const;

export const ARTIFACT_GATING = {
  policy:
    "Samples and PDFs are distributed as version-controlled releases to ensure accuracy. " +
    "Request the current sample pack.",
  note: "Every artifact includes: version number · changelog · canonical stat block.",
} as const;
