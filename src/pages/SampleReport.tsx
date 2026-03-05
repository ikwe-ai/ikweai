import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

const SAMPLE_REPORT_PATH = "/reports/ikwe-sample-report-public.html";

export default function SampleReport() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const closeModal = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/audit#deliverables-previews", { replace: true });
  };

  return (
    <PageShell>
      <PageMeta
        title="Sample Report | Ikwe.ai"
        description="Public redacted sample report preview inside Ikwe.ai."
        path="/sample-report"
      />

      <section className="site-section py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-3">
          Sample Report Preview
        </p>
        <h1 className="font-display fluid-heading text-foreground mb-3">Public Redacted Sample Report</h1>
        <p className="text-sm text-foreground-muted leading-relaxed mb-4 max-w-3xl">
          Review the output format and evidence structure used in client-facing reporting.
        </p>
        <div className="flex flex-wrap gap-2">
          <a href="/audit#deliverables-previews" className="summary-jump">
            Back to sample outputs
          </a>
        </div>
      </section>

      <Dialog
        open={open}
        onOpenChange={(nextOpen) => {
          setOpen(nextOpen);
          if (!nextOpen) closeModal();
        }}
      >
        <DialogContent className="w-[96vw] max-w-6xl h-[88vh] p-0 bg-background-card border border-border overflow-hidden">
          <div className="px-4 py-3 border-b border-border bg-background-surface">
            <div className="min-w-0">
              <DialogTitle className="font-display text-xl text-foreground truncate">
                Ikwe Sample Report (Public, Redacted)
              </DialogTitle>
              <DialogDescription className="text-xs text-foreground-subtle">
                Illustrative format only. No client-identifiable content.
              </DialogDescription>
            </div>
          </div>
          <iframe
            title="Ikwe sample report"
            src={SAMPLE_REPORT_PATH}
            className="w-full h-[calc(88vh-58px)] border-0 bg-white"
          />
        </DialogContent>
      </Dialog>
    </PageShell>
  );
}
