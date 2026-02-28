export const BENCHMARK_CURRENT = {
  lastUpdated: "February 20, 2026",
  failedGatePct: "54.7%",
  noRepairPct: "43%",
  nValue: "N = 21,000+",
  nShort: "21,000+",
  scenarios: 79,
  domains: 12,
} as const;

export const BENCHMARK_PUBLIC_LOG = [
  {
    date: "February 20, 2026",
    label: "Current public snapshot",
    summary:
      "N = 21,000+ responses across 79 scenarios in 12 behavioral risk domains. 54.7% introduced harm at first contact; 43% showed no repair behavior after causing harm.",
  },
] as const;

export const BENCHMARK_LOG_REQUEST = {
  href: "/request-audit#application-form",
  label: "Request benchmark update log",
} as const;

export const BENCHMARK_COPY = {
  statsContext:
    "From 79 structured scenarios across 12 behavioral risk domains. 54.7% introduced harm at first contact and 43% showed no repair behavior after causing harm.",
  snapshotLine:
    "Current snapshot: 54.7% introduced harm at first contact; 43% showed no repair behavior after causing harm; N = 21,000+ responses across 79 scenarios in 12 behavioral risk domains.",
} as const;
