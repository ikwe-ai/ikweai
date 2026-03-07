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
    tag: "Where Ikwe measures",
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
  { number: "03", title: "Ikwe evaluation", subtitle: "Behavioral analysis", featured: true },
  { number: "04", title: "Risk score + report", subtitle: "Audit-ready output" },
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
    title: "Binary Safety Gate",
    description:
      "Pass / fail evaluation across emotionally vulnerable scenarios. The first question: does launch risk exist at all?",
    tag: "Pre-deployment",
    outcome: "Launch risk determination",
  },
  {
    number: "02",
    title: "Dimensional Scoring",
    description:
      "Behavioral evaluation across all 8 dimensions and vulnerability categories, producing tier classification, failure mapping, and a remediation plan.",
    tag: "Deep evaluation",
    outcome: "Tier classification + remediation plan",
  },
  {
    number: "03",
    title: "Ongoing Governance Monitoring",
    description:
      "Continuous behavioral drift monitoring after deployment changes with a versioned safety record that compounds over time.",
    tag: "Continuous",
    outcome: "Sustained safety posture over time",
  },
] as const;

const tiers = [
  ["TIER I", "Stable Behavioral Integrity", "Launch with confidence", "Standard monitoring", "tier-1"],
  ["TIER II", "Moderate Behavioral Risk", "Launch with mitigations", "Safeguards required", "tier-2"],
  ["TIER III", "Escalation Instability", "Remediate before launch", "Engineering fixes + retest", "tier-3"],
  ["TIER IV", "High Vulnerability Exposure", "Do not launch", "Fundamental redesign needed", "tier-4"],
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
    title: "Baseline Gate",
    description:
      "Determine if your system passes or fails under controlled emotional stress scenarios. The first external stress test on record.",
    forItems: ["Early-stage systems", "Pre-deployment validation", "Internal confidence check"],
    result: "A safety gate result is on record.",
  },
  {
    level: "LEVEL II",
    title: "Full Benchmark",
    description:
      "Structured evaluation across all 8 behavioral safety dimensions with tier classification, failure mapping, and a documented remediation plan.",
    forItems: ["Board-level governance", "Regulated deployment", "Enterprise procurement"],
    result: "Board, legal, and compliance teams receive documented third-party behavioral evidence.",
    featured: true,
  },
  {
    level: "LEVEL III",
    title: "Ongoing Governance",
    description:
      "Continuous behavioral drift monitoring after each deployment change with periodic re-evaluation and a defensible record over time.",
    forItems: ["Live systems at scale", "High-consequence AI deployment", "Sustained regulatory posture"],
    result: "An independent behavioral safety record stays updated over time.",
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
        title="Ikwe.ai - The Behavioral Safety Layer for AI"
        description="Independent behavioral safety validation for human-facing AI systems. Built to detect behavioral drift under emotional pressure before harm, liability, or headlines."
        path="/"
      />

      <div className="home-page">
        <div aria-hidden="true" className="home-starfield" />

        <section id="hero" className="home-section home-hero">
          <div className="home-wrap">
            <div className="home-hero-tag">Independent Behavioral Safety Validation</div>
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
              Not what it says. How it behaves. That distinction is what Ikwe was built to measure.
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
                <div className="home-stat-label">behavioral domains measured</div>
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
              <span className="home-eyebrow">What Existing Governance Misses</span>
              <div className="home-gap-table">
                <div className="home-gap-header">
                  <div className="home-gap-heading home-gap-heading-muted">Current Governance Covers</div>
                  <div className="home-gap-heading">Behavioral Safety (Ikwe)</div>
                </div>
                {governanceRows.map(([left, right]) => (
                  <div key={left} className="home-gap-row">
                    <div className="home-gap-cell home-gap-cell-muted">{left}</div>
                    <div className="home-gap-cell">{right}</div>
                  </div>
                ))}
                <div className="home-gap-foot">
                  Behavioral safety is the missing operational layer in current governance frameworks.
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
              <span className="home-eyebrow">The Drift Curve - Ikwe&apos;s Core Finding</span>
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
                Ikwe detects behavioral risk early before it becomes harm, headlines, or liability.
              </p>
              <p className="home-note-copy">
                Measures trajectories, not just outputs · Flags escalation, manipulation, and dependency loops ·
                Delivers audit-ready reports with mitigation guidance
              </p>
            </div>
          </div>
        </section>

        <div className="home-divider" />

        <section id="oneidea" className="home-section home-band">
          <div className="home-wrap">
            <span className="home-eyebrow">What Ikwe Is - One Idea</span>
            <h2 className="home-section-title">
              Simple enough to explain.
              <br />
              Specific enough to act on.
            </h2>

            <div className="home-core-callout">
              <p>Companies build AI systems.</p>
              <p>
                Ikwe tests how those systems behave when humans are emotionally vulnerable and provides an
                independent, documented record of what it finds.
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
                <span className="home-eyebrow">The EQ Safety Benchmark</span>
                <h2 className="home-section-title">
                  Eight dimensions.
                  <br />
                  One clear answer.
                </h2>
              </div>
              <p className="home-copy home-copy-tight">
                Purpose-built to measure behavioral safety failure in emotionally loaded interactions. Each dimension
                answers a specific question about how your system behaves when a human needs it most.
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
              <div className="home-benchmark-highlight">Empathy ≠ Safety</div>
              <p className="home-benchmark-copy">
                The EQ Safety Benchmark measures the gap across {PUBLIC_STATS.scenarios} emotionally vulnerable
                scenarios, {PUBLIC_STATS.outputsEvaluatedDisplay} evaluated outputs, and{" "}
                {PUBLIC_STATS.behavioralDomains} behavioral domains. The result is scored, reproducible, and
                audit-ready.
              </p>
            </div>
          </div>
        </section>

        <div className="home-divider" />

        <section id="system" className="home-section home-band">
          <div className="home-wrap">
            <span className="home-eyebrow">How We Evaluate</span>
            <h2 className="home-section-title">
              Three phases.
              <br />
              One infrastructure.
            </h2>
            <p className="home-section-subtext home-section-subtext-left">
              Each step builds on the last, from immediate risk detection to ongoing drift monitoring. You choose how
              deep you need to go.
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
              <span className="home-eyebrow">From Evaluation to Decision</span>
              <h2 className="home-section-title home-output-title">
                What you receive is a decision, not just a document.
              </h2>
              <p className="home-copy">
                Every evaluation produces a tier classification with structured failure mapping, specific mitigation
                guidance, and reproducible compliance evidence.
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
                Every tier result includes structured failure mapping and documented mitigation guidance.
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
              <span className="home-eyebrow">Sample Evaluation Output</span>
              <div className="home-report-card">
                <div className="home-report-header">
                  <div className="home-report-system">
                    <strong>System Name:</strong> Example AI System
                    <br />
                    <strong>Evaluation Date:</strong> February 2026
                  </div>
                  <div className="home-report-chip-wrap">
                    <div className="home-report-chip">TIER II</div>
                    <div className="home-report-chip-subtitle">Moderate Behavioral Risk</div>
                  </div>
                </div>

                <div className="home-report-body">
                  <div className="home-report-section-label">Safety Gate Result</div>
                  <div className="home-report-gate-grid">
                    <div className="home-report-gate home-report-gate-risk">
                      <div className="home-report-gate-label">FAIL PATTERNS DETECTED</div>
                      <div className="home-report-gate-copy">Crisis mishandling<br />Escalation amplification</div>
                    </div>
                    <div className="home-report-gate home-report-gate-watch">
                      <div className="home-report-gate-label">RESULT</div>
                      <div className="home-report-gate-copy">Conditional Pass</div>
                      <div className="home-report-gate-note">Issues require mitigation</div>
                    </div>
                  </div>

                  <div className="home-report-section-label">Dimensional Scores</div>
                  <div className="home-score-list">
                    {[
                      ["Escalation Stability", "70%", "Conditional - minor drift", "70%", "var(--home-purple-light)"],
                      ["Multi-Turn Trajectory", "90%", "Stable", "90%", "var(--home-green)"],
                      ["Vulnerable User Response", "60%", "Adequate - needs mitigation", "60%", "var(--home-gold)"],
                      ["Repair Capacity", "90%", "Strong", "90%", "var(--home-green)"],
                      ["Dependency Reinforcement", "78%", "Low risk detected", "78%", "var(--home-purple-light)"],
                      ["Manipulation Susceptibility", "55%", "Safeguards needed", "55%", "var(--home-gold)"],
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
                    <div className="home-report-section-label">Recommended Actions</div>
                    {[
                      "Implement escalation guardrails for crisis scenarios",
                      "Add user autonomy reinforcement prompts",
                      "Strengthen manipulation resistance in system prompt",
                      "Quarterly re-evaluation after implementation",
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
              <span className="home-eyebrow">How to Work With Us</span>
              <h2 className="home-section-title home-section-title-center">
                Three levels of independent validation.
              </h2>
              <p className="home-section-subtext">
                Choose the level of external trust signal your system requires. Each level is cumulative, and deeper
                evaluation builds on what came before.
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
              <p className="home-engage-note">Get a third-party baseline before launch risk becomes board risk.</p>
            </div>
          </div>
        </section>

        <div className="home-divider" />

        <section id="close" className="home-section home-band home-close">
          <div className="home-close-inner">
            <span className="home-eyebrow">The Standard Ikwe Is Building</span>
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
