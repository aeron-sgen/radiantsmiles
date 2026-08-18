# COPY - `dr-max-torres`

type: T-ARTICLE · funnel_role: F3
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/dr-max-torres.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

Written to the T-ARTICLE exemplar, `_copy/dr-adrian-ruiz.md`. One named person, one checkable
credential. A credential page, not a personality page.

---

## §1 - hero  [S]
required IDs: D-SEO-002, D-SEO-003

**H1:** Dr. Max Torres

**Sub:** A dentist with Radiant Smiles, born and raised in Las Vegas. One practice running seven offices across Las Vegas, North Las Vegas and Henderson.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

*Image slot:* the real portrait of Dr. Torres from `assets/`. A clinician page ships his actual photograph or it does not ship.

---

## §2 - credentials  [M]
required IDs: D-POSITION-002

Dr. Max Torres was born and raised in Las Vegas. He graduated from UNLV with a Bachelor's in biology, minors in psychology and neuroscience, and a Doctorate of Medicine in Dentistry.

His biography says the care he received from his dentists as a child is why he chose the work.

Every one of those details is carried from that biography on the practice site, fetched 30 July 2026.

⚠OWNER PLACEHOLDER: the graduation year behind that doctorate is not published on the live site, so no year is stated here. UNLV is published and is carried above. Supply the year and this section carries the same specificity as the other clinician pages.

---

## §3 - approach  [M]
required IDs: D-BRAND-RAILS-004

The standard at the chair is the one we hold across the team. You are told what is happening, and why, before anything is agreed.

What the digital X-ray shows is explained in plain terms. The screen is turned so you can see the tooth being discussed.

Where a finding can wait, you are told that it can wait. Where it cannot wait, you are told what happens if it is left.

---

## §4 - where-they-practise  [S]
required IDs: D-IA-001

Dr. Torres sees patients within the Radiant Smiles group. Seven offices serve Las Vegas, North Las Vegas and Henderson.

**Find the office nearest you:** all seven offices

⚠OWNER §G-11: the brief asks for his office and its phone number. The live site publishes no per-office clinician assignment, so this section points to the locations hub. Office phone numbers are published per office, from `client-rules.json` contactData. Asserting a day and a location for him would be an invented fact.

---

## §5 - cross-links  [XS]
required IDs: D-IA-004

Also on the team: the rest of our clinicians
Related: general dentistry · digital X-rays · all services · all seven offices · new patient offer · contact

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

### Compliance notes carried into this page

- The undergraduate degree, the minors and the doctorate are first party and carried in the source's own sentence structure, without paraphrase.
- The school is NOT missing from the source. Two captures, `meet-the-doctors-dr-max-torres.html` and `meet-the-doctors.html`, put the doctorate inside the same graduated from UNLV list as the bachelor's. UNLV is therefore carried, not declared unpublished.
- Only the graduation year is genuinely unpublished, and that alone ships as a placeholder rather than a guess.
- Digital X-rays is the only technology named, and it is one of the two verified devices in `content-bible.md` §2.
- No superlative, ranking or award appears. Being local is stated as a fact, never as a clinical advantage.
- No competitor is named, and no comparison is drawn against another practice.
- No treatment price is stated. All treatment is quote-only per `pricing.treatment_prices_published: false`.
- The office assignment is withheld rather than guessed, per ⚠OWNER §G-11.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- Every routing destination exists in `sitemap.yaml`. Together they cover all four destinations on the `link-funnel-map.md` row for this page: team, services, locations and contact.
