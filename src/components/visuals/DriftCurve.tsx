export default function DriftCurve({ className = "" }: { className?: string }) {
  return (
    <article className={`card-surface p-5 ${className}`.trim()}>
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-3">Drift Curve</p>
      <h3 className="font-display text-2xl text-foreground mb-2">AI does not fail once. It drifts over time.</h3>
      <p className="text-sm text-foreground-muted mb-4">Conceptual trajectory from stable interaction to system failure if unmonitored.</p>
      <svg viewBox="0 0 760 220" role="img" aria-label="Behavioral drift curve" className="w-full h-auto">
        <defs>
          <linearGradient id="driftStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--safe))" />
            <stop offset="45%" stopColor="hsl(var(--signal))" />
            <stop offset="70%" stopColor="hsl(var(--amber))" />
            <stop offset="100%" stopColor="hsl(var(--danger))" />
          </linearGradient>
        </defs>
        <line x1="40" y1="180" x2="720" y2="180" stroke="hsl(var(--border-2))" strokeWidth="1" />
        <line x1="40" y1="30" x2="40" y2="180" stroke="hsl(var(--border-2))" strokeWidth="1" />
        <path d="M40 150 C180 145, 250 132, 330 112 C420 88, 510 70, 610 52 C660 44, 700 34, 720 24" fill="none" stroke="url(#driftStroke)" strokeWidth="6" strokeLinecap="round" />
        {[
          { x: 70, y: 149, label: "Stable" },
          { x: 300, y: 118, label: "Risk rising" },
          { x: 520, y: 72, label: "High risk" },
          { x: 710, y: 28, label: "System failure" },
        ].map((point) => (
          <g key={point.label}>
            <circle cx={point.x} cy={point.y} r="6" fill="hsl(var(--background-card))" stroke="hsl(var(--foreground))" strokeWidth="2" />
            <text x={point.x - 24} y={point.y - 12} fill="hsl(var(--foreground-muted))" fontSize="12">{point.label}</text>
          </g>
        ))}
      </svg>
    </article>
  );
}
