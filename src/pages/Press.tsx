import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function Press() {
  const publications = [
    {
      label: "Published",
      title: "Writing Library",
      body: "Full public essays, opinions, and research notes with direct page links.",
      href: "/research/writings",
      cta: "Open writing library →",
    },
    {
      label: "Published",
      title: "Case Studies Index",
      body: "Full case-study pages with trajectory context, interventions, and outcome snapshots.",
      href: "/research/case-studies",
      cta: "Open case index →",
    },
    {
      label: "Published",
      title: "Deliverables & Transparency",
      body: "Public deliverables overview linking to benchmark, architecture, and trust pages.",
      href: "/deliverables",
      cta: "Open deliverables overview →",
    },
    {
      label: "Published",
      title: "Research Overview",
      body: "Benchmark summary, methodology lineage, and glossary terms.",
      href: "/research",
      cta: "Open research overview →",
    },
  ] as const;

  const upcoming = [
    {
      title: "Benchmark Notes Digest",
      body: "Recurring digest page is scheduled for a future publication cycle.",
    },
    {
      title: "Institutional Media Brief",
      body: "Expanded short-format media briefing page is in editorial review.",
    },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Press & Updates | Ikwe.ai"
        description="Published communications and media routing for Ikwe.ai benchmark publications."
        path="/research/press"
      />
      <SummaryHero
        kicker="Research Communications"
        title="Press & Updates"
        summary="Published communications and benchmark updates. All listed published items link to full live pages."
        highlights={[
          "Published items link to full pages",
          "Routing for media and stakeholders",
          "Forthcoming items marked by status only",
        ]}
        primaryAction={{ href: "/intake#application-form", label: "Request Validation Sprint →" }}
        secondaryAction={{ href: "/research", label: "Back to Research" }}
        jumpLinks={[
          { href: "#published-communications", label: "Published" },
          { href: "#upcoming-communications", label: "Upcoming" },
          { href: "#media-routing", label: "Media Routing" },
        ]}
      />

      <section id="published-communications" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Published Communications</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
          {publications.map((item) => (
            <article key={item.title} className="card-surface p-5 flex flex-col gap-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">{item.label}</p>
              <h2 className="font-display text-lg text-foreground mb-2">{item.title}</h2>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">{item.body}</p>
              <a href={item.href} className="text-sm link-lilac">
                {item.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="upcoming-communications" className="py-14 border-b border-border max-w-3xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Upcoming</p>
        <div className="space-y-0 divide-y divide-border">
          {upcoming.map((item) => (
            <div key={item.title} className="py-5">
              <p className="font-mono text-xs text-lilac mb-2">{item.title}</p>
              <p className="text-sm text-foreground-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="media-routing" className="py-14 max-w-3xl">
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          For media requests, include your outlet, deadline, and topic scope. Use the audit request form as the
          primary intake path; scope review follows for briefing alignment.
        </p>
        <a href="/intake#application-form" className="text-sm link-lilac">
          Open request intake →
        </a>
      </section>
    </PageShell>
  );
}
