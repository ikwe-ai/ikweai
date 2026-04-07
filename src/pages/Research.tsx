import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import ActionDock from "@/components/ActionDock";
import BaselineLiveLegend from "@/components/BaselineLiveLegend";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";
import StatsRow from "@/components/visuals/StatsRow";
import FindingsCards from "@/components/visuals/FindingsCards";
import ChartsBlock from "@/components/visuals/ChartsBlock";
import MethodAccordion from "@/components/visuals/MethodAccordion";
import StageDiagram from "@/components/visuals/StageDiagram";
import DimensionsGrid from "@/components/visuals/DimensionsGrid";
import DomainsTagWall from "@/components/visuals/DomainsTagWall";
import ConnectedPages from "@/components/ConnectedPages";
import { trackEvent } from "@/hooks/useAnalytics";

export default function Research() {
  const vulnerableStates = [
    "Anxiety", "Depression", "Loneliness", "Anger", "Overwhelm",
    "Grief", "Suicidal Ideation", "Relationship Distress",
    "Career Trauma", "and more",
  ] as const;

  const parsePercent = (value: string) => Number.parseFloat(value.replace("%", ""));
  const formatPercent = (value: number) => (Number.isInteger(value) ? `${value}%` : `${value.toFixed(1)}%`);

  const ssfAnyPct  = parsePercent(BENCHMARK_CURRENT.failedGatePct);
  const gateFailPct = parsePercent(BENCHMARK_CURRENT.noRepairPct);
  const gatePassPct = Math.max(0, +(100 - gateFailPct).toFixed(1));

  const benchmarkSummaryRows = [
    { label: "Emotional risk pattern prevalence", value: ssfAnyPct },
    { label: "Safety gate fail rate",             value: gateFailPct },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Behavioral Safety Testing for Human-Facing AI | Ikwe.ai"
        description="Public research summary for Behavioral Safety Validation, the EQ Safety Benchmark, and the Frontier AI Behavioral Safety Index."
        path="/research"
        ogImagePath="/og/research.png"
      />

      {/* ── Hero ── */}
      <section className="site-section py-10 md:py-16 border-b border-border research-hero">
        <div className="site-hero-layout">
          <div>
            <p className="section-kicker-live mb-4">
              Behavioral Safety Validation Research · Released {BENCHMARK_CURRENT.released} · Updated {BENCHMARK_CURRENT.lastUpdated}
            </p>
            <h1 className="font-display fluid-title text-foreground mb-4">The behavioral safety standard for human-facing AI</h1>
            <p className="text-foreground-muted lede mb-4">
              {BENCHMARK_CURRENT.scenarios} scenarios across {BENCHMARK_CURRENT.domains} vulnerability types, tested against multiple frontier systems.
            </p>
            <div className="research-stat-band mb-7">
              <span>{BENCHMARK_CURRENT.scenarios} scenarios</span>
              <span aria-hidden="true">·</span>
              <span>{BENCHMARK_CURRENT.domains} vulnerability types</span>
              <span aria-hidden="true">·</span>
              <span>{BENCHMARK_CURRENT.nShort} responses scored</span>
              <span aria-hidden="true">·</span>
              <span className="research-stat-band-alert">{BENCHMARK_CURRENT.failedGatePct} failed the Safety Gate at first contact</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/audit"
                className="inline-flex items-center rounded bg-lilac px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
                onClick={() => trackEvent("audit_cta_research", { source: "hero" })}
              >
                Book an Audit Scope Call
              </a>
              <a
                href="#benchmark-framework"
                className="inline-flex items-center rounded border border-border px-5 py-3 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
              >
                View Benchmark Framework
              </a>
            </div>
          </div>
          <aside className="site-hero-rail card-surface p-5">
            <div className="summary-headline-strip">
              <div className="summary-headline-item">{BENCHMARK_CURRENT.nValue}</div>
              <div className="summary-headline-item">
                {BENCHMARK_CURRENT.scenarios} scenarios across {BENCHMARK_CURRENT.domains} behavioral domains
              </div>
              <div className="summary-headline-item">Stage 1 Safety Gate + Stage 2 conditional behavioral scoring</div>
            </div>
            <BaselineLiveLegend className="mt-4" compact />
          </aside>
        </div>
      </section>

      <ConnectedPages current="research" />

      <ActionDock
        title="Next Step"
        subtitle="Use the findings for executive alignment, then request scope for your system."
        items={[
          { href: "/get-started", label: "Request Ikwe EQ Safety Evaluation", tone: "primary" },
          { href: "/benchmark", label: "Open Public Index", tone: "outline" },
          { href: "/audit#deliverables-previews", label: "View Sample Outputs", tone: "quiet" },
        ]}
      />

      {/* ── Research Snapshot ── */}
      <section className="site-section py-10 border-b border-border">
        <p className="section-kicker mb-6">Research Snapshot</p>
        <StatsRow className="max-w-6xl mb-4" />
        <FindingsCards className="max-w-6xl" />
      </section>

      {/* ── Two-Stage Framework ── */}
      <section className="site-section py-14 border-b border-border">
        <p className="section-kicker mb-6">How Scoring Works</p>

        {/* Visual two-stage flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mb-6">
          <article className="card-surface p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-2">Stage 1</p>
            <h2 className="font-display text-xl text-foreground mb-2">Safety Gate</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              First-contact screen: did the response introduce emotional risk?
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-danger font-mono text-xs">{BENCHMARK_CURRENT.noRepairPct} FAIL</span>
              <span className="text-foreground-subtle text-xs">·</span>
              <span className="text-safe font-mono text-xs">{formatPercent(gatePassPct)} PASS</span>
            </div>
          </article>
          <article className="card-surface p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-2">Stage 2</p>
            <h2 className="font-display text-xl text-foreground mb-2">Behavioral Scoring</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Quality scoring runs only on Stage 1 PASS responses across 8 behavioral dimensions.
            </p>
            <div className="mt-3">
              <span className="text-foreground-subtle font-mono text-xs">Conditional on Stage 1 pass</span>
            </div>
          </article>
        </div>

        {/* What this means — tight callout, not prose */}
        <article className="card-surface p-6 max-w-5xl safe-panel">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-safe mb-3">What this means for your organization</p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-1">
            These are measured exposure rates — not edge-case speculation.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-4">
            Plan for them before deployment decisions.
          </p>
          <details className="progressive-details group">
            <summary aria-label="Toggle summary details" className="flex items-center gap-2 cursor-pointer list-none select-none py-2 [&::-webkit-details-marker]:hidden"><span className="text-foreground-subtle text-xs group-open:rotate-180 transition-transform duration-200">▶</span><span className="text-sm text-foreground">How to interpret these rates</span></summary>
            <div className="progressive-details-body">
              <p className="text-sm text-foreground-muted leading-relaxed">
                {BENCHMARK_CURRENT.failedGatePct} of responses showed at least one emotional risk pattern — this captures prevalence, not binary gate failure.
              </p>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {BENCHMARK_CURRENT.noRepairPct} failed the aggregate safety gate under the published binary threshold.
              </p>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Your system may perform better or worse. Independent evaluation replaces assumption with evidence.
              </p>
            </div>
          </details>
        </article>
      </section>

      {/* ── Benchmark Framework ── */}
      <section id="benchmark-framework" className="site-section py-14 border-b border-border">
        <p className="section-kicker mb-3">Benchmark Framework</p>

        {/* Three-part definition strip — no long paragraph */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mb-8">
          <div className="card-surface p-4 border-l-2 border-lilac">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-lilac mb-1">The category</p>
            <p className="text-sm text-foreground font-medium">Behavioral Safety Validation</p>
          </div>
          <div className="card-surface p-4 border-l-2 border-teal">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-teal mb-1">The framework</p>
            <p className="text-sm text-foreground font-medium">EQ Safety Benchmark</p>
          </div>
          <div className="card-surface p-4 border-l-2 border-amber">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-amber mb-1">One public application</p>
            <p className="text-sm text-foreground font-medium">Frontier AI Behavioral Safety Index</p>
          </div>
        </div>

        <StageDiagram className="max-w-6xl mb-4" />
        <DimensionsGrid className="max-w-6xl mb-4" />
        <DomainsTagWall className="max-w-6xl" />
      </section>

      {/* ── Findings Snapshot ── */}
      <section id="findings-snapshot" className="site-section py-14 border-b border-border">
        <p className="section-kicker mb-7">Findings Snapshot</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 max-w-5xl">
          <article className="card-surface p-4">
            <p className="font-display text-3xl text-danger mb-1">{BENCHMARK_CURRENT.failedGatePct}</p>
            <p className="text-xs text-foreground-muted">Emotional risk pattern prevalence</p>
          </article>
          <article className="card-surface p-4">
            <p className="font-display text-3xl text-danger mb-1">{BENCHMARK_CURRENT.noRepairPct}</p>
            <p className="text-xs text-foreground-muted">Aggregate gate FAIL</p>
          </article>
          <article className="card-surface p-4">
            <p className="font-display text-3xl text-foreground mb-1">{BENCHMARK_CURRENT.nShort}</p>
            <p className="text-xs text-foreground-muted">Outputs evaluated</p>
          </article>
          <article className="card-surface p-4">
            <p className="font-display text-3xl text-foreground mb-1">{BENCHMARK_CURRENT.scenarios}</p>
            <p className="text-xs text-foreground-muted">Scenarios across {BENCHMARK_CURRENT.domains} behavioral domains</p>
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
            <summary aria-label="Toggle scope details" className="flex items-center gap-2 cursor-pointer list-none select-none py-2 [&::-webkit-details-marker]:hidden"><span className="text-foreground-subtle text-xs group-open:rotate-180 transition-transform duration-200">▶</span><span className="text-sm text-foreground">Method scope and user-state coverage</span></summary>
            <div className="progressive-details-body">
              <p className="text-sm text-foreground-muted leading-relaxed mb-3">
                The public benchmark evaluates behavior across {BENCHMARK_CURRENT.domains} behavioral domains (vulnerability categories). PASS runs are quality-scored across eight public dimensions.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {vulnerableStates.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-full border border-border bg-background-surface px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest text-foreground-subtle"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Detailed scoring mechanics are provided through scoped engagement. Aggregate outcomes are published at benchmark level and are not attributed publicly to individual organizations.
              </p>
            </div>
          </details>
        </article>
      </section>

      {/* ── Charts ── */}
      <section id="research-charts" className="site-section py-14 border-b border-border">
        <p className="section-kicker mb-6">Charts</p>
        <ChartsBlock className="max-w-6xl" />
      </section>

      {/* ── Method ── */}
      <section id="research-method" className="site-section py-14 border-b border-border">
        <p className="section-kicker mb-6">Method</p>
        <MethodAccordion className="max-w-5xl" />
      </section>

      {/* ── CTA ── */}
      <section id="full-report" className="site-section py-14">
        <article className="card-surface p-6 max-w-4xl">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-[0.14em] mb-3">Want to see how your system performs?</p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-5">
            This benchmark shows frontier model performance. An Ikwe audit runs the same framework against your specific system — producing documented evidence your board, compliance, and partners can use before you scale.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/audit"
              className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
              onClick={() => trackEvent("audit_cta_research", { source: "bottom" })}
            >
              Request an Audit →
            </a>
            <a
              href="/audit#deliverables-previews"
              className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
              onClick={() => trackEvent("cta_sample_report", { source: "research_bottom" })}
            >
              View Sample Outputs
            </a>
          </div>
        </article>
        <div className="flex flex-wrap gap-2 mt-5">
          <a href="#benchmark-framework" className="summary-jump">Benchmark framework</a>
          <a href="/audit#deliverables-previews" className="summary-jump">Sample outputs</a>
          <a href="/trust" className="summary-jump">Trust standards</a>
        </div>
      </section>
    </PageShell>
  );
}
