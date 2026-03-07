import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function AIGovernanceCompliance() {
  return (
    <PageShell>
      <PageMeta
        title="AI Governance Is Becoming a Compliance Issue | Ikwe.ai"
        description="Trust-layer thesis on why AI governance is now an evidence and compliance discipline."
        path="/research/writings/ai-governance-is-becoming-a-compliance-issue"
      />
      <SummaryHero
        kicker="Published Essay"
        title="AI Governance Is Becoming a Compliance Issue"
        summary="Governance is no longer only model quality. It is whether organizations can show auditable, repeatable, and defensible oversight."
        highlights={[
          "From output monitoring to behavioral instrumentation",
          "Confidence without governance creates authority risk",
          "Trust layer converts policy intent into evidence",
        ]}
        primaryAction={{ href: "/research/writings", label: "Back to Writing Library" }}
        secondaryAction={{ href: "/research", label: "Back to Research" }}
        jumpLinks={[
          { href: "#trust-layer-thesis", label: "Thesis" },
          { href: "#risk-instrumentation", label: "Instrumentation" },
          { href: "#compliance-problem", label: "Compliance" },
          { href: "#confidence-risk", label: "Confidence Risk" },
          { href: "#trust-layer", label: "Trust Layer" },
        ]}
      />

      <section className="py-14 border-b border-border max-w-3xl article-reading">
        <p id="trust-layer-thesis" className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6 scroll-mt-24">
          Trust-Layer Thesis
        </p>

        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          AI systems are now deployed in regulated environments. The governance question is not only whether outputs
          look compliant, but whether the operating organization can demonstrate consistent and auditable oversight.
        </p>

        <h2 id="risk-instrumentation" className="font-display text-2xl text-foreground mb-4 mt-10 scroll-mt-24">
          From Output Monitoring to Behavioral Risk Instrumentation
        </h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Most safety controls evaluate visible outputs: disallowed content, hallucinations, and policy violations.
          Those controls remain necessary, but they are downstream checks. Institutional risk often appears earlier in
          the interaction path through confidence signaling, user deference, and escalation drift.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          The core governance objective is to observe and constrain these behavioral pathways before they become policy
          incidents.
        </p>

        <h2 id="compliance-problem" className="font-display text-2xl text-foreground mb-4 mt-10 scroll-mt-24">Why This Is a Compliance Problem</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Regulatory and enterprise governance frameworks increasingly require evidence of risk management, monitoring,
          documentation, and human oversight controls. That means governance programs need operational records, not
          only policy statements.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          In practice, the requirement is straightforward: show how risk is detected, what intervention thresholds are
          applied, and how decisions are traceable over time.
        </p>

        <h2 id="confidence-risk" className="font-display text-2xl text-foreground mb-4 mt-10 scroll-mt-24">
          Confidence Without Governance Is Risk
        </h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          When AI responses present high confidence, people can reduce independent verification. That shift can produce
          authority effects even when policy wording appears acceptable. Governance programs must monitor for that
          reliance shift and trigger safeguards before the interaction crosses a harm boundary.
        </p>

        <h2 id="trust-layer" className="font-display text-2xl text-foreground mb-4 mt-10 scroll-mt-24">The Trust Layer</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          A trust layer is the operational bridge between policy intent and verifiable execution. It combines signal
          tracking, intervention rules, and version governance into a system that can be reviewed by risk, audit, and
          governance teams.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed">
          Governance becomes durable when it is instrumented inside operations, versioned, and evidence-producing by
          default.
        </p>
      </section>

      <section className="py-14 max-w-3xl">
        <p className="text-xs text-foreground-subtle">By Stephanie Stranko</p>
        <a
          href="https://ikwe.ai/research/writings/ai-governance-is-becoming-a-compliance-issue"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm link-lilac mt-3"
        >
          Primary article URL ↗
        </a>
      </section>
    </PageShell>
  );
}
