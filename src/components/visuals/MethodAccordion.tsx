export default function MethodAccordion({ className = "" }: { className?: string }) {
  const items = [
    {
      title: "Method scope",
      body: "Stage 1 applies a binary first-contact screen. Stage 2 applies conditional scoring to Stage 1 PASS outputs.",
    },
    {
      title: "What is public",
      body: "Aggregate benchmark rates, scenario and domain counts, and public dimension definitions.",
    },
    {
      title: "What is engagement-only",
      body: "Detailed scoring mechanics, threshold maps, scenario definitions, and organization-specific evidence.",
    },
  ] as const;

  return (
    <div className={`space-y-3 ${className}`.trim()}>
      {items.map((item) => (
        <details key={item.title} className="progressive-details card-surface p-4">
          <summary data-label={item.title} data-open-label={`Hide ${item.title}`} aria-label={`Toggle ${item.title}`} />
          <div className="progressive-details-body">
            <p className="text-sm text-foreground-muted leading-relaxed">{item.body}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
