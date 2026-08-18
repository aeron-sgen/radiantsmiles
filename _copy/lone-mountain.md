# COPY - `lone-mountain`

type: T-FEATURE · funnel_role: F1
cta_primary: Book an appointment · cta_secondary: Call Lone Mountain
source brief: `_handoff/briefs/lone-mountain.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero  [S]
required IDs: D-SEO-002, D-SEO-003

**H1:** Dentist in Lone Mountain, Las Vegas NV 89128

**Sub:** Our office on W. Lake Mead Blvd., open Sunday, with its own direct phone line and online booking.

**Address:** 7469 W. Lake Mead Blvd., Suite 270, Las Vegas, NV 89128
**Phone:** (702) 289-4424

**CTA primary:** Book an appointment
**CTA secondary:** Call Lone Mountain

*Image slot:* a real photograph of THIS office, exterior or reception. Not a stock clinic. Not a grey box.

---

## §2 - at-this-office  [M]
required IDs: D-BRAND-RAILS-016

**Address:** 7469 W. Lake Mead Blvd., Suite 270, Las Vegas, NV 89128
**Phone:** (702) 289-4424

**Hours**
Monday 10 AM to 6 PM
Tuesday 8:30 AM to 7 PM
Wednesday 10 AM to 5 PM
Thursday 8:45 AM to 4 PM
Friday 8:45 AM to 4 PM
Saturday Closed
Sunday 8:30 AM to 3 PM

Sunday is the only weekend day at this office. Saturday is closed, so a Sunday morning here is the weekend option.

Tuesday runs to 7 PM if you need an appointment after work. Online booking is available at this office.

⚠FLAG: every value above is copied from `client-rules.json` contactData and from nowhere else. Hours are stored there with en dashes and are written here as the word "to", so the range survives G-NODASH.

⚠FLAG: the North Decatur office publishes hours that are identical to these on all seven days. The owner must confirm which record is correct before both pages ship.

---

## §3 - services-here  [M x3]
required IDs: D-OFFER-017

**Everyday care.** General dentistry at this office covers exams, cleanings, preventative care, digital X-rays, fluoride and sealants. Routes to the general dentistry hub.

**Repair and replace.** Restorations, cosmetic dentistry and oral and maxillofacial surgery are all delivered here. Routes to the restorations, cosmetic and oral surgery hubs.

**Gums and alignment.** Periodontics and orthodontics are provided at this office too. Routes to the periodontics and orthodontics hubs.

All six specialty groups are delivered at this office. Same-day and emergency appointments are available.

---

## §4 - the-team-here  [M]
required IDs: D-POSITION-002

Ten dentists are named on our team page, each with their credentials stated. Two of them are fluent in Spanish.

⚠OWNER §G-11: which clinicians practise at this office is not published anywhere on the live site. Until that assignment is supplied, this section links to the full team and asserts nobody in particular.

**Link:** meet the team

---

## §5 - proof  [S]
required IDs: D-POSITION-004

Our Lake Mead office is rated 4.5 stars across 506 patient reviews on Birdeye, fetched 30 July 2026.

⚠OWNER: confirm that the Birdeye listing carrying this record is the office at 7469 W. Lake Mead Blvd., Suite 270. The address matches, but the listing itself is not labelled by office. If it is not this one, this section stays empty until a per-office record is supplied.

⚠FLAG: the figure is scoped to one office and is never restated as practice wide, per `content-bible.md` §6. Offices are never totalled together.

*Image slot:* a photograph of this office or its equipment. No stock clinic imagery.

---

## §6 - one-practice-seven-offices  [M]
required IDs: D-MARKET-P3-010

This is not a branch of something else. Radiant Smiles runs seven of its own offices across Las Vegas, North Las Vegas and Henderson.

One brand, one roster of clinicians, one domain. Choose the office that suits your week rather than the one nearest the first appointment you made.

The market alternative is a group of separately owned or separately branded practices sharing a name. Under that model nobody can promise you the same standard at each address.

Its BBB business profile records the practice as in business 23 years, fetched 30 July 2026.

⚠FLAG: the 23 year figure is BBB reported, not first-party. The owner is asked to confirm the founding year, per `content-bible.md` §2. The practice is NOT BBB accredited, and no BBB rating is cited on this page.

---

## §7 - cross-link-rail  [XS]
required IDs: D-IA-004

Other offices: Sunrise Manor · Summerlin · North Las Vegas · Henderson · North Decatur · Blue Diamond
Also: all services · new patient offer · all seven locations

---

## §8 - faq  [S each]
required IDs: D-INCUMBENT-009

**Where do I park?**
⚠OWNER PLACEHOLDER: parking at this office is not described in any first-party source held by this build. Supply the real arrangement, including suite access, or this answer does not ship.

**What happens at a first visit?**
An examination and X-rays where they are needed, then what we found and what we suggest. New patients can use the published entry offer for that visit.

**Do you take my insurance at this office?**
Our insurance and financing page lists 41 named plans, including Culinary Health Fund, Teachers Health Trust and Nevada Medicaid. ⚠OWNER §G-12: network status varies by office and by plan, so no blanket guarantee is made here. Call this office with your plan details before you come in.

**What if it is an emergency?**
Same-day and emergency appointments are available. Call (702) 289-4424 and say it is urgent.

---

## §9 - closing-cta  [XS]
required IDs: D-OFFER-006

Book at the Lone Mountain office, or call (702) 289-4424 and speak to this office directly.

**CTA primary:** Book an appointment
**CTA secondary:** Call Lone Mountain

---

### Compliance notes carried into this page

- The address, ZIP, phone and hours are copied character for character from `client-rules.json` contactData. Nothing is retyped from memory or from the live site.
- Hours are stored in contactData with en dashes. Each range is written with the word "to" so G-NODASH is not tripped and no value changes.
- No blanket weekend or evening claim is made. This page states this office's own days and times only, per the OVERCLAIM entry on weekend hours.
- The review record carries its platform, its scope and its fetch date. It is not restated as practice wide and offices are not totalled, per `content-bible.md` §6.
- The 23 year figure is attributed to the BBB profile with its fetch date and flagged as not first-party. No BBB rating is cited, and the non-accreditation is stated.
- No clinician is asserted to work at this office. That assignment is unpublished and is held as an owner question.
- Insurance is named without a network guarantee, per `pricing._insurance_note` and the OVERCLAIM entry on network status.
- No treatment price is stated. Treatment is quote-only per `pricing.treatment_prices_published: false`.
- No superlative, ranking or award claim appears. No competitor is named, and §6 frames against the separately owned model.
- No exclamation points and no emoji, per `bannedPunctuation`.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- No em or en dashes anywhere, per G-NODASH.
- No banned-vocab string appears, including inside owner notes. G-BANNED substring-matches without context, so any superseded claim is described rather than quoted.
