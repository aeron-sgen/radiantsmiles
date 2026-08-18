# COPY - `summerlin`

type: T-FEATURE · funnel_role: F1
cta_primary: Book an appointment · cta_secondary: Call Summerlin
source brief: `_handoff/briefs/summerlin.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero  [S]
required IDs: D-SEO-002, D-SEO-003

**H1:** Dentist in Summerlin, Las Vegas NV 89117

**Sub:** Our office on W. Sahara Ave., open Saturday, with its own direct phone line and online booking.

**Address:** 8961 W. Sahara Ave., Suite 108, Las Vegas, NV 89117
**Phone:** (702) 360-4800

**CTA primary:** Book an appointment
**CTA secondary:** Call Summerlin

*Image slot:* a real photograph of THIS office, exterior or reception. Not a stock clinic. Not a grey box.

---

## §2 - at-this-office  [M]
required IDs: D-BRAND-RAILS-016

**Address:** 8961 W. Sahara Ave., Suite 108, Las Vegas, NV 89117
**Phone:** (702) 360-4800

**Hours**
Monday 8:30 AM to 4:30 PM
Tuesday 8:30 AM to 4 PM
Wednesday 8:30 AM to 7 PM
Thursday 9 AM to 6 PM
Friday 8:30 AM to 4 PM
Saturday 8:30 AM to 3 PM
Sunday Closed

Saturday is open here until 3 PM, so a weekend appointment does not need a day off work. Sunday is closed.

Wednesday runs to 7 PM and Thursday to 6 PM, so two weekday evenings are available. Online booking is available at this office.

⚠FLAG: every value above is copied from `client-rules.json` contactData and from nowhere else. Hours are stored there with en dashes and are written here as the word "to", so the range survives G-NODASH.

---

## §3 - services-here  [M x3]
required IDs: D-OFFER-017

**Everyday care.** General dentistry here covers exams, cleanings, preventative care, digital X-rays, fluoride and sealants. Routes to the general dentistry hub.

**Repair and replace.** Restorations, cosmetic dentistry and oral and maxillofacial surgery are delivered at this office. Routes to the restorations, cosmetic and oral surgery hubs.

**Gums and alignment.** Periodontics and orthodontics are provided here as well. Routes to the periodontics and orthodontics hubs.

All six specialty groups are delivered at this office. Same-day and emergency appointments are available.

---

## §4 - the-team-here  [M]
required IDs: D-POSITION-002

Ten dentists are named on our team page, each with the credentials our own site states for them. Two of them are fluent in Spanish.

⚠OWNER §G-11: the per-office clinician assignment is not on the live site. Until the owner supplies it, this section links to the full team and names nobody for this address.

**Link:** meet the team

---

## §5 - proof  [S]
required IDs: D-POSITION-004

⚠OWNER PLACEHOLDER: no review record has been captured for the Summerlin office.

One office in the group has a verified rating. It is cited on that office's own page, with its platform and its date, and it is not carried across to this one.

Nominate a review platform and supply this office's own record. It ships here with its scope and date attached, or it does not ship at all.

*Image slot:* a photograph of this office or its equipment, which is the proof this page can honestly show today.

---

## §6 - one-practice-seven-offices  [M]
required IDs: D-MARKET-P3-010

Summerlin is one of seven offices Radiant Smiles owns and runs across Las Vegas, North Las Vegas and Henderson.

Same practice, same roster, same standard, whichever of the seven you choose. One brand and one domain, not seven separately branded businesses.

The market alternative is a group of separately owned or separately branded practices sharing a name. Consistency between those offices is a hope rather than a structure.

⚠FLAG: this wedge is framed against the model only. No competing practice is named here or anywhere on this site, per `competitorFraming`.

---

## §7 - cross-link-rail  [XS]
required IDs: D-IA-004

Other offices: Lone Mountain · Sunrise Manor · North Las Vegas · Henderson · North Decatur · Blue Diamond
Also: all services · new patient offer · all seven locations

---

## §8 - faq  [S each]
required IDs: D-INCUMBENT-009

**Where do I park?**
⚠OWNER PLACEHOLDER: parking at this office is not described in any first-party source held by this build. Supply the real arrangement, including how to find Suite 108, or this answer does not ship.

**What happens at a first visit?**
An examination, X-rays where they are needed, then a plain account of what we found and what we suggest. New patients can use the published entry offer.

**Do you take my insurance at this office?**
Our insurance and financing page lists 41 named plans, including Culinary Health Fund, Teachers Health Trust and Nevada Medicaid. ⚠OWNER §G-12: network status varies by office and by plan, so no blanket guarantee is made. Call with your plan details first.

**What if it is an emergency?**
Same-day and emergency appointments are available. Call (702) 360-4800 and tell us it is urgent.

---

## §9 - closing-cta  [XS]
required IDs: D-OFFER-006

Book at the Summerlin office, or call (702) 360-4800 and speak to this office directly.

**CTA primary:** Book an appointment
**CTA secondary:** Call Summerlin

---

### Compliance notes carried into this page

- The address, ZIP, phone and hours are copied character for character from `client-rules.json` contactData. Nothing is retyped from memory or from the live site.
- Hours are stored in contactData with en dashes. Each range is written with the word "to" so G-NODASH is not tripped and no value changes.
- Saturday opening is stated for this office only. No site wide weekend claim is made, per the OVERCLAIM entry on weekend hours.
- No review figure is borrowed from another office. §5 ships as a placeholder, per `content-bible.md` §6.
- No clinician is asserted to work at this office. That assignment is unpublished and is held as an owner question.
- Insurance is named without a network guarantee, per `pricing._insurance_note` and the OVERCLAIM entry on network status.
- No treatment price is stated. Treatment is quote-only per `pricing.treatment_prices_published: false`.
- No superlative, ranking or award claim appears. No competitor is named.
- No exclamation points and no emoji, per `bannedPunctuation`.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- No em or en dashes anywhere, per G-NODASH.
- No banned-vocab string appears, including inside owner notes. G-BANNED substring-matches without context, so any superseded claim is described rather than quoted.
