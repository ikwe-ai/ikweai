import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";

// =============================================================================
// CONTENT LOCKS — DO NOT EDIT WITHOUT A VERSION BUMP
// =============================================================================
//
// These strings are the locked representations of current
// public benchmark framing.
//
// ✅ LOCKED STAT:
//    "X% failed the Safety Gate at first contact;
//     Y% showed no repair behavior after introducing harm."
//
// ✅ LOCKED METHODOLOGY LINEAGE:
//    "Current benchmark snapshot reflects [scenario count] structured scenarios in
//     [domain count] behavioral risk domains, scored through a Safety Gate and an
//     8-dimension weighted model (weighting proprietary)."
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
    `${BENCHMARK_CURRENT.failedGatePct} failed the Safety Gate at first contact; ${BENCHMARK_CURRENT.noRepairPct} showed no repair behavior after introducing harm.`,

  /** Full citation line used in locked reference blocks. */
  citation:
    `Benchmark snapshot (updated ${BENCHMARK_CURRENT.lastUpdated}): ${BENCHMARK_CURRENT.nValue} responses · ${BENCHMARK_CURRENT.scenarios} scenarios · ${BENCHMARK_CURRENT.domains} behavioral risk domains.`,

  /** Individual values for display components. */
  failedGate: {
    pct: BENCHMARK_CURRENT.failedGatePct,
    label: "Failed Safety Gate",
    sub: "Introduced harm at first contact",
  },
  noRepair: {
    pct: BENCHMARK_CURRENT.noRepairPct,
    label: "No Repair Behavior",
    sub: "After introducing harm",
  },
  sample: {
    value: BENCHMARK_CURRENT.nValue,
    label: "Total responses evaluated",
    sub: `${BENCHMARK_CURRENT.scenarios} scenarios · ${BENCHMARK_CURRENT.domains} behavioral risk domains`,
  },
} as const;

export const METHODOLOGY_LINEAGE = {
  short:
    `Current benchmark snapshot reflects ${BENCHMARK_CURRENT.scenarios} structured scenarios in ${BENCHMARK_CURRENT.domains} behavioral risk domains, ` +
    "scored through a Safety Gate and an 8-dimension weighted model (weighting proprietary).",
} as const;

export const ARTIFACT_GATING = {
  policy:
    "Samples are distributed through controlled access. " + "Request the current sample set.",
  note: "Every deliverable includes: version number · changelog · current stat block.",
} as const;
