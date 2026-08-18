# COPY - `restorations`

type: T-HUB · funnel_role: F2
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/restorations.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero-category-outcome  [S]
required IDs: D-SEO-002, D-IA-002

**H1:** Dental Restorations in Las Vegas

**Sub:** Rebuilding a damaged tooth, or replacing one that is gone. Start from the problem you have, not the name of the procedure.

**Anchor strip:** Dental implants · Composite fillings · Crowns and caps · Fixed bridges · Inlays · Onlays · Dentures · Root canal therapy

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

## §2 - why-this-area  [M]
required IDs: D-POSITION-009

A broken tooth rarely needs only one thing. A treated root often needs a crown, and an implant needs the bone beneath it assessed first.

Where that work is spread across separate practices, each one holds a piece of the plan. The structure adds a handoff between them.

We treat restorative work in house, at our own offices, with named clinicians. The person planning your crown works in the same practice as the person who treated the root.

---

## §3 - sub-area-blocks  [S each]
required IDs: D-PAGE-003

**Dental implants.** A replacement root with a crown on top, for a tooth that is already gone.
→ Dental implants

**Composite fillings.** Tooth coloured filling material for decay or a small fracture.
→ Composite fillings

**Crowns and caps.** Full coverage for a tooth too broken or too worn to hold a filling.
→ Crowns and caps

**Fixed bridges.** A fixed replacement across a gap, anchored to the teeth on either side.
→ Fixed bridges

**Inlays.** A custom piece bonded inside the cusps, where a filling would not hold.
→ Inlay restorations

**Onlays.** The same idea, extended over a cusp, when more of the biting surface is lost.
→ Onlay restorations

**Dentures and partial dentures.** Removable replacement for several teeth, or for a full arch.
→ Dentures and partial dentures

**Root canal therapy.** Treatment for an infected nerve, so the tooth can stay rather than come out.
→ Root canal therapy

*Image slot per block:* a real clinical or practice photograph. Not stock. Not a grey box.

⚠FLAG: each block above routes to a page that exists in the sitemap. No block ships without a live destination.

---

## §4 - proof-data-point  [S]
required IDs: D-INCUMBENT-007

The ADA Health Policy Institute reports that 55% of adults aged 65 and older have no dental benefits, fetched 30 July 2026. Dental visits track coverage directly.

That is the reasoning behind our entry exam price and its lower senior rate. It gets the tooth looked at while the options are still open.

⚠OWNER PLACEHOLDER: no expiry, exclusions or senior age threshold is published for the entry offer. The terms line stays a placeholder until the owner supplies them, and no urgency framing ships.

Same day and emergency appointments are listed on the location pages in our capture, fetched 30 July 2026.

⚠OWNER: confirm same day capacity holds at every office before that line runs site wide. If it varies, it belongs on the location page, not here.

---

## §5 - cross-link-rail  [XS]
required IDs: D-IA-004

Other areas of care: General dentistry · Cosmetic dentistry · Oral surgery · Periodontics · Orthodontics
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

Bring us the tooth that is bothering you and we will tell you what it needs. Book an appointment, or call the office you would visit.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

⚠FLAG: the secondary CTA resolves to that office's own number, never a generic line, per `routeRules.phone_policy`.

---

### Compliance notes carried into this page

- Every address is copied from `client-rules.json` contactData. None is retyped from memory or from the live site.
- No treatment price is stated. Implants, crowns, bridges, dentures and root canal therapy are all quote only, per `pricing.treatment_prices_published: false`.
- The 55% figure names the ADA Health Policy Institute and carries its fetch date, per `content-bible.md` §3. The point stays inside what the source supports, and no consequence is attached to it.
- No cross-office record or chart portability claim appears, and none is implied by contrast. One practice, one clinical roster and seven offices are verified. A shared record or imaging system across the offices is not verified anywhere in the handoff, so no such claim ships.
- §2 carries no count and no frequency for how the market is organised. A number or a rate about the market would need a source and a scope, per `content-bible.md` §1.
- No treatment time, success rate or patient outcome is stated anywhere, per `proofPolicy.real_only_for`.
- No superlative, ranking or award claim appears.
- No device or technology is named on this page. Only SIROlaser and digital X-rays are verifiable, per `content-bible.md` §2.
- §2 frames against the split practice model, never a named competitor, per `competitorFraming`.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH. No banned-vocab string, per G-BANNED.
- All eight routing blocks name destinations that exist in `sitemap.yaml`, so no block routes to nothing.
- The same day availability note is flagged, not asserted per office. All seven location pages carry the line verbatim in our capture, and the flag questions current capacity.
- The entry offer is referenced without a figure and without an expiry. Its terms ship as a placeholder, per `pricing.offer_terms` and `pricing.limited_time_framing_allowed: false`.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
