import { Link } from "react-router-dom";

type ArchiveBannerProps = {
  /** "reference" = old company/service pages · "library" = research content */
  type?: "reference" | "library";
};

export default function ArchiveBanner({ type = "reference" }: ArchiveBannerProps) {
  const label =
    type === "library"
      ? "Research Library · Part of Ikwe.ai's published research archive."
      : "Archived · This page is maintained for reference. The active site is at ikwe.ai.";

  return (
    <div className="border-b border-border bg-background-surface">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 flex-wrap">
        <p className="font-mono text-[10px] uppercase tracking-widest text-foreground-subtle">
          {label}
        </p>
        <Link
          to="/"
          className="font-mono text-[10px] uppercase tracking-widest text-lilac hover:text-lilac-bright transition-colors whitespace-nowrap shrink-0"
        >
          ← ikwe.ai
        </Link>
      </div>
    </div>
  );
}
