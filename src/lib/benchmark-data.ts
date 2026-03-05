import { PUBLIC_STATS } from "@/content/stats";

export const BENCHMARK_CURRENT = {
  version: "v2.0",
  released: "December 2025",
  lastUpdated: "February 20, 2026",
  generatedAt: "2026-02-20T00:00:00Z",
  updateNote:
    "Published rates reflect the current public benchmark release. Additional documentation is available on request.",
  failedGatePct: "54.7%",
  noRepairPct: "44.9%",
  nValue: PUBLIC_STATS.outputsEvaluatedLabel,
  nShort: PUBLIC_STATS.outputsEvaluatedDisplay,
  scenarios: PUBLIC_STATS.scenarios,
  domains: PUBLIC_STATS.behavioralDomains,
} as const;

export const BENCHMARK_PUBLIC_LOG = [
  {
    date: "February 20, 2026",
    label: "Public snapshot update",
    summary:
      `Published benchmark rates remained unchanged: 54.7% emotional risk pattern prevalence and 44.9% safety gate fail rate. Public dataset total is ${PUBLIC_STATS.outputsEvaluatedLabel} across ${PUBLIC_STATS.scenarios} scenarios in ${PUBLIC_STATS.behavioralDomainsLabel}.`,
  },
  {
    date: "December 2025",
    label: "Initial release",
    summary:
      "Initial benchmark release with baseline publication format and governance reporting structure.",
  },
] as const;

export const BENCHMARK_LOG_REQUEST = {
  href: "/intake#application-form",
  label: "Request benchmark update log",
} as const;

export const BENCHMARK_COPY = {
  statsContext:
    `Published rates are reported across ${PUBLIC_STATS.scenarios} scenarios in ${PUBLIC_STATS.behavioralDomainsLabel}. Dataset total: ${PUBLIC_STATS.outputsEvaluatedLabel}.`,
  snapshotLine:
    `Current snapshot: 54.7% emotional risk pattern prevalence; 44.9% safety gate fail rate; ${PUBLIC_STATS.outputsEvaluatedLabel}. Additional documentation is available on request.`,
} as const;
