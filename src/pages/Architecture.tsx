import PageShell from "@/components/PageShell";
import GatedCallout from "@/components/GatedCallout";
import CanonicalTerm from "@/components/CanonicalTerm";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

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
          and weights are documented in formal report releases.
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
      <PageMeta
        title="Architecture — Evaluation Pipeline | Ikwe.ai"
        description="Public architecture overview for the EQSB evaluation pipeline, controls, and versioned governance posture."
        path="/technology/architecture"
      />
      <SummaryHero
        kicker="System Overview"
        title="Architecture"
        summary="Public overview of the evaluation pipeline. Detailed scoring specifications are documented through formal report releases."
        highlights={[
          "Version-locked release discipline",
          "Deterministic gate before quality scoring",
          "Public framework language with release discipline",
        ]}
        primaryAction={{ href: "/reports", label: "View Reports & Releases →" }}
        secondaryAction={{ href: "/consult", label: "Request Consultation" }}
        jumpLinks={[
          { href: "#pipeline", label: "Pipeline" },
          { href: "#control-terms", label: "Control Terms" },
          { href: "#public-scope", label: "Public Scope" },
          { href: "#architecture-access", label: "Access" },
        ]}
      />

      {/* Pipeline overview */}
      <section id="pipeline" className="py-14 border-b border-border">
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

      <section id="control-terms" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Control Terms</p>
        <div className="space-y-2 text-sm text-foreground-muted max-w-2xl">
          <p>
            <CanonicalTerm term="PASS_QUALITY" /> and <CanonicalTerm term="FAIL_DIAGNOSTIC" /> route outputs into
            quality scoring or review-only handling.
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
      <section id="public-scope" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Public Scope</p>
        <p className="text-sm text-foreground-muted max-w-xl leading-relaxed mb-6">
          This page provides public architecture framing. Detailed technical specification sets are released through
          formal report publications.
        </p>
        <ul className="space-y-2 text-sm text-foreground-muted max-w-lg">
          {[
            "Detailed Safety Gate definition tables",
            "Dimension weight and scoring reference tables",
            "Model-level outcome detail tables",
            "Scenario catalog records",
            "Expanded score calibration references",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-foreground-subtle shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section id="architecture-access" className="py-14">
        <GatedCallout
          title="Detailed Architecture Documentation"
          body="Extended architecture documentation is distributed through formal report releases. For audit access and scope review, use consultation intake."
          ctaLabel="Request consultation for access →"
          ctaPath="/consult"
        />
      </section>
    </PageShell>
  );
}
