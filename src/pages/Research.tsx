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
    { label: "Emotional risk pattern prevalence", value: ssfAnyPct },
    { label: "Safety gate fail rate", value: gateFailPct },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Behavioral Safety Testing for Human-Facing AI | Ikwe.ai"
        description="Public research summary for Behavioral Safety Validation, the EQ Safety Benchmark, and the Frontier AI Behavioral Safety Index."
        path="/research"
        ogImagePath="/og/research.png"
      />

      <section className="site-section py-14 border-b border-border research-hero">
        <div className="site-hero-layout">
          <div>
            <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-4">
              Behavioral Safety Validation Research · Released {BENCHMARK_CURRENT.released} · Updated {BENCHMARK_CURRENT.lastUpdated}
            </p>
            <h1 className="font-display fluid-title text-foreground mb-4">Behavioral Safety Testing for Human-Facing AI</h1>
            <p className="text-foreground-muted lede mb-6">
              Behavioral Safety Validation is the emerging governance layer for human-facing AI. The EQ Safety
              Benchmark is the framework, and the Frontier AI Behavioral Safety Index is the public index produced from
              it. This research summarizes the methodology, scope, and baseline results.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/intake#application-form"
                className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
              >
                Request Full Report Access
              </a>
              <a
                href="#benchmark-framework"
                className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
              >
                View Benchmark Framework
              </a>
            </div>
            <ActionDock
              title="Next Step"
              subtitle="Use the findings for executive alignment, then request scope for your system."
              items={[
                { href: "/intake#application-form", label: "Request Ikwe EQ Safety Evaluation", tone: "primary" },
                { href: "/benchmark", label: "Open Public Index", tone: "outline" },
                { href: "/audit#deliverables-previews", label: "View Sample Outputs", tone: "quiet" },
              ]}
            />
          </div>
          <aside className="site-hero-rail card-surface p-5">
            <div className="summary-headline-strip">
              <div className="summary-headline-item">{BENCHMARK_CURRENT.nValue}</div>
              <div className="summary-headline-item">
                {BENCHMARK_CURRENT.scenarios} scenarios across {BENCHMARK_CURRENT.domains} behavioral domains (vulnerability categories)
              </div>
              <div className="summary-headline-item">Stage 1 Safety Gate + Stage 2 conditional behavioral scoring</div>
            </div>
            <BaselineLiveLegend className="mt-4" compact />
          </aside>
        </div>
      </section>

      <ConnectedPages current="research" />

      <section className="site-section py-10 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Research Snapshot</p>
        <StatsRow className="max-w-6xl mb-4" />
        <FindingsCards className="max-w-6xl" />
      </section>

      <section className="site-section py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Read This First</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mb-5">
          <article className="card-surface p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-2">Stage 1</p>
            <h2 className="font-display text-xl text-foreground mb-2">Safety Gate (Pass/Fail)</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              First-contact screen: did the response introduce emotional risk.
            </p>
          </article>
          <article className="card-surface p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-2">Stage 2</p>
            <h2 className="font-display text-xl text-foreground mb-2">Behavioral Scoring (Conditional)</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Quality scoring runs only on Stage 1 PASS responses.
            </p>
          </article>
        </div>
        <article className="card-surface p-6 max-w-5xl safe-panel">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-safe mb-3">What this means for your organization</p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-4">
            These rates are measured exposure, not edge-case speculation. They show what leadership should plan for
            before deployment decisions.
          </p>
          <details className="progressive-details">
            <summary
              aria-label="Toggle summary details"
              data-label="How to interpret these rates"
              data-open-label="Hide interpretation"
            />
            <div className="progressive-details-body">
              <p className="text-sm text-foreground-muted leading-relaxed">
                {BENCHMARK_CURRENT.failedGatePct} of responses showed at least one emotional risk pattern.
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

      <section id="benchmark-framework" className="site-section py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Benchmark Framework</p>
        <p className="text-sm text-foreground-muted leading-relaxed measure mb-6 text-pretty">
          Behavioral Safety Validation is the category. The EQ Safety Benchmark is the framework. The Frontier AI
          Behavioral Safety Index is one public application of that framework: frontier models evaluated against a
          baseline of 79 real-world emotional support scenarios sourced from established datasets.
        </p>
        <StageDiagram className="max-w-6xl mb-4" />
        <DimensionsGrid className="max-w-6xl mb-4" />
        <DomainsTagWall className="max-w-6xl" />
      </section>

      <section id="findings-snapshot" className="site-section py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-7">Findings Snapshot</p>
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
            <summary
              aria-label="Toggle scope details"
              data-label="Method scope and user-state coverage"
              data-open-label="Hide scope details"
            />
            <div className="progressive-details-body">
              <p className="text-sm text-foreground-muted leading-relaxed">
                The public benchmark evaluates behavior across {BENCHMARK_CURRENT.domains} behavioral domains
                (vulnerability categories), including {vulnerableStates.join(", ")}.
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

      <section id="research-charts" className="site-section py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Charts</p>
        <ChartsBlock className="max-w-6xl" />
      </section>

      <section id="research-method" className="site-section py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Method</p>
        <MethodAccordion className="max-w-5xl" />
      </section>

      <section id="full-report" className="site-section py-14">
        <article className="card-surface p-6 max-w-4xl">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-[0.14em] mb-3">Full Benchmark Access</p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-5">
            Full benchmark documentation is available for institutional review when your team needs deeper diligence
            for procurement, legal, or board review, or when you are preparing for an Ikwe EQ Safety Evaluation.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/intake#application-form"
              className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            >
              Request Full Report Access
            </a>
            <a
              href="/audit#deliverables-previews"
              className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
            >
              View Sample Outputs & Transparency
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
          <a href="#benchmark-framework" className="summary-jump">Benchmark framework</a>
          <a href="/audit#deliverables-previews" className="summary-jump">Sample outputs</a>
          <a href="/trust" className="summary-jump">Trust standards</a>
        </div>
      </section>
    </PageShell>
  );
}
