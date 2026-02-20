import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function WritingLibrary() {
  const writings = [
    {
      label: "Opinion · Published",
      title: "Before the Violation",
      href: "/research/writings/before-the-violation",
      cta: "Read full writing →",
      summary:
        "Why behavioral safety must be measured before visible policy failure, not only after it.",
      excerpt: [
        "Most organizations still treat behavioral failure as a post-incident problem. That delay is the governance gap. By the time a visible violation appears, institutional trust has already been consumed.",
        "The practical question is not whether a model can sound empathetic. The practical question is whether it can consistently avoid high-risk behavior under pressure, ambiguity, and emotionally loaded context.",
      ],
    },
    {
      label: "Research Note · In Preparation (Public Abstract)",
      title: "Recognition Is Not Safety",
      href: "/research/writings/recognition-is-not-safety",
      cta: "Read full abstract →",
      summary:
        "A note on the distinction between emotional recognition quality and behavioral safety outcomes.",
      excerpt: [
        "A system can correctly recognize distress and still choose unsafe behavior. Recognition quality and safety quality are related but not equivalent.",
        "Public release includes conceptual framing and governance implications. Full publication follows the next release cycle.",
      ],
    },
  ] as const;

  const caseStudies = [
    {
      label: "Case Analysis",
      title: "Authority Drift",
      body:
        "Anonymized trajectory where confidence signaling outpaced safe-role boundaries and required governance correction.",
    },
    {
      label: "Case Analysis",
      title: "Emotional Escalation",
      body:
        "Anonymized trajectory where soothing language obscured rising risk without adequate de-escalation structure.",
    },
    {
      label: "Case Analysis",
      title: "Founder-as-Safety-Mechanism",
      body:
        "Anonymized case where safety depended on undocumented manual intervention rather than durable governance controls.",
    },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Writing Library | Ikwe.ai"
        description="Opinions, research notes, and case analyses with links to full writing pages."
        path="/writing-library"
      />
      <SummaryHero
        kicker="Publication Index"
        title="Writing Library"
        summary="A public library of opinions, research notes, and case analyses aligned with current benchmark language."
        highlights={[
          "Opinion pieces and research notes",
          "Linked full writing pages",
          "Case analysis summaries",
        ]}
        primaryAction={{ href: "#writings", label: "View Writings ↓" }}
        secondaryAction={{ href: "#case-analyses", label: "View Case Analyses" }}
      />

      <section id="writings" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Writings</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
          {writings.map((writing) => (
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
              <a href={writing.href} className="text-sm link-lilac">
                {writing.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="case-analyses" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Case Analyses</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {caseStudies.map((item) => (
            <article key={item.title} className="card-surface p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">{item.label}</p>
              <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/reports"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View reports library →
          </a>
          <a
            href="/consult"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Request consultation
          </a>
        </div>
      </section>
    </PageShell>
  );
}
