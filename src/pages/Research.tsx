import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";
import BenchmarkStatusNote from "@/components/BenchmarkStatusNote";
import {
  BENCHMARK_CURRENT,
  BENCHMARK_LOG_REQUEST,
  BENCHMARK_PUBLIC_LOG,
} from "@/lib/benchmark-data";

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
    "+ more",
  ] as const;

  const dimensionHighlights = [
    { title: "8 dimensions evaluated", text: "Each benchmark run scores eight weighted behavioral dimensions." },
    { title: "Aggregate reporting", text: "Dimension outcomes are published in aggregate at benchmark level." },
    { title: "Weighting protected", text: "Dimension weighting logic is proprietary and not publicly disclosed." },
    { title: "Client confidentiality", text: "No dimension-level scores are published by client organization." },
  ] as const;

  const phase1Fail = Number.parseFloat(BENCHMARK_CURRENT.failedGatePct);
  const phase2NoRepair = Number.parseFloat(BENCHMARK_CURRENT.noRepairPct);

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
        kicker={`Research Summary · Updated ${BENCHMARK_CURRENT.lastUpdated}`}
        title="EQ Safety Benchmark"
        summary="This page explains benchmark-level evidence in plain language: what N means, how scenarios are structured, what Phase 1 and Phase 2 measured, and how aggregate dimensional scoring is reported."
        highlights={[
          `${BENCHMARK_CURRENT.nValue} individual model outputs evaluated`,
          `${BENCHMARK_CURRENT.scenarios} structured scenarios across ${BENCHMARK_CURRENT.domains} behavioral risk domains`,
          "Two-phase system: Safety Gate + 8-dimension weighted scoring",
        ]}
        primaryAction={{ href: "/request-audit#application-form", label: "Request Full Report Access" }}
        secondaryAction={{ href: "/request-audit#application-form", label: "Request an Audit" }}
        jumpLinks={[
          { href: "#dataset-scope", label: "N and Scope" },
          { href: "#phase-1-results", label: "Phase 1 Results" },
          { href: "#phase-2-results", label: "Phase 2 Results" },
          { href: "#dimension-aggregate", label: "8-Dimension Aggregate" },
          { href: "#failure-breakdown", label: "Failure Breakdown" },
          { href: "#full-report", label: "Full Report" },
        ]}
        visual={{
          title: "Benchmark Snapshot",
          points: [
            `${BENCHMARK_CURRENT.nValue} model outputs evaluated`,
            `${BENCHMARK_CURRENT.scenarios} structured scenarios across ${BENCHMARK_CURRENT.domains} risk domains`,
            `${BENCHMARK_CURRENT.failedGatePct} failed Safety Gate at first contact`,
            `${BENCHMARK_CURRENT.noRepairPct} showed no repair behavior after harm`,
          ],
          tone: "teal",
        }}
      />

      <section id="dataset-scope" className="py-12 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-7">N and Scenario Scope</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <article className="card-surface p-5">
            <p className="font-display text-3xl text-foreground mb-2">{BENCHMARK_CURRENT.nValue}</p>
            <p className="text-sm text-foreground-muted">Individual model outputs evaluated</p>
          </article>
          <article className="card-surface p-5">
            <p className="font-display text-3xl text-foreground mb-2">{BENCHMARK_CURRENT.scenarios}</p>
            <p className="text-sm text-foreground-muted">Structured benchmark scenarios</p>
          </article>
          <article className="card-surface p-5">
            <p className="font-display text-3xl text-foreground mb-2">{BENCHMARK_CURRENT.domains}</p>
            <p className="text-sm text-foreground-muted">Human behavioral risk domains</p>
          </article>
        </div>
        <article className="card-surface p-6 max-w-4xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-subtle mb-3">Plain-Language Scope</p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-3">
            N is the total number of individual AI responses tested, not the number of companies or clients.
            The {BENCHMARK_CURRENT.scenarios} scenarios represent structured test conditions spanning high-risk human states.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-4">
            Our benchmark tests AI systems against structured scenarios drawn from {BENCHMARK_CURRENT.domains} behavioral risk domains, the
            moments people are actually using AI for.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {vulnerableStates.map((state) => (
              <span
                key={state}
                className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-xs text-foreground-muted bg-background-card"
              >
                {state}
              </span>
            ))}
          </div>
          <p className="text-sm text-foreground-muted leading-relaxed">
            These are not random prompts. They are structured representations of real human stress states.
          </p>
        </article>
        <BenchmarkStatusNote className="mt-4 max-w-4xl" />
      </section>

      <section id="phase-1-results" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Phase 1 — Safety Gate Results</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="card-surface p-6">
            <p className="font-display text-5xl text-danger mb-2">{BENCHMARK_CURRENT.failedGatePct}</p>
            <p className="text-sm text-foreground-muted">Failed the Safety Gate at first contact</p>
          </article>
          <article className="card-surface p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-subtle mb-2">Interpretation</p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Phase 1 is binary. It only asks whether harm was introduced at first contact.
            </p>
          </article>
        </div>
      </section>

      <section id="phase-2-results" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Phase 2 — Post-Harm Behavior</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <article className="card-surface p-6">
            <p className="font-display text-5xl text-danger mb-2">{BENCHMARK_CURRENT.noRepairPct}</p>
            <p className="text-sm text-foreground-muted">Showed no repair behavior after introducing harm</p>
          </article>
          <article className="card-surface p-6">
            <p className="font-display text-5xl text-foreground mb-2">57%</p>
            <p className="text-sm text-foreground-muted">Showed at least some repair signal after introducing harm</p>
          </article>
          <article className="card-surface p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-subtle mb-2">Phase Relation</p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Phase 2 behavior is evaluated only within responses that introduced harm in Phase 1.
            </p>
          </article>
        </div>
        <p className="text-xs text-foreground-subtle mt-5">
          57% is shown as the complement of the {BENCHMARK_CURRENT.noRepairPct} no-repair result within the Phase 1 harm population.
        </p>
      </section>

      <section id="dimension-aggregate" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">8-Dimension Aggregate</p>
        <p className="text-sm text-foreground-muted leading-relaxed max-w-4xl mb-6">
          The system is scored across 8 weighted behavioral dimensions. Weighting logic remains proprietary.
          Aggregate dimension outcomes are published at benchmark level, never by individual client.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dimensionHighlights.map((item) => (
            <article key={item.title} className="card-surface p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-lilac mb-2">{item.title}</p>
              <p className="text-sm text-foreground-muted leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="text-xs text-foreground-subtle mt-5">
          For exact aggregate score values across all eight dimensions, use the full EQ Safety Benchmark report.
        </p>
      </section>

      <section id="failure-breakdown" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">
          Visual Breakdown of the {BENCHMARK_CURRENT.failedGatePct} First-Contact Failures
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
          Failing responses are then mapped across the eight dimensions in aggregate to identify dominant harm pathways and
          remediation priorities before deployment scale.
        </p>
      </section>

      <section id="full-report" className="py-14">
        <article className="card-surface p-6 max-w-4xl">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-[0.14em] mb-3">Full EQ Safety Benchmark Access</p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-5">
            Full benchmark materials are available on request for institutional review. Public pages remain the default
            source for current benchmark framing.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/request-audit#application-form"
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
          </div>
          <p className="text-xs text-foreground-subtle mt-4">
            Need a PDF copy? Email <a href="mailto:research@ikwe.ai" className="link-lilac">research@ikwe.ai</a> with
            the deliverable name. If a styled PDF is not available, we can provide the equivalent web-copy version.
          </p>
          <div className="mt-5 pt-4 border-t border-border">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-subtle mb-2">Public Update Log</p>
            {BENCHMARK_PUBLIC_LOG.map((entry) => (
              <p key={`${entry.date}-${entry.label}`} className="text-xs text-foreground-muted leading-relaxed mb-1">
                <span className="text-foreground">{entry.date}</span> · {entry.label}
              </p>
            ))}
            <p className="text-xs text-foreground-subtle leading-relaxed mt-2">
              Need full version history and change notes?{" "}
              <a href={BENCHMARK_LOG_REQUEST.href} className="link-lilac underline">
                {BENCHMARK_LOG_REQUEST.label}
              </a>
              .
            </p>
          </div>
        </article>
      </section>
    </PageShell>
  );
}
