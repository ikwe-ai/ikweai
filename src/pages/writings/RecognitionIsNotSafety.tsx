import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function RecognitionIsNotSafety() {
  return (
    <PageShell>
      <PageMeta
        title="Recognition Is Not Safety | Ikwe.ai"
        description="Founder writing abstract on the distinction between emotional recognition and behavioral safety outcomes."
        path="/research/writings/recognition-is-not-safety"
      />
      <SummaryHero
        kicker="Research Note"
        title="Recognition Is Not Safety"
        summary="A system can correctly recognize distress and still choose unsafe behavior. Recognition quality and safety quality are related but not equivalent."
        highlights={[
          "Recognition does not equal safe response",
          "Behavior quality is measured separately",
          "Public abstract; full essay forthcoming",
        ]}
        primaryAction={{ href: "/research/writings", label: "Back to Writings" }}
        secondaryAction={{ href: "/research", label: "Back to Research" }}
      />

      <section className="py-14 border-b border-border max-w-3xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Public Abstract</p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          A system can correctly detect emotional distress and still fail at behavioral safety. Recognition quality and
          safety quality are related, but they are not the same control objective.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Institutional review should separate these signals: one dimension measures recognition, and another measures
          behavioral response quality under risk-sensitive conditions.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed">
          Full publication is forthcoming. This page provides the current public abstract so terms remain aligned
          with the live benchmark language.
        </p>
      </section>

      <section className="py-14 max-w-3xl">
        <p className="text-xs text-foreground-subtle">By Stephanie Stranko</p>
      </section>
    </PageShell>
  );
}
