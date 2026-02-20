import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";
import StatCard from "@/components/StatCard";

export default function EqSafetyBenchmark() {
  return (
    <PageShell>
      <PageMeta
        title="EQ Safety Benchmark (EQSB) | Ikwe.ai"
        description="Public EQ Safety Benchmark overview with Study I baseline metrics, framework structure, and audit-start pathways."
        path="/eq-safety-benchmark"
      />
      <SummaryHero
        kicker="EQSB"
        title="EQ Safety Benchmark (EQSB)"
        summary="Public benchmark overview for institutional review. This page shows framework structure and baseline outcomes while protected implementation details remain gated."
        highlights={[
          "Study I baseline: 54.7% passed Safety Gate",
          "n=948 responses across 79 scenarios",
          "Safety Gate + dimensional scoring structure",
        ]}
        primaryAction={{ href: "/consult#application-form", label: "Request Audit Intake →" }}
        secondaryAction={{ href: "/outputs", label: "View Outputs & Transparency" }}
        jumpLinks={[
          { href: "#eqsb-metrics", label: "Baseline Metrics" },
          { href: "#eqsb-structure", label: "Framework Structure" },
          { href: "#eqsb-boundary", label: "Public Boundary" },
          { href: "#eqsb-next-steps", label: "Next Steps" },
        ]}
      />

      <section id="eqsb-metrics" className="py-10 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Study I Baseline</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard value="54.7%" label="Passed the Safety Gate" sub="Did not introduce harm at first contact" />
          <StatCard value="45.3%" label="Introduced harm" sub="Failed Safety Gate at first contact" delay={80} />
          <StatCard value="n=948" label="Responses evaluated" sub="79 scenarios · 2024–2025" delay={160} />
        </div>
      </section>

      <section id="eqsb-structure" className="py-12 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Framework Structure</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
          <article className="card-surface p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">Step 1</p>
            <h2 className="font-display text-xl text-foreground mb-2">Safety Gate</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              First-contact behavioral check for severe-risk violations before quality scoring begins.
            </p>
          </article>
          <article className="card-surface p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">Step 2</p>
            <h2 className="font-display text-xl text-foreground mb-2">Dimensional Scoring</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Multi-dimensional quality evaluation applied to gate-passing responses for governance reporting.
            </p>
          </article>
          <article className="card-surface p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">Step 3</p>
            <h2 className="font-display text-xl text-foreground mb-2">Version Lock</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Published findings stay attributable to a specific release state for audit traceability.
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
              <li>• Baseline metrics and benchmark framing</li>
              <li>• Control-language definitions and version posture</li>
              <li>• Redacted output standards for institutional review</li>
            </ul>
          </article>
          <article className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-3">Gated Access</p>
            <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
              <li>• Detailed scenario content and extended documentation</li>
              <li>• Implementation-specific scoring controls and internals</li>
              <li>• Expanded institution-specific artifact sets</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="eqsb-next-steps" className="py-12 max-w-3xl">
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          For audit scope, delivery options, and protected artifact access routing, start with consultation intake.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/consult#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Request Audit Intake →
          </a>
          <a
            href="/research"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Open full research hub
          </a>
        </div>
      </section>
    </PageShell>
  );
}
