import { useEffect } from "react";
import HeroVisualCard from "@/components/HeroVisualCard";

type HeroAction = {
  href: string;
  label: string;
  onClick?: () => void;
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
  const hasRail = hasVisual;

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(
      new CustomEvent("ikwe:assistant-guide-context", {
        detail: {
          pageTitle: title,
          sections: jumpLinks.map((item) => ({ label: item.label, href: item.href })),
        },
      })
    );
  }, [jumpLinks, title]);

  return (
    <section className="site-section summary-hero border-b border-border">
      <div
        className={`relative z-10 py-10 md:py-16 ${
          hasRail ? "grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10" : ""
        }`}
      >
        <div className="max-w-3xl">
          <p className="section-kicker-live mb-4">{kicker}</p>
          <h1 className="font-display fluid-title text-foreground mb-4">{title}</h1>
          <p className="text-foreground-muted lede">{summary}</p>

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-wrap gap-3 mt-7">
              {primaryAction ? (
                primaryAction.onClick ? (
                  <button
                    type="button"
                    onClick={primaryAction.onClick}
                    className="inline-flex items-center rounded bg-lilac px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {primaryAction.label}
                  </button>
                ) : (
                  <a
                    href={primaryAction.href}
                    className="inline-flex items-center rounded bg-lilac px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {primaryAction.label}
                  </a>
                )
              ) : null}
              {secondaryAction ? (
                secondaryAction.onClick ? (
                  <button
                    type="button"
                    onClick={secondaryAction.onClick}
                    className="inline-flex items-center rounded border border-border px-5 py-3 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {secondaryAction.label}
                  </button>
                ) : (
                  <a
                    href={secondaryAction.href}
                    className="inline-flex items-center rounded border border-border px-5 py-3 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {secondaryAction.label}
                  </a>
                )
              ) : null}
            </div>
          )}

          {hasHeadlineStrip ? (
            <div className="summary-headline-strip mt-6">
              {highlights.slice(0, 3).map((item) => (
                <div key={item} className="summary-headline-item">
                  {item}
                </div>
              ))}
            </div>
          ) : null}

          {hasJumpLinks ? (
            <div className="flex flex-wrap gap-2 mt-4">
              {jumpLinks.map((item) => (
                <a key={item.href} href={item.href} className="summary-jump">
                  {item.label}
                </a>
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
          </aside>
        ) : null}
      </div>
    </section>
  );
}
