# COPY - `cosmetic-dentistry`

type: T-HUB · funnel_role: F2
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/cosmetic-dentistry.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero-category-outcome  [S]
required IDs: D-SEO-002, D-IA-002

**H1:** Cosmetic Dentistry in Las Vegas

**Sub:** Work on how your smile looks, handled by the same team that treats what sits underneath it. Start with what you see in the mirror.

**Anchor strip:** Porcelain veneers · Teeth whitening

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

## §2 - why-this-area  [M]
required IDs: D-POSITION-009

A cosmetic result rests on the tooth beneath it. Shade, shape and spacing all depend on what the exam finds first.

Where cosmetic work is split out, a separately branded studio does the visible part and another practice treats the rest.

We do both in house, at our own offices, with named clinicians. One roster covers both, so the person planning veneers works in the same practice as the rest.

---

## §3 - sub-area-blocks  [S each]
required IDs: D-PAGE-003

**Porcelain veneers.** Thin shells bonded to the front of a tooth, to change its shape, shade or spacing.
→ Porcelain veneers

**Teeth whitening.** Whitening planned around the enamel and the restorations you already have.
→ Teeth whitening

*Image slot per block:* a real clinical or practice photograph. Not stock. Not a grey box.

⚠FLAG: each block above routes to a page that exists in the sitemap. No block ships without a live destination.

⚠OWNER PLACEHOLDER: our smile gallery page carries photographs, captured 30 July 2026. None is labelled as a before and after pair, and none carries a consent record. This hub does not route to it until consented patient images arrive, per `proofPolicy`. No sample or illustrative result is shown in its place.

---

## §4 - proof-data-point  [S]
required IDs: D-INCUMBENT-007

The ADA Health Policy Institute reports that 55% of adults aged 65 and older have no dental benefits, fetched 30 July 2026. Dental visits track coverage directly. In 2023, 53% of privately insured adults had a dental visit, against 16% of those with no dental insurance.

That is the reasoning behind our entry exam price and its lower senior rate. It is a reason to come in, not a scare statistic.

⚠OWNER PLACEHOLDER: no expiry, exclusions or senior age threshold is published for the entry offer. The terms line stays a placeholder until the owner supplies them, and no urgency framing ships.

Our Lake Mead office is rated 4.5 stars across 506 patient reviews on Birdeye, fetched 30 July 2026.

⚠OWNER: that rating is the Lake Mead record only. It is not restated as a practice wide figure anywhere on this page. Supply the practice wide number and nominate the platform of record.

---

## §5 - cross-link-rail  [XS]
required IDs: D-IA-004

Other areas of care: General dentistry · Restorations · Oral surgery · Periodontics · Orthodontics
Also: new patient offer · all seven offices · contact

---

## §6 - routing-band  [XS]
required IDs: D-PAGE-007

**Find the office nearest you.** Seven offices across the valley:

- Lone Mountain, 7469 W. Lake Mead Blvd., Suite 270, Las Vegas 89128
- Sunrise Manor, 1825 S. Nellis Blvd., Las Vegas 89107
- Summerlin, 8961 W. Sahara Ave., Suite 108, Las Vegas 89117
- North Las Vegas, 5195 Camino Al Norte Rd., North Las Vegas 89031
- Henderson, 2633 W. Horizon Ridge Pkwy., Suite 130, Henderson 89052
- North Decatur, 6311 N. Decatur Blvd., Suite 140, Las Vegas 89130
- Blue Diamond, 5095 S. Blue Diamond Rd., Suite 105, Las Vegas 89139

⚠OWNER: the Sunrise Manor ZIP conflicts on the live site. 89107 is carried here from `client-rules.json` contactData, pending confirmation against 89104 in the booking block. NAP consistency depends on resolving it.

---

## §7 - closing-cta  [XS]
required IDs: D-OFFER-006

Find out what veneers or whitening would actually involve for your teeth. Book an appointment, or call the office you would visit.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

⚠FLAG: the secondary CTA resolves to that office's own number, never a generic line, per `routeRules.phone_policy`.

---

### Compliance notes carried into this page

- Every address is copied from `client-rules.json` contactData. None is retyped from memory or from the live site.
- No treatment price is stated. Veneers and whitening are quote only, per `pricing.treatment_prices_published: false`.
- The 55% figure names the ADA Health Policy Institute and carries its fetch date, per `content-bible.md` §3. The 53% and 16% visit rates come from that same source and date. The citation stops at what the source states. No claim is made about care being postponed or about findings going untreated, because the source does not establish it.
- No cross-office record or shared chart claim appears, including by contrast. One practice, one clinical roster and seven offices are verified. A shared record system across the offices is not verified in the handoff, so no such claim ships.
- §2 describes the market's model conditionally. No competitor fact, price or capability is asserted here, and no prevalence is claimed, per `competitorFraming`.
- The review figure keeps its platform, its office scope and its date. It is never aggregated, per `content-bible.md` §6.
- No superlative, ranking or award claim appears.
- No device or technology is named on this page. Only SIROlaser and digital X-rays are verifiable, per `content-bible.md` §2.
- §2 frames against the referral and separate branding model, never a named competitor, per `competitorFraming`.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH. No banned-vocab string, per G-BANNED.
- Every routing block names a destination that exists in `sitemap.yaml`. The smile gallery is held back rather than linked, per `proofPolicy`.
- The gallery placeholder stands because no captured image carries a consent record, and `proofPolicy` forbids inventing one.
- The entry offer is referenced without a figure and without an expiry. Its terms ship as a placeholder, per `pricing.offer_terms` and `pricing.limited_time_framing_allowed: false`.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
