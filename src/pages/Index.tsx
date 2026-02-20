import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import StatSplit from "@/components/StatSplit";
import GatedCallout from "@/components/GatedCallout";
import { CANONICAL_STAT } from "@/lib/content-locks";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="hero-gradient">
        <PageShell>
          <section className="pt-20 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* Left — copy + CTAs */}
              <div>
                <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-6 fade-up">
                  Independent AI Behavioral Validation
                </p>
                <h1
                  className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight fade-up"
                  style={{ animationDelay: "80ms" }}
                >
                  AI behavioral risk is real, measurable, and now certifiable. We build the independent proof.
                </h1>
                <p
                  className="text-lg text-foreground-muted leading-relaxed max-w-lg mb-10 fade-up"
                  style={{ animationDelay: "160ms" }}
                >
                  The independent third-party validation layer for AI systems that need to prove behavioral safety —
                  to regulators, insurers, investors, and boards. Any industry. Any deployment.
                </p>
                <div className="flex flex-wrap gap-4 fade-up" style={{ animationDelay: "240ms" }}>
                  <a
                    href="/consult"
                    className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Request an Independent Audit →
                  </a>
                  <Link
                    to="/research"
                    className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    View Study I
                  </Link>
                </div>
              </div>

              {/* Right — StatSplit card */}
              <div className="fade-up" style={{ animationDelay: "300ms" }}>
                <StatSplit />
              </div>
            </div>
          </section>

          {/* Positioning strip */}
          <section className="border-t border-border py-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { phase: "Phase 1", label: "Audit & Certification" },
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
          <section className="pb-20 border-t border-border pt-14">
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
          <section className="pb-20 border-t border-border pt-14">
            <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-10">
              Compliance infrastructure · Research moat
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-3">Audit</p>
                <h3 className="font-display text-xl text-foreground mb-2">Structured adversarial certification</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  79 real-world scenarios across emotionally-loaded domains. Each run is scored against the SSF taxonomy and EQSB v2.1 Safety Gate — producing a verifiable audit artifact.
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
        </PageShell>
      </div>
    </>
  );
}
