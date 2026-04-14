type VersionCardProps = {
  version: string;
  releaseDate: string;
  scope: string;
  appliesTo: string;
};

export default function VersionCard({ version, releaseDate, scope, appliesTo }: VersionCardProps) {
  return (
    <article className="version-card">
      <p className="version-kicker mb-2">Framework Version</p>
      <p className="font-display text-2xl text-foreground mb-3">{version}</p>
      <dl className="grid gap-2 text-sm text-foreground-muted">
        <div className="grid grid-cols-[120px_1fr] gap-3">
          <dt className="font-mono text-[11px] uppercase tracking-[0.09em] text-foreground-subtle">Release</dt>
          <dd>{releaseDate}</dd>
        </div>
        <div className="grid grid-cols-[120px_1fr] gap-3">
          <dt className="font-mono text-[11px] uppercase tracking-[0.09em] text-foreground-subtle">Scope</dt>
          <dd>{scope}</dd>
        </div>
        <div className="grid grid-cols-[120px_1fr] gap-3">
          <dt className="font-mono text-[11px] uppercase tracking-[0.09em] text-foreground-subtle">Applies to</dt>
          <dd>{appliesTo}</dd>
        </div>
      </dl>
    </article>
  );
}
