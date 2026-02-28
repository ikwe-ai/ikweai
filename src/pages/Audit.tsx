import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";

export default function Audit() {
  const pathway = [
    {
      step: "01",
      title: "Initial Audit",
      body: "Establish behavioral risk exposure, classify failure modes, and create a governance reference point.",
    },
    {
      step: "02",
      title: "Remediation Window",
      body: "Engineering teams address identified high-risk patterns before certification retest.",
    },
    {
      step: "03",
      title: "Retest and Certification",
      body: "Re-run structured evaluation. Issue certification classification based on measured outcomes.",
    },
    {
      step: "04",
      title: "Ongoing Monitoring",
      body: "Quarterly re-evaluation and drift signaling for systems that continue to evolve after deployment.",
    },
  ] as const;

  const measures = [
    "How the system responds when a user is in distress: not just what it says, but whether the response is safe",
    "Whether it repairs after a harmful response, or continues down the same path",
    "Whether risk increases across a conversation over time",
    "Whether the system creates dependency, claims authority it does not have, or routes crises incorrectly",
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Audit & Certification | Ikwe.ai"
        description="Structured behavioral validation with reproducible evidence for board and compliance review."
        path="/audit"
      />

      <section className="py-14 border-b border-border">
        <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-4">Certification Process</p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Know exactly where your system stands.</h1>
        <p className="text-lg text-foreground-muted leading-relaxed max-w-3xl mb-6">
          Ikwe certification is structured behavioral validation with reproducible evidence, not a marketing badge. It
          gives your board and compliance team something defensible.
        </p>
        <div className="summary-headline-strip mb-7 max-w-2xl">
          <div className="summary-headline-item">Evidence-backed</div>
          <div className="summary-headline-item">Version-locked</div>
          <div className="summary-headline-item">Board-ready</div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/request-audit#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
          >
            Start Certification Intake
          </a>
          <a
            href="/archive/architecture"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
          >
            View Governance Framework
          </a>
        </div>
      </section>

      <section id="certification-meaning" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">What Ikwe Certified Means</p>
        <div className="card-surface p-6 max-w-4xl">
          <h2 className="font-display text-2xl text-foreground mb-3">A documented classification, not a marketing badge</h2>
          <p className="text-sm text-foreground-muted leading-relaxed mb-4">
            Ikwe certification means a system has been evaluated against a structured behavioral benchmark, passed a
            defined safety threshold, and completed a follow-up retest after any identified failures were addressed.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-4">
            Certification is issued by Ikwe as an independent evaluator with no commercial affiliation with AI
            developers. The evidence is reproducible and structured for compliance review.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-4">
            Certification does not mean the system is incapable of harm. It means behavioral risk has been measured,
            documented, and addressed to a defined standard at a point in time.
          </p>
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-3">Included Deliverables</p>
          <ul className="space-y-2 text-sm text-foreground-muted">
            <li>• Certification letter with classification band</li>
            <li>• Evidence trail package — scenario battery and scoring summary</li>
            <li>• Executive briefing for risk, compliance, and board stakeholders</li>
          </ul>
        </div>
      </section>

      <section id="pathway" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">
          Audit → Remediation → Retest → Certification → Monitoring
        </p>
        <div className="space-y-0 max-w-3xl">
          {pathway.map((stage) => (
            <div key={stage.step} className="flex gap-6 py-5 border-b border-border last:border-b-0">
              <span className="font-mono text-xs text-lilac w-7 shrink-0 pt-0.5">{stage.step}</span>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">{stage.title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{stage.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-foreground-subtle mt-5">
          AI systems change. A certification with no monitoring attached is a snapshot, not coverage. Monitoring is how
          certification stays meaningful.
        </p>
      </section>

      <section id="measure" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">What We Measure</p>
        <div className="card-surface p-6 max-w-4xl border-safe bg-[hsl(176_30%_18%)]">
          <h2 className="font-display text-2xl text-foreground mb-3">What behavioral safety actually measures</h2>
          <ul className="space-y-3 text-sm text-foreground-muted leading-relaxed">
            {measures.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-safe shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="fit" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Who This Is For</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl">
          <article className="card-surface p-6">
            <h2 className="font-display text-xl text-foreground mb-3">
              Designed for organizations where AI failure has real consequences
            </h2>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li>• Healthcare AI and digital health platforms</li>
              <li>• Mental health, therapy, and crisis technology</li>
              <li>• Enterprise AI in regulated industries — finance, HR, legal</li>
              <li>• Any organization preparing for AI governance requirements</li>
              <li>• Teams that need external validation their internal team cannot provide</li>
            </ul>
          </article>
          <article className="card-surface p-6">
            <h2 className="font-display text-xl text-foreground mb-3">Not A Fit</h2>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li>• Hobbyist or demo applications without deployment plans</li>
              <li>• Consumer tools with no regulated or high-stakes surface area</li>
              <li>• Organizations not yet ready to act on audit findings</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="pricing" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Pricing and Cost Planning</p>
        <p className="text-sm text-foreground-muted leading-relaxed max-w-4xl mb-6">
          Ikwe engagements are scoped to your deployment context, risk profile, and regulatory exposure. Ranges below
          reflect typical engagements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="card-surface p-5">
            <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-2">Diagnostic Audit — $35K–$50K</p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Behavioral risk evaluation, failure mode classification, and board-ready documentation. Starting point for
              all certification engagements.
            </p>
          </article>
          <article className="card-surface p-5">
            <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-2">Certification Engagement — $50K–$75K</p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Full audit + remediation window + retest + certification issuance. Includes evidence package and executive
              briefing.
            </p>
          </article>
          <article className="card-surface p-5">
            <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-2">
              Monitoring Infrastructure — $175K–$250K per endpoint / year
            </p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Quarterly re-evaluation, drift signaling, and updated governance documentation. Multi-endpoint pricing
              available.
            </p>
          </article>
        </div>
        <p className="text-xs text-foreground-subtle mt-4">
          Early identification of behavioral risk consistently reduces legal, regulatory, and incident-response cost.
          Audit cost is not the risk, undetected behavioral failure is.
        </p>
      </section>

      <section id="request-start" className="py-14 max-w-4xl">
        <h2 className="font-display text-2xl text-foreground mb-3">Start your certification intake</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          Tell us about your system, your deployment context, and your timeline. We will review and come back to you
          within two business days with a scope recommendation.
        </p>
        <p className="text-xs text-foreground-subtle leading-relaxed mb-5">
          Fields: Organization name · AI system or product · Deployment context · Regulatory environment · Approximate
          user scale · Timeline · Contact name and email
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/request-audit#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
          >
            Start Certification Intake
          </a>
          <a
            href="/deliverables"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
          >
            View Deliverables & Transparency
          </a>
        </div>
      </section>
    </PageShell>
  );
}
