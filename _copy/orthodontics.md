# COPY - `orthodontics`

type: T-HUB · funnel_role: F2
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/orthodontics.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero-category-outcome  [S]
required IDs: D-SEO-002, D-IA-002

**H1:** Orthodontics in Las Vegas

**Sub:** Straightening teeth for children and adults, in the same practice that handles your cleanings and everything else.

**Anchor strip:** Invisalign · Braces for children · Braces for adults

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

## §2 - why-this-area  [M]
required IDs: D-POSITION-009

Orthodontics is a long run of appointments, not a single visit. The rest of your mouth keeps needing attention the whole time.

Where orthodontics is split out, you are sent to a separately branded orthodontic office. Your cleanings and fillings stay somewhere else entirely.

We treat orthodontics in house, at our own offices, with named clinicians. A cleaning and a bracket check stay inside one practice, not two separate businesses.

---

## §3 - sub-area-blocks  [S each]
required IDs: D-PAGE-003

**Invisalign.** Clear removable aligners, for patients the exam finds suitable for them.
→ Invisalign

**Braces for children.** Fixed braces timed around teeth and jaws that are still developing.
→ Braces for children

**Braces for adults.** Fixed braces for a bite or a crowding problem that never got treated.
→ Braces for adults

*Image slot per block:* a real clinical or practice photograph. Not stock. Not a grey box.

⚠FLAG: each block above routes to a page that exists in the sitemap. No block ships without a live destination.

⚠FLAG: Invisalign is named only as a treatment the practice already publishes a page for, per `sitemap.yaml` and this page's brief. No claim is made about the equipment behind it. Only SIROlaser and digital X-rays may be named as verified technology.

⚠FLAG: no treatment length is stated for any option. Our own Invisalign page publishes an aligner count and a change interval, both captured 30 July 2026. Our braces for children page publishes a headgear wear range. Neither page states how long a case runs, so no treatment length ships here.

---

## §4 - proof-data-point  [S]
required IDs: D-INCUMBENT-007

The ADA Health Policy Institute reports that 55% of adults aged 65 and older have no dental benefits, fetched 30 July 2026. Dental visits track coverage directly.

That is the reasoning behind our entry exam price and its lower senior rate. It buys an assessment, which is where every plan starts.

⚠OWNER PLACEHOLDER: no expiry, exclusions or senior age threshold is published for the entry offer. The terms line stays a placeholder until the owner supplies them, and no urgency framing ships.

Dr. Karthikeyan Subramani completed a Fellowship in Orthodontics and Craniofacial Research at the University of Kentucky in 2012. He holds the Milo Hellman Award from the American Association of Orthodontists, 2019, and an MSc in Orthodontics and Dentofacial Orthopedics.

Captured first-party from the practice's own doctors page on 30 July 2026.

⚠OWNER: confirm the current roster before this ships. The credentials are real and dated, but the doctors page has not been reconfirmed since capture.

---

## §5 - cross-link-rail  [XS]
required IDs: D-IA-004

Other areas of care: General dentistry · Cosmetic dentistry · Restorations · Oral surgery · Periodontics
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

Start with an assessment of the bite, then decide between aligners and braces. Book an appointment, or call the office you would visit.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

⚠FLAG: the secondary CTA resolves to that office's own number, never a generic line, per `routeRules.phone_policy`.

---

### Compliance notes carried into this page

- Every address is copied from `client-rules.json` contactData. None is retyped from memory or from the live site.
- No treatment price is stated. Aligners and braces are quote only, per `pricing.treatment_prices_published: false`.
- The 55% figure names the ADA Health Policy Institute and carries its fetch date, per `content-bible.md` §3.
- No superlative or ranking claim appears. The one award named is a real, dated credential with its source, per `content-bible.md` §3 and `proofPolicy.verified_proof_available`.
- No treatment time, success rate or patient outcome is stated, per `proofPolicy.real_only_for`. The §3 flag names what our own captured pages do publish, so the owner is not asked for figures already on the site.
- No device or technology is claimed. Invisalign appears only as the name of a page the sitemap already carries, and is flagged as such in §3.
- §2 frames against the separately branded specialist model, never a named competitor, per `competitorFraming`.
- §2 states no share or frequency for that model. It opens in the conditional, because this build measures no prevalence and `equivalence-table.md` §2 records orthodontics at all four captured competitors.
- No shared record, chart or patient file across offices is asserted, and none is implied by contrast. Only the verified structure ships: one practice, one roster, one brand, seven offices.
- The fellowship credential is carried from `_handoff/briefs/dr-karthikeyan-subramani.md` §2, with its university and its year.
- No consequence is appended to the ADA figure. Only the two findings the source carries are stated: the 55% share, and that visits track coverage.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH. No banned-vocab string, per G-BANNED.
- All three routing blocks name destinations that exist in `sitemap.yaml`, so no block routes to nothing.
- The entry offer is referenced without a figure and without an expiry. Its terms ship as a placeholder, per `pricing.offer_terms` and `pricing.limited_time_framing_allowed: false`.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
