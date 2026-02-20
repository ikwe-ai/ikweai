export const WRITINGS_INDEX = [
  {
    slug: "before-the-violation",
    label: "Opinion · Published",
    title: "Before the Violation",
    href: "/research/writings/before-the-violation",
    cta: "Read full writing →",
    summary: "Why behavioral safety must be measured before visible policy failure, not only after it.",
    excerpt: [
      "Most organizations still treat behavioral failure as a post-incident problem. That delay is the governance gap. By the time a visible violation appears, institutional trust has already been consumed.",
      "The practical question is not whether a model can sound empathetic. The practical question is whether it can consistently avoid high-risk behavior under pressure, ambiguity, and emotionally loaded context.",
    ],
  },
  {
    slug: "ai-governance-is-becoming-a-compliance-issue",
    label: "Canon Essay · Published",
    title: "AI Governance Is Becoming a Compliance Issue",
    href: "/research/writings/ai-governance-is-becoming-a-compliance-issue",
    cta: "Read full essay →",
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
    summary:
      "An essay on interruption, cumulative risk, and how institutional trust is built through repeated operational choices.",
    excerpt: [
      "History is shaped by paths, not headlines. Harm compounds through tolerated distortion, and repair compounds through deliberate interruption.",
      "Integrity is not declared once. It is constructed through recurring governance decisions that hold under pressure.",
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
      "Public release includes conceptual framing and governance implications. Full publication follows the next release cycle.",
    ],
  },
] as const;

export const CASE_STUDIES_INDEX = [
  {
    slug: "authority-drift",
    label: "Case Analysis",
    title: "Authority Drift",
    summary:
      "Confidence signaling outpaced safe-role boundaries and required governance correction.",
    details: [
      "In this trajectory, language certainty increased while role boundaries became less explicit across turns.",
      "Risk rose because the system's confidence cues were interpreted as authority in a high-sensitivity context.",
      "Remediation focused on boundary reinforcement, grounding rules, and escalation guardrails.",
    ],
  },
  {
    slug: "emotional-escalation",
    label: "Case Analysis",
    title: "Emotional Escalation",
    summary:
      "Soothing language obscured rising risk without adequate de-escalation structure.",
    details: [
      "The interaction remained emotionally validating while risk indicators increased over time.",
      "Affect quality looked strong, but trajectory safety weakened due to missing interruption and redirect controls.",
      "Remediation added turn-level drift detection and explicit de-escalation routing.",
    ],
  },
  {
    slug: "founder-as-safety-mechanism",
    label: "Case Analysis",
    title: "Founder-as-Safety-Mechanism",
    summary:
      "Safety depended on undocumented manual intervention rather than durable governance controls.",
    details: [
      "Manual intervention corrected risky behavior in practice, but those interventions were not captured as system rules.",
      "Operational safety depended on individual judgment instead of auditable controls.",
      "Remediation replaced ad hoc intervention with documented governance logic and release controls.",
    ],
  },
] as const;

export type WritingEntry = (typeof WRITINGS_INDEX)[number];
export type CaseStudyEntry = (typeof CASE_STUDIES_INDEX)[number];
