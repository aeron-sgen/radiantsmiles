# COPY - `dr-vivi-dang-roberts`

type: T-ARTICLE · funnel_role: F3
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/dr-vivi-dang-roberts.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

Written to the T-ARTICLE exemplar, `_copy/dr-adrian-ruiz.md`. One named person, one checkable
credential. A credential page, not a personality page.

---

## §1 - hero  [S]
required IDs: D-SEO-002, D-SEO-003

**H1:** Dr. Vivi Dang-Roberts, Dentist in Las Vegas

**Sub:** A Loma Linda School of Dentistry graduate, class of 1994, at Radiant Smiles, one practice running seven offices.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

*Image slot:* the real portrait of Dr. Dang-Roberts from `assets/`. No stock face and no substituted portrait stands in for her.

---

## §2 - credentials  [M]
required IDs: D-POSITION-002

Dr. Vivi Dang-Roberts graduated from the Loma Linda School of Dentistry in 1994. Her biography adds that she treats her patients like family members.

The school and the year are taken from that biography on the practice site, fetched 30 July 2026. Those two facts are the reason this page exists.

A named school and a stated year can be looked up. That is what you are choosing between, rather than an anonymous appointment slot.

⚠FLAG: "treats her patients like family members" is the practice's own wording, carried unparaphrased per the brief. It describes an intent, not a measured outcome, and it is marked here as such.

⚠OWNER PLACEHOLDER: no postnominal letters are published for Dr. Dang-Roberts on the live site. None are printed here. Supply the degree and it goes into the H1.

---

## §3 - approach  [M]
required IDs: D-BRAND-RAILS-004

The family wording in her biography sets an expectation, so we say what it should mean at an appointment.

You are not rushed through the room. Questions get answered before any treatment is agreed to.

You hear what the finding is, what the choices are, and what happens if you decide to wait.

We are not claiming a gentler visit than anyone else. No source supports that comparison, so the page does not make it.

---

## §4 - where-they-practise  [S]
required IDs: D-IA-001

Dr. Dang-Roberts practises within the Radiant Smiles group. There are seven offices, in Las Vegas, North Las Vegas and Henderson.

**Find the office nearest you:** all seven offices

⚠OWNER §G-11: the brief asks which office she attends, with that office's phone number. Neither is published on the live site today. Until the owner confirms the roster, this section links to the locations hub, where each office carries its own number from `client-rules.json` contactData.

---

## §5 - cross-links  [XS]
required IDs: D-IA-004

Also on the team: the rest of our clinicians
Related: general dentistry · teeth cleaning · all seven offices · new patient offer · contact

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

### Compliance notes carried into this page

- The school and the graduation year are first party, dated and unparaphrased, per the brief and `proofPolicy.real_only_for`.
- The descriptive line from the source biography is quoted and flagged, so it never reads as verified proof.
- A missing credential is shipped as a placeholder, never as an invented degree.
- No superlative, ranking or award appears anywhere on the page.
- No competitor is named, and no comparison of manner or skill is drawn against another practice.
- No treatment price is stated. All treatment is quote-only per `pricing.treatment_prices_published: false`.
- The office assignment and its direct line are withheld, per ⚠OWNER §G-11.
- No office is named for her in the hero or anywhere else. The hero states the practice structure only, per ⚠OWNER §G-11.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
- Every routing destination exists in `sitemap.yaml`.
