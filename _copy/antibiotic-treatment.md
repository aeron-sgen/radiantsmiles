# COPY - `antibiotic-treatment`

type: T-FEATURE · funnel_role: F1
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/antibiotic-treatment.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero  [S]
required IDs: D-SEO-002, D-SEO-003

**H1:** Antibiotic Gum Treatment in Las Vegas

**Sub:** A localised antibiotic placed directly into a periodontal pocket, alongside cleaning below the gumline.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

*Image slot:* a real photograph of one of our hygiene rooms or charting in progress. Not stock. Not a grey box.

---

## §2 - pain-it-kills  [M]
required IDs: D-INCUMBENT-007

Deep cleaning does most of the work in gum treatment. It does not always reach the bottom of every pocket.

A pocket can be deep, narrow, or tucked between roots. Instruments reach further than a toothbrush, and still not all the way down.

So one or two sites stay infected while the rest of the mouth settles. At the review, those sites read the same as before.

That is the gap this treatment is for. Not a replacement for cleaning, and not a shortcut around it.

Coverage is the other half of the delay. The ADA Health Policy Institute reports that 55% of adults aged 65 and older have no dental benefits, fetched 30 July 2026. Dental visits track coverage directly. In 2023, 53% of privately insured adults had a dental visit, against 16% of those with no dental insurance.

---

## §3 - benefit-pillars  [M x3]
required IDs: D-POSITION-009

**Keep your own teeth rather than replace them.** That is what treating a pocket is for, and it is why the stubborn sites are worth chasing.

**Go back to ordinary cleanings.** The aim is a mouth a routine hygiene visit can maintain, rather than one that needs deep cleaning again.

**Judge the result for yourself.** You are shown the pocket measurements taken before and the pocket measurements taken afterwards.

---

## §4 - capability-breakdown  [M each]
required IDs: D-OFFER-017

**We chart before we treat.** A clinician measures every pocket and records it. Digital X-rays show the bone level. The chart identifies the sites that need more than cleaning.
*Image slot:* a real photograph of one of our clinicians charting pockets in our own operatory. No stock clinic imagery.

**We clean first.** Scaling and root planing comes before anything else. A localised antibiotic is placed alongside that work, never instead of it.
*Image slot:* a real photograph of one of our hygiene rooms set up for scaling and root planing. No stock clinic imagery.

**We place it into the pocket itself.** The antibiotic goes where the bacteria are, rather than through the whole body. Your clinician explains why a given site was chosen.
*Image slot:* a real photograph of our own instrument tray laid out for this step. No stock clinic imagery.

**We re-measure at the review.** The next chart tells us whether those sites responded. If they did not, we say so and discuss what is next.
*Image slot:* a real photograph of a follow up charting appointment in one of our operatories. No stock clinic imagery.

⚠FLAG: our own antibiotic treatment page names the drug classes used in periodontal care, captured 30 July 2026. It names tetracyclines, macrolides and metronidazole, and the topical products Arestin and Atridox. It also frames dosing in general terms, as a low dose for longer term use or a short course. What it does not state is which agent we use in a given case, the aftercare or the re-measurement interval. Owner to confirm the protocol before this section ships.

---

## §5 - proof-or-product-ui  [S]
required IDs: D-POSITION-004

Our Lake Mead office is rated 4.5 stars across 506 patient reviews on Birdeye, fetched 30 July 2026. That figure covers that office alone.

⚠OWNER: confirm whether a practice-wide figure exists and which platform is the system of record. Per `content-bible.md` §6 the scope travels with the number and is never dropped. This rating is the sourced stand-in for the ranking claim currently live on the site.

*Image slot:* a photograph of the actual office and the actual equipment. Never a stock clinic shot.

---

## §6 - in-house-not-referred  [M]
required IDs: D-MARKET-BDG-010

This treatment only makes sense inside a course of periodontal care. It needs the chart before it and the review after it.

Both happen here. Periodontics is one of six specialties this practice delivers in-house, across seven offices in Las Vegas, North Las Vegas and Henderson.

Where offices are separately owned or separately branded, the chart and the follow up can sit with different people. One roster is what keeps the same clinical team involved from the charting to the review.

Our clinicians are named on the site with their credentials. Dr. Adrian Ruiz holds a DDS from UCLA, 1995. Dr. Norma Miranda holds a DDS from UCLA, 1976. Both are recorded on our own team page, fetched 30 July 2026.

⚠OWNER §G-11: which clinicians deliver periodontal treatment is not published anywhere first-party. Confirm the roster and the office assignment before this section ships.

---

## §7 - cross-link-rail  [XS]
required IDs: D-IA-003

Related care: Periodontics · Periodontal disease · SIROlaser · Gum recession
Also: all seven offices · new patient offer · contact

---

## §8 - faq  [S each]
required IDs: D-INCUMBENT-009

**What does it cost?**
It depends on how many sites are treated, so we quote after charting. We do not publish treatment prices, because all treatment here is quoted after an examination.

**Does insurance cover it?**
Coverage depends on your plan. Delta Dental, Cigna, MetLife and the Culinary Health Fund are among the carriers listed on our insurance and financing page. Network status varies by office and by plan. Contact the office you want with your plan details before you book.

⚠OWNER: this answer no longer offers a coverage check made on your behalf before treatment. That activity is undefined, with no license or process disclosed. It is blocked under `content-bible.md` §2 until you define it, per `intake-brief.md` §G-6. The carriers named come from `client-rules.json`, which records network status as per-location and unconfirmed. Confirm the per-office network status before this answer ships.

**Does it hurt?**
Placement itself is quick. Our own scaling and root planing page states that local anaesthetic may be used, so the site may already be numb. We will not describe it as painless, and we will tell you what to expect afterwards.

**Why not just take antibiotic tablets?**
That is a clinical decision, and it is made at your examination. Your clinician will explain which approach is being recommended for your pockets, and why.

---

## §9 - pricing-cta  [XS]
required IDs: D-OFFER-009

New patients can start with our $45 exam and X-ray, or $29 if you are a senior. Both are published on our own site and were current on 30 July 2026.

⚠OWNER PLACEHOLDER: no expiry, no exclusions and no senior-age threshold is stated anywhere on the live site. Real terms are required before this offer ships.

Payment plans are available through Care Credit, Cherry, Sunbit and Lending Club. Terms are set by the lender and are subject to credit approval. They are not terms offered by this practice.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

### Compliance notes carried into this page

- No treatment price is stated. `pricing.treatment_prices_published` is `false` and `invented_prices_allowed` is `false`, so the entry offer is the only price on the page.
- The 55% coverage figure is attributed to the ADA Health Policy Institute with its fetch date, per `content-bible.md` §3. The 53% and 16% visit rates come from the same source and date.
- Nothing is appended to the ADA data. No claim is made about which visit gets skipped, because the source does not measure that.
- §6 names Dr. Adrian Ruiz and Dr. Norma Miranda with the school and year captured verbatim at `/meet-the-doctors/`. Which clinician delivers this treatment is unpublished and ships as an owner question.
- The review record carries its platform, its scope and its fetch date, and is never pooled across offices, per `content-bible.md` §6.
- No drug, brand or product is named in visible prose, and only digital X-rays and the SIROlaser appear as named technology, per `OVERCLAIM.global`. The drug classes our own page publishes are recorded in the §4 owner note, not asserted as our protocol.
- No success rate, no clinical outcome and no healing time is claimed, per `content-bible.md` §3b.
- Financing is attributed to the four named lenders, with credit approval disclosed, per `pricing._financing_note`.
- The §4 flag is narrowed to what is genuinely unstated. Our own antibiotic treatment page names the drug classes, two topical products and a general dosing frame, so naming them is not invention. That page states antibiotics can be prescribed at a low dose for longer term use, or as a short course. What no first-party source states is which agent we use in a given case, the aftercare and the re-measurement interval.
- The §9 placeholder is a placeholder because no expiry, exclusion or senior-age threshold is published on the live site.
- No competitor is named. §6 frames against separately owned and separately branded office models, not a practice.
- No shared record or shared imaging system is claimed. The verified claim is one practice, one clinical roster, one brand and one domain.
- Each §4 card names its own real visual, per the brief's §4 directive.
- No exclamation points and no emoji, per `bannedPunctuation`. Every sentence is 24 words or fewer, per `content-bible.md` §1.
- No em or en dashes anywhere, per G-NODASH. No banned-vocab string appears, including inside the owner notes, so the superseded ranking claim is described rather than quoted.
- No insurance activity is promised. The earlier §8 answer offered a coverage check made on the patient's behalf, with a report of what the plan would pay. That is an undefined insurance activity, blocked under `content-bible.md` §2 until the owner defines it, per `intake-brief.md` §G-6. A search of the whole 30 July 2026 capture for coverage, deductible, copay and pre-authorization language returns no match. The named carriers and the per-office network status ship in its place, per `content-bible.md` §2.
