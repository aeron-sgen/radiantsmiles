# COPY - `general-dentistry`

type: T-HUB · funnel_role: F2
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/general-dentistry.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero-category-outcome  [S]
required IDs: D-SEO-002, D-IA-002

**H1:** General Dentistry in Las Vegas

**Sub:** The routine visits that keep small problems small. Exams, cleanings, digital X-rays, fluoride and sealants, at all seven offices.

**Anchor strip:** Exams and cleanings · Digital X-rays · Fluoride treatment · Sealants

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

## §2 - why-this-area  [M]
required IDs: D-POSITION-009

General dentistry is the part people skip when money or time is tight. It is also the part that decides how expensive the rest of your dental life gets.

Nothing here is referred out. The practice that cleans your teeth is the one that treats the gum problem or the cracked filling it finds.

That holds at whichever of our offices you turn up to. All seven run under one practice with one clinical roster.

---

## §3 - sub-area-blocks  [S each]
required IDs: D-PAGE-003

**Exams and cleanings.** The routine check and the standard cleaning, which look for problems before you feel them.
→ Dental exams and cleanings

**Digital X-rays.** Imaging that shows what the eye cannot, between teeth and under existing work.
→ Digital X-rays

**Fluoride treatment.** An in office application to harden enamel, for adults and children at higher risk of decay.
→ Fluoride treatment

**Sealants.** A thin coating over the grooves of the back teeth, where a brush does not reach well.
→ Sealants

**Not sure what you need.** Book the exam first. Everything above starts from what it finds.
→ Contact

*Image slot per block:* a real clinical or practice photograph. Not stock. Not a grey box.

⚠FLAG: every block above routes to a page that exists in `sitemap.yaml`. No block ships without a live destination.

⚠FLAG: digital X-rays and the SIROlaser are the only devices any page may name, per `content-bible.md` §2. No other technology is claimed here, and no general technology boast ships.

---

## §4 - proof-data-point  [S]
required IDs: D-INCUMBENT-007

Among adults aged 65 and older, 55% have no dental benefits, according to the ADA Health Policy Institute, fetched 30 July 2026. The same source reports that dental visits track coverage directly.

In 2023, 53% of adults with private dental insurance had a dental visit, against 16% of those with none. That figure is from the same source and the same date.

That is the evidence base for our senior entry price, not a scare statistic.

---

## §5 - cross-link-rail  [XS]
required IDs: D-IA-004

Other areas of care: Cosmetic dentistry · Restorations · Oral surgery · Periodontics · Orthodontics
Also: the new patient offer · all seven offices · contact

---

## §6 - routing-band  [XS]
required IDs: D-PAGE-007

**Book a checkup at the office nearest you.** Seven offices across the valley:

- Lone Mountain, 7469 W. Lake Mead Blvd., Suite 270, Las Vegas 89128
- Sunrise Manor, 1825 S. Nellis Blvd., Las Vegas 89107
- Summerlin, 8961 W. Sahara Ave., Suite 108, Las Vegas 89117
- North Las Vegas, 5195 Camino Al Norte Rd., North Las Vegas 89031
- Henderson, 2633 W. Horizon Ridge Pkwy., Suite 130, Henderson 89052
- North Decatur, 6311 N. Decatur Blvd., Suite 140, Las Vegas 89130
- Blue Diamond, 5095 S. Blue Diamond Rd., Suite 105, Las Vegas 89139

⚠OWNER: the Sunrise Manor ZIP conflicts on the live site. 89107 is carried here from `client-rules.json` contactData, pending confirmation against 89104 in the booking block.

---

## §7 - closing-cta  [XS]
required IDs: D-OFFER-006

Book a checkup, or call the office nearest you if something already hurts.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

⚠FLAG: the secondary CTA resolves to the specific office's own number, never a general line, per `routeRules.phone_policy`.

---

### Compliance notes carried into this page

- Every address is copied from `client-rules.json` contactData. None is retyped from memory or from the live site.
- No treatment price is stated. Treatment is quote-only per `pricing.treatment_prices_published: false`.
- Digital X-rays is the only device named here. The general technology boast carried by the live site is refused, per `OVERCLAIM`.
- The 55% figure is attributed to the ADA Health Policy Institute by name, with its 30 July 2026 fetch date. Only what that source states is stated, and no further consequence is drawn from it.
- §2 claims one practice and one clinical roster across seven offices, which is verified. It makes no claim about records or images moving between offices, because no first-party source confirms that.
- The reason only two devices may be named is carried in the §3 flag. That is its right channel, not prose addressed to the patient.
- No clinical outcome, treatment time or success rate is claimed, per `proofPolicy.real_only_for`.
- No fluoride application duration is stated. That duration is unconfirmed in the capture, so §3 names the treatment without characterising its length.
- No detection rate or proportion is claimed for exams and cleanings. No captured source states one, so §3 says what the appointment looks for, not how much it finds.
- No superlative, ranking or award claim appears.
- §2 frames against the referral model, never a named competitor, per `competitorFraming`.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH. No banned-vocab string, per G-BANNED.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- Every routing block names a destination that exists in `sitemap.yaml`.
