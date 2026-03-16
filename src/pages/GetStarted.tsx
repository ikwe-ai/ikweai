import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import PageShell from "@/components/PageShell";
import SummaryHero from "@/components/SummaryHero";

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
        description="Talk to us about your AI system, subscribe to benchmark updates, or submit a full evaluation request. Three ways to connect with Ikwe.ai."
        path="/get-started"
        ogImagePath="/og/intake.png"
      />

      {/* ── Hero ── */}
      <SummaryHero
        kicker="Get Started"
        title="Choose how you want to connect."
        summary="No pressure, no long forms yet. Start wherever makes sense — a quick call, staying in the loop, or going straight into a full evaluation request."
        jumpLinks={[
          { href: "#scope-call", label: "Book a scope call" },
          { href: "#updates", label: "Stay in the loop" },
          { href: "#intake", label: "Full evaluation request" },
        ]}
      />

      {/* ── Three paths ── */}
      <section className="site-section py-10 md:py-14 border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* PATH 1: Scope call */}
          <article id="scope-call" className="card-surface p-6 flex flex-col">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-lilac-dim/30 text-[10px] font-mono text-lilac mb-5">
              01
            </span>
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
                  <p className="text-xs" style={{ color: "hsl(var(--danger))" }}>
                    Something went wrong. Try again or email us directly.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={callState === "submitting"}
                  className="inline-flex items-center justify-center rounded bg-lilac px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {callState === "submitting" ? "Sending…" : "Book a scope call →"}
                </button>
              </form>
            )}
          </article>

          {/* PATH 2: Newsletter */}
          <article id="updates" className="card-surface p-6 flex flex-col">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-lilac-dim/30 text-[10px] font-mono text-lilac mb-5">
              02
            </span>
            <h2 className="font-display text-2xl text-foreground mb-2">Stay in the loop.</h2>
            <p className="text-sm text-foreground-muted leading-relaxed mb-6">
              Get notified when new frontier model scores, scenario expansions, or benchmark
              updates are published. No pitch, just the research.
            </p>

            {newsState === "done" ? (
              <div className="mt-auto card-surface p-4">
                <p className="text-sm text-foreground-muted leading-relaxed">
                  You're on the list. We'll reach out when new benchmark data drops.
                </p>
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
                  <p className="text-xs" style={{ color: "hsl(var(--danger))" }}>
                    Something went wrong. Try again.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={newsState === "submitting"}
                  className="inline-flex items-center justify-center rounded border border-border px-5 py-3 text-sm text-foreground hover:border-foreground-muted transition-colors btn-outline disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {newsState === "submitting" ? "Subscribing…" : "Subscribe to updates →"}
                </button>
              </form>
            )}
          </article>

          {/* PATH 3: Full intake */}
          <article id="intake" className="card-surface p-6 flex flex-col">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-lilac-dim/30 text-[10px] font-mono text-lilac mb-5">
              03
            </span>
            <h2 className="font-display text-2xl text-foreground mb-2">Go straight in.</h2>
            <p className="text-sm text-foreground-muted leading-relaxed mb-6">
              Already know what you need? Submit a full evaluation request with your system
              context, deployment details, and governance requirements.
            </p>

            <div className="mt-auto flex flex-col gap-3">
              <Link
                to="/intake"
                className="inline-flex items-center justify-center rounded border border-border px-5 py-3 text-sm text-foreground hover:border-foreground-muted transition-colors btn-outline"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Open evaluation request →
              </Link>
              <p className="text-xs text-foreground-subtle text-center">
                Takes about 10 minutes. We review every submission.
              </p>
            </div>
          </article>

        </div>
      </section>

      {/* ── Footer note ── */}
      <section className="site-section py-8 md:py-10">
        <p className="text-sm text-foreground-subtle max-w-2xl leading-relaxed">
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
      </section>

    </PageShell>
  );
}
