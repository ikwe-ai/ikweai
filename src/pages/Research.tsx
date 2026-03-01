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

  const parsePercent = (value: string) => Number.parseFloat(value.replace("%", ""));
  const formatPercent = (value: number) => (Number.isInteger(value) ? `${value}%` : `${value.toFixed(1)}%`);

  const ssfAnyPct = parsePercent(BENCHMARK_CURRENT.failedGatePct);
  const gateFailPct = parsePercent(BENCHMARK_CURRENT.noRepairPct);
  const gatePassPct = Math.max(0, +(100 - gateFailPct).toFixed(1));

  const benchmarkSummaryRows = [
    { label: "SSF-Any prevalence", value: ssfAnyPct },
    { label: "Aggregate safety gate FAIL", value: gateFailPct },
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
          Research Summary · Released {BENCHMARK_CURRENT.released} · Updated {BENCHMARK_CURRENT.lastUpdated}
        </p>
        <h1 className="font-display fluid-title text-foreground mb-4">EQ Safety Benchmark {BENCHMARK_CURRENT.version}</h1>
        <p className="text-foreground-muted lede mb-6">
          The EQ Safety Benchmark is Ikwe&apos;s structured evaluation framework for measuring behavioral safety risk in
          AI systems during emotionally vulnerable interactions. This page covers what we measured, how we measured it,
          and what the findings mean.
        </p>
        <div className="summary-headline-strip mb-7 max-w-4xl">
          <div className="summary-headline-item">{BENCHMARK_CURRENT.nShort} individual model outputs evaluated</div>
          <div className="summary-headline-item">
            {BENCHMARK_CURRENT.scenarios} structured scenarios across {BENCHMARK_CURRENT.domains} categories
          </div>
          <div className="summary-headline-item">Study I framework: SSF prevalence + Safety Gate + quality scoring</div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/intake#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
          >
            Request Full Report Access
          </a>
          <a
            href="/benchmark"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
          >
            View Benchmark Framework
          </a>
        </div>
      </section>

      <section className="py-14 border-b border-border">
        <article className="card-surface p-6 max-w-5xl safe-panel">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-safe mb-3">What this means for your organization</p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-4">
            If your AI system handles users in vulnerable states, this research quantifies the probability that the
            system is responding unsafely right now. Not hypothetically. At measurable rates.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-3">
            {BENCHMARK_CURRENT.failedGatePct} of responses showed at least one Safety-Sabotaging Feature (SSF) pattern.
            This metric captures prevalence, not binary gate failure.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-3">
            {BENCHMARK_CURRENT.noRepairPct} of responses failed the aggregate safety gate under the stricter binary
            threshold used for Study I.
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
            <p className="font-display text-3xl text-foreground mb-2">{BENCHMARK_CURRENT.scenarios}</p>
            <p className="text-sm text-foreground-muted">Structured scenarios</p>
          </article>
          <article className="card-surface p-5">
            <p className="font-display text-3xl text-foreground mb-2">{BENCHMARK_CURRENT.domains}</p>
            <p className="text-sm text-foreground-muted">Categories</p>
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
          Released: {BENCHMARK_CURRENT.released}. Last updated: {BENCHMARK_CURRENT.lastUpdated}.{" "}
          {BENCHMARK_CURRENT.updateNote}
        </p>
      </section>

      <section id="phase-1-results" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-7">
          Metric 1 — SSF-Any Prevalence
        </p>
        <article className="card-surface p-6 max-w-3xl mb-5 risk-panel">
          <p className="font-display text-5xl text-danger mb-2">{BENCHMARK_CURRENT.failedGatePct}</p>
          <p className="text-sm text-foreground-muted">Responses with at least one SSF pattern</p>
        </article>
        <p className="text-sm text-foreground-muted leading-relaxed max-w-4xl">
          SSF-Any prevalence captures how often a response contains at least one harmful pattern. This is distinct from
          aggregate gate failure, which applies a stricter binary threshold.
        </p>
      </section>

      <section id="phase-2-results" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-7">
          Metric 2 — Safety Gate Outcomes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mb-5">
          <article className="card-surface p-6">
            <p className="font-display text-5xl text-danger mb-2">{BENCHMARK_CURRENT.noRepairPct}</p>
            <p className="text-sm text-foreground-muted">Aggregate safety gate FAIL</p>
          </article>
          <article className="card-surface p-6">
            <p className="font-display text-5xl text-foreground mb-2">{formatPercent(gatePassPct)}</p>
            <p className="text-sm text-foreground-muted">Aggregate safety gate PASS</p>
          </article>
        </div>
        <p className="text-sm text-foreground-muted leading-relaxed max-w-4xl">
          The aggregate gate fail rate across Study I is {BENCHMARK_CURRENT.noRepairPct}. The remaining{" "}
          {formatPercent(gatePassPct)} passed the binary safety gate threshold.
        </p>
      </section>

      <section id="dimension-aggregate" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-7">8-Dimension Aggregate</p>
        <p className="text-sm text-foreground-muted leading-relaxed max-w-4xl mb-4">
          In Study I, PASS runs are quality-scored across eight weighted behavioral dimensions: Harm Recognition,
          Response Sequencing, Validation Accuracy, User Autonomy Integrity, Escalation Interruption,
          Behavioral Pattern Clarity, Risk Containment, and Crisis Routing Fidelity.
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
                  <p className="font-mono text-xs text-foreground">{formatPercent(row.value)}</p>
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
            Full benchmark documentation, including methodology detail, dimension definitions, scenario battery
            structure, and version governance, is available for institutional review on request.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/intake#application-form"
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
            <a
              href="/audit"
              className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors btn-quiet"
            >
              Open Audit &amp; Validation
            </a>
          </div>
        </article>
        <div className="flex flex-wrap gap-2 mt-5">
          <a href="/benchmark" className="summary-jump">Benchmark framework</a>
          <a href="/deliverables" className="summary-jump">Deliverables</a>
          <a href="/trust" className="summary-jump">Trust standards</a>
        </div>
      </section>
    </PageShell>
  );
}
