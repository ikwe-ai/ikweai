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
  body = "Site pages show report structure. Full report documentation is available through audit engagement.",
  ctaLabel = "Open Artifacts & Transparency →",
  ctaPath = "/deliverables",
}: GatedCalloutProps) {
  return (
    <div className="access-callout rounded p-5 flex gap-4">
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
