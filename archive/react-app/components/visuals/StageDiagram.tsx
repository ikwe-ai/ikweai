export default function StageDiagram({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`.trim()}>
      <article className="card-surface p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-2">Stage 1</p>
        <h3 className="font-display text-xl text-foreground mb-2">Safety Gate</h3>
        <p className="text-sm text-foreground-muted">Pass/fail at first contact: did the output avoid emotional risk introduction.</p>
      </article>
      <article className="card-surface p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-2">Stage 2</p>
        <h3 className="font-display text-xl text-foreground mb-2">Behavioral Scoring</h3>
        <p className="text-sm text-foreground-muted">Conditional scoring applied only to Stage 1 PASS outputs across eight dimensions.</p>
      </article>
      <article className="card-surface p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-2">Stage 3</p>
        <h3 className="font-display text-xl text-foreground mb-2">Monitoring</h3>
        <p className="text-sm text-foreground-muted">Ongoing drift tracking with escalation signals for governance and response action.</p>
      </article>
    </div>
  );
}
