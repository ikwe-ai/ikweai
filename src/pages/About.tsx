import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";
import { BENCHMARK_COPY, BENCHMARK_CURRENT, BENCHMARK_LOG_REQUEST } from "@/lib/benchmark-data";
import { useState } from "react";

const COI_ITEMS = [
  { label: "Evaluator affiliations", text: "Evaluators disclose all professional relationships with AI developers. Any evaluator with a material relationship to a model under test is recused from that evaluation." },
  { label: "Funding sources", text: "Ikwe.ai is independently funded. We disclose any institutional funding sources on a per-study basis. Benchmark publication pages disclose funding status for each release state." },
  { label: "Deliverables review", text: "No evaluated party reviews or approves published findings, public copy, or metric blocks before publication." },
  { label: "Disclosure updates", text: "COI disclosures are updated with each study. Any change to funding or affiliation status is disclosed in version notes." },
];

const PRINCIPLES_ITEMS = [
  { label: "Adversarial standard", text: "Evaluations are structured to test failure conditions, not best-case interaction outcomes. We do not allow evaluated parties to define benchmark pass criteria." },
  { label: "Publication discipline", text: "Public materials provide framework clarity while detailed scoring specifications are managed through controlled documentation." },
  { label: "Evidence traceability", text: "Each evidence package is versioned with change context so external reviewers can attribute language and numbers to a specific methodological state." },
  { label: "No guarantees", text: "We measure behavioral safety risk and support governance review. We do not claim guaranteed safety, guaranteed compliance, or guaranteed harm prevention." },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<"coi" | "principles">("coi");

  return (
    <PageShell>
      <PageMeta
        title="About | Ikwe.ai"
        description="Ikwe.ai is the independent behavioral safety layer for human-facing AI. Independence standards, COI policy, and evidence governance."
        path="/about"
      />
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
          { href: "#calibration", label: "Benchmark Calibration" },
          { href: "#founder", label: "Founder" },
        ]}
      />

      {/* Independence */}
      <section id="independence" className="site-section py-14 border-b border-border">
        <p className="section-kicker mb-6">Independence</p>
        <h2 className="font-display text-2xl text-foreground mb-4">No commercial affiliations</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          The EQ Safety Benchmark is a behavioral evaluation framework that scores AI responses using a binary Safety
          Gate and eight behavioral dimensions. It can be applied to any scenario or interaction and is validated against
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

      {/* COI Policy + Operating Principles — tabbed */}
      <section id="coi-policy" className="site-section py-14 border-b border-border">
        {/* Tab bar */}
        <div className="flex gap-1 mb-8 border-b border-border">
          {([
            { key: "coi" as const, label: "Conflict of Interest Policy" },
            { key: "principles" as const, label: "Operating Principles" },
          ]).map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`font-mono text-[11px] uppercase tracking-widest px-4 py-2.5 border-b-2 transition-colors -mb-px ${
                activeTab === tab.key
                  ? "border-lilac text-lilac"
                  : "border-transparent text-foreground-subtle hover:text-foreground-muted"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(activeTab === "coi" ? COI_ITEMS : PRINCIPLES_ITEMS).map(({ label, text }) => (
            <div key={label} className="card-surface p-5">
              <p className="font-mono text-xs text-lilac mb-2">{label}</p>
              <p className="text-sm text-foreground-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Versioning standards */}
      <section id="versioning" className="site-section py-14 border-b border-border">
        <p className="section-kicker mb-6">Versioning Standards</p>
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
          <p className="section-kicker mb-2">Current Version Reference</p>
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

      {/* Benchmark Calibration */}
      <section id="calibration" className="site-section py-14 border-b border-border">
        <p className="section-kicker mb-6">Benchmark Calibration</p>
        <h2 className="font-display text-2xl text-foreground mb-4">Why the bar is set where it is</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          The EQ Safety Benchmark evaluates AI behavior specifically in emotionally vulnerable contexts —
          grief, crisis, identity challenges, power asymmetry. The scenarios are adversarial by design.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          Standard AI safety benchmarks test for factual accuracy, hallucination, or general harm.
          They are not designed to detect the failure modes that emerge when a real user is in distress —
          supportive escalation, polite neglect, dependency reinforcement, unrepaired harm across turns.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed">
          A system can pass general safety evaluations and still fail in emotionally loaded interactions.
          That is the gap Ikwe.ai measures. The calibration reflects the stakes — protecting vulnerable
          users demands a higher standard than general safety benchmarks are built to enforce.
        </p>
      </section>

      {/* Founder */}
      <section id="founder" className="site-section py-14 border-b border-border">
        <p className="section-kicker mb-6">Founder</p>
        <h2 className="font-display text-2xl text-foreground mb-4">Stephanie Stranko</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          Stephanie Stranko is the founder of Ikwe.ai and Visible Healing Inc., based in Des Moines, Iowa.
          Her work focuses on emotional safety and behavioral failure modes in human-facing AI systems.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          The EQ Safety Benchmark emerged from years of building emotionally intelligent AI applications
          and observing the gap between how AI systems perform on standard benchmarks and how they actually
          behave when a real person is vulnerable. Ikwe.ai exists to make that gap visible and measurable.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed">
          Visible Healing Inc. operates Ikwe.ai as an independent research and evaluation entity.
          No external investment from AI developers evaluated. No sponsorship. No affiliate arrangements
          with evaluated systems.
        </p>
      </section>

      {/* Contact nudge */}
      <section className="site-section py-14">
        <p className="text-sm text-foreground-muted">
          Questions about our independence standards, COI policy, or benchmark calibration?{" "}
          <a href="/get-started" className="link-lilac underline">get in touch</a>.
        </p>
      </section>
    </PageShell>
  );
}
