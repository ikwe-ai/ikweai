import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function Audit() {
  const tracks = [
    {
      title: "Benchmark Run",
      body: "Structured scenario evaluation using the published EQ Safety Benchmark framework and canonical release language.",
    },
    {
      title: "Governance Readout",
      body: "Institutional summary for board, policy, and risk teams focused on measured behavioral risk.",
    },
    {
      title: "Follow-up Monitoring",
      body: "Scheduled re-evaluation support to track behavioral drift across model and deployment changes.",
    },
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
        summary="A live overview of the audit pathway. Intake and scope decisions are handled through the consultation flow."
        highlights={[
          "Independent third-party posture",
          "Benchmark-based evidence structure",
          "Governance-ready reporting format",
        ]}
        primaryAction={{ href: "/consult", label: "Request Consultation →" }}
        secondaryAction={{ href: "/reports", label: "View Reports & Releases" }}
        jumpLinks={[
          { href: "#audit-structure", label: "Audit Structure" },
          { href: "#audit-next-steps", label: "Next Steps" },
        ]}
      />

      <section id="audit-structure" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Audit Structure</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tracks.map((track) => (
            <article key={track.title} className="card-surface p-5">
              <h2 className="font-display text-xl text-foreground mb-2">{track.title}</h2>
              <p className="text-sm text-foreground-muted leading-relaxed">{track.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="audit-next-steps" className="py-14 max-w-3xl">
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          This page describes the current public audit pathway. Final scope, timeline, and report package are confirmed
          during consultation.
        </p>
        <a href="/consult" className="text-sm link-lilac">
          Proceed to consultation intake →
        </a>
      </section>
    </PageShell>
  );
}
