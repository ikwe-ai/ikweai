import { useState } from "react";
import AssetPreviewModal from "@/components/AssetPreviewModal";

const IFRAME_RENDER_WIDTH = 1100;
const IFRAME_RENDER_HEIGHT = 720;
const PREVIEW_SCALE = 0.295; // rendered width × scale ≈ card width (~325px)
const PREVIEW_CONTAINER_HEIGHT = Math.round(IFRAME_RENDER_HEIGHT * PREVIEW_SCALE); // ~212px

export default function ArtifactsPreviewRow({ className = "" }: { className?: string }) {
  const [activePreview, setActivePreview] = useState<{ title: string; href: string } | null>(null);

  const items = [
    {
      title: "Sample Report",
      href: "/reports/ikwe-sample-report-public.html",
      body: "Public redacted report structure.",
      tag: "Full Report",
    },
    {
      title: "Board Brief",
      href: "/reports/sample-board-brief.html",
      body: "Executive decision format.",
      tag: "Board & Legal",
    },
    {
      title: "Evidence Pack",
      href: "/reports/sample-evidence-pack.html",
      body: "Scenario traceability format.",
      tag: "Compliance & Audit",
    },
  ] as const;

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`.trim()}>
        {items.map((item) => (
          <article key={item.title} className="card-surface overflow-hidden">
            {/* Live scaled iframe preview */}
            <button
              type="button"
              aria-label={`Open ${item.title} preview`}
              onClick={() => setActivePreview({ title: `${item.title} Preview`, href: item.href })}
              className="artifact-preview-btn"
            >
              <div
                className="artifact-preview-wrap"
                style={{ height: `${PREVIEW_CONTAINER_HEIGHT}px` }}
              >
                <iframe
                  src={item.href}
                  title={`${item.title} preview`}
                  scrolling="no"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="artifact-preview-iframe"
                  style={{
                    width: `${IFRAME_RENDER_WIDTH}px`,
                    height: `${IFRAME_RENDER_HEIGHT}px`,
                    transform: `scale(${PREVIEW_SCALE})`,
                    transformOrigin: "top left",
                  }}
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
