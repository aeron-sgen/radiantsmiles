# COPY - `locations`

type: T-HUB · funnel_role: F2
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/locations.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero-category-outcome  [S]
required IDs: D-SEO-002, D-IA-001

**H1:** Dental Offices in Las Vegas and Henderson

**Sub:** Seven offices across Las Vegas, North Las Vegas and Henderson. One practice, one clinical team, at every location.

**Anchor strip:** Lone Mountain · Sunrise Manor · Summerlin · North Las Vegas · Henderson · North Decatur · Blue Diamond

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

## §2 - why-this-area  [M]
required IDs: D-POSITION-009

Seven addresses can mean seven separate businesses. In that model each office is separately owned, with its own front desk and its own answer.

Ours is one practice. The same clinical team works across all seven, so the practice you booked with does not change when the address does.

That matters when the office nearest your home keeps different days from the office nearest your work. You can pick by what suits the week.

---

## §3 - sub-area-blocks  [S each]
required IDs: D-PAGE-003

**Lone Mountain.** 7469 W. Lake Mead Blvd., Suite 270, Las Vegas 89128. Phone (702) 289-4424. One of two offices publishing Sunday hours.
→ Lone Mountain

**Sunrise Manor.** 1825 S. Nellis Blvd., Las Vegas 89107. Phone (702) 452-3552. Later start and a 7 PM finish on Tuesday and Thursday.
→ Sunrise Manor

**Summerlin.** 8961 W. Sahara Ave., Suite 108, Las Vegas 89117. Phone (702) 360-4800. Open Saturday, and open to 7 PM on Wednesday.
→ Summerlin

**North Las Vegas.** 5195 Camino Al Norte Rd., North Las Vegas 89031. Phone (702) 509-1967. Open Saturday, with 7 PM finishes midweek.
→ North Las Vegas

**Henderson.** 2633 W. Horizon Ridge Pkwy., Suite 130, Henderson 89052. Phone (702) 897-7001. The Henderson office, open Saturday and until 7 PM on Tuesday and Thursday.
→ Henderson

**North Decatur.** 6311 N. Decatur Blvd., Suite 140, Las Vegas 89130. Phone (702) 522-0119. Books online from its own page, and publishes Sunday hours.
→ North Decatur

**Blue Diamond.** 5095 S. Blue Diamond Rd., Suite 105, Las Vegas 89139. Phone (702) 331-0010. Saturday here is by appointment only.
→ Blue Diamond

**Not sure which office.** Tell us where you are and we will point you at the nearest one.
→ Contact

*Image slot per block:* a real photograph of that office. Not stock. Not a grey box.

⚠FLAG: every block above routes to a page that exists in `sitemap.yaml`. No block ships without a live destination.

⚠OWNER: the Sunrise Manor ZIP conflicts on the live site. 89107 is carried here from `client-rules.json` contactData, pending confirmation against 89104 in the booking block. NAP consistency depends on resolving it.

⚠OWNER: Blue Diamond publishes no Tuesday, Friday or Sunday hours anywhere on the live site. Those three rows ship blank until you supply them.

⚠OWNER: North Decatur's seven published hour rows are byte identical to Lone Mountain's. Confirm they are genuinely this office's before any hours table ships.

⚠FLAG: no blanket weekend or late-evening claim ships on this site. Three offices publish Saturday hours and one is Saturday by appointment. Two publish Sunday hours, four are closed Sunday, and one does not publish a Sunday row.

---

## §4 - proof-data-point  [S]
required IDs: D-INCUMBENT-007

Distance is one reason people put off a visit. Cost is another.

The ADA Health Policy Institute, fetched 30 July 2026, puts adults aged 65 and older with no dental benefits at 55%. The same source finds that dental visits track coverage directly.

Travel is the part of that we can do something about, which is what seven addresses are for.

Our Lake Mead office is rated 4.5 stars across 506 patient reviews on Birdeye, fetched 30 July 2026. That figure is for the Lake Mead office only.

⚠OWNER: supply the practice wide figure and nominate the platform of record, or this rating stays scoped to one office. Per `content-bible.md` §6 the scope is never dropped and figures are never aggregated across offices.

---

## §5 - cross-link-rail  [XS]
required IDs: D-IA-004

Other hubs: All services · Meet our dentists · New patients · About the practice
Also: the new patient offer · insurance and financing · contact

---

## §6 - routing-band  [XS]
required IDs: D-PAGE-007

**Start from the road you already know.**

- W. Lake Mead Blvd: Lone Mountain
- S. Nellis Blvd: Sunrise Manor
- W. Sahara Ave: Summerlin
- Camino Al Norte Rd: North Las Vegas
- W. Horizon Ridge Pkwy: Henderson
- N. Decatur Blvd: North Decatur
- S. Blue Diamond Rd: Blue Diamond

⚠FLAG: this router is derived only from the street names in `client-rules.json` contactData. No neighbourhood or catchment area is invented for it.

---

## §7 - closing-cta  [XS]
required IDs: D-OFFER-006

Book at whichever office suits your week, or call that office directly and ask.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

⚠FLAG: the secondary CTA resolves to the specific office's own number, never a general line, per `routeRules.phone_policy`.

⚠OWNER: North Decatur books online from its own page but is absent from the site wide office selector. Confirm whether it should be added there.

---

### Compliance notes carried into this page

- Every address, ZIP and phone number is copied from `client-rules.json` contactData, character for character.
- Hours are described in words rather than copied as ranges, so no en dash enters the file, per G-NODASH.
- The blanket weekend and late-evening claim is refused and replaced with the per-office counts, per `OVERCLAIM`.
- The Birdeye rating carries its platform, its scope and its fetch date, and is never aggregated, per `content-bible.md` §6.
- The 55% figure is attributed to the ADA Health Policy Institute by name, with its 30 July 2026 fetch date. Nothing is added to what that source states.
- No shared record, shared chart or single patient file across offices is claimed. Only the verified claim ships: one practice, one clinical team, at every location.
- No treatment price is stated. Treatment is quote-only per `pricing.treatment_prices_published: false`.
- No superlative, ranking or award claim appears. No competitor is named, per `competitorFraming`.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH. No banned-vocab string, per G-BANNED.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- Every routing block names a destination that exists in `sitemap.yaml`.
