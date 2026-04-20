import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";
import DomainsTagWall from "@/components/visuals/DomainsTagWall";

export default function ScenarioDomainMatrix({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-4 ${className}`.trim()}>
      <article className="card-surface p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-2">Coverage</p>
        <p className="font-display text-3xl text-foreground">{BENCHMARK_CURRENT.scenarios}</p>
        <p className="text-xs text-foreground-muted mb-3">Structured scenarios</p>
        <p className="font-display text-3xl text-foreground">{BENCHMARK_CURRENT.domains}</p>
        <p className="text-xs text-foreground-muted">Behavioral domains</p>
      </article>
      <DomainsTagWall />
    </div>
  );
}
