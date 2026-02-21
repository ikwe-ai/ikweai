import {
  BENCHMARK_CURRENT,
  BENCHMARK_LOG_REQUEST,
  BENCHMARK_PUBLIC_LOG,
} from "@/lib/benchmark-data";

type BenchmarkStatusNoteProps = {
  className?: string;
};

export default function BenchmarkStatusNote({ className = "" }: BenchmarkStatusNoteProps) {
  return (
    <aside className={`card-surface p-4 ${className}`.trim()}>
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-subtle mb-2">
        Benchmark Update Status
      </p>
      <p className="text-xs text-foreground-muted leading-relaxed mb-1">
        Last updated: <span className="text-foreground">{BENCHMARK_CURRENT.lastUpdated}</span>
      </p>
      <p className="text-xs text-foreground-muted leading-relaxed mb-2">
        Update cadence: refreshed as new datasets and model outputs are evaluated.
      </p>
      <p className="text-xs text-foreground-subtle leading-relaxed mb-2">{BENCHMARK_PUBLIC_LOG[0].summary}</p>
      <p className="text-xs text-foreground-subtle leading-relaxed">
        Need the full version/change log?{" "}
        <a href={BENCHMARK_LOG_REQUEST.href} className="link-lilac underline">
          {BENCHMARK_LOG_REQUEST.label}
        </a>
        .
      </p>
    </aside>
  );
}
