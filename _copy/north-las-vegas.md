# COPY - `north-las-vegas`

type: T-FEATURE · funnel_role: F1
cta_primary: Book an appointment · cta_secondary: Call North Las Vegas
source brief: `_handoff/briefs/north-las-vegas.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero  [S]
required IDs: D-SEO-002, D-SEO-003

**H1:** Dentist in North Las Vegas, NV 89031

**Sub:** Our office on Camino Al Norte, open a full Saturday, with its own direct phone line and online booking.

**Address:** 5195 Camino Al Norte Rd., North Las Vegas, NV 89031
**Phone:** (702) 509-1967

**CTA primary:** Book an appointment
**CTA secondary:** Call North Las Vegas

*Image slot:* a real photograph of THIS office, exterior or reception. Not a stock clinic. Not a grey box.

---

## §2 - at-this-office  [M]
required IDs: D-BRAND-RAILS-016

**Address:** 5195 Camino Al Norte Rd., North Las Vegas, NV 89031
**Phone:** (702) 509-1967

**Hours**
Monday 9 AM to 5 PM
Tuesday 9 AM to 7 PM
Wednesday 9 AM to 5 PM
Thursday 9 AM to 7 PM
Friday 9 AM to 5 PM
Saturday 9 AM to 5 PM
Sunday Closed

Saturday here runs the same full day as a weekday, 9 AM to 5 PM. Sunday is closed.

Tuesday and Thursday stay open to 7 PM. So this address offers two weekday evenings and a whole Saturday. Online booking is available at this office.

⚠FLAG: every value above is copied from `client-rules.json` contactData and from nowhere else. Hours are stored there with en dashes and are written here as the word "to", so the range survives G-NODASH.

---

## §3 - services-here  [M x3]
required IDs: D-OFFER-017

**Everyday care.** Exams, cleanings, preventative care, digital X-rays, fluoride and sealants are handled at this address. Routes to the general dentistry hub.

**Repair and replace.** Restorations, cosmetic dentistry, and oral and maxillofacial surgery all happen here. Routes to the restorations, cosmetic and oral surgery hubs.

**Gums and alignment.** Periodontics and orthodontics are treated at this office rather than sent out. Routes to the periodontics and orthodontics hubs.

All six specialty groups are delivered at this office. Same-day and emergency appointments are available.

---

## §4 - the-team-here  [M]
required IDs: D-POSITION-002

Ten dentists are named on our team page, with the credentials of each written out. Two of them are fluent in Spanish.

⚠OWNER §G-11: no page on the live site records which clinicians work at which address. Until the owner supplies that, this section points to the full team and names nobody here.

**Link:** meet the team

---

## §5 - proof  [S]
required IDs: D-POSITION-004

⚠OWNER PLACEHOLDER: no review record has been captured for the North Las Vegas office.

One office in the group holds a verified rating. It is cited on that office's own page, with its platform and its date, and it stays there.

Nominate a platform and supply this office's own record. It ships here with its scope and its date attached, or it does not ship at all.

*Image slot:* a photograph of this office or its team, which is the proof this page can honestly show today.

---

## §6 - one-practice-seven-offices  [M]
required IDs: D-MARKET-P3-010

North Las Vegas is one of seven offices Radiant Smiles owns and staffs across Las Vegas, North Las Vegas and Henderson.

Same practice, same roster, same standard at whichever of the seven you pick. One brand, one roster, one domain, not seven separate businesses.

The alternative model in this market is separately owned or separately branded practices under a shared name. A referral out of one of those means a new practice, a new front desk and a new wait.

⚠FLAG: this wedge is framed against the model only. No competing practice is named here or anywhere on this site, per `competitorFraming`.

---

## §7 - cross-link-rail  [XS]
required IDs: D-IA-004

Other offices: Lone Mountain · Sunrise Manor · Summerlin · Henderson · North Decatur · Blue Diamond
Also: all services · new patient offer · all seven locations

---

## §8 - faq  [S each]
required IDs: D-INCUMBENT-009

**Where do I park?**
⚠OWNER PLACEHOLDER: parking at this office is not described in any first-party source held by this build. Supply the real arrangement before this answer ships.

**What happens at a first visit?**
An examination, X-rays where they add something, then a plain account of what we found. New patients can use the published entry offer for that visit.

**Do you take my insurance at this office?**
Our insurance and financing page lists 41 named plans, including Culinary Health Fund, Teachers Health Trust and Nevada Medicaid. ⚠OWNER §G-12: network status varies by office and by plan, so nothing blanket is promised here. Call us with your plan details first.

**What if it is an emergency?**
Same-day and emergency appointments are available. Call (702) 509-1967 and say that it is urgent.

---

## §9 - closing-cta  [XS]
required IDs: D-OFFER-006

Book at the North Las Vegas office, or call (702) 509-1967 and reach this office directly.

**CTA primary:** Book an appointment
**CTA secondary:** Call North Las Vegas

---

### Compliance notes carried into this page

- The address, ZIP, phone and hours are copied character for character from `client-rules.json` contactData. Nothing is retyped from memory or from the live site.
- Hours are stored in contactData with en dashes. Each range is written with the word "to" so G-NODASH is not tripped and no value changes.
- The full Saturday is stated for this office only. No site wide weekend claim is made, per the OVERCLAIM entry on weekend hours.
- No review figure is carried over from another office. §5 ships as a placeholder, per `content-bible.md` §6.
- No clinician is asserted to work at this office. That assignment is unpublished and is held as an owner question.
- Insurance is named without a network guarantee, per `pricing._insurance_note` and the OVERCLAIM entry on network status.
- No treatment price is stated. Treatment is quote-only per `pricing.treatment_prices_published: false`.
- Only digital X-rays are named as equipment. No other device or technology is claimed anywhere on this page.
- No superlative, ranking or award claim appears. No competitor is named, and §6 frames against the separately owned model.
- No shared record or single patient file across offices is claimed. §6 stays inside the canonical value of D-MARKET-P3-010: one brand, one roster, one domain.
- No exclamation points and no emoji, per `bannedPunctuation`.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- No em or en dashes anywhere, per G-NODASH.
- No banned-vocab string appears, including inside owner notes. G-BANNED substring-matches without context, so any superseded claim is described rather than quoted.
