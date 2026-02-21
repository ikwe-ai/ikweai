import PageShell from "@/components/PageShell";
import { Lock } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function Reports() {
  const outputPreviews = [
    {
      label: "Preview",
      title: "Board Brief Structure",
      desc: "Executive summary format with risk posture, key findings, and governance-next-step framing.",
    },
    {
      label: "Preview",
      title: "Risk Scorecard Snapshot",
      desc: "Dimension-level summary format showing evaluation outcomes in plain institutional language.",
    },
    {
      label: "Preview",
      title: "Evidence Pack Index",
      desc: "Table-of-contents structure for reference IDs and version attribution.",
    },
    {
      label: "Preview",
      title: "Monitoring Drift Alert",
      desc: "Operational alert format showing changed risk patterns and recommended response pathway.",
    },
  ] as const;

  const livePages = [
    {
      title: "Research Overview",
      href: "/research",
      desc: "Benchmark findings, methodology lineage, and governance terminology.",
    },
    {
      title: "Architecture Overview",
      href: "/technology/architecture",
      desc: "Evaluation approach and governance overview.",
    },
    {
      title: "Audit Pathway",
      href: "/audit",
      desc: "Engagement structure, deliverable package scope, and intake start path.",
    },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Deliverables & Transparency | Ikwe.ai"
        description="Deliverables previews, transparency standards, and full report request pathways."
        path="/deliverables"
      />
      <SummaryHero
        kicker="Deliverables Hub"
        title="Deliverables & Transparency"
        summary="Deliverables previews show what institutions receive. Full report packages are available through audit engagement."
        highlights={[
          "Board-ready output formats",
          "Clear transparency standards",
          "Full report packages available through engagement",
        ]}
        primaryAction={{ href: "#output-previews", label: "View Output Previews ↓" }}
        secondaryAction={{ href: "/request-audit#application-form", label: "Request Audit" }}
        jumpLinks={[
          { href: "#output-previews", label: "Deliverables Previews" },
          { href: "#artifact-schema", label: "Deliverables Format" },
          { href: "#transparency-boundary", label: "Boundary" },
          { href: "#request-access", label: "Request Path" },
        ]}
      />

      <section id="output-previews" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Deliverables Previews</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mb-8">
          {outputPreviews.map((item) => (
            <article key={item.title} className="card-surface p-5 flex flex-col gap-3">
              <span className="inline-flex w-fit rounded border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-lilac">
                {item.label}
              </span>
              <h2 className="font-display text-xl text-foreground">{item.title}</h2>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">{item.desc}</p>
            </article>
          ))}
        </div>

        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-4">Live Reference Pages</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
          {livePages.map((item) => (
            <article key={item.title} className="card-surface p-5 flex flex-col gap-3">
              <h3 className="font-display text-lg text-foreground">{item.title}</h3>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">{item.desc}</p>
              <a href={item.href} className="text-sm link-lilac">
                Open live page →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="artifact-schema" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Deliverables Format</p>
        <div className="card-surface p-6 max-w-3xl">
          <p className="text-sm text-foreground-muted leading-relaxed mb-4">
            Public previews show format and structure only. Detailed implementation details are not published on the
            public site.
          </p>
          <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
            <li>• Executive risk summary</li>
            <li>• Benchmark outcome snapshot</li>
            <li>• Governance implications and next-step options</li>
            <li>• Documentation references for authorized reviewers</li>
          </ul>
        </div>
      </section>

      <section id="transparency-boundary" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Transparency Boundary</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl">
          <article className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-3">Release Standard</p>
            <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
              <li>• Public benchmark outcomes and framing</li>
              <li>• High-level evaluation standards</li>
              <li>• Redacted examples of report and evidence output formats</li>
            </ul>
          </article>
          <article className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-3">Full Report Package</p>
            <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
              <li>• Expanded benchmark documentation</li>
              <li>• Authorized review materials for governance teams</li>
              <li>• Organization-specific reporting package</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="request-access" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">How To Request Full Reports</p>
        <div className="access-callout rounded p-5 flex gap-4 max-w-3xl mb-8">
          <Lock size={16} className="text-lilac mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Full Report Request Path</p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Detailed documentation and extended packs are provided to organizations in active audit or scoped review.
            </p>
            <p className="text-xs text-foreground-subtle leading-relaxed mt-3">
              If you need a PDF copy, send the deliverable name to{" "}
              <a href="mailto:research@ikwe.ai" className="link-lilac">research@ikwe.ai</a>. If a styled PDF is not
              available, we can send the equivalent web-copy version.
            </p>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-3">
          <a
            href="/request-audit#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Request full report access →
          </a>
          <a
            href="/trust"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View trust posture
          </a>
        </div>
      </section>

      <section className="py-14">
        <p className="text-xs text-foreground-subtle max-w-2xl leading-relaxed">
          Note: Deliverables previews are published for transparency and institutional clarity. Full report
          materials are available through audit engagement.
        </p>
      </section>
    </PageShell>
  );
}
