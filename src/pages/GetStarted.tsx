import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import PageShell from "@/components/PageShell";

const CALENDLY_URL = "https://calendly.com/stephanie-ikwe/30-min-chat-with-stephanie-ikweai";

type CallFormState = "idle" | "submitting" | "done" | "error";
type NewsFormState = "idle" | "submitting" | "done" | "error";

type CallFields = { name: string; email: string; company: string; note: string };
type NewsFields = { email: string };

function submitToNetlify(formName: string, fields: Record<string, string>) {
  const data = new URLSearchParams();
  data.append("form-name", formName);
  Object.entries(fields).forEach(([k, v]) => data.append(k, v));
  return fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: data.toString(),
  });
}

export default function GetStarted() {
  const [callForm, setCallForm] = useState<CallFields>({ name: "", email: "", company: "", note: "" });
  const [callState, setCallState] = useState<CallFormState>("idle");

  const [newsForm, setNewsForm] = useState<NewsFields>({ email: "" });
  const [newsState, setNewsState] = useState<NewsFormState>("idle");

  async function handleCallSubmit(e: React.FormEvent) {
    e.preventDefault();
    setCallState("submitting");
    try {
      await submitToNetlify("get-started-scope-call", {
        name: callForm.name,
        email: callForm.email,
        company: callForm.company,
        note: callForm.note,
        submitted_at: new Date().toISOString(),
      });
      // Redirect to Calendly after successful submission
      window.location.href = CALENDLY_URL;
    } catch {
      setCallState("error");
    }
  }

  async function handleNewsSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNewsState("submitting");
    try {
      await submitToNetlify("get-started-newsletter", {
        email: newsForm.email,
        submitted_at: new Date().toISOString(),
      });
      setNewsState("done");
    } catch {
      setNewsState("error");
    }
  }

  return (
    <PageShell>
      <PageMeta
        title="Get Started | Ikwe.ai"
        description="Schedule a scope call, get leaderboard updates, or submit a full evaluation request."
        path="/get-started"
      />

      <div className="py-16 md:py-24">
        {/* Header */}
        <div className="mb-14">
          <span
            className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-lilac mb-4 block"
          >
            Get Started
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Choose how you want<br />to connect.
          </h1>
          <p className="text-foreground-muted text-base max-w-xl leading-relaxed">
            No pressure, no long forms yet. Start wherever makes sense — a quick call, staying in the loop,
            or going straight into a full evaluation request.
          </p>
        </div>

        {/* Three paths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* ── PATH 1: Scope call ── */}
          <article className="card-surface p-7 flex flex-col">
            <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-lilac mb-5 block">01</span>
            <h2 className="font-display text-2xl text-foreground mb-2">Let's talk.</h2>
            <p className="text-sm text-foreground-muted leading-relaxed mb-6">
              Schedule a 30-min EQ Safety scope call with Stephanie. We'll look at your system,
              identify the right evaluation level, and figure out what you actually need.
            </p>

            {callState === "done" ? (
              <div className="mt-auto text-sm text-foreground-muted">Redirecting to Calendly…</div>
            ) : (
              <form onSubmit={handleCallSubmit} className="flex flex-col gap-3 mt-auto">
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={callForm.name}
                  onChange={(e) => setCallForm((f) => ({ ...f, name: e.target.value }))}
                  className="gs-input"
                />
                <input
                  type="email"
                  required
                  placeholder="Work email"
                  value={callForm.email}
                  onChange={(e) => setCallForm((f) => ({ ...f, email: e.target.value }))}
                  className="gs-input"
                />
                <input
                  type="text"
                  required
                  placeholder="Company"
                  value={callForm.company}
                  onChange={(e) => setCallForm((f) => ({ ...f, company: e.target.value }))}
                  className="gs-input"
                />
                <textarea
                  rows={2}
                  placeholder="What are you building? (optional)"
                  value={callForm.note}
                  onChange={(e) => setCallForm((f) => ({ ...f, note: e.target.value }))}
                  className="gs-input resize-none"
                />
                {callState === "error" && (
                  <p className="text-xs text-danger">Something went wrong. Try again or email us directly.</p>
                )}
                <button
                  type="submit"
                  disabled={callState === "submitting"}
                  className="gs-btn-gold mt-1"
                >
                  {callState === "submitting" ? "Sending…" : "Book a scope call →"}
                </button>
              </form>
            )}
          </article>

          {/* ── PATH 2: Newsletter ── */}
          <article className="card-surface p-7 flex flex-col">
            <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-lilac mb-5 block">02</span>
            <h2 className="font-display text-2xl text-foreground mb-2">Stay in the loop.</h2>
            <p className="text-sm text-foreground-muted leading-relaxed mb-6">
              Get notified when new frontier model scores, scenario expansions, or benchmark
              updates are published. No pitch, just the research.
            </p>

            {newsState === "done" ? (
              <div className="mt-auto">
                <div className="rounded border border-border bg-background-surface px-4 py-4 text-sm text-foreground-muted leading-relaxed">
                  You're on the list. We'll reach out when new benchmark data drops.
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsSubmit} className="flex flex-col gap-3 mt-auto">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={newsForm.email}
                  onChange={(e) => setNewsForm({ email: e.target.value })}
                  className="gs-input"
                />
                {newsState === "error" && (
                  <p className="text-xs text-danger">Something went wrong. Try again.</p>
                )}
                <button
                  type="submit"
                  disabled={newsState === "submitting"}
                  className="gs-btn-outline mt-1"
                >
                  {newsState === "submitting" ? "Subscribing…" : "Subscribe to updates →"}
                </button>
              </form>
            )}
          </article>

          {/* ── PATH 3: Full intake ── */}
          <article className="card-surface p-7 flex flex-col">
            <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-lilac mb-5 block">03</span>
            <h2 className="font-display text-2xl text-foreground mb-2">Go straight in.</h2>
            <p className="text-sm text-foreground-muted leading-relaxed mb-6">
              Already know what you need? Submit a full evaluation request with your system
              context, deployment details, and governance requirements.
            </p>

            <div className="mt-auto flex flex-col gap-3">
              <Link
                to="/intake#application-form"
                className="gs-btn-outline text-center"
              >
                Open evaluation request →
              </Link>
              <p className="text-xs text-foreground-subtle text-center">
                Takes about 10 minutes. We review every submission.
              </p>
            </div>
          </article>
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-foreground-subtle max-w-2xl">
            Not sure which path is right?{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lilac hover:text-lilac-bright underline underline-offset-2 transition-colors"
            >
              Book a call directly
            </a>{" "}
            — no form required. Or explore the{" "}
            <Link to="/benchmark" className="text-lilac hover:text-lilac-bright underline underline-offset-2 transition-colors">
              benchmark
            </Link>{" "}
            and{" "}
            <Link to="/audit" className="text-lilac hover:text-lilac-bright underline underline-offset-2 transition-colors">
              audit overview
            </Link>{" "}
            first.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
