import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";
import { CASE_STUDIES_INDEX } from "@/lib/content-index";
import ArchiveBanner from "@/components/ArchiveBanner";

export default function CaseStudies() {
  return (
    <PageShell>
      <PageMeta
        title="Case Studies | Ikwe.ai"
        description="Applied behavioral safety case studies — real scenarios, real drift patterns, real governance outcomes from the Ikwe EQ Safety framework."
        path="/archive/research/case-studies"
      />
      <ArchiveBanner type="library" />
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
        jumpLinks={[
          { href: "#cases", label: "Case Index" },
        ]}
      />

      <section id="cases" className="py-14 border-b border-border">
        <p className="section-kicker mb-8">Case Index</p>
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
