import PageShell from "@/components/PageShell";
import CanonicalTerm from "@/components/CanonicalTerm";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function About() {
  return (
    <PageShell>
      <PageMeta
        title="About — Independence & Governance | Ikwe.ai"
        description="Institutional independence, conflict-of-interest policy, and version-lock governance for benchmark releases."
        path="/about"
      />
      <SummaryHero
        kicker="Institutional Posture"
        title="About Ikwe.ai"
        summary="Ikwe.ai is an independent behavioral AI evaluation organization. This page defines our conflict posture, release governance, and publication discipline."
        highlights={[
          "No financial ties to evaluated model developers",
          "Version-locked release policy",
          "Structured disclosure and COI recusal practices",
        ]}
        primaryAction={{ href: "/consult", label: "Contact Governance Team →" }}
        secondaryAction={{ href: "/reports", label: "View Reports & Releases" }}
      />

      {/* Independence */}
      <section className="py-14 border-b border-border max-w-2xl">
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
          This posture is maintained to ensure that findings reflect adversarial performance under independent testing conditions — 
          not conditions that have been pre-conditioned by developer review.
        </p>
      </section>

      {/* COI Policy */}
      <section className="py-14 border-b border-border max-w-2xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Conflict of Interest Policy</p>
        <div className="space-y-0 divide-y divide-border">
          {[
            {
              label: "Evaluator affiliations",
              text: "Evaluators disclose all professional relationships with AI developers. Any evaluator with a material relationship to a model under test is recused from that evaluation.",
            },
            {
              label: "Funding sources",
              text: "Ikwe.ai is independently funded. We disclose any institutional funding sources on a per-study basis. Study I was conducted without external funding.",
            },
            {
              label: "Artifact review",
              text: "No evaluated party reviews or approves published findings, artifact copy, or canonical stat blocks before release.",
            },
            {
              label: "Disclosure updates",
              text: "COI disclosures are updated with each study. Any change to our funding or affiliation posture will be disclosed in the study versioning notes.",
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
      <section className="py-14 border-b border-border max-w-2xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Operating Principles</p>
        <div className="space-y-0 divide-y divide-border">
          {[
            {
              label: "Adversarial posture",
              text: "Evaluations are structured to test failure conditions, not best-case prompt outcomes. We do not allow evaluated parties to define benchmark pass criteria.",
            },
            {
              label: "Publication discipline",
              text: "Public materials provide framework clarity while detailed scoring specifications are handled through formal release policy.",
            },
            {
              label: "Evidence traceability",
              text: "Each release is versioned with changelog context so external reviewers can attribute language and numbers to a specific methodological state.",
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

      {/* Versioning posture */}
      <section className="py-14 border-b border-border max-w-2xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Versioning Posture</p>
        <h2 className="font-display text-2xl text-foreground mb-4">
          <CanonicalTerm term="Version Lock" /> is enforced on released results
        </h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          Once a study's canonical stat block is published, the numbers are frozen. If methodology changes, a new
          version with a new designation is published, and the original is not edited.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-6">
          Every artifact release carries a version identifier (for example,{" "}
          <span className="font-mono text-foreground">Ikwe_SamplePack_v2026.02.18</span>), a short changelog, and the
          canonical stat block from the originating study. This ensures that any artifact in circulation can be traced
          to a specific methodological state.
        </p>
        <div className="stat-block rounded p-5">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-2">Current Version Reference</p>
          <p className="text-sm text-foreground">Study I (EQSB v2.1) · Released 2025</p>
          <p className="text-xs text-foreground-subtle mt-1">
            Methodology lineage: the 54.7% baseline derives from Study I (SSF taxonomy). 
            Current evaluations use EQSB v2.1 with an updated Safety Gate (10 violations) plus an 8-dimension scorecard (A–H, weighted).
          </p>
        </div>
      </section>

      {/* Contact nudge */}
      <section className="py-14 max-w-2xl">
        <p className="text-sm text-foreground-muted">
          Questions about our independence posture or COI policy?{" "}
          <a href="/consult" className="link-lilac underline">Contact us</a>.
        </p>
      </section>
    </PageShell>
  );
}
