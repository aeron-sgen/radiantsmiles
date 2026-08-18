# COPY - `new-patients`

type: T-HUB · funnel_role: F2
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/new-patients.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero-category-outcome  [S]
required IDs: D-SEO-002, D-OFFER-009

**H1:** New Patients

**Sub:** Your first visit is an exam and an X-ray for $45, or $29 if you are a senior. You find out what is going on before anything is quoted.

**Anchor strip:** The offer · Insurance and financing · Common questions · Book a first visit

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

⚠OWNER PLACEHOLDER: no expiry, no exclusions and no senior age threshold is published anywhere for the $45 and $29 exam. This terms line ships as a placeholder until you supply them. The offer is presented as standing, with no urgency framing, per `client-rules.json` pricing.

---

## §2 - why-this-area  [M]
required IDs: D-POSITION-009

The first visit is the one you put off. You do not know what it will cost, so you put off finding out.

We publish one entry price and nothing else, because nothing else would be honest. Treatment is quoted after somebody has actually looked in your mouth.

You also stay inside one practice. General, cosmetic, restorative, surgical, periodontic and orthodontic care are all delivered by our own clinicians, at our own offices. Those six areas are not sent out to a practice we do not run.

---

## §3 - sub-area-blocks  [S each]
required IDs: D-PAGE-003

**The new patient offer.** The $45 exam and X-ray, $29 for seniors, with what is included and the terms that apply.
→ New patient special

**Insurance and financing.** The carriers and plans listed on our insurance page, and the four lenders patients use when insurance does not cover it.
→ Insurance and financing

**Common questions.** Cost, insurance, what happens on the day, emergencies, and what to do if you have not been in years.
→ Dental FAQs

**Book, or ask first.** Every office has its own direct number and its own booking link.
→ Contact

*Image slot per block:* a real clinical or practice photograph. Not stock. Not a grey box.

⚠FLAG: every block above routes to a page that exists in `sitemap.yaml`. No block ships without a live destination.

⚠FLAG: financing runs through Care Credit, Cherry, Sunbit and Lending Club. Their terms are set by the lender and subject to credit approval. They are not terms offered by this practice, and no page may present them as ours.

⚠FLAG: network status varies by office and by plan. No page states a blanket network guarantee, per `pricing.insurance_network_claim_scope`.

---

## §4 - proof-data-point  [S]
required IDs: D-INCUMBENT-007

The senior price is not a gesture. It is set against a documented coverage gap.

The ADA Health Policy Institute, fetched 30 July 2026, records that 55% of adults aged 65 and older have no dental benefits. The same source finds that dental visits track coverage directly.

That is the whole argument for a $29 entry exam, and for publishing the $45 price next to it rather than on request.

---

## §5 - cross-link-rail  [XS]
required IDs: D-IA-004

Other hubs: All services · All seven offices · Meet our dentists · About the practice
Also: the new patient offer · insurance and financing · contact

---

## §6 - routing-band  [XS]
required IDs: D-PAGE-007

**Book your first visit at the office nearest you.** Seven offices across the valley:

- Lone Mountain, 7469 W. Lake Mead Blvd., Suite 270, Las Vegas 89128
- Sunrise Manor, 1825 S. Nellis Blvd., Las Vegas 89107
- Summerlin, 8961 W. Sahara Ave., Suite 108, Las Vegas 89117
- North Las Vegas, 5195 Camino Al Norte Rd., North Las Vegas 89031
- Henderson, 2633 W. Horizon Ridge Pkwy., Suite 130, Henderson 89052
- North Decatur, 6311 N. Decatur Blvd., Suite 140, Las Vegas 89130
- Blue Diamond, 5095 S. Blue Diamond Rd., Suite 105, Las Vegas 89139

⚠OWNER: the Sunrise Manor ZIP conflicts on the live site. 89107 is carried here from `client-rules.json` contactData, pending confirmation against 89104 in the booking block.

---

## §7 - closing-cta  [XS]
required IDs: D-OFFER-006

Book your first exam, or call the office nearest you with your plan details before you book.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

⚠FLAG: the secondary CTA resolves to the specific office's own number, never a general line, per `routeRules.phone_policy`.

---

### Compliance notes carried into this page

- The $45 and $29 entry exam is the only price on this page. No treatment price appears, per `pricing.treatment_prices_published: false`.
- The offer ships with an owner placeholder for its terms, because no expiry, exclusion or senior age threshold is published anywhere.
- The urgency framing carried by the live site is dropped, per `pricing.limited_time_framing_allowed: false`.
- Lender terms are attributed to the four named lenders, with credit approval stated, per `pricing.financing_disclosure_required`.
- No blanket insurance network guarantee appears. Network status is per office and per plan.
- No insurance activity is offered. A coverage check made on the reader's behalf is undefined and blocked under `content-bible.md` §2, per `intake-brief.md` §G-6. The §7 close asks the reader to call the office with their plan details instead. A search of the whole 30 July 2026 capture for coverage, deductible, copay and pre-authorization language returns no match.
- The 55% figure is attributed to the ADA Health Policy Institute by name, with its 30 July 2026 fetch date. No behaviour or consequence beyond that source is stated.
- No shared record or shared chart across offices is claimed. §2 stays inside the verified claim, which is the six named areas of care delivered in house by our own clinicians. No wider specialty is implied, and no pediatric claim ships.
- Addresses and ZIPs are copied from `client-rules.json` contactData, character for character.
- No patient behaviour statistic appears. §2 addresses the reader directly rather than claiming a share of people who delay, because no source measures that.
- No superlative, ranking or award claim appears. No competitor is named, per `competitorFraming`.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH. No banned-vocab string, per G-BANNED.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- Every routing block names a destination that exists in `sitemap.yaml`.
