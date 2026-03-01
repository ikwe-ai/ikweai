import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import ActionDock from "@/components/ActionDock";
import BaselineLiveLegend from "@/components/BaselineLiveLegend";
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
    { label: "Harm-pattern prevalence", value: ssfAnyPct },
    { label: "Safety gate fail rate", value: gateFailPct },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Research — EQ Safety Benchmark | Ikwe.ai"
        description="Public research summary for the EQ Safety Benchmark: methodology, scope, findings, and access pathways."
        path="/research"
      />

      <section className="site-section py-14 border-b border-border research-hero">
        <div className="site-hero-layout">
          <div>
            <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-4">
              Research Summary · Released {BENCHMARK_CURRENT.released} · Updated {BENCHMARK_CURRENT.lastUpdated}
            </p>
            <h1 className="font-display fluid-title text-foreground mb-4">EQ Safety Benchmark {BENCHMARK_CURRENT.version}</h1>
            <p className="text-foreground-muted lede mb-6">
              This research quantifies current behavioral safety exposure across human-facing AI interactions and shows the
              failure rates organizations should plan for before deployment decisions.
            </p>
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
            <ActionDock
              title="Next Step"
              subtitle="Use the findings for executive alignment, then request scope for your system."
              items={[
                { href: "/intake#application-form", label: "Request Full Report Access", tone: "primary" },
                { href: "/benchmark", label: "Open Benchmark", tone: "outline" },
                { href: "/deliverables", label: "View Deliverables", tone: "quiet" },
              ]}
            />
          </div>
          <aside className="site-hero-rail card-surface p-5">
            <div className="summary-headline-strip">
              <div className="summary-headline-item">{BENCHMARK_CURRENT.nValue} for published rates</div>
              <div className="summary-headline-item">
                {BENCHMARK_CURRENT.scenarios} structured scenarios across {BENCHMARK_CURRENT.domains} categories
              </div>
              <div className="summary-headline-item">Published framework: prevalence + safety gate + quality scoring</div>
            </div>
            <BaselineLiveLegend className="mt-4" compact />
          </aside>
        </div>
      </section>

      <section className="site-section py-14 border-b border-border">
        <article className="card-surface p-6 max-w-5xl safe-panel">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-safe mb-3">What this means for your organization</p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-4">
            If your AI system handles users in vulnerable states, these rates represent real exposure levels to
            behavioral failure, not hypothetical edge cases.
          </p>
          <details className="progressive-details">
            <summary
              aria-label="Toggle summary details"
              data-label="How to interpret these rates"
              data-open-label="Hide interpretation"
            />
            <div className="progressive-details-body">
              <p className="text-sm text-foreground-muted leading-relaxed">
                {BENCHMARK_CURRENT.failedGatePct} of responses showed at least one harmful behavior pattern.
                This metric captures prevalence, not binary gate failure.
              </p>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {BENCHMARK_CURRENT.noRepairPct} of responses failed the aggregate safety gate under the published binary
                threshold.
              </p>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Your system may perform better or worse. Independent evaluation is how you replace assumption with
                evidence.
              </p>
            </div>
          </details>
        </article>
      </section>

      <section id="findings-snapshot" className="site-section py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-7">Findings Snapshot</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 max-w-5xl">
          <article className="card-surface p-4">
            <p className="font-display text-3xl text-danger mb-1">{BENCHMARK_CURRENT.failedGatePct}</p>
            <p className="text-xs text-foreground-muted">Harm-pattern prevalence</p>
          </article>
          <article className="card-surface p-4">
            <p className="font-display text-3xl text-danger mb-1">{BENCHMARK_CURRENT.noRepairPct}</p>
            <p className="text-xs text-foreground-muted">Aggregate gate FAIL</p>
          </article>
          <article className="card-surface p-4">
            <p className="font-display text-3xl text-foreground mb-1">{BENCHMARK_CURRENT.nShort}</p>
            <p className="text-xs text-foreground-muted">Public sample size</p>
          </article>
          <article className="card-surface p-4">
            <p className="font-display text-3xl text-foreground mb-1">{BENCHMARK_CURRENT.scenarios}</p>
            <p className="text-xs text-foreground-muted">Scenarios in {BENCHMARK_CURRENT.domains} categories</p>
          </article>
        </div>
        <BaselineLiveLegend className="mb-4 max-w-5xl" />

        <article className="card-surface p-5 max-w-5xl">
          <p className="text-xs text-foreground-subtle mb-4">
            Released {BENCHMARK_CURRENT.released} · Updated {BENCHMARK_CURRENT.lastUpdated} · {BENCHMARK_CURRENT.updateNote}
          </p>
          <div className="space-y-4 mb-1">
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
            <div>
              <div className="flex items-center justify-between gap-3 mb-1.5">
                <p className="text-sm text-foreground-muted">Aggregate safety gate PASS</p>
                <p className="font-mono text-xs text-foreground">{formatPercent(gatePassPct)}</p>
              </div>
              <div className="h-2 rounded-full bg-background-surface">
                <div className="h-2 rounded-full bg-safe" style={{ width: `${gatePassPct}%` }} />
              </div>
            </div>
          </div>

          <details className="progressive-details mt-4">
            <summary
              aria-label="Toggle scope details"
              data-label="Method scope and user-state coverage"
              data-open-label="Hide scope details"
            />
            <div className="progressive-details-body">
              <p className="text-sm text-foreground-muted leading-relaxed">
                The public benchmark evaluates behavior across vulnerable-state categories including {vulnerableStates.join(", ")}.
                PASS runs are quality-scored across eight public dimensions.
              </p>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Detailed scoring mechanics are provided through scoped engagement. Aggregate outcomes are published at
                benchmark level and are not attributed publicly to individual organizations.
              </p>
            </div>
          </details>
        </article>
      </section>

      <section id="full-report" className="site-section py-14">
        <article className="card-surface p-6 max-w-4xl">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-[0.14em] mb-3">Full Benchmark Access</p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-5">
            Full benchmark documentation is available for institutional review when your team needs deeper diligence
            for procurement, legal, or board review.
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
