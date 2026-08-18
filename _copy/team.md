# COPY - `team`

type: T-HUB · funnel_role: F2
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/team.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero-category-outcome  [S]
required IDs: D-SEO-002, D-POSITION-002

**H1:** Meet Our Dentists

**Sub:** Ten named dentists on one roster, across seven offices. See who is on that roster, and what our own site records for each of them, before you book.

**Anchor strip:** Adrian Ruiz · Norma Miranda · Vivi Dang-Roberts · Max Torres · Victoria Quizon · Stephanie Andrade · Chris Schaudt · Karthikeyan Subramani · Omar Lavado · Andy Landaverde

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

## §2 - why-this-area  [M]
required IDs: D-POSITION-009

Where a practice does not publish its clinicians, you meet your dentist for the first time in the chair. The booking is a slot, not a person.

Every clinician here is named. Where a degree, a school, a year or an award is shown, it is quoted from the practice's own roster. Two of them speak Spanish.

They are one clinical roster working across all seven offices. This is one practice, not a franchise and not a referral network.

---

## §3 - sub-area-blocks  [S each]
required IDs: D-PAGE-003

**Dr. Adrian Ruiz, DDS.** A second generation dentist, DDS from the UCLA School of Dentistry in 1995, with over 22 years of practice experience.
→ Dr. Adrian Ruiz

**Dr. Norma Miranda, DDS.** DDS from the UCLA School of Dentistry in 1976, with over 41 years of experience, building long term relationships with her patients.
→ Dr. Norma Miranda

**Dr. Vivi Dang-Roberts.** A graduate of Loma Linda School of Dentistry in 1994, who is gentle, caring and compassionate.
→ Dr. Vivi Dang-Roberts

**Dr. Max Torres.** Born and raised in Las Vegas, and a UNLV graduate. He became interested in dentistry through the care he received from his dentists as a child.
→ Dr. Max Torres

**Dr. Victoria Quizon, DMD.** Born and raised in Las Vegas, with a DMD from UNLV in 2023. An active member of the American Dental Association and the American Academy of Implant Dentistry.
→ Dr. Victoria Quizon

**Dr. Stephanie Andrade, DMD.** DMD from the UNLV School of Dental Medicine, fluent in Spanish, with a special interest in cosmetic and restorative dentistry.
→ Dr. Stephanie Andrade

**Dr. Chris Schaudt.** Modern dentistry with a warm, personal approach, from routine cleanings through to smile makeovers.
→ Dr. Chris Schaudt

**Dr. Karthikeyan Subramani.** MSc in Orthodontics and Dentofacial Orthopedics, and holder of the Milo Hellman Award from the American Association of Orthodontists in 2019.
→ Dr. Karthikeyan Subramani

**Dr. Omar Lavado, DMD.** Born in Lima, Peru and raised in Las Vegas, DMD from the UNLV School of Dental Medicine.
→ Dr. Omar Lavado

**Dr. Andy Landaverde.** A first generation graduate, fluent in Spanish, whose goal is to build meaningful, trusting relationships with patients and staff.
→ Dr. Andy Landaverde

**Not sure who to ask for.** Describe the problem and we will book you with the clinician who treats it.
→ Contact

*Image slot per block:* a real portrait of that clinician. No stock image and no substituted face may stand in.

⚠FLAG: every block above routes to a page that exists in `sitemap.yaml`. No block ships without a live destination.

⚠OWNER: confirm the current roster before this page ships. Three of these biographies are served on the live site from URLs and page titles naming a different doctor. The ten names above are carried from the practice's own roster page, captured 30 July 2026.

⚠FLAG: every credential above is quoted from a first-party capture of the practice's roster page. No degree, year, school, membership or award is inferred, rounded or filled in.

---

## §4 - proof-data-point  [S]
required IDs: D-INCUMBENT-007

Two records sit behind this page. Both are stated with their source and their date.

55% of adults aged 65 and older have no dental benefits, per the ADA Health Policy Institute, fetched 30 July 2026. Dental visits track coverage directly. These figures describe dental coverage across adults, not what a patient looks for in a clinician.

Our Lake Mead office is rated 4.5 stars across 506 patient reviews on Birdeye, fetched 30 July 2026. That figure is for the Lake Mead office only.

⚠OWNER: supply the practice wide figure and nominate the platform of record, or this rating stays scoped to one office. It must never be restated as a practice wide rating, per `content-bible.md` §6.

---

## §5 - cross-link-rail  [XS]
required IDs: D-IA-004

Other hubs: All services · All seven offices · New patients · About the practice
Also: the new patient offer · patient reviews · contact

---

## §6 - routing-band  [XS]
required IDs: D-PAGE-007

**Find the office nearest you.** Our clinicians work across all seven:

- Lone Mountain, 7469 W. Lake Mead Blvd., Suite 270, Las Vegas 89128
- Sunrise Manor, 1825 S. Nellis Blvd., Las Vegas 89107
- Summerlin, 8961 W. Sahara Ave., Suite 108, Las Vegas 89117
- North Las Vegas, 5195 Camino Al Norte Rd., North Las Vegas 89031
- Henderson, 2633 W. Horizon Ridge Pkwy., Suite 130, Henderson 89052
- North Decatur, 6311 N. Decatur Blvd., Suite 140, Las Vegas 89130
- Blue Diamond, 5095 S. Blue Diamond Rd., Suite 105, Las Vegas 89139

⚠OWNER: the Sunrise Manor ZIP conflicts on the live site. 89107 is carried here from `client-rules.json` contactData, pending confirmation against 89104 in the booking block.

⚠OWNER: per-clinician office assignments are not published on the live site. No location page names a dentist, so no page here states which dentist sits at which office until you confirm it.

---

## §7 - closing-cta  [XS]
required IDs: D-OFFER-006

Ask for a clinician by name when you book, or call the office and tell them what is wrong.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

⚠FLAG: the secondary CTA resolves to the specific office's own number, never a general line, per `routeRules.phone_policy`.

---

### Compliance notes carried into this page

- Every credential, school, year and membership is copied from the first-party roster capture, with the exact scope its source gives it. None is invented, per `proofPolicy.real_only_for`.
- No years-of-experience figure carries a place. The capture records years of practice or of experience, and never says where those years were spent.
- The one award named is real, cited and dated. No unverifiable award or recognition appears anywhere on this page.
- The roster-integrity gap is surfaced as an owner flag rather than papered over.
- The Birdeye rating carries its platform, its scope and its fetch date, and is never aggregated across offices.
- The 55% figure is attributed to the ADA Health Policy Institute by name, with its 30 July 2026 fetch date. §4 states its scope plainly, so no consequence about patient preference is drawn from it.
- No completeness claim is made about the credentials. §1 and §2 both say only what our own roster page records for each clinician.
- Addresses and ZIPs are copied from `client-rules.json` contactData, character for character.
- No treatment price is stated. Treatment is quote-only per `pricing.treatment_prices_published: false`.
- No superlative or ranking claim appears. No competitor is named, per `competitorFraming`.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH. No banned-vocab string, per G-BANNED.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- Every routing block names a destination that exists in `sitemap.yaml`.
