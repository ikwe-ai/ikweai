import PageMeta from "@/components/PageMeta";
import PageShell from "@/components/PageShell";

const SAMPLE_REPORT_HTML_PATH = "/reports/ikwe-sample-report-public.html";
const SAMPLE_REPORT_PDF_PATH = "/reports/ikwe-sample-report-public.pdf";

export default function SampleReport() {
  return (
    <PageShell>
      <PageMeta
        title="Sample Report | Ikwe.ai"
        description="Public redacted sample report preview inside Ikwe.ai."
        path="/sample-report"
      />

      <section className="site-section py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-3">Sample Report Preview</p>
        <h1 className="font-display fluid-heading text-foreground mb-3">Public Redacted Sample Report</h1>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5 max-w-3xl">
          Review the report structure used in client-facing deliverables. The web preview shows the format. The styled
          PDF is the sendable sample asset.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={SAMPLE_REPORT_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
          >
            Download Styled PDF
          </a>
          <a
            href={SAMPLE_REPORT_HTML_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
          >
            Open Standalone Preview
          </a>
          <a href="/audit#deliverables-previews" className="summary-jump">
            Back to sample outputs
          </a>
        </div>
      </section>

      <section className="site-section py-10">
        <article className="card-surface p-3 md:p-4">
          <iframe
            title="Ikwe sample report"
            src={SAMPLE_REPORT_HTML_PATH}
            className="w-full h-[78vh] min-h-[720px] border-0 rounded bg-background"
          />
        </article>
      </section>
    </PageShell>
  );
}
