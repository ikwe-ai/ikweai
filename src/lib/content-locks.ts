// =============================================================================
// CONTENT LOCKS — DO NOT EDIT WITHOUT A VERSION BUMP
// =============================================================================
//
// These strings are the locked representations of current
// public benchmark framing.
//
// ✅ LOCKED STAT:
//    "54.7% failed the Safety Gate at first contact;
//     43% showed no repair behavior after introducing harm."
//
// ✅ LOCKED METHODOLOGY LINEAGE:
//    "Current benchmark snapshot reflects 79 structured scenarios in 12 behavioral
//     risk domains, scored through a Safety Gate and an 8-dimension weighted model
//     (weighting proprietary)."
//
// ✅ LOCKED ARTIFACT GATING:
//    "Samples are distributed through controlled access.
//     Request the current sample set."
//
// EVERY ARTIFACT INCLUDES: version number · changelog · current stat block.
// =============================================================================

export const CANONICAL_STAT = {
  /** The primary locked framing for current benchmark positioning. */
  headline:
    "54.7% failed the Safety Gate at first contact; 43% showed no repair behavior after introducing harm.",

  /** Full citation line used in locked reference blocks. */
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
    "Samples are distributed through controlled access. " + "Request the current sample set.",
  note: "Every artifact includes: version number · changelog · current stat block.",
} as const;
