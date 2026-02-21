import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Compass, MessageSquare, RotateCcw, Send, ShieldAlert, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { resolveApprovedAnswer, type AssistantLink } from "@/lib/approved-answers";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
  kind?: "default" | "restricted" | "fallback";
  links?: AssistantLink[];
};

type FollowupState = "idle" | "sending" | "sent" | "error";
type AssistantGuideSection = {
  label: string;
  href: string;
};
type AssistantGuideDetail = {
  pageTitle?: string;
  sections?: Array<string | AssistantGuideSection>;
};
type GuideContext = {
  pageTitle: string;
  sections: AssistantGuideSection[];
};

const QUICK_QUESTIONS = [
  "Guide me through this page",
  "Give me Ikwe quick facts",
  "What do the benchmark numbers mean?",
  "How does the audit process work?",
  "What do teams receive in deliverables?",
  "What is public vs proprietary?",
  "Where are deliverables and reports?",
];
const GUIDE_TRIGGER_PATTERN = /\b(guide|walk\s?through|walkthrough|navigate this page|what'?s on this page|on this page)\b/i;
const ASK_PREFIX = "ask://";

const IKWE_TOPIC_PROMPTS = [
  { label: "Ikwe Quick Facts", prompt: "Give me Ikwe quick facts" },
  { label: "Benchmark Numbers", prompt: "What do the benchmark numbers mean?" },
  { label: "Audit Process", prompt: "How does the audit process work?" },
  { label: "Deliverables", prompt: "What do teams receive in deliverables?" },
  { label: "Public vs Proprietary", prompt: "What is public vs proprietary?" },
  { label: "Request Audit", prompt: "How do we start an audit?" },
] as const;

const START_MESSAGE: ChatMessage = {
  id: 1,
  role: "assistant",
  text:
    "Ikwe Site Assistant: approved public facts only. I can walk you through benchmark evidence, audit process, deliverables, and request intake using one-click prompts.",
};

const toAskLink = (label: string, prompt: string): AssistantLink => ({
  label,
  href: `${ASK_PREFIX}${encodeURIComponent(prompt)}`,
});

const mergeLinks = (...groups: AssistantLink[][]): AssistantLink[] => {
  const merged: AssistantLink[] = [];
  const seen = new Set<string>();
  for (const group of groups) {
    for (const link of group) {
      if (seen.has(link.href)) continue;
      seen.add(link.href);
      merged.push(link);
    }
  }
  return merged.slice(0, 10);
};

const normalizeGuideDetail = (detail?: AssistantGuideDetail): GuideContext => {
  const fallbackTitle =
    typeof document !== "undefined" ? document.title.replace(/\s*\|.*/, "").trim() || "this page" : "this page";
  const pageTitle =
    typeof detail?.pageTitle === "string" && detail.pageTitle.trim().length ? detail.pageTitle.trim() : fallbackTitle;
  const sections = (detail?.sections ?? [])
    .map((section) => {
      if (typeof section === "string") {
        const label = section.trim();
        return label ? { label, href: "" } : null;
      }
      const label = section.label?.trim();
      if (!label) return null;
      return { label, href: section.href ?? "" };
    })
    .filter((section): section is AssistantGuideSection => Boolean(section))
    .slice(0, 8);

  return { pageTitle, sections };
};

const sectionHint = (label: string) => {
  const normalized = label.toLowerCase();
  if (normalized.includes("scope") || normalized.includes("n and")) return "Defines the benchmark sample size and coverage.";
  if (normalized.includes("phase 1")) return "Shows first-contact harm outcomes from the Safety Gate.";
  if (normalized.includes("phase 2")) return "Shows post-harm repair behavior outcomes.";
  if (normalized.includes("dimension")) return "Summarizes aggregate scoring across eight behavioral dimensions.";
  if (normalized.includes("failure")) return "Breaks down where and how risk pathways appeared.";
  if (normalized.includes("report")) return "Explains how to request full benchmark documentation.";
  if (normalized.includes("pricing")) return "Covers pricing structure and intake expectations.";
  return "Provides evidence and context for this part of the page.";
};

const buildFollowupAskLinks = (question: string): AssistantLink[] => {
  const q = question.toLowerCase();
  if (q.includes("benchmark") || q.includes("safety gate") || q.includes("numbers")) {
    return [
      toAskLink("Explain audit process", "How does the audit process work?"),
      toAskLink("Show deliverables", "What do teams receive in deliverables?"),
      toAskLink("Public vs proprietary", "What is public vs proprietary?"),
    ];
  }
  if (q.includes("audit") || q.includes("certification") || q.includes("process")) {
    return [
      toAskLink("Benchmark numbers", "What do the benchmark numbers mean?"),
      toAskLink("Show deliverables", "What do teams receive in deliverables?"),
      toAskLink("Start intake", "How do we start an audit?"),
    ];
  }
  if (q.includes("deliverable") || q.includes("report")) {
    return [
      toAskLink("Audit process", "How does the audit process work?"),
      toAskLink("Public vs proprietary", "What is public vs proprietary?"),
      toAskLink("Start intake", "How do we start an audit?"),
    ];
  }

  return [
    toAskLink("Ikwe quick facts", "Give me Ikwe quick facts"),
    toAskLink("Benchmark numbers", "What do the benchmark numbers mean?"),
    toAskLink("Audit process", "How does the audit process work?"),
  ];
};

export default function SiteAssistant() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([START_MESSAGE]);
  const [pendingFallbackQuestion, setPendingFallbackQuestion] = useState("");
  const [followupEmail, setFollowupEmail] = useState("");
  const [followupState, setFollowupState] = useState<FollowupState>("idle");
  const [guideContext, setGuideContext] = useState<GuideContext>(() => normalizeGuideDetail());
  const nextIdRef = useRef(2);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const hasUserMessages = useMemo(() => messages.some((message) => message.role === "user"), [messages]);

  const postForm = async (formName: string, payload: Record<string, string>) => {
    const body = new URLSearchParams({
      "form-name": formName,
      ...payload,
      "bot-field": "",
    });
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    if (!response.ok) throw new Error(`Form submission failed: ${formName}`);
  };

  const captureFallbackQuestion = async (question: string) => {
    const path = typeof window !== "undefined" ? window.location.pathname : "/";
    try {
      await postForm("assistant-question-log", {
        question,
        page: path,
        source: "site-assistant",
        submitted_at: new Date().toISOString(),
      });
    } catch {
      // Silent fail: logging should not interrupt user interaction.
    }
  };

  useEffect(() => {
    const target = scrollAreaRef.current;
    if (!target) return;
    target.scrollTop = target.scrollHeight;
  }, [messages]);

  const buildPresentationMessage = useCallback((): ChatMessage => {
    return {
      id: nextIdRef.current++,
      role: "assistant",
      kind: "default",
      text: [
        "Ikwe walkthrough (public facts):",
        `• ${BENCHMARK_CURRENT.failedGatePct} failed the Safety Gate at first contact`,
        `• ${BENCHMARK_CURRENT.noRepairPct} showed no repair behavior after introducing harm`,
        `• ${BENCHMARK_CURRENT.nValue} model outputs evaluated across ${BENCHMARK_CURRENT.scenarios} scenarios in ${BENCHMARK_CURRENT.domains} risk domains`,
        "",
        "Choose any step below to continue the presentation.",
      ].join("\n"),
      links: [
        toAskLink("1. What Ikwe does", "What is Ikwe and what does it do?"),
        toAskLink("2. Benchmark evidence", "What do the benchmark numbers mean?"),
        toAskLink("3. Audit process", "How does the audit process work?"),
        toAskLink("4. Deliverables", "What do teams receive in deliverables?"),
        toAskLink("5. Public vs proprietary", "What is public vs proprietary?"),
        toAskLink("6. Start audit intake", "How do we start an audit?"),
      ],
    };
  }, []);

  const buildGuideMessage = useCallback((context: GuideContext): ChatMessage => {
    const sectionLines = context.sections.length
      ? context.sections.map((section, index) => `${index + 1}. ${section.label} — ${sectionHint(section.label)}`).join("\n")
      : "1. Start with the summary at the top.\n2. Continue section by section using page anchors.";

    return {
      id: nextIdRef.current++,
      role: "assistant",
      kind: "default",
      text: [
        `Guided walkthrough for ${context.pageTitle}:`,
        "",
        sectionLines,
        "",
        'Use the section buttons below to jump directly. Ask "Explain [section name]" for a focused summary.',
      ].join("\n"),
      links: context.sections
        .filter((section) => section.href)
        .map((section) => ({ label: section.label, href: section.href }))
        .slice(0, 8),
    };
  }, []);

  const openGuidedWalkthrough = useCallback((detail?: AssistantGuideDetail) => {
    const context = normalizeGuideDetail(detail ?? guideContext);
    setGuideContext(context);
    setOpen(true);
    setMessages((prev) => [...prev.slice(-14), buildGuideMessage(context)]);
    setPendingFallbackQuestion("");
    setFollowupEmail("");
    setFollowupState("idle");
  }, [buildGuideMessage, guideContext]);

  const openIkwePresentation = useCallback(() => {
    setOpen(true);
    setMessages((prev) => [...prev.slice(-14), buildPresentationMessage()]);
    setPendingFallbackQuestion("");
    setFollowupEmail("");
    setFollowupState("idle");
  }, [buildPresentationMessage]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onGuideContext = (event: Event) => {
      const detail = (event as CustomEvent<AssistantGuideDetail>).detail;
      setGuideContext(normalizeGuideDetail(detail));
    };
    window.addEventListener("ikwe:assistant-guide-context", onGuideContext as EventListener);
    return () => {
      window.removeEventListener("ikwe:assistant-guide-context", onGuideContext as EventListener);
    };
  }, []);

  const pushAssistantAnswer = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: nextIdRef.current++,
      role: "user",
      text: trimmed,
    };

    if (GUIDE_TRIGGER_PATTERN.test(trimmed)) {
      const guideMessage = buildGuideMessage(normalizeGuideDetail(guideContext));
      setMessages((prev) => [...prev.slice(-14), userMessage, guideMessage]);
      setPendingFallbackQuestion("");
      setFollowupEmail("");
      setFollowupState("idle");
      return;
    }

    const resolution = resolveApprovedAnswer(trimmed);
    const followupLinks = buildFollowupAskLinks(trimmed);

    const assistantMessage: ChatMessage = {
      id: nextIdRef.current++,
      role: "assistant",
      kind:
        resolution.kind === "restricted"
          ? "restricted"
          : resolution.kind === "fallback"
            ? "fallback"
            : "default",
      text: resolution.text,
      links: mergeLinks(resolution.links, followupLinks),
    };

    setMessages((prev) => [...prev.slice(-14), userMessage, assistantMessage]);

    if (resolution.kind === "fallback") {
      setPendingFallbackQuestion(trimmed);
      setFollowupEmail("");
      setFollowupState("idle");
      void captureFallbackQuestion(trimmed);
      return;
    }

    setPendingFallbackQuestion("");
    setFollowupEmail("");
    setFollowupState("idle");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim()) return;
    pushAssistantAnswer(input);
    setInput("");
  };

  const onOpenLink = (href: string) => {
    if (href.startsWith(ASK_PREFIX)) {
      const encodedPrompt = href.slice(ASK_PREFIX.length);
      if (!encodedPrompt) return;
      pushAssistantAnswer(decodeURIComponent(encodedPrompt));
      return;
    }

    if (href.startsWith("#")) {
      if (typeof window === "undefined") return;
      const sectionId = href.slice(1);
      if (!sectionId) return;
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      window.history.replaceState(null, "", `${window.location.pathname}${href}`);
      return;
    }

    const isInternalPath = href.startsWith("/");
    const isSafeAbsolute =
      href.startsWith("https://ikwe.ai/") ||
      href.startsWith("http://ikwe.ai/") ||
      href.startsWith("https://www.ikwe.ai/") ||
      href.startsWith("http://www.ikwe.ai/");

    if (!isInternalPath && !isSafeAbsolute) {
      return;
    }

    if (href.endsWith(".html") || isSafeAbsolute) {
      window.location.href = href;
      return;
    }
    navigate(href);
  };

  const submitFollowup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!pendingFallbackQuestion || !followupEmail.trim()) return;

    setFollowupState("sending");
    const path = typeof window !== "undefined" ? window.location.pathname : "/";
    try {
      await postForm("assistant-team-followup", {
        email: followupEmail.trim(),
        question: pendingFallbackQuestion,
        page: path,
        source: "site-assistant",
        submitted_at: new Date().toISOString(),
      });
      setFollowupState("sent");
    } catch {
      setFollowupState("error");
    }
  };

  const resetAssistant = () => {
    setMessages([START_MESSAGE]);
    setInput("");
    setPendingFallbackQuestion("");
    setFollowupEmail("");
    setFollowupState("idle");
  };

  return (
    <div className="fixed bottom-4 right-4 z-[220] max-sm:left-3 max-sm:right-3 sm:bottom-5 sm:right-5">
      {!open ? (
        <div className="flex flex-col items-end gap-2">
          <button
            type="button"
            onClick={() => openGuidedWalkthrough()}
            className="inline-flex items-center gap-2 rounded-full border border-signal-soft bg-background-card px-3.5 py-2 text-xs text-foreground shadow-[0_12px_26px_hsl(188_50%_8%_/_0.46)] transition hover:border-signal"
            aria-label="Get a guided walkthrough of this page"
          >
            <Compass size={14} className="text-signal" />
            Guide This Page
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-border-2 bg-background-card px-4 py-2.5 text-sm text-foreground shadow-[0_16px_34px_hsl(268_35%_6%_/_0.56)] transition hover:border-lilac"
            aria-label="Open site assistant"
          >
            <MessageSquare size={15} className="text-lilac-bright" />
            <span className="max-sm:hidden">Ask Ikwe Assistant</span>
            <span className="sm:hidden">Ask</span>
          </button>
        </div>
      ) : (
        <section className="w-[min(95vw,420px)] max-sm:w-full rounded-xl border border-border-2 bg-background-card shadow-[0_28px_70px_hsl(266_38%_4%_/_0.66)] overflow-hidden">
          <header className="flex items-start justify-between border-b border-border px-4 py-3 bg-background-card">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-lilac-bright">Approved Answers</p>
              <p className="text-sm text-foreground">Ikwe Site Assistant</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded border border-border px-2 py-1 text-foreground-muted hover:text-foreground"
                onClick={resetAssistant}
                aria-label="Reset assistant messages"
              >
                <RotateCcw size={13} />
              </button>
              <button
                type="button"
                className="rounded border border-border px-2 py-1 text-foreground-muted hover:text-foreground"
                onClick={() => setOpen(false)}
                aria-label="Close site assistant"
              >
                <X size={14} />
              </button>
            </div>
          </header>

          {!hasUserMessages ? (
            <div className="px-4 py-3 border-b border-border bg-background-surface">
              <p className="text-xs text-foreground-subtle mb-2">Try a quick question</p>
              <div className="flex flex-wrap gap-2">
                {QUICK_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    type="button"
                    className="btn-outline rounded-full px-3 py-1.5 text-xs text-foreground hover:text-foreground"
                    onClick={() => pushAssistantAnswer(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          <div ref={scrollAreaRef} className="max-h-[52vh] sm:max-h-[460px] overflow-auto px-4 py-3 space-y-3 bg-background-card">
            {messages.map((message) => (
              <article
                key={message.id}
                className={`rounded-md border px-3 py-2 ${
                  message.role === "user"
                    ? "ml-4 border-lilac bg-lilac-dim"
                    : message.kind === "restricted"
                      ? "mr-4 border-danger bg-background-surface"
                      : message.kind === "fallback"
                        ? "mr-4 border-amber bg-background-surface"
                        : "mr-4 border-border-2 bg-background-surface"
                }`}
              >
                <p className="text-sm text-foreground leading-relaxed whitespace-pre-line break-words">{message.text}</p>
                {message.kind === "restricted" ? (
                  <p className="mt-2 inline-flex items-center gap-1 text-[11px] text-danger">
                    <ShieldAlert size={12} />
                    Private/proprietary boundary enforced
                  </p>
                ) : null}
                {message.links?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {message.links.map((link) => (
                      <button
                        key={`${message.id}-${link.href}`}
                        type="button"
                        className="rounded border border-border-2 px-2 py-1 text-[11px] text-foreground hover:text-foreground hover:border-lilac"
                        onClick={() => onOpenLink(link.href)}
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>

          {pendingFallbackQuestion ? (
            <form onSubmit={submitFollowup} className="border-t border-border p-3 bg-background-surface">
              <p className="text-xs text-foreground mb-2">
                This question was captured for team review. Add your email for a direct reply.
              </p>
              <p className="text-[11px] text-foreground-subtle mb-2 break-words">
                <span className="font-mono uppercase tracking-[0.1em]">Captured question:</span> {pendingFallbackQuestion}
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={followupEmail}
                  onChange={(event) => setFollowupEmail(event.target.value)}
                  className="field h-10"
                  placeholder="you@organization.com"
                  required
                  disabled={followupState === "sending" || followupState === "sent"}
                />
                <button
                  type="submit"
                  className="rounded bg-lilac px-3 py-2 text-xs font-medium text-primary-foreground disabled:opacity-60"
                  disabled={followupState === "sending" || followupState === "sent"}
                >
                  {followupState === "sending" ? "Sending..." : followupState === "sent" ? "Sent" : "Send to Team"}
                </button>
              </div>
              {followupState === "sent" ? (
                <p className="mt-2 text-[11px] text-safe">Thanks. Your follow-up request was received.</p>
              ) : null}
              {followupState === "error" ? (
                <p className="mt-2 text-[11px] text-danger">
                  Submission did not complete. Please email{" "}
                  <a href="mailto:research@ikwe.ai" className="link-lilac underline">
                    research@ikwe.ai
                  </a>{" "}
                  and include your question.
                </p>
              ) : null}
            </form>
          ) : null}

          <form onSubmit={onSubmit} className={`p-3 bg-background-card ${pendingFallbackQuestion ? "" : "border-t border-border"}`}>
            <label htmlFor="site-assistant-input" className="sr-only">
              Ask a question
            </label>
            <div className="flex items-center gap-2">
              <input
                id="site-assistant-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="field h-10"
                placeholder="Ask about any public page on Ikwe.ai..."
              />
              <button type="submit" className="rounded bg-lilac px-3 py-2 text-primary-foreground" aria-label="Send question">
                <Send size={14} />
              </button>
            </div>
            <p className="mt-2 text-[11px] text-foreground-muted">
              Uses approved public site knowledge only. For client-specific requests, use secure intake.
            </p>
          </form>
        </section>
      )}
    </div>
  );
}
