import HeroVisualCard from "@/components/HeroVisualCard";
import { MessageSquare } from "lucide-react";

type HeroAction = {
  href: string;
  label: string;
};

type JumpLink = {
  href: string;
  label: string;
};

type SummaryHeroProps = {
  kicker: string;
  title: string;
  summary: string;
  highlights?: string[];
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  jumpLinks?: JumpLink[];
  visual?: {
    kicker?: string;
    title?: string;
    points?: string[];
    tone?: "violet" | "teal" | "danger" | "safe";
  };
};

export default function SummaryHero({
  kicker,
  title,
  summary,
  highlights = [],
  primaryAction,
  secondaryAction,
  jumpLinks = [],
  visual,
}: SummaryHeroProps) {
  const hasHeadlineStrip = highlights.length > 0;
  const hasJumpLinks = jumpLinks.length > 0;
  const inferredVisualPoints = (
    visual?.points?.length
      ? visual.points
      : hasHeadlineStrip
        ? highlights
        : hasJumpLinks
          ? jumpLinks.map((item) => item.label)
          : []
  ).slice(0, 4);
  const contextText = `${kicker} ${title}`.toLowerCase();
  const inferredTone =
    visual?.tone ??
    (contextText.includes("trust") || contextText.includes("confidential")
      ? "safe"
      : contextText.includes("audit") || contextText.includes("risk") || contextText.includes("compliance")
        ? "danger"
        : contextText.includes("research") || contextText.includes("benchmark") || contextText.includes("data")
          ? "teal"
          : "violet");
  const hasVisual = inferredVisualPoints.length > 0;
  const hasRail = hasJumpLinks || hasVisual;

  const openAssistantGuide = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(
      new CustomEvent("ikwe:assistant-open-guide", {
        detail: {
          pageTitle: title,
          sections: jumpLinks.map((item) => item.label),
        },
      })
    );
  };

  return (
    <section className="summary-hero border-b border-border">
      <div
        className={`relative z-10 py-6 md:py-8 ${
          hasRail ? "grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8" : ""
        }`}
      >
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] text-lilac uppercase tracking-widest mb-3">{kicker}</p>
          <h1 className="font-display text-3xl md:text-[2.7rem] text-foreground mb-3 leading-tight">{title}</h1>
          <p className="text-[0.95rem] md:text-base text-foreground-muted max-w-2xl leading-relaxed">{summary}</p>

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-wrap gap-2.5 mt-5">
              {primaryAction ? (
                <a
                  href={primaryAction.href}
                  className="inline-flex items-center rounded bg-lilac px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {primaryAction.label}
                </a>
              ) : null}
              {secondaryAction ? (
                <a
                  href={secondaryAction.href}
                  className="inline-flex items-center rounded border border-border px-4 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {secondaryAction.label}
                </a>
              ) : null}
            </div>
          )}

          {hasJumpLinks ? (
            <div className="mt-4 lg:hidden">
              <button
                type="button"
                onClick={openAssistantGuide}
                className="inline-flex items-center gap-2 rounded border border-border-2 bg-background-surface px-3 py-2 text-xs text-foreground hover:border-lilac transition-colors"
              >
                <MessageSquare size={13} className="text-lilac-bright" />
                Need help navigating this page? Open assistant guide
              </button>
            </div>
          ) : null}

          {hasHeadlineStrip ? (
            <div className="summary-headline-strip mt-6">
              {highlights.slice(0, 3).map((item) => (
                <div key={item} className="summary-headline-item">
                  {item}
                </div>
              ))}
            </div>
          ) : null}

          {hasVisual ? (
            <div className="mt-5 lg:hidden">
              <HeroVisualCard
                kicker={visual?.kicker}
                title={visual?.title}
                points={inferredVisualPoints}
                tone={inferredTone}
              />
            </div>
          ) : null}
        </div>

        {hasRail ? (
          <aside className="summary-context hidden lg:flex">
            {hasVisual ? (
              <HeroVisualCard
                kicker={visual?.kicker}
                title={visual?.title}
                points={inferredVisualPoints}
                tone={inferredTone}
                compact
              />
            ) : null}
            {hasJumpLinks ? (
              <div className="summary-context-section">
                <p className="summary-context-title">Need Assistance</p>
                <p className="text-xs text-foreground-muted leading-relaxed mb-2">
                  Need help navigating this page? The assistant can walk you through each section.
                </p>
                <button
                  type="button"
                  onClick={openAssistantGuide}
                  className="inline-flex items-center gap-2 rounded border border-border-2 bg-background-card px-3 py-2 text-xs text-foreground hover:border-lilac transition-colors"
                >
                  <MessageSquare size={13} className="text-lilac-bright" />
                  Open Assistant Guide
                </button>
              </div>
            ) : null}
            {hasJumpLinks ? (
              <div className="summary-context-section">
                <p className="summary-context-title">Navigate This Page</p>
                <div className="flex flex-wrap gap-2">
                  {jumpLinks.map((item) => (
                    <a key={item.href} href={item.href} className="summary-jump">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        ) : null}
      </div>
    </section>
  );
}
