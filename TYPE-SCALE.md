# ikwe.ai type scale
### Established July 28, 2026. Use this instead of hand-picking sizes.

The site had **28 distinct font sizes on the homepage alone**, including half-pixel values
(13.5, 14.5, 12.5, 10.5, 9.5) and thirty declarations under 14px. That is the single clearest
signature of machine-default design: no scale, every size nudged individually until it looked
right in isolation. The fix is not new fonts. It is fewer sizes, used consistently.

## The scale

| Step | Size | Line height | Use |
|---|---|---|---|
| Micro | **13px** | 1.5 | Eyebrows, badges, legal, table headers. This is the FLOOR. Nothing smaller, ever. |
| Small | **15px** | 1.55 | Card body, captions, table cells, secondary notes |
| Secondary | **16px** | 1.55 | Denser body copy inside components |
| Body | **18px** | 1.7 | Default. Set on `body`. |
| Lead | **20px** | 1.6 | Section lead paragraphs, intro copy |
| H4 / H3 | **24px** | 1.25 | Sub-headings |
| H2 | **clamp(28px, 3.4vw, 38px)** | 1.16 | Section headings |
| H1 | **clamp(30px, 3.8vw, 44px)** | 1.14 | Page headline, once per page |

Eight steps. If a new element needs a size, it takes one of these. If none fits, the element
is probably wrong, not the scale.

## Measure (line length)

| Element | Max width | Why |
|---|---|---|
| Body paragraph | **68ch** | Was 76ch, which runs past the comfortable range |
| Lead paragraph | **60ch** | Larger type needs a shorter line |
| H1 | **22ch** | Forces a deliberate break instead of an accidental one |
| H2 | **34ch** | Display type reads worse the wider it gets |

## The rules that matter more than the numbers

1. **Small text needs MORE leading, not less.** Cramped small type was the main readability
   complaint. Every line height under 1.45 on body-sized text was raised. Small and tight is
   the worst combination available.
2. **More space above a heading than below it.** A heading belongs to the content that follows,
   not the content above. `h2` gets `margin-top: 1.1em`, `h3` gets `1.5em`.
3. **Eyebrow tracking is now 0.13em, down from 0.26em.** Extreme letter-spacing on tiny uppercase
   mono labels is the most recognizable machine-design tic on the web right now. Keeping the mono
   but halving the tracking and raising the size to 13px keeps the editorial signal and drops the
   costume.
4. **Do not add a ninth size.** Drift starts with one exception.

## Reference points worth studying

Not to copy, and none of these were measured live, so treat as direction rather than spec.

- **Oxide Computer** for restrained technical typography: few sizes, a lot of air, labels that
  organize without shouting. The closest tonal match to an instrument company.
- **Works in Progress** for editorial hierarchy on long argument-driven pages: clear steps
  between heading levels, disciplined measure, no decoration competing with the text.
- **Stripe Press** for how a serif display face and a workhorse sans coexist without either
  one performing.

What all three have in common, and what ikwe.ai now has: a small number of type styles used
repeatedly, rather than a large number used once each.

## What this pass did NOT do

- Body copy still has too many assumptives for an unpioneered category. That is a writing pass.
- The four open design-pass findings are untouched: the engagement-ladder contradiction, the
  retired "How it works" page still linked from the footer, the serif question
  (DM Serif Display live vs Cormorant Garamond proposed), and the colour roles.
- Colour, spacing between sections, and component design were left alone. This was type only.
