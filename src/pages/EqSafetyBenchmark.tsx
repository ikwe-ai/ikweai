import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";
import StatCard from "@/components/StatCard";
import BenchmarkStatusNote from "@/components/BenchmarkStatusNote";
import VersionCard from "@/components/VersionCard";
import DefinitionCallout from "@/components/DefinitionCallout";
import DimensionTable from "@/components/DimensionTable";
import Changelog from "@/components/Changelog";
import FrameworkDiagram from "@/components/FrameworkDiagram";
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
    version: "v1.0 (current update)",
    date: BENCHMARK_CURRENT.lastUpdated,
    notes: "Current published snapshot and aggregate benchmark metrics refresh, including retest coverage for all newly added models.",
  },
] as const;

export default function EqSafetyBenchmark() {
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
          `${BENCHMARK_CURRENT.failedGatePct} introduced harm at first contact`,
          `${BENCHMARK_CURRENT.noRepairPct} showed no repair behavior after introducing harm`,
          `${BENCHMARK_CURRENT.nValue} outputs across ${BENCHMARK_CURRENT.scenarios} scenarios in ${BENCHMARK_CURRENT.domains} risk domains`,
        ]}
        primaryAction={{ href: "/request-audit#application-form", label: "Request an Audit" }}
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
            version="EQ Safety Benchmark v1.0"
            releaseDate={BENCHMARK_CURRENT.released}
            scope="Behavioral and emotional risk evaluation for human-facing AI"
            appliesTo="Conversational systems operating in emotionally sensitive contexts"
          />
          <div className="space-y-4">
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
            label="Introduced harm at first contact"
            sub="Safety Gate result"
          />
          <StatCard
            value={BENCHMARK_CURRENT.noRepairPct}
            label="No repair behavior after harm"
            sub="Within first-contact failures"
            delay={80}
          />
          <StatCard
            value={BENCHMARK_CURRENT.nValue}
            label="Responses evaluated"
            sub={`${BENCHMARK_CURRENT.scenarios} scenarios · ${BENCHMARK_CURRENT.domains} risk domains`}
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
        <div className="max-w-6xl">
          <FrameworkDiagram
            variant="matrix"
            figureNumber={1}
            title="Public Dimension Matrix"
            caption="Illustrative mapping of the eight public dimensions against risk intensity and response quality."
          />
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
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_330px] gap-4 max-w-6xl">
          <div className="space-y-4">
            <FrameworkDiagram
              variant="trajectory"
              figureNumber={2}
              title="Trajectory Tracking Figure"
              caption="Illustrative trajectory chart used to represent behavioral risk trend and intervention checkpoints."
            />
            <FrameworkDiagram
              variant="tier"
              figureNumber={3}
              title="Tier Classification Figure"
              caption="Illustrative tier model for governance interpretation and remediation prioritization."
            />
          </div>
          <Changelog entries={[...CHANGELOG_ENTRIES]} />
        </div>
      </section>

      <section id="eqsb-next-steps" className="py-12 max-w-3xl">
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Use the public benchmark framework to understand the model. Use audit engagement to apply it to your system.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/request-audit#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Request Audit
          </a>
          <a
            href="/research"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Open research evidence
          </a>
        </div>
      </section>
    </PageShell>
  );
}
