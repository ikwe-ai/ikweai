type DefinitionCalloutProps = {
  term: string;
  definition: string;
};

export default function DefinitionCallout({ term, definition }: DefinitionCalloutProps) {
  return (
    <aside className="definition-callout">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-foreground-subtle mb-2">Definition</p>
      <p className="font-display text-xl text-foreground mb-2">{term}</p>
      <p className="text-sm text-foreground-muted leading-relaxed text-pretty">{definition}</p>
    </aside>
  );
}
