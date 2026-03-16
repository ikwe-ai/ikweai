import { useMemo } from "react";
import { useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";
import { CASE_STUDIES_INDEX } from "@/lib/content-index";
import ArchiveBanner from "@/components/ArchiveBanner";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();

  const entry = useMemo(
    () => CASE_STUDIES_INDEX.find((item) => item.slug === slug),
    [slug]
  );

  if (!entry) {
    return (
      <PageShell>
        <PageMeta title="Case Study Not Found | Ikwe.ai" description="Case study route not found." path="/research/case-studies" />
      <ArchiveBanner type="library" />
        <section className="py-24 max-w-2xl">
          <h1 className="font-display text-3xl text-foreground mb-3">Case study not found</h1>
          <a href="/research/case-studies" className="text-sm link-lilac">
            Back to case index →
          </a>
        </section>
      </PageShell>
    );
  }

  const jumpLinks = [
    { href: "#case-summary", label: "Case Summary" },
    ...(("signals" in entry && entry.signals?.length)
      ? [{ href: "#observed-signals", label: "Observed Signals" }]
      : []),
    ...(("interventions" in entry && entry.interventions?.length)
      ? [{ href: "#governance-interventions", label: "Interventions" }]
      : []),
    ...(("outcomes" in entry && entry.outcomes?.length)
      ? [{ href: "#outcome-snapshot", label: "Outcomes" }]
      : []),
  ];

  return (
    <PageShell>
      <PageMeta
        title={`${entry.title} | Ikwe.ai`}
        description={entry.summary}
        path={`/research/case-studies/${entry.slug}`}
      />
      <SummaryHero
        kicker={entry.label}
        title={entry.title}
        summary={entry.summary}
        highlights={[
          "Trajectory-level risk framing",
          "Governance correction pattern",
          "Public case-analysis summary",
        ]}
        primaryAction={{ href: "/research/case-studies", label: "Back to Case Index" }}
        secondaryAction={{ href: "/research/writings", label: "Back to Writing Library" }}
        jumpLinks={jumpLinks}
      />

      <section id="case-summary" className="py-14 border-b border-border max-w-3xl article-reading">
        <div className="space-y-5">
          {entry.details.map((paragraph) => (
            <p key={paragraph} className="text-sm text-foreground-muted leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {"signals" in entry && entry.signals ? (
          <div id="observed-signals" className="mt-10 scroll-mt-24">
            <p className="section-kicker mb-4">
              Observed Signals
            </p>
            <ul className="space-y-2 text-sm text-foreground-muted">
              {entry.signals.map((signal) => (
                <li key={signal}>— {signal}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {"interventions" in entry && entry.interventions ? (
          <div id="governance-interventions" className="mt-10 scroll-mt-24">
            <p className="section-kicker mb-4">
              Governance Interventions
            </p>
            <ul className="space-y-2 text-sm text-foreground-muted">
              {entry.interventions.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {"outcomes" in entry && entry.outcomes ? (
          <div id="outcome-snapshot" className="mt-10 scroll-mt-24">
            <p className="section-kicker mb-4">
              Outcome Snapshot
            </p>
            <ul className="space-y-2 text-sm text-foreground-muted">
              {entry.outcomes.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>
    </PageShell>
  );
}
