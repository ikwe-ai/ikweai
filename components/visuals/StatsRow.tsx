import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";

export default function StatsRow({ className = "" }: { className?: string }) {
  const items = [
    { value: BENCHMARK_CURRENT.nValue, label: "Outputs evaluated" },
    { value: String(BENCHMARK_CURRENT.scenarios), label: "Scenarios" },
    { value: String(BENCHMARK_CURRENT.domains), label: "Behavioral domains (vulnerability categories)" },
  ] as const;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-3 ${className}`.trim()}>
      {items.map((item) => (
        <article key={item.label} className="card-surface p-4">
          <p className="font-display text-3xl text-foreground mb-1">{item.value}</p>
          <p className="text-xs text-foreground-muted">{item.label}</p>
        </article>
      ))}
    </div>
  );
}
