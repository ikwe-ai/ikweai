import { CASE_STUDIES_INDEX, WRITINGS_INDEX } from "@/lib/content-index";
import { BENCHMARK_CURRENT, BENCHMARK_LOG_REQUEST } from "@/lib/benchmark-data";

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

type KnowledgeDoc = {
  id: string;
  title: string;
  href: string;
  summary: string;
  tags: string[];
};

const RESTRICTED_EXACT_PATTERNS = [
  "client-specific",
  "client specific",
  "client name",
  "client list",
  "client data",
  "client result",
  "non-public process",
  "restricted note",
  "restricted-only",
  "confidential organization",
  "private organization",
  "raw scenario",
  "scenario text",
  "scenario id",
  "prompt id",
  "subset a",
  "subset b",
  "subset c",
  "whiteboard notes",
  "scoring rubric",
  "exact weighting",
  "weighted criteria",
  "exact weights",
  "8 dimension weights",
  "dimension weights",
  "proprietary method",
  "proprietary methodology",
  "full dataset",
  "raw dataset",
  "system prompt",
  "developer prompt",
  "ignore previous instructions",
  "bypass safety",
  "jailbreak",
  "override policy",
];

const RESTRICTED_INTENT_TOKENS = ["client", "non-public", "restricted", "confidential", "private", "proprietary"];
const RESTRICTED_TARGET_TOKENS = ["name", "list", "data", "result", "document", "notes", "method", "prompt", "id", "exact"];
const EXFIL_ACTION_TOKENS = [
  "show",
  "give",
  "list",
  "dump",
  "export",
  "reveal",
  "provide",
  "disclose",
  "share",
  "leak",
  "bypass",
  "override",
  "ignore",
  "print",
];
const EXFIL_TARGET_TOKENS = [
  "client",
  "non-public",
  "restricted",
  "confidential",
  "private",
  "scenario",
  "prompt",
  "rubric",
  "weight",
  "weights",
  "weighting",
  "proprietary",
  "dataset",
  "source",
  "method",
  "methodology",
  "id",
  "ids",
];

const APPROVED_ANSWERS: ApprovedAnswer[] = [
  {
    id: "what-ikwe-does",
    keywords: ["what is ikwe", "what does ikwe do", "independent validation", "behavioral auditor"],
    text:
      "Ikwe is an independent third-party behavioral safety validator for human-facing AI systems. We audit model behavior, document risk, and deliver evidence boards and regulators can reference.",
    links: [
      { label: "Audit Overview", href: "/audit" },
      { label: "Research Overview", href: "/research" },
    ],
  },
  {
    id: "ikwe-quick-facts",
    keywords: ["ikwe quick facts", "give me ikwe quick facts", "quick highlights", "ikwe highlights", "ikwe overview"],
    text:
      `Ikwe quick facts (updated ${BENCHMARK_CURRENT.lastUpdated}): Ikwe is an independent third-party behavioral AI auditor. Current benchmark evidence shows ${BENCHMARK_CURRENT.failedGatePct} SSF-Any prevalence, ${BENCHMARK_CURRENT.noRepairPct} aggregate safety gate fail rate, with ${BENCHMARK_CURRENT.nValue} responses evaluated across ${BENCHMARK_CURRENT.scenarios} scenarios in ${BENCHMARK_CURRENT.domains} categories.`,
    links: [
      { label: "Homepage Overview", href: "/" },
      { label: "EQ Safety Benchmark", href: "/benchmark" },
      { label: "Request Evaluation", href: "/intake#application-form" },
    ],
  },
  {
    id: "benchmark-stats",
    keywords: [
      "benchmark numbers",
      "what do the benchmark numbers mean",
      "stats",
      "failed safety gate",
      "no repair behavior",
      "responses evaluated",
      "n value",
    ],
    text:
      `Current benchmark framing (updated ${BENCHMARK_CURRENT.lastUpdated}): ${BENCHMARK_CURRENT.failedGatePct} SSF-Any prevalence, ${BENCHMARK_CURRENT.noRepairPct} aggregate safety gate fail, and ${BENCHMARK_CURRENT.nValue} responses evaluated across ${BENCHMARK_CURRENT.scenarios} scenarios in ${BENCHMARK_CURRENT.domains} categories.`,
    links: [
      { label: "EQ Safety Benchmark", href: "/benchmark" },
      { label: "Research Details", href: "/research" },
      { label: BENCHMARK_LOG_REQUEST.label, href: BENCHMARK_LOG_REQUEST.href },
    ],
  },
  {
    id: "how-audit-works",
    keywords: ["how does the audit process work", "how audit works", "audit process", "three phase", "safety gate"],
    text:
      "The public benchmark framework uses two layers: a Safety Gate and aggregate dimensional scoring across eight public dimensions. Engagement pathways add implementation support and active monitoring.",
    links: [
      { label: "View Audit Overview", href: "/audit" },
      { label: "Benchmark Methods", href: "/benchmark" },
    ],
  },
  {
    id: "deliverables",
    keywords: [
      "deliverables",
      "reports",
      "what do we receive",
      "what do teams receive",
      "what do teams receive in deliverables",
      "report package",
      "documentation",
    ],
    text:
      "Public pages show deliverable formats and transparency boundaries. A redacted proprietary-format sample report is available publicly. Full report packages are available through active audit engagement and are distributed through controlled documentation access.",
    links: [
      { label: "Deliverables", href: "/deliverables" },
      { label: "Public Sample Report", href: "/sample-report" },
      { label: "Trust & Confidentiality", href: "/trust" },
    ],
  },
  {
    id: "request-audit",
    keywords: [
      "request evaluation",
      "request independent evaluation",
      "third-party independent behavioral safety evaluation",
      "contact",
      "intake",
      "start audit",
      "how do we start an audit",
      "how do we start independent evaluation",
      "get started",
    ],
    text:
      "Start through the independent evaluation intake form. This process is used for scope, timeline, procurement readiness, and reporting requirements before formal engagement.",
    links: [
      { label: "Request Evaluation", href: "/intake#application-form" },
      { label: "Audit Overview", href: "/audit" },
    ],
  },
  {
    id: "proprietary-boundary",
    keywords: ["what is public vs proprietary", "what is not public", "what cannot be shared", "confidentiality boundary"],
    text:
      "Publicly available: benchmark framing, aggregate results, and methodology overview. Not publicly exposed: exact 8-dimension weighting, exact scenario text/sourcing methodology, scenario IDs, and client-specific outcomes.",
    links: [
      { label: "Trust & Confidentiality", href: "/trust" },
      { label: "Research Access Terms", href: "/research-access-terms.html" },
    ],
  },
];

const PUBLIC_KNOWLEDGE_DOCS: KnowledgeDoc[] = [
  {
    id: "home",
    title: "Homepage Overview",
    href: "/",
    summary:
      "Ikwe positions as an independent AI behavioral auditor with current benchmark evidence, risk-loop framing, vulnerable-state domains, and audit calls to action.",
    tags: ["home", "overview", "risk", "benchmark", "behavioral audit"],
  },
  {
    id: "research",
    title: "Research Overview",
    href: "/research",
    summary:
      `Research page explains ${BENCHMARK_CURRENT.nValue}, ${BENCHMARK_CURRENT.scenarios} scenarios, ${BENCHMARK_CURRENT.domains} categories, SSF prevalence, safety gate outcomes, and aggregate 8-dimension reporting boundaries.`,
    tags: ["research", "methodology", "numbers", "phase 1", "phase 2", "dimensions"],
  },
  {
    id: "eqsb",
    title: "EQ Safety Benchmark",
    href: "/benchmark",
    summary:
      "EQ Safety Benchmark details the safety gate, multidimensional evaluation approach, and benchmark framing used for institutional behavioral risk review.",
    tags: ["eq safety benchmark", "safety gate", "audit method", "scoring"],
  },
  {
    id: "deliverables",
    title: "Deliverables",
    href: "/deliverables",
    summary:
      "Deliverables page shows public format previews, documentation boundaries, and how full report packages are requested through engagement.",
    tags: ["deliverables", "reports", "documentation", "outputs"],
  },
  {
    id: "audit",
    title: "Audit Overview",
    href: "/audit",
    summary:
      "Audit page describes intake, evaluation steps, governance outputs, and how organizations move from scope definition to validated reporting.",
    tags: ["audit", "intake", "process", "engagement"],
  },
  {
    id: "trust",
    title: "Trust & Confidentiality",
    href: "/trust",
    summary:
      "Trust page explains data boundaries, confidentiality standards, and what is and is not required during audit workflow.",
    tags: ["trust", "confidentiality", "data", "boundaries", "security"],
  },
  {
    id: "architecture",
    title: "Architecture",
    href: "/archive/architecture",
    summary:
      "Architecture page outlines evaluation structure, governance framing, and how controls are organized in public-facing terms.",
    tags: ["architecture", "controls", "governance", "system"],
  },
  {
    id: "about",
    title: "About & Independence",
    href: "/archive/about",
    summary:
      "About page covers independence standards, governance commitments, and public institutional positioning of Ikwe.ai.",
    tags: ["about", "independence", "company", "governance"],
  },
  {
    id: "contact",
    title: "Independent Evaluation Intake",
    href: "/intake#application-form",
    summary:
      "Intake captures organization context, scope targets, procurement constraints, and required details to start independent behavioral safety evaluation planning.",
    tags: ["request evaluation", "independent evaluation", "intake", "contact", "start"],
  },
  {
    id: "samples",
    title: "Sample Deliverables",
    href: "/deliverables",
    summary:
      "Sample Deliverables page provides a one-page excerpt, full redacted sample report format, and direct intake CTA.",
    tags: ["samples", "deliverables", "report format", "example output"],
  },
  {
    id: "case-studies",
    title: "Case Studies",
    href: "/research/case-studies",
    summary:
      "Case Studies page presents trajectory analyses and governance interventions in public, non-client-specific format.",
    tags: ["case studies", "examples", "trajectory", "interventions"],
  },
  {
    id: "writing-library",
    title: "Writing Library",
    href: "/research/writings",
    summary:
      "Writing library contains public essays and notes on behavioral safety, governance, and trust-layer decision-making.",
    tags: ["writings", "essays", "notes", "governance"],
  },
  {
    id: "press",
    title: "Press & Updates",
    href: "/research/press",
    summary:
      "Press & Updates contains public communications and release notes relevant to benchmark framing.",
    tags: ["press", "updates", "communications"],
  },
  {
    id: "terms",
    title: "Terms",
    href: "/terms.html",
    summary:
      "Terms page covers usage terms, IP boundaries, and engagement-related obligations.",
    tags: ["terms", "legal", "usage", "ip"],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    href: "/privacy.html",
    summary:
      "Privacy policy explains data collection, processing, and rights for site users and organizations.",
    tags: ["privacy", "policy", "data rights"],
  },
  {
    id: "research-access-terms",
    title: "Research Access Terms",
    href: "/research-access-terms.html",
    summary:
      "Research Access Terms define use boundaries for benchmark materials and related documentation.",
    tags: ["research access terms", "materials", "usage boundary"],
  },
];

const STOP_WORDS = new Set([
  "the",
  "a",
  "an",
  "and",
  "or",
  "to",
  "for",
  "of",
  "on",
  "in",
  "with",
  "is",
  "are",
  "be",
  "it",
  "this",
  "that",
  "how",
  "what",
  "where",
  "can",
  "do",
  "does",
  "i",
  "we",
  "you",
  "your",
  "our",
  "about",
]);

function normalize(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9%+\s=-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(query: string) {
  return normalize(query)
    .split(" ")
    .filter((token) => token.length > 2 && !STOP_WORDS.has(token));
}

function directAnswerScore(query: string, keywords: string[]) {
  let score = 0;
  for (const keyword of keywords) {
    const key = normalize(keyword);
    if (!key) continue;
    if (query.includes(key)) {
      score += key.includes(" ") ? 6 : 2;
      continue;
    }

    const keyTokens = key.split(" ").filter(Boolean);
    if (keyTokens.length > 1 && keyTokens.every((token) => query.includes(token))) {
      score += 3;
    }
  }
  return score;
}

function isRestrictedQuery(query: string, queryTokens: string[]) {
  if (RESTRICTED_EXACT_PATTERNS.some((pattern) => query.includes(pattern))) {
    return true;
  }

  const hasIntent = RESTRICTED_INTENT_TOKENS.some((token) => queryTokens.includes(token));
  const hasTarget = RESTRICTED_TARGET_TOKENS.some((token) => queryTokens.includes(token));
  if (hasIntent && hasTarget) {
    return true;
  }

  const hasExfilAction = EXFIL_ACTION_TOKENS.some((token) => queryTokens.includes(token));
  const hasExfilTarget = EXFIL_TARGET_TOKENS.some((token) => queryTokens.includes(token));
  return hasExfilAction && hasExfilTarget;
}

function searchableText(doc: KnowledgeDoc) {
  return normalize(`${doc.title} ${doc.summary} ${doc.tags.join(" ")} ${doc.href}`);
}

function knowledgeScore(query: string, queryTokens: string[], doc: KnowledgeDoc) {
  const text = searchableText(doc);
  const title = normalize(doc.title);
  const tagText = normalize(doc.tags.join(" "));

  let score = 0;

  if (text.includes(query)) score += 12;
  if (title.includes(query)) score += 8;

  for (const token of queryTokens) {
    if (title.includes(token)) score += 4;
    if (tagText.includes(token)) score += 3;
    if (text.includes(token)) score += 1;
  }

  return score;
}

function buildKnowledgeDocs(): KnowledgeDoc[] {
  const writingDocs: KnowledgeDoc[] = WRITINGS_INDEX.map((writing) => ({
    id: `writing-${writing.slug}`,
    title: writing.title,
    href: writing.href,
    summary: writing.summary,
    tags: ["writing", writing.label.toLowerCase(), "research", "governance", ...writing.excerpt.slice(0, 1)],
  }));

  const caseDocs: KnowledgeDoc[] = CASE_STUDIES_INDEX.map((entry) => ({
    id: `case-${entry.slug}`,
    title: entry.title,
    href: `/research/case-studies/${entry.slug}`,
    summary: entry.summary,
    tags: ["case study", entry.label.toLowerCase(), "risk pathway", ...entry.signals.slice(0, 1)],
  }));

  return [...PUBLIC_KNOWLEDGE_DOCS, ...writingDocs, ...caseDocs];
}

const KNOWLEDGE_DOCS = buildKnowledgeDocs();

function isSafeHref(href: string) {
  return href.startsWith("/");
}

function uniqueLinks(items: AssistantLink[]) {
  const seen = new Set<string>();
  const links: AssistantLink[] = [];
  for (const item of items) {
    if (!isSafeHref(item.href)) continue;
    if (seen.has(item.href)) continue;
    seen.add(item.href);
    links.push(item);
  }
  return links;
}

export function resolveApprovedAnswer(rawQuery: string): AssistantResolution {
  const query = normalize(rawQuery);
  const queryTokens = tokenize(rawQuery);

  if (!query) {
    return {
      kind: "fallback",
      text: "Ask about audits, benchmark results, deliverables, trust, legal terms, or where to find pages.",
      links: [
        { label: "Audit", href: "/audit" },
        { label: "Research", href: "/research" },
        { label: "Deliverables", href: "/deliverables" },
      ],
    };
  }

  if (isRestrictedQuery(query, queryTokens)) {
    return {
      kind: "restricted",
      text:
        "I can only return approved public content. Organization-specific details, restricted notes, exact scenario text/IDs, and proprietary scoring details are not shared here.",
      links: [
        { label: "Trust & Confidentiality", href: "/trust" },
        { label: "Research Access Terms", href: "/research-access-terms.html" },
      ],
    };
  }

  let bestAnswer: ApprovedAnswer | null = null;
  let bestAnswerScore = 0;
  for (const answer of APPROVED_ANSWERS) {
    const score = directAnswerScore(query, answer.keywords);
    if (score > bestAnswerScore) {
      bestAnswerScore = score;
      bestAnswer = answer;
    }
  }

  if (bestAnswer && bestAnswerScore >= 4) {
    return {
      kind: "answer",
      text: bestAnswer.text,
      links: bestAnswer.links,
    };
  }

  const rankedDocs = KNOWLEDGE_DOCS.map((doc) => ({
    doc,
    score: knowledgeScore(query, queryTokens, doc),
  }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (!rankedDocs.length || rankedDocs[0].score < 3) {
    return {
      kind: "fallback",
      text:
        "I do not have a high-confidence approved answer for that exact phrasing yet. Try asking with page terms like audit, research, benchmark, deliverables, trust, architecture, or legal.",
      links: [
        { label: "Research", href: "/research" },
        { label: "Audit Overview", href: "/audit" },
        { label: "Deliverables", href: "/deliverables" },
      ],
    };
  }

  const primary = rankedDocs[0].doc;
  const secondary = rankedDocs[1]?.doc;
  const responseLines = [`Most relevant public page: ${primary.title}. ${primary.summary}`];
  if (secondary) {
    responseLines.push(`Also useful: ${secondary.title}. ${secondary.summary}`);
  }

  return {
    kind: "answer",
    text: responseLines.join("\n"),
    links: uniqueLinks(
      rankedDocs.map((item) => ({
        label: item.doc.title,
        href: item.doc.href,
      }))
    ),
  };
}
