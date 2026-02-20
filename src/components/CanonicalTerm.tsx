import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CANONICAL_TERMS, type CanonicalTermKey } from "@/lib/canonical-terms";

type CanonicalTermProps = {
  term: CanonicalTermKey;
  className?: string;
  showIcon?: boolean;
};

export default function CanonicalTerm({
  term,
  className,
  showIcon = true,
}: CanonicalTermProps) {
  const entry = CANONICAL_TERMS[term];

  return (
    <Tooltip delayDuration={140}>
      <TooltipTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex items-center gap-1 rounded-sm border-b border-dotted border-lilac/60 px-0.5 text-left text-foreground transition-colors hover:text-lilac focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            className,
          )}
          aria-label={`${entry.canonicalLabel}: ${entry.hoverText}`}
        >
          <span>{entry.canonicalLabel}</span>
          {showIcon ? <Info size={12} className="shrink-0 opacity-80" /> : null}
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs text-xs leading-relaxed">
        {entry.hoverText}
      </TooltipContent>
    </Tooltip>
  );
}
