import PageShell from "@/components/PageShell";
import StatCard from "@/components/StatCard";
import GatedCallout from "@/components/GatedCallout";
import CanonicalTerm from "@/components/CanonicalTerm";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";
import { CANONICAL_TERM_ORDER, CANONICAL_TERMS } from "@/lib/canonical-terms";

export default function Research() {
  const studies = [
    {
      label: "Published",
      title: "Study I — EQ Safety Benchmark Baseline (2024–2025)",
      body:
        "Canonical baseline release with locked headline metrics and documented methodology lineage.",
      cta: "Request released artifacts →",
      href: "/reports",
    },
    {
      label: "In Preparation",
      title: "Study II — Mechanism & Trajectory Analysis",
      body:
        "Longer-horizon analysis focused on failure mechanisms and trajectory-level risk patterns. Publication is scheduled in a future release cycle.",
    },
    {
      label: "Planned",
      title: "Study III — Longitudinal Monitoring Program",
      body:
        "Scheduled re-evaluation program for behavioral drift tracking across model and deployment changes.",
      cta: "Register interest →",
      href: "/contact",
    },
  ] as const;

  const writings = [
    {
      label: "Founder Writing · Published",
      title: "Before the Violation",
      summary:
        "Why behavioral safety must be measured before visible policy failure, not only after it.",
      excerpt: [
        "Most organizations still treat behavioral failure as a post-incident problem. That delay is the governance gap. By the time a visible violation appears, institutional trust has already been consumed.",
        "The practical question is not whether a model can sound empathetic. The practical question is whether it can consistently avoid high-risk behavior under pressure, ambiguity, and emotionally loaded context.",
        "This benchmark exists to move safety review forward in time: from retrospective interpretation to pre-deployment measurement and ongoing evidence discipline.",
      ],
    },
    {
      label: "Founder Writing · In Preparation (Public Abstract)",
      title: "Recognition Is Not Safety",
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
      label: "Redacted Case",
      title: "Authority Drift",
      body:
        "Anonymized trajectory where confidence signaling outpaced safe-role boundaries and required governance correction.",
    },
    {
      label: "Redacted Case",
      title: "Emotional Escalation",
      body:
        "Anonymized trajectory where soothing language obscured rising risk without adequate de-escalation structure.",
    },
    {
      label: "Redacted Case",
      title: "Founder-as-Safety-Mechanism",
      body:
        "Anonymized case where safety depended on undocumented manual intervention rather than durable governance controls.",
    },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Research — EQ Safety Benchmark | Ikwe.ai"
        description="Study I summary, benchmark methodology lineage, and canonical terminology for EQ Safety Benchmark."
        path="/research"
      />
      <SummaryHero
        kicker="Study I · 2024–2025"
        title="EQ Safety Benchmark"
        summary="Study I summary, methodology lineage, and terminology. All data is locked to the canonical stat block."
        highlights={[
          "n=948 model responses scored",
          "79 scenarios across high-stakes contexts",
          "Two-layer model: Safety Gate + dimensional scoring",
        ]}
        primaryAction={{ href: "/reports", label: "View Reports & Releases →" }}
        secondaryAction={{ href: "#studies", label: "View Study Roadmap" }}
      />

      {/* Study I Summary */}
      <section className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Study I — Summary</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <StatCard value="54.7%" label="Passed the Safety Gate" sub="Did not introduce harm at first contact" />
          <StatCard value="45.3%" label="Introduced harm" sub="Failed Safety Gate at first contact" delay={80} />
          <StatCard value="n=948" label="Responses evaluated" sub="79 scenarios · 2024–2025" delay={160} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-surface p-5">
            <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-3">Scope</p>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li>— 79 real-world adversarial scenarios</li>
              <li>— High-stakes affective domains: grief, crisis, identity</li>
              <li>— Multiple LLMs evaluated per scenario</li>
              <li>— n=948 total model responses scored</li>
              <li>— Evaluation period: 2024–2025</li>
            </ul>
          </div>
          <div className="card-surface p-5">
            <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-3">Scoring Model</p>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li>
                — <CanonicalTerm term="SSF" /> taxonomy (Scenario Safety Framework)
              </li>
              <li>
                — EQSB v2.1 <CanonicalTerm term="Safety Gate" /> (10 violations)
              </li>
              <li>
                — <CanonicalTerm term="Dimensional Scoring" /> (8 dimensions, A–H weighted)
              </li>
              <li>— Binary gate applied at first contact</li>
              <li>— Full scorecard on gate-passing responses</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Study roadmap */}
      <section id="studies" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Study Portfolio</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {studies.map((study) => (
            <article key={study.title} className="card-surface p-5 flex flex-col gap-3">
              <span className="inline-flex w-fit rounded border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-lilac">
                {study.label}
              </span>
              <h3 className="font-display text-lg text-foreground leading-tight">{study.title}</h3>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">{study.body}</p>
              {study.href && study.cta ? (
                <a href={study.href} className="text-sm link-lilac">
                  {study.cta}
                </a>
              ) : (
                <p className="text-xs text-foreground-subtle uppercase tracking-wide">Publication pending</p>
              )}
            </article>
          ))}
        </div>
        <p className="text-xs text-foreground-subtle mt-5 max-w-2xl">
          Roadmap listings are included for transparency. Unpublished studies are shown by status and do not include
          unpublished findings or detailed scoring specifications.
        </p>
      </section>

      {/* Methodology Lineage Block — LOCKED */}
      <section className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Methodology Lineage</p>
        <div className="stat-block rounded p-6 max-w-2xl">
          <p className="text-sm text-foreground leading-relaxed">
            "Methodology lineage: the 54.7% baseline derives from Study I (SSF taxonomy). Current evaluations use EQSB v2.1 with an updated Safety Gate (10 violations) plus an 8-dimension scorecard (A–H, weighted)."
          </p>
        </div>
        <p className="text-xs text-foreground-subtle mt-4 max-w-lg">
          This block is the canonical methodology statement. It appears verbatim in all artifact releases and cross-references.
        </p>
      </section>

      {/* Glossary */}
      <section className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Terminology Glossary</p>
        <p className="text-xs text-foreground-subtle mb-5 max-w-2xl">
          Public layer uses canonical labels with plain-language hover clarification. Hover or focus the highlighted
          terms.
        </p>
        <div className="space-y-0 divide-y divide-border max-w-2xl">
          {CANONICAL_TERM_ORDER.map((term) => (
            <div key={term} className="py-5 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="self-start pt-0.5">
                <CanonicalTerm term={term} className="font-mono text-xs text-lilac" />
              </div>
              <p className="md:col-span-2 text-sm text-foreground-muted leading-relaxed">
                {CANONICAL_TERMS[term].publicDescription}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder writings */}
      <section id="writings" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Founder Writings</p>
        <p className="text-xs text-foreground-subtle mb-5 max-w-2xl">
          Published writing appears directly on this page. Additional reports are listed in the reports library.
        </p>
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
              <p className="text-xs text-foreground-subtle">By Stephanie Stranko</p>
            </article>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section id="case-studies" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Case Studies</p>
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
            href="/contact"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Ask about enterprise case review
          </a>
        </div>
      </section>

      {/* Artifact gating */}
      <section className="py-14">
        <GatedCallout
          title="Full Methodology & Scenario Library"
          body="Detailed scoring thresholds, scenario descriptions, and individual model results are available as version-controlled artifact releases. Samples and PDFs are distributed to ensure accuracy."
          ctaLabel="Request the current sample pack →"
        />
      </section>
    </PageShell>
  );
}
