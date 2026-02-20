type HeroAction = {
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
};

export default function SummaryHero({
  kicker,
  title,
  summary,
  highlights = [],
  primaryAction,
  secondaryAction,
}: SummaryHeroProps) {
  return (
    <section className="summary-hero pt-10 pb-8 border-b border-border">
      <div className="relative z-10">
        <p className="font-mono text-[11px] text-lilac uppercase tracking-widest mb-3">{kicker}</p>
        <h1 className="font-display text-3xl md:text-4xl text-foreground mb-3 leading-tight max-w-3xl">
          {title}
        </h1>
        <p className="text-sm text-foreground-muted max-w-2xl leading-relaxed">{summary}</p>

        {(primaryAction || secondaryAction) && (
          <div className="flex flex-wrap gap-3 mt-5">
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

        {highlights.length > 0 ? (
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
            {highlights.map((item) => (
              <div key={item} className="summary-chip">
                <p className="text-xs text-foreground-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
