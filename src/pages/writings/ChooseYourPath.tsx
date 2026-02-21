import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function ChooseYourPath() {
  return (
    <PageShell>
      <PageMeta
        title="Choose Your Path | Ikwe.ai"
        description="An opinion essay on interruption, cumulative risk, and how better paths are built through repeated governance choices."
        path="/research/writings/choose-your-path"
      />
      <SummaryHero
        kicker="Opinion Essay"
        title="Choose Your Path"
        summary="History moves through repeated choices, not single headlines. Harm compounds through tolerated distortion, and repair compounds through deliberate interruption."
        highlights={[
          "Patterns compound into institutional outcomes",
          "Interruption is an operational choice, not a slogan",
          "Trust is built through repeated governance decisions",
        ]}
        primaryAction={{ href: "/research/writings", label: "Back to Writings" }}
        secondaryAction={{ href: "/research", label: "Back to Research" }}
        jumpLinks={[
          { href: "#long-arc", label: "Long Arc" },
          { href: "#interruption", label: "Interruption" },
          { href: "#integrity-compounds", label: "Integrity Compounds" },
          { href: "#the-question", label: "The Question" },
        ]}
      />

      <section className="py-14 border-b border-border max-w-3xl article-reading">
        <h2 id="long-arc" className="font-display text-2xl text-foreground mb-4 scroll-mt-24">The Long Arc</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Institutions are not defined by single announcements. They are defined by repeated operating choices.
          Distortion repeated over time becomes system behavior. Integrity repeated over time becomes trust.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          This is why governance work is cumulative. The visible event is usually late. The pattern forms earlier.
        </p>

        <h2 id="interruption" className="font-display text-2xl text-foreground mb-4 mt-10 scroll-mt-24">Interruption</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Interruption is the moment when an organization refuses to continue a known-risk path. In practice, that can
          mean tightening escalation thresholds, changing release controls, or setting clearer operational boundaries.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          The point is not dramatic rhetoric. The point is repeatable decisions that redirect risk trajectories before
          incidents become irreversible.
        </p>

        <h2 id="integrity-compounds" className="font-display text-2xl text-foreground mb-4 mt-10 scroll-mt-24">Integrity Compounds</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Harm is often cumulative. Repair follows the same rule. One corrected decision creates capacity for the next
          corrected decision. Over time, that creates a different operating identity.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          This is the practical frame for governance: choose the path that still holds under pressure, scrutiny, and
          time.
        </p>

        <h2 id="the-question" className="font-display text-2xl text-foreground mb-4 mt-10 scroll-mt-24">The Question</h2>
        <p className="text-sm text-foreground-muted leading-relaxed">
          What are you building that can survive reality? Better systems are not declared. They are constructed through
          consistent choices.
        </p>
      </section>

      <section className="py-14 max-w-3xl">
        <p className="text-xs text-foreground-subtle">By Stephanie Stranko</p>
        <a
          href="https://ikwe.ai/research/writings/choose-your-path"
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
