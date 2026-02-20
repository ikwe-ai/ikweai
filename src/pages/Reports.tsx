import PageShell from "@/components/PageShell";
import { Lock } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function Reports() {
  const publicReports = [
    {
      label: "Public Release",
      title: "Public Preview",
      file: "ikwe_public_preview.pdf",
      desc: "Overview of Study I findings for general distribution.",
    },
    {
      label: "Public Release",
      title: "Report Sample",
      file: "ikwe_report_sample.pdf",
      desc: "Sample evaluation report structure and output format.",
    },
    {
      label: "Public Release",
      title: "Action Plan Sample",
      file: "ikwe_action_plan_sample.pdf",
      desc: "Sample remediation and action-plan structure.",
    },
    {
      label: "Public Release",
      title: "Citation Guide",
      file: "04_Ikwe_Citation_Guide.pdf",
      desc: "Approved citation formats and research access terms.",
    },
  ] as const;

  const protectedArtifacts = [
    {
      title: "Board Brief",
      desc: "Executive governance briefing package with extended institutional context.",
    },
    {
      title: "Audit Report",
      desc: "Detailed behavioral safety findings with scenario-level analysis.",
    },
    {
      title: "Scorecard Sample",
      desc: "Expanded scoring documentation for controlled diligence review.",
    },
    {
      title: "Full Research Report",
      desc: "Complete Study I artifact bundle with controlled distribution posture.",
    },
    {
      title: "Behavioral Governance Briefing",
      desc: "Executive governance package for institutional stakeholders.",
    },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Reports & Releases | Ikwe.ai"
        description="Access public benchmark reports and release artifacts. Protected IP materials are distributed through controlled access."
        path="/reports"
      />
      <SummaryHero
        kicker="Public Reports"
        title="Reports & Releases"
        summary="Public reports are available directly on this page. Protected IP materials remain controlled and are distributed by request."
        highlights={[
          "Versioned public release set",
          "Canonical stat block discipline",
          "Protected materials separated by policy",
        ]}
        primaryAction={{ href: "#public-reports", label: "View Public Reports ↓" }}
        secondaryAction={{ href: "#protected-artifacts", label: "View Protected Access Policy" }}
      />

      <section id="public-reports" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Public Reports</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
          {publicReports.map((report) => (
            <article key={report.file} className="card-surface p-5 flex flex-col gap-3">
              <span className="inline-flex w-fit rounded border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-lilac">
                {report.label}
              </span>
              <h2 className="font-display text-xl text-foreground">{report.title}</h2>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">{report.desc}</p>
              <a href={`/artifacts/${report.file}`} className="text-sm link-lilac" target="_blank" rel="noreferrer">
                Open PDF →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="protected-artifacts" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Protected IP Artifacts</p>
        <div className="gated-callout rounded p-5 flex gap-4 max-w-3xl mb-8">
          <Lock size={16} className="text-lilac mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Controlled Distribution Policy</p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              The following materials contain protected implementation detail and are distributed through controlled
              review only.
            </p>
          </div>
        </div>

        <div className="space-y-0 divide-y divide-border max-w-3xl">
          {protectedArtifacts.map((artifact) => (
            <div key={artifact.title} className="py-5">
              <p className="font-mono text-xs text-lilac mb-1.5">{artifact.title}</p>
              <p className="text-sm text-foreground-muted leading-relaxed">{artifact.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Request Protected Access →
          </a>
          <a
            href="/research"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Back to Research
          </a>
        </div>
      </section>

      <section className="py-14">
        <p className="text-xs text-foreground-subtle max-w-2xl leading-relaxed">
          Release note: Public materials are versioned for traceability. Protected materials are withheld to prevent
          benchmark gaming and preserve evaluation integrity.
        </p>
      </section>
    </PageShell>
  );
}
