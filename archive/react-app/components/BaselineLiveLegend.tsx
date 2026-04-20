import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";

type BaselineLiveLegendProps = {
  className?: string;
  compact?: boolean;
};

export default function BaselineLiveLegend({ className = "", compact = false }: BaselineLiveLegendProps) {
  return (
    <aside className={`rounded border border-border-2 bg-background-surface ${compact ? "p-2.5" : "p-3"} ${className}`.trim()}>
      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-subtle mb-1">How to read these numbers</p>
      <p className={`${compact ? "text-[11px]" : "text-xs"} text-foreground-muted leading-relaxed`}>
        Published rates ({BENCHMARK_CURRENT.failedGatePct} emotional risk pattern prevalence, {BENCHMARK_CURRENT.noRepairPct} safety
        gate fail rate) reflect the current public benchmark release. Additional documentation is available on request.
      </p>
    </aside>
  );
}
