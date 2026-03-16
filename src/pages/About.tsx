import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";
import { BENCHMARK_COPY, BENCHMARK_CURRENT, BENCHMARK_LOG_REQUEST } from "@/lib/benchmark-data";
import ArchiveBanner from "@/components/ArchiveBanner";

export default function About() {
  return (
    <PageShell>
      <PageMeta
        title="About | Ikwe.ai"
        description="Ikwe.ai is the independent behavioral safety layer for human-facing AI. Independence standards, COI policy, and evidence governance."
        path="/archive/about"
      />
      <ArchiveBanner />
      <SummaryHero
        kicker="About Ikwe.ai"
        title="Built to be independent."
        summary="Ikwe.ai is the behavioral safety layer for human-facing AI. This page covers the independence standards, conflict-of-interest policy, and evidence governance that make our evaluations defensible."
        highlights={[
          "No financial ties to evaluated model developers",
          "Versioned evidence with frozen metric blocks",
          "Structured COI disclosure and recusal practices",
        ]}
        primaryAction={{ href: "/benchmark", label: "View the Benchmark →" }}
        secondaryAction={{ href: "/research", label: "Read Research Summary" }}
        jumpLinks={[
          { href: "#independence", label: "Independence" },
          { href: "#coi-policy", label: "COI Policy" },
          { href: "#operating-principles", label: "Operating Principles" },
          { href: "#versioning", label: "Versioning" },
        ]}
      />

      {/* Independence */}
      <section id="independence" className="site-section py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Independence</p>
        <h2 className="font-display text-2xl text-foreground mb-4">No commercial affiliations</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          The EQ Safety Benchmark is a behavioral evaluation framework that scores AI responses using a binary Safety
          Gate and eight weighted dimensions. It can be applied to any scenario or interaction and is validated against
          a baseline of 79 real-world emotional support interaction scenarios drawn from established datasets.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          Ikwe.ai has no financial, contractual, or operational relationships with any AI developer evaluated in our benchmarks. 
          We do not accept sponsorship, research grants, or in-kind support from companies whose products are evaluated.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          Evaluation results are not shared with model developers prior to publication. 
          No embargo periods are offered to evaluated parties.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed">
          This standard is maintained to ensure that findings reflect adversarial performance under independent testing conditions — 
          not conditions that have been pre-conditioned by developer review.
        </p>
      </section>

      {/* COI Policy */}
      <section id="coi-policy" className="site-section py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Conflict of Interest Policy</p>
        <div className="space-y-0 divide-y divide-border">
          {[
            {
              label: "Evaluator affiliations",
              text: "Evaluators disclose all professional relationships with AI developers. Any evaluator with a material relationship to a model under test is recused from that evaluation.",
            },
            {
              label: "Funding sources",
              text: "Ikwe.ai is independently funded. We disclose any institutional funding sources on a per-study basis. Benchmark publication pages disclose funding status for each release state.",
            },
            {
              label: "Deliverables review",
              text: "No evaluated party reviews or approves published findings, public copy, or metric blocks before publication.",
            },
            {
              label: "Disclosure updates",
              text: "COI disclosures are updated with each study. Any change to funding or affiliation status is disclosed in version notes.",
            },
          ].map(({ label, text }) => (
            <div key={label} className="py-5">
              <p className="font-mono text-xs text-lilac mb-1.5">{label}</p>
              <p className="text-sm text-foreground-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Operating principles */}
      <section id="operating-principles" className="site-section py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Operating Principles</p>
        <div className="space-y-0 divide-y divide-border">
          {[
            {
              label: "Adversarial standard",
              text: "Evaluations are structured to test failure conditions, not best-case interaction outcomes. We do not allow evaluated parties to define benchmark pass criteria.",
            },
            {
              label: "Publication discipline",
              text: "Public materials provide framework clarity while detailed scoring specifications are managed through controlled documentation.",
            },
            {
              label: "Evidence traceability",
              text: "Each evidence package is versioned with change context so external reviewers can attribute language and numbers to a specific methodological state.",
            },
            {
              label: "No guarantees",
              text: "We measure behavioral safety risk and support governance review. We do not claim guaranteed safety, guaranteed compliance, or guaranteed harm prevention.",
            },
          ].map(({ label, text }) => (
            <div key={label} className="py-5">
              <p className="font-mono text-xs text-lilac mb-1.5">{label}</p>
              <p className="text-sm text-foreground-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Versioning standards */}
      <section id="versioning" className="site-section py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Versioning Standards</p>
        <h2 className="font-display text-2xl text-foreground mb-4">Version lock is enforced on released results</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          Once a study metric block is published, those values are frozen. If methodology changes, a new version is
          published and the original is not edited.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-6">
          Every report package carries a version identifier (for example,{" "}
          <span className="font-mono text-foreground">v2026.02.18</span>), a short changelog, and the
          metric block from the originating study. This ensures that any published package can be traced
          to a specific methodological state.
        </p>
        <div className="stat-block rounded p-5">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-2">Current Version Reference</p>
          <p className="text-sm text-foreground">Public benchmark snapshot · Updated {BENCHMARK_CURRENT.lastUpdated}</p>
          <p className="text-xs text-foreground-subtle mt-1">
            {BENCHMARK_COPY.snapshotLine}
          </p>
          <p className="text-xs text-foreground-subtle mt-2">
            Need full version/change history?{" "}
            <a href={BENCHMARK_LOG_REQUEST.href} className="link-lilac underline">
              {BENCHMARK_LOG_REQUEST.label}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Contact nudge */}
      <section className="site-section py-14">
        <p className="text-sm text-foreground-muted">
          Questions about our independence standards or COI policy?{" "}
          <a href="/get-started" className="link-lilac underline">get in touch</a>.
        </p>
      </section>
    </PageShell>
  );
}
