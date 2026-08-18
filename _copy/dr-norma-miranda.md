# COPY - `dr-norma-miranda`

type: T-ARTICLE · funnel_role: F3
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/dr-norma-miranda.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

Written to the T-ARTICLE exemplar, `_copy/dr-adrian-ruiz.md`. One named person, one checkable
credential. A credential page, not a personality page.

---

## §1 - hero  [S]
required IDs: D-SEO-002, D-SEO-003

**H1:** Dr. Norma Miranda, DDS

**Sub:** A dentist of more than 41 years, practising with Radiant Smiles in the Las Vegas valley.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

*Image slot:* the real portrait of Dr. Miranda from `assets/`. A stock face or a substituted portrait does not ship on a clinician page.

---

## §2 - credentials  [M]
required IDs: D-POSITION-002

Dr. Norma Miranda earned her Doctorate in Dental Surgery at the UCLA School of Dentistry in 1976. She has over 41 years of practice experience.

Both the school and the year come from her own biography on the practice site, fetched 30 July 2026. You can check them before you book.

Her biography also calls her extremely gentle.

⚠FLAG: "extremely gentle" is the practice describing itself, not an independent rating. The brief asks for the credential unparaphrased, so it stays, marked. Attributed language from a real patient review would be stronger, and the owner can supply it.

---

## §3 - approach  [M]
required IDs: D-BRAND-RAILS-004

Her biography puts the weight on long term relationships with patients, rather than one visit at a time.

In the chair, that means plain language. You are told what the X-ray shows and what it means for your teeth.

Where a finding can wait, you are told that it can wait. Where it cannot, you are told what happens if it is left.

---

## §4 - where-they-practise  [S]
required IDs: D-IA-001

Dr. Miranda sees patients within the Radiant Smiles group. We run seven offices across Las Vegas, North Las Vegas and Henderson.

**Find the office nearest you:** all seven offices

⚠OWNER §G-11: the brief asks for her office and that office's phone number. Per-office clinician assignment is not published on the live site, so this section routes to the locations hub instead. Every office publishes its own phone number on its own location page, from `client-rules.json` contactData. Naming an office for Dr. Miranda without the roster would be an invented fact.

---

## §5 - cross-links  [XS]
required IDs: D-IA-004

Also on the team: the rest of our clinicians
Related: general dentistry · dental exams and cleanings · all services · all seven offices · new patient offer · contact

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

### Compliance notes carried into this page

- The degree, the school and the year are real, first party and dated. `proofPolicy.real_only_for` names clinician credentials as fabrication-forbidden.
- The 41 years figure is carried from the biography, not rounded up and not restated as a practice-wide total.
- The one descriptive phrase in the source biography is quoted, sourced and flagged, rather than absorbed into our own voice.
- No superlative, ranking or award appears. No competitor is named or implied.
- No treatment price is stated. All treatment is quote-only per `pricing.treatment_prices_published: false`.
- The office and its phone number are withheld rather than guessed, per ⚠OWNER §G-11.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- Every routing destination exists in `sitemap.yaml`. Together they cover all four destinations on the `link-funnel-map.md` row for this page: team, services, locations and contact.
