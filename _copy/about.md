# COPY - `about`

type: T-COMPANY · company_variant: standard · funnel_role: F3
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/about.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

**EXEMPLAR for T-COMPANY.** Only one page of this type ships. The governing move for this type is that
the company claim is the one thing a visitor cannot check for themselves, so every sentence of it either
carries a source or carries a flag.

---

## §1 - hero  [S]
required IDs: D-SEO-002, D-OFFER-002

**H1:** About Radiant Smiles

**Sub:** A seven location Las Vegas and Henderson dental group delivering general, cosmetic, restorative, orthodontic, periodontic and surgical care in house.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

⚠OWNER §G-5: the live mission statement is held as the captured positioning, but its phrase describing a premium experience does NOT ship. At a $45 entry offer, against a market whose upper pole charges far more, that framing is not supportable and `OVERCLAIM` forbids it.

---

## §2 - company-story  [L]
required IDs: D-OFFER-001

We are Radiant Smiles Dental Care. One practice, seven offices, one clinical roster.

The Better Business Bureau records the practice at 23 years in business, fetched 30 July 2026.

⚠FLAG: the 23 year figure is BBB reported, not first party. It ships attributed to the BBB with its date, exactly as written above. Otherwise the owner confirms the founding year and it is restated as our own.

⚠OWNER §G-1: the legal entity name needs confirming. The site brand reads Radiant Smiles Dental Care; third party registries carry a different entity string. The site brand is used in copy, and the legal footer and schema carry a ⚠OWNER PLACEHOLDER until it is resolved.

---

## §3 - the-why  [M]
required IDs: D-MARKET-P3-010

Seven offices under one brand, one roster and one domain.

That sounds like a detail until you need it. You are not handed to a different business when you see someone at a different address. The clinician who checks your work next belongs to the same practice.

The alternative is common here. Groups with the same footprint run their offices as separately owned or separately branded practices, so consistency across them is structurally unpromisable.

We are not framing that as a fault. It is a different model, and it is the reason we can say something they cannot.

---

## §4 - team-values  [M]
required IDs: D-BRAND-RAILS-005

⚠OWNER PLACEHOLDER: no values statement exists in any captured source. What is missing is a stated set of values in the practice's own words. Rather than invent one, this section ships as a placeholder until the owner supplies it. The line below is the register this rebuild holds, as the practice's words rather than a patient's.

The practice's own site describes calm and comfortable offices and warm interactions with patients.

⚠FLAG: do not generate a values statement here. A fabricated one would be indistinguishable from a real one to a reader, which is precisely why it is barred.

---

## §5 - proof  [XS]
required IDs: D-POSITION-004

Our Lake Mead office is rated 4.5 stars across 506 patient reviews on Birdeye, fetched 30 July 2026. That figure is scoped to Lake Mead and is not a practice wide rating.

The Better Business Bureau rates the practice B+ and records 3 complaints filed with 1 unresolved, fetched 30 July 2026. **The practice is NOT BBB accredited.**

That last line stays. Reporting a BBB rating while omitting non accreditation is the kind of selective proof this rebuild exists to remove.

⚠OWNER: supply the practice wide review figure and nominate the platform of record, or the Birdeye number stays scoped to one office.

---

## §6 - cta  [XS]
required IDs: D-OFFER-006

Meet the team, or book an appointment at any of our seven offices.

**CTA primary:** Book an appointment
**CTA secondary:** Call the office

---

### Compliance notes carried into this page

- Every proof figure carries its platform, its scope and its fetch date. The BBB non accreditation is stated, not omitted.
- The premium experience phrasing is held out per ⚠OWNER §G-5 and `OVERCLAIM`.
- The 23 year figure is attributed to the BBB because it is not first party, per the brief's ⚠FLAG.
- No values statement is invented. `proofPolicy.real_only_for` covers years in business and awards.
- No treatment price is stated. Only the published $45 entry offer is referenced, and only as context in §1.
- No competitor is named. §3 frames against a structural model, not a practice, per `competitorFraming`.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH.
- Every sentence is 24 words or fewer, per `content-bible.md` §1.
