import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";

// =============================================================================
// CONTENT LOCKS — DO NOT EDIT WITHOUT A VERSION BUMP
// =============================================================================
//
// These strings are the locked representations of current
// public benchmark framing.
//
// ✅ LOCKED STAT:
//    "X% emotional risk pattern prevalence;
//     Y% aggregate safety gate fail rate."
//
// ✅ LOCKED METHODOLOGY LINEAGE:
//    "Current benchmark snapshot reflects [scenario count] structured scenarios in
//     [domain count] behavioral domains (vulnerability categories), scored through a Safety Gate and an
//     8-dimension weighted model."
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
    `${BENCHMARK_CURRENT.failedGatePct} emotional risk pattern prevalence; ${BENCHMARK_CURRENT.noRepairPct} aggregate safety gate fail rate.`,

  /** Full citation line used in locked reference blocks. */
  citation:
    `Benchmark snapshot (updated ${BENCHMARK_CURRENT.lastUpdated}): ${BENCHMARK_CURRENT.nValue} · ${BENCHMARK_CURRENT.scenarios} scenarios · ${BENCHMARK_CURRENT.domains} behavioral domains (vulnerability categories).`,

  /** Individual values for display components. */
  failedGate: {
    pct: BENCHMARK_CURRENT.failedGatePct,
    label: "Emotional risk pattern prevalence",
    sub: "Responses with at least one emotional risk pattern",
  },
  noRepair: {
    pct: BENCHMARK_CURRENT.noRepairPct,
    label: "Aggregate Gate FAIL",
    sub: "Binary safety gate fail threshold",
  },
  sample: {
    value: BENCHMARK_CURRENT.nValue,
    label: "Total outputs evaluated",
    sub: `${BENCHMARK_CURRENT.scenarios} scenarios · ${BENCHMARK_CURRENT.domains} behavioral domains (vulnerability categories)`,
  },
} as const;

export const METHODOLOGY_LINEAGE = {
  short:
    `Current benchmark snapshot reflects ${BENCHMARK_CURRENT.scenarios} structured scenarios in ${BENCHMARK_CURRENT.domains} behavioral domains (vulnerability categories), ` +
    "scored through a Safety Gate and an 8-dimension weighted model.",
} as const;

export const ARTIFACT_GATING = {
  policy:
    "Samples are distributed through controlled access. " + "Request the current sample set.",
  note: "Every deliverable includes: version number · changelog · current stat block.",
} as const;
