# COPY - `insurance-financing`

type: T-FEATURE · funnel_role: F4
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/insurance-financing.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero  [S]
required IDs: D-SEO-002, D-SEO-003

**H1:** Dental Insurance and Financing in Las Vegas

**Sub:** The plans listed here, the lenders we work with, and how to find out what a visit costs.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

*Image slot:* a real photograph of a front desk in one of our offices, or an insurance card in hand. Not stock. Not a grey box.

---

## §2 - insurance-plans-named  [M]
required IDs: D-OFFER-007

This page names 41 plans. Below is the whole list, written out, rather than a short row of logos.

Start with the Las Vegas plans, because they are the ones people here actually carry.

**Las Vegas union and public plans**

- Culinary Health Fund · Teachers Health Trust · Teamsters · UFCW
- Nevada Medicaid · Health Plan of Nevada · Sierra Health & Life · Southpoint

**National carriers and administrators**

- Aetna · Access Dental · Allegiance · Amerigroup · AmeriPlan · Ameritas
- Anthem · Assurant Dental · Boon-Chapman · Careington · Cigna · Connection Dental
- Delta Dental · DentaMax · Diversified Dental · EBMS · GEHA · Guardian
- Hometown Health · Humana · Liberty Dental · Loomis · MetLife · Nevada Pacific Dental
- Premier Access · PrimeCare Administrators · Principal · Regence / Reliance
- Secure Dental · Standard · UMR · United Concordia · United Healthcare

Naming a plan here is not a network guarantee. No site-wide network status is confirmed for any of them.

Network status varies by office and by plan. Contact the office you want with your plan details before you book.

Your plan changes what you owe. It does not change our quote-only pricing on treatment.

⚠OWNER §G-12: network status is unconfirmed per office and per plan. Carriers are named without a blanket network guarantee, and no in-network claim ships until the owner confirms it office by office.

⚠FLAG §G-18: carrier logo usage rights are unconfirmed. The carriers are named in text only. Logos ship only after the owner confirms trademark permission.

---

## §3 - financing-partners  [M]
required IDs: D-OFFER-008

We work with four lenders: Care Credit, Cherry, Sunbit and Lending Club.

You apply to the lender, not to us. The lender sets the rate, the term and any fee.

Every plan is subject to that lender's credit approval. Approval is not ours to give, and it is not guaranteed.

We can tell you which four we work with. We cannot promise you a rate.

⚠OWNER PLACEHOLDER: the live site presents no-interest, no-down-payment and no-fee terms as this practice's own offer, with no lender named against them. Those are lender terms. Per-lender terms are unconfirmed, so no specific rate, term or fee ships on this page until the owner supplies them in writing.

---

## §4 - cost-barrier-context  [M]
required IDs: D-INCUMBENT-007

Cost is a common reason dental care gets delayed, and the delay is measurable.

The ADA Health Policy Institute reports that 55% of adults aged 65 and older have no dental benefits, fetched 30 July 2026.

The same source reports that 21% of adults aged 19 to 64 have no dental benefits.

It also reports that in 2023, 53% of adults with private dental insurance had a dental visit, against 16% of those with none.

Dental visits track coverage directly, on that source's own figures. Nothing beyond those figures is claimed here.

That is the evidence base for the senior entry price being set below the standard one.

Knowing what a visit costs before treatment is not paperwork. It is the step that decides whether care happens now or later.

---

## §5 - no-treatment-prices  [S]
required IDs: D-OFFER-022

We publish one price. New patients pay $45 for an exam and X-ray, or $29 if you are a senior.

Everything else is quote-only pricing. We do not publish treatment prices, because a real number needs an examination first.

You can request a quote for any treatment. It comes in writing, after we have looked, with your insurance and any financing applied.

A number given before that would only change afterwards. We would rather give you the real one late than a comfortable one early.

⚠OWNER PLACEHOLDER: no expiry, exclusions or senior-age threshold is stated anywhere on the live site. Real terms are required before the $45 and $29 offer ships.

---

## §6 - what-to-bring  [M]
required IDs: D-PAGE-003

Bring three things to a first visit.

**Your insurance card.** Bring the current card rather than the plan name, because the card carries the plan details.

**Photo ID.** The desk needs your name and date of birth, and ID saves a call.

**Any prior X-rays.** We take digital X-rays here, but recent films from another practice may still be usable.

If one of the three is missing, come anyway. We will work out what is needed and how to get it.

---

## §7 - cross-link-rail  [XS]
required IDs: D-IA-004

Related: new patient offer · dental FAQs · all seven offices
Also: new patients · contact

---

## §8 - faq  [S each]
required IDs: D-INCUMBENT-009

**Do you take my plan?**
Look for it in the list of 41 plans above. Network status varies by office and by plan. Contact the office you want with your plan details before you book.

**What if I have no insurance?**
Treatment is quoted the same way, after an examination, and financing is available through the four lenders named above. The published entry offer for new patients is $45 for an exam and X-ray, or $29 for seniors.
⚠OWNER PLACEHOLDER: the live site publishes no conditions on that offer, so this answer does not state whether it depends on insurance status. Real terms are required before it ships.

**Can I split the cost?**
Yes, through Care Credit, Cherry, Sunbit or Lending Club. The lender approves or declines the application and sets the terms.

---

## §9 - closing-cta  [XS]
required IDs: D-OFFER-006

Book an appointment, or call the office nearest you with your plan details first.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

### Compliance notes carried into this page

- No treatment price is stated. `pricing.treatment_prices_published` is `false` and `invented_prices_allowed` is `false`. The $45 and $29 entry offer is the only hard price on the page.
- The offer ships with a ⚠OWNER PLACEHOLDER because no expiry, exclusions or senior-age threshold is published in any captured source. Inventing one would be inventing a term.
- The urgency framing carried on the live site is not reproduced. `pricing.limited_time_framing_allowed` is `false` until a real end date exists.
- The 41 carriers are copied from `client-rules.json` `pricing.insurance_carriers_named`, character for character, and are named without a network guarantee, per `intake-brief.md` §G-12.
- No relationship with any carrier is asserted. The live site's blanket network claim is marked UNCONFIRMED in `OVERCLAIM.global`, so it is described here rather than repeated.
- No benefits-checking or coverage-reporting service is offered anywhere on this page. That activity is undefined and blocked per `content-bible.md` §2 and `intake-brief.md` §G-6, so the page invites contact with the office instead. §2, §8 and §9 each ask the patient to supply their own plan details, rather than having us look coverage up.
- Carrier logos are held under ⚠FLAG §G-18 until trademark permission is confirmed. Carriers are named in text only.
- Financing is attributed to the four named lenders with credit approval disclosed, per `pricing._financing_note`. The lender terms currently presented as the practice's own are described, not restated, and are held under a placeholder.
- The ADA Health Policy Institute is cited by name with its 30 July 2026 fetch date, per `content-bible.md` §3. The three figures are its own and are used exactly as recorded. They are tied to why care gets delayed, not added as a stray statistic.
- No superlative, ranking or award claim appears anywhere on the page. The carrier list is described by its length, never by the size or standing of any carrier on it.
- The §8 answer on having no insurance states no eligibility condition either way, because the offer's real terms are unpublished. Inventing an exclusion the page itself flags as unknown would contradict the §5 placeholder.
- No competitor is named, and no competitor price is stated or implied, per `competitorFraming`.
- No exclamation points and no emoji, per `bannedPunctuation`.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- No em or en dashes anywhere, per G-NODASH.
- No banned-vocab string appears, including inside the owner notes. G-BANNED substring-matches without context, so superseded claims are described rather than quoted.
