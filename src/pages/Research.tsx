import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";

export default function Research() {
  const vulnerableStates = [
    "Anxiety",
    "Depression",
    "Loneliness",
    "Anger",
    "Overwhelm",
    "Grief",
    "Suicidal Ideation",
    "Relationship Distress",
    "Career Trauma",
    "and more",
  ] as const;

  const benchmarkSummaryRows = [
    { label: "Introduced harm at first contact", value: 54.7 },
    { label: "No repair behavior after harm", value: 43.0 },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Research — EQ Safety Benchmark | Ikwe.ai"
        description="Public research summary for the EQ Safety Benchmark: methodology, scope, findings, and access pathways."
        path="/research"
      />

      <section className="py-14 border-b border-border">
        <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-4">
          Research Summary · Updated {BENCHMARK_CURRENT.lastUpdated}
        </p>
        <h1 className="font-display fluid-title text-foreground mb-4">EQ Safety Benchmark</h1>
        <p className="text-foreground-muted lede mb-6">
          The EQ Safety Benchmark is Ikwe&apos;s structured evaluation framework for measuring behavioral safety risk in
          AI systems during emotionally vulnerable interactions. This page covers what we measured, how we measured it,
          and what the findings mean.
        </p>
        <div className="summary-headline-strip mb-7 max-w-4xl">
          <div className="summary-headline-item">{BENCHMARK_CURRENT.nShort} individual model outputs evaluated</div>
          <div className="summary-headline-item">79 structured scenarios across 12 behavioral risk domains</div>
          <div className="summary-headline-item">Two-phase benchmark: Safety Gate + post-harm behavior analysis</div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/request-audit#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
          >
            Request Full Report Access
          </a>
          <a
            href="/request-audit#application-form"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
          >
            Request an Audit
          </a>
        </div>
      </section>

      <section className="py-14 border-b border-border">
        <article className="card-surface p-6 max-w-5xl border-safe bg-[hsl(176_30%_18%)]">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-safe mb-3">What this means for your organization</p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-4">
            If your AI system handles users in vulnerable states, this research quantifies the probability that the
            system is responding unsafely right now. Not hypothetically. At measurable rates.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-3">
            More than half of AI responses introduced harm at first contact. The benchmark does not ask whether AI can
            be harmful, it measures how often it is.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-3">
            43% of responses showed no repair behavior after causing harm. The system not only failed, it kept going in
            the same direction.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed">
            These are baseline rates. Your specific system may perform better or worse. The only way to know is
            structured evaluation.
          </p>
        </article>
      </section>

      <section id="dataset-scope" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-7">N and Scenario Scope</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
          <article className="card-surface p-5">
            <p className="font-display text-3xl text-foreground mb-2">{BENCHMARK_CURRENT.nShort}</p>
            <p className="text-sm text-foreground-muted">Individual model outputs evaluated</p>
          </article>
          <article className="card-surface p-5">
            <p className="font-display text-3xl text-foreground mb-2">79</p>
            <p className="text-sm text-foreground-muted">Structured scenarios</p>
          </article>
          <article className="card-surface p-5">
            <p className="font-display text-3xl text-foreground mb-2">12</p>
            <p className="text-sm text-foreground-muted">Behavioral risk domains</p>
          </article>
        </div>

        <div className="flex flex-wrap gap-2 mb-5 max-w-4xl">
          {vulnerableStates.map((state) => (
            <span
              key={state}
              className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-xs text-foreground-muted bg-background-card"
            >
              {state}
            </span>
          ))}
        </div>

        <p className="text-sm text-foreground-muted max-w-4xl">
          Last updated: {BENCHMARK_CURRENT.lastUpdated}. Refreshed as new datasets and model outputs are evaluated.
        </p>
      </section>

      <section id="phase-1-results" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-7">Phase 1 — Safety Gate Results</p>
        <article className="card-surface p-6 max-w-3xl mb-5 border-danger bg-[hsl(8_34%_18%)]">
          <p className="font-display text-5xl text-danger mb-2">{BENCHMARK_CURRENT.failedGatePct}</p>
          <p className="text-sm text-foreground-muted">Introduced harm at first contact</p>
        </article>
        <p className="text-sm text-foreground-muted leading-relaxed max-w-4xl">
          The Safety Gate is a binary screen applied before any dimensional scoring. It asks one question: did this
          response introduce harm at first contact? More than half did. This is not a scoring nuance, it is a
          categorical failure at the first threshold.
        </p>
      </section>

      <section id="phase-2-results" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-7">Phase 2 — Post-Harm Behavior</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mb-5">
          <article className="card-surface p-6">
            <p className="font-display text-5xl text-danger mb-2">43%</p>
            <p className="text-sm text-foreground-muted">No repair behavior after introducing harm</p>
          </article>
          <article className="card-surface p-6">
            <p className="font-display text-5xl text-foreground mb-2">57%</p>
            <p className="text-sm text-foreground-muted">Showed at least some repair signal after introducing harm</p>
          </article>
        </div>
        <p className="text-sm text-foreground-muted leading-relaxed max-w-4xl">
          Phase 2 evaluates only the responses that introduced harm in Phase 1. Of those, 43% showed no correction,
          no acknowledgment, and no change in direction. The system caused harm and continued.
        </p>
      </section>

      <section id="dimension-aggregate" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-7">8-Dimension Aggregate</p>
        <p className="text-sm text-foreground-muted leading-relaxed max-w-4xl mb-4">
          Responses that pass the Safety Gate are scored across eight weighted behavioral dimensions covering detection,
          emotional regulation, validation, agency preservation, loop interruption, pattern externalization, practical
          containment, and safety routing.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed max-w-4xl mb-4">
          Dimension weights are proprietary. Aggregate dimension outcomes are published at benchmark level. No
          dimension-level scores are attributed to individual organizations.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed max-w-4xl">
          Full dimensional scoring documentation is available to organizations in active audit or institutional review.
          Contact <a href="mailto:research@ikwe.ai" className="link-lilac">research@ikwe.ai</a>.
        </p>
      </section>

      <section id="failure-breakdown" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-7">Benchmark Summary</p>
        <div className="card-surface p-6 max-w-4xl">
          <div className="space-y-5">
            {benchmarkSummaryRows.map((row) => (
              <div key={row.label}>
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <p className="text-sm text-foreground-muted">{row.label}</p>
                  <p className="font-mono text-xs text-foreground">{row.value.toFixed(1)}%</p>
                </div>
                <div className="h-2 rounded-full bg-background-surface">
                  <div className="h-2 rounded-full bg-danger" style={{ width: `${row.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="full-report" className="py-14">
        <article className="card-surface p-6 max-w-4xl">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-[0.14em] mb-3">Full Benchmark Access</p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-5">
            Full benchmark documentation, including methodology detail, dimensional rubrics, scenario battery
            structure, and version governance, is available for institutional review on request.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/request-audit#application-form"
              className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            >
              Request Full Report Access
            </a>
            <a
              href="/deliverables"
              className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
            >
              View Deliverables & Transparency
            </a>
          </div>
        </article>
      </section>
    </PageShell>
  );
}
