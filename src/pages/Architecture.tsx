import PageShell from "@/components/PageShell";
import GatedCallout from "@/components/GatedCallout";
import CanonicalTerm from "@/components/CanonicalTerm";

export default function Architecture() {
  const pipeline = [
    {
      step: "01",
      title: "Scenario ingestion",
      body: (
        <>
          Scenarios are drawn from the <CanonicalTerm term="SSF" /> library. Each scenario is classified by domain,
          harm vector, and expected safe-response profile before evaluation.
        </>
      ),
    },
    {
      step: "02",
      title: "Model execution",
      body: (
        <>
          Each scenario is submitted to each evaluated <CanonicalTerm term="Endpoint" /> under controlled, identical
          conditions. No pre-conditioning prompts. First response is the scored response.
        </>
      ),
    },
    {
      step: "03",
      title: "Safety Gate (EQSB v2.1)",
      body: (
        <>
          First-contact response is evaluated against the <CanonicalTerm term="Safety Gate" />. Gate failure removes
          the response from quality scorecard consideration.
        </>
      ),
    },
    {
      step: "04",
      title: "Dimensional Scoring",
      body: (
        <>
          Gate-passing responses are scored through <CanonicalTerm term="Dimensional Scoring" />. Dimension definitions
          and weights are contained in gated artifacts.
        </>
      ),
    },
    {
      step: "05",
      title: "Aggregation & versioning",
      body: (
        <>
          Results are aggregated into a <CanonicalTerm term="Composite Score" /> and packaged under <CanonicalTerm term="Version Lock" />.
          No post-hoc edits are made to locked results.
        </>
      ),
    },
  ] as const;

  return (
    <PageShell>
      {/* Header */}
      <section className="pt-14 pb-12 border-b border-border">
        <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-4">System Overview</p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 leading-tight max-w-2xl">
          Architecture
        </h1>
        <p className="text-base text-foreground-muted max-w-xl leading-relaxed">
          Non-sensitive overview of the evaluation pipeline. Scoring thresholds, scenario library details, and dimension weightings are not disclosed here.
        </p>
      </section>

      {/* Pipeline overview */}
      <section className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Evaluation Pipeline</p>
        <div className="space-y-0 max-w-2xl">
          {pipeline.map(({ step, title, body }) => (
            <div key={step} className="flex gap-6 py-8 border-b border-border last:border-b-0">
              <span className="font-mono text-xs text-foreground-subtle w-6 shrink-0 pt-0.5">{step}</span>
              <div>
                <h3 className="font-display text-lg text-foreground mb-1.5">{title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Control Terms</p>
        <div className="space-y-2 text-sm text-foreground-muted max-w-2xl">
          <p>
            <CanonicalTerm term="PASS_QUALITY" /> and <CanonicalTerm term="FAIL_DIAGNOSTIC" /> route outputs into
            quality scoring or diagnostic-only handling.
          </p>
          <p>
            <CanonicalTerm term="Severity Cap" /> and <CanonicalTerm term="Override Logic" /> apply governance
            constraints under defined conditions.
          </p>
          <p>
            <CanonicalTerm term="Catastrophic Failure" /> captures highest-risk outcomes, and{" "}
            <CanonicalTerm term="Synthetic Scenario Monitoring" /> is used for post-deployment drift tracking.
          </p>
        </div>
      </section>

      {/* What's not here */}
      <section className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Gated Information</p>
        <p className="text-sm text-foreground-muted max-w-xl leading-relaxed mb-6">
          The following are not disclosed on this page to prevent gaming of the benchmark:
        </p>
        <ul className="space-y-2 text-sm text-foreground-muted max-w-lg">
          {[
            "Individual Safety Gate violation definitions",
            "Dimension weights and sub-rubric scoring",
            "Per-model result breakdowns",
            "Scenario library contents",
            "Pass/fail thresholds for the 8-dimension scorecard",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-foreground-subtle shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="py-14">
        <GatedCallout
          title="Detailed Architecture Documentation"
          body="Full pipeline specifications, dimension rubrics, and scoring implementation details are available in gated artifact releases."
          ctaLabel="Request architecture documentation →"
        />
      </section>
    </PageShell>
  );
}
