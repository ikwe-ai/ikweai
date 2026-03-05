export default function AiStack({ className = "" }: { className?: string }) {
  const layers = [
    "Applications",
    "Model Layer",
    "Behavioral Validation",
    "Trust and Governance",
  ] as const;

  return (
    <article className={`card-surface p-5 ${className}`.trim()}>
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-3">AI Stack</p>
      <div className="space-y-2">
        {layers.map((layer, idx) => (
          <div key={layer} className="rounded border border-border-2 bg-background-surface px-3 py-2 text-sm text-foreground-muted">
            <span className="font-mono text-[10px] text-foreground-subtle mr-2">0{idx + 1}</span>
            {layer}
          </div>
        ))}
      </div>
    </article>
  );
}
