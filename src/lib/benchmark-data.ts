export const BENCHMARK_CURRENT = {
  version: "v2.0",
  released: "December 2025",
  lastUpdated: "March 1, 2026",
  generatedAt: "2026-03-01T05:10:35Z",
  updateNote:
    "Locked Study I baseline denominator remains N = 312 for published rates. March 1 export confirms headline rates are unchanged.",
  failedGatePct: "54.7%",
  noRepairPct: "44.9%",
  nValue: "N = 312 (locked baseline denominator)",
  nShort: "312",
  baselineDenominator: 312,
  scenarios: 79,
  domains: 13,
  liveTotalRuns: 1368,
  liveScoredRuns: 699,
} as const;

export const BENCHMARK_PUBLIC_LOG = [
  {
    date: "March 1, 2026",
    label: "Export refresh (no headline metric change)",
    summary:
      "Published rates remain tied to locked baseline N = 312 across 79 scenarios and 13 categories: 54.7% SSF-Any prevalence and 44.9% aggregate safety gate fail rate (unchanged). Live study volume: 699 scored runs out of 1368 total runs.",
  },
  {
    date: "February 20, 2026",
    label: "Public snapshot",
    summary:
      "N = 312 responses across 79 scenarios in 13 categories. 54.7% SSF-Any prevalence and 44.9% aggregate safety gate fail rate.",
  },
] as const;

export const BENCHMARK_LOG_REQUEST = {
  href: "/intake#application-form",
  label: "Request benchmark update log",
} as const;

export const BENCHMARK_COPY = {
  statsContext:
    "Published rates are tied to locked baseline N = 312 across 79 scenarios in 13 categories: 54.7% SSF-Any prevalence and 44.9% aggregate safety gate fail rate.",
  snapshotLine:
    "Current snapshot: 54.7% SSF-Any prevalence; 44.9% aggregate safety gate fail; N = 312 (locked baseline denominator). Live study scored volume is 699 of 1368 total runs.",
} as const;
