import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

type AssetPreviewModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  src: string;
  description?: string;
};

export default function AssetPreviewModal({
  open,
  onOpenChange,
  title,
  src,
  description = "Illustrative format only. No client-identifiable content.",
}: AssetPreviewModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[96vw] max-w-6xl h-[88vh] p-0 bg-background-card border border-border overflow-hidden">
        <div className="px-4 py-3 border-b border-border bg-background-surface flex items-center justify-between gap-3">
          <div className="min-w-0">
            <DialogTitle className="font-display text-xl text-foreground truncate">{title}</DialogTitle>
            <DialogDescription className="text-xs text-foreground-subtle">{description}</DialogDescription>
          </div>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-lilac hover:text-lilac-bright transition-colors whitespace-nowrap"
          >
            Open raw page
          </a>
        </div>
        <iframe title={title} src={src} className="w-full h-[calc(88vh-58px)] border-0 bg-white" />
      </DialogContent>
    </Dialog>
  );
}
