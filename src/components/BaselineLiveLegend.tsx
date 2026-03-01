import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";

type BaselineLiveLegendProps = {
  className?: string;
  compact?: boolean;
};

export default function BaselineLiveLegend({ className = "", compact = false }: BaselineLiveLegendProps) {
  return (
    <aside className={`rounded border border-border-2 bg-background-surface ${compact ? "p-2.5" : "p-3"} ${className}`.trim()}>
      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-subtle mb-1">Baseline vs Live</p>
      <p className={`${compact ? "text-[11px]" : "text-xs"} text-foreground-muted leading-relaxed`}>
        Published rates ({BENCHMARK_CURRENT.failedGatePct} SSF-Any, {BENCHMARK_CURRENT.noRepairPct} aggregate fail) are locked
        to Study I baseline sample N = {BENCHMARK_CURRENT.baselineDenominator}. Detailed run-volume logs are shared on request.
      </p>
    </aside>
  );
}
