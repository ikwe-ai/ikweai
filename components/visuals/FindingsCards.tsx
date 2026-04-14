export default function FindingsCards({ className = "" }: { className?: string }) {
  const findings = [
    {
      title: "Empathy is not safety",
      body: "Warm language can still increase emotional risk if trajectory controls fail.",
    },
    {
      title: "Drift under pressure",
      body: "Behavior changes as context intensity rises, even when surface tone remains stable.",
    },
    {
      title: "Early signals are measurable",
      body: "Trajectory instability appears before incidents and can be flagged for intervention.",
    },
  ] as const;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`.trim()}>
      {findings.map((finding) => (
        <article key={finding.title} className="card-surface p-5">
          <h3 className="font-display text-xl text-foreground mb-2">{finding.title}</h3>
          <p className="text-sm text-foreground-muted">{finding.body}</p>
        </article>
      ))}
    </div>
  );
}
