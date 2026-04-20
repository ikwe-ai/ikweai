export default function DeliverablesGrid({ className = "" }: { className?: string }) {
  const items = [
    "Safety Gate result",
    "Risk scores by domain",
    "Trajectory flags",
    "Mitigation guidance",
    "Audit trail summary",
  ] as const;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3 ${className}`.trim()}>
      {items.map((item) => (
        <article key={item} className="card-surface p-4">
          <p className="text-sm text-foreground-muted">{item}</p>
        </article>
      ))}
    </div>
  );
}
