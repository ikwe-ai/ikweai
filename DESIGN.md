# Ikwe.ai — Site Design & Style Guide

> **Purpose:** Single source of truth for design decisions, copy standards, and UX patterns across ikwe.ai. Read this before any session touching site files so we don't re-litigate decisions.

---

## 1. Brand Colors

Defined as CSS variables in every page's `<style>` block:

| Variable | Hex | Used for |
|---|---|---|
| `--navy` | `#191A2E` | Primary background (hero, nav, dark sections) |
| `--coral` | `#F7A192` | Primary accent, CTAs, highlights |
| `--lav` | `#B894F6` | Secondary accent, lavender callouts |
| `--cream` | `#F6D993` | Tertiary accent |
| `--teal` | `#0F6E56` | Teal CTA buttons, success |
| `--teal-light` | `#E1F5EE` | Teal callout backgrounds |
| `--teal-mid` | `#5DCAA5` | Eyebrow labels, positive scores |
| `--gray-soft` | `#F7F6F2` | Section backgrounds (alternating light) |
| `--gray-mid` | `#888780` | Muted body text |
| `--text` | `#1A1A2E` | Default body text |
| `--text-muted` | `#5a5a6e` | Secondary body text |

Score/status colors:
- Green (pass): `var(--teal-mid)` / `#5DCAA5`
- Amber (caution): `#E08C00`
- Red (fail): `#E24B4A` / `var(--red-mid)`

---

## 2. Typography

**Fonts:** DM Serif Display (headings) + DM Sans (body/UI)

```css
font-family: 'DM Serif Display', serif;  /* h1, h2, h3, pull-quotes */
font-family: 'DM Sans', sans-serif;      /* everything else */
```

**Heading sizes (global defaults — do NOT override unless section-specific):**

```css
h1 { font-size: clamp(2.2rem, 5vw, 3.4rem); }   /* body sections only */
h2 { font-size: clamp(1.7rem, 3.5vw, 2.4rem); }
h3 { font-size: 1.25rem; }
```

**Page-specific overrides:**

| Context | h1 size | Notes |
|---|---|---|
| Homepage hero | `clamp(1.75rem, 3vw, 2.5rem)` | Two-column layout; must stay compact |
| Sub-page heroes (how-it-works, case-study) | `clamp(1.6rem, 3vw, 2.1rem)` | Compact title band, `padding: 1.5rem 2rem 1.25rem` |
| Report page hero | `clamp(1.55rem, 3.5vw, 2.2rem)` | Fraunces font, `padding: 2.25rem 2rem 2rem` |
| Terms / Privacy | `clamp(1.8rem, 3.5vw, 2.4rem)` | `padding: 2rem 0 1.75rem` |
| Contact | No h1 in hero — card layout, `padding: 2.5rem 2rem 3rem` |

---

## 3. Navigation

**Standard nav links (in order):**
1. The Problem (anchor `#moment` on homepage; links back from sub-pages)
2. How It Works (`/how-it-works`)
3. Work With Us (`/how-it-works`) — highlighted coral `color: var(--coral)`
4. Case Study (`/case-study`)
5. Sample Report (`/ikwe-sample-report-public.html`)
6. Get in touch (`/contact`)
7. **CTA button:** "Request a Report" → `/report` (coral filled button)

**Mobile menu** mirrors the same links, CTA becomes full-width coral block.

**Rule:** Never link to `hello@ikwe.ai` in nav. Never use `stephanie@ikwe.ai` anywhere public-facing.

---

## 4. Hero Sections

### Homepage hero — two-column layout

```html
<section id="hero">
  <div class="hero-grid">
    <div class="hero-text-col">
      <span class="eyebrow">EQ Safety Benchmark · Ikwe.ai</span>
      <h1>...</h1>
      <p class="lead">...</p>
      <div class="cta-group">...</div>
      <div class="hero-badges">...</div>
    </div>
    <div class="hero-preview-col">
      <!-- mini report score card -->
    </div>
  </div>
</section>
```

CSS:
```css
#hero { background: var(--navy); padding: 2.5rem 2rem; }
.hero-grid { display: grid; grid-template-columns: 1fr 340px; gap: 2.5rem; align-items: center; max-width: 960px; margin: 0 auto; }
@media (max-width: 820px) { .hero-grid { grid-template-columns: 1fr; } .hero-preview-col { display: none; } }
#hero h1 { color: var(--white); font-size: clamp(1.75rem, 3vw, 2.5rem); margin-bottom: .85rem; }
#hero .lead { color: rgba(255,255,255,.65); max-width: 460px; font-size: .97rem; }
#hero .cta-group { justify-content: flex-start; margin-top: 1.25rem; }
```

### Sub-page heroes — compact title band

All sub-pages (how-it-works, case-study, report, terms, privacy, contact, etc.) use this pattern:

```css
/* Hero padding: tight */
padding: 2.5rem 2rem 2rem;

/* h1: smaller than body default */
font-size: clamp(1.8rem, 3.5vw, 2.4rem);

/* No CTA buttons in hero — move them to the first content section */
```

**Reference page:** `report.html` — already has the correct compact hero. Match this.

**Rule:** Heroes are wayfinding, not content. Keep them tight. The reference is `padding: 2.25rem` (report.html). Sub-page heroes should feel like a page title band, not a landing zone.

---

## 5. Copy Standards

### Language rules (apply site-wide, every page)

| ❌ Never use | ✓ Always use |
|---|---|
| call / calls | conversation / conversations |
| sales call | sales pitch |
| kickoff call | kickoff conversation |
| debrief call | debrief conversation |
| stephanie@ikwe.ai | hello@ikwe.ai |
| fear-based language ("you're in trouble", "now you're explaining to a lawyer") | outcome-focused, empowering language |

### Tone
- Direct, confident, not alarmist
- Third-person institutional for the benchmark ("The EQ Safety Benchmark...")
- First-person plural for the company ("We measure...", "Ikwe audits...")
- No hedging language in section headers

### Eyebrow labels
- All-caps, `.75rem`, letter-spacing `.1em`, color: `var(--teal-mid)` (light sections) or `var(--coral)` (dark/navy sections)

---

## 6. Legal / Disclaimer Notices

**Rule: Notices go at the bottom of the page, NEVER in the hero.**

For illustrative content (case study, representative scenarios):

```html
<!-- Place BELOW the </footer> tag -->
<div style="background:var(--navy);border-top:1px solid rgba(255,255,255,.06);padding:.75rem 2rem;text-align:center;font-size:.72rem;color:rgba(255,255,255,.25);line-height:1.6;">
  Illustrative case study. Company name, details, and figures are representative of the type of work Ikwe.ai performs. Not based on a single client.
</div>
```

This pattern: fulfills legal disclosure, doesn't harm SEO signals, doesn't impede user first impression.

---

## 7. Page Callout Banners

Used to drive cross-page navigation contextually within sections.

```html
<!-- Teal variant (e.g., link to case study) -->
<div class="page-callout callout-teal">
  <div class="pc-text">
    <p class="pc-eyebrow">Case Study</p>
    <strong>See it in action</strong>
    <span>How a mid-size healthcare platform went from Tier 3 to certified.</span>
  </div>
  <a href="/case-study" class="pc-link">Read the case study →</a>
</div>

<!-- Lavender variant (e.g., link to how it works) -->
<div class="page-callout callout-lav">
  <div class="pc-text">
    <p class="pc-eyebrow">How It Works</p>
    <strong>Ready to understand the process?</strong>
    <span>From Signal Scan to Full Report — everything in one place.</span>
  </div>
  <a href="/how-it-works" class="pc-link">See the process →</a>
</div>
```

Three variants: default (navy/dark), `callout-teal`, `callout-lav`.

---

## 8. Pricing Tiers

Canonical product names and prices:

| Product | Price | Description |
|---|---|---|
| Signal Scan | $500 | 79 scenarios — fast read on key risks |
| Deep Scan | $1,000 | 300+ scenarios — full benchmark coverage |
| Full Report | $2,500 | Board-ready deliverable with scoring + evidence |
| Remediation | Scoped | Fix + verify — custom engagement |

**Chips UI pattern** (used in homepage "How It Works" section):

```html
<div class="pricing-chips">
  <div class="pricing-chip"><span class="pc-name">Signal Scan</span><span class="pc-price">$500</span><span class="pc-detail">79 scenarios</span></div>
  <div class="pricing-chip"><span class="pc-name">Deep Scan</span><span class="pc-price">$1,000</span><span class="pc-detail">300+ scenarios</span></div>
  <div class="pricing-chip"><span class="pc-name">Full Report</span><span class="pc-price">$2,500</span><span class="pc-detail">Board-ready</span></div>
  <div class="pricing-chip pricing-chip-ghost"><span class="pc-name">Remediation</span><span class="pc-price">Scoped</span><span class="pc-detail">Fix + verify</span></div>
</div>
```

---

## 9. EQ Safety Benchmark — 8 Dimensions

Canonical dimension names (use exactly as written):

1. Crisis Recognition
2. Emotional Attunement
3. Boundary Enforcement
4. Escalation Protocol
5. Trauma-Informed Language
6. Dependency & Disengagement
7. Bias & Equity
8. Consent & Transparency

---

## 10. Score Display Patterns

For any score/result visualization:

```html
<!-- Tier chip -->
<span class="tier-chip">⚠ Tier 3 — Needs Remediation</span>

<!-- Score row -->
<div class="spr-row">
  <span class="spr-label">Crisis Recognition</span>
  <span class="spr-val spr-red">41%</span>  <!-- spr-red / spr-amber / spr-green -->
</div>
```

Color thresholds (use consistently):
- `spr-green` (≥80%): `var(--teal-mid)`
- `spr-amber` (50–79%): `#E08C00`
- `spr-red` (<50%): `#E24B4A`

Tier labels:
- Tier 1: Certified Safe (80+)
- Tier 2: Conditional Pass (65–79)
- Tier 3: Needs Remediation (<65)

---

## 11. Section Structure & Scroll Discipline

**Rule:** The homepage is a curated index — not a full explainer. Sub-pages carry the detail.

| Homepage section | What it covers | Detail lives in |
|---|---|---|
| Hero | What Ikwe does, proof badges | — |
| The Moment | Why behavioral safety matters (2 scenarios) | — |
| How It Works | 3 steps + pricing chips + callout to how-it-works.html | `/how-it-works` |
| The Benchmark | 8 dimensions compact list + callout to case study | `/case-study` |
| Who It's For | 4 audience types, one sentence each | — |
| Sample Report | Preview card + link | `/ikwe-sample-report-public.html` |
| Proof / Research | One link line to methodology | research pages |
| Drift Monitor | Pull-quote band only | — |

**What was removed from homepage** (do not re-add):
- Gap comparison columns (covered by closing lead)
- Drift zone expansion cards (covered by How It Works step 3)
- 3 study methodology cards (detail only needed in research context)
- 8 dimension hover/QA cards (detail for sub-pages)

---

## 12. Git Workflow

**Known issue (recurring):** The sandbox cannot delete `.git/index.lock` or `.git/HEAD.lock` on macOS mounted volumes.

**Before every git commit from the sandbox, Stephanie must run from her own Terminal:**
```bash
rm -f ~/Documents/GitHub/ikweai/.git/index.lock ~/Documents/GitHub/ikweai/.git/HEAD.lock
```

Then the sandbox can run:
```bash
cd /sessions/.../mnt/GitHub/ikweai
git add -A
git commit -m "..."
git push origin main
```

---

## 13. Security & Privacy Rules

- **Public email:** `hello@ikwe.ai` everywhere. Never `stephanie@ikwe.ai` in visitor-facing content.
- **`config.js` is gitignored** — never commit real tokens.
- **`NOTION_TOKEN`** must stay server-side in Netlify environment variables only.
- **Sensitive names** (Technical Advisor, GELI, Jennington Group): use redacted language on any externally shareable page. Full names are fine in internal Notion pages.
- **Internal details** (dimension scoring weights, scenario library specifics, system prompt architecture): never share outside privileged conversation.
- GitHub Actions workflow files may use `stephanie@` — those are internal operational alerts only.

---

## 14. File Map

| File | Purpose |
|---|---|
| `index.html` | Homepage — primary entry point |
| `how-it-works.html` | Process + FAQ — full explainer for engaged visitors |
| `case-study.html` | Illustrative client journey — proof of concept |
| `report.html` | Report request form / intake |
| `ikwe-sample-report-public.html` | Public sample report — full scoring output |
| `contact.html` | Contact page |
| `terms.html` | Terms of service |
| `privacy.html` | Privacy policy |
| `404.html` | Error page |
| `order.html` | Order/payment flow |

---

*Last updated: 2026-05-20. Update this file whenever a design decision is made or copy standard changes.*
