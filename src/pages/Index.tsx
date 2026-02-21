import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import PageShell from "@/components/PageShell";

export default function Home() {
  const stats = [
    { value: "54.7%", label: "Failed the Safety Gate at first contact", compact: false },
    { value: "43%", label: "Showed no repair behavior after introducing harm", compact: false },
    { value: "N = 21,000+", label: "Individual model outputs evaluated", compact: true },
  ] as const;

  const doomLoopStages = [
    {
      title: "User State",
      body: "Vulnerable conditions including anxiety, depression, loneliness, anger, overwhelm, and grief.",
    },
    {
      title: "AI Interaction",
      body: "The system engages during a high-friction moment with elevated behavioral sensitivity.",
    },
    {
      title: "AI Reinforcement",
      body: "The model amplifies and deepens the state instead of interrupting it.",
    },
    {
      title: "Increased Risk",
      body: "Dependency forms, autonomy erodes, and dysregulation deepens.",
    },
    {
      title: "Escalation",
      body: "The risk pathway intensifies and returns to User State, strengthening the loop.",
    },
  ] as const;

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

  const phases = [
    {
      title: "Phase 1 — Safety Gate",
      lines: [
        "Binary pass/fail evaluation.",
        "Did the AI introduce harm at first contact?",
        "Every response is categorized before anything else.",
      ],
    },
    {
      title: "Phase 2 — Multidimensional Scoring",
      lines: [
        "8 behavioral dimensions evaluated.",
        "How well did the system behave, not just whether it avoided harm.",
        "Responses are scored across weighted criteria.",
        "Scoring rubric and weighting are proprietary.",
      ],
    },
    {
      title: "Phase 3 — Real-Time Monitoring",
      lines: [
        "Continuous behavioral tracking once deployed.",
        "Escalates to human oversight when risk indicators rise.",
        "Enables engineering teams to build better guardrails before harm scales.",
        "Available as an additional service for clients.",
      ],
    },
  ] as const;

  const sectors = [
    "Healthcare AI",
    "Mental health technology",
    "Therapy platforms",
    "Pediatric AI",
    "Consumer emotional AI",
  ] as const;

  const trustSignals = [
    { title: "Regulatory trust", body: "Documented compliance evidence" },
    { title: "Board trust", body: "Defensible audit record" },
    { title: "Public trust", body: "Independent third-party validation" },
    { title: "Patient trust", body: "Human-facing systems held to a behavioral standard" },
  ] as const;

  return (
    <>
      <PageMeta
        title="Ikwe.ai — Independent AI Behavioral Validation"
        description="Independent third-party validation layer for AI behavioral safety in high-stakes, human-facing systems."
        path="/"
      />
      <PageShell>
        <section className="pt-12 pb-14 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">
            Independent Third-Party Behavioral Validation
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-foreground leading-[1.04] max-w-4xl mb-4">
            Independent AI Behavioral Auditors
          </h1>
          <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed max-w-3xl mb-3">
            We deliver the independent third-party validation layer for AI systems.
          </p>
          <p className="text-base text-foreground-subtle mb-9">
            Risk containment before it becomes a liability.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/request-audit#application-form"
              className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            >
              Request an Audit
            </a>
            <Link
              to="/research"
              className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors"
            >
              View the Research
            </Link>
          </div>
        </section>

        <section className="py-14 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">The Problem</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((item) => (
              <article key={item.label} className="card-surface p-6">
                <p className={`${item.compact ? "text-2xl md:text-3xl" : "text-4xl md:text-5xl"} font-display text-danger mb-4`}>
                  {item.value}
                </p>
                <p className="text-sm text-foreground-muted leading-relaxed">{item.label}</p>
              </article>
            ))}
          </div>
          <p className="text-sm text-foreground-muted mt-6 max-w-4xl">
            These numbers come from 21,000+ individual AI responses evaluated across 79 structured scenarios in 12
            human behavioral risk domains.
          </p>
        </section>

        <section className="py-14 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">The Doom Loop</p>
          <div className="doom-loop-shell">
            <div className="doom-loop-map hidden lg:grid" role="img" aria-label="Five-stage behavioral risk cycle with Stage 1 intervention point.">
              {doomLoopStages.map((stage, index) => (
                <article
                  key={stage.title}
                  className={`doom-stage-card doom-stage-card-${index + 1}${index === 0 ? " is-gate" : ""}`}
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-subtle mb-2">
                    {index + 1}. {stage.title}
                  </p>
                  <p className="text-sm text-foreground-muted leading-relaxed">{stage.body}</p>
                  {index === 0 ? (
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-safe mt-3">Interruption Gate</p>
                  ) : null}
                </article>
              ))}

              <span className="doom-flow doom-flow-1">→</span>
              <span className="doom-flow doom-flow-2">↓</span>
              <span className="doom-flow doom-flow-3">↙</span>
              <span className="doom-flow doom-flow-4">↖</span>
              <span className="doom-flow doom-flow-5">↗</span>

              <div className="doom-loop-hub">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-subtle">Unchecked Loop</p>
                <p className="text-xs text-foreground-muted mt-1">Behavioral risk compounds with each cycle.</p>
              </div>
            </div>

            <div className="lg:hidden space-y-3">
              {doomLoopStages.map((stage, index) => (
                <div key={stage.title}>
                  <article className={`card-surface p-4 ${index === 0 ? "border-safe/60 bg-safe/10" : "border-danger/40 bg-danger/5"}`}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-subtle mb-1">
                      {index + 1}. {stage.title}
                    </p>
                    <p className="text-xs text-foreground-muted leading-relaxed">{stage.body}</p>
                  </article>
                  {index < doomLoopStages.length - 1 ? (
                    <p className="text-center text-danger font-mono text-xs mt-2">↓</p>
                  ) : (
                    <p className="text-center text-danger font-mono text-xs mt-2">↺</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <article className="card-surface p-5 border-danger/40 bg-danger/5">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-danger mb-3">
                When the loop goes unchecked
              </p>
              <p className="text-sm text-foreground-muted">Self-harm / suicide</p>
              <p className="text-sm text-foreground-muted">Domestic conflict</p>
              <p className="text-sm text-foreground-muted">Financial harm</p>
              <p className="text-sm text-foreground-muted">Crisis escalation</p>
            </article>
            <article className="card-surface p-5 border-danger/40 bg-danger/5">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-danger mb-3">Which leads to</p>
              <p className="text-sm text-foreground-muted">Lawsuits and regulatory action</p>
              <p className="text-sm text-foreground-muted">Liability exposure</p>
              <p className="text-sm text-foreground-muted">Destroyed public trust</p>
              <p className="text-sm text-foreground-muted">Investor confidence collapse</p>
              <p className="text-sm text-foreground-muted">User attrition</p>
            </article>
          </div>

          <p className="text-sm text-safe mt-6 font-medium">
            Ikwe interrupts this loop at Stage 1, before the cycle forms.
          </p>
        </section>

        <section className="py-14 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">The Vulnerable States</p>
          <p className="text-sm text-foreground-muted leading-relaxed max-w-4xl mb-6">
            Our benchmark tests AI systems against structured scenarios drawn from 12 behavioral risk domains, the
            moments people are actually using AI for.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {vulnerableStates.map((state) => (
              <span key={state} className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-xs text-foreground-muted bg-background-card">
                {state}
              </span>
            ))}
          </div>
          <p className="text-sm text-foreground-muted">
            These are not random prompts. They are structured representations of real human stress states.
          </p>
        </section>

        <section className="py-14 border-b border-border">
          <h2 className="font-display text-3xl text-foreground mb-8">How the EQ Safety Benchmark Works</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {phases.map((phase, index) => (
              <article key={phase.title} className="card-surface p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-lilac mb-3">Step {index + 1}</p>
                <h3 className="font-display text-xl text-foreground mb-4">{phase.title}</h3>
                <div className="space-y-2">
                  {phase.lines.map((line) => (
                    <p key={line} className="text-sm text-foreground-muted leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-14 border-b border-border">
          <h2 className="font-display text-3xl text-foreground mb-8">Where we audit</h2>
          <article className="card-surface p-6 mb-5 border-l-4 border-l-safe">
            <p className="font-mono text-xs text-foreground-subtle uppercase tracking-[0.14em] mb-2">Primary Focus</p>
            <p className="font-display text-2xl text-foreground">Patient-AI Interaction</p>
          </article>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
            {sectors.map((sector) => (
              <article key={sector} className="card-surface p-4">
                <p className="text-sm text-foreground-muted">{sector}</p>
              </article>
            ))}
          </div>
          <p className="text-sm text-foreground-muted max-w-4xl">
            Human-facing AI systems in high-stakes environments, where a failed response is not just a bad
            experience. It is a liability.
          </p>
        </section>

        <section className="py-14 border-b border-border">
          <h2 className="font-display text-3xl text-foreground mb-7">Why third-party validation matters</h2>
          <div className="max-w-4xl space-y-4 mb-8">
            <p className="text-sm text-foreground-muted leading-relaxed">
              Every team building an AI system knows there are layers of trust constantly breaking inside it. They
              feel it. They build around it. They cannot fully trust their own output.
            </p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Ikwe is the external validation layer that changes that.
            </p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              We test your system independently, with structured evidence, and produce a documented audit your board
              and regulators can reference.
            </p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              This is not a product review. It is behavioral safety infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {trustSignals.map((signal) => (
              <article key={signal.title} className="card-surface p-5">
                <h3 className="font-display text-xl text-foreground mb-2">{signal.title}</h3>
                <p className="text-sm text-foreground-muted">{signal.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-14 border-b border-border">
          <article className="card-surface p-6">
            <p className="font-mono text-xs text-foreground-subtle uppercase tracking-[0.14em] mb-4">The Proof Metric</p>
            <p className="text-lg text-foreground mb-2">Scenarios run → Harm pathways identified → Systems improved</p>
            <p className="text-sm text-foreground-muted">
              As our benchmark scales, so does the proof.
            </p>
            <p className="text-xs text-foreground-subtle mt-3">
              Number counter can be connected to live benchmark run totals when API wiring is enabled.
            </p>
          </article>
        </section>

        <section className="py-14">
          <h2 className="font-display text-3xl text-foreground mb-4">Ready to know where your system stands?</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/request-audit#application-form"
              className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            >
              Request an Audit
            </a>
            <a
              href="/research"
              className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors"
            >
              Read the Research
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors"
            >
              Contact
            </a>
          </div>
          <p className="text-sm text-foreground-muted">Ikwe.ai — Independent AI Behavioral Validation</p>
          <p className="text-xs text-foreground-subtle mt-1">Visible Healing Inc. | Iowa, USA</p>
        </section>
      </PageShell>
    </>
  );
}
