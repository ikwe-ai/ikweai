import { Link } from "react-router-dom";
import { Landmark, Scale, ShieldCheck, Cpu, ShieldAlert, SlidersHorizontal, Radar } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import PageShell from "@/components/PageShell";
import ActionDock from "@/components/ActionDock";
import BaselineLiveLegend from "@/components/BaselineLiveLegend";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";
import HowItWorksFlow from "@/components/visuals/HowItWorksFlow";

export default function Home() {
  const recognitionFailures = [
    "Mishandle crisis",
    "Escalate distress",
    "Reinforce dependency",
    "Suppress autonomy",
  ] as const;

  const exposureChips = [
    "Governance exposure",
    "Legal vulnerability",
    "Delayed procurement",
    "Remediation costs",
    "Reputational damage",
  ] as const;

  const solutionPillars = [
    {
      title: "Board",
      body: "Defensible audit record for governance review",
      icon: Landmark,
    },
    {
      title: "Legal",
      body: "Documented evidence of behavioral due diligence",
      icon: Scale,
    },
    {
      title: "Compliance",
      body: "Reproducible, versioned compliance evidence packages",
      icon: ShieldCheck,
    },
    {
      title: "Engineering",
      body: "Structured failure mode data your team can act on",
      icon: Cpu,
    },
  ] as const;

  const evaluationSteps = [
    {
      title: "Safety Gate",
      body: "We run a binary fail screen first. If a response crosses defined severe-risk conditions, it fails immediately and is documented for governance action.",
      tone: "danger",
      icon: ShieldAlert,
    },
    {
      title: "Dimensional Scoring",
      body: "Responses that pass the gate are scored across eight behavioral dimensions. This shows where risk concentrates and which failure patterns require remediation first.",
      tone: "lilac",
      icon: SlidersHorizontal,
    },
    {
      title: "Monitoring",
      body: "We re-evaluate after model and prompt changes so you can detect drift before it becomes an incident, complaint, or procurement blocker.",
      tone: "safe",
      icon: Radar,
    },
  ] as const;

  const sectors = [
    "Companion AI platforms",
    "AI mental health systems",
    "Education AI products",
    "Consumer-facing AI systems",
    "Enterprise AI with human consequence",
  ] as const;

  const benchmarkCoverage = [
    {
      title: "Safety Gate (Pass / Fail)",
      body: "Binary pass/fail testing under stress. Outcome: launch risk determination.",
    },
    {
      title: "Eight Behavioral Dimensions",
      body: "Dimensional scoring for behavioral stability, vulnerability handling, and recovery capacity after failure.",
    },
    {
      title: "Coverage (Execution)",
      body: `${BENCHMARK_CURRENT.nValue} · ${BENCHMARK_CURRENT.scenarios} scenarios · ${BENCHMARK_CURRENT.domains} behavioral domains (vulnerability categories).`,
    },
  ] as const;

  const deliverablesPreview = [
    "Executive Risk Summary",
    "Severity Classification",
    "Scenario-Level Findings Appendix",
    "Remediation Roadmap",
  ] as const;

  const dimensions = [
    "Escalation Stability",
    "Vulnerable User Response",
    "Manipulation Susceptibility",
    "Power Asymmetry",
    "Multi-turn Trajectory",
    "Dependency Reinforcement",
    "Correction & Recovery",
    "Stress Condition Performance",
  ] as const;

  const exploreLinks = [
    { href: "/benchmark", label: "Benchmark framework" },
    { href: "/benchmark#method-overview", label: "Benchmark evidence" },
    { href: "/audit#deliverables-previews", label: "Sample outputs" },
    { href: "/audit", label: "Audit pathway" },
  ] as const;

  const parsePercent = (value: string) => Number.parseFloat(value.replace("%", ""));
  const railBars = [
    { label: "Emotional risk pattern prevalence", value: parsePercent(BENCHMARK_CURRENT.failedGatePct), tone: "danger" },
    { label: "Safety gate fail rate", value: parsePercent(BENCHMARK_CURRENT.noRepairPct), tone: "danger" },
  ] as const;

  return (
    <>
      <PageMeta
        title="Ikwe.ai - The Behavioral Safety Layer for AI"
        description="Independent behavioral safety validation for human-facing AI systems. Built to detect behavioral drift under emotional pressure before harm, liability, or headlines."
        path="/"
      />
      <PageShell>
        <section className="site-section pt-12 pb-14 border-b border-border home-hero">
          <div className="home-hero-layout">
            <div>
              <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">
                Independent validation for human-facing AI systems
              </p>
              <h1 className="font-display fluid-title text-foreground measure-tight mb-5">
                The Behavioral Safety Layer for AI.
              </h1>
              <p className="text-foreground-muted lede mb-9">
                Independent behavioral safety validation for human-facing AI systems. It is not whether it can help.
                It is whether it can be trusted not to harm.
              </p>
              <p className="text-sm text-foreground-muted leading-relaxed measure mb-7 text-pretty">
                If your system interacts with users in vulnerable moments, you need evidence of how it behaves under
                pressure and its behavioral risk.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/intake#application-form"
                  className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
                >
                  Request Evaluation
                </Link>
                <a
                  href="/benchmark"
                  className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
                >
                  View the Benchmark
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                {exploreLinks.map((item) => (
                  <a key={item.href} href={item.href} className="summary-jump">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <aside className="home-hero-rail card-surface p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-subtle mb-3">Current Snapshot</p>
              <p className="text-xs text-foreground-muted mb-3">
                EQ Safety Benchmark {BENCHMARK_CURRENT.version} · Updated {BENCHMARK_CURRENT.lastUpdated}
              </p>
              <div className="space-y-3">
                {railBars.map((bar) => (
                  <div key={bar.label}>
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <p className="text-xs text-foreground-muted">{bar.label}</p>
                      <p className="font-mono text-[11px] text-foreground">{bar.value.toFixed(1)}%</p>
                    </div>
                    <div className="h-2 rounded-full bg-background-surface">
                      <div
                        className={`h-2 rounded-full ${bar.tone === "danger" ? "bg-danger" : "bg-safe"}`}
                        style={{ width: `${bar.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-foreground-subtle mt-4">
                {BENCHMARK_CURRENT.nValue} · {BENCHMARK_CURRENT.scenarios} scenarios · {BENCHMARK_CURRENT.domains} behavioral domains
              </p>
              <BaselineLiveLegend className="mt-3" compact />
            </aside>
          </div>
        </section>

        <section className="site-section py-12 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">The Problem</p>
          <h2 className="font-display fluid-heading text-foreground mb-4">Recognition is not safety.</h2>
          <p className="text-sm text-foreground-muted leading-relaxed measure mb-7 text-pretty">
            An AI can sound empathetic, acknowledge distress, and still cause harm. The failures are often invisible
            until they become a cost.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-5">
            {recognitionFailures.map((item) => (
              <article key={item} className="card-surface p-5 risk-panel">
                <h3 className="font-display text-xl text-foreground mb-2">{item}</h3>
                <p className="text-sm text-foreground-muted">Behavioral failure mode with governance impact.</p>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {exposureChips.map((chip) => (
              <span key={chip} className="summary-jump">{chip}</span>
            ))}
          </div>
        </section>

        <section className="site-section py-12 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Solution</p>
          <h2 className="font-display fluid-heading text-foreground mb-5">Eight dimensions. One clear answer.</h2>
          <p className="text-sm text-foreground-muted leading-relaxed measure mb-8 text-pretty">
            Purpose-built to measure behavioral safety failure in emotionally loaded interactions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mb-5">
            {benchmarkCoverage.map((item) => (
              <article key={item.title} className="card-surface p-5">
                <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
          <article className="card-surface p-5 max-w-6xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-3">Eight dimensions</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
              {dimensions.map((dimension) => (
                <p key={dimension} className="text-sm text-foreground-muted border border-border rounded-md px-3 py-2 bg-background-card">
                  {dimension}
                </p>
              ))}
            </div>
          </article>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mt-5">
            <article className="card-surface p-5">
              <h3 className="font-display text-xl text-foreground mb-2">Safety Gate outcomes and tier framework</h3>
              <p className="text-sm text-foreground-muted mb-3">
                Full pass/fail outcome definitions and Tier I-IV decision mapping are on the Benchmark page.
              </p>
              <a href="/benchmark#framework-structure" className="summary-jump">Open benchmark detail</a>
            </article>
            <article className="card-surface p-5">
              <h3 className="font-display text-xl text-foreground mb-2">Engagement levels and package path</h3>
              <p className="text-sm text-foreground-muted mb-3">
                Baseline Gate, Full Benchmark, and Ongoing Governance levels are organized on the Audit pathway page.
              </p>
              <a href="/audit#engagement-levels" className="summary-jump">Open engagement levels</a>
            </article>
          </div>
        </section>

        <section className="site-section py-12 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Offering</p>
          <h2 className="font-display fluid-heading text-foreground mb-5">Independent behavioral validation built for critical AI decisions.</h2>
          <article className="card-surface p-6 max-w-5xl mb-6">
            <h3 className="font-display text-2xl text-foreground mb-3">Board-Ready Deliverables</h3>
            <p className="text-sm text-foreground-muted leading-relaxed mb-5 max-w-3xl">
              Documentation executives can use to decide: launch, remediate, monitor, or pause.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
              {deliverablesPreview.map((item) => (
                <p key={item} className="text-sm text-foreground-muted border border-border rounded-md px-3 py-2 bg-background-card">
                  {item}
                </p>
              ))}
            </div>
            <a href="/audit#deliverables-previews" className="link-lilac">View sample outputs →</a>
          </article>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {solutionPillars.map((pillar) => (
              <article key={pillar.title} className="card-surface p-5">
                <span className="home-icon-chip">
                  <pillar.icon size={15} aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-foreground-muted">{pillar.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="site-section py-12 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Steps</p>
          <h2 className="font-display fluid-heading text-foreground mb-5">How it works</h2>
          <HowItWorksFlow className="max-w-6xl mb-4" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {evaluationSteps.map((step, index) => (
              <article
                key={step.title}
                className={`card-surface p-6 ${
                  step.tone === "danger" ? "border-danger" : step.tone === "safe" ? "border-safe" : "border-lilac"
                }`}
              >
                <span className="home-step-icon">
                  <step.icon size={16} aria-hidden="true" />
                </span>
                <p
                  className={`font-mono text-[11px] uppercase tracking-[0.14em] mb-3 ${
                    step.tone === "danger" ? "text-danger" : step.tone === "safe" ? "text-safe" : "text-lilac"
                  }`}
                >
                  Step {index + 1}
                </p>
                <h3 className="font-display text-xl text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <ActionDock
          title="Next Step"
          subtitle="Request evaluation, review benchmark depth, or open sample outputs."
          items={[
            { href: "/intake#application-form", label: "Request Evaluation", tone: "primary" },
            { href: "/benchmark", label: "View Benchmark", tone: "outline" },
            { href: "/audit#deliverables-previews", label: "Sample Outputs", tone: "quiet" },
          ]}
        />

        <section className="site-section py-14 border-b border-border">
          <h2 className="font-display fluid-heading text-foreground mb-5">Who this is for</h2>
          <p className="text-sm text-foreground-muted leading-relaxed measure mb-6 text-pretty">
            If your system touches human vulnerability, behavioral risk must be measured.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="home-sector-chip inline-flex items-center rounded-full border border-border px-3 py-1.5 text-xs text-foreground-muted bg-background-card"
              >
                {sector}
              </span>
            ))}
          </div>
        </section>

        <section className="site-section py-14">
          <h2 className="font-display fluid-heading text-foreground mb-3">Know where your system stands.</h2>
          <p className="text-sm text-foreground-muted mb-6 measure-tight text-pretty">
            Get a third-party baseline before launch risk becomes board risk.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/intake#application-form"
              className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            >
              Request Evaluation
            </a>
            <a
              href="/benchmark"
              className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
            >
              View Benchmark
            </a>
            <a
              href="/benchmark#method-overview"
              className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors btn-quiet"
            >
              View Evidence
            </a>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <a href="/audit#deliverables-previews" className="summary-jump">Sample outputs</a>
            <a href="/audit" className="summary-jump">Audit &amp; Validation</a>
            <a href="/trust" className="summary-jump">Trust Standards</a>
          </div>
          <p className="text-sm text-foreground-muted">ikwe.ai - The Behavioral Safety Layer for AI</p>
          <p className="text-xs text-foreground-subtle mt-1">Visible Healing Inc. | Iowa, USA</p>
        </section>
      </PageShell>
    </>
  );
}
