# BRIEF — `faq`

type: T-FEATURE
funnel_role: F3
cta_primary: Book an appointment
cta_secondary: Call the office
links_to: offer, insurance-financing, services, locations, contact
links_from: new-patients, about
bespoke: false

**SEO title (D-SEO-002):** Dental FAQs – Las Vegas Dentist – Radiant Smiles
**Primary keyword (D-SEO-003):** Dental FAQs
**Meta (D-SEO-004):** Answers to the questions patients ask most about cost, insurance, first visits, emergencies and treatment.
**Slug status (D-SEO-005):** [R] · **Intent (D-SEO-006):** informational

FEATURE: Straight answers to the questions patients actually ask → DO: get the cost, insurance and first-visit questions answered before you pick up the phone → MEANS: you book knowing what happens next.

> **Voice + claim rules:** `content-bible.md` governs. No superlative ships without a cited source. Hours, addresses and phone numbers come only from `client-rules.json` contactData.

## §1 — hero  [S]
required IDs: D-SEO-002
⚠ This page is LIVE AND POPULATED today: an H1 of "FAQs" over nine published questions carrying a matching FAQPage block, captured 30 July 2026, and the patient-information page links patients to it. All nine cover general oral health and cosmetic dentistry; none cover cost, insurance, first visits or emergencies. It is a rebuild, not a refresh.

## §2 — cost-and-insurance  [M]
required IDs: D-OFFER-007
What the exam costs, which carriers are named and that network status varies by office and plan, what happens if uninsured. No treatment prices. Name carriers without asserting acceptance or a network guarantee (⚠OWNER §G-12).

## §3 — first-visit  [M]
required IDs: D-PAGE-003
What happens, how long it takes, what to bring.

## §4 — emergencies  [M]
required IDs: D-OFFER-002
Same-day and emergency appointments, and how to reach an office fastest.

## §5 — treatment-questions  [M]
required IDs: D-OFFER-017
The recurring clinical questions across the six specialty groups, each linking to the leaf that answers it in full.

## §6 — about-the-practice  [S]
required IDs: D-MARKET-BDG-010
Whether the same team works at every office, and how the seven offices relate. The consolidation wedge, answered as a question.

## §7 — cross-link-rail  [XS]
required IDs: D-IA-004
Services, locations, the offer.

## §8 — schema-note  [XS]
required IDs: D-SEO-006
This page carries FAQPage structured data. The live faqs page already carries one FAQPage block with nine Question nodes, the only FAQ schema anywhere on the current site; this block REPLACES it. The incumbent markup is removed at build time, so the page never ships two FAQPage blocks.

## §9 — closing-cta  [XS]
required IDs: D-OFFER-006
Still have a question: call the office nearest you.
