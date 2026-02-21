import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function About() {
  return (
    <PageShell>
      <PageMeta
        title="About — Independence & Governance | Ikwe.ai"
        description="Institutional independence, conflict-of-interest policy, and governance controls for benchmark evidence."
        path="/about"
      />
      <SummaryHero
        kicker="Institutional Standards"
        title="About Ikwe.ai"
        summary="Ikwe.ai is an independent behavioral AI evaluation organization. This page defines our conflict-of-interest standards, governance controls, and evidence management standards."
        highlights={[
          "No financial ties to evaluated model developers",
          "Versioned evidence policy",
          "Structured disclosure and COI recusal practices",
        ]}
        primaryAction={{ href: "/request-audit#application-form", label: "Request Audit →" }}
        secondaryAction={{ href: "/deliverables", label: "View Deliverables & Transparency" }}
        jumpLinks={[
          { href: "#independence", label: "Independence" },
          { href: "#coi-policy", label: "COI Policy" },
          { href: "#operating-principles", label: "Operating Principles" },
          { href: "#versioning", label: "Versioning" },
        ]}
      />

      {/* Independence */}
      <section id="independence" className="py-14 border-b border-border max-w-2xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Independence</p>
        <h2 className="font-display text-2xl text-foreground mb-4">No commercial affiliations</h2>
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
      <section id="coi-policy" className="py-14 border-b border-border max-w-2xl">
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
      <section id="operating-principles" className="py-14 border-b border-border max-w-2xl">
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
      <section id="versioning" className="py-14 border-b border-border max-w-2xl">
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
          <p className="text-sm text-foreground">Public benchmark snapshot · Updated February 20, 2026</p>
          <p className="text-xs text-foreground-subtle mt-1">
            Current snapshot: 54.7% failed the Safety Gate at first contact; 43% showed no repair behavior after
            introducing harm; N = 21,000+ responses across 79 scenarios in 12 behavioral risk domains.
          </p>
        </div>
      </section>

      {/* Contact nudge */}
      <section className="py-14 max-w-2xl">
        <p className="text-sm text-foreground-muted">
          Questions about our independence standards or COI policy?{" "}
          <a href="/request-audit#application-form" className="link-lilac underline">Contact us</a>.
        </p>
      </section>
    </PageShell>
  );
}
