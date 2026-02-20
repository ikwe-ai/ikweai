import PageShell from "@/components/PageShell";
import { Lock } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function Reports() {
  const liveReports = [
    {
      label: "Live Page",
      title: "Study I Benchmark Summary",
      href: "/research",
      desc: "Current public summary of Study I findings, canonical baseline data, and terminology.",
    },
    {
      label: "Live Page",
      title: "Architecture Overview",
      href: "/technology/architecture",
      desc: "Current pipeline overview, control terms, and publication boundaries.",
    },
    {
      label: "Live Page",
      title: "Writing Library",
      href: "/research/writings",
      desc: "Published essays and notes with full live pages for each writing entry.",
    },
    {
      label: "Live Page",
      title: "Case Studies",
      href: "/research/case-studies",
      desc: "Indexed case pages with full case-analysis detail and governance outcomes.",
    },
    {
      label: "Live Page",
      title: "Press & Updates",
      href: "/research/press",
      desc: "Published communications index linking directly to live public content.",
    },
    {
      label: "Live Page",
      title: "Independence & Governance",
      href: "/about",
      desc: "Current conflict posture, publication discipline, and versioning policy.",
    },
  ] as const;

  const extendedReports = [
    {
      title: "Board Briefing Set",
      desc: "Extended governance briefing package for institutional diligence.",
    },
    {
      title: "Extended Case Packet",
      desc: "Expanded case documentation with additional context and governance framing.",
    },
    {
      title: "Research Companion Materials",
      desc: "Supplemental material set aligned to current live-page releases.",
    },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Reports & Releases | Ikwe.ai"
        description="Access current, live benchmark report pages. Extended report sets are available by request."
        path="/reports"
      />
      <SummaryHero
        kicker="Live Reports"
        title="Reports & Releases"
        summary="This page links only to current live report pages. Extended report sets are available by request when needed."
        highlights={[
          "Links point to live canonical pages",
          "Current benchmark language only",
          "Extended packs available on request",
        ]}
        primaryAction={{ href: "#live-reports", label: "View Live Reports ↓" }}
        secondaryAction={{ href: "#extended-reports", label: "View Extended Access" }}
      />

      <section id="live-reports" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Live Report Pages</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
          {liveReports.map((report) => (
            <article key={report.href} className="card-surface p-5 flex flex-col gap-3">
              <span className="inline-flex w-fit rounded border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-lilac">
                {report.label}
              </span>
              <h2 className="font-display text-xl text-foreground">{report.title}</h2>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">{report.desc}</p>
              <a href={report.href} className="text-sm link-lilac">
                Open page →
              </a>
            </article>
          ))}
        </div>
        <p className="text-xs text-foreground-subtle mt-5 max-w-2xl">
          PDF files are being reviewed and refreshed. Until that process is complete, report links route to live pages
          with current language.
        </p>
      </section>

      <section id="extended-reports" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Extended Report Access</p>
        <div className="gated-callout rounded p-5 flex gap-4 max-w-3xl mb-8">
          <Lock size={16} className="text-lilac mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Access Policy</p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Extended report materials are available on request for institutional review.
            </p>
          </div>
        </div>

        <div className="space-y-0 divide-y divide-border max-w-3xl">
          {extendedReports.map((artifact) => (
            <div key={artifact.title} className="py-5">
              <p className="font-mono text-xs text-lilac mb-1.5">{artifact.title}</p>
              <p className="text-sm text-foreground-muted leading-relaxed">{artifact.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/consult"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Request Extended Access →
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
          Release note: Live pages are the source of truth for public language and benchmark framing.
        </p>
      </section>
    </PageShell>
  );
}
