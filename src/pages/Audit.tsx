import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";
import EnterpriseStepper from "@/components/EnterpriseStepper";
import ActionDock from "@/components/ActionDock";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";
import StatsRow from "@/components/visuals/StatsRow";
import DeliverablesGrid from "@/components/visuals/DeliverablesGrid";
import ArtifactsPreviewRow from "@/components/visuals/ArtifactsPreviewRow";
import ScenarioDomainMatrix from "@/components/visuals/ScenarioDomainMatrix";
import ConnectedPages from "@/components/ConnectedPages";
import { trackEvent } from "@/hooks/useAnalytics";

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
      title: "Ikwe EQ Safety Evaluation",
      tag: "ENTRY POINT · BILLABLE STANDALONE",
      paragraphs: [
        "Run the EQ Safety Benchmark against your deployment context — structured scenarios, versioned methodology, reproducible outputs.",
        "Surfaces failure modes in-house testing misses. Produces documentation your board and legal team can use immediately.",
      ],
      receives: [
        "Board Brief — executive risk summary with classification band",
        "Risk Scorecard — dimension-level outcomes in plain governance language",
        "Evidence Pack — versioned scenario battery and scoring documentation",
        "Findings Briefing — live walkthrough with technical and compliance teams",
      ],
      pricing: "Commercial terms provided through scoped review after intake.",
    },
    {
      step: "02",
      title: "Implementation Support",
      tag: "REMEDIATION PARTNERSHIP · BILLABLE ENGAGEMENT",
      paragraphs: [
        "Translate audit findings into concrete fixes. We stay engaged through the remediation window — not a handoff.",
        "Review proposed changes, re-test specific failure modes, confirm fixes address root patterns.",
      ],
      receives: [
        "Remediation roadmap — prioritized failure modes with recommended action types",
        "Technical consultation — working sessions on guardrail and prompt changes",
        "Targeted re-testing — post-remediation spot evaluation of specific failure modes",
        "Remediation summary — documented record of changes made and outcomes verified",
      ],
      pricing: "Scoped per engagement. Contact for commercial terms.",
    },
    {
      step: "03",
      title: "Ikwe Behavioral Monitoring",
      tag: "CONTINUOUS EVALUATION · RECURRING ENGAGEMENT",
      paragraphs: [
        "Model updates, prompt changes, and user shifts all change how your system behaves. Monitoring catches drift before it becomes a documented failure.",
        "API-connected, defined schedule, evaluated against your registered endpoint. Risk pattern shifts trigger a structured alert with recommended response steps.",
      ],
      receives: [
        "Quarterly benchmark re-evaluation against registered endpoint",
        "Drift Alert reports — structured view of changed risk patterns",
        "Updated governance documentation for compliance and board reference",
        "Escalation protocol — defined pathway to human review when indicators rise",
      ],
      pricing: "Monitoring terms provided through scoped endpoint review.",
    },
    {
      step: "04",
      title: "Ikwe Certification",
      tag: "VALIDATION DESTINATION · PATHWAY IN DEVELOPMENT",
      paragraphs: [
        "Formal destination for organizations that complete the full validation pathway: audit, remediation, verified re-test.",
        "No separate application. Eligibility established through the validation pathway. Current audit and monitoring clients are first eligible.",
      ],
      receives: [],
      pricing: "Certification formalization target: 2026",
      coming: true,
    },
  ];

  const measures = [
    "Harm introduced at first contact across structured scenarios",
    "Repair behavior — does it recover or continue escalating?",
    "Risk trajectory — does danger increase over a conversation?",
    "Dependency creation, therapeutic overreach, or crisis routing failure",
    "Behavioral drift across model versions, prompt updates, and deployment scale",
  ] as const;

  const goodFit = [
    "Deploying conversational AI where failure carries legal or human consequences",
    "Need external validation your in-house team can't provide",
    "Board, legal, or compliance has raised behavioral risk questions",
    "Preparing for AI governance requirements — need documented due diligence",
    "Already shipped and need a measured view of your actual risk profile",
  ] as const;

  const notFit = [
    "Pre-deployment prototypes with no near-term production timeline",
    "Consumer demos without regulated or high-stakes surface area",
    "Organizations not yet able to act on audit findings",
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
      stage: "01 · Ikwe EQ Safety Evaluation",
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
      stage: "03 · Ikwe Behavioral Monitoring",
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
      title: "Ikwe EQ Safety Evaluation",
      note: "Full dimensional scoring and board-level governance package.",
      link: "#stage-02",
    },
    {
      level: "Level III",
      title: "Ikwe Behavioral Monitoring",
      note: "Recurring monitoring and drift alerts for live systems at scale.",
      link: "#stage-03",
    },
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Ikwe EQ Safety Evaluation | Ikwe.ai"
        description="Behavioral Safety Validation for human-facing AI through Ikwe EQ Safety Evaluation and Ikwe Behavioral Monitoring."
        path="/audit"
        ogImagePath="/og/audit.png"
      />

      <SummaryHero
        kicker="Evaluation Services"
        title="Independent behavioral safety audits for human-facing AI."
        summary="Most AI systems have never been tested for what happens when a real person shows up distressed, in crisis, or emotionally vulnerable. An Ikwe audit tells you exactly how your system behaves — and gives you evidence your board, compliance, and partners can stand behind."
        highlights={[
          BENCHMARK_CURRENT.nValue,
          `${BENCHMARK_CURRENT.scenarios} scenarios`,
          `${BENCHMARK_CURRENT.domains} behavioral domains`,
          "Safety Gate + 8 weighted dimensions",
        ]}
        primaryAction={{ href: "/get-started", label: "Book an Audit Scope Call" }}
        secondaryAction={{ href: "/samples", label: "View a Sample Risk Report" }}
        jumpLinks={[
          { href: "#what-you-get", label: "What you get" },
          { href: "#how-it-works", label: "How it works" },
          { href: "#request-start", label: "Request evaluation" },
        ]}
        visual={{
          kicker: `Updated ${BENCHMARK_CURRENT.lastUpdated}`,
          title: "The validation pathway",
          points: [
            "Stage 01 — EQ Safety Evaluation",
            "Stage 02 — Implementation Support",
            "Stage 03 — Behavioral Monitoring",
            "Stage 04 — Certification (2026)",
          ],
          tone: "danger",
        }}
      />

      {/* ── What You Get ── */}
      <section id="what-you-get" className="site-section py-10 border-b border-border">
        <p className="section-kicker mb-6">What You Get</p>

        {/* Pull-quote stat strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-6xl mb-8">
          <div className="card-surface p-5 border-l-2 border-lilac">
            <p className="font-display text-2xl text-foreground mb-1">Score</p>
            <p className="text-xs text-foreground-muted">Overall behavioral safety score across 8 weighted dimensions</p>
          </div>
          <div className="card-surface p-5 border-l-2 border-amber">
            <p className="font-display text-2xl text-foreground mb-1">Gate</p>
            <p className="text-xs text-foreground-muted">Pass / Conditional / Fail verdict tied to specific failure modes</p>
          </div>
          <div className="card-surface p-5 border-l-2 border-teal">
            <p className="font-display text-2xl text-foreground mb-1">Brief</p>
            <p className="text-xs text-foreground-muted">Board-ready narrative your leadership and compliance can use immediately</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mb-8">
          <article className="card-surface p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-lilac mb-3">01</p>
            <h3 className="font-display text-lg text-foreground mb-2">Behavioral risk scorecard</h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Scoring across emotional safety dimensions — what stabilizes, what escalates, what gets neglected — with examples from your own system.
            </p>
          </article>
          <article className="card-surface p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-lilac mb-3">02</p>
            <h3 className="font-display text-lg text-foreground mb-2">Safety Gate verdict</h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Pass / conditional / fail for first-contact behavioral safety — tied to specific failure modes and remediation priorities.
            </p>
          </article>
          <article className="card-surface p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-lilac mb-3">03</p>
            <h3 className="font-display text-lg text-foreground mb-2">Board and regulator brief</h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Independent validation your leadership, compliance, and external partners can use before and after deployment.
            </p>
          </article>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/get-started"
            className="inline-flex items-center rounded bg-lilac px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            onClick={() => trackEvent("audit_cta_audit_page")}
          >
            Book an Audit Scope Call
          </a>
          <p className="text-xs text-foreground-subtle">
            15–30 min. We scope your system, risk profile, and right audit level — no obligation.
          </p>
        </div>
      </section>

      {/* ── Stage Selector ── */}
      <section className="site-section py-8 border-b border-border">
        <p className="text-xs text-foreground-subtle mb-5">Jump to the right stage for your situation.</p>
        <div className="audit-decision-grid">
          <article className="audit-decision-card">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-lilac mb-1">Start</p>
            <p className="text-sm text-foreground">Need a risk baseline and board-ready evidence.</p>
            <a href="#stage-01" className="summary-jump mt-3">Ikwe EQ Safety Evaluation</a>
          </article>
          <article className="audit-decision-card">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-lilac mb-1">Remediate</p>
            <p className="text-sm text-foreground">Need support implementing and validating fixes.</p>
            <a href="#stage-02" className="summary-jump mt-3">Implementation support</a>
          </article>
          <article className="audit-decision-card">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-lilac mb-1">Operate</p>
            <p className="text-sm text-foreground">Need continuity and drift detection after launch.</p>
            <a href="#stage-03" className="summary-jump mt-3">Ikwe Behavioral Monitoring</a>
          </article>
        </div>
      </section>

      <ConnectedPages current="audit" />

      {/* ── Evaluation At A Glance ── */}
      <section id="deliverables-previews" className="site-section py-10 border-b border-border">
        <p className="section-kicker mb-6">Evaluation At A Glance</p>
        <StatsRow className="max-w-6xl mb-4" />
        <DeliverablesGrid className="max-w-6xl mb-4" />
        <ArtifactsPreviewRow className="max-w-6xl mb-4" />
        <ScenarioDomainMatrix className="max-w-6xl" />
      </section>

      {/* ── Engagement Levels ── */}
      <section id="engagement-levels" className="site-section py-10 border-b border-border">
        <p className="section-kicker mb-6">Engagement Levels</p>
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
          { href: "/get-started", label: "Request Ikwe EQ Safety Evaluation", tone: "primary" },
          { href: "#validation-pathway", label: "Validation Pathway", tone: "outline" },
          {
            href: "/forms/ikwe-intake-form-fillable.pdf",
            label: "Download Intake PDF",
            tone: "quiet",
            external: true,
          },
        ]}
      />

      {/* ── How the Audit Works ── */}
      <section id="how-it-works" className="site-section py-10 border-b border-border">
        <p className="section-kicker mb-6">How the Audit Works</p>

        {/* 4-step horizontal flow */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mb-8">
          {[
            { n: "01", label: "Scope", desc: "Define risk surface and deployment context" },
            { n: "02", label: "Evaluate", desc: "Run structured scenario battery against your system" },
            { n: "03", label: "Document", desc: "Score, classify, and package findings for governance" },
            { n: "04", label: "Remediate", desc: "Fix, re-test, and maintain with ongoing monitoring" },
          ].map((s) => (
            <div key={s.n} className="card-surface p-5 text-center">
              <p className="font-mono text-2xl text-lilac mb-2">{s.n}</p>
              <p className="font-display text-base text-foreground mb-1">{s.label}</p>
              <p className="text-xs text-foreground-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Validation Pathway ── */}
      <section id="validation-pathway" className="site-section py-14 border-b border-border audit-section-block">
        <div className="audit-section-layout">
          <div className="audit-section-head">
            <p className="section-kicker mb-6">The Validation Pathway</p>
            <p className="text-sm text-foreground-muted leading-relaxed measure text-pretty mb-8">
              Most teams start with an EQ Safety Evaluation, then add Implementation Support or Monitoring based on risk profile and timeline.
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
                        <p className="text-sm text-foreground-muted leading-relaxed text-pretty measure">{stage.paragraphs[0]}</p>
                      </div>
                      <div className="audit-stage-meta">
                        <p className={`text-xs ${stage.coming ? "text-foreground-subtle" : "text-lilac"}`}>{stage.pricing}</p>
                      </div>
                    </div>

                    {(stage.paragraphs.length > 1 || stage.receives.length > 0) ? (
                      <details className="progressive-details mt-4">
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
                              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-subtle mb-3">What You Receive</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {stage.receives.map((item) => (
                                  <div key={item} className="card-surface p-3 text-sm text-foreground-muted leading-relaxed border-l border-lilac pl-3">
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </>
                          ) : null}
                        </div>
                      </details>
                    ) : null}
                  </article>

                  {index < pathway.length - 1 ? (
                    <p className="text-center text-foreground-subtle font-mono text-xs mt-3">↓</p>
                  ) : null}
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Optional Detail ── */}
      <section id="deep-dive" className="site-section py-14 border-b border-border audit-section-block">
        <div className="audit-section-layout">
          <div className="audit-section-head">
            <p className="section-kicker mb-6">Optional Detail</p>
            <p className="text-sm text-foreground-muted leading-relaxed measure text-pretty">
              Decision-critical flow is above. Use these only when your team needs deeper review.
            </p>
          </div>
          <div className="audit-section-body">
            <div className="space-y-4 max-w-6xl">

              <article className="card-surface p-6">
                <h2 className="font-display text-2xl text-foreground mb-3">What the evaluation measures</h2>
                <details className="progressive-details">
                  <summary
                    aria-label="Toggle measures"
                    data-label="Open measurement detail"
                    data-open-label="Hide measurement detail"
                  />
                  <div className="progressive-details-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {measures.map((item, idx) => (
                        <article key={item} className="card-surface p-4 safe-panel">
                          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-safe mb-2">Measure {idx + 1}</p>
                          <p className="text-sm text-foreground-muted leading-relaxed text-pretty">{item}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                </details>
              </article>

              <article className="card-surface p-6">
                <h2 className="font-display text-2xl text-foreground mb-3">CTO / CFO stage matrix</h2>
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
                <h2 className="font-display text-2xl text-foreground mb-1">Engagement fit</h2>
                <details className="progressive-details">
                  <summary
                    aria-label="Toggle fit guidance"
                    data-label="Open fit guidance"
                    data-open-label="Hide fit guidance"
                  />
                  <div className="progressive-details-body">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <article className="card-surface p-6">
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-safe mb-3">Good fit</p>
                        <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
                          {goodFit.map((item) => (
                            <li key={item} className="flex gap-2"><span className="text-safe shrink-0">✓</span>{item}</li>
                          ))}
                        </ul>
                      </article>
                      <article className="card-surface p-6">
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-danger mb-3">Not a fit</p>
                        <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
                          {notFit.map((item) => (
                            <li key={item} className="flex gap-2"><span className="text-foreground-subtle shrink-0">–</span>{item}</li>
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

      {/* ── Request ── */}
      <section id="request-start" className="site-section py-14 audit-section-block">
        <div className="audit-section-layout">
          <div className="audit-section-head">
            <h2 className="font-display fluid-heading text-foreground mb-3">Request Ikwe EQ Safety Evaluation</h2>
            <p className="text-sm text-foreground-muted leading-relaxed mb-3 measure text-pretty">
              Share your deployment context and decision timeline. We respond with a scoped recommendation and next steps.
            </p>
          </div>
          <div className="audit-section-body">
            <article className="card-surface p-6 max-w-4xl">
              <p className="text-xs text-foreground-subtle mb-5">
                Organization · AI system · Deployment context · Regulatory environment · User scale · Timeline · Contact
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <a
                  href="/get-started"
                  className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
                  onClick={() => trackEvent("audit_cta_request_bottom")}
                >
                  Request Ikwe EQ Safety Evaluation
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
