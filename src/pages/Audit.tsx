import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";

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
        "This is where most organizations start. The audit surfaces failure modes internal testing misses, quantifies severity, and produces documentation your board and legal team can use immediately.",
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
      pricing: "Certification availability target: 2026",
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
    "You need external validation your internal team cannot provide",
    "Your board, legal team, or compliance function has raised behavioral risk questions",
    "You are preparing for AI governance requirements and need documented due diligence",
    "You have already shipped and need a measured view of your actual risk profile",
  ] as const;

  const notFit = [
    "Pre-deployment prototypes with no near-term production timeline",
    "Consumer demos without regulated or high-stakes surface area",
    "Organizations not yet in a position to act on audit findings",
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Audit & Validation | Ikwe.ai"
        description="Independent behavioral safety audits for human-facing AI. Structured evaluation, implementation support, and continuous monitoring. Ikwe.ai."
        path="/audit"
      />

      <section className="py-14 border-b border-border">
        <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-4">Audit &amp; Validation</p>
        <h1 className="font-display fluid-title text-foreground mb-4">Start with a clear picture of where your system stands.</h1>
        <p className="text-foreground-muted lede mb-6">
          Ikwe&apos;s audit is the first step in a structured validation pathway: behavioral risk baseline through
          remediation support, continuous monitoring, and formal certification as the program matures.
        </p>
        <div className="summary-headline-strip mb-7 max-w-4xl">
          <div className="summary-headline-item">Independent</div>
          <div className="summary-headline-item">Evidence-backed</div>
          <div className="summary-headline-item">Board-ready</div>
          <div className="summary-headline-item">Governance-grade</div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/request-audit#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
          >
            Request an Audit
          </a>
          <a
            href="#validation-pathway"
            className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
          >
            View the Validation Pathway ↓
          </a>
        </div>
      </section>

      <section id="what-the-audit-is" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">What the Audit Is</p>
        <div className="measure space-y-4">
          <p className="text-sm text-foreground-muted leading-relaxed text-pretty">
            A behavioral safety audit is a structured, independent evaluation of how your AI system responds when users
            are in emotionally sensitive states. It uses the EQ Safety Benchmark, a two-layer framework covering a
            binary safety screen and eight weighted behavioral dimensions, run against versioned scenarios across 12
            behavioral risk domains.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed text-pretty">
            The output is not a score on a dashboard. It is a documented risk baseline: board-ready, governance-grade,
            and structured for regulatory reference. It tells you where your system is safe, where it is not, and what
            the failure modes look like at the pattern level.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed text-pretty">
            The audit is the starting point. What you do with it determines whether the risk stays documented or gets
            resolved.
          </p>
        </div>
      </section>

      <section id="validation-pathway" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">The Validation Pathway</p>
        <p className="text-sm text-foreground-muted leading-relaxed measure text-pretty mb-8">
          Each stage is a discrete engagement. Most organizations start with the audit. The pathway is designed so each
          stage builds on the last, but any stage can be the entry point depending on where you are.
        </p>

        <div className="space-y-4 max-w-6xl">
          {pathway.map((stage, index) => (
            <div key={stage.step}>
              <article
                className={`card-surface p-6 md:p-7 ${
                  stage.coming ? "border-border-2 bg-background-surface pathway-coming" : "pathway-card"
                }`}
              >
                <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-2">{stage.step}</p>
                <h2 className="font-display fluid-heading text-foreground mb-2">{stage.title}</h2>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-subtle mb-4">{stage.tag}</p>

                <div className="space-y-3 mb-5">
                  {stage.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm text-foreground-muted leading-relaxed text-pretty measure">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {stage.receives.length > 0 ? (
                  <>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-subtle mb-3">What You Receive</p>
                    <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed mb-5">
                      {stage.receives.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </>
                ) : null}

                <p className={`text-xs ${stage.coming ? "text-foreground-subtle" : "text-lilac"}`}>{stage.pricing}</p>
              </article>

              {index < pathway.length - 1 ? (
                <p className="text-center text-foreground-subtle font-mono text-xs mt-3">Next stage</p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section id="what-we-measure" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">What We Measure</p>
        <div className="card-surface p-6 max-w-5xl safe-panel">
          <h2 className="font-display fluid-heading text-foreground mb-4">What behavioral safety evaluation actually measures</h2>
          <ul className="space-y-3 text-sm text-foreground-muted leading-relaxed">
            {measures.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-safe shrink-0">•</span>
                <span className="text-pretty">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="fit" className="py-14 border-b border-border">
        <h2 className="font-display fluid-heading text-foreground mb-6">Is this the right engagement for your organization?</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl">
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
      </section>

      <section id="request-start" className="py-14 max-w-4xl">
        <h2 className="font-display fluid-heading text-foreground mb-3">Request an Audit</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-3 measure text-pretty">
          Tell us about your system and deployment context. We will review and respond within two business days with a
          scope recommendation and next steps.
        </p>
        <p className="text-xs text-foreground-subtle mb-5">
          Fields: Organization · AI system or product name · Deployment context · Regulatory environment · Approximate user
          scale · Timeline · Your name and email
        </p>
        <div className="flex flex-wrap gap-3 mb-4">
          <a
            href="/request-audit#application-form"
            className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
          >
            Request an Audit
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
      </section>
    </PageShell>
  );
}
