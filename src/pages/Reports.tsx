import { useEffect, useState } from "react";
import { FileText, BarChart3, FolderKanban, Activity } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import ActionDock from "@/components/ActionDock";
import AssetPreviewModal from "@/components/AssetPreviewModal";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";

const SAMPLE_REPORT_PAGE_PATH = "/sample-report";
const SAMPLE_REPORT_PREVIEW_PATH = "/reports/ikwe-sample-report-public.html";

export default function Reports() {
  const [activeSample, setActiveSample] = useState<{ title: string; src: string } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const openTargetPreview = () => {
      const targetId = window.location.hash.replace("#", "");
      if (!targetId) return;
      const targetNode = document.getElementById(targetId);
      if (!targetNode) return;
      if (targetNode.tagName.toLowerCase() === "details") {
        (targetNode as HTMLDetailsElement).open = true;
      }
    };

    openTargetPreview();
    window.addEventListener("hashchange", openTargetPreview);
    return () => window.removeEventListener("hashchange", openTargetPreview);
  }, []);

  const outputPreviews = [
    {
      id: "preview-board-brief",
      title: "Board Brief",
      summary: "Two-page board-ready risk summary.",
      detail:
        "Designed for governance review with classification band, key findings, and immediate decision notes in plain language.",
      sampleHref: "/reports/sample-board-brief.html",
      icon: FileText,
    },
    {
      id: "preview-risk-scorecard",
      title: "Risk Scorecard",
      summary: "Dimension-level outcomes and severity bands.",
      detail:
        "Shows where the system performed, where it failed, and the severity mapping for each major failure pattern.",
      sampleHref: "/reports/sample-risk-scorecard.html",
      icon: BarChart3,
    },
    {
      id: "preview-evidence-pack",
      title: "Evidence Pack",
      summary: "Versioned documentation for traceable review.",
      detail:
        "Includes evaluation runs, scenario battery documentation, and scoring outputs for authorized governance and regulatory review.",
      sampleHref: "/reports/sample-evidence-pack.html",
      icon: FolderKanban,
    },
    {
      id: "preview-drift-alert",
      title: "Drift Alert",
      summary: "Monitoring alert for changed risk patterns.",
      detail:
        "Used in active monitoring engagements to highlight drift between evaluation cycles and recommended response actions.",
      sampleHref: "/reports/sample-drift-alert.html",
      icon: Activity,
    },
  ] as const;

  const openSample = (title: string, src: string) => {
    setActiveSample({ title, src });
  };

  const closeSample = () => {
    setActiveSample(null);
  };

  return (
    <PageShell>
      <PageMeta
        title="Deliverables & Transparency | Ikwe.ai"
        description="Board-ready deliverables, transparency boundaries, and institutional access standards."
        path="/deliverables"
      />

      <section className="site-section py-14 border-b border-border reports-hero">
        <div className="site-hero-layout">
          <div>
            <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-4">
              EQ Safety Benchmark {BENCHMARK_CURRENT.version} · Updated {BENCHMARK_CURRENT.lastUpdated}
            </p>
            <h1 className="font-display fluid-title text-foreground mb-4">What you receive from an Ikwe engagement</h1>
            <p className="text-foreground-muted lede mb-8">
              Every engagement produces decision-ready evidence your executives can act on.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/get-started"
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
              <button
                type="button"
                onClick={() => openSample("Ikwe Sample Report (Public, Redacted)", SAMPLE_REPORT_PREVIEW_PATH)}
                className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors btn-quiet"
              >
                Open Public Sample Report
              </button>
            </div>
            <p className="text-xs text-foreground-subtle mt-4">
              Built for board, legal, compliance, and technical stakeholders.
            </p>
            <ActionDock
              title="Next Step"
              subtitle="Review sample outputs now, then request a scoped evaluation plan."
              items={[
                { href: "/get-started", label: "Request Evaluation", tone: "primary" },
                {
                  href: SAMPLE_REPORT_PAGE_PATH,
                  label: "Open Sample Report",
                  tone: "outline",
                  onClick: () => openSample("Ikwe Sample Report (Public, Redacted)", SAMPLE_REPORT_PREVIEW_PATH),
                },
                { href: "/trust", label: "Trust Standards", tone: "quiet" },
              ]}
            />
          </div>
          <aside className="site-hero-rail card-surface p-5 reports-rail">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-subtle mb-3">Output Set</p>
            <div className="grid gap-3">
              {outputPreviews.map((item) => (
                <article key={item.id} className="output-set-card">
                  <div className="output-set-head">
                    <span className="output-set-icon">
                      <item.icon size={13} aria-hidden="true" />
                    </span>
                    <p className="output-set-card-title">{item.title}</p>
                  </div>
                  <p className="output-set-card-summary">{item.summary}</p>
                  <div className="output-set-actions">
                    <button
                      type="button"
                      onClick={() => openSample(`${item.title} Sample`, item.sampleHref)}
                      className="output-set-action"
                    >
                      Open sample →
                    </button>
                    <a
                      href={`#${item.id}`}
                      className="output-set-action output-set-action-muted"
                    >
                      On-page summary
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="output-previews" className="site-section py-14 border-b border-border">
        <p className="section-kicker mb-8">Deliverables Previews</p>
        <details className="progressive-details mb-5 max-w-4xl">
          <summary aria-label="Toggle sample report note" className="flex items-center gap-2 cursor-pointer list-none select-none py-2 [&::-webkit-details-marker]:hidden"><span className="text-foreground-subtle text-xs group-open:rotate-180 transition-transform duration-200">▶</span><span className="text-sm text-foreground">Sample access notes</span></summary>
          <div className="progressive-details-body">
            <p className="text-xs text-foreground-subtle">
              Need a format example before engagement? Open the public sample report in-site modal (public, redacted, no
              client data):{" "}
              <a
                href={SAMPLE_REPORT_PAGE_PATH}
                onClick={(event) => {
                  event.preventDefault();
                  openSample("Ikwe Sample Report (Public, Redacted)", SAMPLE_REPORT_PREVIEW_PATH);
                }}
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
              <details key={item.id} id={item.id} className="progressive-details group">
              <summary
                aria-label={`Toggle ${item.title} details`}
                data-label={`${item.title} · ${item.summary}`}
                data-open-label={`Hide ${item.title} details`}
              />
              <div className="progressive-details-body">
                  <p className="text-sm text-foreground-muted leading-relaxed">{item.detail}</p>
                  <div className="flex flex-wrap gap-2">
                    <a href="/get-started" className="summary-jump">
                      Request this output
                    </a>
                    <button
                      type="button"
                      onClick={() => openSample(`${item.title} Sample`, item.sampleHref)}
                      className="summary-jump"
                    >
                      View sample format
                    </button>
                  </div>
              </div>
            </details>
          ))}
          </div>
        </article>
      </section>

      <section id="transparency-boundary" className="site-section py-14">
        <p className="section-kicker mb-8">What&apos;s public, what&apos;s not</p>
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
            href="/get-started"
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
          <a href="/get-started" className="summary-jump">Request intake</a>
        </div>
      </section>

      {activeSample ? (
        <AssetPreviewModal
          open={Boolean(activeSample)}
          onOpenChange={(nextOpen) => !nextOpen && closeSample()}
          title={activeSample.title}
          src={activeSample.src}
        />
      ) : null}
    </PageShell>
  );
}
