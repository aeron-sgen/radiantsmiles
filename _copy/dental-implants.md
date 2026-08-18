# COPY - `dental-implants`

type: T-FEATURE · funnel_role: F1
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/dental-implants.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero  [S]
required IDs: D-SEO-002, D-SEO-003

**H1:** Dental Implants in Las Vegas

**Sub:** A replacement tooth that stands on its own, with the surgical placement and the restoration both handled by our own team.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

*Image slot:* a real photograph of one of our surgical operatories, or a digital X-ray on the screen in the room. Not stock. Not a grey box.

---

## §2 - pain-it-kills  [M]
required IDs: D-INCUMBENT-007

A missing tooth does not stay a single missing tooth. The teeth either side lean towards the gap. The tooth above or below it drifts down into the space.

Under the gap, the jawbone stops being loaded when you chew. Bone that is not loaded reduces over time. That is why a gap left alone narrows the options for filling it later.

None of this is an emergency, and that is exactly the problem. It is slow, so it waits. The waiting is what makes the eventual fix bigger.

The published coverage numbers belong here as well. The ADA Health Policy Institute reports that 55% of adults aged 65 and older have no dental benefits, fetched 30 July 2026. The same source reports that dental visits track coverage directly. In 2023, 53% of adults with private dental insurance had a dental visit, against 16% of adults with no dental insurance.

---

## §3 - benefit-pillars  [M x3]
required IDs: D-POSITION-009

**Chew on both sides again.** An implant is anchored in the jaw, so you are not steering food away from one side of your mouth.

**Leave the neighbouring teeth alone.** A bridge is carried by the teeth either side of a gap. An implant stands on its own instead.

**Clean it like a tooth.** The crown on an implant is brushed and flossed where it sits. It does not come out at night.

---

## §4 - capability-breakdown  [M each]
required IDs: D-OFFER-017

**We assess the site first.** X-rays and impressions are taken to determine the bone, the gum tissue and the spacing available for an implant. You are told what is seen, not handed a plan. Our own bone grafting page publishes that a jawbone that has receded or been significantly damaged cannot support an implant. It publishes that grafting is usually recommended for the restoration, captured 30 July 2026.
*Visual:* a real photograph of an X-ray on the screen in one of our own operatories.

**We place the post.** A post, usually titanium, is placed in the jaw while the area is numb. This is surgery, and we describe it to you as surgery.
*Visual:* a real photograph of one of our own surgical operatories, set up for a placement.

**We wait for it to integrate.** The post has to join with the bone before it can carry anything. Our own implants page publishes a healing and integration period of up to six months, captured 30 July 2026. That waiting period is part of the treatment, not a delay in it.
*Visual:* a real photograph of the review chair where the site is checked between appointments.

**We fit the restoration.** The artificial tooth is made and fitted to the post, our own implants page says. The same practice that placed the post fits the tooth on top.
*Visual:* a real photograph of one of our own clinicians fitting the artificial tooth, in one of our offices.

**We review it afterwards.** An implant is checked at your regular visits like any other tooth. The practice that placed it is the practice that checks it.
*Visual:* a real photograph of a clinician reviewing an implant at a routine visit in one of our offices.

⚠FLAG: the implant system we use is not named in any first-party source. The healing interval and the grafting pathway are published on our own pages and are carried above. Owner to confirm the system before this section ships.

---

## §5 - proof-or-product-ui  [S]
required IDs: D-POSITION-004

Patients at our Lake Mead office have left 506 reviews on Birdeye, averaging 4.5 stars, fetched 30 July 2026. That record belongs to that office alone.

⚠OWNER: confirm whether a practice-wide rating exists, and which platform is the system of record. Per `content-bible.md` §6 the scope may never be dropped or aggregated across the seven offices. No before and after image ships here until a real consented patient case is supplied.

*Image slot:* a photograph of the actual office and the actual equipment. No stock clinic imagery.

---

## §6 - in-house-not-referred  [M]
required IDs: D-MARKET-BDG-010

Where implant treatment is split in two, one practice places the post and another restores it. The patient carries the plan between them. We do both, at seven offices across Las Vegas, North Las Vegas and Henderson.

We are one dental group, not a franchise and not a referral network. Where offices are separately owned, a consistent standard between them cannot be promised. Oral surgery and restorative care sit on one clinical roster here.

The clinicians on that roster are named, each with the credentials the practice publishes for them. You can read who they are before you book, on our team page.

⚠OWNER: whether patient records and images are held in one system shared by all seven offices is not verified in any first-party capture. No shared-record claim ships on this page until the owner confirms it.

---

## §7 - cross-link-rail  [XS]
required IDs: D-IA-003

Related care: Restorations · Composite fillings · Crowns and caps · Fixed bridges
Also: all seven offices · new patient offer · contact

---

## §8 - faq  [S each]
required IDs: D-INCUMBENT-009

**What does an implant cost?**
We quote after an examination, because the plan depends on the bone, the site and the tooth being replaced. We do not publish treatment prices on this site.

**Does insurance cover it?**
Coverage depends on your plan. Delta Dental, Cigna, MetLife and the Culinary Health Fund are among the 41 carriers listed on our insurance and financing page. Network status varies by office and by plan. Contact the office you want with your plan details before you book.

⚠OWNER: this answer names carriers without stating any relationship with them, per `client-rules.json` OVERCLAIM.global[5], which records the site-wide network claim as unconfirmed. It offers no coverage check made on your behalf, because that activity is undefined and blocked under `content-bible.md` §2, per `intake-brief.md` §G-6. Confirm the per-office network status before this answer ships.

**Does it hurt?**
The post is placed while the area is numb. The site can feel sore afterwards, and we tell you how to manage that before you leave.

---

## §9 - pricing-cta  [XS]
required IDs: D-OFFER-009

If you are new to us, start with the $45 exam and X-ray, or $29 if you are a senior. Both prices are published on our own site and were current on 30 July 2026.

⚠OWNER PLACEHOLDER: no expiry, exclusions or senior-age threshold is stated anywhere on the live site. One is required before this offer ships.

Payment plans are available through Care Credit, Cherry, Sunbit and Lending Club. Terms are set by the lender and are subject to credit approval. They are not terms offered by this practice.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

### Compliance notes carried into this page

- No treatment price is stated. `pricing.treatment_prices_published` is `false` and `invented_prices_allowed` is `false`. The $45 and $29 entry offer is the only price on the page.
- The ADA Health Policy Institute is named in full, with its fetch date, wherever the 55% figure is used, per `content-bible.md` §3. Nothing is inferred from it beyond what the source itself reports.
- No cross-office record or shared-chart capability is claimed. One practice and one clinical roster is verified; a shared record system is not, so §6 carries an owner flag.
- §6 states that the clinicians are named and carry published credentials, per brief §6 and `content-bible.md` §3. No individual clinician is assigned to this treatment, because per-clinician service assignment is unpublished.
- Every §4 card names a real visual, per brief §4. Each names a photograph of our own rooms, people or screens, never stock.
- The review record is stated with its platform, its scope and its fetch date. It is never restated as practice-wide, per `content-bible.md` §6.
- No superlative, ranking or award claim appears anywhere on the page.
- No equipment is named beyond X-rays and impressions. Digital X-rays are named only in the §1 image slot, per our own digital X-rays page. No implant system is named, because none is confirmed first-party. That gap ships as a ⚠FLAG in §4. The capture carries the word Straumann only as the grantor of a 2006 research prize in a clinician bio. It is never named as a system we use.
- The imaging claim in §4 states what our own implants page publishes. That page names X-rays and impressions, and does not call them digital. It names the bone, the gum tissue and the spacing available for an implant. No other diagnostic finding is claimed for the implant assessment, because our own implants page publishes none. Our own digital X-rays page does publish findings it says X-rays may reveal, and none is carried here.
- No success rate, patient outcome or before and after image is claimed or shown, per `proofPolicy.real_only_for`. The healing and integration period and the grafting pathway are our own published statements, carried with their fetch date, not invented.
- Financing is attributed to the four named lenders, with credit approval disclosed, per `pricing._financing_note`.
- The offer terms line is a ⚠OWNER PLACEHOLDER because no expiry, exclusions or senior-age threshold is published anywhere. Nothing was invented to fill it.
- No urgency framing is used, because `limited_time_framing_allowed` is `false`.
- No competitor is named. §6 frames against the split placement and restoration model, not a practice.
- In-house oral surgery is claimed only because `productModel.specialties_in_house` lists it, per the honesty fence in `content-bible.md` §5.
- No exclamation points and no emoji, per `bannedPunctuation`.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- No em or en dashes anywhere, per G-NODASH.
- No banned-vocab string appears, including inside owner notes. G-BANNED substring-matches without context, so the superseded claim is described rather than quoted.
- No blanket network guarantee is stated and no coverage frequency is claimed. Carriers are named only as carriers listed on our insurance and financing page, per `client-rules.json` OVERCLAIM.global[5] and `pricing._insurance_note`. No insurance activity is promised either. The earlier §8 answer offered a coverage check made on the patient's behalf. That activity is undefined and blocked under `content-bible.md` §2, per `intake-brief.md` §G-6. A search of the whole 30 July 2026 capture returns no match for coverage, deductible, copay or pre-authorization language. So no source states any coverage frequency either.
