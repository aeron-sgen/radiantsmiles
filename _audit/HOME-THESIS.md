# HOME THESIS — `index` · radiantsmiles

**Status: FOR OWNER REVIEW. The home is not built yet.**
SKILL.md ⑦ requires this thesis, and owner sign-off on it, before `index` is composed. Every number
below is measured off the 62 shipped fragments and the locked C1/C6 inputs, not estimated.

---

## 1. The finding that decides the whole page

The locked link-and-funnel map (P6 §1) states it outright:

> **F1 is the largest role at 36 of 66 pages, and that is deliberate.** … the architecture assumes a
> patient arrives on a deep page from search, **never on the homepage.**

Role split across the 66 briefs, counted on disk: **F1 36 · F3 14 · F2 11 · F4 2 · chrome-only 3.**

So this home page is **not the acquisition surface**. Fifty-five percent of the site is built to be
landed on directly, carrying its own office phone, hours and book CTA so the reader never needs a hub.
`index` is briefed `links_from: entry:` — it is the root of the F2 evaluation route and the target of
the wordmark on all 65 other pages.

**Therefore the home's job is ORIENTATION, not persuasion-from-cold.** Its two real audiences are:

1. **The brand-level arrival** — someone who searched the practice by name, or was referred. They
   already have intent; they need to find the right door fast.
2. **The returning reader** — someone deep on a service or office page who clicked the wordmark. They
   arrive *mid-consideration* and need the map they did not have.

A conventional homepage optimises for the cold visitor who must be convinced. Building that here
would be designing for the smallest of the three cases and duplicating work the 36 F1 pages already
do better, with the office's own phone number.

## 2. What the built site already proves — so the home must not re-prove it

The design language has genuinely converged across the 62 pages. Component families, by pages using them:

| family | pages | what it carries |
|---|---:|---|
| `cc-arg` `cc-fig` `cc-panel` `cc-faq` `cc-offer` | 35 | the argument, figures, evidence panels, objections, entry offer |
| `cc-rail` | 33 | the cross-link chip rail |
| `cc-evidence` `cc-pillar` | 32 | cited third-party record · benefit pillars |
| `cc-hero` | 30 | the split hero |
| `cc-proof` | 29 | the sourced Birdeye/BBB record |
| `cc-inhouse` | 27 | "one practice, one clinical roster, seven offices" |

Section counts run **3 to 11, median 6**. Worst pairwise structural similarity across all 62 is
**0.750**, and that pair is the two legal documents, which are exempt and supposed to share a template.

**Consequence for the home:** the in-house wedge (`cc-inhouse`) already appears on 27 pages and the
sourced proof record on 29. The home does not need to *argue* the consolidation story — it needs to
*route*. Restating it at length would make the home the 28th page making the same case.

## 3. The eight routes, measured

`index` briefs `links_to: services, locations, team, new-patients, offer, reviews, about, contact`,
and `verify-home-routes` enforces that every one is linked. What each destination actually is today:

| destination | sections | dark | h2 | imgs | what it does for the reader |
|---|---:|---:|---:|---:|---|
| `services` | 7 | 3 | 9 | 9 | the 6 specialty hubs, 28 leaves beneath |
| `locations` | 5 | 3 | 9 | 10 | all 7 offices, each with its own direct line |
| `team` | 6 | 3 | 12 | 12 | the 10-clinician roster |
| `new-patients` | 8 | 3 | 8 | 6 | what the first visit is |
| `offer` | 4 | 2 | 11 | 3 | $45 exam and X-ray, $29 senior |
| `reviews` | 6 | 2 | 3 | 0 | the cited review record |
| `about` | 6 | 4 | 2 | 5 | the practice story |
| `contact` | 3 | 2 | 2 | 7 | **the single intake form on the site** |

Hub weights, from C1 `parent`: **team 10 · periodontics 9 · restorations 8 · locations 7 · services 6
· general-dentistry 4 · about 4 · orthodontics 3 · cosmetic-dentistry 2 · oral-surgery 2 ·
new-patients 2.**

Locked nav (C1, unchanged): **Services · Locations · Our Team · New Patients · About.**

## 4. The thesis

> **The home is a switchboard, not a sales letter.** It states the practice's one differentiating
> fact, then hands the reader the fastest route to the door they actually want — a specialty, an
> office, a clinician, or the intake form — and it gets out of the way.

Three claims behind that, each traceable:

1. **Route width beats route depth.** The site's own shape is wide: 28 service leaves under 6 hubs,
   7 offices, 10 clinicians. A reader's first question is *which one*, not *why you*. §5 of the
   index brief already calls for a specialty switcher across all six groups.
2. **The differentiator is one sentence, not one section-run.** M§1.1 — one practice, one clinical
   roster, seven offices, so the standard does not change with the address. It is on 27 pages
   already. The home states it once, high, and moves.
3. **Every proof on the home must be one already cited elsewhere.** The build ships **272 owner holds**
   across the copy corpus, and — verified — **0 of them render as visible text**; all 62 fragments
   carry them as HTML comments. The home must hold that line. Two holds land directly on it:
   §2 proof-strip (no practice-wide review figure exists — the Lake Mead record ships with its scope
   stated) and §9 offer-teaser (⚠OWNER §G-3, no real terms; and the phrase "Limited Time" must not appear).

## 5. Derived section order, and why each is where it is

The brief lists 12 sections. This is the order the analysis supports, with the deviations flagged.

| # | section | why here |
|---:|---|---|
| 1 | hero | "Every specialty. Seven neighbourhoods. One practice." Book primary, call secondary. Real practice photography, never stock teeth. |
| 2 | proof-strip | the cited record immediately under the claim, scope stated — because the claim is a superlative-adjacent one and `content-bible.md` §6 requires the scope |
| 3 | specialty-switcher | **moved up from brief §5.** This is the router's core act and the reader's first real question. Six groups, weighted 9/8/4/3/2/2 |
| 4 | locations-teaser | **moved up from brief §8.** The second-most-likely question is *which office*, and all 7 carry their own direct line |
| 5 | one-practice-value | the M§1.1 wedge, stated once |
| 6 | differentiator-narrative | three pain-to-fix rows against the market's MODEL, never a named rival |
| 7 | data-proof | the ADA HPI 55% finding, cited by name and date, as the evidence base for the senior offer |
| 8 | team-teaser | named clinicians with real credentials → team hub |
| 9 | patient-proof | real attributed reviews, reviewer name and platform. No invented testimonial |
| 10 | offer-teaser | $45 / $29 with the terms line and its owner hold |
| 11 | stance-line | one line of brand position |
| 12 | final-cta | book primary, call the office nearest you |

**The one substantive deviation from the brief's order:** switcher and locations move from §5/§8 up to
positions 3 and 4, ahead of the two argument sections. That follows directly from §1 — a reader who is
already oriented wants the door, and the argument sections are the part the other 62 pages already make.
If you prefer the brief's literal order, say so and it ships as written; this is exactly the kind of
call the ⑦ owner checkpoint exists for.

## 6. Risks I will carry into the build

- **G13 distinctness.** Section counts 3–11 are all occupied, and 12 sections would make `index` the
  longest page on the site. It is the only T-HOME, so it has no same-type sibling, but
  `verify-cross-page-variety` still applies.
- **`verify-home-routes`** requires all 8 destinations linked. Non-negotiable, easy to satisfy.
- **The specialty switcher is "interactive" per brief §5.** The kit's only script-free interaction is
  the native `<details>`/`<summary>` accordion, already used sitewide. No JS will be introduced.
- **Contrast.** The home will carry several dark grounds. Any ground flip gets `contrast.mjs` run on
  it before promote — contrast is NOT in the 52-gate battery, and a flip already shipped 1.40:1 text
  once on this build at a clean 52/52.

---

## What I need from you

1. **Approve or amend the thesis in §4**, and
2. **Approve or reject the one order change in §5** (switcher + locations to positions 3–4).

On your word I build `index`, run the full stack plus the render gates and the contrast probe, then
rebuild and re-audit the whole 66.
