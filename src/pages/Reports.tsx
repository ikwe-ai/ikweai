import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";

export default function Reports() {
  const outputPreviews = [
    {
      label: "Preview",
      title: "Board Brief",
      desc: "A two-page executive summary designed for board and governance review. Covers risk classification, key findings, and recommended next steps in plain institutional language. No technical jargon.",
    },
    {
      label: "Preview",
      title: "Risk Scorecard",
      desc: "Dimension-level outcomes presented as a structured scorecard. Shows where the system performed, where it failed, and the severity classification for each failure mode.",
    },
    {
      label: "Preview",
      title: "Evidence Pack",
      desc: "Versioned documentation of evaluation runs, scenario battery, and scoring outputs. Structured for authorized governance review and regulatory reference.",
    },
    {
      label: "Preview",
      title: "Drift Alert",
      desc: "Operational alert format for monitoring engagements. Surfaces changed risk patterns between evaluation cycles and includes recommended response steps.",
    },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Deliverables & Transparency | Ikwe.ai"
        description="Board-ready deliverables, transparency boundaries, and institutional access standards."
        path="/deliverables"
      />

      <section className="py-14 border-b border-border">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">What you receive from an Ikwe engagement</h1>
        <p className="text-lg text-foreground-muted leading-relaxed max-w-3xl mb-8">
          Every audit produces board-ready documentation. Here is what that looks like.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/request-audit#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
          >
            Request an Audit
          </a>
          <a
            href="#output-previews"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
          >
            View Output Previews ↓
          </a>
        </div>
      </section>

      <section id="output-previews" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Deliverables Previews</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
          {outputPreviews.map((item) => (
            <article key={item.title} className="card-surface p-5 flex flex-col gap-3">
              <span className="inline-flex w-fit rounded border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-lilac">
                {item.label}
              </span>
              <h2 className="font-display text-xl text-foreground">{item.title}</h2>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="transparency-boundary" className="py-14">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">What&apos;s public, what&apos;s not</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl">
          <article className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-3">Public</p>
            <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
              <li>• Benchmark findings and failure rates at aggregate level.</li>
              <li>• High-level methodology and evaluation standards.</li>
              <li>• Redacted examples of report formats and output structures.</li>
            </ul>
          </article>
          <article className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-3">Engagement only</p>
            <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
              <li>• Full evaluation documentation.</li>
              <li>• Dimension-level scores and scenario-level evidence.</li>
              <li>• Organization-specific reporting package.</li>
              <li>• Authorized governance review materials.</li>
            </ul>
          </article>
        </div>

        <p className="text-sm text-foreground-muted leading-relaxed max-w-4xl mt-6">
          Full report materials are provided to organizations in active audit or scoped review. To request a specific
          document, email <a href="mailto:research@ikwe.ai" className="link-lilac">research@ikwe.ai</a>.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="/request-audit#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
          >
            Request an Audit
          </a>
          <a
            href="/trust"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
          >
            View Trust Standards
          </a>
        </div>
      </section>
    </PageShell>
  );
}
