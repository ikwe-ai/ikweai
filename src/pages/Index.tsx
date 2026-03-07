import { Link } from "react-router-dom";

import PageMeta from "@/components/PageMeta";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";
import { PUBLIC_STATS } from "@/content/stats";

const governanceRows = [
  ["Data security", "Multi-turn emotional trajectory"],
  ["Model documentation", "Escalation stability under stress"],
  ["Bias detection", "Vulnerable-user handling patterns"],
  ["Compliance workflows", "Dependency reinforcement risk"],
  ["Accuracy benchmarks", "Repair capacity after failure"],
] as const;

const exposurePills = [
  "Governance exposure",
  "Legal vulnerability",
  "Delayed procurement",
  "Remediation costs",
  "Reputational damage",
] as const;

const driftZones = [
  {
    id: "ZONE 1",
    title: "Looks Fine",
    subtitle: "Normal use",
    tag: "Passes standard evals",
    tone: "good",
    icon: "✓",
  },
  {
    id: "ZONE 2",
    title: "Drift Window",
    subtitle: "Vulnerable user conditions",
    tag: "Where problems start",
    tone: "watch",
    icon: "⚠",
  },
  {
    id: "ZONE 3",
    title: "Consequences",
    subtitle: "Harm · Legal · Brand",
    tag: "Too late to catch",
    tone: "risk",
    icon: "!",
  },
] as const;

const flowSteps = [
  { number: "01", title: "User in distress", subtitle: "Vulnerable moment" },
  { number: "02", title: "AI response", subtitle: "What the system does" },
  { number: "03", title: "Independent review", subtitle: "How it actually behaves", featured: true },
  { number: "04", title: "Risk summary + next steps", subtitle: "Clear decision support" },
] as const;

const audiencePills = [
  "Mental health AI",
  "AI companions",
  "Fintech assistants",
  "Healthcare AI",
  "Enterprise copilots",
  "Education AI",
  "Consumer-facing AI",
] as const;

const dimensions = [
  ["Escalation Stability", "Does the system amplify or de-escalate distress?"],
  ["Vulnerable User Response", "How does the system respond under crisis or instability?"],
  ["Manipulation Susceptibility", "Can prompts override behavioral safeguards?"],
  ["Power Asymmetry", "Does the system exploit vulnerability or imbalance?"],
  ["Multi-Turn Trajectory", "Does behavioral drift emerge over sustained interaction?"],
  ["Dependency Reinforcement", "Does the system encourage emotional reliance?"],
  ["Correction & Recovery", "Can the system recover from harmful conversational drift?"],
  ["Stress Condition Performance", "Does behavioral stability hold under emotional intensity?"],
] as const;

const phases = [
  {
    number: "01",
    title: "Initial risk screen",
    description:
      "A fast first pass across emotionally vulnerable scenarios to answer the immediate question: is there obvious launch risk here or not?",
    tag: "Before launch",
    outcome: "Clear go / no-go signal",
  },
  {
    number: "02",
    title: "Full behavior review",
    description:
      "A deeper review across eight risk areas, with examples of failures, where they show up, and what your team should fix first.",
    tag: "Deep review",
    outcome: "Priority issues + fix plan",
  },
  {
    number: "03",
    title: "Ongoing monitoring",
    description:
      "Repeat reviews after model, prompt, or product changes so you can catch degradation early and keep a current record over time.",
    tag: "After launch",
    outcome: "Current risk record over time",
  },
] as const;

const tiers = [
  ["LOW", "Low behavioral risk", "Ready to ship with standard monitoring", "Standard monitoring", "tier-1"],
  ["MODERATE", "Moderate behavioral risk", "Launch with safeguards in place", "Safeguards required", "tier-2"],
  ["HIGH", "High behavioral risk", "Fix before launch", "Engineering fixes + retest", "tier-3"],
  ["CRITICAL", "Critical behavioral risk", "Do not launch in current state", "Substantial redesign needed", "tier-4"],
] as const;

const deliverables = [
  ["Board", "Defensible audit record", "Governance documentation for board-level review and oversight."],
  ["Legal", "Due diligence evidence", "Documented behavioral evidence for legal exposure and liability review."],
  ["Compliance", "Versioned evidence packages", "Reproducible compliance documentation updated over time."],
  ["Engineering", "Structured failure mapping", "Specific failure mode data your team can act on before drift becomes crisis."],
] as const;

const audienceItems = [
  "Companion AI platforms",
  "AI mental health systems",
  "Education AI products",
  "Consumer-facing AI systems",
  "Enterprise AI with human consequence",
  "Fintech and healthcare AI",
] as const;

const urgencyItems = [
  "Regulatory expectations for AI are accelerating globally",
  "Emotionally interactive AI is under increasing scrutiny",
  "Litigation exposure from AI behavioral harm is emerging",
  "Governance standards are expanding past bias and accuracy",
  "Behavioral safety is becoming a procurement requirement",
] as const;

const engagementLevels = [
  {
    level: "LEVEL I",
    title: "Initial Review",
    description:
      "A quick outside review to identify whether clear risk shows up under controlled emotional stress scenarios.",
    forItems: ["Early-stage systems", "Pre-deployment validation", "Internal confidence check"],
    result: "You get an initial outside read before launch.",
  },
  {
    level: "LEVEL II",
    title: "Full Review",
    description:
      "A full outside review across eight risk areas, with prioritized findings, examples, and a documented fix plan.",
    forItems: ["Board-level governance", "Regulated deployment", "Enterprise procurement"],
    result: "Leadership, legal, and product teams get clear third-party evidence they can use.",
    featured: true,
  },
  {
    level: "LEVEL III",
    title: "Ongoing Monitoring",
    description:
      "Repeat reviews after launches and major changes so your risk picture stays current over time.",
    forItems: ["Live systems at scale", "High-consequence AI deployment", "Sustained regulatory posture"],
    result: "You maintain an up-to-date outside record of how the system is behaving.",
  },
] as const;

const closingProps = [
  ["Independent", "No conflict of interest"],
  ["Quantified", "Scored, not subjective"],
  ["Longitudinal", "Tracks drift over time"],
] as const;

export default function Home() {
  return (
    <>
      <PageMeta
        title="Ikwe.ai - Independent AI Behavior Review"
        description="Independent behavioral safety validation for human-facing AI systems. Built to detect behavioral drift under emotional pressure before harm, liability, or headlines."
        path="/"
      />

      <div className="home-page">
        <div aria-hidden="true" className="home-starfield" />

        <section id="hero" className="home-section home-hero">
          <div className="home-wrap">
            <div className="home-hero-tag">Independent AI behavior review</div>
            <h1 className="home-hero-title">
              The Behavioral
              <br />
              Safety Layer
              <br />
              <em>for AI.</em>
            </h1>
            <p className="home-hero-sub">
              If your system interacts with humans during <strong>vulnerable moments</strong>, you need evidence of
              how it behaves under emotional pressure.
            </p>
            <p className="home-hero-subtle">
              Not just what it says in a demo. How it behaves when a real person is under pressure.
            </p>
            <div className="home-hero-actions">
              <Link to="/intake#application-form" className="home-btn home-btn-gold">
                Request Evaluation
              </Link>
              <Link to="/benchmark" className="home-btn home-btn-outline">
                View the Benchmark
              </Link>
            </div>
            <div className="home-hero-stats">
              <article className="home-hero-stat">
                <div className="home-stat-number">{BENCHMARK_CURRENT.failedGatePct}</div>
                <div className="home-stat-label">of baseline AI responses introduce emotional risk</div>
              </article>
              <article className="home-hero-stat">
                <div className="home-stat-number">{PUBLIC_STATS.outputsEvaluatedDisplay}</div>
                <div className="home-stat-label">outputs evaluated across {PUBLIC_STATS.scenarios} scenarios</div>
              </article>
              <article className="home-hero-stat">
                <div className="home-stat-number">{PUBLIC_STATS.behavioralDomains}</div>
                <div className="home-stat-label">risk categories measured</div>
              </article>
            </div>
          </div>
        </section>

        <div className="home-divider" />

        <section id="thesis" className="home-section home-band">
          <div className="home-wrap home-grid-two">
            <div>
              <span className="home-eyebrow">The Problem</span>
              <h2 className="home-thesis-title">
                <em>Empathy ≠ Safety.</em>
                <br />
                Recognition is not the same as protection.
              </h2>
              <p className="home-copy">
                An AI system can acknowledge distress and still respond in a way that <strong>escalates harm</strong>.
                It can sound warm while reinforcing dependency. It can appear helpful while suppressing autonomy.
              </p>
              <p className="home-copy">
                This is a <strong>behavioral pattern</strong> that does not appear in standard evaluations, accuracy
                benchmarks, or typical compliance checks. It surfaces when humans are vulnerable. That is exactly
                where current governance stops measuring.
              </p>
              <div className="home-pullquote">
                When behavioral failure surfaces publicly, decisions are made under pressure. Independent evaluation
                prevents that from being your only defense.
              </div>
            </div>

            <div>
              <span className="home-eyebrow">What Most Reviews Miss</span>
              <div className="home-gap-table">
                <div className="home-gap-header">
                  <div className="home-gap-heading home-gap-heading-muted">Current Governance Covers</div>
                  <div className="home-gap-heading">What still needs testing</div>
                </div>
                {governanceRows.map(([left, right]) => (
                  <div key={left} className="home-gap-row">
                    <div className="home-gap-cell home-gap-cell-muted">{left}</div>
                    <div className="home-gap-cell">{right}</div>
                  </div>
                ))}
                <div className="home-gap-foot">
                  This is the gap between a model that looks acceptable and one that is actually safe to deploy.
                </div>
              </div>

              <div className="home-pill-group-wrap">
                <span className="home-eyebrow">This Creates</span>
                <div className="home-pill-group">
                  {exposurePills.map((pill) => (
                    <span key={pill} className="home-pill">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="home-divider" />

        <section id="drift" className="home-section">
          <div className="home-wrap">
            <div className="home-center-block">
              <span className="home-eyebrow">What Most Teams Miss</span>
              <h2 className="home-section-title home-section-title-center">
                AI doesn&apos;t fail.
                <br />
                <em>It drifts.</em>
              </h2>
              <p className="home-section-subtext">
                Behavioral risk does not appear all at once. It accumulates across interaction types, pressure levels,
                and user vulnerability states. Standard evals only see Zone 1.
              </p>
            </div>

            <div className="home-drift-grid">
              {driftZones.map((zone) => (
                <article
                  key={zone.id}
                  className={`home-drift-card ${
                    zone.tone === "watch"
                      ? "home-drift-card-featured"
                      : zone.tone === "risk"
                        ? "home-drift-card-risk"
                        : "home-drift-card-good"
                  }`}
                >
                  <div className="home-drift-icon">{zone.icon}</div>
                  <div className="home-drift-number">{zone.id}</div>
                  <h3 className="home-drift-title">{zone.title}</h3>
                  <p className="home-drift-subtitle">{zone.subtitle}</p>
                  <p className="home-drift-tag">{zone.tag}</p>
                </article>
              ))}
            </div>

            <div className="home-note">
              <p className="home-note-title">
                We help teams catch risky behavior before it becomes harm, liability, or a public issue.
              </p>
              <p className="home-note-copy">
                Looks at patterns across conversations, not one-off answers · Flags escalation, manipulation, and
                over-reliance · Produces reports your product, legal, and leadership teams can use
              </p>
            </div>
          </div>
        </section>

        <div className="home-divider" />

        <section id="oneidea" className="home-section home-band">
          <div className="home-wrap">
            <span className="home-eyebrow">What We Do</span>
            <h2 className="home-section-title">
              Simple enough to explain.
              <br />
              Specific enough to act on.
            </h2>

            <div className="home-core-callout">
              <p>Companies build AI systems.</p>
              <p>
                We test how those systems behave when people are emotionally vulnerable and provide an independent,
                documented record of what we find.
              </p>
            </div>

            <div className="home-flow-grid">
              {flowSteps.map((step) => (
                <article
                  key={step.number}
                  className={`home-flow-step ${step.featured ? "home-flow-step-featured" : ""}`}
                >
                  <div className="home-flow-number">{step.number}</div>
                  <h3 className="home-flow-title">{step.title}</h3>
                  <p className="home-flow-subtitle">{step.subtitle}</p>
                  {step.featured ? <div className="home-flow-badge">ikwe.ai</div> : null}
                </article>
              ))}
            </div>

            <p className="home-beforeline">Before it becomes harm. Before it becomes headlines.</p>
            <div className="home-pill-group">
              {audiencePills.map((pill) => (
                <span key={pill} className="home-pill">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="home-divider" />

        <section id="benchmark" className="home-section">
          <div className="home-wrap">
            <div className="home-grid-two home-benchmark-header">
              <div>
                <span className="home-eyebrow">What We Evaluate</span>
                <h2 className="home-section-title">
                  Eight checks.
                  <br />
                  One clear answer.
                </h2>
              </div>
              <p className="home-copy home-copy-tight">
                We review how AI behaves in emotionally loaded interactions. Each check answers a plain question about
                how your system responds when a person needs it most.
              </p>
            </div>

            <div className="home-dimensions-grid">
              {dimensions.map(([title, question]) => (
                <article key={title} className="home-dimension-card">
                  <h3 className="home-dimension-title">{title}</h3>
                  <p className="home-dimension-copy">{question}</p>
                </article>
              ))}
            </div>

            <div className="home-benchmark-callout">
              <div className="home-benchmark-highlight">Why this matters</div>
              <p className="home-benchmark-copy">
                We test this gap across {PUBLIC_STATS.scenarios} emotionally vulnerable scenarios,{" "}
                {PUBLIC_STATS.outputsEvaluatedDisplay} evaluated outputs, and {PUBLIC_STATS.behavioralDomains} risk
                categories. The result is repeatable, clearly documented, and usable across teams.
              </p>
            </div>
          </div>
        </section>

        <div className="home-divider" />

        <section id="system" className="home-section home-band">
          <div className="home-wrap">
            <span className="home-eyebrow">How The Review Works</span>
            <h2 className="home-section-title">
              Three steps.
              <br />
              One review process.
            </h2>
            <p className="home-section-subtext home-section-subtext-left">
              Each step builds on the last, from a quick outside read to deeper review and ongoing monitoring. You
              choose how much support you need.
            </p>

            <div className="home-phases">
              {phases.map((phase) => (
                <article key={phase.number} className="home-phase">
                  <div className="home-phase-number">{phase.number}</div>
                  <div>
                    <h3 className="home-phase-title">{phase.title}</h3>
                    <p className="home-phase-copy">{phase.description}</p>
                    <span className="home-phase-tag">{phase.tag}</span>
                  </div>
                  <div className="home-phase-outcome">
                    <div className="home-phase-outcome-label">Outcome</div>
                    <div className="home-phase-outcome-value">{phase.outcome}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="home-divider" />

        <section id="output" className="home-section">
          <div className="home-wrap home-grid-two home-output-grid">
            <div>
              <span className="home-eyebrow">What You Get</span>
              <h2 className="home-section-title home-output-title">
                What you receive is a decision, not just a document.
              </h2>
              <p className="home-copy">
                Every review produces a clear risk rating, examples of where things go wrong, recommended fixes, and
                documentation your teams can actually use.
              </p>

              <div className="home-tier-list">
                {tiers.map(([badge, title, subtitle, action, tone]) => (
                  <article key={badge} className="home-tier">
                    <div className={`home-tier-badge ${tone}`}>{badge}</div>
                    <div>
                      <div className="home-tier-title">{title}</div>
                      <div className="home-tier-subtitle">{subtitle}</div>
                    </div>
                    <div className="home-tier-action">{action}</div>
                  </article>
                ))}
              </div>
              <p className="home-tier-note">
                Every result includes concrete examples of issues found and recommended next steps.
              </p>

              <span className="home-eyebrow home-deliverables-label">What Each Stakeholder Gets</span>
              <div className="home-deliverables-grid">
                {deliverables.map(([role, title, copy]) => (
                  <article key={role} className="home-deliverable-card">
                    <div className="home-deliverable-role">{role}</div>
                    <h3 className="home-deliverable-title">{title}</h3>
                    <p className="home-deliverable-copy">{copy}</p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <span className="home-eyebrow">Sample Output</span>
              <div className="home-report-card">
                <div className="home-report-header">
                  <div className="home-report-system">
                    <strong>System Name:</strong> Example AI System
                    <br />
                    <strong>Evaluation Date:</strong> February 2026
                  </div>
                  <div className="home-report-chip-wrap">
                    <div className="home-report-chip">MODERATE RISK</div>
                    <div className="home-report-chip-subtitle">Needs safeguards before wider use</div>
                  </div>
                </div>

                <div className="home-report-body">
                  <div className="home-report-section-label">Initial Screen Result</div>
                  <div className="home-report-gate-grid">
                    <div className="home-report-gate home-report-gate-risk">
                      <div className="home-report-gate-label">ISSUES FOUND</div>
                      <div className="home-report-gate-copy">Crisis mishandling<br />Escalation under pressure</div>
                    </div>
                    <div className="home-report-gate home-report-gate-watch">
                      <div className="home-report-gate-label">OVERALL READ</div>
                      <div className="home-report-gate-copy">Proceed with fixes</div>
                      <div className="home-report-gate-note">Needs mitigation before broader release</div>
                    </div>
                  </div>

                  <div className="home-report-section-label">Review Breakdown</div>
                  <div className="home-score-list">
                    {[
                      ["Escalation Stability", "70%", "Some drift under pressure", "70%", "var(--home-purple-light)"],
                      ["Multi-Turn Trajectory", "90%", "Stable", "90%", "var(--home-green)"],
                      ["Vulnerable User Response", "60%", "Needs work in higher-risk cases", "60%", "var(--home-gold)"],
                      ["Repair Capacity", "90%", "Strong", "90%", "var(--home-green)"],
                      ["Dependency Reinforcement", "78%", "Limited risk detected", "78%", "var(--home-purple-light)"],
                      ["Manipulation Susceptibility", "55%", "Additional safeguards needed", "55%", "var(--home-gold)"],
                    ].map(([label, value, status, width, color]) => (
                      <div key={label} className="home-score-row">
                        <div className="home-score-label">{label}</div>
                        <div className="home-score-track">
                          <div className="home-score-fill" style={{ width, background: color }} />
                        </div>
                        <div className="home-score-value">{value}</div>
                        <div className="home-score-status">{status}</div>
                      </div>
                    ))}
                  </div>

                  <div className="home-report-actions">
                    <div className="home-report-section-label">Recommended Next Steps</div>
                    {[
                      "Add stronger guardrails for crisis scenarios",
                      "Reinforce user autonomy in higher-risk conversations",
                      "Harden the system prompt against manipulation",
                      "Re-test after changes are in place",
                    ].map((action) => (
                      <div key={action} className="home-report-action">
                        {action}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="home-divider" />

        <section id="who" className="home-section home-band">
          <div className="home-wrap">
            <div className="home-center-block home-center-block-tight">
              <span className="home-eyebrow">Who This Is For</span>
              <h2 className="home-section-title home-section-title-center">
                Any system that touches human vulnerability.
              </h2>
            </div>

            <div className="home-grid-two">
              <div>
                <div className="home-column-label">Designed For</div>
                <div className="home-list-stack">
                  {audienceItems.map((item) => (
                    <div key={item} className="home-list-card">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="home-column-label">Why Now</div>
                <div className="home-why-list">
                  {urgencyItems.map((item) => (
                    <div key={item} className="home-why-item">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="home-pullquote">
                  Every regulated industry eventually needs an auditor. Finance got credit rating agencies. Healthcare
                  got clinical trials oversight. <strong>AI is here now.</strong> The time to establish your
                  behavioral safety record is before you need it.
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="home-divider" />

        <section id="engage" className="home-section">
          <div className="home-wrap">
            <div className="home-center-block">
              <span className="home-eyebrow">Ways To Work With Us</span>
              <h2 className="home-section-title home-section-title-center">
                Choose the level of review you need.
              </h2>
              <p className="home-section-subtext">
                Start with a quick outside read, go deeper with a full review, or keep the picture current over time.
              </p>
            </div>

            <div className="home-levels">
              {engagementLevels.map((level) => (
                <article
                  key={level.level}
                  className={`home-level-card ${level.featured ? "home-level-card-featured" : ""}`}
                >
                  <div className="home-level-number">{level.level}</div>
                  <h3 className="home-level-title">{level.title}</h3>
                  <p className="home-level-copy">{level.description}</p>
                  <div className="home-level-for-label">Designed For</div>
                  <ul className="home-level-list">
                    {level.forItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="home-level-result">{level.result}</p>
                </article>
              ))}
            </div>

            <div className="home-engage-cta">
              <Link to="/intake#application-form" className="home-btn home-btn-gold home-btn-large">
                Request Evaluation
              </Link>
              <p className="home-engage-note">Bring in an outside review before product risk turns into leadership risk.</p>
            </div>
          </div>
        </section>

        <div className="home-divider" />

        <section id="close" className="home-section home-band home-close">
          <div className="home-close-inner">
            <span className="home-eyebrow">Why This Matters</span>
            <h2 className="home-close-title">
              If AI systems are going to interact
              <br />
              with humans at scale,
              <br />
              <strong>behavioral validation cannot be optional.</strong>
            </h2>
            <p className="home-close-copy">
              Technical capability is not the only measure of readiness. Behavioral stability under pressure determines
              long-term viability. The systems shaping human lives deserve something underneath them we can trust.
            </p>
            <div className="home-close-actions">
              <Link to="/intake#application-form" className="home-btn home-btn-gold">
                Request Evaluation
              </Link>
              <Link to="/benchmark" className="home-btn home-btn-outline">
                View the Benchmark
              </Link>
            </div>
            <div className="home-close-props">
              {closingProps.map(([title, copy]) => (
                <div key={title} className="home-close-prop">
                  <div className="home-close-prop-title">{title}</div>
                  <div className="home-close-prop-copy">{copy}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
