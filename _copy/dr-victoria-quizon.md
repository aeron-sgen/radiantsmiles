# COPY - `dr-victoria-quizon`

type: T-ARTICLE · funnel_role: F3
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/dr-victoria-quizon.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

Written to the T-ARTICLE exemplar, `_copy/dr-adrian-ruiz.md`. One named person, one checkable
credential. A credential page, not a personality page.

---

## §1 - hero  [S]
required IDs: D-SEO-002, D-SEO-003

**H1:** Dr. Victoria Quizon, DMD

**Sub:** Born and raised in Las Vegas, with a dental degree from UNLV, at Radiant Smiles, one practice running seven offices.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

*Image slot:* her real portrait, `assets/radiantsmilesnv.com_wp-content_uploads_2026_05_IMG_9391-1-2.jpg`. It is a 1130 by 1177 JPEG, magic-byte verified 3 August 2026, with four resolution variants in the pool. No stock image and no substituted face may stand in.

⚠OWNER §G-11: on the live site her biography is served from a URL naming a different doctor. The roster must be confirmed before this page is built.

---

## §2 - credentials  [M]
required IDs: D-POSITION-002

Dr. Victoria Quizon was born and raised in Las Vegas. She earned her Doctorate of Dental Medicine at the UNLV School of Dental Medicine in 2023.

She is an active member of the American Dental Association and the American Academy of Implant Dentistry.

All of that is carried from her biography on the practice site, fetched 30 July 2026. A school, a year and two named bodies are all checkable.

⚠FLAG: membership of a professional body is a membership, not a specialty and not a scope of practice. Her biography states no implant caseload, so this page states none.

---

## §3 - approach  [M]
required IDs: D-BRAND-RAILS-004

Dr. Quizon tells you what she has found before she recommends anything. The finding is explained first, then the options, then what happens if you wait.

You are shown the tooth being discussed, and questions get answered before anything is agreed to. Where something can hold for now, she says so.

She qualified in 2023, and the page says so plainly. We do not imply decades of practice she has not had yet, and no source ranks her against another clinician.

---

## §4 - where-they-practise  [S]
required IDs: D-IA-001

Dr. Quizon practises within the Radiant Smiles group. You can choose from seven offices, in Las Vegas, North Las Vegas and Henderson.

**Find the office nearest you:** all seven offices

⚠OWNER §G-11: the brief asks for her office and that office's phone. Per-office clinician assignment is not published, and her own profile URL is already in question. Until the roster is confirmed, this section routes to the locations hub, where each office carries its own number from `client-rules.json` contactData.

---

## §5 - cross-links  [XS]
required IDs: D-IA-004

Also on the team: the rest of our clinicians
Related: general dentistry · restorations · all seven offices · new patient offer · contact

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

### Compliance notes carried into this page

- The degree, the school, the year and both memberships are first party, dated and unparaphrased.
- Two professional bodies are named because she is a member of them. No award and no ranking is claimed from that membership.
- The implant association is not turned into an implant service claim, since her biography states no such scope.
- A recent qualification year is stated rather than softened. `content-bible.md` §1 requires the specific over the vague.
- No superlative and no competitor comparison appears anywhere on the page.
- No treatment price is stated. All treatment is quote-only per `pricing.treatment_prices_published: false`.
- The real portrait file is named, with its dimensions and its verification date, per `proofPolicy`.
- The profile URL mismatch and the office assignment both ship as ⚠OWNER §G-11 notes, not as guesses.
- No office is named for her in the hero or anywhere else. The hero states the practice structure only, per ⚠OWNER §G-11.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- Every routing destination exists in `sitemap.yaml`.
