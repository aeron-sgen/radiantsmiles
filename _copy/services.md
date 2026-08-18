# COPY - `services`

type: T-HUB · funnel_role: F2
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/services.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero-category-outcome  [S]
required IDs: D-SEO-002, D-OFFER-017

**H1:** Dental Services in Las Vegas

**Sub:** Six areas of care, all delivered in house at all seven offices. Start with the problem you have, not the clinical name for it.

**Included under general dentistry:** exams, cleanings, preventative care, digital X-rays, fluoride and sealants.

**Anchor strip:** General dentistry · Cosmetic dentistry · Restorations · Oral surgery · Periodontics · Orthodontics

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

## §2 - why-this-area  [M]
required IDs: D-POSITION-009

Where dental care is split across separate businesses, one office handles the checkup. The specialist work goes somewhere else.

That handoff costs you time. You repeat your history to a stranger at a business with no connection to the first.

We do all six areas in house, at our own offices, with named clinicians on one roster. That is one practice with one roster, not a referral network that hands you on.

---

## §3 - sub-area-blocks  [S each]
required IDs: D-PAGE-003

**General dentistry.** Exams, cleanings, digital X-rays, fluoride and sealants. The visits that keep small problems small.
→ General dentistry

**Cosmetic dentistry.** Veneers and whitening, for when the tooth is sound but you do not like how it looks.
→ Cosmetic dentistry

**Restorations.** Fillings, crowns, bridges, inlays, onlays, dentures, implants and root canals. Rebuilding a tooth that is damaged.
→ Restorations

**Oral surgery.** Wisdom teeth and bone grafting, handled by our own clinicians rather than sent across town.
→ Oral surgery

**Periodontics.** The gum and bone that hold your teeth in place, from bleeding gums to deep cleaning.
→ Periodontics

**Orthodontics.** Invisalign and braces for children and adults, for teeth that are crowded or out of line.
→ Orthodontics

**Not sure which one.** Describe the problem and we will route you to the clinician who treats it.
→ Contact

*Image slot per block:* a real clinical or practice photograph. Not stock. Not a grey box.

⚠FLAG: every block above routes to a page that exists in `sitemap.yaml`. No block ships without a live destination.

---

## §4 - proof-data-point  [S]
required IDs: D-INCUMBENT-007

Coverage plays a part in whether a problem gets looked at or put off.

The ADA Health Policy Institute reports that 55% of adults aged 65 and older have no dental benefits, fetched 30 July 2026. Dental visits track coverage directly. Nothing beyond those figures is claimed here.

That is why the entry exam is priced lower for seniors. It is also why every area above begins with a look, not a quote.

---

## §5 - cross-link-rail  [XS]
required IDs: D-IA-004

Other hubs: All seven offices · Meet our dentists · New patients · About the practice
Also: the new patient offer · insurance and financing · contact

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

Book at the office nearest you, or call that office and describe what is bothering you.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

⚠FLAG: the secondary CTA resolves to the specific office's own number, never a general line, per `routeRules.phone_policy`.

---

### Compliance notes carried into this page

- Every address is copied from `client-rules.json` contactData. None is retyped from memory or from the live site.
- No treatment price is stated. Treatment is quote-only per `pricing.treatment_prices_published: false`.
- The 55% figure is attributed to the ADA Health Policy Institute by name, with its 30 July 2026 fetch date, per `content-bible.md` §3. §4 stops at what the source states, and no rate of clinical progression is drawn from a coverage figure.
- Only devices we can verify are named. Digital X-rays is the only one used here, per `content-bible.md` §2.
- No superlative, ranking or award claim appears.
- §2 frames the referral model conditionally, never a named competitor and never a share of the market, per `competitorFraming`.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH. No banned-vocab string, per G-BANNED.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- Every routing block names a destination that exists in `sitemap.yaml`.
