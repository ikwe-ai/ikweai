# Ikwe.ai — Copy Pass 2: Trust Record Language System
## Target file: `src/pages/Index.tsx`
## All changes are exact string replacements unless noted as structural.

---

## CHANGE 1 — Hero tag

**Old:**
```
"The Standard for Emotionally Sensitive AI"
```
**New:**
```
"The Behavioral Safety Standard for Human-Facing AI"
```

---

## CHANGE 2 — Hero subtitle

**Old:**
```
If your system interacts with users in vulnerable moments, you need evidence of how it
behaves under emotional stress.
```
**New:**
```
If your system interacts with humans, you need an independent record of whether it can
be trusted — before it causes harm, liability, or a public failure.
```

---

## CHANGE 3 — Hero subtle line

**Old:**
```
Not what it says. How it behaves.
```
**New:**
```
Not capability. Trustworthiness.
```

---

## CHANGE 4 — Hero stats (reorder + relabel)

The three `<article className="home-hero-stat">` blocks need to be **reordered and relabeled** to match the mockup.

Replace the entire `<div className="home-hero-stats">` block with:

```tsx
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
```

> Note: Stat 1 stays. Stat 2 and Stat 3 swap positions. "of systems tested fail" → "of systems fail the binary Safety Gate". "outputs evaluated" moves to position 3.

---

## CHANGE 5 — PageMeta description

**Old:**
```
Independent behavioral safety validation for human-facing AI systems. Built to detect
behavioral drift under emotional pressure before harm, liability, or headlines.
```
**New:**
```
The behavioral safety standard for human-facing AI. An independent safety record that
proves your system can be trusted with humans — before harm, liability, or headlines.
```

---

## CHANGE 6 — Core callout (#oneidea section)

Locate the `<div className="home-core-callout">` block. Replace its two `<p>` children:

**Old:**
```tsx
<p>Companies build AI systems.</p>
<p>
  We test how those systems behave when people are emotionally vulnerable and provide an
  independent, documented record of what we find.
</p>
```
**New:**
```tsx
<p>Companies build AI systems.</p>
<p>
  Ikwe produces the independent safety record that proves those systems can be trusted with humans.
</p>
```

---

## CHANGE 7 — Benchmark section callout highlight

**Old:**
```
"Framework → baseline → outputs"
```
**New:**
```
"Binary Safety Gate. Eight weighted dimensions. One trust record."
```

---

## CHANGE 8 — Safety Gate section subtext

**Old:**
```
The first question we answer: does your system pass under high-impact stress scenarios?
Before dimensional scoring, we determine whether harmful behavioral patterns appear at all.
```
**New:**
```
The first question isn't how well it performs. It's whether it's safe to deploy with
humans at all. Before dimensional scoring begins, we determine whether harmful
behavioral patterns appear at all.
```

---

## CHANGE 9 — Safety Gate pullquote

**Old:**
```
"44.9% of systems tested fail the Safety Gate."
```
**New:**
```
"44.9% of systems fail the binary Safety Gate. The first question is never performance.
It's whether the system is safe to deploy with humans."
```

---

## CHANGE 10 — #output section title ("What You Receive")

**Old:**
```
What you receive is a decision, not just a document.
```
**New:**
```
What you receive is a safety record, not just a score.
```

---

## CHANGE 11 — Tiers array (structural — add trust record line)

Replace the entire `tiers` constant with:

```tsx
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
```

Then update the tier render to destructure and display the trust record line. Replace the tiers map block:

**Old:**
```tsx
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
```
**New:**
```tsx
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
```

> CSS note: add `.home-tier-trust` to `index.css` — a small italic mono line in `--foreground-subtle`, e.g.:
> ```css
> .home-tier-trust {
>   font-family: var(--font-mono);
>   font-size: 0.65rem;
>   letter-spacing: 0.06em;
>   color: hsl(var(--foreground-subtle));
>   font-style: italic;
>   margin-top: 0.35rem;
>   padding-top: 0.35rem;
>   border-top: 1px solid hsl(var(--home-border));
> }
> ```

---

## CHANGE 12 — urgencyItems array

Replace the entire `urgencyItems` constant with:

```tsx
const urgencyItems = [
  "AI liability exposure is moving from edge case to legal precedent",
  "Board-level governance now requires documented behavioral safety evidence",
  "Procurement teams are beginning to require independent safety records",
  "Regulatory expectations are expanding past bias and accuracy into behavioral safety",
  "One trust failure can halt deployment for 18+ months",
] as const;
```

---

## CHANGE 13 — #who pullquote

**Old:**
```
One behavioral incident can halt procurement for 18+ months. The time to establish your
behavioral safety record is before you need it.
```
**New:**
```
One trust failure can halt deployment for 18+ months. The time to establish your
safety record is before you need it.
```

---

## CHANGE 14 — Closing section body copy

**Old:**
```
Technical capability is not the only measure of readiness. Behavioral stability under
pressure determines long-term viability. The systems shaping human lives deserve
something underneath them we can trust.
```
**New:**
```
The systems interacting with humans at scale need something underneath them we can trust.
That record has to come from outside.
```

---

## SUMMARY TABLE

| # | Location | Type | Description |
|---|---|---|---|
| 1 | Hero tag | String swap | "Standard for Emotionally Sensitive AI" → "Behavioral Safety Standard for Human-Facing AI" |
| 2 | Hero subtitle | String swap | Stress framing → trust record framing |
| 3 | Hero subtle | String swap | "Not what it says..." → "Not capability. Trustworthiness." |
| 4 | Hero stats | Reorder + relabel | Swap stat 2/3 positions; update stat 2 label |
| 5 | PageMeta description | String swap | Trust record positioning |
| 6 | Core callout (#oneidea) | String swap | "We test how..." → "Ikwe produces the independent safety record..." |
| 7 | Benchmark highlight | String swap | "Framework → baseline → outputs" → "Binary Safety Gate. Eight weighted dimensions. One trust record." |
| 8 | Safety Gate subtext | String swap | "The first question we answer..." → trust gate framing |
| 9 | Safety Gate pullquote | String swap | Updated to trust framing |
| 10 | #output title | String swap | "decision, not just a document" → "safety record, not just a score" |
| 11 | Tiers array + render | Structural | Add trust record line to each tier; add `home-tier-trust` CSS class |
| 12 | urgencyItems | Array replace | 5 new urgency bullets using liability/procurement/regulatory/trust language |
| 13 | #who pullquote | String swap | "behavioral incident" → "trust failure" |
| 14 | Closing copy | String swap | New canonical closing line |

---

## NO-CHANGE CONFIRMATION

The following elements are intentionally preserved as-is:
- Hero title: `The Behavioral Safety Layer for Human-Facing AI.` ✓
- CTA buttons: "Request Evaluation" (primary) + "View the Benchmark" (secondary) ✓
- Hero title `<em>` italic treatment on last line ✓
- `closingProps` array: `[["Independent", "No conflict of interest"], ["Quantified", "Scored, not subjective"], ["Longitudinal", "Tracks drift over time"]]` ✓
- All section IDs (anchor links) ✓
- All imports ✓
- `governanceRows`, `exposurePills`, `driftZones`, `flowSteps`, `architectureStackTop/Bottom`, `audiencePills`, `dimensions`, `deliverables`, `audienceItems`, `engagementLevels` — all unchanged ✓
- Section heading `#benchmark`: "Eight dimensions. One clear answer." — unchanged ✓
- Section heading `#architecture`: "The missing layer in AI governance." — unchanged ✓
- All `#system` phase descriptions — unchanged ✓
