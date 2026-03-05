export default function StabilityBars({ className = "" }: { className?: string }) {
  const steps = [
    { label: "Stable", width: 96, tone: "bg-safe" },
    { label: "Risk rising", width: 72, tone: "bg-signal" },
    { label: "High risk", width: 48, tone: "bg-amber" },
    { label: "System failure", width: 24, tone: "bg-danger" },
  ] as const;

  return (
    <article className={`card-surface p-5 ${className}`.trim()}>
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-3">Stability Profile</p>
      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.label}>
            <div className="flex items-center justify-between text-xs text-foreground-muted mb-1">
              <span>{step.label}</span>
              <span>{step.width}%</span>
            </div>
            <div className="h-2 rounded-full bg-background-surface">
              <div className={`h-2 rounded-full ${step.tone}`} style={{ width: `${step.width}%` }} />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
