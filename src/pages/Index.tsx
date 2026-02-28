import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import PageShell from "@/components/PageShell";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";

export default function Home() {
  const stats = [
    {
      value: BENCHMARK_CURRENT.failedGatePct,
      label: "of AI responses introduced harm at first contact",
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

  const loopSteps = [
    "Vulnerable user engages the system",
    "AI responds in a way that amplifies the state",
    "Dependency forms, dysregulation deepens",
    "Risk escalates — and the loop repeats",
  ] as const;

  const evaluationSteps = [
    {
      title: "Safety Gate",
      body: "Binary pass/fail. Did this response introduce harm at first contact? Every response is screened before anything else is scored.",
      tone: "danger",
    },
    {
      title: "Dimensional Scoring",
      body: "8 weighted behavioral dimensions. How well did the system behave across detection, regulation, validation, and repair?",
      tone: "lilac",
    },
    {
      title: "Continuous Monitoring",
      body: "Quarterly re-evaluation catches behavioral drift after deployment, model updates, or prompt changes.",
      tone: "safe",
    },
  ] as const;

  const pillars = [
    {
      title: "Board",
      body: "Defensible audit record for governance review",
    },
    {
      title: "Legal",
      body: "Documented evidence of due diligence",
    },
    {
      title: "Regulators",
      body: "Reproducible, versioned compliance artifacts",
    },
    {
      title: "Users",
      body: "Human-facing systems held to a behavioral standard",
    },
  ] as const;

  return (
    <>
      <PageMeta
        title="Ikwe.ai — Independent Behavioural Safety Validation"
        description="Independent third-party behavioural testing for human-facing AI systems in high-stakes contexts."
        path="/"
      />
      <PageShell>
        <section className="pt-12 pb-14 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">
            Independent Third-Party Behavioral Validation
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-foreground leading-[1.04] max-w-4xl mb-5">
            Your AI system behaves differently under pressure.
            <br />
            Most teams do not find out until it is a liability.
          </h1>
          <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-3xl mb-9">
            Ikwe.ai runs structured behavioral testing on human-facing AI and produces documented evidence your board,
            legal team, and regulators can use.
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
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">The Problem</p>
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
          <p className="text-sm text-foreground-muted mt-6 max-w-4xl">
            From 79 structured scenarios across 12 behavioral risk domains. Updated {BENCHMARK_CURRENT.lastUpdated}.
          </p>
        </section>

        <section className="py-14 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">
            The Behavioral Risk Loop
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed max-w-4xl mb-8">
            When an AI system engages a user in a vulnerable state and responds unsafely, it does not just fail that
            moment. It deepens the harm and creates the conditions for the next failure.
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

          <p className="text-sm text-safe mt-6 font-medium max-w-4xl">
            Left undetected, this pathway leads to self-harm, crisis escalation, legal exposure, and destroyed user
            trust. Ikwe identifies it before it scales.
          </p>
        </section>

        <section className="py-14 border-b border-border">
          <h2 className="font-display text-3xl text-foreground mb-8">How Ikwe evaluates your system</h2>
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
          <h2 className="font-display text-3xl text-foreground mb-5">Who we work with</h2>
          <p className="text-sm text-foreground-muted leading-relaxed max-w-4xl mb-6">
            Ikwe works with organizations deploying AI in contexts where a failed response carries real consequences:
            regulatory, legal, human, or reputational.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed max-w-5xl mb-6">
            Healthcare AI and digital health · Mental health and therapy platforms · Enterprise copilots in regulated
            operations · Financial services · Legal and HR technology · Any human-facing AI system where the stakes are
            real
          </p>
          <p className="text-sm text-foreground">If a bad AI response could become a lawsuit, a regulatory finding, or a patient harm, that is our scope.</p>
        </section>

        <section className="py-14 border-b border-border">
          <h2 className="font-display text-3xl text-foreground mb-7">Why independent validation matters</h2>
          <p className="text-sm text-foreground-muted leading-relaxed max-w-4xl mb-8">
            Internal teams cannot fully validate their own systems. The same team that built the AI is not positioned
            to evaluate whether it is safe for vulnerable users. Ikwe brings structured external evaluation with no
            commercial affiliation with AI developers and no conflicts of interest.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="card-surface p-5">
                <h3 className="font-display text-xl text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-foreground-muted">{pillar.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-14">
          <h2 className="font-display text-3xl text-foreground mb-3">Ready to know where your system stands?</h2>
          <p className="text-sm text-foreground-muted mb-6 max-w-3xl">
            Most teams are surprised by what structured testing surfaces. The audit is where that changes.
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
          <p className="text-sm text-foreground-muted">Ikwe.ai — Independent behavioural safety validation</p>
          <p className="text-xs text-foreground-subtle mt-1">Visible Healing Inc. | Iowa, USA</p>
        </section>
      </PageShell>
    </>
  );
}
