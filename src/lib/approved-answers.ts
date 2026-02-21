export type AssistantLink = {
  label: string;
  href: string;
};

export type AssistantResolution = {
  kind: "answer" | "restricted" | "fallback";
  text: string;
  links: AssistantLink[];
};

type ApprovedAnswer = {
  id: string;
  keywords: string[];
  text: string;
  links: AssistantLink[];
};

const RESTRICTED_TOPIC_PATTERNS = [
  "client name",
  "client result",
  "client-specific",
  "private",
  "confidential",
  "internal",
  "internal process",
  "raw scenario",
  "scenario text",
  "scenario id",
  "rubric",
  "weighted criteria",
  "weighting",
  "source methodology",
  "prompt id",
  "subset a",
  "subset b",
  "subset c",
  "whiteboard",
];

const APPROVED_ANSWERS: ApprovedAnswer[] = [
  {
    id: "what-ikwe-does",
    keywords: ["what is ikwe", "what does ikwe do", "independent validation", "behavioral auditor"],
    text:
      "Ikwe is an independent third-party behavioral safety validator for human-facing AI systems. We audit model behavior, document risk, and deliver evidence boards and regulators can reference.",
    links: [
      { label: "Audit Pathway", href: "/audit" },
      { label: "Research Overview", href: "/research" },
    ],
  },
  {
    id: "benchmark-stats",
    keywords: ["stats", "numbers", "54.7", "43%", "n=21,000", "benchmark result"],
    text:
      "Current benchmark framing: 54.7% failed the Safety Gate at first contact, 43% showed no repair behavior after introducing harm, and N = 21,000+ model outputs evaluated across 79 scenarios in 12 behavioral risk domains.",
    links: [
      { label: "EQ Safety Benchmark", href: "/eq-safety-benchmark" },
      { label: "Research Details", href: "/research" },
    ],
  },
  {
    id: "how-audit-works",
    keywords: ["how audit works", "audit process", "safety gate", "three phase", "phases"],
    text:
      "The benchmark uses a three-phase structure: Phase 1 Safety Gate (binary harm introduction check), Phase 2 multidimensional scoring across 8 behavioral dimensions, and optional Phase 3 real-time monitoring support post-deployment.",
    links: [
      { label: "View Audit Pathway", href: "/audit" },
      { label: "Benchmark Methods", href: "/eq-safety-benchmark" },
    ],
  },
  {
    id: "deliverables",
    keywords: ["deliverables", "reports", "what do we receive", "report package", "documentation"],
    text:
      "Public pages show deliverable formats and transparency boundaries. Full report packages are available through active audit engagement and are distributed through controlled documentation pathways.",
    links: [
      { label: "Deliverables", href: "/deliverables" },
      { label: "Trust & Confidentiality", href: "/trust" },
    ],
  },
  {
    id: "request-audit",
    keywords: ["request audit", "contact", "intake", "start audit", "get started"],
    text:
      "You can start through the Request Audit intake form. That path is used for scope, timeline, and reporting requirements before formal engagement.",
    links: [
      { label: "Request Audit", href: "/request-audit#application-form" },
      { label: "Audit Overview", href: "/audit" },
    ],
  },
  {
    id: "sectors",
    keywords: ["sectors", "who do you audit", "healthcare", "mental health", "patient ai"],
    text:
      "Primary focus is Patient-AI interaction in high-stakes environments, including healthcare AI, mental health technology, therapy platforms, pediatric AI, and consumer emotional AI.",
    links: [
      { label: "Homepage Overview", href: "/" },
      { label: "Trust & Confidentiality", href: "/trust" },
    ],
  },
  {
    id: "proprietary-boundary",
    keywords: ["proprietary", "what is not public", "what cannot be shared", "confidentiality boundary"],
    text:
      "Publicly available: benchmark framing, aggregate results, and methodology overview. Not publicly exposed: exact 8-dimension weighting, exact scenario text/sourcing methodology, scenario IDs, and client-specific outcomes.",
    links: [
      { label: "Research Access Terms", href: "/research-access-terms.html" },
      { label: "Trust & Confidentiality", href: "/trust" },
    ],
  },
  {
    id: "pdf-policy",
    keywords: ["pdf", "download", "report file", "styled pdf", "copy"],
    text:
      "Only finalized styled PDFs are distributed. If a styled PDF is unavailable, the equivalent web-copy version can be provided on request.",
    links: [
      { label: "Deliverables", href: "/deliverables" },
      { label: "Contact Intake", href: "/request-audit#application-form" },
    ],
  },
];

function normalize(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9%+\s=-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function keywordScore(query: string, keyword: string) {
  if (!keyword) return 0;
  if (query.includes(keyword)) {
    return keyword.includes(" ") ? 3 : 1;
  }
  return 0;
}

export function resolveApprovedAnswer(rawQuery: string): AssistantResolution {
  const query = normalize(rawQuery);

  if (!query) {
    return {
      kind: "fallback",
      text: "Ask a question about audits, benchmark results, deliverables, navigation, or trust policies.",
      links: [
        { label: "Audit", href: "/audit" },
        { label: "Research", href: "/research" },
        { label: "Deliverables", href: "/deliverables" },
      ],
    };
  }

  const isRestricted = RESTRICTED_TOPIC_PATTERNS.some((pattern) => query.includes(pattern));
  if (isRestricted) {
    return {
      kind: "restricted",
      text:
        "I can only provide approved public information. Client-specific details, internal methods, exact scenario text, and proprietary scoring internals are not shared here.",
      links: [
        { label: "Trust & Confidentiality", href: "/trust" },
        { label: "Research Access Terms", href: "/research-access-terms.html" },
      ],
    };
  }

  let best: ApprovedAnswer | null = null;
  let bestScore = 0;

  for (const answer of APPROVED_ANSWERS) {
    const score = answer.keywords.reduce((sum, keyword) => sum + keywordScore(query, keyword), 0);
    if (score > bestScore) {
      best = answer;
      bestScore = score;
    }
  }

  if (!best || bestScore < 2) {
    return {
      kind: "fallback",
      text:
        "I do not have an approved direct answer for that exact question yet. I can help with audit process, benchmark numbers, deliverables, trust/confidentiality, and where to find pages.",
      links: [
        { label: "Audit Pathway", href: "/audit" },
        { label: "Research", href: "/research" },
        { label: "Request Audit", href: "/request-audit#application-form" },
      ],
    };
  }

  return {
    kind: "answer",
    text: best.text,
    links: best.links,
  };
}
