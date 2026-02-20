import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function Press() {
  const updates = [
    {
      label: "Team Update",
      title: "Research Publishing Cycle",
      body: "Rolling updates on publication milestones across benchmark studies, writing releases, and case analysis additions.",
    },
    {
      label: "Media Brief",
      title: "Institutional Summary Pack",
      body: "Short-format briefing materials for media, board stakeholders, and policy-facing audiences.",
    },
    {
      label: "Newsletter",
      title: "Release Notes Digest",
      body: "Periodic digest of new pages, terminology changes, and release-scope updates.",
    },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Press & Updates | Ikwe.ai"
        description="Team updates, media access information, and release-note newsletter guidance."
        path="/research/press"
      />
      <SummaryHero
        kicker="Research Communications"
        title="Press & Updates"
        summary="Media information, team updates, and release-note communications are managed here."
        highlights={[
          "Press and media inquiry routing",
          "Team publication updates",
          "Release-note newsletter track",
        ]}
        primaryAction={{ href: "/contact", label: "Contact Team →" }}
        secondaryAction={{ href: "/research", label: "Back to Research" }}
      />

      <section className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Communications Index</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {updates.map((item) => (
            <article key={item.title} className="card-surface p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">{item.label}</p>
              <h2 className="font-display text-lg text-foreground mb-2">{item.title}</h2>
              <p className="text-sm text-foreground-muted leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14 max-w-3xl">
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          For media requests, include your outlet, deadline, and topic scope. For newsletter participation, request
          the release-note digest through the contact form.
        </p>
        <a href="/contact" className="text-sm link-lilac">
          Request press or newsletter access →
        </a>
      </section>
    </PageShell>
  );
}
