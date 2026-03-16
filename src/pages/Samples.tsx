import { useState } from "react";
import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";
import AssetPreviewModal from "@/components/AssetPreviewModal";

const SAMPLE_EXCERPT_PATH = "/reports/ikwe-sample-excerpt-one-page.pdf";
const SAMPLE_REPORT_PATH = "/reports/ikwe-sample-report-public.html";

const deliverableItems = [
  {
    title: "Executive Risk Summary",
    body: "Board-facing summary of baseline exposure, model behavior profile, and immediate governance implications.",
  },
  {
    title: "Severity Classification",
    body: "Structured tiering of observed behavioral risk patterns with clear threshold language.",
  },
  {
    title: "Scenario Findings Appendix",
    body: "Sampled scenario outcomes and pattern summaries in a format legal and technical teams can review together.",
  },
  {
    title: "Remediation Roadmap",
    body: "Prioritized control recommendations tied to re-test readiness and operational monitoring.",
  },
] as const;

const faqs = [
  {
    q: "What does the output look like?",
    a: "Use the one-page excerpt for executive review and the full sample report for format detail. Both are redacted and illustrative.",
  },
  {
    q: "Do you need access to code or model weights?",
    a: "No. In most deployments, sandbox or staging access plus controlled test accounts is sufficient for validation testing.",
  },
] as const;

export default function Samples() {
  const [openSampleReport, setOpenSampleReport] = useState(false);

  return (
    <PageShell>
      <PageMeta
        title="Sample Deliverables | Ikwe.ai"
        description="See what board-ready behavioral validation outputs look like before engagement."
        path="/samples"
      />

      <SummaryHero
        kicker="Sample Deliverables"
        title="Sample Deliverables"
        summary="See what a board-ready behavioral validation output looks like. Public samples are illustrative and redacted by design."
        highlights={[
          "Public excerpt + full redacted sample",
          "No client-identifiable data",
          "Direct path to scoped validation intake",
        ]}
        primaryAction={{ href: SAMPLE_EXCERPT_PATH, label: "View 1-Page Executive Excerpt (PDF)" }}
        secondaryAction={{
          href: SAMPLE_REPORT_PATH,
          label: "View Full Sample Report",
          onClick: () => setOpenSampleReport(true),
        }}
        jumpLinks={[
          { href: "#deliverables", label: "What You Receive" },
          { href: "#sample-access", label: "Sample Access" },
          { href: "#faq", label: "FAQ" },
        ]}
      />

      <section id="sample-access" className="site-section py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-7">Sample Access</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
          <article className="card-surface p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-2">Public Excerpt</p>
            <h2 className="font-display text-xl text-foreground mb-2">1-Page Executive Excerpt</h2>
            <p className="text-sm text-foreground-muted leading-relaxed mb-5">
              Short-format summary for leadership and procurement review.
            </p>
            <a href={SAMPLE_EXCERPT_PATH} className="link-lilac">Open excerpt →</a>
            <p className="text-xs text-foreground-subtle mt-3">
              Need a form package?{" "}
              <a
                href="/forms/ikwe-intake-form-fillable.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="link-lilac"
              >
                Download fillable intake PDF
              </a>
              .
            </p>
          </article>

          <article className="card-surface p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-2">Public Full Sample</p>
            <h2 className="font-display text-xl text-foreground mb-2">Redacted Full Report</h2>
            <p className="text-sm text-foreground-muted leading-relaxed mb-5">
              Complete sample format to show report structure and decision-ready outputs.
            </p>
            <button type="button" onClick={() => setOpenSampleReport(true)} className="link-lilac">
              Open sample report →
            </button>
          </article>

          <article className="card-surface p-6 risk-panel">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-danger mb-2">Engagement Path</p>
            <h2 className="font-display text-xl text-foreground mb-2">Request Independent Evaluation</h2>
            <p className="text-sm text-foreground-muted leading-relaxed mb-5">
              Share deployment context, governance pressure, and scope targets. We return a scoped third-party
              independent behavioral safety evaluation plan.
            </p>
            <a href="/get-started" className="link-lilac">Request evaluation →</a>
          </article>
        </div>
      </section>

      <section id="deliverables" className="site-section py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-7">What You Receive</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
          {deliverableItems.map((item) => (
            <article key={item.title} className="card-surface p-5">
              <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="text-xs text-foreground-subtle mt-5 max-w-4xl">
          All sample materials are illustrative. Scenario text, scoring rubric mechanics, and client-specific evidence remain
          engagement-only.
        </p>
      </section>

      <section id="faq" className="site-section py-14 border-b border-border max-w-4xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-7">FAQ</p>
        <div className="space-y-0 divide-y divide-border">
          {faqs.map((item) => (
            <article key={item.q} className="py-5">
              <h3 className="font-display text-foreground text-xl mb-2">{item.q}</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-section py-14">
        <article className="card-surface p-6 max-w-4xl">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-3">Ready to validate your system?</p>
          <h2 className="font-display text-3xl text-foreground mb-2">Request Third-Party Independent Evaluation.</h2>
          <p className="text-sm text-foreground-muted leading-relaxed mb-5">
            Start with intake. We scope around your deployment architecture, risk exposure, and decision timeline for
            independent behavioral safety evaluation.
          </p>
          <a
            href="/get-started"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
          >
            Request Evaluation →
          </a>
        </article>
      </section>

      <AssetPreviewModal
        open={openSampleReport}
        onOpenChange={setOpenSampleReport}
        title="Ikwe Sample Report (Public, Redacted)"
        src={SAMPLE_REPORT_PATH}
      />
    </PageShell>
  );
}
