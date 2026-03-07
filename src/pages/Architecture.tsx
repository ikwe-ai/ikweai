import PageShell from "@/components/PageShell";
import GatedCallout from "@/components/GatedCallout";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function Architecture() {
  const pipeline = [
    {
      step: "01",
      title: "Scenario Testing",
      body:
        "Structured scenario testing runs the system through high-risk behavioral conditions drawn from emotionally sensitive user contexts. This creates a controlled evidence set that shows how the system behaves before institutional buyers rely on internal claims alone.",
    },
    {
      step: "02",
      title: "Safety Gate Screening",
      body:
        "First-contact responses are screened for harmful behavioral patterns before any broader scoring is applied. For buyers, this matters because an early fail condition creates a clear threshold for escalation, remediation, and launch restraint.",
    },
    {
      step: "03",
      title: "Independent Evaluation",
      body:
        "Outputs are reviewed under consistent conditions by an independent evaluation process rather than by the system builder. That separation gives legal, compliance, and procurement teams a record they can defend beyond internal QA documentation.",
    },
    {
      step: "04",
      title: "Dimensional Scoring",
      body:
        "Responses are scored across defined behavioral safety dimensions so risk is not reduced to a single anecdotal failure. Institutional buyers need this structure because it translates model behavior into comparable patterns, severity, and remediation priorities.",
    },
    {
      step: "05",
      title: "Governance Reporting",
      body:
        "Findings are converted into documented governance evidence for launch decisions, oversight review, and downstream monitoring. This stage matters because institutions need a durable record that can travel across product, legal, compliance, procurement, and board review.",
    },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Architecture — Evaluation Pipeline | Ikwe.ai"
        description="Public architecture overview for the EQ Safety Benchmark evaluation pipeline and governance controls."
        path="/technology/architecture"
      />
      <SummaryHero
        kicker="System Overview"
        title="Architecture"
        summary="Behavioral safety cannot be self-certified. The evaluation pipeline is designed for institutional review — independent, documented, and structured for governance use."
        highlights={[
          "Independent third-party evaluation flow",
          "Safety Gate before broader scoring",
          "Governance-ready reporting outputs",
        ]}
        primaryAction={{ href: "/audit#deliverables-previews", label: "View Deliverables & Transparency →" }}
        secondaryAction={{ href: "/intake#application-form", label: "Request Evaluation" }}
        jumpLinks={[
          { href: "#pipeline", label: "Pipeline" },
          { href: "#control-terms", label: "Evaluation Standards" },
          { href: "#public-scope", label: "Public Scope" },
          { href: "#architecture-access", label: "Access" },
        ]}
      />

      {/* Pipeline overview */}
      <section id="pipeline" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Evaluation Pipeline</p>
        <div className="space-y-0 max-w-2xl">
          {pipeline.map(({ step, title, body }) => (
            <div key={step} className="flex gap-6 py-8 border-b border-border last:border-b-0">
              <span className="font-mono text-xs text-foreground-subtle w-6 shrink-0 pt-0.5">{step}</span>
              <div>
                <h3 className="font-display text-lg text-foreground mb-1.5">{title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="independence" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">
          Why Independent Evaluation Matters
        </p>
        <div className="space-y-4 text-sm text-foreground-muted max-w-2xl">
          <p>
            Internal QA can improve product quality, but it cannot self-certify behavioral safety in the eyes of outside
            reviewers. When the builder is also the evaluator, the record does not carry the same institutional weight.
          </p>
          <p>
            Independent evaluation creates a defensible record. It gives procurement, compliance, and legal stakeholders
            structured evidence they can use when the question is not whether a system works, but whether it can be trusted
            in sensitive conditions.
          </p>
          <p>
            Governance infrastructure requires separation between builder and auditor. That separation is what turns testing
            from an internal process into a credible oversight mechanism.
          </p>
        </div>
      </section>

      <section id="control-terms" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Evaluation Standards</p>
        <div className="space-y-2 text-sm text-foreground-muted max-w-2xl">
          <p>Safety behavior is assessed first, before broader quality scoring is considered.</p>
          <p>Published outputs are independent, documented, and designed for institutional review.</p>
          <p>Detailed operational methods and implementation tables remain restricted to authorized engagements.</p>
        </div>
      </section>

      {/* What's not here */}
      <section id="public-scope" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Public Scope</p>
        <p className="text-sm text-foreground-muted max-w-xl leading-relaxed mb-6">
          This page provides a public overview only. Detailed process documentation and implementation-specific technical
          documents are not publicly displayed.
        </p>
        <ul className="space-y-2 text-sm text-foreground-muted max-w-lg">
          {[
            "Detailed testing workflows",
            "Detailed scoring logic and weighting",
            "Implementation-specific reference materials",
            "Client-specific evaluation records",
            "Restricted governance documentation",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-foreground-subtle shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section id="architecture-access" className="py-14">
        <GatedCallout
          title="Detailed Architecture Documentation"
          body="Extended architecture documentation is available through audit engagement. Submit an audit request to review scope and delivery options."
          ctaLabel="Request evaluation →"
          ctaPath="/intake#application-form"
        />
      </section>
    </PageShell>
  );
}
