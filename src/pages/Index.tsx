import { Link } from "react-router-dom";

import PageMeta from "@/components/PageMeta";
import { PUBLIC_STATS } from "@/content/stats";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";
import { trackEvent } from "@/hooks/useAnalytics";

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
  ["TIER I",  "Stable Behavioral Integrity",  "Launch with confidence",      "Standard monitoring",                "tier-1"],
  ["TIER II", "Moderate Behavioral Risk",      "Launch with mitigations",     "Safeguards + quarterly review",      "tier-2"],
  ["TIER III","Escalation Instability",        "Remediate before launch",     "Engineering fixes required, retest", "tier-3"],
  ["TIER IV", "High Vulnerability Exposure",   "Do not launch",               "Fundamental redesign needed",        "tier-4"],
] as const;

const deliverables = [
  ["Board",      "Defensible audit record",       "Governance documentation your directors can stand behind."],
  ["Legal",      "Due diligence evidence",        "Documented behavioral evidence for legal exposure and liability review."],
  ["Compliance", "Versioned evidence packages",   "Reproducible compliance documentation updated after each deployment change."],
  ["Engineering","Structured failure mapping",    "Specific failure mode data your team can act on in real time."],
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
    description: "Evaluation across all 8 dimensions with Tier I–IV classification, failure mapping, and a remediation plan.",
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
  ["Quantified",  "Scored, not subjective"],
  ["Longitudinal","Tracks drift over time"],
] as const;

export default function Home() {
  return (
    <>
      <PageMeta
        title="Ikwe.ai — The Behavioral Safety Standard for Human-Facing AI"
        description="The behavioral safety standard for human-facing AI. An independent safety record that proves your system can be trusted with humans — before harm, liability, or headlines."
        path="/"
        ogImagePath="/og/home.png"
      />

      <div className="home-page">
        <div aria-hidden="true" className="home-starfield" />

        {/* ── HERO ── */}
        <section id="hero" className="home-hero-section">
          {/* ambient glow blobs */}
          <div aria-hidden="true" className="home-glow-blob home-glow-blob-left" />
          <div aria-hidden="true" className="home-glow-blob home-glow-blob-right" />

          <div className="home-wrap home-hero-grid">
            {/* left column */}
            <div className="home-hero-left">
              <div className="home-hero-tag">
                <span className="home-hero-tag-dot" />
                Behavioral Safety Layer · Human-Facing AI
              </div>
              <h1 className="home-hero-title">
                Building AI<br />
                that humans<br />
                can actually <em>trust.</em>
              </h1>
              <p className="home-hero-sub">
                If your human-facing AI has never had an independent behavioral audit, you don't know whether it
                protects users in <strong>vulnerable moments</strong> — or quietly makes things worse.
              </p>
              <p className="home-hero-subtle">
                We run independent behavioral safety audits and produce documented evidence your board, legal team,
                and compliance advisors can stand behind.
              </p>
              <div className="home-hero-actions">
                <Link to="/audit" className="home-btn home-btn-primary" onClick={() => trackEvent("audit_cta_hero")}>
                  Request a Behavioral Safety Audit
                </Link>
                <Link to="/samples" className="home-btn home-btn-ghost" onClick={() => trackEvent("cta_sample_report", { source: "hero" })}>
                  See a Sample Risk Report
                </Link>
              </div>
            </div>

            {/* right column — stats panel */}
            <div className="home-hero-right">
              <div className="home-hero-stats">
                <div className="home-hero-stat">
                  <div className="home-stat-number">{BENCHMARK_CURRENT.failedGatePct}</div>
                  <div className="home-stat-label">of frontier-model responses introduced emotional risk at first contact</div>
                </div>
                <div className="home-hero-stat">
                  <div className="home-stat-number">44.9%</div>
                  <div className="home-stat-label">of systems fail the binary Safety Gate</div>
                </div>
                <div className="home-hero-stat">
                  <div className="home-stat-number">{PUBLIC_STATS.outputsEvaluatedDisplay}</div>
                  <div className="home-stat-label">outputs evaluated across 79 baseline scenarios</div>
                </div>
              </div>
              <p className="home-hero-stat-note">
                Not what it says. How it behaves.<br />That distinction is what Ikwe was built to measure.
              </p>
            </div>
          </div>
        </section>

        {/* ── THESIS: EMPATHY ≠ SAFETY ── */}
        <section id="thesis" className="home-section home-section-alt">
          <div className="home-wrap">
            <div className="home-section-header">
              <span className="home-eyebrow">Section 01 // Conflict</span>
              <div className="home-section-header-right">
                <span className="home-section-aside">
                  A polite AI is not necessarily a safe AI.
                </span>
              </div>
            </div>

            <div className="home-grid-two home-thesis-grid">
              <div>
                <h2 className="home-thesis-title">
                  The Paradox:<br /><em>Empathy ≠ Safety.</em>
                </h2>
                <p className="home-copy">
                  An AI system can acknowledge distress and still respond in a way that <strong>escalates harm</strong>.
                  It can sound warm while reinforcing dependency. It can appear helpful while suppressing autonomy.
                  It can seem to handle a crisis while mishandling it entirely.
                </p>
                <p className="home-copy">
                  This is a <strong>behavioral pattern</strong> that does not appear in standard evaluations, accuracy
                  benchmarks, or compliance audits. It surfaces when humans are vulnerable. That is exactly
                  where current governance stops measuring.
                </p>
                <div className="home-pullquote">
                  "When behavioral failure surfaces publicly, decisions are made under pressure.
                  Independent evaluation prevents that from being your only defense."
                </div>

                <div className="home-failure-cards" style={{ marginTop: "2.5rem" }}>
                  <article className="home-failure-card">
                    <div className="home-failure-card-icon home-failure-icon-warn">⚠</div>
                    <div className="home-failure-card-title">Supportive escalation</div>
                    <p className="home-failure-card-body">
                      Looks caring on the surface, but never actually interrupts risky trajectories like self-harm
                      spirals or giving up on care.
                    </p>
                  </article>
                  <article className="home-failure-card">
                    <div className="home-failure-card-icon home-failure-icon-secondary">◎</div>
                    <div className="home-failure-card-title">Polite neglect</div>
                    <p className="home-failure-card-body">
                      Answers the literal question and ignores obvious distress. Everything seems normal — except the
                      person doesn't get help.
                    </p>
                  </article>
                </div>
              </div>

              <div>
                <span className="home-eyebrow" style={{ marginBottom: "1rem" }}>What Existing Governance Misses</span>
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
                      <span key={pill} className="home-pill">{pill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DRIFT — BENTO GRID ── */}
        <section id="drift" className="home-section">
          <div className="home-wrap">
            <div className="home-section-header">
              <div>
                <span className="home-eyebrow">Section 02 // Entropy</span>
                <h2 className="home-section-title">
                  Detecting the invisible:<br /><em>AI Drift.</em>
                </h2>
              </div>
              <div className="home-section-header-right home-section-aside-block">
                <span className="home-section-aside">Real-time Behavioral Monitoring</span>
                <span className="home-section-aside-sub">79 Scenarios · 12 Vulnerability Categories</span>
              </div>
            </div>

            {/* Bento grid */}
            <div className="home-bento-grid">
              {/* Large feature — semantic entropy */}
              <div className="home-bento-large">
                <div className="home-bento-icon home-bento-icon-primary">◈</div>
                <h3 className="home-bento-title">Behavioral risk doesn't appear all at once.</h3>
                <p className="home-bento-body">
                  It accumulates across interaction types, pressure levels, and user vulnerability states.
                  Standard evaluations only see Zone 1 — normal use. Ikwe measures the drift window where problems start.
                </p>
                {/* Mini drift bar visual */}
                <div className="home-bento-bars">
                  <div className="home-bento-bar" style={{ height: "40%", opacity: 0.2 }} />
                  <div className="home-bento-bar" style={{ height: "60%", opacity: 0.3 }} />
                  <div className="home-bento-bar" style={{ height: "25%", opacity: 0.15 }} />
                  <div className="home-bento-bar" style={{ height: "80%", opacity: 0.4 }} />
                  <div className="home-bento-bar" style={{ height: "55%", opacity: 0.25 }} />
                  <div className="home-bento-bar" style={{ height: "75%", opacity: 0.5 }} />
                  <div className="home-bento-bar home-bento-bar-alert" style={{ height: "35%" }} />
                </div>
              </div>

              {/* Zone 2 — the drift window */}
              <div className="home-bento-medium home-bento-featured">
                <div className="home-bento-badge">← Where Ikwe Measures</div>
                <div className="home-bento-icon home-bento-icon-watch">⚠</div>
                <h3 className="home-bento-title">The Drift Window</h3>
                <p className="home-bento-body">Vulnerable user conditions. Where problems start — invisible to standard evals.</p>
              </div>

              {/* Zone 1 */}
              <div className="home-bento-small">
                <div className="home-bento-icon home-bento-icon-safe">✓</div>
                <h3 className="home-bento-title-sm">Zone 1 — Looks Fine</h3>
                <p className="home-bento-body-sm">Normal use. Passes standard evals.</p>
              </div>

              {/* Zone 3 */}
              <div className="home-bento-small">
                <div className="home-bento-icon home-bento-icon-risk">!</div>
                <h3 className="home-bento-title-sm">Zone 3 — Consequences</h3>
                <p className="home-bento-body-sm">Harm · Legal · Brand. Too late to catch.</p>
              </div>
            </div>

            <div className="home-drift-note">
              <div>
                <p className="home-drift-note-main">
                  Ikwe detects behavioral risk early — before it becomes harm, headlines, or liability.
                </p>
                <p className="home-drift-note-detail">
                  <span>Measures trajectories, not just outputs</span>
                  <span className="home-dot">·</span>
                  <span>Flags escalation, manipulation, dependency loops</span>
                  <span className="home-dot">·</span>
                  <span>Produces audit-ready reports</span>
                </p>
              </div>
              <Link to="/audit" className="home-section-text-link" onClick={() => trackEvent("audit_cta_drift_soft")}>
                Learn how the audit works →
              </Link>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="oneidea" className="home-section home-section-alt">
          <div className="home-wrap">
            <span className="home-eyebrow">Section 03 // Method</span>
            <h2 className="home-section-title">
              Simple enough to explain.<br />
              Specific enough to act on.
            </h2>

            <div className="home-core-callout">
              <p>Companies build AI systems.</p>
              <p>Ikwe produces the independent safety record that proves those systems can be trusted with humans.</p>
            </div>

            <div className="home-flow-grid">
              {[
                { number: "01", title: "User in distress",      subtitle: "Vulnerable moment" },
                { number: "02", title: "AI response",           subtitle: "What the system does" },
                { number: "03", title: "Ikwe evaluation",       subtitle: "Behavioral analysis", featured: true },
                { number: "04", title: "Risk score + report",   subtitle: "Audit-ready output" },
              ].map((step) => (
                <article
                  key={step.number}
                  className={`home-flow-step ${step.featured ? "home-flow-step-featured" : ""}`}
                >
                  <div className="home-flow-number">{step.number}</div>
                  <h3 className="home-flow-title">{step.title}</h3>
                  <p className="home-flow-subtitle">{step.subtitle}</p>
                  {step.featured && <div className="home-flow-badge">ikwe.ai</div>}
                </article>
              ))}
            </div>

            <p className="home-beforeline">Before it becomes harm. Before it becomes headlines.</p>
            <div className="home-pill-group">
              {["Mental health AI", "AI companions", "Coaching AI", "Customer support AI", "Healthcare AI", "Education AI", "Consumer-facing AI"].map((pill) => (
                <span key={pill} className="home-pill">{pill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENCHMARK ── */}
        <section id="benchmark" className="home-section">
          <div className="home-wrap">
            <div className="home-section-header">
              <div>
                <span className="home-eyebrow">Section 04 // Standard</span>
                <h2 className="home-section-title">
                  Eight dimensions.<br />One clear answer.
                </h2>
              </div>
              <p className="home-copy home-copy-tight home-section-header-right">
                Purpose-built to measure behavioral safety failure in emotionally-loaded interactions.
                Each dimension answers a specific question about how your system actually behaves
                when a human needs it most — not how it performs on neutral test prompts.
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
              <p className="home-benchmark-body">
                A system can acknowledge distress and still respond in a way that escalates harm.
                The EQ Safety Benchmark was built to measure that gap — across 79 emotionally vulnerable scenarios,
                {PUBLIC_STATS.outputsEvaluatedDisplay}+ evaluated outputs, and 12 vulnerability categories.
                The result is scored, reproducible, and audit-ready.
              </p>
            </div>

            <div className="home-hero-actions">
              <Link to="/benchmark" className="home-btn home-btn-primary">
                View Public Leaderboard
              </Link>
              <Link to="/research" className="home-btn home-btn-ghost">
                Read Research Summary
              </Link>
            </div>
          </div>
        </section>

        {/* ── THREE PHASES ── */}
        <section id="system" className="home-section home-section-alt">
          <div className="home-wrap">
            <div className="home-section-center">
              <span className="home-eyebrow">Section 05 // Protocol</span>
              <h2 className="home-section-title">The Tri-Phase Evaluation</h2>
              <p className="home-section-subtext">
                The ikwe protocol provides a rigorous framework for behavioral validation.
                Each step builds on the last — you choose how deep you need to go.
              </p>
            </div>

            <div className="home-phases-grid">
              {[
                {
                  number: "01",
                  title: "Binary Safety Gate",
                  description: "Pass / fail evaluation across 79 emotionally vulnerable scenarios. Determines whether harmful behavioral patterns appear at all. The first question: does launch risk exist?",
                  tag: "Pre-deployment",
                  outcome: "Launch risk determination",
                },
                {
                  number: "02",
                  title: "Dimensional Scoring",
                  description: "Behavioral evaluation across all 8 dimensions and 12 vulnerability categories. Produces Tier I–IV classification with structured failure mapping and a remediation plan your engineering team can act on.",
                  tag: "Deep evaluation",
                  outcome: "Tier classification + remediation plan",
                },
                {
                  number: "03",
                  title: "Ongoing Governance Monitoring",
                  description: "Continuous behavioral drift monitoring after each deployment change. Quarterly re-evaluation to catch degradation before it reaches incident scale. A versioned, defensible safety record that compounds over time.",
                  tag: "Continuous",
                  outcome: "Sustained safety posture over time",
                },
              ].map((phase) => (
                <article key={phase.number} className="home-phase-card">
                  <div className="home-phase-number">{phase.number}</div>
                  <div className="home-phase-body">
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

        {/* ── OUTPUT / WHAT YOU GET ── */}
        <section id="output" className="home-section">
          <div className="home-wrap">
            <span className="home-eyebrow">Section 06 // Output</span>
            <h2 className="home-section-title" style={{ maxWidth: "620px", marginBottom: "3rem" }}>
              What you receive is a decision,<br />not just a document.
            </h2>

            <div className="home-output-grid">
              {/* Left — tiers + deliverables */}
              <div>
                <p className="home-copy" style={{ marginBottom: "2rem" }}>
                  Every evaluation produces a Tier classification with structured failure mapping,
                  specific mitigation guidance, and reproducible compliance evidence.
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

                <div style={{ marginTop: "2.5rem" }}>
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
                </div>
              </div>

              {/* Right — sample report card */}
              <div>
                <span className="home-eyebrow">Sample Evaluation Output</span>
                <div className="home-report-card">
                  <div className="home-report-header">
                    <div className="home-report-system">
                      <strong>System Name:</strong> Example AI System<br />
                      <strong>Evaluation Date:</strong> February 2026
                    </div>
                    <div>
                      <div className="home-report-chip tier-2">TIER II</div>
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
                        ["Escalation Stability",       "70%", "Conditional — minor drift",    "70%",  "var(--home-purple-light)"],
                        ["Multi-Turn Trajectory",      "90%", "Stable",                       "90%",  "var(--home-green)"],
                        ["Vulnerable User Response",   "60%", "Needs mitigation",             "60%",  "var(--home-gold)"],
                        ["Repair Capacity",            "90%", "Strong",                       "90%",  "var(--home-green)"],
                        ["Dependency Reinforcement",   "78%", "Low risk",                     "78%",  "var(--home-purple-light)"],
                        ["Manipulation Susceptibility","55%", "Safeguards needed",            "55%",  "var(--home-gold)"],
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
                        <div key={action} className="home-report-action">→ {action}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="home-hero-actions" style={{ marginTop: "1.5rem" }}>
                  <Link to="/audit#deliverables-previews" className="home-btn home-btn-ghost">
                    View Sample Reports
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHO / WHY NOW ── */}
        <section id="who" className="home-section home-section-alt">
          <div className="home-wrap">
            <div className="home-section-center" style={{ marginBottom: "3rem" }}>
              <span className="home-eyebrow">Section 07 // Audience</span>
              <h2 className="home-section-title">
                Any system that touches<br />human vulnerability.
              </h2>
            </div>

            <div className="home-grid-two">
              <div>
                <div className="home-column-label">Designed For</div>
                <div className="home-who-items">
                  {audienceItems.map((item) => (
                    <div key={item} className="home-who-item">› {item}</div>
                  ))}
                </div>
              </div>
              <div>
                <div className="home-column-label">Why Now</div>
                <div className="home-why-items">
                  {urgencyItems.map((item) => (
                    <div key={item} className="home-why-item">{item}</div>
                  ))}
                </div>
                <div className="home-pullquote" style={{ marginTop: "1.5rem" }}>
                  Every regulated industry eventually needs an auditor.
                  Finance got credit rating agencies. Healthcare got clinical trials oversight.{" "}
                  <strong>AI is here now.</strong>{" "}
                  The time to establish your behavioral safety record is before you need it.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ENGAGEMENT LEVELS ── */}
        <section id="engage" className="home-section">
          <div className="home-wrap">
            <div className="home-section-center">
              <span className="home-eyebrow">Section 08 // Engagement</span>
              <h2 className="home-section-title">Three levels of independent validation.</h2>
              <p className="home-section-subtext">
                Choose the level of external trust signal your system requires. Each level is cumulative —
                deeper evaluation builds on what came before.
              </p>
            </div>

            <div className="home-engagement-grid">
              {engagementLevels.map((level) => (
                <div
                  key={level.level}
                  className={`home-engagement-card ${level.featured ? "home-engagement-card-featured" : ""}`}
                >
                  <div className="home-engagement-level">{level.level}</div>
                  <h3 className="home-engagement-title">{level.title}</h3>
                  <p className="home-engagement-description">{level.description}</p>
                  <div className="home-engagement-for-label">Designed For</div>
                  <ul className="home-engagement-for-list">
                    {level.forItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="home-engagement-result">{level.result}</div>
                </div>
              ))}
            </div>

            <div className="home-engage-cta">
              <Link
                to="/audit"
                className="home-btn home-btn-primary home-btn-large"
                onClick={() => trackEvent("audit_cta_engage")}
              >
                Request Evaluation →
              </Link>
              <p className="home-engage-cta-note">
                Get a third-party baseline before launch risk becomes board risk.
              </p>
            </div>
          </div>
        </section>

        {/* ── CLOSE ── */}
        <section id="close" className="home-close-section">
          <div aria-hidden="true" className="home-close-glow" />
          <div className="home-close-inner">
            <span className="home-eyebrow">Section 09 // Mission</span>
            <h2 className="home-close-title">
              Secure your<br />
              <strong>model's integrity.</strong>
            </h2>
            <p className="home-close-copy">
              Technical capability is not the only measure of readiness.
              Behavioral stability under emotional pressure determines long-term viability.
              The systems shaping human lives deserve something underneath them we can trust.
            </p>
            <div className="home-close-actions">
              <div className="home-btn-gradient-wrap">
                <Link
                  to="/audit"
                  className="home-btn home-btn-gradient"
                  onClick={() => trackEvent("audit_cta_close")}
                >
                  Request Evaluation
                </Link>
              </div>
              <Link to="/benchmark" className="home-btn home-btn-ghost">
                View the Benchmark
              </Link>
            </div>
            <div className="home-close-props">
              {closingProps.map(([value, label]) => (
                <div key={value} className="home-close-prop">
                  <div className="home-close-prop-value">{value}</div>
                  <div className="home-close-prop-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
