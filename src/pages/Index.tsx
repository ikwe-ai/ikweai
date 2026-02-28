import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import PageShell from "@/components/PageShell";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";

export default function Home() {
  const solutionPillars = [
    {
      title: "Board",
      body: "Defensible audit record for governance review",
    },
    {
      title: "Legal",
      body: "Documented evidence of behavioral due diligence",
    },
    {
      title: "Regulators",
      body: "Reproducible, versioned compliance artifacts",
    },
    {
      title: "Engineering",
      body: "Structured failure mode data your team can act on",
    },
  ] as const;

  const stats = [
    {
      value: BENCHMARK_CURRENT.failedGatePct,
      label: "of responses introduced harm at first contact",
      tone: "danger",
    },
    {
      value: BENCHMARK_CURRENT.noRepairPct,
      label: "showed no repair behavior after causing harm",
      tone: "danger",
    },
    {
      value: BENCHMARK_CURRENT.nShort,
      label: "individual model outputs evaluated",
      tone: "safe",
    },
  ] as const;

  const evaluationSteps = [
    {
      title: "Safety Gate",
      body: "Binary pass/fail applied before any scoring. Every response is checked against 10 defined behavioral violations. Any violation triggers a Prohibited classification, independent of dimensional score. This catches the worst failures before they reach the scoring layer.",
      tone: "danger",
    },
    {
      title: "Dimensional Scoring",
      body: "8 weighted behavioral dimensions evaluated across responses that pass the Safety Gate: detection and triage, emotional regulation, validation accuracy, agency preservation, loop interruption, pattern externalization, practical containment, and safety routing. Output is a weighted composite score with a five-band classification.",
      tone: "lilac",
    },
    {
      title: "Monitoring",
      body: "Behavioral risk is not static. Model updates, prompt changes, and deployment scale all shift the risk profile. Quarterly re-evaluation surfaces drift before it becomes a documented failure.",
      tone: "safe",
    },
  ] as const;

  const loopSteps = [
    "A user engages the system in a vulnerable state",
    "The AI responds in a way that amplifies rather than interrupts the state",
    "Dependency forms, autonomy erodes, dysregulation deepens",
    "Risk escalates and the cycle repeats",
  ] as const;

  return (
    <>
      <PageMeta
        title="Ikwe.ai - Independent Behavioral Safety Validation"
        description="The independent behavioral safety validation layer for human-facing AI in high-stakes contexts."
        path="/"
      />
      <PageShell>
        <section className="pt-12 pb-14 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">
            Independent Behavioral Safety Validation
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-foreground leading-[1.04] max-w-5xl mb-5">
            The standard for human-facing AI is not whether it can help.
            <br />
            It is whether it can be trusted not to harm.
          </h1>
          <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-4xl mb-9">
            Any AI system that talks to people in emotionally sensitive moments carries behavioral risk. Ikwe is the
            independent layer that measures it with structured evidence your board, legal team, and regulators can
            use.
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
              className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
            >
              View the Research
            </Link>
          </div>
        </section>

        <section className="py-14 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">The Category</p>
          <h2 className="font-display text-3xl text-foreground mb-5">
            Conversational AI in high-stakes contexts is a different engineering problem.
          </h2>
          <div className="max-w-5xl space-y-4">
            <p className="text-sm text-foreground-muted leading-relaxed">
              When AI systems handle users in emotionally vulnerable states (anxiety, grief, crisis, relationship
              distress, financial stress), the behavioral surface area expands dramatically. Standard functional testing
              does not cover it.
            </p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              This is not a failure of intent. Teams building these systems are working at the frontier of what AI can
              do. The gap is structural: emotional contexts expose behavioral patterns that only appear under specific
              conditions, in specific sequences, at scale.
            </p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Recognizing an emotion accurately is not the same as responding to it safely. An AI system can score well
              on empathy metrics and still escalate harm, suppress autonomy, or fail to route a crisis. Recognition is
              not safety. Measurement is.
            </p>
            <p className="text-base text-foreground">Recognition is not safety. Measurement is.</p>
          </div>
        </section>

        <section className="py-14 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">The Solution</p>
          <h2 className="font-display text-3xl text-foreground mb-5">Ikwe is the independent behavioral validation layer.</h2>
          <div className="max-w-5xl space-y-4 mb-8">
            <p className="text-sm text-foreground-muted leading-relaxed">
              We run structured evaluation on human-facing AI systems using the EQ Safety Benchmark, a two-layer
              framework that measures behavioral safety risk across emotionally sensitive contexts.
            </p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Every evaluation produces versioned, reproducible documentation. Not a score on a dashboard. A defensible
              audit record structured for board review, compliance reference, and regulatory inquiry.
            </p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              We have no commercial affiliation with AI developers. Our independence is structural, not claimed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {solutionPillars.map((pillar) => (
              <article key={pillar.title} className="card-surface p-5">
                <h3 className="font-display text-xl text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-foreground-muted">{pillar.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-14 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">The Evidence</p>
          <p className="text-sm text-foreground-muted leading-relaxed max-w-5xl mb-7">
            Across 21,000+ individual model outputs, evaluated against 79 structured scenarios in 12 behavioral risk
            domains, this is what structured behavioral evaluation surfaces in unvalidated systems:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((item) => (
              <article
                key={item.label}
                className={`card-surface p-6 ${
                  item.tone === "danger" ? "border-danger bg-[hsl(8_34%_18%)]" : "border-safe bg-[hsl(176_30%_18%)]"
                }`}
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
          <p className="text-sm text-foreground-muted leading-relaxed max-w-5xl mt-6">
            These are baseline rates across the category. Your system may perform better or worse. Structured
            evaluation is how you find out before a user does.
          </p>
          <p className="text-xs text-foreground-subtle mt-3">EQ Safety Benchmark - Updated {BENCHMARK_CURRENT.lastUpdated}</p>
        </section>

        <section className="py-14 border-b border-border">
          <h2 className="font-display text-3xl text-foreground mb-8">How the evaluation works</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {evaluationSteps.map((step, index) => (
              <article
                key={step.title}
                className={`card-surface p-6 ${
                  step.tone === "danger" ? "border-danger" : step.tone === "safe" ? "border-safe" : "border-lilac"
                }`}
              >
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

        <section className="py-14 border-b border-border">
          <h2 className="font-display text-3xl text-foreground mb-5">Where we work</h2>
          <p className="text-sm text-foreground-muted leading-relaxed max-w-5xl mb-6">
            Ikwe works with any organization deploying conversational AI in contexts where a failed response carries
            real consequences: regulatory, legal, clinical, financial, or human.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed max-w-5xl mb-6">
            Healthcare AI and digital health - Mental health and therapy technology - Financial services - Legal and HR
            platforms - Enterprise AI in regulated operations - Consumer AI with vulnerable user populations
          </p>
          <p className="text-sm text-foreground">
            If the behavioral failure of your AI system could become a liability (regulatory, legal, or reputational),
            that is our scope.
          </p>
        </section>

        <section className="py-14 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">
            The Behavioral Risk Loop
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed max-w-5xl mb-8">
            In emotionally sensitive contexts, AI behavioral failures are not isolated events. They create conditions
            for the next failure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {loopSteps.map((step, index) => (
              <article key={step} className="card-surface p-5 border-danger bg-[hsl(8_34%_18%)]">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-danger mb-2">
                  {index + 1}
                </p>
                <p className="text-sm text-foreground-muted leading-relaxed">{step}</p>
              </article>
            ))}
          </div>

          <p className="text-sm text-safe mt-6 font-medium max-w-5xl">
            This loop is measurable. Ikwe&apos;s evaluation framework identifies it at the pattern level before it reaches
            incident scale.
          </p>
        </section>

        <section className="py-14">
          <h2 className="font-display text-3xl text-foreground mb-3">Know where your system stands.</h2>
          <p className="text-sm text-foreground-muted mb-6 max-w-3xl">
            Structured evaluation takes the guesswork out of behavioral safety. The audit is where that starts.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/request-audit#application-form"
              className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            >
              Request an Audit
            </a>
            <a
              href="/research"
              className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
            >
              Read the Research
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors btn-quiet"
            >
              Contact
            </a>
          </div>
          <p className="text-sm text-foreground-muted">Ikwe.ai - Independent behavioral safety validation</p>
          <p className="text-xs text-foreground-subtle mt-1">Visible Healing Inc. | Iowa, USA</p>
        </section>
      </PageShell>
    </>
  );
}
