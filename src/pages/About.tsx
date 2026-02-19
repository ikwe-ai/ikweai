import PageShell from "@/components/PageShell";

export default function About() {
  return (
    <PageShell>
      {/* Header */}
      <section className="pt-14 pb-12 border-b border-border">
        <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-4">Institutional Posture</p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 leading-tight max-w-2xl">
          About Ikwe.ai
        </h1>
        <p className="text-base text-foreground-muted max-w-xl leading-relaxed">
          Independence, conflict-of-interest policy, and versioning posture.
        </p>
      </section>

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

      {/* Versioning posture */}
      <section className="py-14 border-b border-border max-w-2xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Versioning Posture</p>
        <h2 className="font-display text-2xl text-foreground mb-4">Results are locked, not updated</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          Once a study's canonical stat block is published, the numbers are frozen. 
          If methodology changes, a new version with a new designation is published — the original is not edited.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-6">
          Every artifact release carries a version identifier (e.g., <span className="font-mono text-foreground">Ikwe_SamplePack_v2026.02.18</span>), 
          a short changelog, and the canonical stat block from the originating study. 
          This ensures that any artifact in circulation can be traced to a specific methodological state.
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
          <a href="/contact" className="link-lilac underline">Contact us</a>.
        </p>
      </section>
    </PageShell>
  );
}
