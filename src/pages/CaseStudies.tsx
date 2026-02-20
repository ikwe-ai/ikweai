import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";
import { CASE_STUDIES_INDEX } from "@/lib/content-index";

export default function CaseStudies() {
  return (
    <PageShell>
      <PageMeta
        title="Case Studies | Ikwe.ai"
        description="Indexed case-study analyses for behavioral safety trajectories and governance outcomes."
        path="/research/case-studies"
      />
      <SummaryHero
        kicker="Case Analysis"
        title="Case Studies"
        summary="Indexed case analyses describing common behavioral risk patterns and governance remediations."
        highlights={[
          "Authority and role-boundary failures",
          "Trajectory-level escalation patterns",
          "Governance remediation framing",
        ]}
        primaryAction={{ href: "#cases", label: "View Case Index ↓" }}
        secondaryAction={{ href: "/research/writings", label: "Back to Writing Library" }}
      />

      <section id="cases" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Case Index</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CASE_STUDIES_INDEX.map((item) => (
            <article key={item.slug} className="card-surface p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">{item.label}</p>
              <h2 className="font-display text-lg text-foreground mb-2">{item.title}</h2>
              <p className="text-sm text-foreground-muted leading-relaxed mb-3">{item.summary}</p>
              <a href={`/research/case-studies/${item.slug}`} className="text-sm link-lilac">
                Read full case →
              </a>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
