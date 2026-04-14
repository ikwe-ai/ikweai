type ChangeEntry = {
  version: string;
  date: string;
  notes: string;
};

type ChangelogProps = {
  entries: ChangeEntry[];
};

export default function Changelog({ entries }: ChangelogProps) {
  return (
    <article className="card-surface p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-foreground-subtle mb-3">Version Changelog</p>
      <div className="space-y-3">
        {entries.map((entry) => (
          <div key={`${entry.version}-${entry.date}`} className="border-b border-border last:border-b-0 pb-3 last:pb-0">
            <p className="font-display text-lg text-foreground">
              {entry.version} <span className="text-sm text-foreground-subtle">· {entry.date}</span>
            </p>
            <p className="text-sm text-foreground-muted mt-1 text-pretty">{entry.notes}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
