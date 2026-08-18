# COPY - `sunrise-manor`

type: T-FEATURE · funnel_role: F1
cta_primary: Book an appointment · cta_secondary: Call Sunrise Manor
source brief: `_handoff/briefs/sunrise-manor.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero  [S]
required IDs: D-SEO-002, D-SEO-003

**H1:** Dentist in Sunrise Manor, Las Vegas NV 89107

**Sub:** Our office on S. Nellis Blvd., with evening appointments to 7 PM, its own direct phone line and online booking.

**Address:** 1825 S. Nellis Blvd., Las Vegas, NV 89107
**Phone:** (702) 452-3552

**CTA primary:** Book an appointment
**CTA secondary:** Call Sunrise Manor

*Image slot:* a real photograph of THIS office, exterior or reception. Not a stock clinic. Not a grey box.

---

## §2 - at-this-office  [M]
required IDs: D-BRAND-RAILS-016

**Address:** 1825 S. Nellis Blvd., Las Vegas, NV 89107
**Phone:** (702) 452-3552

**Hours**
Monday 9 AM to 5 PM
Tuesday 11 AM to 7 PM
Wednesday 9 AM to 5 PM
Thursday 11 AM to 7 PM
Friday 9 AM to 5 PM
Saturday Closed
Sunday Closed

Tuesday and Thursday run to 7 PM, so an appointment after work is possible twice a week. Those two days also open later, at 11 AM.

This office is closed at weekends. Weekend hours differ by office, so check the hours listed on each office page.

Online booking is available at this office.

⚠FLAG: every value above is copied from `client-rules.json` contactData and from nowhere else. Hours are stored there with en dashes and are written here as the word "to", so the range survives G-NODASH.

⚠OWNER §G-16: the ZIP for this office conflicts on the live site. 89107 appears site wide and 89104 appears in the booking block. 89107 is carried here from contactData, pending confirmation. NAP consistency depends on resolving it.

---

## §3 - services-here  [M x3]
required IDs: D-OFFER-017

**Everyday care.** Exams, cleanings, preventative care, digital X-rays, fluoride and sealants are all provided here. Routes to the general dentistry hub.

**Repair and replace.** Restorations, cosmetic dentistry and oral and maxillofacial surgery are delivered at this office. Routes to the restorations, cosmetic and oral surgery hubs.

**Gums and alignment.** Periodontics and orthodontics are available here as well. Routes to the periodontics and orthodontics hubs.

All six specialty groups are delivered at this office. Same-day and emergency appointments are available.

---

## §4 - the-team-here  [M]
required IDs: D-POSITION-002

Our team page names ten dentists and states the credentials of each. Two of them are fluent in Spanish.

⚠OWNER §G-11: the live site never says which clinicians practise at which office. Until that is supplied, this section links to the full team rather than claiming a name for this address.

**Link:** meet the team

---

## §5 - proof  [S]
required IDs: D-POSITION-004

⚠OWNER PLACEHOLDER: no review record has been captured for the Sunrise Manor office.

The only verified rating this build holds belongs to a different office, and it stays there. It is not repeated here, not averaged, and not described as a practice wide figure.

Supply a per-office review record from a platform you nominate, and this section fills with a real figure, its scope and its date. Until then it ships empty rather than borrowed.

*Image slot:* a photograph of this office or its equipment, which is proof this build can honestly show today.

---

## §6 - one-practice-seven-offices  [M]
required IDs: D-MARKET-P3-010

Sunrise Manor is one of seven offices Radiant Smiles owns and runs across Las Vegas, North Las Vegas and Henderson.

One brand, one roster of clinicians, one domain. If your work moves you across the valley, your dentist does not have to change with it.

The alternative in this market is a set of separately owned or separately branded practices under a shared name. That structure cannot promise you a consistent standard between addresses, however similar the signage looks.

⚠FLAG: the wedge is stated against the model only. No competing practice is named here or anywhere on this site, per `competitorFraming`.

---

## §7 - cross-link-rail  [XS]
required IDs: D-IA-004

Other offices: Lone Mountain · Summerlin · North Las Vegas · Henderson · North Decatur · Blue Diamond
Also: all services · new patient offer · all seven locations

---

## §8 - faq  [S each]
required IDs: D-INCUMBENT-009

**Where do I park?**
⚠OWNER PLACEHOLDER: parking at this office is not described in any first-party source held by this build. Supply the real arrangement, or this answer does not ship.

**What happens at a first visit?**
An examination, X-rays where they are needed, then a plain account of what we found. New patients can use the published entry offer for that visit.

**Do you take my insurance at this office?**
Our insurance and financing page lists 41 named plans, including Culinary Health Fund, Teachers Health Trust and Nevada Medicaid. ⚠OWNER §G-12: network status varies by office and by plan, so this page makes no blanket guarantee. Call with your plan details before your appointment.

**What if it is an emergency?**
Same-day and emergency appointments are available. Call (702) 452-3552 and tell us it is urgent.

---

## §9 - closing-cta  [XS]
required IDs: D-OFFER-006

Book at the Sunrise Manor office, or call (702) 452-3552 and speak to this office directly.

**CTA primary:** Book an appointment
**CTA secondary:** Call Sunrise Manor

---

### Compliance notes carried into this page

- The address, ZIP, phone and hours are copied character for character from `client-rules.json` contactData. Nothing is retyped from memory or from the live site.
- The ZIP conflict is surfaced as an owner question rather than silently resolved. 89107 is carried because contactData carries it.
- Hours are stored in contactData with en dashes. Each range is written with the word "to" so G-NODASH is not tripped and no value changes.
- No blanket weekend or evening claim is made, and no weekend availability is promised for any other office. The closed weekend is stated plainly, per the OVERCLAIM entry on weekend hours.
- No shared record or single patient file across offices is claimed. §6 stays inside the canonical value of D-MARKET-P3-010: one brand, one roster, one domain.
- No review figure is borrowed from another office. §5 ships as a placeholder, per `content-bible.md` §6.
- No clinician is asserted to work at this office. That assignment is unpublished and is held as an owner question.
- Insurance is named without a network guarantee, per `pricing._insurance_note` and the OVERCLAIM entry on network status.
- No treatment price is stated. Treatment is quote-only per `pricing.treatment_prices_published: false`.
- No superlative, ranking or award claim appears. No competitor is named.
- No exclamation points and no emoji, per `bannedPunctuation`.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- No em or en dashes anywhere, per G-NODASH.
- No banned-vocab string appears, including inside owner notes. G-BANNED substring-matches without context, so any superseded claim is described rather than quoted.
