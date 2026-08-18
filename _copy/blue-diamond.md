# COPY - `blue-diamond`

type: T-FEATURE · funnel_role: F1
cta_primary: Book an appointment · cta_secondary: Call Blue Diamond
source brief: `_handoff/briefs/blue-diamond.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero  [S]
required IDs: D-SEO-002, D-SEO-003

**H1:** Dentist on Blue Diamond Rd., Las Vegas NV 89139

**Sub:** Our Blue Diamond office, open to 7 PM on Thursday, with its own direct phone line and online booking.

**Address:** 5095 S. Blue Diamond Rd., Suite 105, Las Vegas, NV 89139
**Phone:** (702) 331-0010

**CTA primary:** Book an appointment
**CTA secondary:** Call Blue Diamond

*Image slot:* a real photograph of THIS office, exterior or reception. Not a stock clinic. Not a grey box.

---

## §2 - at-this-office  [M]
required IDs: D-BRAND-RAILS-016

**Address:** 5095 S. Blue Diamond Rd., Suite 105, Las Vegas, NV 89139
**Phone:** (702) 331-0010

**Hours**
Monday 9 AM to 5 PM
Tuesday Call for hours
Wednesday 9 AM to 5 PM
Thursday 11 AM to 7 PM
Friday Call for hours
Saturday By appointment only
Sunday Call for hours

Thursday opens later, at 11 AM, and runs to 7 PM for an appointment after work. Saturday here is by appointment only.

Three rows read "Call for hours" because those days are absent from every source this build holds. Call (702) 331-0010 and we will tell you. Online booking is available at this office.

⚠OWNER: Tuesday, Friday and Sunday are not listed anywhere on the live site for this office. They ship as "Call for hours" and never as "Closed", which would be an invented fact. Supply the real hours and they replace this line.

⚠FLAG: every value above is copied from `client-rules.json` contactData and from nowhere else. Hours are stored there with en dashes and are written here as the word "to", so the range survives G-NODASH.

---

## §3 - services-here  [M x3]
required IDs: D-OFFER-017

**Everyday care.** Exams, cleanings, preventative care, digital X-rays, fluoride and sealants are provided at this office. Routes to the general dentistry hub.

**Repair and replace.** Restorations, cosmetic dentistry, and oral and maxillofacial surgery are all done here. Routes to the restorations, cosmetic and oral surgery hubs.

**Gums and alignment.** Periodontics and orthodontics are handled at this address as well. Routes to the periodontics and orthodontics hubs.

All six specialty groups are delivered at this office. Same-day and emergency appointments are available.

---

## §4 - the-team-here  [M]
required IDs: D-POSITION-002

Ten dentists are named on our team page, each with the credentials our own site states for them. Two of them are fluent in Spanish.

⚠OWNER: our team page carries a school and a graduation year for some of the ten and not for others. Supply the missing years and schools, or those entries stay as captured.

⚠OWNER §G-11: the live site never records which clinicians practise at Blue Diamond. Until that is supplied, this section links to the full team and asserts nobody for this address.

**Link:** meet the team

---

## §5 - proof  [S]
required IDs: D-POSITION-004

⚠OWNER PLACEHOLDER: the capture carries one unattributed patient quote, repeated site wide, and no rating record scoped to this office.

One office in the group has a verified rating, cited on its own page with its platform, its scope and its date. It is not lifted across to this page.

Nominate a review platform and supply this office's record. It ships here with its scope attached, or this section ships empty rather than borrowed.

*Image slot:* a photograph of this office or its team, which is the proof this page can honestly show today.

---

## §6 - one-practice-seven-offices  [M]
required IDs: D-MARKET-P3-010

Blue Diamond is one of seven offices Radiant Smiles owns and staffs across Las Vegas, North Las Vegas and Henderson.

One practice, one roster, one brand, one domain. If this office is not open on the day you need, another of the seven is part of the same practice.

The market alternative is separately owned or separately branded practices sharing a name. Where offices are separately owned, consistency across them is structurally unpromisable.

⚠FLAG: this wedge is framed against the model only. No competing practice is named here or anywhere on this site, per `competitorFraming`.

---

## §7 - cross-link-rail  [XS]
required IDs: D-IA-004

Other offices: Lone Mountain · Sunrise Manor · Summerlin · North Las Vegas · Henderson · North Decatur
Also: all services · new patient offer · all seven locations

---

## §8 - faq  [S each]
required IDs: D-INCUMBENT-009

**Where do I park?**
⚠OWNER PLACEHOLDER: parking at this office is not described in any first-party source held by this build. Supply the real arrangement, including how to find Suite 105.

**What happens at a first visit?**
An examination, X-rays where they are needed, then a plain account of what we found and what we suggest. New patients can use the published entry offer.

**Do you take my insurance at this office?**
Our insurance and financing page lists 41 named plans, including Culinary Health Fund, Teachers Health Trust and Nevada Medicaid. ⚠OWNER §G-12: network status varies by office and by plan, so no blanket guarantee is made. Call with your plan details.

**What if it is an emergency?**
Same-day and emergency appointments are available. Call (702) 331-0010 and tell us that it is urgent.

---

## §9 - closing-cta  [XS]
required IDs: D-OFFER-006

Book at the Blue Diamond office, or call (702) 331-0010 and speak to this office directly.

**CTA primary:** Book an appointment
**CTA secondary:** Call Blue Diamond

---

### Compliance notes carried into this page

- The address, ZIP, phone and hours are copied character for character from `client-rules.json` contactData. Nothing is retyped from memory or from the live site.
- Hours are stored in contactData with en dashes. Each range is written with the word "to" so G-NODASH is not tripped and no value changes.
- The three unlisted days ship as "Call for hours". Writing "Closed" would state a fact no source supports, so the gap is surfaced instead.
- No blanket weekend or evening claim is made. Saturday is stated as by appointment only, exactly as contactData records it.
- No review figure is carried over from another office. §5 ships as a placeholder, per `content-bible.md` §6.
- No clinician is asserted to work at this office. That assignment is unpublished and is held as an owner question.
- §4 claims no completeness for the credential set. The uneven capture of schools and years is surfaced as an owner question rather than papered over.
- The emergency answer uses the verified wording, same-day and emergency appointments available, per `content-bible.md` §3. No blanket weekend or evening promise is made anywhere on this page.
- §6 claims one practice, one roster, one brand and one domain. No shared patient record or shared imaging system is claimed, because no first-party source confirms one.
- Insurance is named without a network guarantee, per `pricing._insurance_note` and the OVERCLAIM entry on network status.
- No treatment price is stated. Treatment is quote-only per `pricing.treatment_prices_published: false`.
- Only digital X-rays are named as equipment. No other device or technology is claimed anywhere on this page.
- No superlative, ranking or award claim appears. No competitor is named, and §6 frames against the separately owned model.
- No exclamation points and no emoji, per `bannedPunctuation`.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- No em or en dashes anywhere, per G-NODASH.
- No banned-vocab string appears, including inside owner notes. G-BANNED substring-matches without context, so any superseded claim is described rather than quoted.
