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
                  Independent AI Safety Research
                </p>
                <h1
                  className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight fade-up"
                  style={{ animationDelay: "80ms" }}
                >
                  You're willing to scale AI fast. Are you willing to scale risk just as fast?
                </h1>
                <p
                  className="text-lg text-foreground-muted leading-relaxed max-w-lg mb-10 fade-up"
                  style={{ animationDelay: "160ms" }}
                >
                  Ikwe.ai runs independent behavioral safety evaluations for high-trust environments. 
                  Our EQ Safety Benchmark quantifies failure modes across 79 real-world scenarios.
                </p>
                <div className="flex flex-wrap gap-4 fade-up" style={{ animationDelay: "240ms" }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Apply for Evaluation →
                  </Link>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-3">Evaluation</p>
                <h3 className="font-display text-xl text-foreground mb-2">Structured adversarial testing</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  79 real-world scenarios across emotionally-loaded domains. Each run is scored against the SSF taxonomy and EQSB v2.1 Safety Gate.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-3">Independence</p>
                <h3 className="font-display text-xl text-foreground mb-2">No commercial affiliations</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Ikwe.ai has no financial or operational relationships with any AI developer evaluated. Results are published without sponsor review.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-3">Versioning</p>
                <h3 className="font-display text-xl text-foreground mb-2">Version-controlled releases</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  All artifacts ship with a version number, changelog, and canonical stat block so published findings can never drift from source data.
                </p>
              </div>
            </div>
          </section>
        </PageShell>
      </div>
    </>
  );
}
