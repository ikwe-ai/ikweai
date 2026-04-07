import { PUBLIC_DIMENSIONS } from "@/content/benchmark-structure";

const DIMENSION_COLORS = [
  "hsl(var(--lilac))",
  "hsl(var(--coral))",
  "hsl(var(--gold))",
  "hsl(var(--safe))",
  "hsl(var(--lilac))",
  "hsl(var(--coral))",
  "hsl(var(--gold))",
  "hsl(var(--safe))",
] as const;

export default function DimensionsGrid({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {PUBLIC_DIMENSIONS.map((dimension, idx) => (
          <article
            key={dimension.name}
            className="relative rounded-lg border border-border bg-background-card p-5 transition-all hover:border-foreground-subtle/20 hover:-translate-y-0.5"
            style={{ borderTopWidth: "2px", borderTopColor: DIMENSION_COLORS[idx] }}
          >
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold mb-3"
              style={{ backgroundColor: `${DIMENSION_COLORS[idx]}20`, color: DIMENSION_COLORS[idx] }}
              aria-hidden="true"
            >
              {String(idx + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-base text-foreground mb-2 leading-tight">{dimension.name}</h3>
            <p className="text-sm text-foreground-muted leading-relaxed">{dimension.definition}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
