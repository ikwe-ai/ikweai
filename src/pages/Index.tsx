import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import StatSplit from "@/components/StatSplit";
import GatedCallout from "@/components/GatedCallout";
import CanonicalTerm from "@/components/CanonicalTerm";
import PageMeta from "@/components/PageMeta";
import { CANONICAL_STAT } from "@/lib/content-locks";
import { CASE_STUDIES_INDEX, WRITINGS_INDEX } from "@/lib/content-index";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Ikwe.ai — Independent AI Behavioral Validation"
        description="Independent third-party evaluation for AI behavioral safety risk across high-trust deployments."
        path="/"
      />
      {/* Hero */}
      <div className="hero-gradient">
        <PageShell>
          <section className="pt-12 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Left — copy + CTAs */}
              <div className="lg:pt-2">
                <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-6 fade-up">
                  Independent AI Behavioral Audit and Compliance
                </p>
                <h1
                  className="font-display text-3xl md:text-5xl text-foreground mb-5 leading-tight fade-up max-w-xl"
                  style={{ animationDelay: "80ms" }}
                >
                  AI behavioral risk is real, measurable, and now auditable. We build the independent proof.
                </h1>
                <p
                  className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-lg mb-8 fade-up"
                  style={{ animationDelay: "160ms" }}
                >
                  The independent third-party validation layer for AI systems that need to measure behavioral safety risk for regulators, insurers, investors, and boards. Any industry. Any deployment.
                </p>
                <div className="flex flex-wrap gap-4 fade-up" style={{ animationDelay: "240ms" }}>
                  <a
                    href="/request-audit#application-form"
                    className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Request Audit →
                  </a>
                  <Link
                    to="/eq-safety-benchmark"
                    className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    View EQSB
                  </Link>
                </div>
              </div>

              {/* Right — metrics + quick routes */}
              <div className="fade-up space-y-4" style={{ animationDelay: "300ms" }}>
                <StatSplit />
                <div className="card-surface p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-foreground-subtle mb-2">
                    Start Here
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <a href="#study-reference" className="summary-jump">Study Reference</a>
                    <a href="#what-we-do" className="summary-jump">What We Do</a>
                    <a href="#proof-artifacts" className="summary-jump">Proof Artifacts</a>
                    <a href="#publication-library" className="summary-jump">Publication Library</a>
                  </div>
                  <div className="space-y-1.5">
                    <a href="/eq-safety-benchmark" className="block text-sm link-lilac">Open EQSB page →</a>
                    <a href="/research" className="block text-sm link-lilac">Open Research Overview →</a>
                    <a href="/deliverables" className="block text-sm link-lilac">Open Deliverables & Transparency →</a>
                    <a href="/request-audit#application-form" className="block text-sm link-lilac">Request audit intake →</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Positioning strip */}
          <section id="program-phases" className="border-t border-border py-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { phase: "Phase 1", label: "Audit & Documentation" },
                  { phase: "Phase 2", label: "Continuous Monitoring" },
                  { phase: "Phase 3", label: "API Risk Layer" },
                ].map((item) => (
                  <div key={item.phase} className="flex items-center gap-2">
                    <span className="font-mono text-xs text-lilac uppercase tracking-widest">{item.phase}</span>
                    <span className="font-mono text-xs text-foreground-subtle">—</span>
                    <span className="font-mono text-xs text-foreground-muted">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-lilac" />
                <span className="font-mono text-xs text-foreground-subtle uppercase tracking-widest">
                  Independent · Third-party verified
                </span>
              </div>
            </div>
          </section>

          {/* Study I metrics (row summary below hero) */}
          <section id="study-reference" className="pb-14 border-t border-border pt-10">
            {/* Locked stat block */}
            <div className="stat-block rounded p-5 mb-8">
              <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-2">Canonical Reference</p>
              <p className="text-sm text-foreground leading-relaxed">
                "{CANONICAL_STAT.headline}"
              </p>
              <p className="text-xs text-foreground-subtle mt-2">
                {CANONICAL_STAT.citation}
              </p>
            </div>

            <GatedCallout />
          </section>

          {/* What we do */}
          <section id="what-we-do" className="pb-14 border-t border-border pt-10">
            <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-10">
              Compliance infrastructure · Research moat
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-3">Audit</p>
                <h3 className="font-display text-xl text-foreground mb-2">Structured adversarial evaluation</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  79 real-world scenarios across emotionally-loaded domains. Each run is scored against the{" "}
                  <CanonicalTerm term="SSF" /> taxonomy and <CanonicalTerm term="Safety Gate" /> controls, producing
                  a verifiable audit record.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-3">Monitoring</p>
                <h3 className="font-display text-xl text-foreground mb-2">Continuous behavioral surveillance</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Post-deployment monitoring tracks behavioral drift across model versions. Organizations receive ongoing evidence for regulatory audits, insurance renewals, and board reporting.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-3">Independence</p>
                <h3 className="font-display text-xl text-foreground mb-2">No commercial affiliations</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Ikwe.ai has no financial or operational relationships with any AI developer evaluated. Results are never shared with evaluated parties before publication.
                </p>
              </div>
            </div>
          </section>

          <section id="proof-artifacts" className="pb-14 border-t border-border pt-10">
            <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-10">
              Proof Artifacts Preview
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {[
                {
                  title: "Board Brief",
                  body: "Executive risk summary format with governance-next-step framing.",
                },
                {
                  title: "Risk Scorecard",
                  body: "Dimension snapshot format for institutional review context.",
                },
                {
                  title: "Evidence Pack Index",
                  body: "Versioned index format for release references and audit traceability.",
                },
                {
                  title: "Drift Alert",
                  body: "Monitoring alert format for changed behavioral risk patterns.",
                },
              ].map((item) => (
                <article key={item.title} className="card-surface p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">Preview</p>
                  <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>
            <p className="text-xs text-foreground-subtle max-w-3xl">
              Site pages show output standards and report structure. Full report packages are shared with
              organizations through audit engagement.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/deliverables" className="text-sm link-lilac">Open Deliverables Hub →</a>
              <a href="/trust" className="text-sm link-lilac">View Trust & Confidentiality →</a>
            </div>
          </section>

          <section id="publication-library" className="pb-14 border-t border-border pt-10">
            <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-10">
              Publication Library
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <article className="card-surface p-5 flex flex-col gap-3">
                <p className="font-mono text-[10px] uppercase tracking-widest text-lilac">Published</p>
                <h3 className="font-display text-xl text-foreground">Writing Library</h3>
                <p className="text-sm text-foreground-muted leading-relaxed flex-1">
                  Published essays, research notes, and opinion pieces with full-page access.
                </p>
                <a href="/research/writings" className="text-sm link-lilac">
                  Open Writing Library →
                </a>
              </article>
              <article className="card-surface p-5 flex flex-col gap-3">
                <p className="font-mono text-[10px] uppercase tracking-widest text-lilac">Published</p>
                <h3 className="font-display text-xl text-foreground">Case Studies</h3>
                <p className="text-sm text-foreground-muted leading-relaxed flex-1">
                  Trajectory-level case analyses with governance interventions and outcomes.
                </p>
                <a href="/research/case-studies" className="text-sm link-lilac">
                  Open Case Studies →
                </a>
              </article>
              <article className="card-surface p-5 flex flex-col gap-3">
                <p className="font-mono text-[10px] uppercase tracking-widest text-lilac">Published</p>
                <h3 className="font-display text-xl text-foreground">Press & Updates</h3>
                <p className="text-sm text-foreground-muted leading-relaxed flex-1">
                  Media routing and communications pages linked to full live site content.
                </p>
                <a href="/research/press" className="text-sm link-lilac">
                  Open Press & Updates →
                </a>
              </article>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-4">
                  Featured Writings
                </p>
                <div className="space-y-3">
                  {WRITINGS_INDEX.slice(0, 3).map((item) => (
                    <article key={item.slug} className="card-surface p-4">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">{item.label}</p>
                      <h4 className="font-display text-lg text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-foreground-muted leading-relaxed mb-2">{item.summary}</p>
                      <a href={item.href} className="text-sm link-lilac">
                        {item.cta}
                      </a>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-4">
                  Featured Case Studies
                </p>
                <div className="space-y-3">
                  {CASE_STUDIES_INDEX.slice(0, 3).map((item) => (
                    <article key={item.slug} className="card-surface p-4">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">{item.label}</p>
                      <h4 className="font-display text-lg text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-foreground-muted leading-relaxed mb-2">{item.summary}</p>
                      <a href={`/research/case-studies/${item.slug}`} className="text-sm link-lilac">
                        Read full case →
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </PageShell>
      </div>
    </>
  );
}
