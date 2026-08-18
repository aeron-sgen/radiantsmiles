# COPY - `north-decatur`

type: T-FEATURE · funnel_role: F1
cta_primary: Book an appointment · cta_secondary: Call North Decatur
source brief: `_handoff/briefs/north-decatur.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero  [S]
required IDs: D-SEO-002, D-SEO-003

**H1:** North Decatur: Dentist on N. Decatur Blvd., Las Vegas NV 89130

**Sub:** Our North Decatur office, open Sunday 8:30 AM to 3 PM and to 7 PM on Tuesday, with online booking of its own.

**Address:** 6311 N. Decatur Blvd., Suite 140, Las Vegas, NV 89130
**Phone:** (702) 522-0119

**CTA primary:** Book an appointment
**CTA secondary:** Call North Decatur

*Image slot:* a real photograph of THIS office, exterior or reception. Not a stock clinic. Not a grey box.

---

## §2 - at-this-office  [M]
required IDs: D-BRAND-RAILS-016

**Address:** 6311 N. Decatur Blvd., Suite 140, Las Vegas, NV 89130
**Phone:** (702) 522-0119

**Hours**
Monday 10 AM to 6 PM
Tuesday 8:30 AM to 7 PM
Wednesday 10 AM to 5 PM
Thursday 8:45 AM to 4 PM
Friday 8:45 AM to 4 PM
Saturday Closed
Sunday 8:30 AM to 3 PM

Saturday is closed here, so Sunday 8:30 AM to 3 PM is this office's only weekend availability.

Tuesday opens at 8:30 AM and runs to 7 PM, the longest day at this address. Online booking is available at this office through its own booking link.

⚠FLAG: every value above is copied from `client-rules.json` contactData and from nowhere else. Hours are stored there with en dashes and are written here as the word "to", so the range survives G-NODASH.

⚠FLAG: these seven rows are identical to the Lone Mountain office's published hours. The owner must confirm they are genuinely North Decatur's before both pages ship.

⚠OWNER: this office does book online, and its own page must carry that link. It is absent only from the multi-office selector used elsewhere on the site, which lists the other six. Ask whether it should be added there.

---

## §3 - services-here  [M x3]
required IDs: D-OFFER-017

**Everyday care.** Exams, cleanings, preventative care, digital X-rays, fluoride and sealants are all available here. Routes to the general dentistry hub.

**Repair and replace.** Restorations, cosmetic dentistry, and oral and maxillofacial surgery are delivered at this office. Routes to the restorations, cosmetic and oral surgery hubs.

**Gums and alignment.** Periodontics and orthodontics are treated here too. Routes to the periodontics and orthodontics hubs.

All six specialty groups are delivered at this office. Same-day and emergency appointments are available.

---

## §4 - the-team-here  [M]
required IDs: D-POSITION-002

Ten dentists are named on our team page, each with real credentials stated. Two of them are fluent in Spanish.

⚠OWNER §G-11: the per-office clinician assignment is not on the live site. Until it is supplied, this section links to the full team rather than asserting who works at North Decatur.

**Link:** meet the team

---

## §5 - proof  [S]
required IDs: D-POSITION-004

⚠OWNER PLACEHOLDER: no review record has been captured for the North Decatur office.

A verified rating exists for one office in the group and is cited on that office's page, scoped to it. Nothing is totalled across offices and nothing is moved between them.

Supply this office's own record, from a platform you nominate, and it ships with its scope and its date. Until then this section stays empty.

*Image slot:* a photograph of this office or its equipment, which is the proof this page can honestly show today.

---

## §6 - one-practice-seven-offices  [M]
required IDs: D-MARKET-P3-010

North Decatur is one of seven offices Radiant Smiles owns and runs across Las Vegas, North Las Vegas and Henderson.

The same practice, the same roster and the same standard apply at each of the seven. One brand, one roster, one domain.

The market alternative is separately owned or separately branded practices trading under a shared name. That structure hands you a referral where this one hands you an appointment.

⚠FLAG: the wedge is framed against the model only. No competing practice is named here or anywhere on this site, per `competitorFraming`.

---

## §7 - cross-link-rail  [XS]
required IDs: D-IA-004

Other offices: Lone Mountain · Sunrise Manor · Summerlin · North Las Vegas · Henderson · Blue Diamond
Also: all services · new patient offer · all seven locations

---

## §8 - faq  [S each]
required IDs: D-INCUMBENT-009

**Where do I park?**
⚠OWNER PLACEHOLDER: parking at this office is not described in any first-party source held by this build. Supply the real arrangement, including how to find Suite 140.

**What happens at a first visit?**
An examination, X-rays where they add something, then a plain account of what we found. New patients can use the published entry offer for that visit.

**Do you take my insurance at this office?**
Our insurance and financing page lists 41 named plans, including Culinary Health Fund, Teachers Health Trust and Nevada Medicaid. ⚠OWNER §G-12: network status varies by office and by plan, so no blanket guarantee is made here. Call this office with your plan details before you come in.

**What if it is an emergency?**
Same-day and emergency appointments are available. Call (702) 522-0119 and say that it is urgent.

**Can I book online for this office?**
Yes. This office has its own online booking link, and it is on this page. You can also call the office directly.

---

## §9 - closing-cta  [XS]
required IDs: D-OFFER-006

Book at the North Decatur office, or call (702) 522-0119 and speak to this office directly.

**CTA primary:** Book an appointment
**CTA secondary:** Call North Decatur

---

### Compliance notes carried into this page

- The address, ZIP, phone and hours are copied character for character from `client-rules.json` contactData. Nothing is retyped from memory or from the live site.
- Hours are stored in contactData with en dashes. Each range is written with the word "to" so G-NODASH is not tripped and no value changes.
- Sunday is published because it is this office's only weekend availability. The captured range, 8:30 AM to 3 PM, is stated in full above the fold and in the table.
- No shared record or single patient file across offices is claimed. §6 stays inside the canonical value of D-MARKET-P3-010: one brand, one roster, one domain.
- The brief's four required questions all ship in §8, including the emergency route to this office's own number.
- The identical hours shared with another office are flagged for owner confirmation rather than quietly accepted.
- Online booking is stated as available, which the snapshot confirms. The narrower defect, absence from the multi-office selector, is raised as an owner question.
- No review figure is carried over from another office. §5 ships as a placeholder, per `content-bible.md` §6.
- No clinician is asserted to work at this office. That assignment is unpublished and is held as an owner question.
- Insurance is named without a network guarantee, per `pricing._insurance_note` and the OVERCLAIM entry on network status.
- No insurance activity is promised anywhere on this page. The §8 answer sends the reader to this office with their plan details, and offers no check on their behalf. That activity is undefined and blocked under `content-bible.md` §2, per `intake-brief.md` §G-6.
- No treatment price is stated. Treatment is quote-only per `pricing.treatment_prices_published: false`.
- Only digital X-rays are named as equipment. No other device or technology is claimed anywhere on this page.
- No superlative, ranking or award claim appears. No competitor is named, and §6 frames against the separately owned model.
- No exclamation points and no emoji, per `bannedPunctuation`.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- No em or en dashes anywhere, per G-NODASH.
- No banned-vocab string appears, including inside owner notes. G-BANNED substring-matches without context, so any superseded claim is described rather than quoted.
