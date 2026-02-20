import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function BeforeTheViolation() {
  return (
    <PageShell>
      <PageMeta
        title="Before the Violation | Ikwe.ai"
        description="Founder writing on measuring behavioral safety before visible policy failure."
        path="/research/writings/before-the-violation"
      />
      <SummaryHero
        kicker="Founder Writing"
        title="Before the Violation"
        summary="Why behavioral safety must be measured before visible policy failure, not only after it."
        highlights={[
          "Pre-deployment measurement posture",
          "Evidence-first governance framing",
          "Behavioral risk before incident visibility",
        ]}
        primaryAction={{ href: "/research#writings", label: "Back to Writings" }}
        secondaryAction={{ href: "/research", label: "Back to Research" }}
      />

      <section className="py-14 border-b border-border max-w-3xl">
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Most organizations still treat behavioral failure as a post-incident problem. That delay is the governance
          gap. By the time a visible violation appears, institutional trust has already been consumed.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          The practical question is not whether a model can sound empathetic. The practical question is whether it can
          consistently avoid high-risk behavior under pressure, ambiguity, and emotionally loaded context.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Safety review should begin before deployment and continue after deployment through scheduled re-evaluation.
          Without that cadence, organizations are measuring communication quality while missing behavior risk.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Governance teams need evidence that is repeatable, versioned, and attributable to a defined evaluation
          state. Point-in-time assertions are not enough for institutional oversight.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed">
          This benchmark exists to move safety review forward in time: from retrospective interpretation to
          pre-deployment measurement and ongoing evidence discipline.
        </p>
      </section>

      <section className="py-14 max-w-3xl">
        <p className="text-xs text-foreground-subtle">By Stephanie Stranko</p>
      </section>
    </PageShell>
  );
}
