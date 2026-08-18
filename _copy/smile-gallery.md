# COPY - `smile-gallery`

type: T-INDEX · funnel_role: F3 · filter_fields: category, tags · sort: category, recency
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/smile-gallery.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

Written to the T-INDEX exemplar, `_copy/reviews.md`. The governing rule holds here too: a filter tab
activates only when at least one real entry sits behind it, and an empty index says so plainly
rather than dressing itself with samples.

---

## §1 - hero-filter  [XS]
required IDs: D-SEO-002

**H1:** Smile Gallery

**Sub:** A gallery of before and after results from our own patients, sorted by treatment. None is published yet.

**Empty state:** Nothing appears here unless it is a real patient result with written consent on file.

**Filters:** by treatment category · by tag

⚠FLAG: this page is live and empty on the current site. It carries an H1 and no gallery, on a practice selling veneers, whitening, implants and orthodontics.

⚠FLAG: no filter control ships while the grid is empty. Each category switches on when a real entry sits behind it. A filter with nothing behind it is a promise the page cannot keep.

---

## §2 - featured-case  [S]
required IDs: D-POSITION-004

⚠OWNER PLACEHOLDER: §G-9 is BLOCKING for this page. No real, consented before and after photography exists in any captured source.

The featured slot ships empty, and the page ships with a noindex directive, per the decision at §G-9. Both hold until real consented images arrive, with patient permission on file.

What can be said today is structural, not visual. Cosmetic work here is planned and delivered in house, by the same named clinicians who treat what sits underneath the smile.

One practice, one roster, seven offices. A featured case is meant to show what that produces, and nothing stands in for it until a real one is consented.

⚠FLAG: no patient, quote, metric or clinical outcome is invented here. `proofPolicy.real_only_for` names patient outcomes and clinical results as fabrication forbidden.

⚠FLAG: `proofPolicy` does permit illustrative imagery when it is flagged and noindexed. Inside a gallery an illustration still reads as a patient result, so it is declined here.

---

## §3 - list-grid (repeating item)  [S per item]
required IDs: D-PAGE-003

**Item template:** before image · after image · treatment category · tags · the treatment page it links to
Per item fields carry `data-cat` and `data-tags`, so the filters in §1 bind to real values.

⚠OWNER PLACEHOLDER: no consented patient photograph has been captured to disk. This grid therefore ships empty, with every filter category withheld.

Per the brief, a filter category never ships with zero items. Categories switch on one at a time, as real entries arrive for each of them.

**What each supplied case needs:** the before image, the after image, the treatment performed, the office, and written patient consent on file.

⚠FLAG: do not populate this grid with sample, stock or representative results. A plausible invented result is worse than an empty grid, because it reads as evidence.

⚠FLAG: sort is category first, then recency. Recency uses the date the case was supplied, which means every item carries a real date or it does not ship.

---

## §4 - category-routing  [XS]
required IDs: D-IA-003

The grid is empty, so the routing carries this page. Each destination below describes the work in words, with no invented result attached to it.

**Cosmetic dentistry.** The hub for the work this gallery would show.
→ Cosmetic dentistry

**Porcelain veneers.** Shape, shade and spacing on the front teeth.
→ Porcelain veneers

**All services.** General, cosmetic, restorative, surgical, periodontic and orthodontic care, in house.
→ Services

**Patient reviews.** The Birdeye record, with its office scope attached to it.
→ Reviews

**Ask about your own case.** Tell us what you want changed and we will tell you what it involves.
→ Contact

⚠FLAG: every destination above exists in `sitemap.yaml` and in `link-funnel-map.md` for this page. No category routes to a page that does not exist.

⚠OWNER: once real cases arrive, each one links back to the treatment page it came from. That link is what makes the category filter worth having.

---

## §5 - closing-cta  [XS]
required IDs: D-OFFER-006

You can still ask what a result would involve for your teeth. Book a consultation, or call the office nearest you.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

⚠FLAG: the secondary CTA resolves to that office's own number, never a generic line, per `routeRules.phone_policy`.

---

### Compliance notes carried into this page

- The grid ships empty rather than sampled, per the T-INDEX rule. A filter category activates only when a real entry sits behind it.
- The hero states plainly that nothing is published yet, and carries a patient-facing empty state. No filter control ships while the grid is empty.
- The featured slot and the page carry the ⚠OWNER PLACEHOLDER and noindex decision recorded at §G-9 in `decisions-ledger.md`.
- The placeholder is a placeholder because no consented before and after photograph exists in any captured source. None is invented in its place.
- The illustrative-imagery allowance in `proofPolicy` is declined on this page, because inside a gallery an illustration reads as a patient outcome.
- No patient, quote, metric, treatment time or clinical result is stated anywhere, per `proofPolicy.real_only_for`.
- No treatment price is stated. All treatment is quote only, per `pricing.treatment_prices_published: false`.
- No superlative, ranking or award claim appears.
- No competitor is named. The framing is against a model, never a practice, per `competitorFraming`.
- No device or technology is named. Only SIROlaser and digital X-rays are verifiable, per `content-bible.md` §2.
- No address, ZIP, phone number or hours row is stated on this page, so nothing is retyped from memory.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH. No banned-vocab string, per G-BANNED.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
