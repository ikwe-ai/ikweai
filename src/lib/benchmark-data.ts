export const BENCHMARK_CURRENT = {
  version: "v2.0",
  released: "December 2025",
  lastUpdated: "March 1, 2026",
  generatedAt: "2026-03-01T05:10:35Z",
  updateNote:
    "Published rates are tied to the locked Study I baseline sample. Detailed run-volume logs are available on request.",
  failedGatePct: "54.7%",
  noRepairPct: "44.9%",
  nValue: "N = 312 (baseline sample)",
  nShort: "312",
  baselineDenominator: 312,
  scenarios: 79,
  domains: 13,
} as const;

export const BENCHMARK_PUBLIC_LOG = [
  {
    date: "March 1, 2026",
    label: "Export refresh (no headline metric change)",
    summary:
      "Published baseline rates are unchanged: 54.7% SSF-Any prevalence and 44.9% aggregate safety gate fail, tied to N = 312 across 79 scenarios in 13 categories.",
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
    "Current snapshot: 54.7% SSF-Any prevalence; 44.9% aggregate safety gate fail; N = 312 (baseline sample). Detailed run-volume logs are available on request.",
} as const;
