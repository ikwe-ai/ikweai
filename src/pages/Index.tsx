import { Link } from "react-router-dom";

import PageMeta from "@/components/PageMeta";
import { PUBLIC_STATS } from "@/content/stats";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";

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
  { number: "04", title: "Risk score + report", subtitle: "Audit-ready output" },
] as const;

const audiencePills = [
  "Mental health AI",
  "AI companions",
  "Coaching AI",
  "Customer support AI",
  "Healthcare AI",
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

const tiers = [
  [
    "TIER I",
    "Stable Behavioral Integrity",
    "Launch with confidence",
    "Standard monitoring",
    "tier-1",
    "Safety record established. Trusted for deployment.",
  ],
  [
    "TIER II",
    "Moderate Behavioral Risk",
    "Launch with mitigations",
    "Safeguards + quarterly review",
    "tier-2",
    "Conditional safety record. Mitigations required before trust is established.",
  ],
  [
    "TIER III",
    "Escalation Instability",
    "Remediate before launch",
    "Engineering fixes required, retest",
    "tier-3",
    "Safety record withheld. Remediation required.",
  ],
  [
    "TIER IV",
    "High Vulnerability Exposure",
    "Do not launch",
    "Fundamental redesign needed",
    "tier-4",
    "Safety record denied. Do not deploy.",
  ],
] as const;

const deliverables = [
  ["Board", "Defensible audit record", "Governance documentation your directors can stand behind."],
  ["Legal", "Due diligence evidence", "Documented behavioral evidence for legal exposure and liability review."],
  ["Compliance", "Versioned evidence packages", "Reproducible compliance documentation updated after each deployment change."],
  ["Engineering", "Structured failure mapping", "Specific failure mode data your team can act on in real time."],
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
  "AI liability exposure is moving from edge case to legal precedent",
  "Board-level governance now requires documented behavioral safety evidence",
  "Procurement teams are beginning to require independent safety records",
  "Regulatory expectations are expanding past bias and accuracy into behavioral safety",
  "One trust failure can halt deployment for 18+ months",
] as const;

const engagementLevels = [
  {
    level: "LEVEL I",
    title: "Baseline Gate",
    description: "Determine if your system passes or fails under controlled emotional stress scenarios.",
    forItems: ["Early-stage systems", "Pre-deployment validation", "Internal confidence check"],
    result: "Your system has been externally stress-tested. A safety gate result is on record.",
  },
  {
    level: "LEVEL II",
    title: "Ikwe EQ Safety Evaluation",
    description:
      "Evaluation across all 8 dimensions with Tier I–IV classification, failure mapping, and a remediation plan.",
    forItems: ["Board-level governance", "Regulated deployment", "Enterprise procurement"],
    result: "Your board, legal, and compliance teams have documented third-party behavioral evidence.",
    featured: true,
  },
  {
    level: "LEVEL III",
    title: "Ongoing Governance Monitoring",
    description: "Continuous behavioral drift monitoring after each deployment change. Quarterly re-evaluation to catch degradation before it reaches incident scale.",
    forItems: ["Live systems at scale", "High-consequence AI deployment", "Sustained regulatory posture"],
    result: "Your system has an independent behavioral safety record — versioned and defensible over time.",
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
        title="Ikwe.ai - The Behavioral Safety Layer for Human-Facing AI"
        description="The behavioral safety standard for human-facing AI. An independent safety record that proves your system can be trusted with humans — before harm, liability, or headlines."
        path="/"
        ogImagePath="/og/home.png"
      />

      <div className="home-page">
        <div aria-hidden="true" className="home-starfield" />

        <section id="hero" className="home-section home-hero">
          <div className="home-wrap">
            <div className="home-hero-tag">The Behavioral Safety Standard for Human-Facing AI</div>
            <h1 className="home-hero-title">
              The Behavioral
              <br />
              Safety Layer
              <br />
              <em>for Human-Facing AI.</em>
            </h1>
            <p className="home-hero-sub">
              If your system interacts with humans, you need an independent record of whether it can be trusted —
              before it causes harm, liability, or a public failure.
            </p>
            <p className="home-hero-subtle">Not capability. Trustworthiness.</p>
            <div className="home-hero-actions">
              <Link to="/get-started" className="home-btn home-btn-gold">
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
                <div className="home-stat-number">44.9%</div>
                <div className="home-stat-label">of systems fail the binary Safety Gate</div>
              </article>
              <article className="home-hero-stat">
                <div className="home-stat-number">{PUBLIC_STATS.outputsEvaluatedDisplay}</div>
                <div className="home-stat-label">outputs evaluated across 79 baseline scenarios</div>
              </article>
            </div>
          </div>
        </section>

        <div className="home-divider" />

        <section id="thesis" className="home-section home-band">
          <div className="home-wrap">
            <div className="home-grid-two">
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
                    <div className="home-gap-heading">What still needs testing</div>
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
            <span className="home-eyebrow">How Behavioral Safety Validation Works</span>
            <h2 className="home-section-title">
              Simple enough to explain.
              <br />
              Specific enough to act on.
            </h2>

            <div className="home-core-callout">
              <p>Companies build AI systems.</p>
              <p>Ikwe produces the independent safety record that proves those systems can be trusted with humans.</p>
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

        <section id="benchmark" className="home-section home-section-cluster-start">
          <div className="home-wrap">
            <div className="home-grid-two home-benchmark-header">
              <div>
                <span className="home-eyebrow">The Ikwe Behavioral Safety Benchmark</span>
                <h2 className="home-section-title">Eight dimensions. One clear answer.</h2>
              </div>
              <p className="home-copy home-copy-tight">Built to answer one question: is your system safe when it matters most?</p>
            </div>

            <p className="home-beforeline">Real scenarios. Structured evaluation. Defensible outputs.</p>

            <div className="home-dimensions-grid">
              {dimensions.map(([title, question]) => (
                <article key={title} className="home-dimension-card">
                  <h3 className="home-dimension-title">{title}</h3>
                  <p className="home-dimension-copy">{question}</p>
                </article>
              ))}
            </div>

            <div className="home-benchmark-callout">
              <div className="home-benchmark-highlight">
                Binary Safety Gate. Eight weighted dimensions. One trust record.
              </div>
              <p className="home-benchmark-copy">
                The framework can score any response or interaction. It is validated against a baseline of 79
                real-world emotional support scenarios, produces public frontier model benchmark scores, and powers
                private client evaluations against the same baseline.
              </p>
            </div>

            <div className="home-hero-actions">
              <Link to="/benchmark" className="home-btn home-btn-gold">
                View Public Leaderboard
              </Link>
              <Link to="/research" className="home-btn home-btn-outline">
                Read Research Summary
              </Link>
            </div>
          </div>
        </section>

        <section id="system" className="home-section home-band home-section-merge">
          <div className="home-wrap">
            <span className="home-eyebrow">How We Evaluate</span>
            <h2 className="home-section-title">
              Three phases.
              <br />
              One infrastructure.
            </h2>
            <p className="home-section-subtext home-section-subtext-left">
              Each step builds on the last — from immediate risk detection to ongoing drift monitoring. You choose how deep you need to go.
            </p>

            <div className="home-phases">
              {[
                {
                  number: "01",
                  title: "Binary Safety Gate",
                  description:
                    "Pass / fail evaluation across 79 emotionally vulnerable scenarios. Determines whether harmful behavioral patterns appear at all.",
                  tag: "Pre-deployment",
                  outcome: "Launch risk determination",
                },
                {
                  number: "02",
                  title: "Dimensional Scoring",
                  description:
                    "Behavioral evaluation across all 8 dimensions, 12 vulnerability categories. Structured failure mapping and remediation guidance.",
                  tag: "Deep evaluation",
                  outcome: "Tier I–IV classification + remediation plan",
                },
                {
                  number: "03",
                  title: "Ongoing Governance Monitoring",
                  description:
                    "Continuous behavioral drift monitoring after each deployment change. Quarterly re-evaluation to catch degradation before it reaches incident scale. A versioned, defensible safety record that compounds over time.",
                  tag: "Continuous",
                  outcome: "Sustained safety posture over time",
                },
              ].map((phase) => (
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

            <div className="home-hero-actions">
              <Link to="/technology/architecture" className="home-btn home-btn-outline">
                See Full Evaluation Pipeline
              </Link>
              <Link to="/audit" className="home-btn home-btn-outline">
                Open Audit Pathway
              </Link>
            </div>
          </div>
        </section>

        <section id="output" className="home-section home-section-merge">
          <div className="home-wrap">
            <div className="home-output-layout">
              <div className="home-output-primary">
                <span className="home-eyebrow">What You Get</span>
                <h2 className="home-section-title home-output-title">
                  What you receive is a safety record, not just a score.
                </h2>
                <p className="home-copy">
                  Ikwe produces governance-ready evidence that enables deployment decisions.
                </p>
                <p className="home-copy">
                  Every review produces a clear risk rating, examples of where things go wrong, recommended fixes, and
                  documentation your teams can actually use.
                </p>
                <div className="home-output-block">
                  <span className="home-eyebrow">Tier Classifications</span>
                  <div className="home-tier-list">
                    {tiers.map(([badge, title, subtitle, action, tone, trustRecord]) => (
                      <article key={badge} className="home-tier">
                        <div className={`home-tier-badge ${tone}`}>{badge}</div>
                        <div>
                          <div className="home-tier-title">{title}</div>
                          <div className="home-tier-subtitle">{subtitle}</div>
                        </div>
                        <div className="home-tier-action">{action}</div>
                        <div className="home-tier-trust">{trustRecord}</div>
                      </article>
                    ))}
                  </div>
                  <p className="home-tier-note">
                    Every result includes concrete examples of issues found and recommended next steps.
                  </p>
                </div>
              </div>

              <div className="home-output-secondary">
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

              <div className="home-output-block home-output-stakeholders">
                <span className="home-eyebrow">What Each Stakeholder Gets</span>
                <div className="home-deliverables-grid">
                  {deliverables.map(([role, title, copy]) => (
                    <article key={role} className="home-deliverable-card">
                      <div className="home-deliverable-role">{role}</div>
                      <h3 className="home-deliverable-title">{title}</h3>
                      <p className="home-deliverable-copy">{copy}</p>
                    </article>
                  ))}
                </div>
                <div className="home-hero-actions">
                  <Link to="/audit#deliverables-previews" className="home-btn home-btn-gold">
                    View Sample Outputs
                  </Link>
                  <Link to="/audit" className="home-btn home-btn-outline">
                    Open Audit Pathway
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="home-divider" />

        <section id="who" className="home-section home-band home-section-merge home-section-cluster-start">
          <div className="home-wrap">
            <div className="home-center-block home-center-block-tight">
              <span className="home-eyebrow">Who This Is For</span>
              <h2 className="home-section-title home-section-title-center">
                AI systems that interact with users
                <br />
                in emotionally sensitive contexts.
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
                  One trust failure can halt deployment for 18+ months. The time to establish your safety record is
                  before you need it.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="engage" className="home-section home-section-merge">
          <div className="home-wrap">
            <div className="home-center-block">
              <span className="home-eyebrow">Engagement Model</span>
              <h2 className="home-section-title home-section-title-center">
                Three levels of behavioral
                <br />
                safety validation.
              </h2>
              <p className="home-section-subtext">
                Start with benchmark evaluation, add remediation, then extend into continuous governance monitoring.
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
                  <div className="home-level-for-label">Includes</div>
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
              <Link to="/get-started" className="home-btn home-btn-gold home-btn-large">
                Request Evaluation
              </Link>
              <Link to="/audit" className="home-btn home-btn-outline home-btn-large">
                View Audit Options
              </Link>
              <p className="home-engage-note">
                Choose the level of external trust signal your system requires. Each level is cumulative.
              </p>
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
              The systems interacting with humans at scale need something underneath them we can trust. That record
              has to come from outside.
            </p>
            <div className="home-close-actions">
              <Link to="/get-started" className="home-btn home-btn-gold">
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
