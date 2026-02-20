import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function Consultation() {
  return (
    <PageShell>
      <PageMeta
        title="Consultation | Ikwe.ai"
        description="Consultation overview for scope alignment, audit readiness, and delivery planning."
        path="/consult"
      />

      <SummaryHero
        kicker="Consultation"
        title="Consultation"
        summary="Consultation is the scope-alignment layer around an audit request. Start with request intake, then use consultation for planning and delivery fit."
        highlights={[
          "Audit-first engagement path",
          "Scope and timeline alignment",
          "Governance-oriented delivery planning",
        ]}
        primaryAction={{ href: "/request-audit#application-form", label: "Request Audit →" }}
        secondaryAction={{ href: "/audit", label: "View Audit Pathway" }}
        jumpLinks={[
          { href: "#how-it-fits", label: "How It Fits" },
          { href: "#consultation-uses", label: "Use Cases" },
          { href: "#next-actions", label: "Next Actions" },
        ]}
      />

      <section id="how-it-fits" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">How Consultation Fits</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="card-surface p-5">
            <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-2">01</p>
            <h2 className="font-display text-lg mb-2">Submit Audit Request</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Provide deployment context, risk domain, and review objective using the request form.
            </p>
          </article>
          <article className="card-surface p-5">
            <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-2">02</p>
            <h2 className="font-display text-lg mb-2">Scope Consultation</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Align scope depth, output expectations, and timeline boundaries for the engagement.
            </p>
          </article>
          <article className="card-surface p-5">
            <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-2">03</p>
            <h2 className="font-display text-lg mb-2">Audit Pathway</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Move into the formal audit sequence and output delivery workflow.
            </p>
          </article>
        </div>
      </section>

      <section id="consultation-uses" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">When To Use Consultation</p>
        <div className="space-y-3 text-sm text-foreground-muted max-w-2xl">
          <p>Use consultation when deployment context is complex, multi-surface, or institutionally high-sensitivity.</p>
          <p>Use consultation when the organization needs audit outputs shaped for board, insurer, or governance review flows.</p>
          <p>Use consultation when teams need a clear scope decision before entering a formal audit cycle.</p>
        </div>
      </section>

      <section id="next-actions" className="py-14">
        <div className="card-surface p-6">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-3">Next Actions</p>
          <div className="flex flex-wrap items-center gap-5 text-sm">
            <a href="/request-audit#application-form" className="link-lilac">
              Open request form →
            </a>
            <a href="/outputs" className="link-lilac">
              Review outputs →
            </a>
            <a href="/trust" className="link-lilac">
              Trust and confidentiality →
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
