import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import EnterpriseStepper from "@/components/EnterpriseStepper";
import ActionDock from "@/components/ActionDock";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";
import StatsRow from "@/components/visuals/StatsRow";
import DeliverablesGrid from "@/components/visuals/DeliverablesGrid";
import ArtifactsPreviewRow from "@/components/visuals/ArtifactsPreviewRow";
import ScenarioDomainMatrix from "@/components/visuals/ScenarioDomainMatrix";
import ConnectedPages from "@/components/ConnectedPages";

type PathwayStage = {
  step: string;
  title: string;
  tag: string;
  paragraphs: string[];
  receives: string[];
  pricing: string;
  coming?: boolean;
};

export default function Audit() {
  const pathway: PathwayStage[] = [
    {
      step: "01",
      title: "Diagnostic Audit",
      tag: "ENTRY POINT | BILLABLE STANDALONE",
      paragraphs: [
        "Establish a documented behavioral risk baseline for your system. We run the EQ Safety Benchmark against your deployment context using structured scenarios, versioned methodology, and reproducible outputs.",
        "This is where most organizations start. The audit surfaces failure modes in-house testing misses, quantifies severity, and produces documentation your board and legal team can use immediately.",
      ],
      receives: [
        "Board Brief - executive risk summary with classification band",
        "Risk Scorecard - dimension-level outcomes in plain governance language",
        "Evidence Pack - versioned scenario battery and scoring documentation",
        "Findings Briefing - live walkthrough with technical and compliance teams",
      ],
      pricing: "Commercial terms are provided through scoped review after intake.",
    },
    {
      step: "02",
      title: "Implementation Support",
      tag: "REMEDIATION PARTNERSHIP | BILLABLE ENGAGEMENT",
      paragraphs: [
        "Audit findings show where failures are. Implementation support is how you fix them. We work alongside engineering and product teams to translate behavioral risk findings into concrete remediation actions.",
        "This is not a handoff. We stay engaged through the remediation window, review proposed changes, re-test specific failure modes, and confirm fixes address root patterns rather than surface symptoms.",
      ],
      receives: [
        "Remediation roadmap - prioritized failure modes with recommended action types",
        "Technical consultation - working sessions on guardrail and prompt changes",
        "Targeted re-testing - post-remediation spot evaluation of specific failure modes",
        "Remediation summary - documented record of changes made and outcomes verified",
      ],
      pricing: "Scoped per engagement. Contact for commercial terms.",
    },
    {
      step: "03",
      title: "Active Monitoring",
      tag: "CONTINUOUS EVALUATION | RECURRING ENGAGEMENT",
      paragraphs: [
        "Behavioral risk is not static. Model updates, prompt changes, deployment scale, and user population shifts all change how your system behaves. Active monitoring catches drift before it becomes a documented failure.",
        "We run synthetic scenario monitoring on a defined schedule against your registered endpoint. When risk patterns shift, you receive a structured alert with recommended response steps.",
      ],
      receives: [
        "Quarterly benchmark re-evaluation against registered endpoint",
        "Drift Alert reports - structured view of changed risk patterns",
        "Updated governance documentation for compliance and board reference",
        "Escalation protocol - defined pathway to human review when indicators rise",
      ],
      pricing: "Monitoring terms are provided through scoped endpoint review.",
    },
    {
      step: "04",
      title: "Ikwe Certification",
      tag: "VALIDATION DESTINATION | PATHWAY IN DEVELOPMENT",
      paragraphs: [
        "Certification is the formal destination for organizations that complete the full validation pathway: audit, remediation, and verified re-test. The Ikwe certification program is in active development.",
        "Organizations currently engaged in audit or monitoring will be first eligible when the certification program formalizes. There is no separate application; eligibility is established through the validation pathway.",
      ],
      receives: [],
      pricing: "Certification formalization target: 2026",
      coming: true,
    },
  ];

  const measures = [
    "Whether the system introduces harm at first contact at measurable rates across structured scenarios",
    "Whether it repairs after a harmful response or continues and escalates",
    "Whether risk increases across a conversation over time (trajectory instability)",
    "Whether the system creates dependency, claims therapeutic authority, or fails to route a crisis appropriately",
    "How behavior changes across model versions, prompt updates, and deployment scale (drift detection)",
  ] as const;

  const goodFit = [
    "You are deploying conversational AI where failure carries legal, regulatory, or human consequences",
    "You need external validation your in-house team cannot provide",
    "Your board, legal team, or compliance function has raised behavioral risk questions",
    "You are preparing for AI governance requirements and need documented due diligence",
    "You have already shipped and need a measured view of your actual risk profile",
  ] as const;

  const notFit = [
    "Pre-deployment prototypes with no near-term production timeline",
    "Consumer demos without regulated or high-stakes surface area",
    "Organizations not yet in a position to act on audit findings",
  ] as const;

  const pathwaySummarySteps = pathway.map((stage) => ({
    title: stage.title,
    body: stage.paragraphs[0],
  }));

  const pathwayJump = pathway.map((stage) => ({
    id: `stage-${stage.step}`,
    label: `${stage.step} ${stage.title}`,
  }));

  const stageMatrix = [
    {
      stage: "01 · Diagnostic Audit",
      cfo: "Risk baseline and governance-ready decision context",
      cto: "Failure patterns, severity mapping, and technical findings brief",
      output: "Board Brief · Risk Scorecard · Evidence Pack",
    },
    {
      stage: "02 · Implementation Support",
      cfo: "Structured remediation plan with scoped workstream",
      cto: "Working sessions, change review, and targeted re-tests",
      output: "Remediation roadmap · Technical consultation summary",
    },
    {
      stage: "03 · Active Monitoring",
      cfo: "Ongoing oversight and continuity of governance documentation",
      cto: "Recurring drift signals and escalation alerts",
      output: "Quarterly re-evaluation · Drift Alert reports",
    },
    {
      stage: "04 · Certification",
      cfo: "Future formal validation destination through pathway completion",
      cto: "Eligibility based on verified audit-remediation-retest cycle",
      output: "Program formalization target: 2026",
    },
  ] as const;
  const engagementLevels = [
    {
      level: "Level I",
      title: "Baseline Gate",
      note: "Pre-deployment Safety Gate baseline and first decision record.",
      link: "#stage-01",
    },
    {
      level: "Level II",
      title: "Full Benchmark",
      note: "Full dimensional scoring and board-level governance package.",
      link: "#stage-02",
    },
    {
      level: "Level III",
      title: "Ongoing Governance",
      note: "Recurring monitoring and drift alerts for live systems at scale.",
      link: "#stage-03",
    },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Audit & Validation | Ikwe.ai"
        description="Independent behavioral safety audits for human-facing AI. Structured evaluation, implementation support, and continuous monitoring. Ikwe.ai."
        path="/audit"
      />

      <section className="site-section py-14 border-b border-border audit-hero">
        <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-4">Audit &amp; Validation</p>
        <p className="text-xs text-foreground-subtle mb-4">
          Framework basis: EQ Safety Benchmark {BENCHMARK_CURRENT.version} · Updated {BENCHMARK_CURRENT.lastUpdated}
        </p>
        <h1 className="font-display fluid-title text-foreground mb-4">Independent behavioral safety evaluation for executive decisions.</h1>
        <p className="text-foreground-muted lede mb-6">
          Start with a documented risk baseline, then move through remediation support and active monitoring as needed.
          This pathway is built for CTO and CFO decisions, not just technical review.
        </p>
        <div className="summary-headline-strip mb-7 max-w-4xl">
          <div className="summary-headline-item">{BENCHMARK_CURRENT.nValue}</div>
          <div className="summary-headline-item">{BENCHMARK_CURRENT.scenarios} scenarios</div>
          <div className="summary-headline-item">{BENCHMARK_CURRENT.domains} behavioral domains (vulnerability categories)</div>
          <div className="summary-headline-item">Stage 1 Safety Gate + Stage 2 conditional scoring</div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/intake#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
          >
            Request Evaluation
          </a>
          <a
            href="#validation-pathway"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
          >
            View the Validation Pathway ↓
          </a>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <a href="#engagement-levels" className="summary-jump">Engagement levels</a>
          <a href="#validation-pathway" className="summary-jump">Full pathway detail</a>
          <a href="#request-start" className="summary-jump">Request evaluation</a>
        </div>
        <p className="text-xs text-foreground-subtle mt-3">
          Use engagement levels for fast stage selection, then open detailed scope only where needed.
        </p>

        <div className="audit-decision-grid mt-6">
          <article className="audit-decision-card">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-lilac mb-1">Start</p>
            <p className="text-sm text-foreground">Need a risk baseline and board-ready evidence.</p>
            <a href="#stage-01" className="summary-jump mt-3">Diagnostic audit</a>
          </article>
          <article className="audit-decision-card">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-lilac mb-1">Remediate</p>
            <p className="text-sm text-foreground">Need support implementing and validating fixes.</p>
            <a href="#stage-02" className="summary-jump mt-3">Implementation support</a>
          </article>
          <article className="audit-decision-card">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-lilac mb-1">Operate</p>
            <p className="text-sm text-foreground">Need continuity and drift detection after launch.</p>
            <a href="#stage-03" className="summary-jump mt-3">Active monitoring</a>
          </article>
        </div>
      </section>

      <ConnectedPages current="audit" />

      <section id="deliverables-previews" className="site-section py-10 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Audit At A Glance</p>
        <StatsRow className="max-w-6xl mb-4" />
        <DeliverablesGrid className="max-w-6xl mb-4" />
        <ArtifactsPreviewRow className="max-w-6xl mb-4" />
        <ScenarioDomainMatrix className="max-w-6xl" />
      </section>

      <section id="engagement-levels" className="site-section py-10 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Engagement Levels</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
          {engagementLevels.map((item) => (
            <article key={item.level} className="card-surface p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-2">{item.level}</p>
              <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-foreground-muted mb-3">{item.note}</p>
              <a href={item.link} className="summary-jump">Open stage</a>
            </article>
          ))}
        </div>
      </section>

      <ActionDock
        title="Next Step"
        subtitle="Pick your stage, confirm scope, and start independent evaluation."
        items={[
          { href: "/intake#application-form", label: "Request Evaluation", tone: "primary" },
          { href: "#validation-pathway", label: "Validation Pathway", tone: "outline" },
          {
            href: "/forms/ikwe-intake-form-fillable.pdf",
            label: "Download Intake PDF",
            tone: "quiet",
            external: true,
          },
        ]}
      />

      <section id="validation-pathway" className="site-section py-14 border-b border-border audit-section-block">
        <div className="audit-section-layout">
          <div className="audit-section-head">
            <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">The Validation Pathway</p>
            <p className="text-sm text-foreground-muted leading-relaxed measure text-pretty mb-8">
              Most teams start with Diagnostic Audit, then add Implementation Support or Active Monitoring based on risk
              profile and timeline.
            </p>
          </div>

          <div className="audit-section-body">
            <div className="max-w-5xl mb-6">
              <EnterpriseStepper steps={pathwaySummarySteps} />
            </div>

            <div className="audit-pathway-layout max-w-6xl">
              <aside className="audit-pathway-nav card-surface p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-foreground-subtle mb-3">Jump to stage</p>
                <div className="flex flex-wrap gap-2 lg:grid lg:grid-cols-1">
                  {pathwayJump.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="summary-jump">
                      {item.label}
                    </a>
                  ))}
                </div>
              </aside>

              <div className="space-y-4">
              {pathway.map((stage, index) => (
                <div key={stage.step} id={`stage-${stage.step}`}>
                  <article
                    className={`card-surface p-6 md:p-7 ${
                      stage.coming ? "border-border-2 bg-background-surface pathway-coming" : "pathway-card"
                    }`}
                  >
                    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
                      <div>
                        <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-2">{stage.step}</p>
                        <h2 className="font-display fluid-heading text-foreground mb-2">{stage.title}</h2>
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-subtle mb-4">{stage.tag}</p>
                        <div className="space-y-3 mb-2">
                          <p className="text-sm text-foreground-muted leading-relaxed text-pretty measure">{stage.paragraphs[0]}</p>
                        </div>
                      </div>
                      <div className="audit-stage-meta">
                        <p className={`text-xs ${stage.coming ? "text-foreground-subtle" : "text-lilac"}`}>{stage.pricing}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mt-2">
                      {(stage.paragraphs.length > 1 || stage.receives.length > 0) ? (
                        <details className="progressive-details">
                          <summary
                            aria-label="Toggle stage details"
                            data-label="Stage details and deliverables"
                            data-open-label="Hide stage details"
                          />
                          <div className="progressive-details-body">
                            {stage.paragraphs.slice(1).map((paragraph) => (
                              <p key={paragraph} className="text-sm text-foreground-muted leading-relaxed text-pretty measure">
                                {paragraph}
                              </p>
                            ))}

                            {stage.receives.length > 0 ? (
                              <>
                                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-subtle mb-1">What You Receive</p>
                                <ul className="audit-deliverables-list space-y-2 text-sm text-foreground-muted leading-relaxed">
                                  {stage.receives.map((item) => (
                                    <li key={item}>• {item}</li>
                                  ))}
                                </ul>
                              </>
                            ) : null}
                          </div>
                        </details>
                      ) : null}
                    </div>
                  </article>

                  {index < pathway.length - 1 ? (
                    <p className="text-center text-foreground-subtle font-mono text-xs mt-3">Next stage</p>
                  ) : null}
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="deep-dive" className="site-section py-14 border-b border-border audit-section-block">
        <div className="audit-section-layout">
          <div className="audit-section-head">
            <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Optional Detail</p>
            <p className="text-sm text-foreground-muted leading-relaxed measure text-pretty">
              Decision-critical flow appears above. Use these sections only when your team needs deeper review.
            </p>
          </div>
          <div className="audit-section-body">
            <div className="space-y-4 max-w-6xl">
              <article className="card-surface p-6">
                <h2 className="font-display text-2xl text-foreground mb-3">What the audit measures</h2>
                <p className="text-sm text-foreground-muted leading-relaxed mb-3">
                  The audit gives leadership a defensible answer to one question: what is our current behavioral safety
                  exposure, and what should we do next?
                </p>
                <details className="progressive-details">
                  <summary
                    aria-label="Toggle measures"
                    data-label="Open measurement detail"
                    data-open-label="Hide measurement detail"
                  />
                  <div className="progressive-details-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {measures.map((item, idx) => (
                        <article key={item} className="card-surface p-5 safe-panel">
                          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-safe mb-2">Measure {idx + 1}</p>
                          <p className="text-sm text-foreground-muted leading-relaxed text-pretty">{item}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                </details>
              </article>

              <article className="card-surface p-6">
                <h2 className="font-display text-2xl text-foreground mb-3">CTO/CFO stage matrix</h2>
                <p className="text-sm text-foreground-muted leading-relaxed mb-3">
                  Compare commercial and technical decision value by stage in one view.
                </p>
                <details className="progressive-details">
                  <summary
                    aria-label="Toggle matrix"
                    data-label="Open stage matrix"
                    data-open-label="Hide stage matrix"
                  />
                  <div className="progressive-details-body">
                    <div className="lg:hidden grid grid-cols-1 gap-3">
                      {stageMatrix.map((row) => (
                        <article key={row.stage} className="card-surface p-5">
                          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-2">{row.stage}</p>
                          <dl className="grid gap-2 text-sm text-foreground-muted">
                            <div>
                              <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-foreground-subtle">CFO</dt>
                              <dd>{row.cfo}</dd>
                            </div>
                            <div>
                              <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-foreground-subtle">CTO</dt>
                              <dd>{row.cto}</dd>
                            </div>
                            <div>
                              <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-foreground-subtle">Output</dt>
                              <dd>{row.output}</dd>
                            </div>
                          </dl>
                        </article>
                      ))}
                    </div>
                    <div className="overflow-x-auto hidden lg:block">
                      <table className="enterprise-table min-w-[940px]">
                        <thead>
                          <tr>
                            <th>Stage</th>
                            <th>CFO Decision Value</th>
                            <th>CTO Technical Value</th>
                            <th>Primary Output</th>
                          </tr>
                        </thead>
                        <tbody>
                          {stageMatrix.map((row) => (
                            <tr key={row.stage}>
                              <td className="font-medium text-foreground">{row.stage}</td>
                              <td>{row.cfo}</td>
                              <td>{row.cto}</td>
                              <td>{row.output}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </details>
              </article>

              <article className="card-surface p-6">
                <h2 className="font-display text-2xl text-foreground mb-3">Engagement fit</h2>
                <p className="text-sm text-foreground-muted leading-relaxed mb-3">
                  Use this check only if your team is deciding whether to start now or defer.
                </p>
                <details className="progressive-details">
                  <summary
                    aria-label="Toggle fit guidance"
                    data-label="Open fit guidance"
                    data-open-label="Hide fit guidance"
                  />
                  <div className="progressive-details-body">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <article className="card-surface p-6">
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-3">Good fit</p>
                        <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
                          {goodFit.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </article>
                      <article className="card-surface p-6">
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-3">Not a fit</p>
                        <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
                          {notFit.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </article>
                    </div>
                  </div>
                </details>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="request-start" className="site-section py-14 audit-section-block">
        <div className="audit-section-layout">
          <div className="audit-section-head">
            <h2 className="font-display fluid-heading text-foreground mb-3">Request Evaluation</h2>
            <p className="text-sm text-foreground-muted leading-relaxed mb-3 measure text-pretty">
              Share your deployment context and decision timeline. We respond with a scoped recommendation and next steps.
            </p>
          </div>
          <div className="audit-section-body">
            <article className="card-surface p-6 max-w-4xl">
              <p className="text-xs text-foreground-subtle mb-5">
                Fields: Organization · AI system or product name · Deployment context · Regulatory environment · Approximate user
                scale · Timeline · Your name and email
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <a
                  href="/intake#application-form"
                  className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
                >
                  Request Evaluation
                </a>
                <a
                  href="/trust"
                  className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
                >
                  Trust &amp; Confidentiality
                </a>
              </div>
              <p className="text-xs text-foreground-subtle measure text-pretty">
                All intake information is treated as confidential. We do not share organization details with third parties.
                See our Trust &amp; Confidentiality page for full standards.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <a href="/benchmark" className="summary-jump">Benchmark framework</a>
                <a href="/benchmark#method-overview" className="summary-jump">Benchmark evidence</a>
                <a href="/audit#deliverables-previews" className="summary-jump">Sample outputs</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
