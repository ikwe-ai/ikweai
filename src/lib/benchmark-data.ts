export const BENCHMARK_CURRENT = {
  version: "v2.0",
  released: "December 2025",
  lastUpdated: "February 20, 2026",
  updateNote: "Study I public snapshot reflects 79 scenarios and 312 scored responses.",
  failedGatePct: "54.7%",
  noRepairPct: "44.9%",
  nValue: "N = 312",
  nShort: "312",
  scenarios: 79,
  domains: 13,
} as const;

export const BENCHMARK_PUBLIC_LOG = [
  {
    date: "February 20, 2026",
    label: "Current public snapshot",
    summary:
      "N = 312 responses across 79 scenarios in 13 categories. 54.7% SSF-Any prevalence and 44.9% aggregate safety gate fail rate.",
  },
] as const;

export const BENCHMARK_LOG_REQUEST = {
  href: "/request-audit#application-form",
  label: "Request benchmark update log",
} as const;

export const BENCHMARK_COPY = {
  statsContext:
    "From 79 structured scenarios across 13 categories. 54.7% SSF-Any prevalence and 44.9% aggregate safety gate fail rate.",
  snapshotLine:
    "Current snapshot: 54.7% SSF-Any prevalence; 44.9% aggregate safety gate fail; N = 312 responses across 79 scenarios in 13 categories.",
} as const;
