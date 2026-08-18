# COPY - `oral-surgery`

type: T-HUB · funnel_role: F2
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/oral-surgery.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero-category-outcome  [S]
required IDs: D-SEO-002, D-IA-002

**H1:** Oral Surgery in Las Vegas

**Sub:** Surgical work handled at our own offices, by our own clinicians. You are not sent across town to start again with a stranger.

**Anchor strip:** Wisdom teeth removal · Bone grafting

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

## §2 - why-this-area  [M]
required IDs: D-POSITION-009

Where a general practice does not do surgery, this is the point it hands you off. You get a name, an address and a fresh set of forms.

Referral is not a failing. It is a structure, and the structure adds a handoff between the people who know your mouth.

We do wisdom teeth and bone grafting in house, with named clinicians. The consult, the procedure and the follow up all stay with the same practice.

---

## §3 - sub-area-blocks  [S each]
required IDs: D-PAGE-003

**Wisdom teeth removal.** Assessment and extraction of third molars that are impacted, crowded or repeatedly sore.
→ Wisdom teeth extractions

**Bone grafting.** Rebuilding bone volume in the jaw, often so an implant has something solid to sit in.
→ Bone grafting

*Image slot per block:* a real clinical or practice photograph. Not stock. Not a grey box.

⚠FLAG: each block above routes to a page that exists in the sitemap. No block ships without a live destination.

⚠FLAG: our own wisdom teeth page publishes the anaesthesia options as local anaesthetic, intravenous sedation or general anaesthesia. That leaf carries them, so this hub does not restate them. No recovery time is published in any captured source, and no comfort promise or clinical result ships here.

---

## §4 - proof-data-point  [S]
required IDs: D-INCUMBENT-007

The ADA Health Policy Institute reports that 55% of adults aged 65 and older have no dental benefits, fetched 30 July 2026. Dental visits track coverage directly.

That is the reasoning behind our entry exam price and its lower senior rate. Getting looked at early is the whole point of it.

⚠OWNER PLACEHOLDER: no expiry, exclusions or senior age threshold is published for the entry offer. The terms line stays a placeholder until the owner supplies them, and no urgency framing ships.

Surgical care is listed as an in house service on all seven location pages, captured first-party on 30 July 2026.

⚠OWNER: confirm which offices actually schedule surgical cases, and which clinicians perform them. The service list is site wide, so it cannot answer that on its own.

---

## §5 - cross-link-rail  [XS]
required IDs: D-IA-004

Other areas of care: General dentistry · Cosmetic dentistry · Restorations · Periodontics · Orthodontics
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

Start with an exam and a clear answer about whether surgery is needed at all. Book an appointment, or call the office you would visit.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

⚠FLAG: the secondary CTA resolves to that office's own number, never a generic line, per `routeRules.phone_policy`.

---

### Compliance notes carried into this page

- Every address is copied from `client-rules.json` contactData. None is retyped from memory or from the live site.
- No treatment price is stated. Extractions and grafting are quote only, per `pricing.treatment_prices_published: false`.
- The 55% figure names the ADA Health Policy Institute and carries its fetch date, per `content-bible.md` §3.
- No consequence is appended to the ADA figure. Only the two findings the source carries are stated: the 55% share, and that visits track coverage.
- The anaesthesia options are published on our own wisdom teeth page, so they are not treated as unverified. This hub routes to that leaf rather than restating them.
- No recovery time appears, because no captured source publishes one. No comfort guarantee ships, per `content-bible.md` §3b, and nothing here promises a clinical result.
- No superlative, ranking or award claim appears.
- No device or technology is named on this page. Only SIROlaser and digital X-rays are verifiable, per `content-bible.md` §2.
- §2 frames against the referral model, never a named competitor, per `competitorFraming`. Referral is described as a structure, not as a failing of any practice.
- §2 states no share or frequency for referral. It opens in the conditional, because this build measures no prevalence and `equivalence-table.md` §2 records surgery at three of four captured competitors.
- The in house wording keeps the honesty fence of `content-bible.md` §5. This is one practice with seven of its own offices, not a network.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH. No banned-vocab string, per G-BANNED.
- Both routing blocks name destinations that exist in `sitemap.yaml`, so no block routes to nothing.
- The surgical scheduling question is flagged, not answered, because the capture is a site wide service list rather than a per-office confirmation.
- The entry offer is referenced without a figure and without an expiry. Its terms ship as a placeholder, per `pricing.offer_terms` and `pricing.limited_time_framing_allowed: false`.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
