import PageShell from "@/components/PageShell";
import GatedCallout from "@/components/GatedCallout";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";
import ArchiveBanner from "@/components/ArchiveBanner";

export default function Architecture() {
  const pipeline = [
    {
      step: "01",
      title: "Scenario Testing",
      body:
        "Structured behavioral risk scenarios are run against the system under review. Scenarios are sourced from established emotional support interaction datasets and organized across 13 vulnerability categories including crisis, grief, dependency risk, manipulation, and emotional instability.",
    },
    {
      step: "02",
      title: "Safety Gate Screening",
      body:
        "Before dimensional scoring begins, every response is screened for harmful behavioral patterns. The Safety Gate is binary: pass or fail. A fail result means harmful behavior appeared. This screen runs first, before any quality scoring is considered.",
    },
    {
      step: "03",
      title: "Dimensional Scoring",
      body:
        "Pass responses are scored across eight behavioral dimensions: Escalation Stability, Vulnerable User Response, Manipulation Susceptibility, Power Asymmetry, Multi-Turn Trajectory, Dependency Reinforcement, Correction & Recovery, and Stress Condition Performance.",
    },
    {
      step: "04",
      title: "Tier Classification",
      body:
        "Systems are classified into four behavioral risk tiers based on Safety Gate result and dimensional scores: LOW (ready to ship), MODERATE (launch with safeguards), HIGH (fix before launch), CRITICAL (do not launch in current state).",
    },
    {
      step: "05",
      title: "Governance Reporting",
      body:
        "Findings are compiled into governance-ready documentation for product, legal, compliance, and board review. Reports include the risk rating, behavioral evidence, failure mode mapping, and a remediation roadmap.",
    },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Architecture — Evaluation Pipeline | Ikwe.ai"
        description="Public architecture overview for Ikwe's independent behavioral safety evaluation pipeline and governance reporting model."
        path="/archive/architecture"
        ogImagePath="/og/governance-gap.png"
      />
      <ArchiveBanner />
      <SummaryHero
        kicker="System Overview"
        title="How The Evaluation Works"
        summary="Behavioral safety cannot be self-certified. The Ikwe evaluation pipeline is independent, documented, and structured for institutional review — from first scenario test to governance reporting."
        highlights={[
          "Five-stage independent evaluation flow",
          "Safety Gate before broader scoring",
          "Governance-ready reporting outputs",
        ]}
        primaryAction={{ href: "/audit#deliverables-previews", label: "View Deliverables & Transparency →" }}
        secondaryAction={{ href: "/get-started", label: "Get Started" }}
        jumpLinks={[
          { href: "#pipeline", label: "Pipeline" },
          { href: "#control-terms", label: "Evaluation Standards" },
          { href: "#public-scope", label: "Public Scope" },
          { href: "#architecture-access", label: "Access" },
        ]}
      />

      {/* Pipeline overview */}
      <section id="pipeline" className="py-14 border-b border-border">
        <p className="section-kicker mb-8">Evaluation Pipeline</p>
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

      <section id="control-terms" className="py-14 border-b border-border">
        <p className="section-kicker mb-6">Why Independent Evaluation Matters</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
          <article className="card-surface p-6">
            <p className="text-sm text-foreground-muted leading-relaxed">
              Internal QA cannot self-certify behavioral safety. When the same team that builds the system also reviews
              it, conflicts of interest are structural — not individual. Independent evaluation creates a defensible
              separation between builder and auditor.
            </p>
          </article>
          <article className="card-surface p-6">
            <p className="text-sm text-foreground-muted leading-relaxed">
              Governance infrastructure requires documentation that holds up to external scrutiny. A board, insurer, or
              regulator reviewing behavioral safety needs a record produced outside the development team — not internal
              testing notes.
            </p>
          </article>
          <article className="card-surface p-6">
            <p className="text-sm text-foreground-muted leading-relaxed">
              The evaluation record is a risk management asset. Organizations that establish behavioral safety
              documentation before it becomes required are in a materially different position than those who respond to
              incidents.
            </p>
          </article>
        </div>
      </section>

      {/* What's not here */}
      <section id="public-scope" className="py-14 border-b border-border">
        <p className="section-kicker mb-6">Public Scope</p>
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
          ctaPath="/get-started"
        />
      </section>
    </PageShell>
  );
}
