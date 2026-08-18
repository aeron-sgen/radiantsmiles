# COPY - `periodontics`

type: T-HUB · funnel_role: F2
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/periodontics.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero-category-outcome  [S]
required IDs: D-SEO-002, D-IA-002

**H1:** Periodontics in Las Vegas

**Sub:** Care for the gum and bone that hold your teeth in place. Start with the problem you actually have, not the clinical term for it.

**Anchor strip:** Gum disease · Deep cleaning · Gum recession · Laser treatment · Crown lengthening · Antibiotic treatment · Grinding · Oral cancer screening · Routine cleaning

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

## §2 - why-this-area  [M]
required IDs: D-POSITION-009

Gum problems are quiet. They rarely hurt early, which is why they are usually found at a checkup rather than reported by the patient.

Where a practice refers out, you are sent somewhere else. You see a general dentist, then a specialist across town, which means a new practice, a new front desk and a new wait.

We treat this in house, at our own offices, with named clinicians. The person who checks your gums next works in the same practice, not a separate business across town.

---

## §3 - sub-area-blocks  [S each]
required IDs: D-PAGE-003

**Gum disease.** Bleeding, swelling or gums pulling away from the tooth. Find out how far it has gone, and what stops it.
→ Periodontal disease

**Deep cleaning.** Scaling and root planing to clean below the gumline, where a normal cleaning cannot reach.
→ Periodontal scaling and root planing

**Gum recession.** When the gum pulls back and the root starts to show or feel sensitive.
→ Gum recession

**Laser treatment.** The SIROlaser, used for gum work where it is the right tool.
→ SIROlaser

**Crown lengthening.** Reshaping gum and bone so a crown or filling has enough tooth to hold on to.
→ Crown lengthening

**Antibiotic treatment.** Targeted antibiotic therapy alongside cleaning, where the infection calls for it.
→ Antibiotic treatment

**Grinding and clenching.** Night guards for bruxism, made to your own bite and reviewed over time.
→ Bruxism

**Oral cancer screening.** A short visual and physical check, done as part of your exam.
→ Oral cancer exam

**Routine cleaning.** Standard prophylaxis for gums that are healthy and staying that way.
→ Prophylaxis teeth cleaning

*Image slot per block:* a real clinical or practice photograph. Not stock. Not a grey box.

⚠FLAG: each block above routes to a page that exists in the sitemap. No block ships without a live destination.

---

## §4 - proof-data-point  [S]
required IDs: D-INCUMBENT-007

The ADA Health Policy Institute reports that 55% of adults aged 65 and older have no dental benefits, fetched 30 July 2026. Dental visits track coverage directly. That is the evidence base for our senior price, not a scare statistic.

Our Lake Mead office is rated 4.5 stars across 506 patient reviews on Birdeye, fetched 30 July 2026.

⚠OWNER: supply the practice wide figure and nominate the platform of record, or this rating stays scoped to one office. Per `content-bible.md` §6 the scope is never dropped and figures are never aggregated across offices.

---

## §5 - cross-link-rail  [XS]
required IDs: D-IA-004

Other areas of care: General dentistry · Cosmetic dentistry · Restorative · Orthodontics · Surgical
Also: new patient offer · all seven offices · contact

---

## §6 - routing-band  [XS]
required IDs: D-PAGE-007

**Find the office nearest you.** Seven offices across the valley:

- Lone Mountain, 7469 W. Lake Mead Blvd., Suite 270, Las Vegas 89128
- Sunrise Manor, 1825 S. Nellis Blvd., Las Vegas 89107
- Summerlin, 8961 W. Sahara Ave., Suite 108, Las Vegas 89117
- North Las Vegas, 5195 Camino Al Norte Rd., North Las Vegas 89031
- Henderson, 2633 W. Horizon Ridge Pkwy., Suite 130, Henderson 89052
- North Decatur, 6311 N. Decatur Blvd., Suite 140, Las Vegas 89130
- Blue Diamond, 5095 S. Blue Diamond Rd., Suite 105, Las Vegas 89139

⚠OWNER: the Sunrise Manor ZIP conflicts on the live site. 89107 is carried here from `client-rules.json` contactData, pending confirmation against 89104 in the booking block. NAP consistency depends on resolving it.

---

## §7 - closing-cta  [XS]
required IDs: D-OFFER-006

Book an appointment at whichever office suits you, or call that office directly on the number listed above.

Our booking links and phone numbers are per office. Our own appointment request page states that a scheduling coordinator contacts you to confirm the appointment.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

### Compliance notes carried into this page

- Every address is copied from `client-rules.json` contactData. None is retyped from memory or from the live site.
- No treatment price is stated. Treatment is quote-only per `pricing.treatment_prices_published: false`.
- Only devices we can verify are named. SIROlaser and digital X-rays are the two, per `content-bible.md` §2.
- No superlative, ranking or award claim appears.
- §2 frames against the referral model on structure alone, never a named competitor, per `competitorFraming`. No claim is made about how any other practice keeps records.
- No shared record, chart or patient file across offices is asserted, and none is implied by contrast. Only the verified structure ships: one practice, one roster, one brand, seven offices.
- The device rule is recorded here rather than in §3 body prose. Build policy does not ship to the patient.
- The review figure is scoped to the Lake Mead office in the visible prose. `content-bible.md` §6 already settles that it is not a practice-wide total, so only the practice-wide figure is asked for.
- The §1 anchor strip carries one entry for each of the nine §3 blocks. Every destination in the brief's links_to is reachable from the hero.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH. No banned-vocab string, per G-BANNED.
- Every routing block names a destination that exists in `sitemap.yaml`.
- §7 makes no claim about how a request is handled internally. `routeRules` receipts only that the booking link and the phone number are per office. Our own appointment request page publishes the scheduling coordinator call-back, so that is carried rather than denied.
- The bruxism block states what the appliance is, not what it will achieve. Promising that wear stops before it reaches the enamel is a clinical result under `content-bible.md` §3b, and it contradicts our own bruxism page.
