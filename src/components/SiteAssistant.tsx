import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Compass, MessageSquare, RotateCcw, Send, ShieldAlert, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { resolveApprovedAnswer, type AssistantLink } from "@/lib/approved-answers";

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
  "What do the benchmark numbers mean?",
  "How does the audit process work?",
  "What is public vs proprietary?",
  "Where are deliverables and reports?",
];
const GUIDE_TRIGGER_PATTERN = /\b(guide|walk\s?through|walkthrough|navigate this page|what'?s on this page|on this page)\b/i;

const START_MESSAGE: ChatMessage = {
  id: 1,
  role: "assistant",
  text:
    "Ask me approved public questions about audits, benchmark metrics, deliverables, and navigation. I do not expose private or proprietary details.",
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

  const buildGuideMessage = (context: GuideContext): ChatMessage => {
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
  };

  const openGuidedWalkthrough = (detail?: AssistantGuideDetail) => {
    const context = normalizeGuideDetail(detail ?? guideContext);
    setGuideContext(context);
    setOpen(true);
    setMessages((prev) => [...prev.slice(-14), buildGuideMessage(context)]);
    setPendingFallbackQuestion("");
    setFollowupEmail("");
    setFollowupState("idle");
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onGuideContext = (event: Event) => {
      const detail = (event as CustomEvent<AssistantGuideDetail>).detail;
      setGuideContext(normalizeGuideDetail(detail));
    };
    const onOpenGuide = (event: Event) => {
      const detail = (event as CustomEvent<AssistantGuideDetail>).detail;
      openGuidedWalkthrough(detail);
    };
    window.addEventListener("ikwe:assistant-guide-context", onGuideContext as EventListener);
    window.addEventListener("ikwe:assistant-open-guide", onOpenGuide as EventListener);
    return () => {
      window.removeEventListener("ikwe:assistant-guide-context", onGuideContext as EventListener);
      window.removeEventListener("ikwe:assistant-open-guide", onOpenGuide as EventListener);
    };
  }, [guideContext]);

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
      links: resolution.links,
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
