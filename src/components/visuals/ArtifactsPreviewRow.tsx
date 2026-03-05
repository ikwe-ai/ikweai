import { useState } from "react";
import AssetPreviewModal from "@/components/AssetPreviewModal";

export default function ArtifactsPreviewRow({ className = "" }: { className?: string }) {
  const [activePreview, setActivePreview] = useState<{ title: string; href: string } | null>(null);

  const items = [
    { title: "Sample Report", href: "/sample-report", body: "Public redacted report structure." },
    { title: "Board Brief", href: "/reports/sample-board-brief.html", body: "Executive decision format." },
    { title: "Evidence Pack", href: "/reports/sample-evidence-pack.html", body: "Scenario traceability format." },
  ] as const;

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`.trim()}>
        {items.map((item) => (
          <article key={item.title} className="card-surface p-5">
            <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-foreground-muted mb-4">{item.body}</p>
            <button
              type="button"
              onClick={() => setActivePreview({ title: `${item.title} Preview`, href: item.href })}
              className="summary-jump"
            >
              Open preview
            </button>
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
