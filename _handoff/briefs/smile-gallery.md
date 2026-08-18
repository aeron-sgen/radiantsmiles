# BRIEF — `smile-gallery`

type: T-INDEX
filter_fields: category, tags
sort: category, recency
funnel_role: F3
cta_primary: Book an appointment
cta_secondary: Call the office
links_to: services, cosmetic-dentistry, porcelain-veneers, contact, reviews
links_from: about, index
bespoke: false

**SEO title (D-SEO-002):** Smile Gallery – Las Vegas Dentist – Radiant Smiles
**Primary keyword (D-SEO-003):** Smile Gallery
**Meta (D-SEO-004):** Veneers, whitening, implants and orthodontics at Radiant Smiles. Before and after cases publish only once consented patient photography is confirmed.
**Slug status (D-SEO-005):** [R] · **Intent (D-SEO-006):** informational

FEATURE: A gallery covering veneers, whitening, implants and orthodontics, where before and after pairs publish only once consented patient photography is confirmed → DO: see the cosmetic work this practice does, and see plainly what it can and cannot yet evidence → MEANS: you judge the practice on what it can actually attribute, not on an adjective.

> **Voice + claim rules:** `content-bible.md` governs. No superlative ships without a cited source. Hours, addresses and phone numbers come only from `client-rules.json` contactData.

## §1 — hero-filter  [XS]
required IDs: D-SEO-002
Filter by treatment category and tag. ⚠ This page is LIVE BUT UNUSABLE AS PROOF today: a real Elementor image-gallery widget with 30 lightbox images, every one carrying an empty alt attribute, and nothing in the capture identifying any image as a consented before and after pair, on a practice selling veneers, whitening, implants and Invisalign. It is the highest-value rebuild on the site.

## §2 — featured-case  [S]
required IDs: D-POSITION-004
One highlighted result. ⚠OWNER §G-9 — BLOCKING FOR THIS PAGE. Real consented before and after photography does not exist in any captured source. Per the proof policy, illustrative imagery may ship ONLY as ⚠OWNER PLACEHOLDER with noindex until real images are supplied, and no fabricated patient, quote or outcome is permitted.

## §3 — list-grid (repeating item)  [S per item]
required IDs: D-PAGE-003
Item template: before image, after image, treatment category, tags, and the treatment page it links to. Per-item fields carry data-cat and data-tags so the filter binds to real values. Never ship a filter category with zero items.

## §4 — category-routing  [XS]
required IDs: D-IA-003
Route to the treatment pages the results come from.

## §5 — closing-cta  [XS]
required IDs: D-OFFER-006
Book a consultation, or call the office nearest you.
