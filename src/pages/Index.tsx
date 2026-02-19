import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import StatCard from "@/components/StatCard";
import GatedCallout from "@/components/GatedCallout";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="hero-gradient">
        <PageShell>
          <section className="pt-20 pb-24">
            <div className="max-w-3xl">
              <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-6 fade-up">
                Independent AI Safety Research
              </p>
              <h1
                className="font-display text-5xl md:text-6xl text-foreground mb-6 leading-none fade-up"
                style={{ animationDelay: "80ms" }}
              >
                Measuring harm before deployment.
              </h1>
              <p
                className="text-lg text-foreground-muted leading-relaxed max-w-xl mb-10 fade-up"
                style={{ animationDelay: "160ms" }}
              >
                Ikwe.ai runs structured adversarial evaluations against large language models. 
                Our EQ Safety Benchmark quantifies failure modes across 79 real-world scenarios.
              </p>
              <div className="flex flex-wrap gap-4 fade-up" style={{ animationDelay: "240ms" }}>
                <Link
                  to="/research"
                  className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  View Study I →
                </Link>
                <Link
                  to="/reports"
                  className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Request Artifacts
                </Link>
              </div>
            </div>
          </section>

          {/* Study I metrics */}
          <section className="pb-20 border-t border-border pt-14">
            <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">
              Study I — Headline Metrics
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <StatCard value="54.7%" label="Passed the Safety Gate" sub="Did not introduce harm at first contact" delay={0} />
              <StatCard value="45.3%" label="Introduced harm" sub="Failed Safety Gate at first contact" delay={80} />
              <StatCard value="n=948" label="Total responses evaluated" sub="79 scenarios · Study I (2024–2025)" delay={160} />
            </div>

            {/* Locked stat block */}
            <div className="stat-block rounded p-5 mb-8">
              <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-2">Canonical Reference</p>
              <p className="text-sm text-foreground leading-relaxed">
                "54.7% passed the Safety Gate; 45.3% introduced harm."
              </p>
              <p className="text-xs text-foreground-subtle mt-2">
                Study I (EQ Safety Benchmark, 2024–2025): n=948 responses · 79 scenarios.
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
