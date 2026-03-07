import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";
import StatCard from "@/components/StatCard";
import BenchmarkStatusNote from "@/components/BenchmarkStatusNote";
import BaselineLiveLegend from "@/components/BaselineLiveLegend";
import VersionCard from "@/components/VersionCard";
import DefinitionCallout from "@/components/DefinitionCallout";
import Changelog from "@/components/Changelog";
import ActionDock from "@/components/ActionDock";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";
import StatsRow from "@/components/visuals/StatsRow";
import StageDiagram from "@/components/visuals/StageDiagram";
import StabilityBars from "@/components/visuals/StabilityBars";
import DomainsTagWall from "@/components/visuals/DomainsTagWall";
import DimensionsGrid from "@/components/visuals/DimensionsGrid";

const CHANGELOG_ENTRIES = [
  {
    version: "v1.0",
    date: BENCHMARK_CURRENT.released,
    notes: "Initial benchmark release and publication of the public dimension framework.",
  },
  {
    version: BENCHMARK_CURRENT.version,
    date: BENCHMARK_CURRENT.lastUpdated,
    notes: "Current published snapshot and aggregate benchmark metrics refresh, including retest coverage for all newly added models.",
  },
] as const;

export default function EqSafetyBenchmark() {
  const parsePercent = (value: string) => Number.parseFloat(value.replace("%", ""));
  const ssfAnyPct = parsePercent(BENCHMARK_CURRENT.failedGatePct);
  const gateFailPct = parsePercent(BENCHMARK_CURRENT.noRepairPct);
  const gatePassPct = Math.max(0, +(100 - gateFailPct).toFixed(1));
  const benchmarkParts = [
    "Stage 1: Safety Gate (pass/fail at first contact)",
    "Stage 2: Behavioral Scoring across 8 dimensions (only for Stage 1 PASS outputs)",
    `${BENCHMARK_CURRENT.scenarios} structured scenarios`,
    `${BENCHMARK_CURRENT.nValue}`,
    `${BENCHMARK_CURRENT.domains} behavioral domains (vulnerability categories)`,
  ] as const;
  const safetyGateOutcomes = [
    { label: "Fail", note: "Unacceptable risk present", tone: "danger" },
    { label: "Conditional Pass", note: "Issues require mitigation", tone: "lilac" },
    { label: "Pass", note: "No immediate failures detected", tone: "safe" },
  ] as const;
  const tierFramework = [
    { tier: "Tier I", title: "Stable Behavioral Integrity", action: "Launch with confidence" },
    { tier: "Tier II", title: "Moderate Behavioral Risk", action: "Launch with mitigations" },
    { tier: "Tier III", title: "Escalation Instability", action: "Remediate before launch" },
    { tier: "Tier IV", title: "High Vulnerability Exposure", action: "Do not launch" },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="EQ Safety Benchmark | Ikwe.ai"
        description="Public framework for behavioral safety evaluation in human-facing AI: Safety Gate, public dimensions, and benchmark-level outcomes."
        path="/benchmark"
        ogImagePath="/og/benchmark.png"
      />
      <SummaryHero
        kicker="Public Framework"
        title="EQ Safety Benchmark"
        summary="The EQ Safety Benchmark is the framework. The Safety Study is the benchmark applied to a model cohort."
        highlights={[
          `${BENCHMARK_CURRENT.failedGatePct} emotional risk pattern prevalence`,
          `${BENCHMARK_CURRENT.noRepairPct} safety gate fail rate`,
          `${BENCHMARK_CURRENT.nValue} across ${BENCHMARK_CURRENT.scenarios} scenarios in ${BENCHMARK_CURRENT.domains} behavioral domains (vulnerability categories)`,
          "Safety Study baseline: 79 scenarios across Equine model, OpenAI, Anthropic, and Grok",
        ]}
        primaryAction={{ href: "/intake#application-form", label: "Request Evaluation" }}
        secondaryAction={{ href: "#method-overview", label: "View Method Overview" }}
        jumpLinks={[
          { href: "#benchmark-vs-study", label: "Benchmark vs Study" },
          { href: "#benchmark-version", label: "Version & Scope" },
          { href: "#benchmark-metrics", label: "Current Metrics" },
          { href: "#framework-structure", label: "Framework Structure" },
          { href: "#safety-gate-outcomes", label: "Safety Gate Outcomes" },
          { href: "#tier-framework", label: "Tier Framework" },
          { href: "#public-dimensions", label: "Public Dimensions" },
          { href: "#method-overview", label: "Method Overview" },
          { href: "#boundary", label: "Public vs Engagement" },
          { href: "#version-changelog", label: "Version Changelog" },
        ]}
      />

      <ActionDock
        title="Next Step"
        subtitle="Use this framework to align stakeholders, then request scoped independent evaluation."
        items={[
          { href: "/intake#application-form", label: "Request Evaluation", tone: "primary" },
          { href: "#public-dimensions", label: "View 8 Dimensions", tone: "outline" },
          { href: "#method-overview", label: "Open Evidence", tone: "quiet" },
        ]}
      />

      <section id="benchmark-vs-study" className="site-section py-10 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Benchmark vs Study</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl">
          <article className="card-surface p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-2">EQ Safety Benchmark (Framework)</p>
            <p className="text-sm text-foreground-muted leading-relaxed mb-3">
              The benchmark defines how evaluation is performed: Stage 1 Safety Gate, Stage 2 conditional scoring across
              eight behavioral dimensions, and structured vulnerability-domain scenario testing.
            </p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              This framework is reused across models and over time for consistent comparison.
            </p>
          </article>
          <article className="card-surface p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-2">Safety Study (Applied Run)</p>
            <p className="text-sm text-foreground-muted leading-relaxed mb-3">
              The public study baseline applied the benchmark across 79 scenarios and four model families: Equine model,
              OpenAI, Anthropic, and Grok.
            </p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Additional study runs continue beyond the 79-scenario baseline as scope expands.
            </p>
          </article>
        </div>
      </section>

      <section className="site-section py-10 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Benchmark At A Glance</p>
        <StatsRow className="max-w-6xl mb-4" />
        <div className="summary-headline-strip max-w-6xl mb-4">
          <div className="summary-headline-item">{BENCHMARK_CURRENT.nValue}</div>
          <div className="summary-headline-item">{BENCHMARK_CURRENT.scenarios} scenarios</div>
          <div className="summary-headline-item">{BENCHMARK_CURRENT.domains} behavioral domains (vulnerability categories)</div>
          <div className="summary-headline-item">Stage 1 Safety Gate + Stage 2 conditional scoring</div>
        </div>
        <article className="card-surface p-5 max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-3">What the benchmark includes</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {benchmarkParts.map((part) => (
              <p key={part} className="text-sm text-foreground-muted border border-border rounded-md px-3 py-2 bg-background-card">
                {part}
              </p>
            ))}
          </div>
        </article>
      </section>

      <section id="benchmark-version" className="site-section py-10 border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_1fr] gap-4 max-w-6xl">
          <VersionCard
            version={`EQ Safety Benchmark ${BENCHMARK_CURRENT.version}`}
            releaseDate={BENCHMARK_CURRENT.released}
            scope="Behavioral and emotional risk evaluation for human-facing AI"
            appliesTo="Conversational systems operating in emotionally sensitive contexts"
          />
          <div className="space-y-4">
            <p className="text-sm text-foreground-muted leading-relaxed">
              Current public version is <span className="text-foreground">{BENCHMARK_CURRENT.version}</span> (updated{" "}
              {BENCHMARK_CURRENT.lastUpdated}). This is the basis for current audit and monitoring engagements.
            </p>
            <DefinitionCallout
              term="Behavioral Safety Benchmark"
              definition="A structured framework used to evaluate whether conversational AI responses reduce, maintain, or escalate behavioral risk in vulnerable user states."
            />
            <DefinitionCallout
              term="Safety Gate"
              definition="A binary first-contact screen that flags severe behavioral failures before dimensional scoring is applied."
            />
          </div>
        </div>
      </section>

      <section id="benchmark-metrics" className="site-section py-10 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Current Benchmark Snapshot</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            value={BENCHMARK_CURRENT.failedGatePct}
            label="Emotional risk pattern prevalence"
            sub="Contains at least one emotional risk pattern"
          />
          <StatCard
            value={BENCHMARK_CURRENT.noRepairPct}
            label="Safety gate FAIL rate"
            sub="Binary gate fail threshold"
            delay={80}
          />
          <StatCard
            value={BENCHMARK_CURRENT.nValue}
            label="Outputs evaluated"
            sub={`${BENCHMARK_CURRENT.scenarios} scenarios · ${BENCHMARK_CURRENT.domains} behavioral domains`}
            delay={160}
          />
        </div>
        <BaselineLiveLegend className="mt-4 max-w-4xl" />
        <BenchmarkStatusNote className="mt-4 max-w-4xl" />
      </section>

      <section id="framework-structure" className="site-section py-12 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Framework Structure</p>
        <StageDiagram className="max-w-6xl" />
      </section>

      <section id="safety-gate-outcomes" className="site-section py-12 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Safety Gate Outcomes</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mb-4">
          {safetyGateOutcomes.map((item) => (
            <article
              key={item.label}
              className={`card-surface p-5 ${
                item.tone === "danger" ? "risk-panel" : item.tone === "safe" ? "safe-panel" : "border-lilac"
              }`}
            >
              <h3
                className={`font-display text-2xl mb-2 ${
                  item.tone === "danger" ? "text-danger" : item.tone === "safe" ? "text-safe" : "text-lilac"
                }`}
              >
                {item.label}
              </h3>
              <p className="text-sm text-foreground-muted">{item.note}</p>
            </article>
          ))}
        </div>
        <p className="text-sm text-foreground-muted leading-relaxed measure">
          Safety Gate determines whether harmful behavioral patterns appear at all before dimensional scoring.
        </p>
      </section>

      <section id="tier-framework" className="site-section py-12 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Tier Framework</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 max-w-6xl">
          {tierFramework.map((item) => (
            <article key={item.tier} className="card-surface p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-2">{item.tier}</p>
              <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-foreground-muted">{item.action}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="public-dimensions" className="site-section py-12 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Public Dimension Library</p>
        <DimensionsGrid className="max-w-6xl mb-4" />
        <DomainsTagWall className="max-w-6xl" />
      </section>

      <section id="method-overview" className="site-section py-12 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Method Overview</p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 max-w-6xl">
          <figure className="card-surface p-5">
            <figcaption className="text-sm text-foreground-muted mb-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.09em] text-foreground-subtle mr-2">Figure 1</span>
              <span className="text-foreground">Benchmark Outcomes ({BENCHMARK_CURRENT.lastUpdated})</span>
            </figcaption>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <p className="text-sm text-foreground-muted">Emotional risk pattern prevalence</p>
                  <p className="font-mono text-xs text-foreground">{BENCHMARK_CURRENT.failedGatePct}</p>
                </div>
                <div className="h-2 rounded-full bg-background-surface">
                  <div className="h-2 rounded-full bg-danger" style={{ width: `${ssfAnyPct}%` }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <p className="text-sm text-foreground-muted">Safety gate FAIL rate</p>
                  <p className="font-mono text-xs text-foreground">{BENCHMARK_CURRENT.noRepairPct}</p>
                </div>
                <div className="h-2 rounded-full bg-background-surface">
                  <div className="h-2 rounded-full bg-danger" style={{ width: `${gateFailPct}%` }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <p className="text-sm text-foreground-muted">Aggregate safety gate PASS</p>
                  <p className="font-mono text-xs text-foreground">{gatePassPct}%</p>
                </div>
                <div className="h-2 rounded-full bg-background-surface">
                  <div className="h-2 rounded-full bg-safe" style={{ width: `${gatePassPct}%` }} />
                </div>
              </div>
            </div>
            <BaselineLiveLegend className="mt-4" compact />
          </figure>

          <div className="space-y-4">
          <figure className="card-surface p-5">
            <figcaption className="text-sm text-foreground-muted mb-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.09em] text-foreground-subtle mr-2">Figure 2</span>
              <span className="text-foreground">Evaluation Scope and Version Dates</span>
            </figcaption>
            <dl className="grid gap-3 text-sm text-foreground-muted">
              <div className="grid grid-cols-[160px_1fr] gap-3">
                <dt className="font-mono text-[11px] uppercase tracking-[0.09em] text-foreground-subtle">Outputs</dt>
                <dd>{BENCHMARK_CURRENT.nValue}</dd>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-3">
                <dt className="font-mono text-[11px] uppercase tracking-[0.09em] text-foreground-subtle">Scenarios</dt>
                <dd>{BENCHMARK_CURRENT.scenarios}</dd>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-3">
                <dt className="font-mono text-[11px] uppercase tracking-[0.09em] text-foreground-subtle">Behavioral domains</dt>
                <dd>{BENCHMARK_CURRENT.domains}</dd>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-3">
                <dt className="font-mono text-[11px] uppercase tracking-[0.09em] text-foreground-subtle">Released</dt>
                <dd>{BENCHMARK_CURRENT.released}</dd>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-3">
                <dt className="font-mono text-[11px] uppercase tracking-[0.09em] text-foreground-subtle">Last updated</dt>
                <dd>{BENCHMARK_CURRENT.lastUpdated}</dd>
              </div>
            </dl>
          </figure>
          <StabilityBars />
          </div>
        </div>
      </section>

      <section id="boundary" className="site-section py-12 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Access Model</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl">
          <article className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-3">Publicly visible</p>
            <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
              <li>• Eight public dimension names and descriptions</li>
              <li>• Two-layer framework structure and benchmark method overview</li>
              <li>• Aggregate benchmark outcomes and update cadence</li>
              <li>• Dataset scope at benchmark level</li>
            </ul>
          </article>
          <article className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-3">Engagement-only</p>
            <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
              <li>• Detailed scoring mechanics and threshold mappings</li>
              <li>• Detailed scenario definitions and technical mappings</li>
              <li>• Organization-specific evidence and diagnostic outputs</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="version-changelog" className="site-section py-12 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Versioning & Changelog</p>
        <div className="max-w-3xl">
          <Changelog entries={[...CHANGELOG_ENTRIES]} />
        </div>
      </section>

      <section id="eqsb-next-steps" className="site-section py-12 max-w-3xl">
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Start with this framework to align on methodology. Move to engagement to get your organization-specific risk
          baseline and documented decision support.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/intake#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Request Evaluation
          </a>
          <a
            href="#method-overview"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Open benchmark evidence
          </a>
          <a
            href="/audit#deliverables-previews"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors btn-quiet"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View sample outputs
          </a>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <a href="/trust" className="summary-jump">Trust standards</a>
          <a href="/intake#application-form" className="summary-jump">Request intake</a>
        </div>
      </section>
    </PageShell>
  );
}
