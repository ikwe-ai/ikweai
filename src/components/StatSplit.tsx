import { CANONICAL_STAT } from "@/lib/content-locks";

/**
 * StatSplit — hero-column stat card.
 * Renders the 54.7 / 45.3 / n=948 split as a prominent display card.
 * Imports copy exclusively from content-locks.ts to prevent drift.
 */
export default function StatSplit() {
  return (
    <div className="card-surface p-6 md:p-8 flex flex-col gap-6">
      {/* Eyebrow */}
      <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest">
        Study I — Headline Metrics
      </p>

      {/* Split row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Passed */}
        <div className="flex flex-col gap-1">
          <p className="font-mono text-4xl font-bold text-safe leading-none">
            {CANONICAL_STAT.passed.pct}
          </p>
          <p className="text-sm text-foreground leading-snug">
            {CANONICAL_STAT.passed.label}
          </p>
          <p className="text-xs text-foreground-subtle">
            {CANONICAL_STAT.passed.sub}
          </p>
        </div>

        {/* Introduced harm */}
        <div className="flex flex-col gap-1">
          <p className="font-mono text-4xl font-bold text-danger leading-none">
            {CANONICAL_STAT.failed.pct}
          </p>
          <p className="text-sm text-foreground leading-snug">
            {CANONICAL_STAT.failed.label}
          </p>
          <p className="text-xs text-foreground-subtle">
            {CANONICAL_STAT.failed.sub}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Sample size */}
      <div className="flex flex-col gap-1">
        <p className="font-mono text-2xl font-bold text-lilac leading-none">
          {CANONICAL_STAT.sample.value}
        </p>
        <p className="text-sm text-foreground">{CANONICAL_STAT.sample.label}</p>
        <p className="text-xs text-foreground-subtle">{CANONICAL_STAT.sample.sub}</p>
      </div>

      {/* Locked canonical reference */}
      <div className="stat-block rounded p-4">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-1">
          Canonical Reference
        </p>
        <p className="text-xs text-foreground leading-relaxed">
          "{CANONICAL_STAT.headline}"
        </p>
        <p className="text-xs text-foreground-subtle mt-1">
          {CANONICAL_STAT.citation}
        </p>
      </div>
    </div>
  );
}
