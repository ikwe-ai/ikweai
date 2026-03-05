import { BEHAVIORAL_DOMAINS } from "@/content/benchmark-structure";

export default function DomainsTagWall({ className = "" }: { className?: string }) {
  return (
    <article className={`card-surface p-5 ${className}`.trim()}>
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-3">13 Behavioral Domains</p>
      <div className="flex flex-wrap gap-2">
        {BEHAVIORAL_DOMAINS.map((domain) => (
          <span key={domain} className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground-muted bg-background-surface">
            {domain}
          </span>
        ))}
      </div>
    </article>
  );
}
