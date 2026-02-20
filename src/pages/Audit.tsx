import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function Audit() {
  const pathway = [
    {
      step: "01",
      title: "Baseline Audit",
      body: "Establish behavioral risk exposure, classify failure modes, and set the initial governance baseline.",
    },
    {
      step: "02",
      title: "Remediation Window",
      body: "Teams address identified high-risk patterns before certification retest.",
    },
    {
      step: "03",
      title: "Retest and Certification Decision",
      body: "Re-run structured evaluation and issue Ikwe certification classification based on measured outcomes.",
    },
    {
      step: "04",
      title: "Monitoring",
      body: "Quarterly re-evaluation and drift signaling for systems that continue to evolve post-deployment.",
    },
  ] as const;

  const measures = [
    "Emotional calibration under stress-sensitive exchanges",
    "Repair adequacy after risk-raising responses",
    "Drift resilience across model and version changes",
    "Governance integrity through traceable, repeatable artifacts",
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Ikwe Certified™ — Independent Third-Party Behavioral Validation"
        description="Governance-grade behavioral evaluation and certification for AI systems in high-trust regulated environments."
        path="/audit"
      />
      <SummaryHero
        kicker="Certification Pathway"
        title="Ikwe Certified™ — Independent Third-Party Behavioral Validation"
        summary="Governance-grade evaluation and certification for AI systems deployed in healthcare and other high-trust, regulated environments."
        highlights={[
          "Evidence-backed",
          "Version-locked",
          "Board-ready",
        ]}
        primaryAction={{ href: "/request-audit#application-form", label: "Request Certification Intake" }}
        secondaryAction={{ href: "/technology/architecture", label: "View Governance Framework" }}
        jumpLinks={[
          { href: "#certification-meaning", label: "What It Means" },
          { href: "#pathway", label: "Pathway" },
          { href: "#measure", label: "What We Measure" },
          { href: "#pricing", label: "Pricing" },
          { href: "#request-start", label: "Request Intake" },
        ]}
      />

      <section id="certification-meaning" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">What Ikwe Certified Means</p>
        <div className="card-surface p-6 max-w-4xl">
          <h2 className="font-display text-2xl text-foreground mb-3">A documented classification, not a marketing badge</h2>
          <p className="text-sm text-foreground-muted leading-relaxed mb-4">
            Ikwe certification indicates a system has passed a defined behavioral safety threshold under structured testing
            and completed follow-up retest after remediation. Certification is issued by Ikwe as an independent evaluator,
            with reproducible evidence suitable for compliance and governance review.
          </p>
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-3">Included Artifacts</p>
          <ul className="space-y-2 text-sm text-foreground-muted">
            <li>• Certification letter with classification band</li>
            <li>• Evidence trail package (scenario battery and scoring summary)</li>
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
          Certification without monitoring is incomplete in systems that update over time.
        </p>
      </section>

      <section id="measure" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">What We Measure</p>
        <div className="card-surface p-6 max-w-3xl">
          <h2 className="font-display text-2xl text-foreground mb-3">Behavioral safety under real stress conditions</h2>
          <ul className="space-y-3 text-sm text-foreground-muted leading-relaxed">
            {measures.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-lilac shrink-0">•</span>
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
            <h2 className="font-display text-xl text-foreground mb-3">Designed for regulated and high-trust deployments</h2>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li>• Healthcare AI and digital health platforms</li>
              <li>• Patient and member-facing conversational systems</li>
              <li>• Enterprise copilots in regulated workflows</li>
              <li>• Organizations preparing for AI governance requirements</li>
            </ul>
          </article>
          <article className="card-surface p-6">
            <h2 className="font-display text-xl text-foreground mb-3">Not A Fit</h2>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li>• Hobbyist applications</li>
              <li>• Consumer demos without compliance surface area</li>
              <li>• Early prototypes without deployment plans</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="pricing" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Institutional Pricing (New Engagements)</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="card-surface p-5">
            <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-2">Diagnostic Audit</p>
            <h3 className="font-display text-2xl text-foreground">$35K–$50K</h3>
          </article>
          <article className="card-surface p-5">
            <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-2">Certification Engagement</p>
            <h3 className="font-display text-2xl text-foreground">$50K–$75K</h3>
          </article>
          <article className="card-surface p-5">
            <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-2">Monitoring Infrastructure</p>
            <h3 className="font-display text-2xl text-foreground">$175K–$250K ARR / endpoint</h3>
          </article>
        </div>
        <p className="text-xs text-foreground-subtle mt-4">
          Custom enterprise scope is available for multi-endpoint deployments.
        </p>
      </section>

      <section id="request-start" className="py-14 max-w-3xl">
        <p className="font-display text-2xl text-foreground mb-3">Request Certification Intake</p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Submit organization, deployment context, regulatory exposure, user scale, timeline, and contact details.
          Intake is reviewed for institutional fit and delivery scope.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/request-audit#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Request certification intake →
          </a>
          <a
            href="/outputs"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View outputs and transparency
          </a>
        </div>
      </section>
    </PageShell>
  );
}
