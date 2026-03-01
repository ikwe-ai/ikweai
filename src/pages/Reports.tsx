import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import ActionDock from "@/components/ActionDock";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";

const SAMPLE_REPORT_PATH = "/sample-report";

export default function Reports() {
  const outputPreviews = [
    {
      title: "Board Brief",
      summary: "Two-page board-ready risk summary.",
      detail:
        "Designed for governance review with classification band, key findings, and immediate decision notes in plain language.",
    },
    {
      title: "Risk Scorecard",
      summary: "Dimension-level outcomes and severity bands.",
      detail:
        "Shows where the system performed, where it failed, and the severity mapping for each major failure pattern.",
    },
    {
      title: "Evidence Pack",
      summary: "Versioned documentation for traceable review.",
      detail:
        "Includes evaluation runs, scenario battery documentation, and scoring outputs for authorized governance and regulatory review.",
    },
    {
      title: "Drift Alert",
      summary: "Monitoring alert for changed risk patterns.",
      detail:
        "Used in active monitoring engagements to highlight drift between evaluation cycles and recommended response actions.",
    },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Deliverables & Transparency | Ikwe.ai"
        description="Board-ready deliverables, transparency boundaries, and institutional access standards."
        path="/deliverables"
      />

      <section className="site-section py-14 border-b border-border">
        <div className="site-hero-layout">
          <div>
            <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-4">
              EQ Safety Benchmark {BENCHMARK_CURRENT.version} · Updated {BENCHMARK_CURRENT.lastUpdated}
            </p>
            <h1 className="font-display fluid-title text-foreground mb-4">What you receive from an Ikwe engagement</h1>
            <p className="text-foreground-muted lede mb-8">
              Every engagement produces decision-ready evidence your executives can act on.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/intake#application-form"
                className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
              >
                Request Evaluation
              </a>
              <a
                href="#output-previews"
                className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
              >
                View Output Previews ↓
              </a>
              <a
                href={SAMPLE_REPORT_PATH}
                className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors btn-quiet"
              >
                Open Public Sample Report
              </a>
            </div>
            <p className="text-xs text-foreground-subtle mt-4">
              Built for board, legal, compliance, and technical stakeholders.
            </p>
          </div>
          <aside className="site-hero-rail card-surface p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-subtle mb-3">Output Set</p>
            <div className="space-y-2">
              {outputPreviews.map((item) => (
                <p key={item.title} className="text-xs text-foreground-muted border border-border rounded-md px-3 py-2 bg-background-surface">
                  <span className="text-foreground">{item.title}</span> · {item.summary}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <ActionDock
        title="Next Step"
        subtitle="Review sample outputs now, then request a scoped evaluation plan."
        items={[
          { href: "/intake#application-form", label: "Request Evaluation", tone: "primary" },
          { href: SAMPLE_REPORT_PATH, label: "Open Sample Report", tone: "outline" },
          { href: "/trust", label: "Trust Standards", tone: "quiet" },
        ]}
      />

      <section id="output-previews" className="site-section py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Deliverables Previews</p>
        <details className="progressive-details mb-5 max-w-4xl">
          <summary
            aria-label="Toggle sample report note"
            data-label="Sample access notes"
            data-open-label="Hide sample access notes"
          />
          <div className="progressive-details-body">
            <p className="text-xs text-foreground-subtle">
              Need a format example before engagement? Open the proprietary-format sample report in-site modal (public, redacted, no
              client data):{" "}
              <a
                href={SAMPLE_REPORT_PATH}
                className="link-lilac"
              >
                View sample report
              </a>
              .
            </p>
          </div>
        </details>
        <article className="card-surface p-5 max-w-5xl">
          <div className="space-y-2">
            {outputPreviews.map((item) => (
              <details key={item.title} className="progressive-details">
              <summary
                aria-label={`Toggle ${item.title} details`}
                data-label={`${item.title} · ${item.summary}`}
                data-open-label={`Hide ${item.title} details`}
              />
              <div className="progressive-details-body">
                  <p className="text-sm text-foreground-muted leading-relaxed">{item.detail}</p>
              </div>
            </details>
          ))}
          </div>
        </article>
      </section>

      <section id="transparency-boundary" className="site-section py-14">
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
          Full report materials are provided through active audit or scoped institutional review. To request a specific
          document path, email <a href="mailto:research@ikwe.ai" className="link-lilac">research@ikwe.ai</a>.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="/intake#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
          >
            Request Evaluation
          </a>
          <a
            href="/trust"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
          >
            View Trust Standards
          </a>
          <a
            href="/benchmark"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors btn-quiet"
          >
            Open Benchmark Framework
          </a>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <a href="/research" className="summary-jump">Research evidence</a>
          <a href="/audit" className="summary-jump">Audit &amp; Validation</a>
          <a href="/intake#application-form" className="summary-jump">Request intake</a>
        </div>
      </section>
    </PageShell>
  );
}
