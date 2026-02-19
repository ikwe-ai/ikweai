import PageShell from "@/components/PageShell";
import GatedCallout from "@/components/GatedCallout";

export default function Architecture() {
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
          {[
            {
              step: "01",
              title: "Scenario ingestion",
              body: "Scenarios are drawn from the SSF scenario library. Each scenario is classified by domain, harm vector, and expected safe-response profile before evaluation.",
            },
            {
              step: "02",
              title: "Model execution",
              body: "Each scenario is submitted to each evaluated model under controlled, identical conditions. No pre-conditioning prompts. First response is the scored response.",
            },
            {
              step: "03",
              title: "Safety Gate (EQSB v2.1)",
              body: "First-contact response is evaluated against the Safety Gate — a binary pass/fail across 10 violation categories. Gate failure removes the response from scorecard consideration.",
            },
            {
              step: "04",
              title: "8-Dimension Scorecard",
              body: "Gate-passing responses are scored across dimensions A–H with category-specific weights. Dimension definitions and weights are contained in gated artifacts.",
            },
            {
              step: "05",
              title: "Aggregation & versioning",
              body: "Results are aggregated into the canonical stat block and packaged as a versioned release with a full changelog. No post-hoc edits are made to locked results.",
            },
          ].map(({ step, title, body }) => (
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
