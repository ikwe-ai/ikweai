import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { MessageSquare, RotateCcw, Send, ShieldAlert, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { resolveApprovedAnswer, type AssistantLink } from "@/lib/approved-answers";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
  kind?: "default" | "restricted" | "fallback";
  links?: AssistantLink[];
};

const QUICK_QUESTIONS = [
  "What do the benchmark numbers mean?",
  "How does the audit process work?",
  "What is public vs proprietary?",
  "Where are deliverables and reports?",
];

const START_MESSAGE: ChatMessage = {
  id: 1,
  role: "assistant",
  text:
    "Ask me approved public questions about audits, benchmark metrics, deliverables, and navigation. I do not expose private or proprietary details.",
};

export default function SiteAssistant() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([START_MESSAGE]);
  const nextIdRef = useRef(2);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const hasUserMessages = useMemo(() => messages.some((message) => message.role === "user"), [messages]);

  useEffect(() => {
    const target = scrollAreaRef.current;
    if (!target) return;
    target.scrollTop = target.scrollHeight;
  }, [messages]);

  const pushAssistantAnswer = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: nextIdRef.current++,
      role: "user",
      text: trimmed,
    };

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
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim()) return;
    pushAssistantAnswer(input);
    setInput("");
  };

  const onOpenLink = (href: string) => {
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

  const resetAssistant = () => {
    setMessages([START_MESSAGE]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-[220] max-sm:left-3 max-sm:right-3 sm:bottom-5 sm:right-5">
      {!open ? (
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
                    ? "ml-4 border-lilac/55 bg-lilac-dim"
                    : message.kind === "restricted"
                      ? "mr-4 border-danger/60 bg-background-surface"
                      : message.kind === "fallback"
                        ? "mr-4 border-amber/60 bg-background-surface"
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
                        className="rounded border border-border-2 px-2 py-1 text-[11px] text-foreground hover:text-foreground hover:border-lilac/50"
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

          <form onSubmit={onSubmit} className="border-t border-border p-3 bg-background-card">
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
