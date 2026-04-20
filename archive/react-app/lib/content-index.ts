export const WRITINGS_INDEX = [
  {
    slug: "before-the-violation",
    label: "Opinion · Published",
    title: "Before the Violation",
    href: "/research/writings/before-the-violation",
    cta: "Read full writing →",
    sourceHref: "https://ikwe.ai/research/writings/before-the-violation",
    sourceLabel: "Primary article URL ↗",
    summary: "Why behavioral safety must be measured before visible policy failure, not only after it.",
    excerpt: [
      "Most organizations still treat behavioral failure as a post-incident problem. That delay is the governance gap. By the time a visible violation appears, institutional trust has already been consumed.",
      "The practical question is not whether a model can sound empathetic. The practical question is whether it can consistently avoid high-risk behavior under pressure, ambiguity, and emotionally loaded context.",
    ],
  },
  {
    slug: "ai-governance-is-becoming-a-compliance-issue",
    label: "Published Essay",
    title: "AI Governance Is Becoming a Compliance Issue",
    href: "/research/writings/ai-governance-is-becoming-a-compliance-issue",
    cta: "Read full essay →",
    sourceHref: "https://ikwe.ai/research/writings/ai-governance-is-becoming-a-compliance-issue",
    sourceLabel: "Primary article URL ↗",
    summary:
      "A trust-layer thesis on why governance now requires auditable behavioral instrumentation and evidence discipline.",
    excerpt: [
      "Governance is no longer only model quality. It is whether organizations can demonstrate auditable, repeatable, and defensible oversight.",
      "Confidence signaling and deference risk appear before visible policy breach, which is why intervention has to happen upstream.",
    ],
  },
  {
    slug: "choose-your-path",
    label: "Opinion Essay · Published",
    title: "Choose Your Path",
    href: "/research/writings/choose-your-path",
    cta: "Read full essay →",
    sourceHref: "https://ikwe.ai/research/writings/choose-your-path",
    sourceLabel: "Primary article URL ↗",
    summary:
      "An essay on interruption, cumulative risk, and how institutional trust is built through repeated operational choices.",
    excerpt: [
      "History is shaped by paths, not headlines. Harm compounds through tolerated distortion, and repair compounds through deliberate interruption.",
      "Integrity is not declared once. It is constructed through recurring governance decisions that hold under pressure.",
    ],
  },
  {
    slug: "emotional-ai-high-trust-environments",
    label: "Research & Positioning · February 2026",
    title: "Emotional AI Is Already Active in High-Trust Environments",
    href: "/research/writings/emotional-ai-high-trust-environments",
    cta: "Read full article →",
    sourceHref: "https://ikwe.ai/research/writings/emotional-ai-high-trust-environments",
    sourceLabel: "Primary article URL ↗",
    summary: "And it is not independently behaviorally validated. An examination of the structural gap between emotional AI deployment and behavioral safety infrastructure.",
    excerpt: [
      "About 12% of U.S. teens say they've used AI chatbots to get emotional support or advice — without any standardized behavioral safety validation. That statistic represents millions of emotionally interactive conversations happening today.",
      "There is currently no standardized requirement for third-party behavioral safety validation prior to emotionally interactive AI deployment. Litigation is emerging, regulatory pressure is rising, and the independent layer does not yet exist at scale.",
    ],
  },
  {
    slug: "recognition-is-not-safety",
    label: "Research Note · Forthcoming (Public Abstract)",
    title: "Recognition Is Not Safety",
    href: "/research/writings/recognition-is-not-safety",
    cta: "Read full abstract →",
    summary: "A note on the distinction between emotional recognition quality and behavioral safety outcomes.",
    excerpt: [
      "A system can correctly recognize distress and still choose unsafe behavior. Recognition quality and safety quality are related but not equivalent.",
      "This note defines why recognition quality and response safety quality should be measured as separate governance controls.",
    ],
  },
] as const;

export const CASE_STUDIES_INDEX = [
  {
    slug: "authority-drift",
    label: "Case Analysis · Published",
    title: "Authority Drift",
    summary:
      "Confidence signaling outpaced safe-role boundaries and required governance correction.",
    details: [
      "In this trajectory, language certainty increased while role boundaries became less explicit across turns. The response tone remained polished, but operational scope expanded beyond safe-role posture.",
      "Risk rose because confidence cues were interpreted as authority in a high-sensitivity context. Users followed increasingly directive language as if it represented validated expertise.",
      "The governance objective was to preserve useful guidance while preventing authority simulation under ambiguity.",
    ],
    signals: [
      "Confidence markers increased while caveats decreased.",
      "Boundary phrases were present at first contact but degraded in later turns.",
      "User reliance rose as response certainty increased.",
    ],
    interventions: [
      "Reinforced role-boundary templates at high-risk turns.",
      "Added grounding controls requiring explicit uncertainty handling.",
      "Enabled escalation routes when user intent crossed sensitive scope limits.",
    ],
    outcomes: [
      "Authority-style language reduced without degrading response usefulness.",
      "Boundary compliance became stable across multi-turn exchanges.",
      "Escalation routing activated earlier in risk-sensitive trajectories.",
    ],
  },
  {
    slug: "emotional-escalation",
    label: "Case Analysis · Published",
    title: "Emotional Escalation",
    summary:
      "Soothing language obscured rising risk without adequate de-escalation structure.",
    details: [
      "The interaction remained emotionally validating while risk indicators increased over time. Surface empathy stayed strong, but safety trajectory degraded as the conversation deepened.",
      "Affect quality looked high, yet the system failed to interrupt escalation patterns when user distress signals intensified.",
      "The governance target was to separate empathy quality from trajectory safety and enforce interruption behavior when risk thresholds were crossed.",
    ],
    signals: [
      "Validation phrasing persisted despite increased distress intensity.",
      "Interruption opportunities were missed over consecutive turns.",
      "Risk terms appeared in user text without de-escalation handoff.",
    ],
    interventions: [
      "Introduced turn-level escalation detection.",
      "Added explicit redirect pathways for rising-distress trajectories.",
      "Linked interruption triggers to response-generation controls.",
    ],
    outcomes: [
      "Escalation loops shortened and recovery paths became more consistent.",
      "Empathy remained present while risk-sensitive redirection improved.",
      "High-distress trajectories showed earlier stabilization behavior.",
    ],
  },
  {
    slug: "founder-as-safety-mechanism",
    label: "Case Analysis · Published",
    title: "Founder-as-Safety-Mechanism",
    summary:
      "Safety depended on undocumented manual intervention rather than durable governance controls.",
    details: [
      "Manual intervention corrected risky behavior in practice, but those interventions were not encoded as repeatable system controls.",
      "Operational safety depended on individual judgment instead of auditable governance logic, creating continuity risk and weak evidence posture.",
      "The remediation plan converted tacit operator behavior into documented controls with explicit version governance.",
    ],
    signals: [
      "Safety quality varied by who reviewed or intervened.",
      "No durable mapping from observed risk to control action.",
      "Release changes occurred without explicit governance version records.",
    ],
    interventions: [
      "Documented manual mitigations as explicit control rules.",
      "Added release checklists with control-verification steps.",
      "Introduced explicit version metadata for scoring framework updates.",
    ],
    outcomes: [
      "Safety behavior became less dependent on individual operator knowledge.",
      "Governance evidence became attributable to release versions.",
      "Audit-readiness improved through repeatable control execution.",
    ],
  },
  {
    slug: "scale-amplification",
    label: "Case Analysis · Published",
    title: "Scale Amplification",
    summary:
      "Low-frequency risky behavior became material at deployment volume without threshold-based monitoring.",
    details: [
      "At small sample size, the behavior appeared manageable. Under production-scale traffic, low-frequency failures compounded into material exposure.",
      "The core issue was not a single severe response but repeated borderline responses that accumulated risk across volume.",
      "Governance emphasis shifted from isolated incident handling to volume-aware monitoring and threshold intervention.",
    ],
    signals: [
      "Stable low-frequency failure pattern repeated across large interaction counts.",
      "Incident visibility lagged behind trajectory-level drift signals.",
      "Escalation criteria were tuned for severe spikes, not cumulative risk.",
    ],
    interventions: [
      "Added cumulative-risk thresholds to monitoring cadence.",
      "Introduced weekly drift review with release-level attribution.",
      "Linked monitoring alerts to mandatory remediation checkpoints.",
    ],
    outcomes: [
      "Cumulative exposure reduced through earlier intervention timing.",
      "Monitoring shifted from incident reaction to trend governance.",
      "Release decisions became grounded in volume-aware risk evidence.",
    ],
  },
  {
    slug: "handoff-friction",
    label: "Case Analysis · Published",
    title: "Handoff Friction",
    summary:
      "The system identified risk correctly but delayed appropriate routing, increasing user vulnerability window.",
    details: [
      "Risk signals were detected, but response handling remained conversational for too long before initiating an appropriate handoff path.",
      "This created a vulnerability window where users were acknowledged but not routed to a safer next step quickly enough.",
      "Governance work focused on reducing delay between detection and action in high-sensitivity pathways.",
    ],
    signals: [
      "Correct detection events without timely handoff execution.",
      "Multiple conversational turns occurred after threshold crossing.",
      "Routing language lacked decisive transition structure.",
    ],
    interventions: [
      "Bounded maximum turns after high-risk threshold detection.",
      "Standardized handoff language with explicit next-step framing.",
      "Added monitoring checks for detection-to-action latency.",
    ],
    outcomes: [
      "Time-to-handoff shortened for high-risk interactions.",
      "Routing behavior became more consistent across model variants.",
      "Detection performance translated more reliably into safe action.",
    ],
  },
] as const;

export type WritingEntry = (typeof WRITINGS_INDEX)[number];
export type CaseStudyEntry = (typeof CASE_STUDIES_INDEX)[number];
