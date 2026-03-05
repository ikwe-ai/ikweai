import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";
import StabilityBars from "@/components/visuals/StabilityBars";

export default function ChartsBlock({ className = "" }: { className?: string }) {
  const gateFail = Number.parseFloat(BENCHMARK_CURRENT.noRepairPct.replace("%", ""));
  const gatePass = Math.max(0, +(100 - gateFail).toFixed(1));

  return (
    <div className={`grid grid-cols-1 xl:grid-cols-3 gap-4 ${className}`.trim()}>
      <article className="card-surface p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-3">Stage Split</p>
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between text-xs text-foreground-muted mb-1">
              <span>Stage 1 FAIL rate</span>
              <span>{BENCHMARK_CURRENT.noRepairPct}</span>
            </div>
            <div className="h-2 rounded-full bg-background-surface">
              <div className="h-2 rounded-full bg-danger" style={{ width: `${gateFail}%` }} />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-xs text-foreground-muted mb-1">
              <span>Stage 2 eligible set (Stage 1 PASS)</span>
              <span>{gatePass}%</span>
            </div>
            <div className="h-2 rounded-full bg-background-surface">
              <div className="h-2 rounded-full bg-safe" style={{ width: `${gatePass}%` }} />
            </div>
          </div>
        </div>
      </article>
      <StabilityBars />
      <article className="card-surface p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-3">Coverage Summary</p>
        <ul className="space-y-2 text-sm text-foreground-muted">
          <li>• {BENCHMARK_CURRENT.nValue}</li>
          <li>• {BENCHMARK_CURRENT.scenarios} structured scenarios</li>
          <li>• {BENCHMARK_CURRENT.domains} behavioral domains</li>
        </ul>
      </article>
    </div>
  );
}
