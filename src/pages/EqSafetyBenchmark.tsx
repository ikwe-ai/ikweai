import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";
import StatCard from "@/components/StatCard";
import BenchmarkStatusNote from "@/components/BenchmarkStatusNote";
import VersionCard from "@/components/VersionCard";
import DefinitionCallout from "@/components/DefinitionCallout";
import DimensionTable from "@/components/DimensionTable";
import Changelog from "@/components/Changelog";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";

const PUBLIC_DIMENSIONS = [
  {
    title: "Harm Recognition",
    desc: "Recognizes when a user is in a vulnerable or high-risk state.",
    measured: "Detection quality for direct and indirect vulnerability signals in first-contact turns.",
    scenarios: "Crisis cues, severe distress disclosures",
  },
  {
    title: "Response Sequencing",
    desc: "Stabilizes before solving or analyzing.",
    measured: "Response stability under dysregulated user affect and pressure-loaded prompts.",
    scenarios: "Panic, grief, high-arousal exchanges",
  },
  {
    title: "Validation Accuracy",
    desc: "Acknowledges user experience without reinforcing harmful distortion.",
    measured: "Validation behavior that supports user context without amplifying maladaptive beliefs.",
    scenarios: "Shame loops, catastrophic interpretations",
  },
  {
    title: "User Autonomy Integrity",
    desc: "Preserves user decision-making and avoids dependency pressure.",
    measured: "Evidence of preserving user agency and avoiding coercive or dependency-framing responses.",
    scenarios: "Authority transfer, repeated reassurance seeking",
  },
  {
    title: "Escalation Interruption",
    desc: "Interrupts harmful trajectories before they compound.",
    measured: "Ability to halt intensifying harmful trajectories once risk markers are present.",
    scenarios: "Rumination spirals, anger escalation",
  },
  {
    title: "Behavioral Pattern Clarity",
    desc: "Helps users identify harmful patterns clearly and safely.",
    measured: "Clarity and usefulness of pattern-level guidance without overreach or false certainty.",
    scenarios: "Relationship conflict, career-trigger loops",
  },
  {
    title: "Risk Containment",
    desc: "Provides concrete next steps that reduce immediate risk.",
    measured: "Specificity and safety quality of immediate containment guidance in elevated-risk moments.",
    scenarios: "Self-harm ideation, acute overwhelm",
  },
  {
    title: "Crisis Routing Fidelity",
    desc: "Routes users to appropriate support when risk indicators rise.",
    measured: "Timely routing to external support and fidelity of escalation recommendations.",
    scenarios: "Imminent risk, inability-to-self-regulate cues",
  },
] as const;

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

  return (
    <PageShell>
      <PageMeta
        title="EQ Safety Benchmark | Ikwe.ai"
        description="Public framework for behavioral safety evaluation in human-facing AI: Safety Gate, public dimensions, and benchmark-level outcomes."
        path="/benchmark"
      />
      <SummaryHero
        kicker="Public Framework"
        title="EQ Safety Benchmark"
        summary="The EQ Safety Benchmark is Ikwe's public framework for behavioral safety evaluation in human-facing AI systems. It defines what is measured, how benchmark outcomes are interpreted, and what is published publicly versus through engagement."
        highlights={[
          `${BENCHMARK_CURRENT.failedGatePct} SSF-Any prevalence`,
          `${BENCHMARK_CURRENT.noRepairPct} aggregate safety gate fail rate`,
          `${BENCHMARK_CURRENT.nValue} responses across ${BENCHMARK_CURRENT.scenarios} scenarios in ${BENCHMARK_CURRENT.domains} categories`,
        ]}
        primaryAction={{ href: "/intake#application-form", label: "Request Validation Sprint" }}
        secondaryAction={{ href: "/research", label: "View Research Evidence" }}
        jumpLinks={[
          { href: "#benchmark-version", label: "Version & Scope" },
          { href: "#benchmark-metrics", label: "Current Metrics" },
          { href: "#framework-structure", label: "Framework Structure" },
          { href: "#public-dimensions", label: "Public Dimensions" },
          { href: "#method-overview", label: "Method Overview" },
          { href: "#boundary", label: "Public vs Engagement" },
          { href: "#version-changelog", label: "Version Changelog" },
        ]}
      />

      <section id="benchmark-version" className="py-10 border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_1fr] gap-4 max-w-6xl">
          <VersionCard
            version={`EQ Safety Benchmark ${BENCHMARK_CURRENT.version}`}
            releaseDate={BENCHMARK_CURRENT.released}
            scope="Behavioral and emotional risk evaluation for human-facing AI"
            appliesTo="Conversational systems operating in emotionally sensitive contexts"
          />
          <div className="space-y-4">
            <p className="text-sm text-foreground-muted leading-relaxed">
              Current public version is <span className="text-foreground">{BENCHMARK_CURRENT.version}</span>, updated{" "}
              {BENCHMARK_CURRENT.lastUpdated}.
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

      <section id="benchmark-metrics" className="py-10 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Current Benchmark Snapshot</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            value={BENCHMARK_CURRENT.failedGatePct}
            label="SSF-Any prevalence"
            sub="Contains at least one SSF pattern"
          />
          <StatCard
            value={BENCHMARK_CURRENT.noRepairPct}
            label="Aggregate safety gate FAIL"
            sub="Binary gate fail threshold"
            delay={80}
          />
          <StatCard
            value={BENCHMARK_CURRENT.nValue}
            label="Responses scored"
            sub={`${BENCHMARK_CURRENT.scenarios} scenarios · ${BENCHMARK_CURRENT.domains} categories`}
            delay={160}
          />
        </div>
        <BenchmarkStatusNote className="mt-4 max-w-4xl" />
      </section>

      <section id="framework-structure" className="py-12 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Framework Structure</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
          <article className="card-surface p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">Layer 1</p>
            <h2 className="font-display text-xl text-foreground mb-2">Safety Gate</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              First-contact screen that flags severe behavioral safety failures before dimensional scoring.
            </p>
          </article>
          <article className="card-surface p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">Layer 2</p>
            <h2 className="font-display text-xl text-foreground mb-2">Dimensional Scoring</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Aggregate scoring across eight public dimensions to characterize trajectory risk and response quality.
            </p>
          </article>
          <article className="card-surface p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">Output</p>
            <h2 className="font-display text-xl text-foreground mb-2">Independent Reporting</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Versioned benchmark outcomes for governance and public reference at aggregate level.
            </p>
          </article>
        </div>
      </section>

      <section id="public-dimensions" className="py-12 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Public Dimension Library</p>
        <DimensionTable
          rows={PUBLIC_DIMENSIONS.map((dimension) => ({
            name: dimension.title,
            definition: dimension.desc,
            measured: dimension.measured,
            scenarios: dimension.scenarios,
          }))}
        />
      </section>

      <section id="method-overview" className="py-12 border-b border-border">
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
                  <p className="text-sm text-foreground-muted">SSF-Any prevalence</p>
                  <p className="font-mono text-xs text-foreground">{BENCHMARK_CURRENT.failedGatePct}</p>
                </div>
                <div className="h-2 rounded-full bg-background-surface">
                  <div className="h-2 rounded-full bg-danger" style={{ width: `${ssfAnyPct}%` }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <p className="text-sm text-foreground-muted">Aggregate safety gate FAIL</p>
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
          </figure>

          <figure className="card-surface p-5">
            <figcaption className="text-sm text-foreground-muted mb-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.09em] text-foreground-subtle mr-2">Figure 2</span>
              <span className="text-foreground">Evaluation Scope and Version Dates</span>
            </figcaption>
            <dl className="grid gap-3 text-sm text-foreground-muted">
              <div className="grid grid-cols-[160px_1fr] gap-3">
                <dt className="font-mono text-[11px] uppercase tracking-[0.09em] text-foreground-subtle">Responses</dt>
                <dd>{BENCHMARK_CURRENT.nValue}</dd>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-3">
                <dt className="font-mono text-[11px] uppercase tracking-[0.09em] text-foreground-subtle">Scenarios</dt>
                <dd>{BENCHMARK_CURRENT.scenarios}</dd>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-3">
                <dt className="font-mono text-[11px] uppercase tracking-[0.09em] text-foreground-subtle">Categories</dt>
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
        </div>
      </section>

      <section id="boundary" className="py-12 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Public vs Engagement Boundary</p>
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
              <li>• Detailed scoring methodology, weighting logic, and formula mechanics</li>
              <li>• Taxonomy details and threshold mappings</li>
              <li>• Scenario IDs, exact prompt material, and technical mappings</li>
              <li>• Organization-specific evidence and diagnostic outputs</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="version-changelog" className="py-12 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Versioning & Changelog</p>
        <div className="max-w-3xl">
          <Changelog entries={[...CHANGELOG_ENTRIES]} />
        </div>
      </section>

      <section id="eqsb-next-steps" className="py-12 max-w-3xl">
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Use the public benchmark framework to understand the model. Use audit engagement to apply it to your system.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/intake#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Request Validation Sprint
          </a>
          <a
            href="/research"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Open research evidence
          </a>
          <a
            href="/deliverables"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors btn-quiet"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View deliverables
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
