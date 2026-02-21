import PageShell from "@/components/PageShell";
import GatedCallout from "@/components/GatedCallout";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function Architecture() {
  const pipeline = [
    {
      step: "01",
      title: "Scenario testing",
      body: "Structured scenarios are run across high-risk behavioral states.",
    },
    {
      step: "02",
      title: "Independent evaluation",
      body: "Responses are evaluated under consistent conditions for comparable outcomes.",
    },
    {
      step: "03",
      title: "Safety Gate screening",
      body: "First-contact responses are screened for harmful behavior before further assessment.",
    },
    {
      step: "04",
      title: "Behavioral scoring",
      body: "Responses are scored across behavioral dimensions in aggregate benchmark reporting.",
    },
    {
      step: "05",
      title: "Reporting and monitoring",
      body: "Findings are documented for governance use, with optional monitoring for deployed systems.",
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
        summary="Public overview of the evaluation approach. Detailed implementation details are not published on the public site."
        highlights={[
          "Independent third-party evaluation flow",
          "Safety Gate before broader scoring",
          "Governance-ready reporting outputs",
        ]}
        primaryAction={{ href: "/deliverables", label: "View Artifacts & Transparency →" }}
        secondaryAction={{ href: "/request-audit#application-form", label: "Request Audit" }}
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
          artifacts are not publicly displayed.
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
          ctaLabel="Request audit →"
          ctaPath="/request-audit#application-form"
        />
      </section>
    </PageShell>
  );
}
