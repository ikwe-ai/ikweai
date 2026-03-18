import { useState } from "react";
import AssetPreviewModal from "@/components/AssetPreviewModal";

export default function ArtifactsPreviewRow({ className = "" }: { className?: string }) {
  const [activePreview, setActivePreview] = useState<{ title: string; href: string } | null>(null);

  const items = [
    {
      title: "Sample Report",
      href: "/reports/ikwe-sample-report-public.html",
      thumb: "/reports/thumb-sample-report.png",
      body: "Score, risk picture, benchmark position, and what to fix before you scale.",
      tag: "Full Report",
      alt: "Ikwe EQ Safety sample report showing 73% score, Conditional Pass gate, and plain-language summary",
    },
    {
      title: "Board Brief",
      href: "/reports/sample-board-brief.html",
      thumb: "/reports/thumb-board-brief.png",
      body: "One-page decision summary for board, risk committee, and executive review.",
      tag: "Board & Legal",
      alt: "Ikwe board brief showing Tier II Conditional Launch classification, 44.9% gate failure rate, and decision options",
    },
    {
      title: "Evidence Pack",
      href: "/reports/sample-evidence-pack.html",
      thumb: "/reports/thumb-evidence-pack.png",
      body: "Traceable scenario records for legal, compliance, and safety teams.",
      tag: "Compliance & Audit",
      alt: "Ikwe evidence pack showing scenario traceability table with vulnerability domains and FAIL/PASS gate results",
    },
  ] as const;

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`.trim()}>
        {items.map((item) => (
          <article key={item.title} className="card-surface overflow-hidden">
            {/* Screenshot thumbnail */}
            <button
              type="button"
              aria-label={`Open ${item.title} preview`}
              onClick={() => setActivePreview({ title: `${item.title} Preview`, href: item.href })}
              className="artifact-preview-btn"
            >
              <div className="artifact-preview-wrap">
                <img
                  src={item.thumb}
                  alt={item.alt}
                  className="artifact-preview-img"
                  draggable={false}
                />
                <div className="artifact-preview-overlay">
                  <span className="artifact-preview-hint">Click to open</span>
                </div>
              </div>
            </button>

            {/* Card footer */}
            <div className="p-4 pt-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-lilac mb-1">{item.tag}</p>
              <h3 className="font-display text-base text-foreground mb-1">{item.title}</h3>
              <p className="text-xs text-foreground-muted mb-3">{item.body}</p>
              <button
                type="button"
                onClick={() => setActivePreview({ title: `${item.title} Preview`, href: item.href })}
                className="summary-jump"
              >
                Open preview
              </button>
            </div>
          </article>
        ))}
      </div>

      {activePreview ? (
        <AssetPreviewModal
          open={Boolean(activePreview)}
          onOpenChange={(nextOpen) => {
            if (!nextOpen) setActivePreview(null);
          }}
          title={activePreview.title}
          src={activePreview.href}
        />
      ) : null}
    </>
  );
}
