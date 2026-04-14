import PageMeta from "@/components/PageMeta";
import PageShell from "@/components/PageShell";
import SummaryHero from "@/components/SummaryHero";

const SAMPLE_REPORT_HTML_PATH = "/reports/ikwe-sample-report-public.html";
const SAMPLE_REPORT_PDF_PATH = "/reports/ikwe-sample-report-public.pdf";

export default function SampleReport() {
  return (
    <PageShell>
      <PageMeta
        title="Sample Report | Ikwe.ai"
        description="A redacted sample of an Ikwe EQ Safety Evaluation report — showing the tier classification, dimensional scoring, and recommended next steps format."
        path="/sample-report"
      />

      <SummaryHero
        kicker="Deliverable Preview"
        title="Public Redacted Sample Report"
        summary="Review the report structure used in client-facing deliverables. The web preview shows the format. The styled PDF is the sendable sample asset."
        highlights={[
          "Tier classification and risk band",
          "Dimensional scoring breakdown",
          "Board-ready executive summary format",
        ]}
        primaryAction={{ href: SAMPLE_REPORT_PDF_PATH, label: "Download Styled PDF" }}
        secondaryAction={{ href: SAMPLE_REPORT_HTML_PATH, label: "Open Standalone Preview" }}
        jumpLinks={[
          { href: "/audit#deliverables-previews", label: "← Back to sample outputs" },
          { href: "/get-started", label: "Request your evaluation" },
        ]}
        visual={{
          kicker: "What you'll see",
          title: "Report format",
          points: [
            "Tier I / II / III risk classification",
            "8-dimension behavioral score breakdown",
            "Safety Gate result and pass rate",
            "Recommended next steps",
          ],
          tone: "teal",
        }}
      />

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
