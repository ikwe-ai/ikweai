export default function MethodAccordion({ className = "" }: { className?: string }) {
  const items = [
    {
      icon: "🔬",
      title: "Method scope",
      body: "Stage 1 applies a binary first-contact screen. Stage 2 applies conditional scoring to Stage 1 PASS outputs.",
    },
    {
      icon: "📊",
      title: "What is public",
      body: "Aggregate benchmark rates, scenario and domain counts, and public dimension definitions.",
    },
    {
      icon: "🔒",
      title: "What is engagement-only",
      body: "Detailed scoring mechanics, threshold maps, scenario definitions, and organization-specific evidence.",
    },
  ] as const;

  return (
    <div className={`space-y-3 ${className}`.trim()}>
      {items.map((item) => (
        <details key={item.title} className="group card-surface rounded-lg border border-border overflow-hidden">
          <summary className="flex items-center gap-3 px-5 py-4 cursor-pointer list-none select-none hover:bg-background-surface transition-colors [&::-webkit-details-marker]:hidden">
            <span className="text-lg shrink-0" aria-hidden="true">{item.icon}</span>
            <span className="font-display text-base text-foreground flex-1">{item.title}</span>
            <span
              className="text-foreground-subtle text-xs transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            >
              ▾
            </span>
          </summary>
          <div className="px-5 pb-5 pt-1">
            <p className="text-sm text-foreground-muted leading-relaxed">{item.body}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
