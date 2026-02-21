import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";
import StatCard from "@/components/StatCard";
import BenchmarkStatusNote from "@/components/BenchmarkStatusNote";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";

export default function EqSafetyBenchmark() {
  return (
    <PageShell>
      <PageMeta
        title="EQ Safety Benchmark (EQSB) | Ikwe.ai"
        description="Public EQ Safety Benchmark overview with current benchmark metrics, framework structure, and audit-start process."
        path="/eq-safety-benchmark"
      />
      <SummaryHero
        kicker="EQSB"
        title="EQ Safety Benchmark (EQSB)"
        summary="Benchmark overview for institutional review. This page shows framework structure, current benchmark outcomes, and report request options."
        highlights={[
          `${BENCHMARK_CURRENT.failedGatePct} failed the Safety Gate at first contact`,
          `${BENCHMARK_CURRENT.noRepairPct} showed no repair behavior after introducing harm`,
          `${BENCHMARK_CURRENT.nValue} outputs across ${BENCHMARK_CURRENT.scenarios} scenarios in ${BENCHMARK_CURRENT.domains} risk domains`,
        ]}
        primaryAction={{ href: "/request-audit#application-form", label: "Request Audit →" }}
        secondaryAction={{ href: "/deliverables", label: "View Deliverables & Transparency" }}
        jumpLinks={[
          { href: "#eqsb-metrics", label: "Current Metrics" },
          { href: "#eqsb-structure", label: "Framework Structure" },
          { href: "#eqsb-boundary", label: "Public Boundary" },
          { href: "#eqsb-next-steps", label: "Next Steps" },
        ]}
      />

      <section id="eqsb-metrics" className="py-10 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Current Benchmark Snapshot</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard value={BENCHMARK_CURRENT.failedGatePct} label="Failed the Safety Gate" sub="Introduced harm at first contact" />
          <StatCard value={BENCHMARK_CURRENT.noRepairPct} label="No repair behavior after harm" sub="Within first-contact failures" delay={80} />
          <StatCard
            value={BENCHMARK_CURRENT.nValue}
            label="Responses evaluated"
            sub={`${BENCHMARK_CURRENT.scenarios} scenarios · ${BENCHMARK_CURRENT.domains} risk domains`}
            delay={160}
          />
        </div>
        <BenchmarkStatusNote className="mt-4 max-w-4xl" />
      </section>

      <section id="eqsb-structure" className="py-12 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Framework Structure</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
          <article className="card-surface p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">Step 1</p>
            <h2 className="font-display text-xl text-foreground mb-2">Safety Gate</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              First-contact behavioral check for severe-risk violations before dimensional scoring begins.
            </p>
          </article>
          <article className="card-surface p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">Step 2</p>
            <h2 className="font-display text-xl text-foreground mb-2">Dimensional Scoring</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Eight weighted behavioral dimensions scored in aggregate for benchmark-level reporting.
            </p>
          </article>
          <article className="card-surface p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">Step 3</p>
            <h2 className="font-display text-xl text-foreground mb-2">Independent Reporting</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Findings are documented for institutional review with clear benchmark-date context.
            </p>
          </article>
        </div>
      </section>

      <section id="eqsb-boundary" className="py-12 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Public Boundary</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl">
          <article className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-3">Publicly Visible</p>
            <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
              <li>• Current metrics and benchmark framing</li>
              <li>• High-level evaluation standards</li>
              <li>• Redacted output standards for institutional review</li>
            </ul>
          </article>
          <article className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-3">Available With Engagement</p>
            <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
              <li>• Expanded benchmark documentation</li>
              <li>• Authorized review materials for governance teams</li>
              <li>• Expanded organization-specific report packages</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="eqsb-next-steps" className="py-12 max-w-3xl">
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          For scope, delivery options, and report packages, start with audit intake.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/request-audit#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Request Audit →
          </a>
          <a
            href="/research"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Open full research overview
          </a>
        </div>
      </section>
    </PageShell>
  );
}
