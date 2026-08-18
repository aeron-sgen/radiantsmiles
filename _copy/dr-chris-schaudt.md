# COPY - `dr-chris-schaudt`

type: T-ARTICLE · funnel_role: F3
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/dr-chris-schaudt.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

---

## §1 - hero  [S]
required IDs: D-SEO-002, D-SEO-003

**H1:** Dr. Chris Schaudt

**Sub:** A dentist with Radiant Smiles, one practice running seven offices across Las Vegas, North Las Vegas and Henderson.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

*Image slot:* the real portrait of Dr. Schaudt, `assets/radiantsmilesnv.com_wp-content_uploads_2026_05_IMG_1387-1-scaled.jpg`. It is a 2560 by 2438 JPEG, magic byte verified 3 August 2026, with six resolution variants in the pool. No stock image and no substituted face may stand in.

⚠OWNER §G-11: on the live site his biography is served from a URL and page title that name a different doctor. Only the heading and the body text carry Dr. Schaudt. The roster must be confirmed before this page is published.

---

## §2 - credentials  [M]
required IDs: D-POSITION-002

The practice site publishes one description of his work, fetched 30 July 2026. The captured wording follows, word for word.

"Dr. Schaudt combines modern dentistry with a warm, personal approach that helps patients feel comfortable from the moment they walk through the door. Whether it's a routine cleaning, a smile makeover, creating confident smiles is always the mission."

That is what the practice actually publishes about him, carried across without paraphrase and without tidying.

⚠OWNER PLACEHOLDER: the captured biography states no dental degree, no school and no graduation year for this clinician. Supply the degree, the school and the year, and all three ship in this section. A qualification we cannot source is never written in.

⚠FLAG: brief §2 renders the captured line as "from a routine cleaning through to a smile makeover" and labels that verbatim. That phrasing appears nowhere in the capture. The capture governs, so the wording above follows the capture and not the brief.

Before booking you can check a name, a published description of his work, and a face that matches the person in the room.

---

## §3 - approach  [M]
required IDs: D-BRAND-RAILS-004

The appointment runs in plain language. You are told what the digital X-ray shows, what it means, and what your choices are.

A cleaning and a smile makeover sit at opposite ends of the same conversation. Both start with the state of your teeth today, not with a plan you did not ask for.

Nothing here rates his hands or his chairside manner. We cannot source a claim like that, so we do not make one.

---

## §4 - where-they-practise  [S]
required IDs: D-IA-001

Dr. Schaudt sees patients within the Radiant Smiles group. We run seven offices in Las Vegas, North Las Vegas and Henderson.

**Find the office nearest you:** all seven offices

⚠OWNER §G-11: per-office clinician assignment is not published on the live site. Until the owner supplies the roster, this section routes to the locations hub. It states no office and no office phone for him, because either would be an invented fact.

---

## §5 - cross-links  [XS]
required IDs: D-IA-004

Also on the team: the rest of our clinicians
Related: general dentistry · cosmetic dentistry · all seven offices · contact

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

### Compliance notes carried into this page

- The one published description of his work is reproduced word for word from the first-party capture, `site-snapshot/meet-the-doctors-dr-nick-low.html` and `site-snapshot/meet-the-doctors.html`, which carry identical text. `proofPolicy.real_only_for` names clinician credentials as fabrication forbidden.
- Where brief §2's rendering of that line diverges from the capture, the capture governs. The divergence ships as a ⚠FLAG, matching the handling on `dr-andy-landaverde`.
- The absent degree, school and year were confirmed by grep. Every Schaudt passage in the capture was read in full and none states a qualification.
- The missing degree, school and year ship as a ⚠OWNER PLACEHOLDER rather than as an estimate, because no source for them was captured.
- The live URL and page title name a different doctor. That defect is flagged for the owner, not quietly tidied away.
- No superlative about the clinician appears, and no ranking or award is claimed for him.
- No treatment price is stated. Treatment is quote only per `pricing.treatment_prices_published: false`.
- Only digital X-rays are named as equipment. No other device or technology is named, per the OVERCLAIM rule on technology claims.
- No exclamation points and no emoji, per `bannedPunctuation`. The live biography carries one exclamation point and it does not travel here.
- No em or en dashes, per G-NODASH.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- Every routing destination exists in `sitemap.yaml`.
