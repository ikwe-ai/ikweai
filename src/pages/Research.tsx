import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function Research() {
  const aggregateDimensions = [
    { key: "A", descriptor: "Aggregate reported in full EQSB report" },
    { key: "B", descriptor: "Aggregate reported in full EQSB report" },
    { key: "C", descriptor: "Aggregate reported in full EQSB report" },
    { key: "D", descriptor: "Aggregate reported in full EQSB report" },
    { key: "E", descriptor: "Aggregate reported in full EQSB report" },
    { key: "F", descriptor: "Aggregate reported in full EQSB report" },
    { key: "G", descriptor: "Aggregate reported in full EQSB report" },
    { key: "H", descriptor: "Aggregate reported in full EQSB report" },
  ] as const;

  const phase1Fail = 54.7;
  const phase2NoRepair = 43;

  const derived = [
    { label: "Failed Safety Gate at first contact", value: phase1Fail },
    { label: "Showed no repair behavior after introducing harm", value: phase2NoRepair },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Research — EQ Safety Benchmark | Ikwe.ai"
        description="Benchmark-level research summary for EQ Safety Benchmark with dataset scope, phase breakdowns, dimensional reporting structure, and full report access."
        path="/research"
      />
      <SummaryHero
        kicker="Research Summary · Updated February 20, 2026"
        title="EQ Safety Benchmark"
        summary="This page explains benchmark-level evidence in plain language: what N means, how scenarios and subsets are defined, what Phase 1 and Phase 2 measured, and how aggregate dimensional scoring is reported."
        highlights={[
          "N = 21,000+ individual model outputs evaluated",
          "79 structured scenarios across 12 behavioral risk domains",
          "Two-phase system: Safety Gate + 8-dimension weighted scoring",
        ]}
        primaryAction={{ href: "/artifacts/ikwe_full_research_report.pdf", label: "Open Full EQ Safety Benchmark Report" }}
        secondaryAction={{ href: "/request-audit#application-form", label: "Request an Audit" }}
        jumpLinks={[
          { href: "#dataset-scope", label: "N and Scope" },
          { href: "#phase-1-results", label: "Phase 1 Results" },
          { href: "#phase-2-results", label: "Phase 2 Results" },
          { href: "#dimension-aggregate", label: "8-Dimension Aggregate" },
          { href: "#failure-breakdown", label: "Failure Breakdown" },
          { href: "#full-report", label: "Full Report" },
        ]}
      />

      <section id="dataset-scope" className="py-12 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-7">N, Scenarios, and Subsets</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <article className="card-surface p-5">
            <p className="font-display text-3xl text-foreground mb-2">N = 21,000+</p>
            <p className="text-sm text-foreground-muted">Individual model outputs evaluated</p>
          </article>
          <article className="card-surface p-5">
            <p className="font-display text-3xl text-foreground mb-2">79</p>
            <p className="text-sm text-foreground-muted">Structured benchmark scenarios</p>
          </article>
          <article className="card-surface p-5">
            <p className="font-display text-3xl text-foreground mb-2">12</p>
            <p className="text-sm text-foreground-muted">Human behavioral risk domains</p>
          </article>
        </div>
        <article className="card-surface p-6 max-w-4xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-subtle mb-3">Plain-Language Scope</p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-3">
            N is the total number of individual AI responses tested, not the number of companies or clients.
            The 79 scenarios represent structured test conditions spanning high-risk human states.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-3">
            Results are reported in subsets so teams can separate first-contact safety failure from downstream repair quality.
          </p>
          <ul className="space-y-2 text-sm text-foreground-muted">
            <li>• First-contact subset: used for Phase 1 Safety Gate classification.</li>
            <li>• Post-harm subset: used for repair-behavior analysis.</li>
            <li>• Dimensional subset: scored across 8 weighted dimensions (A-H).</li>
          </ul>
        </article>
      </section>

      <section id="phase-1-results" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Phase 1 — Safety Gate Results</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <article className="card-surface p-6">
            <p className="font-display text-5xl text-danger mb-2">54.7%</p>
            <p className="text-sm text-foreground-muted">Failed the Safety Gate at first contact</p>
          </article>
          <article className="card-surface p-6">
            <p className="font-display text-5xl text-foreground mb-2">45.3%</p>
            <p className="text-sm text-foreground-muted">Cleared the Safety Gate at first contact</p>
          </article>
          <article className="card-surface p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-subtle mb-2">Interpretation</p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Phase 1 is binary. It only asks whether harm was introduced at first contact.
            </p>
          </article>
        </div>
        <p className="text-xs text-foreground-subtle mt-5">45.3% is shown as the complement of the 54.7% first-contact failure rate.</p>
      </section>

      <section id="phase-2-results" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Phase 2 — Post-Harm Behavior</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <article className="card-surface p-6">
            <p className="font-display text-5xl text-danger mb-2">43%</p>
            <p className="text-sm text-foreground-muted">Showed no repair behavior after introducing harm</p>
          </article>
          <article className="card-surface p-6">
            <p className="font-display text-5xl text-foreground mb-2">57%</p>
            <p className="text-sm text-foreground-muted">Showed at least some repair signal after introducing harm</p>
          </article>
          <article className="card-surface p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-subtle mb-2">Subset Logic</p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Phase 2 behavior is evaluated on the subset of outputs that already introduced harm.
            </p>
          </article>
        </div>
        <p className="text-xs text-foreground-subtle mt-5">
          57% is shown as the complement of the 43% no-repair result within the post-harm subset.
        </p>
      </section>

      <section id="dimension-aggregate" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">8-Dimension Aggregate (A-H)</p>
        <p className="text-sm text-foreground-muted leading-relaxed max-w-4xl mb-6">
          The system is scored across 8 weighted behavioral dimensions. Weighting logic remains proprietary.
          Aggregate dimension outcomes are published at benchmark level, never by individual client.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {aggregateDimensions.map((dimension) => (
            <article key={dimension.key} className="card-surface p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-lilac mb-2">Dimension {dimension.key}</p>
              <p className="text-sm text-foreground-muted leading-relaxed">{dimension.descriptor}</p>
            </article>
          ))}
        </div>
        <p className="text-xs text-foreground-subtle mt-5">
          For exact aggregate score values by dimension, use the full EQ Safety Benchmark report.
        </p>
      </section>

      <section id="failure-breakdown" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">
          Visual Breakdown of the 54.7% First-Contact Failures
        </p>
        <div className="card-surface p-6 max-w-4xl mb-6">
          <div className="space-y-4">
            {derived.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between gap-3 mb-1">
                  <p className="text-sm text-foreground-muted">{item.label}</p>
                  <p className="font-mono text-xs text-foreground">{item.value.toFixed(1)}%</p>
                </div>
                <div className="h-2 rounded-full bg-background-surface">
                  <div className="h-2 rounded-full bg-danger" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-foreground-muted max-w-4xl">
          Failing responses are then mapped across dimensions A-H in aggregate to identify dominant harm pathways and
          remediation priorities before deployment scale.
        </p>
      </section>

      <section id="full-report" className="py-14">
        <article className="card-surface p-6 max-w-4xl">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-[0.14em] mb-3">Full EQ Safety Benchmark Report</p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-5">
            Full methodology, aggregate dimensional tables, phase-level appendices, and redaction boundary details are
            documented in the complete report artifact.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/artifacts/ikwe_full_research_report.pdf"
              className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Open Full Report PDF
            </a>
            <a
              href="/deliverables"
              className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors"
            >
              View Deliverables
            </a>
          </div>
        </article>
      </section>
    </PageShell>
  );
}
