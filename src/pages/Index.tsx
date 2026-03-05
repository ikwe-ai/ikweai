import { Link } from "react-router-dom";
import { Landmark, Scale, ShieldCheck, Cpu, ShieldAlert, SlidersHorizontal, Radar } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import PageShell from "@/components/PageShell";
import ActionDock from "@/components/ActionDock";
import BaselineLiveLegend from "@/components/BaselineLiveLegend";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";
import HowItWorksFlow from "@/components/visuals/HowItWorksFlow";
import DriftCurve from "@/components/visuals/DriftCurve";

export default function Home() {
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
      title: "Regulators",
      body: "Reproducible, versioned compliance evidence packages",
      icon: ShieldCheck,
    },
    {
      title: "Engineering",
      body: "Structured failure mode data your team can act on",
      icon: Cpu,
    },
  ] as const;

  const stats = [
    {
      value: BENCHMARK_CURRENT.failedGatePct,
      label: "of evaluated outputs showed at least one emotional risk pattern",
      tone: "danger",
    },
    {
      value: BENCHMARK_CURRENT.noRepairPct,
      label: "failed the Safety Gate threshold",
      tone: "danger",
    },
    {
      value: BENCHMARK_CURRENT.nShort,
      label: "outputs evaluated (public benchmark total)",
      tone: "safe",
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

  const loopSteps = [
    "A user engages the system in a vulnerable state",
    "The AI responds in a way that amplifies rather than interrupts the state",
    "Dependency forms, autonomy erodes, dysregulation deepens",
    "Risk escalates and the cycle repeats",
  ] as const;

  const sectors = [
    "Enterprise AI in regulated operations",
    "Financial services",
    "Legal and HR platforms",
    "Government and public sector services",
    "Healthcare AI and digital health",
    "Mental health and therapy technology",
    "Consumer AI with vulnerable user populations",
  ] as const;

  const deliverablesPreview = [
    "Executive Risk Summary",
    "Severity Classification",
    "Scenario-Level Findings Appendix",
    "Remediation Roadmap",
  ] as const;

  const benchmarkCoverage = [
    {
      title: "Safety Gate (Pass / Fail)",
      body: "Stage 1 is binary. Every first-contact output is classified as pass or fail before anything else.",
    },
    {
      title: "Eight Behavioral Dimensions",
      body: "Stage 2 scores only Stage 1 PASS outputs across eight quality dimensions to locate risk concentration.",
    },
    {
      title: `${BENCHMARK_CURRENT.scenarios} Structured Scenarios`,
      body: "This is the public Safety Study baseline scenario set. Scenario scope expands as additional study runs are added.",
    },
    {
      title: `${BENCHMARK_CURRENT.nValue}`,
      body: `${BENCHMARK_CURRENT.domains} behavioral domains (vulnerability categories), including anxiety, depression, grief, and crisis escalation.`,
    },
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
                Independent validation for AI systems that interact with humans. Built for the moment things actually go
                wrong.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/benchmark"
                  className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
                >
                  See the Benchmark
                </Link>
                <a
                  href="/intake#application-form"
                  className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
                >
                  Request a Validation Briefing
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
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Problem</p>
          <h2 className="font-display fluid-heading text-foreground mb-4">Risk is visible too late in most AI rollouts.</h2>
          <p className="text-sm text-foreground-muted leading-relaxed measure mb-7 text-pretty">
            Teams usually measure utility, latency, and correctness. They do not measure emotional risk trajectories
            early enough to prevent exposure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {stats.map((item) => (
              <article
                key={item.label}
                className={`card-surface p-6 ${item.tone === "danger" ? "risk-panel" : "safe-panel"}`}
              >
                <p
                  className={`text-4xl md:text-5xl font-display mb-4 ${
                    item.tone === "danger" ? "text-danger" : "text-safe"
                  }`}
                >
                  {item.value}
                </p>
                <p className="text-sm text-foreground-muted leading-relaxed">{item.label}</p>
              </article>
            ))}
          </div>
          <BaselineLiveLegend className="max-w-5xl" />
        </section>

        <section className="site-section py-12 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Trajectory of Harm and Risk</p>
          <h2 className="font-display fluid-heading text-foreground mb-4">AI failure is often trajectory, not single-event error.</h2>
          <p className="text-sm text-foreground-muted leading-relaxed measure mb-6 text-pretty">
            This is the progression we measure: initial instability, amplification, and compounding risk before visible incident.
          </p>
          <DriftCurve className="max-w-6xl" />
        </section>

        <ActionDock
          title="Next Step"
          subtitle="Review evidence quickly, then request a scoped independent evaluation."
          items={[
            { href: "/intake#application-form", label: "Request Evaluation", tone: "primary" },
            { href: "/benchmark", label: "View Benchmark", tone: "outline" },
            { href: "/audit#deliverables-previews", label: "Sample Outputs", tone: "quiet" },
          ]}
        />

        <section className="site-section py-12 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Solution</p>
          <h2 className="font-display fluid-heading text-foreground mb-5">Benchmark at a glance</h2>
          <p className="text-sm text-foreground-muted leading-relaxed measure mb-8 text-pretty">
            The EQ Safety Benchmark has two parts: Stage 1 pass/fail Safety Gate, then Stage 2 scoring across eight
            behavioral dimensions. The Safety Study applies this benchmark to model cohorts, starting with the
            79-scenario baseline and expanding over time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl">
            {benchmarkCoverage.map((item) => (
              <article key={item.title} className="card-surface p-5">
                <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="site-section py-12 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Offering</p>
          <h2 className="font-display fluid-heading text-foreground mb-5">Audit-ready outputs built for real operating decisions.</h2>
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

        <section className="site-section py-14 border-b border-border">
          <h2 className="font-display fluid-heading text-foreground mb-5">Who engages Ikwe</h2>
          <p className="text-sm text-foreground-muted leading-relaxed measure mb-6 text-pretty">
            We work with teams deploying conversational AI where a failed response has legal, regulatory, financial, or
            human consequence.
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
          <p className="text-sm text-foreground">
            If the behavioral failure of your AI system could become a liability (regulatory, legal, or reputational),
            that is our scope.
          </p>
        </section>

        <section className="site-section py-14 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Why risk compounds</p>
          <p className="text-sm text-foreground-muted leading-relaxed measure mb-8 text-pretty">
            In vulnerable contexts, one unsafe interaction often increases the probability of the next.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {loopSteps.map((step, index) => (
              <article key={step} className="card-surface p-5 risk-panel">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-danger mb-2">
                  {index + 1}
                </p>
                <p className="text-sm text-foreground-muted leading-relaxed">{step}</p>
              </article>
            ))}
          </div>

          <p className="text-sm text-safe mt-6 font-medium measure text-pretty">
            This loop is measurable. Ikwe&apos;s evaluation framework identifies it at the pattern level before it reaches
            incident scale.
          </p>
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
