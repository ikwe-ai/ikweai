import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";

export default function Audit() {
  const pathway = [
    {
      step: "01",
      title: "Audit",
      body: "Independent behavioral risk baseline across your live deployment context. We classify failure modes, establish severity, and produce a governance-ready record you can use immediately.",
      includes: [
        "Board-ready audit brief",
        "Risk classification and failure mode map",
        "Versioned evidence package for compliance review",
      ],
      pricing: "Pricing is shared in a scoped proposal after intake review.",
      tone: "default",
    },
    {
      step: "02",
      title: "Implementation Support",
      body: "This is not a handoff. Ikwe works with your team as a remediation partner to translate findings into concrete changes before retest.",
      includes: [
        "Remediation planning by failure mode",
        "Prompt/guardrail update support",
        "Retest readiness and governance documentation updates",
      ],
      pricing: "Billable stage. Scope and commercial terms are set during remediation planning.",
      tone: "default",
    },
    {
      step: "03",
      title: "Active Monitoring",
      body: "Behavioral risk shifts after model updates, prompt changes, and scale expansion. Monitoring keeps your governance record current and catches drift before incident escalation.",
      includes: [
        "Quarterly re-evaluation cycles",
        "Drift alerts and updated risk signals",
        "Continuous governance continuity artifacts",
      ],
      pricing: "Monitoring scope and commercial terms are set by endpoint profile and deployment context.",
      tone: "default",
    },
    {
      step: "04",
      title: "Certification (Coming)",
      body: "Ikwe certification is in formal program development for 2026. Eligibility is pathway-based, not application-based, and follows completed audit, implementation support, and monitoring cycle standards.",
      includes: [],
      pricing: "Program in development (2026)",
      tone: "coming",
    },
  ] as const;

  const fit = [
    "Healthcare AI and digital health platforms",
    "Mental health, therapy, and crisis technology",
    "Enterprise AI in regulated industries: finance, HR, legal",
    "Consumer conversational AI with vulnerable user populations",
    "Teams that need independent validation for governance readiness",
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Audit & Validation | Ikwe.ai"
        description="Four-stage engagement pathway: audit, implementation support, active monitoring, and certification readiness."
        path="/audit"
      />

      <section className="py-14 border-b border-border">
        <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-4">Engagement Pathway</p>
        <h1 className="font-display fluid-title text-foreground mb-4">Audit &amp; Validation</h1>
        <p className="text-foreground-muted lede mb-6">
          Ikwe is the independent behavioral validation layer for human-facing AI. This pathway is designed to move
          from measured baseline to operational risk control, without guesswork and without governance blind spots.
        </p>
        <div className="summary-headline-strip mb-7 max-w-3xl">
          <div className="summary-headline-item">Independent</div>
          <div className="summary-headline-item">Versioned</div>
          <div className="summary-headline-item">Governance-grade</div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/request-audit#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
          >
            Request an Audit
          </a>
          <a
            href="/deliverables"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
          >
            View Deliverables
          </a>
        </div>
      </section>

        <section id="pathway" className="py-14 border-b border-border">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">
            Audit → Implementation Support → Active Monitoring → Certification
          </p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 max-w-6xl">
          {pathway.map((stage) => (
            <article
              key={stage.step}
              className={`card-surface p-6 ${
                stage.tone === "coming" ? "border-border-2 bg-background-surface" : ""
              }`}
            >
              <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-2">Stage {stage.step}</p>
              <h2 className="font-display text-2xl text-foreground mb-3">{stage.title}</h2>
              <p className="text-sm text-foreground-muted leading-relaxed mb-4">{stage.body}</p>

              {stage.includes.length > 0 ? (
                <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed mb-4">
                  {stage.includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              ) : null}

              <p className={`text-xs ${stage.tone === "coming" ? "text-foreground-subtle" : "text-lilac"}`}>
                {stage.pricing}
              </p>
            </article>
          ))}
        </div>

        <p className="text-sm text-foreground-muted mt-6 measure text-pretty">
          Organizations that complete the full validation cycle are eligible for Ikwe certification as the program
          formalizes.
        </p>
        <p className="text-xs text-foreground-subtle mt-2 measure text-pretty">
          Commercial terms are provided through scoped review and audit intake, not published on the public page.
        </p>
      </section>

      <section id="fit" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Who This Is For</p>
        <article className="card-surface p-6 max-w-5xl">
          <h2 className="font-display text-xl text-foreground mb-3">
            Designed for organizations where conversational AI failure has real consequences
          </h2>
          <ul className="space-y-2 text-sm text-foreground-muted">
            {fit.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section id="request-start" className="py-14 max-w-4xl">
        <h2 className="font-display fluid-heading text-foreground mb-3">Request an Audit</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5 measure text-pretty">
          Tell us what your system does, where it is deployed, and what timeline you are targeting. We will respond
          within two business days with a scoped recommendation.
        </p>
        <div className="flex flex-wrap gap-3">
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
        </div>
      </section>
    </PageShell>
  );
}
