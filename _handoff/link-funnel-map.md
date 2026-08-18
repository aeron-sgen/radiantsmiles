# P6 — LINK & FUNNEL MAP — `radiantsmiles`

**Locked on:** 2026-07-30 · **66 pages** · **0 hard orphans**

Derived from the `links_to` declaration in every brief, reconciled against the closed page inventory. Every target resolves to a real inventory slug — G6 enforces that per brief, and the graph below is computed from the briefs on disk, not hand-drawn.

## §1 — The four funnel roles

| role | name | pages | terminates at |
|---|---|---|---|
| F1 | acquisition — local + service search, lands deep | 36 | book an appointment |
| F2 | evaluation — hub to leaf to offer | 11 | book an appointment |
| F3 | credibility — proof, team, story | 14 | book an appointment |
| F4 | offer-led — price-sensitive and senior | 2 | claim the offer |
| chrome-only | legal and utility | 3 | none |

**F1 is the largest role at 36 of 66 pages, and that is deliberate.** The 28 service leaves and 7 location pages are the highest-volume organic entry points; the architecture assumes a patient arrives on a deep page from search, never on the homepage. Every F1 page therefore carries the office's own phone, its hours and a book CTA without requiring a click back to a hub.

## §2 — Literal page sequences

- **F1 acquisition:** `<service-leaf>` or `<location>` then the office hours and named clinicians, then `contact`. Entry is the leaf itself.
- **F2 evaluation:** `index` then `services` then a group hub then a leaf then `new-patients` then `contact`.
- **F3 credibility:** any entry then `reviews` or `smile-gallery` then `team` then a clinician then `locations` then `contact`.
- **F4 offer-led:** `offer` then `insurance-financing` then `locations` then `contact`.

## §3 — Orphan check

**0 hard orphans.** Every non-terminal page has at least one contextual inbound link beyond global chrome.

- `index` is exempt as the entry node; it is the root of the graph and is reached from the logo on every page.
- **Terminal pages** (exempt by TYPE): `contact` (T-CONTACT, the form submit IS the outbound action), `privacy-policy`, `cookie-policy`, `cookie-settings` (T-LEGAL document variant).
- The check that mattered: every hub routes to **all** of its children, not a subset. An earlier draft truncated hub child-lists and produced 12 orphans, including 4 clinician pages and `blue-diamond`. A hub that lists 6 of 10 doctors is a broken hub, and it was caught here rather than at build.

## §4 — Most-linked destinations

| page | contextual inbound links |
|---|---|
| `contact` | 66 |
| `offer` | 40 |
| `locations` | 24 |
| `services` | 22 |
| `team` | 20 |
| `periodontics` | 10 |
| `gum-recession` | 9 |
| `periodontal-disease` | 9 |
| `restorations` | 9 |
| `sirolaser` | 9 |

`contact` is reachable from all 66 pages by design: it is the single conversion sink that replaced three overlapping surfaces on the current site. `offer` is second because the entry offer is the site's only published price and every service page routes to it rather than restating it.

## §5 — Per-page edges

| page | funnel | links_to |
|---|---|---|
| `about` | F3 | `team` · `locations` · `reviews` · `smile-gallery` · `faq` · `services` · `contact` |
| `antibiotic-treatment` | F1 | `periodontics` · `periodontal-disease` · `sirolaser` · `gum-recession` · `offer` · `contact` |
| `blue-diamond` | F1 | `services` · `team` · `offer` · `contact` · `locations` |
| `bone-grafting` | F1 | `oral-surgery` · `wisdom-teeth-extractions` · `offer` · `contact` |
| `braces-for-adults` | F1 | `orthodontics` · `invisalign` · `braces-for-children` · `offer` · `contact` |
| `braces-for-children` | F1 | `orthodontics` · `invisalign` · `braces-for-adults` · `offer` · `contact` |
| `bruxism` | F1 | `periodontics` · `periodontal-disease` · `sirolaser` · `gum-recession` · `offer` · `contact` |
| `composite-fillings` | F1 | `restorations` · `dental-implants` · `crowns-caps` · `fixed-bridges` · `offer` · `contact` |
| `contact` | F1 · terminal | `locations` · `offer` · `new-patients` |
| `cookie-policy` | chrome-only · terminal | `contact` |
| `cookie-settings` | chrome-only · terminal | `contact` |
| `cosmetic-dentistry` | F2 | `porcelain-veneers` · `teeth-whitening` · `contact` |
| `crown-lengthening` | F1 | `periodontics` · `periodontal-disease` · `sirolaser` · `gum-recession` · `offer` · `contact` |
| `crowns-caps` | F1 | `restorations` · `dental-implants` · `composite-fillings` · `fixed-bridges` · `offer` · `contact` |
| `dental-exams-cleanings` | F1 | `general-dentistry` · `digital-x-rays` · `fluoride-treatment` · `sealants` · `offer` · `contact` |
| `dental-implants` | F1 | `restorations` · `composite-fillings` · `crowns-caps` · `fixed-bridges` · `offer` · `contact` |
| `dentures-partial-dentures` | F1 | `restorations` · `dental-implants` · `composite-fillings` · `crowns-caps` · `offer` · `contact` |
| `digital-x-rays` | F1 | `general-dentistry` · `dental-exams-cleanings` · `fluoride-treatment` · `sealants` · `offer` · `contact` |
| `dr-adrian-ruiz` | F3 | `team` · `services` · `locations` · `contact` |
| `dr-andy-landaverde` | F3 | `team` · `services` · `locations` · `contact` |
| `dr-chris-schaudt` | F3 | `team` · `services` · `locations` · `contact` |
| `dr-karthikeyan-subramani` | F3 | `team` · `services` · `locations` · `contact` |
| `dr-max-torres` | F3 | `team` · `services` · `locations` · `contact` |
| `dr-norma-miranda` | F3 | `team` · `services` · `locations` · `contact` |
| `dr-omar-lavado` | F3 | `team` · `services` · `locations` · `contact` |
| `dr-stephanie-andrade` | F3 | `team` · `services` · `locations` · `contact` |
| `dr-victoria-quizon` | F3 | `team` · `services` · `locations` · `contact` |
| `dr-vivi-dang-roberts` | F3 | `team` · `services` · `locations` · `contact` |
| `faq` | F3 | `offer` · `insurance-financing` · `services` · `locations` · `contact` |
| `fixed-bridges` | F1 | `restorations` · `dental-implants` · `composite-fillings` · `crowns-caps` · `offer` · `contact` |
| `fluoride-treatment` | F1 | `general-dentistry` · `dental-exams-cleanings` · `digital-x-rays` · `sealants` · `offer` · `contact` |
| `general-dentistry` | F2 | `dental-exams-cleanings` · `digital-x-rays` · `fluoride-treatment` · `sealants` · `contact` |
| `gum-recession` | F1 | `periodontics` · `periodontal-disease` · `sirolaser` · `antibiotic-treatment` · `offer` · `contact` |
| `henderson` | F1 | `services` · `team` · `offer` · `contact` · `locations` |
| `index` | F2 | `services` · `locations` · `team` · `new-patients` · `offer` · `reviews` · `about` · `contact` |
| `inlay-restorations` | F1 | `restorations` · `dental-implants` · `composite-fillings` · `crowns-caps` · `offer` · `contact` |
| `insurance-financing` | F4 | `offer` · `new-patients` · `faq` · `contact` · `locations` |
| `invisalign` | F1 | `orthodontics` · `braces-for-children` · `braces-for-adults` · `offer` · `contact` |
| `locations` | F2 | `lone-mountain` · `sunrise-manor` · `summerlin` · `north-las-vegas` · `henderson` · `north-decatur` · `blue-diamond` · `contact` |
| `lone-mountain` | F1 | `services` · `team` · `offer` · `contact` · `locations` |
| `new-patients` | F2 | `offer` · `insurance-financing` · `faq` · `contact` · `contact` |
| `north-decatur` | F1 | `services` · `team` · `offer` · `contact` · `locations` |
| `north-las-vegas` | F1 | `services` · `team` · `offer` · `contact` · `locations` |
| `offer` | F4 | `insurance-financing` · `dental-exams-cleanings` · `locations` · `contact` · `new-patients` |
| `onlay-restorations` | F1 | `restorations` · `dental-implants` · `composite-fillings` · `crowns-caps` · `offer` · `contact` |
| `oral-cancer-exam` | F1 | `periodontics` · `periodontal-disease` · `sirolaser` · `gum-recession` · `offer` · `contact` |
| `oral-surgery` | F2 | `bone-grafting` · `wisdom-teeth-extractions` · `contact` |
| `orthodontics` | F2 | `invisalign` · `braces-for-children` · `braces-for-adults` · `contact` |
| `periodontal-disease` | F1 | `periodontics` · `sirolaser` · `gum-recession` · `antibiotic-treatment` · `offer` · `contact` |
| `periodontal-scaling-root-planing` | F1 | `periodontics` · `periodontal-disease` · `sirolaser` · `gum-recession` · `offer` · `contact` |
| `periodontics` | F2 | `periodontal-disease` · `sirolaser` · `gum-recession` · `antibiotic-treatment` · `crown-lengthening` · `bruxism` · `oral-cancer-exam` · `periodontal-scaling-root-planing` · `prophylaxis-teeth-cleaning` · `contact` |
| `porcelain-veneers` | F1 | `cosmetic-dentistry` · `teeth-whitening` · `offer` · `contact` |
| `privacy-policy` | chrome-only · terminal | `contact` |
| `prophylaxis-teeth-cleaning` | F1 | `periodontics` · `periodontal-disease` · `sirolaser` · `gum-recession` · `offer` · `contact` |
| `restorations` | F2 | `dental-implants` · `composite-fillings` · `crowns-caps` · `fixed-bridges` · `inlay-restorations` · `onlay-restorations` · `dentures-partial-dentures` · `root-canal-therapy` · `contact` |
| `reviews` | F3 | `locations` · `team` · `about` · `contact` · `services` |
| `root-canal-therapy` | F1 | `restorations` · `dental-implants` · `composite-fillings` · `crowns-caps` · `offer` · `contact` |
| `sealants` | F1 | `general-dentistry` · `dental-exams-cleanings` · `digital-x-rays` · `fluoride-treatment` · `offer` · `contact` |
| `services` | F2 | `general-dentistry` · `cosmetic-dentistry` · `restorations` · `oral-surgery` · `periodontics` · `orthodontics` · `contact` |
| `sirolaser` | F1 | `periodontics` · `periodontal-disease` · `gum-recession` · `antibiotic-treatment` · `offer` · `contact` |
| `smile-gallery` | F3 | `services` · `cosmetic-dentistry` · `porcelain-veneers` · `contact` · `reviews` |
| `summerlin` | F1 | `services` · `team` · `offer` · `contact` · `locations` |
| `sunrise-manor` | F1 | `services` · `team` · `offer` · `contact` · `locations` |
| `team` | F2 | `dr-adrian-ruiz` · `dr-norma-miranda` · `dr-vivi-dang-roberts` · `dr-max-torres` · `dr-victoria-quizon` · `dr-stephanie-andrade` · `dr-chris-schaudt` · `dr-karthikeyan-subramani` · `dr-omar-lavado` · `dr-andy-landaverde` · `contact` |
| `teeth-whitening` | F1 | `cosmetic-dentistry` · `porcelain-veneers` · `offer` · `contact` |
| `wisdom-teeth-extractions` | F1 | `oral-surgery` · `bone-grafting` · `offer` · `contact` |
