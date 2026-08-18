# COPY - `henderson`

type: T-FEATURE · funnel_role: F1
cta_primary: Book an appointment · cta_secondary: Call Henderson
source brief: `_handoff/briefs/henderson.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero  [S]
required IDs: D-SEO-002, D-SEO-003

**H1:** Dentist in Henderson, NV 89052

**Sub:** Our office on W. Horizon Ridge Pkwy., open Saturday and two evenings a week, with its own phone line.

**Address:** 2633 W. Horizon Ridge Pkwy., Suite 130, Henderson, NV 89052
**Phone:** (702) 897-7001

**CTA primary:** Book an appointment
**CTA secondary:** Call Henderson

*Image slot:* a real photograph of THIS office, exterior or reception. Not a stock clinic. Not a grey box.

---

## §2 - at-this-office  [M]
required IDs: D-BRAND-RAILS-016

**Address:** 2633 W. Horizon Ridge Pkwy., Suite 130, Henderson, NV 89052
**Phone:** (702) 897-7001

**Hours**
Monday 9 AM to 5 PM
Tuesday 9 AM to 7 PM
Wednesday 9 AM to 5 PM
Thursday 9 AM to 7 PM
Friday 9 AM to 5 PM
Saturday 9 AM to 5 PM
Sunday Closed

This is the practice's Henderson office, so a Henderson patient does not drive into Las Vegas for an appointment.

Saturday opens 9 AM to 5 PM, and Tuesday and Thursday run to 7 PM. Sunday is closed. Online booking is available at this office.

⚠FLAG: every value above is copied from `client-rules.json` contactData and from nowhere else. Hours are stored there with en dashes and are written here as the word "to", so the range survives G-NODASH.

---

## §3 - services-here  [M x3]
required IDs: D-OFFER-017

**Everyday care.** General dentistry at this office means exams, cleanings, preventative care, digital X-rays, fluoride and sealants. Routes to the general dentistry hub.

**Repair and replace.** Restorations, cosmetic dentistry, and oral and maxillofacial surgery are carried out here. Routes to the restorations, cosmetic and oral surgery hubs.

**Gums and alignment.** Periodontics and orthodontics are provided at this address as well. Routes to the periodontics and orthodontics hubs.

All six specialty groups are delivered at this office. Same-day and emergency appointments are available.

---

## §4 - the-team-here  [M]
required IDs: D-POSITION-002

Our team page names ten dentists and sets out the credentials of each one. Two of them are fluent in Spanish.

⚠OWNER §G-11: which clinicians practise in Henderson is not published anywhere on the live site. Until the owner supplies it, this section links to the full team and claims no name for this address.

**Link:** meet the team

---

## §5 - proof  [S]
required IDs: D-POSITION-004

⚠OWNER PLACEHOLDER: no review record has been captured for the Henderson office.

The one verified rating this build holds belongs to a different office. It is not repeated here, not averaged in, and not described as a practice wide figure.

Give us a per-office record from a platform you nominate. It ships here with its scope and its date, or the section stays empty rather than borrowed.

*Image slot:* a photograph of this office or its reception, which is the proof this page can honestly show today.

---

## §6 - one-practice-seven-offices  [M]
required IDs: D-MARKET-P3-010

Henderson is one of seven offices Radiant Smiles owns and runs across Las Vegas, North Las Vegas and Henderson.

One brand, one roster of clinicians, one domain, across all seven addresses. Book at whichever of them suits your week.

The alternative in this market is separately owned or separately branded practices sharing a name. Under that structure, nobody can promise you the same standard at the next address.

Its BBB business profile records the practice as in business 23 years, fetched 30 July 2026.

⚠FLAG: the 23 year figure is BBB reported and not first-party. The owner is asked to confirm the founding year. The practice is NOT BBB accredited, and no BBB rating is cited on this page.

---

## §7 - cross-link-rail  [XS]
required IDs: D-IA-004

Other offices: Lone Mountain · Sunrise Manor · Summerlin · North Las Vegas · North Decatur · Blue Diamond
Also: all services · new patient offer · all seven locations

---

## §8 - faq  [S each]
required IDs: D-INCUMBENT-009

**Where do I park?**
⚠OWNER PLACEHOLDER: parking at this office is not described in any first-party source held by this build. Supply the real arrangement, including how to reach Suite 130.

**What happens at a first visit?**
An examination, X-rays where they are needed, then a plain account of what we found and what we suggest. New patients can use the published entry offer.

**Do you take my insurance at this office?**
Our insurance and financing page lists 41 named plans, including Culinary Health Fund, Teachers Health Trust and Nevada Medicaid. ⚠OWNER §G-12: network status varies by office and by plan, so no blanket guarantee is made. Call Henderson with your plan details.

**What if it is an emergency?**
Same-day and emergency appointments are available. Call (702) 897-7001 and tell us that it is urgent.

---

## §9 - closing-cta  [XS]
required IDs: D-OFFER-006

Book at the Henderson office, or call (702) 897-7001 and speak to this office directly.

**CTA primary:** Book an appointment
**CTA secondary:** Call Henderson

---

### Compliance notes carried into this page

- The address, ZIP, phone and hours are copied character for character from `client-rules.json` contactData. Nothing is retyped from memory or from the live site.
- Hours are stored in contactData with en dashes. Each range is written with the word "to" so G-NODASH is not tripped and no value changes.
- Saturday and the two evenings are stated for this office alone. No site wide weekend or evening claim is made, per the OVERCLAIM entry on weekend hours.
- No review figure is carried over from another office. §5 ships as a placeholder, per `content-bible.md` §6.
- The 23 year figure is attributed to the BBB profile with its fetch date and flagged as not first-party. No BBB rating is cited, and the non-accreditation is stated.
- No clinician is asserted to work at this office. That assignment is unpublished and is held as an owner question.
- §6 claims one brand, one roster, one domain and seven offices, which is the verified value of D-MARKET-P3-010. It makes no claim about patient records or notes moving between offices, because no first-party source in this handoff confirms that.
- Insurance is named without a network guarantee, per `pricing._insurance_note` and the OVERCLAIM entry on network status.
- No treatment price is stated. Treatment is quote-only per `pricing.treatment_prices_published: false`.
- Only digital X-rays are named as equipment. No other device or technology is claimed anywhere on this page.
- No superlative, ranking or award claim appears. No competitor is named, and §6 frames against the separately owned model.
- No exclamation points and no emoji, per `bannedPunctuation`.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- No em or en dashes anywhere, per G-NODASH.
- No banned-vocab string appears, including inside owner notes. G-BANNED substring-matches without context, so any superseded claim is described rather than quoted.
