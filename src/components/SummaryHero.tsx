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
};

export default function SummaryHero({
  kicker,
  title,
  summary,
  highlights = [],
  primaryAction,
  secondaryAction,
  jumpLinks = [],
}: SummaryHeroProps) {
  const hasHeadlineStrip = highlights.length > 0;
  const hasJumpLinks = jumpLinks.length > 0;
  const hasContext = hasHeadlineStrip || hasJumpLinks;

  return (
    <section className="summary-hero border-b border-border">
      <div
        className={`relative z-10 py-8 md:py-9 ${
          hasJumpLinks ? "grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8" : ""
        }`}
      >
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] text-lilac uppercase tracking-widest mb-3">{kicker}</p>
          <h1 className="font-display text-3xl md:text-[2.7rem] text-foreground mb-3 leading-tight">{title}</h1>
          <p className="text-sm md:text-base text-foreground-muted max-w-2xl leading-relaxed">{summary}</p>

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-wrap gap-3 mt-6">
              {primaryAction ? (
                <a
                  href={primaryAction.href}
                  className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {primaryAction.label}
                </a>
              ) : null}
              {secondaryAction ? (
                <a
                  href={secondaryAction.href}
                  className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {secondaryAction.label}
                </a>
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
        </div>

        {hasJumpLinks ? (
          <aside className="summary-context">
            <div className="summary-context-section">
              <p className="summary-context-title">On This Page</p>
              <div className="flex flex-wrap gap-2">
                {jumpLinks.map((item) => (
                  <a key={item.href} href={item.href} className="summary-jump">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        ) : null}
      </div>
    </section>
  );
}
