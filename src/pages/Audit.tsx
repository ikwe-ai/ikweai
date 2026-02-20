import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function Audit() {
  const tracks = [
    {
      title: "Benchmark Run",
      body: "Structured scenario evaluation using the published EQ Safety Benchmark framework and canonical release language.",
      outcome: "Output: benchmark result summary with clear risk signal classification.",
    },
    {
      title: "Governance Readout",
      body: "Institutional summary for board, policy, and risk teams focused on measured behavioral risk.",
      outcome: "Output: concise governance narrative for decision and oversight review.",
    },
    {
      title: "Follow-up Monitoring",
      body: "Scheduled re-evaluation support to track behavioral drift across model and deployment changes.",
      outcome: "Output: repeatable cadence for drift detection and release comparison.",
    },
  ] as const;

  const stages = [
    {
      step: "01",
      title: "Scope Alignment",
      body: "Consultation confirms deployment context, risk sensitivity, and review objective before any benchmark run begins.",
    },
    {
      step: "02",
      title: "Execution Window",
      body: "Scenarios are executed under controlled conditions and evaluated with current public benchmark language.",
    },
    {
      step: "03",
      title: "Readout Delivery",
      body: "Findings are packaged into an institutional readout with clear next-step options.",
    },
    {
      step: "04",
      title: "Monitoring Option",
      body: "Organizations can continue with scheduled re-evaluation to monitor behavioral drift over time.",
    },
  ] as const;

  const deliverables = [
    "Benchmark outcome summary mapped to current public terminology",
    "Risk-focused governance brief for policy, board, and risk teams",
    "Recommended follow-up pathway for re-evaluation cadence",
    "Versioned release context for traceable review records",
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Audit | Ikwe.ai"
        description="Independent behavioral AI audit pathway for institutions that need structured benchmark evidence."
        path="/audit"
      />
      <SummaryHero
        kicker="Audit Pathway"
        title="Independent Audit"
        summary="Public overview of the audit pathway for high-trust deployments. Scope and engagement sequencing are confirmed through consultation."
        highlights={[
          "Independent third-party posture",
          "Benchmark-based evidence structure",
          "Governance-ready reporting format",
        ]}
        primaryAction={{ href: "#request-start", label: "Start Audit Request ↓" }}
        secondaryAction={{ href: "/outputs", label: "View Outputs & Transparency" }}
        jumpLinks={[
          { href: "#audit-overview", label: "Audit Overview" },
          { href: "#engagement-stages", label: "Engagement Stages" },
          { href: "#deliverables", label: "Deliverables" },
          { href: "#request-start", label: "Start Request" },
        ]}
      />

      <section id="audit-overview" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Audit Overview</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tracks.map((track) => (
            <article key={track.title} className="card-surface p-5 flex flex-col gap-3">
              <h2 className="font-display text-xl text-foreground mb-2">{track.title}</h2>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">{track.body}</p>
              <p className="text-xs text-foreground-subtle">{track.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="engagement-stages" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Engagement Stages</p>
        <div className="space-y-0 max-w-3xl">
          {stages.map((stage) => (
            <div key={stage.step} className="flex gap-6 py-6 border-b border-border last:border-b-0">
              <span className="font-mono text-xs text-lilac w-6 shrink-0 pt-0.5">{stage.step}</span>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">{stage.title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{stage.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="deliverables" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Deliverables</p>
        <div className="card-surface p-6 max-w-3xl">
          <ul className="space-y-3 text-sm text-foreground-muted leading-relaxed">
            {deliverables.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-lilac shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="request-start" className="py-14 max-w-3xl">
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Final scope, timeline, and output package are confirmed during consultation. Requests are reviewed against
          deployment context and institutional fit.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/request-audit#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Start consultation intake →
          </a>
          <a
            href="/outputs"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Review outputs hub
          </a>
        </div>
      </section>
    </PageShell>
  );
}
