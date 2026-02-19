
## Ikwe.ai — Delta Build Plan

### What Already Exists (Keep As-Is)

The previous build session already completed most of this prompt:
- All 6 canonical routes with correct content
- All 5 redirects (`/audit`, `/proof`, `/inquiry`, `/press`, `/downloads/*`)
- Canonical stat block copy locked correctly on Index and Research pages
- Design system: Fraunces / DM Sans / Space Mono, dark academic tokens
- Shared components: Nav, Footer, StatCard, GatedCallout, PageShell
- Gated artifact model on /reports (no PDFs, form only)
- About: independence, COI policy, versioning posture
- Architecture: public-safe pipeline overview, gated info

### What the New Prompt Adds or Changes

**1. Homepage hero copy — update required**

The current hero headline is:
> "Measuring harm before deployment."

The prompt specifies:
> "You're willing to scale AI fast. Are you willing to scale risk just as fast?"

This needs to change, along with updating the hero body copy to frame Ikwe.ai as "independent behavioral safety evaluations for high-trust environments."

The hero layout also needs to shift to the **two-column split** described: left side copy + CTAs, right side stat card with the 54.7 / 45.3 / n=948 split displayed prominently.

Primary CTA → `/contact`, secondary → `/research` (currently both go to /research and /reports).

**2. Design token alignment — color values**

The prompt specifies exact hex tokens from the canvas file that are slightly different from what the current HSL values resolve to:

```
--bg: #141218       → HSL(270 13% 8%)
--bg-card: #1e1b23  → HSL(270 12% 12%)
--lilac: #A78BFA    → HSL(270 90% 76%) — currently 270 38% 68%
--lilac-bright: #C4B5FD
--text: #E8E4DF
--text-2: rgba(232,228,223,.62)
--text-3: rgba(232,228,223,.38)
--border: rgba(232,228,223,.06)
--border-2: rgba(232,228,223,.12)
--safe: #81B29A
--danger: #E07A5F
```

The lilac colour in particular needs adjusting — `#A78BFA` is a brighter, more violet-tinted purple than the current `hsl(270 38% 68%)`. This will affect all lilac-coloured elements site-wide.

**3. Contact page — field set update**

The prompt specifies `/contact` should be the "Apply for Evaluation" intake with fields:
- name, email, org, **system description**, **domain** (healthcare/HR/etc.), **what they need**, **timeline**
- CTA label: "Apply for Evaluation"

Currently the contact form has: name, email, org, subject (dropdown), message. It needs to be updated to the evaluation-specific field set with a domain selector.

**4. Reports form — `use_case` field**

The prompt specifies the reports form should have: name, email, org, role, **use_case**, notes. Currently it has `purpose` (textarea) which maps to `use_case`, but the label should say "Use Case" and there should be a separate "Notes" field added.

**5. Code comment: canonical content locks**

The prompt asks for a "Content locks" comment block embedded in code. This should live in a shared constants file that all pages can import from, containing the locked copy strings and forbidden variants — making the single source of truth enforceable.

**6. `StatSplit` component — hero stat display**

The two-column hero layout needs a `StatSplit` variant that shows the 54.7% / 45.3% side-by-side as a large display card (not the current 3-column StatCard grid). This is the "right column stat card" described in the prompt.

---

### Technical Implementation Plan

#### Files to modify:

**`src/lib/content-locks.ts`** — NEW
A constants file containing all canonical locked copy strings:
```ts
// CONTENT LOCKS — DO NOT EDIT WITHOUT VERSION BUMP
// ✅ CANONICAL: "54.7% passed the Safety Gate; 45.3% introduced harm."
// ❌ FORBIDDEN: "54.7% introduced harm" / "54.7% failed" / "54.7% flagged"
export const CANONICAL_STAT = { ... }
export const METHODOLOGY_LINEAGE = { ... }
export const ARTIFACT_GATING = { ... }
```

**`src/index.css`** — UPDATE tokens
Replace current HSL approximations with exact hex-derived values matching the canvas:
- Adjust `--background` to match `#141218`
- Adjust `--background-card` to match `#1e1b23`
- Update `--lilac` from `270 38% 68%` to match `#A78BFA` (`270 90% 76%`)
- Add `--lilac-bright`, `--safe`, `--danger` tokens
- Add `--border-2` token

**`tailwind.config.ts`** — UPDATE
Add `lilac-bright`, `safe`, `danger`, `border-2` to the color map.

**`src/components/StatSplit.tsx`** — NEW
A hero-specific stat display component that renders the 54.7/45.3/n=948 split in a prominent card format for the homepage right column, importing from `content-locks.ts`.

**`src/pages/Index.tsx`** — UPDATE
- Change hero from single-column to **two-column layout** (copy left, stat card right)
- Update headline to: "You're willing to scale AI fast. Are you willing to scale risk just as fast?"
- Update body: "Independent behavioral safety evaluations for high-trust environments."
- Update primary CTA to `/contact` ("Apply for Evaluation"), secondary to `/research`
- Use `StatSplit` component in right column
- Import canonical stats from `content-locks.ts`

**`src/pages/Contact.tsx`** — UPDATE
- Relabel page to "Apply for Evaluation"
- Replace generic subject dropdown + message with evaluation-specific fields: system description, domain (select: healthcare / HR / finance / legal / other), what they need, timeline
- Update submit button label to "Apply for Evaluation"

**`src/pages/Reports.tsx`** — UPDATE
- Rename `purpose` field label to "Use Case"
- Add separate "Notes" textarea field

---

### What Does NOT Change

- Nav, Footer, PageShell — already correct
- Research page — already has all required content
- About page — already has independence, COI, versioning
- Architecture page — already public-safe with gated info disclosure
- Routing in App.tsx — all redirects already present
- GatedCallout, StatCard components — already correct

### Acceptance Check Coverage

After changes:
- "54.7% introduced" → zero results (already true; content-locks.ts enforces this going forward)
- `/audit` → `/research` ✅ already done
- `/proof` → `/research` ✅ already done
- `/inquiry` → `/contact` ✅ already done
- Nav identical across all pages ✅ already done
- Typography matches canvas ✅ already done; token update will tighten the colour accuracy
