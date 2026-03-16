import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";
import { CASE_STUDIES_INDEX, WRITINGS_INDEX } from "@/lib/content-index";
import ArchiveBanner from "@/components/ArchiveBanner";

export default function WritingLibrary() {
  return (
    <PageShell>
      <PageMeta
        title="Writing Library | Ikwe.ai"
        description="Research notes, analysis, and opinion on AI behavioral safety, governance risk, and what it means to build systems that can be trusted with humans."
        path="/archive/research/writings"
      />
      <ArchiveBanner type="library" />
      <SummaryHero
        kicker="Research Index"
        title="Writing Library"
        summary="A public library of opinions, research notes, and case analyses aligned with current benchmark language."
        highlights={[
          "Opinion pieces and research notes",
          "Linked full writing pages",
          "Case analysis summaries",
        ]}
        primaryAction={{ href: "#writings", label: "View Writings ↓" }}
        secondaryAction={{ href: "#case-analyses", label: "View Case Analyses" }}
        jumpLinks={[
          { href: "#writings", label: "Writings" },
          { href: "#case-analyses", label: "Case Analyses" },
          { href: "#press-updates", label: "Press & Updates" },
        ]}
      />

      <section id="writings" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Writings</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
          {WRITINGS_INDEX.map((writing) => (
            <article key={writing.title} className="card-surface p-5 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">{writing.label}</p>
              <h3 className="font-display text-xl text-foreground">{writing.title}</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">{writing.summary}</p>
              <div className="space-y-3">
                {writing.excerpt.map((paragraph) => (
                  <p key={paragraph} className="text-sm text-foreground-muted leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="text-xs text-foreground-subtle">By Stephanie Stranko · Ikwe.ai Research</p>
              <div className="flex flex-wrap gap-4">
                <a href={writing.href} className="text-sm link-lilac">
                  {writing.cta}
                </a>
                {"sourceHref" in writing && writing.sourceHref ? (
                  <a
                    href={writing.sourceHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm link-lilac"
                  >
                    {writing.sourceLabel}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="case-analyses" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Case Analyses</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CASE_STUDIES_INDEX.map((item) => (
            <article key={item.title} className="card-surface p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">{item.label}</p>
              <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-foreground-muted leading-relaxed mb-3">{item.summary}</p>
              <a href={`/research/case-studies/${item.slug}`} className="text-sm link-lilac">
                Read case analysis →
              </a>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/research/case-studies"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Open case studies index →
          </a>
          <a
            href="/get-started"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get Started
          </a>
        </div>
      </section>

      <section id="press-updates" className="py-14">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-4">Press & Updates</p>
        <p className="text-sm text-foreground-muted leading-relaxed max-w-2xl mb-4">
          Team media notes, benchmark updates, and newsletter-style publications are maintained in the Research
          press section.
        </p>
        <a href="/research/press" className="text-sm link-lilac">
          Open Press & Updates →
        </a>
      </section>
    </PageShell>
  );
}
