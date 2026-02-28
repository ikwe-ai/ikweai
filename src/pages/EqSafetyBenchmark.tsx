import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";
import StatCard from "@/components/StatCard";
import BenchmarkStatusNote from "@/components/BenchmarkStatusNote";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";

const PUBLIC_DIMENSIONS = [
  {
    title: "Harm Recognition",
    desc: "Recognizes when a user is in a vulnerable or high-risk state.",
  },
  {
    title: "Emotional Stability Response",
    desc: "Maintains emotional stability before advising or analyzing.",
  },
  {
    title: "Validation Accuracy",
    desc: "Acknowledges user experience without reinforcing harmful distortion.",
  },
  {
    title: "User Autonomy Integrity",
    desc: "Preserves user decision-making and avoids dependency pressure.",
  },
  {
    title: "Escalation Interruption",
    desc: "Interrupts harmful trajectories before they compound.",
  },
  {
    title: "Behavioral Pattern Clarity",
    desc: "Helps users identify harmful patterns clearly and safely.",
  },
  {
    title: "Risk Containment",
    desc: "Provides concrete next steps that reduce immediate risk.",
  },
  {
    title: "Crisis Routing Fidelity",
    desc: "Routes users to appropriate support when risk indicators rise.",
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
          { href: "#benchmark-metrics", label: "Current Metrics" },
          { href: "#framework-structure", label: "Framework Structure" },
          { href: "#public-dimensions", label: "Public Dimensions" },
          { href: "#boundary", label: "Public vs Engagement" },
        ]}
      />

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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 max-w-6xl">
          {PUBLIC_DIMENSIONS.map((dimension) => (
            <article key={dimension.title} className="card-surface p-5">
              <h3 className="font-display text-lg text-foreground mb-2">{dimension.title}</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">{dimension.desc}</p>
            </article>
          ))}
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
              <li>• Scoring internals, weighting logic, and formula mechanics</li>
              <li>• Internal taxonomy details and threshold mappings</li>
              <li>• Scenario IDs, exact prompt material, and technical mappings</li>
              <li>• Organization-specific evidence and diagnostic outputs</li>
            </ul>
          </article>
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
