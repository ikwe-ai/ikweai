import { PUBLIC_DIMENSIONS } from "@/content/benchmark-structure";

export default function DimensionsGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ${className}`.trim()}>
      {PUBLIC_DIMENSIONS.map((dimension) => (
        <article key={dimension.name} className="card-surface p-4">
          <h3 className="font-display text-lg text-foreground mb-2">{dimension.name}</h3>
          <p className="text-sm text-foreground-muted leading-relaxed">{dimension.definition}</p>
        </article>
      ))}
    </div>
  );
}
