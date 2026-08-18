# COPY - `dental-exams-cleanings`

type: T-FEATURE · funnel_role: F1
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/dental-exams-cleanings.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero  [S]
required IDs: D-SEO-002, D-SEO-003

**H1:** Dental Exams and Cleanings in Las Vegas

**Sub:** A routine exam and a professional cleaning, so a small problem is found while it is still small.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

*Image slot:* a real photograph of one of our operatories, or a hygiene chair set up for a cleaning. Not stock. Not a grey box.

---

## §2 - pain-it-kills  [M]
required IDs: D-INCUMBENT-007

Nothing hurts, so nothing gets booked. That is how the gap between one exam and the next keeps growing.

A cavity does not announce itself. Neither does a cracked filling, or gum disease in its early stage. Teeth stay quiet until they are not.

Where a tooth is left until it aches, the simple fix may already have passed. What is left then is a longer appointment and a larger bill.

The published coverage numbers belong here, stated plainly. The ADA Health Policy Institute reports that 55% of adults aged 65 and older have no dental benefits, fetched 30 July 2026. The same source reports that dental visits track coverage directly. In 2023, 53% of adults with private dental insurance had a dental visit, against 16% of adults with no dental insurance.

---

## §3 - benefit-pillars  [M x3]
required IDs: D-POSITION-009

**Catch it while it is still small.** Decay found at an exam can still be small enough to fill. Left longer, the same tooth needs more work and more chair time.

**Leave knowing where you stand.** You get a plain account of what was seen, what can wait, and what should not.

**Book it near home or near work.** Exams and cleanings run at all seven of our offices, so the appointment fits the day you actually have.

---

## §4 - capability-breakdown  [M each]
required IDs: D-OFFER-017

**We ask first.** What hurts, what has changed, what you are worried about. Your medical history and your medications matter here, so we go through them.
*Visual:* a real photograph of the chair where that conversation happens, before any treatment starts.

**We examine.** Teeth, existing fillings, gums, bite and the soft tissue of the mouth. What we find is written down and compared at the next visit.
*Visual:* a real photograph of one of our clinicians examining a patient in our own operatory.

**We take digital X-rays when they will change something.** They may reveal decay between teeth and below the gumline, where the eye cannot reach.
*Visual:* a real photograph of a digital X-ray on the operatory screen in one of our offices.

**We clean.** Soft plaque and hardened deposits come off, and then the teeth are polished. If the deposits go deeper than a routine cleaning reaches, we say so, and that is a different treatment.
*Visual:* a real photograph of our own hygiene instruments laid out for a cleaning.

**We tell you what we found.** In order, in plain words, with the urgent separated from what can safely wait.
*Visual:* a real photograph of the screen turned towards the patient at the end of a visit.

⚠FLAG: our own FAQ page states teeth should be checked and cleaned at least twice a year, captured 30 July 2026. It adds that a dentist or hygienist may recommend more frequent visits. What is not confirmed anywhere is the appointment length, or which hygienist works at which office. Owner to confirm before this section ships.

---

## §5 - proof-or-product-ui  [S]
required IDs: D-POSITION-004

Our Lake Mead office is rated 4.5 stars across 506 patient reviews on Birdeye, fetched 30 July 2026.

⚠OWNER: confirm whether this figure is practice-wide or Lake Mead only, and which platform is the system of record. Per `content-bible.md` §6 the scope travels with the number, so it must not be restated as a practice-wide rating until confirmed.

*Image slot:* a photograph of the actual hygiene room and the actual equipment. No stock clinic imagery.

---

## §6 - in-house-not-referred  [M]
required IDs: D-MARKET-BDG-010

Your exam and your cleaning happen inside the same practice. We are one dental group running seven offices across Las Vegas, North Las Vegas and Henderson. We are not a referral network, and our offices are not separately owned or separately branded.

That matters more for routine care than for anything else. Routine care is a relationship, not a single visit. All seven offices are one practice with one clinical roster, not seven separate businesses.

⚠OWNER: whether patient records and images are held in one system shared by all seven offices is not verified in any first-party capture. No cross-office record claim ships on this page until the owner confirms it.

---

## §7 - cross-link-rail  [XS]
required IDs: D-IA-003

Related care: General dentistry · Digital X-rays · Fluoride treatment · Sealants
Also: all seven offices · new patient offer · contact

---

## §8 - faq  [S each]
required IDs: D-INCUMBENT-009

**What does a cleaning cost?**
We quote after an examination, because what a cleaning involves depends on what we find. We do not publish treatment prices. A number given before we look would only change afterwards.

**Does insurance cover it?**
Coverage depends on your plan. Delta Dental, Cigna, MetLife and the Culinary Health Fund are among the 41 carriers listed on our insurance and financing page. Network status varies by office and by plan. Contact the office you want with your plan details before you book.

⚠OWNER: this answer names carriers without stating any relationship with them, per `client-rules.json` OVERCLAIM.global[5], which records the site-wide network claim as unconfirmed. It offers no coverage check made on your behalf, because that activity is undefined and blocked under `content-bible.md` §2, per `intake-brief.md` §G-6. Confirm the per-office network status before this answer ships.

**Does a cleaning hurt?**
We will not describe it as painless. Sensitive gums can be tender while they are cleaned, so tell the dentist or hygienist while it is happening. The pressure and the pace can be adjusted.

---

## §9 - pricing-cta  [XS]
required IDs: D-OFFER-009

New patients can start with our $45 exam and X-ray, or $29 if you are a senior. Both prices are published on our own site and were current on 30 July 2026.

⚠OWNER PLACEHOLDER: no expiry, exclusions or senior-age threshold is stated anywhere on the live site. One is required before this offer ships.

Payment plans are available through Care Credit, Cherry, Sunbit and Lending Club. Terms are set by the lender and are subject to credit approval. They are not terms offered by this practice.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

### Compliance notes carried into this page

- No treatment price is stated. `pricing.treatment_prices_published` is `false` and `invented_prices_allowed` is `false`, so the $45 and $29 entry offer is the only price on the page.
- The ADA Health Policy Institute is named in full, with its figures and its fetch date. Nothing is inferred from it beyond what the source itself reports.
- No interval is invented. The §2 line previously stated how many years pass between exams. The §3 line stated how long a tooth is left. The §6 line stated how long a relationship runs. The 30 July 2026 capture publishes no such interval for any of those three subjects. Where those words do appear, they are about a child's age, about sealants, and about time away from the dentist. So each interval is removed and the point is kept, with no replacement figure.
- The hedges published on our own pages are carried, not dropped. Our own digital X-ray page states that digital X-rays may reveal decay between the teeth, captured 30 July 2026. So §4 reads may reveal rather than show. Our own exams page states that cleanings are usually performed by registered dental hygienists. Our own FAQ page names the dentist or hygienist together, so §8 names both.
- No cross-office record or imaging capability is claimed. One practice and one clinical roster is verified; a shared record system is not, so §6 carries an owner flag instead.
- Every §4 card names a real visual, per brief §4. Each names a photograph of our own rooms, people or screens, never stock.
- No superlative, ranking or award claim appears. The review record is stated with its platform, its scope and its fetch date, per `content-bible.md` §1 and §6.
- Financing is attributed to the four named lenders, with credit approval disclosed, per `pricing._financing_note`.
- Only digital X-rays are named as technology. No other device or product is named, per `OVERCLAIM.global`.
- No competitor is named. §6 frames against the referral and separately-owned model, not a practice.
- No exclamation points and no emoji, per `bannedPunctuation`. Every sentence is 24 words or fewer, per `content-bible.md` §1.
- No em or en dashes anywhere, per G-NODASH. No banned-vocab string appears, including inside the owner notes, because G-BANNED substring-matches without context.
- The §4 flag covers the appointment length and which hygienist works at which office, because neither appears in any first-party capture. Our own captured team page does name a hygienist, so the flag does not claim that none is named. The recall interval is published on our own FAQ page, so it is carried with its fetch date rather than written up as absent. The §9 placeholder is a placeholder because the live site publishes the offer with no terms at all.
- No blanket network guarantee is stated and no coverage frequency is claimed. Carriers are named only as carriers listed on our insurance and financing page, per `client-rules.json` OVERCLAIM.global[5] and `pricing._insurance_note`. No insurance activity is promised either. The earlier §8 answer offered a coverage check made on the patient's behalf. That activity is undefined and blocked under `content-bible.md` §2, per `intake-brief.md` §G-6. A search of the whole 30 July 2026 capture returns no match for coverage, deductible, copay or pre-authorization language. So no source states any coverage frequency either.
