# COPY - `reviews`

type: T-INDEX · funnel_role: F3 · filter_fields: category, tags · sort: category, recency
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/reviews.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

**EXEMPLAR for T-INDEX.** The bar for `smile-gallery`. The governing rule for this type is that the
index is only as honest as its items: a filter tab activates ONLY when at least one real entry sits
behind it, and an empty index says so plainly rather than dressing itself with samples.

---

## §1 - hero-filter  [XS]
required IDs: D-SEO-002

**H1:** Patient Reviews

**Sub:** Our rating on a named platform, with the office and the date attached. No individual review text is published here yet.

**Empty state:** No review appears here until it carries a reviewer, a platform, a date and an office.

**Filters:** by office · by treatment category

⚠FLAG: no filter control ships while the list is empty. Each control switches on when a real entry sits behind it, per the T-INDEX rule.

⚠FLAG: this page is NET-NEW. The current site has no dedicated reviews page. It carries one quote sitewide, with no platform, no date and no office attached.

---

## §2 - the-record  [M]
required IDs: D-POSITION-004

Our Lake Mead office is rated 4.5 stars across 506 patient reviews on Birdeye, fetched 30 July 2026.

That figure is for the Lake Mead office. It is not a practice wide rating, and it is not restated as one anywhere on this site.

⚠OWNER: supply the practice wide figure and nominate the platform of record, or this stays scoped to one office. Per `content-bible.md` §6 the scope is NEVER dropped and figures are NEVER aggregated across offices.

---

## §3 - list-grid (repeating item)  [S per item]
required IDs: D-MARKET-ABSOLUTE-010

**Item template:** review text · reviewer name · platform · date · office
Per item fields carry `data-cat` and `data-tags` so the filters in §1 can drive the grid.

⚠OWNER PLACEHOLDER: no ATTRIBUTED review text exists in the handoff. The one quote the current site carries, from Debra R, has no platform, no date and no office. It cannot fill an item here. Supply reviews that carry all four fields.

⚠FLAG: per the brief, every entry is a real review or the item does not ship. This grid therefore ships EMPTY, with the filter controls inert, until real attributed reviews are supplied. The patient facing statement of that is the empty state in §1.

⚠FLAG: do not populate this grid with sample, representative or illustrative reviews. `proofPolicy.real_only_for` names testimonials, reviews, star ratings and review counts as fabrication forbidden. A plausible invented review is worse than an empty grid, because it reads as evidence.

---

## §4 - why-one-quote-was-not-enough  [S]
required IDs: D-MARKET-STUNNING-010

⚠FLAG: INTERNAL RATIONALE. Do NOT ship as patient facing copy without owner approval.

The previous site repeated one quote, carrying no platform, date or office, across 60 plus pages. Hundreds of real reviews went uncited. A competitor in the captured set gives proof its own dedicated surfaces. That gap is the reason this page exists.

Held here so the reasoning survives into the build. It is not rendered.

---

## §5 - closing-cta  [XS]
required IDs: D-OFFER-006

Read about the team, or book an appointment at the office nearest you.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

### Compliance notes carried into this page

- The only review figure stated is the verified Birdeye aggregate, with its platform, its scope and its fetch date, per `content-bible.md` §1.
- The item grid ships empty rather than sampled. Filters stay inert until a real entry sits behind them.
- The hero says plainly that no individual review text is published yet, and carries a patient facing empty state. Nothing on the page promises review text it does not hold.
- The build rationale for the empty grid sits behind a ⚠FLAG in §3. Build vocabulary is not rendered as patient facing prose.
- The grid is empty because no review carries all four attribution fields, not because no review text exists. The one quote on the current site is named in §3 and described in §4.
- §4 is marked internal and does not render, per the brief's ⚠FLAG.
- No superlative, ranking or award claim appears.
- No competitor is named. §4 frames against a pattern, not a practice.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
