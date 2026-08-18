# DECISIONS LEDGER — `radiantsmiles`

**C5 in the copied handoff set.** The dated, numbered record of every binding decision on this build, with explicit precedence. This file is one of the four **OVERRIDE-detection checksum anchors** in `HANDOFF-RECEIPT.json` — a late owner change is recorded here as an **in-place OVERRIDE block**, which changes this file's sha256, which trips the build-side `verify-handoff-current` gate and forces a re-run of P7 + a re-copy. It is never hand-edited in the build tree.

**Opened:** 2026-07-30 · **Slug:** `radiantsmiles` · **Brand:** Radiant Smiles Dental Care

---

## Precedence (highest wins)

1. **An owner OVERRIDE block in this file** (dated, numbered `O-n`) — beats everything below it.
2. **Owner-supplied material** in `_inbox/` — beats the live site.
3. **First-party live-site fact**, crawled + snapshot-locked 2026-07-30 (`existing-a-model.md` PART A).
4. **First-party third-party research**, fetched with URL + date this run.
5. **⚠AGENT-DERIVED default** — prep's generated working value. Lowest precedence; overturned by anything above.

> **Status of this build:** no owner interview has occurred. Decisions D1–D14 below are recorded at their real provenance level. Every `⚠AGENT-DERIVED` decision is a working default queued for owner correction at the P2 / P4 / P6 owner previews and listed in the P7 shopping list as `[OWNER-DECISION]`.

---

## D1 — Site type: redesign, not greenfield
**Date:** 2026-07-30 · **Provenance:** live-site fact · **Status:** RESOLVED
`radiantsmilesnv.com` is live: WordPress 6.9.5 + Elementor 4.2.1 on `hello-elementor`, served through Cloudflare over GoDaddy hosting. 102 HTTP captures / **67 unique reachable pages** / 372 assets, snapshot-locked 2026-07-30. Every downstream phase treats this as a redesign with a 301 obligation.

## D2 — The published mission is the locked held positioning
**Date:** 2026-07-30 · **Provenance:** live-site fact (verbatim) · **Status:** RESOLVED
Absent an owner interview, `D-OFFER-014` is captured **verbatim** from the practice's own published mission statement rather than rewritten:
> *"Our mission is simple — provide exceptional dental care while making every visit comfortable, stress-free, and personalized. Patients across Las Vegas and Henderson choose Radiant Smiles because of our commitment to beautiful results, honest care, and a luxury dental experience that makes you feel like family."* — `https://radiantsmilesnv.com/`, fetched 2026-07-30

P2 may sharpen it against the P1 dossiers; it may not contradict it. **Carried tension:** the statement claims *"a luxury dental experience"* while the only published price is a `$45` door-opener in a market whose premium pole charges `$279`. P2 must resolve this honestly — it cannot assert both.

## D3 — "Top-Rated Dentist" is retired as the category line
**Date:** 2026-07-30 · **Provenance:** ⚠AGENT-DERIVED from live-site + research fact · **Status:** RESOLVED
The live H1 `"Las Vegas & Henderson's Top-Rated Dentist"` does not ship. Two independent reasons:
1. **Unprovable** — no ranking body, metric or date is cited anywhere on 67 pages.
2. **Non-ownable** — a direct competitor, Las Vegas Dental Group, already runs the phrase in its own `<title>`: *"Dentist Las Vegas | Top-Rated Dentist Near Me | Las Vegas Dental Group"* (fetched 2026-07-30).

Replaced by the ⚠AGENT-DERIVED category line *"the Las Vegas dental group that keeps every specialty — and every neighbourhood — in one practice"*, which rests on the two things the site can actually evidence: six specialties in-house at every office, and seven physical locations. **→ re-surfaced verbatim at the P2 owner preview.**

## D4 — Price is not an available wedge
**Date:** 2026-07-30 · **Provenance:** research fact (first-party probes, all HTTP 200, 2026-07-30) · **Status:** RESOLVED
The Las Vegas new-patient exam offer band:

| $0 | $39 | **$45** | $49 | $98 | $279 |
|---|---|---|---|---|---|
| BDG Dental Services (free exam + digital X-rays, new uninsured) | Absolute Dental | **Radiant Smiles** | Edge Dental | The Tooth Family Dental | Stunning Smiles (incl. iTero scan) |

Radiant Smiles' `$45` sits mid-band and is **undercut by the two largest multi-location groups it competes with directly**. No page may claim a price advantage. The offer stays as a door-opener; conversion must be carried by access (7 locations, evening/weekend/same-day) and breadth (six specialties in-house). **This is the single most consequential input P2 inherits.**

## D5 — Proof strategy: `mixed`, deliberately not the skill's fabricated-fallback default
**Date:** 2026-07-30 · **Provenance:** ⚠AGENT-DERIVED · **Status:** RESOLVED (§F2)
The skill's D7 default is F2 fabricated-fallback. **Overridden here, because this practice has real proof it simply never cites:**
- **4.5★ / 506 reviews** — Birdeye, Lake Mead office alone (fetched 2026-07-30)
- **BBB B+ / 23 years in business** (fetched 2026-07-30; *not* BBB-accredited, 3 complaints filed, 1 unresolved — recorded honestly)
- **AAO Milo Hellman Award 2019** + Andre Schroeder Research Prize 2006 — Dr. Karthikeyan Subramani
- Clinicians at **22 and 41 years** in practice (Dr. Ruiz DDS UCLA 1995; Dr. Miranda DDS UCLA 1976)

Meanwhile the live site ships **one unattributed quote ("Debra R") repeated across 60+ pages**. Therefore: **real-only for every testimonial, review, rating, credential and award — cite it or drop it.** Fabricated-fallback is confined to **illustrative before/after and office imagery**, which must carry `⚠OWNER PLACEHOLDER` + `noindex`-until-swapped and be tracked in the build's fabrication manifest. **No fabricated patient, quote, metric or clinical outcome, ever.** **→ re-surfaced at the P6 content-claims preview.**

## D6 — Pricing presentation
**Date:** 2026-07-30 · **Provenance:** ⚠AGENT-DERIVED · **Status:** RESOLVED (§F1)
Publish exactly what is verifiable: the `$45` / `$29` entry offer as the only hard price; all treatment "request a quote"; financing and insurance surfaced prominently as the real affordability answer. **Zero invented treatment prices.** Offer terms ship as `⚠OWNER PLACEHOLDER` and the unqualified "Limited Time Offer" framing does **not** ship until a real expiry exists. **→ re-surfaced at the P6 content-claims preview.**

## D7 — Bespoke set: `[index]` only
**Date:** 2026-07-30 · **Provenance:** ⚠AGENT-DERIVED · **Status:** RESOLVED (§F3)
Homepage takes the marquee treatment. The location page is the site's highest-leverage surface but is used **7×**, so it must be a consistent typed template — bespoke routing there would force seven hand-built pages. **→ re-surfaced at the P4 site-plan preview.**

## D8 — Banned vocabulary is "banned until sourced", not banned permanently
**Date:** 2026-07-30 · **Provenance:** ⚠AGENT-DERIVED from live-site fact · **Status:** RESOLVED
23 terms are banned in `client-rules.json`. Every one traces to a specific `⚠FLAG — UNVERIFIABLE` claim catalogued in `existing-a-model.md` §5. If the owner supplies proof (an award certificate + year, a ranking body, a named technology), the matching term is unbanned via an OVERRIDE block here and `client-rules.json` is regenerated — which changes both checksums and correctly forces a re-copy.

## D9 — The award does not ship
**Date:** 2026-07-30 · **Provenance:** research fact · **Status:** RESOLVED, reversible
*"the America's Best Dentist Award from the National Consumer Advisory Board"* appears on `/about-us/` and all 7 location pages, with no year, no named recipient and no certificate. Independent corroboration was **not found** on 2026-07-30; the issuing body's own materials are the only located source. It does not ship, and `"Award-Winning"` / `"many industry recognitions"` fall with it since they rest on it. **Reversible** on an owner-supplied certificate + year (→ OVERRIDE).

## D10 — "Open weekends and evenings" must be stated per location or not at all
**Date:** 2026-07-30 · **Provenance:** live-site fact · **Status:** RESOLVED
The blanket claim is contradicted by the site's own hours tables: **4 of 7 offices closed Saturday, 5 of 7 closed Sunday**, latest close 7 PM. Lone Mountain and North Decatur both open Sunday. Hours ship per location, from `client-rules.json.contactData`, never as a site-wide claim.

## D11 — Third-party financing terms must be attributed
**Date:** 2026-07-30 · **Provenance:** live-site fact · **Status:** RESOLVED
*"0% interest / No down payment / No annual fees"* are the terms of **Care Credit, Cherry, Sunbit and Lending Club**, presented on the live site as the practice's own with no disclosure. Every page stating them must attribute them to the lender and note that approval is required.

## D12 — "We help patients acquire real dental insurance" does not ship in any form
**Date:** 2026-07-30 · **Provenance:** ⚠AGENT-DERIVED from live-site fact · **Status:** BLOCKED pending owner definition
The phrase appears on `/` and `/about-us/`, and — because the four "Why Choose" cards ship identical body copy — it renders **four times per page** under four different headings. As written it reads as regulated insurance brokerage activity with no license, carrier or process disclosed. It does not ship until the owner defines what the activity actually is (intake §G-6).

## D13 — Sunrise Manor ZIP carried as 89107 pending confirmation
**Date:** 2026-07-30 · **Provenance:** live-site fact (conflicting) · **Status:** PROVISIONAL
The live site publishes **two** ZIPs for the same office: `89107` in the site-wide footer (all 67 pages) and `89104` in the `/contact-us/` and `/new-patient-special/` booking blocks. `89107` is carried forward on weight of occurrence, **flagged for owner confirmation** (intake §G-16). NAP consistency across the local-SEO surface depends on resolving this.

## D14 — P1 research set is prep-identified, and superseded the moment the owner names rivals
**Date:** 2026-07-30 · **Provenance:** ⚠AGENT-DERIVED from research fact · **Status:** RESOLVED, provisional
The live site **names no competitor across 67 pages**, so there is no owner or site list to lock. Per the skill's P1 broadening rule, prep identified the real regional field by search and verified each candidate returns HTTP 200 before listing it. Locked targets: **Absolute Dental** (price floor, $39) · **BDG Dental Services** (multi-location + free exam) · **P3 Dental Group** (structural twin, 7 offices LV+Henderson) · **Stunning Smiles of Las Vegas** (premium pole, $279). Reserves: Las Vegas Dental Group, The Tooth Family Dental, Edge Dental, Infinity Dental. **If the owner names their true rivals, this list is superseded and P1 re-runs** (intake §G-17).

---

## D15 — ◆ OWNER APPROVAL: P2 positioning wedge SIGNED OFF
**Date:** 2026-07-30 · **Provenance:** owner decision at the P2 owner-preview gate · **Status:** RESOLVED
The owner reviewed `_spec/_owner-preview/positioning.html` and **approved the locked P2 positioning as written** — no wording changes requested. This promotes the following from ⚠AGENT-DERIVED to **owner-approved**:
- the category line and the lead message *"Every specialty. Seven neighbourhoods. One practice."*
- all five cited axes and the ten-row competitive matrix (M§1.1–M§1.10)
- **D4 (price is not a wedge)** — accepted; the entry offer stays a door-opener and is never argued as a price advantage
- the KEEP / BEAT / MODERNIZE split

`positioning-manifest.json{owner_approved}` flipped `false → true`. P3 is unblocked.

## D16 — ◆ OWNER DECISION: the award and the "Top-Rated" superlative are BOTH RETIRED
**Date:** 2026-07-30 · **Provenance:** owner decision at the P2 owner-preview gate · **Status:** RESOLVED
Presented with the option to keep either claim, the owner chose **"Drop both, use the real record."** This **confirms and hardens D3 and D9** — they are no longer prep-derived defaults but owner-ratified decisions:
- *"Las Vegas & Henderson's Top-Rated Dentist"* → **retired.** Replaced by the real, cited record: *"Rated 4.5 stars across 506 patient reviews at our Lake Mead office"* (Birdeye, fetched 2026-07-30) — **published with its scope stated**, per `content-bible.md` §6.
- *"America's Best Dentist Award / National Consumer Advisory Board"* → **dropped entirely.** No independent corroboration was found on 2026-07-30. **D9's reversibility is now spent** — reinstating it requires a new owner OVERRIDE block plus a certificate and year.
- *"An Award-Winning Dental Practice"* / *"many industry recognitions"* → **retired** with it. Replaced by *"Caring for Las Vegas families for 23 years"* (BBB profile, fetched 2026-07-30; ⚠FLAG BBB-reported — owner to confirm the founding year).

The `bannedVocab` and HOLDS rows covering these terms are now **owner-ratified prohibitions**, not provisional ones.

## D17 — ◆ OWNER APPROVAL: the closed 66-page site plan SIGNED OFF
**Date:** 2026-07-30 · **Provenance:** owner decision at the P4 owner-preview gate · **Status:** RESOLVED
The owner reviewed `_spec/_owner-preview/site-plan.html` and **approved the closed 66-page inventory**, choosing to carry maximum organic surface forward rather than trim. Ratified:
- **All 28 canonical service leaves and all 10 clinician pages are carried forward.** The alternative (collapsing to ~40 pages) was declined — the domain is 23 years old and already ranks on this long tail.
- **9 net-new pages:** the `services` hub, the 6 service group hubs, the `new-patients` hub, and `reviews`.
- **10 baseline pages dropped** across the 6 rows of `architecture.md` §7. *(Corrected 2026-07-31: this read "6", which was the ROW count — the last row, "5 duplicate procedure leaves", covers 5 pages on its own. `page-inventory-manifest.json` was corrected the same day and the baseline now closes at 67 = 57 carried + 10 dropped; this ledger line was the one site the correction missed.)*
- **IA-5 (blog) and IA-6 (Spanish tree) stay OUT of scope.** The Spanish tree was explicitly offered and declined for this build; bilingual capability ships as *content* (named per clinician), not as a duplicated site. This remains a live competitive gap versus BDG and is carried to the P7 shopping list as a phase-2 recommendation.

`page-inventory-manifest.json{owner_approved_pagelist}` flipped `false → true`. P5 is unblocked. **The inventory is now CLOSED** — adding a page requires re-running P4 and re-approving.

## D18 — Procedure-dedupe arithmetic corrected (self-caught)
**Date:** 2026-07-30 · **Provenance:** self-audit against the crawl at the P4 sign-off · **Status:** RESOLVED
`architecture.md` prose stated "31 baseline leaves" and "6 duplicate procedure leaves". Both were wrong. Verified against `_page-urls.txt`:
- `/procedures/` holds **34** pages: 1 non-clinical (`/procedures/links/`) + **33 clinical leaves**.
- **5** topics — not 6 — exist as two live pages each: `composite-fillings`, `porcelain-crowns-caps`↔`crowns-caps`, `porcelain-fixed-bridges`↔`fixed-bridges`, `porcelain-inlays`↔`inlay-restorations`, `porcelain-onlays`↔`onlay-restorations`.
- **`dental-implants` was wrongly listed as a duplicate.** It is cross-linked from three nav groups but exists as only ONE page; it is re-parented to restorations, not merged.
- **33 − 5 = 28**, which is what the inventory and sitemap already carried. Only the prose was wrong; no count changed and the three-way reconciliation was never affected.

## D19 — ◆ OWNER APPROVAL: the content/claims contract SIGNED OFF, with an honest-verdict mandate
**Date:** 2026-07-30 · **Provenance:** owner decision at the P6 owner-preview gate (Gate 3 of 3) · **Status:** RESOLVED
The owner reviewed `_spec/_owner-preview/content-claims.html` (66 briefs · 140 load-bearing claim lines · 75 `⚠OWNER` placeholders) and **approved the claims contract as written**, explicitly choosing *"ship placeholders, honest NO-GO if needed"* over forcing a green verdict. Ratified:
- **The `$45` / `$29` offer ships with a placeholder terms line, and the words "Limited Time Offer" do NOT ship** until a real expiry exists. (§G-3)
- **The smile gallery ships `⚠OWNER PLACEHOLDER` + `noindex`** until real consented before/after photography is supplied. **No fabricated patient, quote, metric or clinical outcome is permitted anywhere** — confirming D5. (§G-9)
- **P7 must report the verdict the evidence actually supports.** A committed NO-GO with a ranked shopping list is an accepted, valid outcome. The owner declined the option to force a GO.

`briefs-manifest.json{owner_approved_briefs}` flipped `false → true`. P7 and the handoff chain are released.

**All three owner-preview gates are now signed off (P2 · P4 · P6).** The remaining owner touchpoint is the P7 GO acknowledgement.

> **D19 was REVOKED on 2026-07-30 and RE-TAKEN on 2026-07-31. See D20.**

## D20 — ◆ OWNER APPROVAL (re-taken): the claims contract, plus two shared-asset patches
**Date:** 2026-07-31 · **Provenance:** owner decision after the P6 approval was revoked · **Status:** RESOLVED

**Why D19 had to be re-taken.** The 2026-07-30 approval provably did not cover what shipped. Proven from mtimes: preview rendered `08:29:41Z` → `owner_approved_briefs` flipped `08:37:27Z` → `briefs/insurance-financing.md` rewritten `08:40:35Z`. `verify-briefs-approved` self-exempts once the flag is `true`, so it structurally could not re-fire. `_reconciled.json` had claimed this was "not a silent edit to an approved artifact" — **that claim was false.** The flag was returned to `false`, the preview re-rendered, and the sign-off re-requested.

**The re-approval.** The owner reviewed the re-rendered `_spec/_owner-preview/content-claims.html` (66 briefs · 142 claim lines · 76 `⚠OWNER` placeholders), rendered `07:53:43` — **after** the newest brief (`briefs/index.md`, `07:51:19`), which is the freshness check the revoked approval failed. Four changes are covered:
- `briefs/insurance-financing.md` — carriers `7 → 41` in §2 **and** the FEATURE row reconciled to 41. The file previously contradicted itself.
- `briefs/north-decatur.md` §2 — Sunday restored from a **fabricated** "⚠OWNER — not listed on the live site" to the real published `8:30 AM–3 PM`. Derived counts corrected with it: "6 of 7 closed Sunday" → **5 of 7**; "the only Sunday office" → **one of two**.
- `briefs/dr-andy-landaverde.md` — the Henderson office assertion removed. It was sourced from *"I was born in Watsonville, California in 1998 and moved to Henderson, Nevada at the age of four"* — a childhood residence — and contradicted §4 of the same brief.
- `briefs/index.md` — slug status `[R] → [U]`. The home page keeps its path and takes no 301.

All ratifications from D19 carry forward unchanged, including the honest-verdict mandate and the **27 of 66 pages that will ship a visible flagged placeholder**.

**Two shared-asset patches authorised** (`.claude/rules/04-code-modification.md` requires explicit permission; it was given):
1. **`gen-fact-registry.mjs` — `must_convey` provenance guard.** Root cause of the revoked GO's BLOCKER 1. Three rejection rules, each a provenance test on on-disk text: (a) a numeric token that is an explicit price in `market-intel/` and absent from the *factual* subtrees of `client-rules.json`; (b) a token colliding with `bannedVocab`/`OVERCLAIM`; (c) a bare numeric token occurring in the corpus only as the tail of a `D-*` identifier. Also fixed at source: the id-scrub now swallows `/NNN` **alternation** tails, not just `..NNN` ranges — `intake-brief.md` cites `D-INCUMBENT-007/008`, and the leftover `/008` was how `008` became a mandatory render on 41 pages. Rejections are recorded in `fact-registry.json._must_convey_guard`, never silent. Regression: the generator's own smoke test is green before and after.
2. **`HANDOFF-PREP-TO-BUILD.md` doc fix.** §5 asserted "copy set is exactly C1–C7" while `seam-copy.mjs` copies **C1–C12** and the receipt seals 12. The script was right and the doc was stale; a reviewer checking against that line would have flagged four correct artifacts as violations.

**Deliberately NOT patched, deferred by owner decision:** `verify-selling-assets-surfaced.mjs`. Both its defects are recorded in `selling-asset-manifest.json.gate_rules` and can be pulled whenever wanted. It is a **dead gate** — registered in no `settings.json` anywhere under `.claude` — so current blast radius is nil.

## D21 — ◆ OWNER APPROVAL (second re-take): the claims contract, after four fabricated absences were reversed
**Date:** 2026-08-03 · **Provenance:** owner decision · **Status:** RESOLVED

**Why D20 had to be re-taken.** Two independent reasons. (1) Four briefs changed materially on 2026-08-03 — `dr-victoria-quizon.md`, `dr-stephanie-andrade.md` and `dr-chris-schaudt.md` stopped instructing the build to ship a placeholder portrait frame and now each name a real photograph; `contact.md` stopped asserting that North Decatur has no online booking. (2) **D20's own freshness proof was false when written.** It certified *"newest brief briefs/index.md 07:51:19 < preview 07:53:43"* — but `briefs/north-decatur.md` carries mtime `2026-07-31 08:46:49`, after the preview the owner reviewed. It asserted a property of all 66 briefs from ONE file's timestamp. That is the identical defect D19 was revoked for, committed inside the correction for it.

**The re-approval.** Preview regenerated from the corrected briefs (66 briefs · 147 claim lines · 76 `⚠OWNER` placeholders) at `2026-08-03T07:23:08`; freshness re-derived at sign-off rather than carried forward — newest of all 66 briefs is `contact.md` 07:14:12, so briefs-newer-than-preview = **0**.

**The approval now PINS what it covers**, which no prior approval did: `briefs-manifest.json{owner_approval}` carries `approved_briefs_sha256 a69760a3…c4e20` (canonical NUL-delimited concat over all 66 briefs) and `approved_preview_sha256 82edded3…b8a71`. `verify-briefs-approved.mjs` recomputes and compares both on every P7 consume attempt, so a brief edited after sign-off blocks the gate instead of rotting silently.

**Shared-asset patch authorised in the same pass:** `verify-briefs-approved.mjs` hardened from an approval-time check to a **consume-time** check (5 fail-closed rules). A differential against the pre-change gate proved the old version ALLOWED all three failure shapes it now blocks, including the exact 2026-07-31 rot.

## D22 — ◆ OWNER DECISION: brand card = concept D, on an owner-supplied TEAL palette (a C7 tonal pivot)
**Date:** 2026-08-03 · **Provenance:** owner pick at the ① BRAND-CARD gate · **Status:** RESOLVED — and it CHANGES C7

**The pick.** Four concepts were composed from the v4 unified design system and all four were age-tuned for a 40+ primary audience. The owner picked **D**.

**The palette is owner-supplied and it is a PIVOT, not a redeployment.** `#FFD447` · `#F7FAFA` · `#128C7E` · `#0B3D3A`. This **removes the brand navy `#17274f` entirely** and replaces the authority colour with teal; the accent `#FFD447` is near but not equal to the brand yellow `#fce003`. C7 §2 Anchoring locked *"the existing deep navy carries authority and the yellow is the accent that already signals the offer. Keep that relationship; the build decides how."* Both halves of that relationship changed, so this is a change to the RELATIONSHIP and not to its deployment. Recorded here as the owner's decision; C7 §2 is amended to match (see the amendment note there). No `_handoff/` file was hand-edited — the seam re-runs from prep.

**Measured constraints this palette imposes on every downstream phase** (WCAG 2.1, computed not estimated):
- `#FFD447` on `#F7FAFA` = **1.36:1** — the accent is DECORATIVE ONLY and may never carry text or serve as a text ground on light. Every yellow mark on light carries a 1px deep-teal keyline so it is not a ghost.
- `#128C7E` cannot carry text in EITHER direction — 3.94:1 as text on canvas and 3.94:1 for near-white on it. Demoted to boundaries and graphics; `#10746A` is the derived step that is legal both ways.
- `#0B3D3A` on `#128C7E` = **2.91:1**, failing even the 3:1 non-text bar. `#0B3D3A` is never set on `#128C7E` anywhere.

**Two consequences carried forward, neither resolved by this decision:**
1. **The differentiation argument moved.** D's premise was warm ivory as the departure from the live site. The owner canvas `#F7FAFA` sits **1.05:1 from the live `#ffffff`** where the warm ivory sat at 1.11:1 — the paper got LESS distinguishable. Separation is now carried entirely by the teal, a colour the live site contains at no strength.
2. **The logo becomes a dependency.** The primary lockup is navy-and-yellow JPG artwork and would be the only navy-and-yellow object on a teal site. It cannot be recoloured without a vector master, so the existing `⚠OWNER §G-7` vector-master request is now a blocker for visual coherence, not just a quality nice-to-have.

**Age-tuning ratified with the pick** (C7 §4 already named older patients as an audience, so this executes the locked direction rather than departing from it): body **18px**, line-height **1.70**, nothing below **14px** anywhere, all interactive targets **>= 48px**, 8 `tel:` links, body contrast **11.48:1**. Verified in-render across 581 text-bearing elements.

## OVERRIDE blocks

> A late owner decision is recorded HERE, in place, as a numbered `O-n` block — never as an out-of-band edit to the build tree. Writing one changes this file's sha256, trips the build-side `verify-handoff-current` staleness gate, and forces the sanctioned re-run: **re-run P7 readiness → re-write `HANDOFF-KICKOFF.json` → re-run the atomic checksummed copy.**

*(none — no owner OVERRIDE has been issued as of 2026-07-30)*

---

## Open owner items (the P7 shopping-list seed)

18 items are parked in `intake-brief.md` §G, each with a stated fail-closed fallback so none blocks the pipeline. The four that most change the build:

| § | item | why it matters | fallback if unanswered |
|---|---|---|---|
| G-3 | Real terms / expiry / senior-age threshold for the $45–$29 offer | a permanently-running "Limited Time Offer" with no terms is an advertising-compliance exposure | ship with a `⚠OWNER PLACEHOLDER` terms line; drop the "Limited Time" framing |
| G-9 | Whether consented before/after photography exists | `/smile-gallery/` is live and **empty**; before/after is the top-converting asset for the cosmetic services being sold | `⚠OWNER PLACEHOLDER` + `noindex` per D5 |
| G-11 | Current staff roster | 3 doctor URLs serve a **different doctor** than the slug names; Dr. Schaudt has no page; Dr. Nick Low has a page but is unlisted | carry the 10 doctors on the live index, each on a name-matched slug; 301 the mismatched URLs |
| G-6 | What *"we help patients acquire real dental insurance"* actually means | reads as regulated activity; currently renders 4× per page | the phrase does not ship (D12) |

**Ledger opened 2026-07-30 · 22 decisions (D1–D22) · 0 OVERRIDEs · 18 open owner items.**

*(Recounted 2026-08-03. It read "20 decisions (D1–D20)". Two were missing: **D21** — the second P6 re-take, whose id had already been written into `briefs-manifest.json{owner_approval.ledger_entry}` on 2026-08-03 while the ledger entry itself was never appended, so the manifest referenced a decision that did not exist here; and **D22** — the owner's ① BRAND-CARD pick of concept D on a teal palette, which amends C7 §2 Anchoring. The count is now derived from the headings present, not incremented. The 18 open owner items are unchanged and still block public launch rather than build start.)*

*(Corrected 2026-07-31: the count read "14" over a file that already contained D1–D19 — it was written before D15–D19 were appended and never re-counted. It now also carries D20. "None blocking" was dropped when the P6 approval was revoked; the approval was re-taken the same day against a freshness-verified preview, so `briefs-manifest.json{owner_approved_briefs}` is `true` again and the P7 chain is released. The 18 open owner items remain open and none of them blocks the build; what they block is public launch.)*
