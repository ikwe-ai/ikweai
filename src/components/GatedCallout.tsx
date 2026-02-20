import { Link } from "react-router-dom";
import { Lock } from "lucide-react";

interface GatedCalloutProps {
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaPath?: string;
}

export default function GatedCallout({
  title = "Report Distribution",
  body = "Sample packs and PDF reports are shared as versioned releases to keep public references consistent.",
  ctaLabel = "Request Current Report Pack →",
  ctaPath = "/reports",
}: GatedCalloutProps) {
  return (
    <div className="gated-callout rounded p-5 flex gap-4">
      <Lock size={16} className="text-lilac mt-0.5 shrink-0" />
      <div>
        <p className="text-sm font-medium text-foreground mb-1">{title}</p>
        <p className="text-sm text-foreground-muted leading-relaxed">{body}</p>
        <Link
          to={ctaPath}
          className="inline-block mt-3 text-xs font-mono text-lilac hover:text-lilac-soft transition-colors"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
