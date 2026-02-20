import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function BeforeTheViolation() {
  return (
    <PageShell>
      <PageMeta
        title="Before the Violation | Ikwe.ai"
        description="Why AI safety needs harm floors, not perfection: full founder writing from Ikwe.ai research."
        path="/research/writings/before-the-violation"
      />
      <SummaryHero
        kicker="Founder Writing"
        title="Before the Violation"
        summary="Why AI safety needs harm floors, not perfection. Most deployed harm emerges through interaction drift before explicit violation."
        highlights={[
          "Capability governance and trajectory governance",
          "Intervention windows before visible policy failure",
          "Harm floors as enforceable minimums",
        ]}
        primaryAction={{ href: "/research/writings", label: "Back to Writings" }}
        secondaryAction={{ href: "/research", label: "Back to Research" }}
        jumpLinks={[
          { href: "#harm-begins", label: "Harm Begins" },
          { href: "#intervention-window", label: "Intervention Window" },
          { href: "#trajectory-governance", label: "Trajectory Governance" },
          { href: "#harm-floors", label: "Harm Floors" },
          { href: "#conclusion", label: "Conclusion" },
        ]}
      />

      <section className="py-14 border-b border-border max-w-3xl article-reading">
        <h2 id="harm-begins" className="font-display text-2xl text-foreground mb-4 scroll-mt-24">Harm Begins Inside Ordinary Interaction</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          AI safety conversations often center on catastrophic capability: whether a model can execute extreme harmful
          actions at scale. That framing is important, but most real-world harm in deployed systems starts earlier.
          It starts in ordinary interaction, accumulates across turns, and forms a trajectory.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Before a visible policy violation, there is drift: increasing dependency language, reduced external grounding,
          authority inflation in sensitive contexts, and escalation loops. If governance only reacts at the spike, it
          misses the intervention moment that matters most.
        </p>

        <h2 id="intervention-window" className="font-display text-2xl text-foreground mb-4 mt-10 scroll-mt-24">The Intervention Window</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Between apparently safe behavior and explicit violation, there is a measurable window where an interaction can
          still be redirected. This is where harm floors operate: minimum enforceable safety behavior before a
          violation threshold is crossed.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          The key governance question is not only what a model can do at its outer limits. It is what an interaction is
          becoming while risk is still manageable.
        </p>

        <h2 id="trajectory-governance" className="font-display text-2xl text-foreground mb-4 mt-10 scroll-mt-24">Capability vs. Trajectory Governance</h2>
        <div className="space-y-3 text-sm text-foreground-muted leading-relaxed mb-5">
          <p>
            <strong className="text-foreground">Capability governance asks:</strong> What can the model do?
          </p>
          <p>
            <strong className="text-foreground">Trajectory governance asks:</strong> What is this interaction becoming?
          </p>
          <p>
            Both are necessary. Capability governance manages systemic exposure, while trajectory governance manages
            live interaction risk before explicit violation.
          </p>
        </div>

        <h2 id="harm-floors" className="font-display text-2xl text-foreground mb-4 mt-10 scroll-mt-24">Harm Floors, Not Perfection</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          A harm floor is a minimum enforceable threshold of interaction safety. It does not claim perfection; it
          prevents known failure classes from scaling unnoticed.
        </p>
        <ol className="space-y-2 text-sm text-foreground-muted mb-5">
          <li>1. Failure class taxonomy</li>
          <li>2. Multi-turn trajectory modeling</li>
          <li>3. Drift threshold detection</li>
          <li>4. Intervention triggers</li>
          <li>5. Constraint application</li>
          <li>6. Audit logging</li>
        </ol>

        <h2 id="conclusion" className="font-display text-2xl text-foreground mb-4 mt-10 scroll-mt-24">Conclusion</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Safety review should begin before deployment and continue after deployment through scheduled re-evaluation.
          Without that cadence, organizations measure communication quality while missing behavior risk.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed">
          The future of AI safety will not be defined only by capability thresholds. It will be defined by whether
          systems are instrumented to detect drift before harm.
        </p>
      </section>

      <section className="py-14 max-w-3xl">
        <p className="text-xs text-foreground-subtle">By Stephanie Stranko</p>
        <a
          href="https://ikwe.ai/research/writings/before-the-violation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm link-lilac mt-3"
        >
          Canonical article URL ↗
        </a>
      </section>
    </PageShell>
  );
}
