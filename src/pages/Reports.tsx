import PageShell from "@/components/PageShell";
import { Lock } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function Reports() {
  const publicOutputs = [
    {
      label: "Public Preview",
      title: "Board Brief Structure",
      desc: "Executive summary format with risk posture, key findings, and governance-next-step framing.",
    },
    {
      label: "Public Preview",
      title: "Risk Scorecard Snapshot",
      desc: "Dimension-level summary format showing evaluation outcomes in plain institutional language.",
    },
    {
      label: "Public Preview",
      title: "Evidence Pack Index",
      desc: "Table-of-contents structure for release references, run IDs, and version attribution.",
    },
    {
      label: "Public Preview",
      title: "Monitoring Drift Alert",
      desc: "Operational alert format showing changed risk patterns and recommended response pathway.",
    },
  ] as const;

  const livePages = [
    {
      title: "Research Overview",
      href: "/research",
      desc: "Study I findings, methodology lineage, and canonical terminology.",
    },
    {
      title: "Architecture Overview",
      href: "/technology/architecture",
      desc: "Public evaluation flow and control-language framing.",
    },
    {
      title: "Audit Pathway",
      href: "/audit",
      desc: "Engagement structure, deliverables, and intake start path.",
    },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Outputs & Transparency | Ikwe.ai"
        description="Output previews, transparency standards, and full report request pathways."
        path="/outputs"
      />
      <SummaryHero
        kicker="Outputs Hub"
        title="Outputs & Transparency"
        summary="Public output previews show what institutions receive. Full report packages are available through audit engagement."
        highlights={[
          "Board-ready output formats",
          "Clear transparency standards",
          "Full report packages available through engagement",
        ]}
        primaryAction={{ href: "#public-previews", label: "View Public Previews ↓" }}
        secondaryAction={{ href: "/request-audit#application-form", label: "Request Audit" }}
        jumpLinks={[
          { href: "#public-previews", label: "Public Previews" },
          { href: "#artifact-schema", label: "Artifact Schema" },
          { href: "#transparency-boundary", label: "Boundary" },
          { href: "#request-access", label: "Request Path" },
        ]}
      />

      <section id="public-previews" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Public Output Previews</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mb-8">
          {publicOutputs.map((item) => (
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
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Artifact Structure Example</p>
        <div className="card-surface p-6 max-w-3xl">
          <p className="text-sm text-foreground-muted leading-relaxed mb-4">
            Example fields shown for transparency. This schema preview demonstrates output structure and delivery format.
          </p>
          <pre className="rounded border border-border bg-background/40 p-4 text-xs text-foreground-muted overflow-x-auto">
{`{
  "artifact_type": "board_brief",
  "release_version": "YYYY.MM.DD",
  "run_id": "run_XXXX",
  "model_version": "declared_by_client",
  "scenario_pack_version": "locked_reference",
  "output_sections": [
    "risk_summary",
    "dimension_snapshot",
    "governance_next_steps",
    "monitoring_recommendations"
  ]
}`}
          </pre>
        </div>
      </section>

      <section id="transparency-boundary" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Transparency Boundary</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl">
          <article className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-3">Public Standard</p>
            <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
              <li>• Evaluation framework and control-language definitions</li>
              <li>• Canonical benchmark outcomes and version references</li>
              <li>• Redacted examples of report and evidence output formats</li>
            </ul>
          </article>
          <article className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-3">Full Report Package</p>
            <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
              <li>• Detailed scenario sets and extended documentation</li>
              <li>• Full scoring appendices and supporting report tables</li>
              <li>• Organization-specific delivery package for governance review</li>
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
          Public release note: Output previews are published for transparency and institutional clarity. Full report
          materials are available through audit engagement.
        </p>
      </section>
    </PageShell>
  );
}
