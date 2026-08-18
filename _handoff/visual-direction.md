# C7 — VISUAL DIRECTION (design INPUTS) — `radiantsmiles`

> **What this file is, and is not.** These are the **inputs the build DESIGNS FROM** — the measured tone of the client's own site, the captured references, the owner's tonal words, and the asset window. It is **NOT a design.** Prep has zero design governance: there is no token system here, no colour roles, no dark-surface system, no radius, shadow, spacing or type scale. The build's P8 owns all of that.

**Locked on:** 2026-07-30

---

## §0 — BRAND SIGNATURE (the tone source — measured, not assumed)

Tone is derived from **the client's own existing site**, ranked above the vertical blueprint and above any competitor. It was measured deterministically: area-weighted background luminance across the top-level sections of the live homepage, rendered headless.

<!-- BRAND-SIGNATURE {"surface_dominance":"light","dark_ratio":0.154,"energy":"balanced","signature_moves":["navy-and-yellow-offer-band","full-width-location-grid","doctor-portrait-row","single-testimonial-band"],"existing_site":"site-snapshot/index.html","notes":"Measured 2026-07-30 by extract-brand-signature.mjs over https://radiantsmilesnv.com/ — 7 top-level sections, area-weighted background luminance. Light-dominant with a small dark ratio concentrated in the navy offer band and footer."} -->

**Reading the measurement:** the site is **light-dominant** (`dark_ratio 0.154`) with **balanced energy**. The dark area that does exist is concentrated in the navy offer band and the footer. That is the brand's real signature and the build honours it — a light canvas with deep-navy anchoring bands, not a dark site and not a flat white one.

**No tone pivot is being requested.** §2 declares `primary_surface: light`, which agrees with the measured dominance.

## §1 — Captured references (what the build derives the look FROM)

All captured first-party 2026-07-30 and snapshot-locked. These are reference INPUTS, not instructions to copy.

> **The build must NOT resolve the paths in the last column.** They live in the prep tree
> (`Code/client-site-prep/radiantsmiles/_spec/`), and `HANDOFF-PREP-TO-BUILD.md` §6 (PATH-EXCLUSION,
> decision D-B) forbids the build reading its binding inputs from there — the seam copies C1–C12 into
> `_handoff/` and copies images only, so **these HTML snapshots do not exist inside the build's read
> scope**. The last column is **audit provenance**: it records what was actually looked at, so a reviewer
> can re-open it in the prep tree and check this table against the source. The *instruction* to the build
> is entirely in the "what to take" and "what NOT to take" columns — those are self-contained prose and
> require no file access. If a future revision needs the build to see a reference image, it must come
> through the seam as a copied asset, never as a prep-tree path.

| # | reference | what to take from it | what NOT to take | provenance (prep-tree audit path, NOT a build read path) |
|---|---|---|---|---|
| 1 | **The client's own site** — `radiantsmilesnv.com` | The real rails: deep navy `#17274f`, bright yellow `#fce003`, the full-width location grid, the doctor-portrait row. The light canvas with navy anchoring. | The Elementor default rhythm, the duplicated value cards, the single repeated testimonial band, the JPG logo. | `site-snapshot/index.html` |
| 2 | **Stunning Smiles of Las Vegas** — *tagged: proof surfaces* | How a premium dental practice gives proof its own real estate: a populated smile gallery, a dedicated reviews page, a named-technology page, and an itemised offer. | The price point, the investment framing, the superlative density, the missing `<h1>`. | `market-intel/_snapshots/stunning-smiles-*.html` |
| 3 | **BDG Dental Services** — *tagged: IA + multi-location* | The multi-metro H1 pattern, the honest offer-terms line rendered with the offer, the bilingual toggle, per-clinician bios with real specifics. | The countdown-timer urgency device — it reads as pressure selling in healthcare and is exactly what makes an unqualified "Limited Time" offer risky. | `market-intel/_snapshots/bdg-dental-*.html` |
| 4 | **Absolute Dental** — *tagged: local SEO structure* | The city × service page matrix, per-page hand-written meta, and platform-attributed reviews shown with reviewer names. | The 150-link mega-nav, the volume-DSO framing, the emoji in the title. | `market-intel/_snapshots/absolute-dental-*.html` |
| 5 | **P3 Dental Group** — *tagged: anti-reference* | Nothing to take. Included as the **negative** reference: seven offices fragmented across seven brands and domains, with cloned meta and H1 templates. | Everything. This is the model the positioning argues against. | `market-intel/_snapshots/p3-dental-*.html` |

## §2 — Tonal direction (words, not tokens)

primary_surface: light

- **Register:** plainspoken, warm, specific, unhurried. Clinical but human.
- **The governing move:** *replace every superlative with a specific.* This is a visual instruction as much as a copy one — the design must make room for a named credential, a real review count and a stated opening hour, because those are what replace the adjectives being removed.
- **Feel:** calm and uncrowded. This is healthcare for anxious people. Generous whitespace, real photographs of real offices and real clinicians, nothing that reads as a pressure sale.
- **Anchoring:** ~~the existing deep navy carries authority and the yellow is the accent that already signals the offer. Keep that relationship; the build decides how.~~ **AMENDED 2026-08-03 BY OWNER DECISION (ledger D22) — the relationship is re-anchored, not merely redeployed.** The authority colour is now **teal `#0B3D3A`** with `#128C7E` as its mid step; the accent is **`#FFD447`**. The brand navy `#17274f` is retired from the palette. This is recorded as a deliberate owner pivot at the ① BRAND-CARD gate, taken with all four candidate concepts in front of them, and it is amended HERE at the root rather than hand-edited into `_handoff/` — the seam re-runs from prep, per P7.75.

  **What the amendment does NOT change:** the accent still does the job the yellow did — it signals the offer and nothing else, spent once rather than poured. And it is still **decorative only**: `#FFD447` measures **1.36:1** on the canvas, so it may never carry text or act as a text ground on light, exactly as `#fce003` never could at 1.24:1. The old relationship's LOGIC survives the pivot; only its hues changed.

  **Two constraints this creates, both binding on every later phase.** `#128C7E` cannot carry text in either direction (3.94:1 both ways) and is demoted to boundaries and graphics — `#10746A` is the derived step that is legal both ways. `#0B3D3A` on `#128C7E` is **2.91:1** and fails even the 3:1 non-text bar, so that pairing is forbidden outright.

  **One honest cost, recorded rather than argued away:** the practice's primary logo is navy-and-yellow JPG artwork and would be the only navy-and-yellow object on a teal site. Without a vector master it cannot be recoloured, so `⚠OWNER §G-7` is promoted from a quality request to a coherence dependency.
- **Where the weight goes:** the seven locations and the ten named clinicians are the wedge. They should feel like the substance of the site, not a footer afterthought.
- **What the design must actively avoid:** countdown timers, artificial urgency, stock smile close-ups that could be any practice, badge walls of unverifiable awards, and any layout that needs a superlative to fill it.

## §3 — Image treatment

- **Real over stock, always.** The practice has real doctor portraits and a real brand mark on disk. Where a real image does not exist, the build ships a flagged placeholder rather than a stock substitute that implies a facility or a patient that was never photographed.
- **People before teeth.** Clinician portraits and office interiors carry the trust argument. Clinical close-ups are illustrative and secondary.
- **Before/after is the one gap that matters.** `/about/smile-gallery/` is live and populated today, but unusable as proof: its 30 photographs all ship with empty `alt` text, and nothing on the page identifies any of them as a consented before/after pair. It is the highest-converting asset class for the cosmetic services being sold, and no consented photography exists in any captured source. See §6.
- **Every carrier mark needs a text label.** The 41 insurance logos on the current site ship with no `alt` text — invisible to screen readers and to any parser. The rebuild fixes that.

## §4 — Per-vertical notes (dental, applied honestly)

- **Accessibility is a hard rule, not a preference.** Anxious and older patients are a named audience, and 55% of adults 65+ have no dental benefits (ADA HPI, fetched 2026-07-30). Legible type, real contrast, tap targets that work.
- **Hours, addresses and phone numbers are load-bearing UI.** For a seven-office practice these are the most-used content on the site. They come only from `client-rules.json` contactData.
- **No clinical outcome may be promised, implied or illustrated.** Regulated healthcare advertising. The content bible governs.
- **The offer band is a real fixture of this brand** — it already appears site-wide. Keep the fixture; drop the unqualified "Limited Time" framing until real terms exist.

## §5 — Existing brand card

Recorded as a faithful RECORD only, in `radiantsmiles-tokens-spec.md` (C6). Logo files, the existing colour hexes, the font names in use, and the voice. **No token system, no roles, no scale** — the build's P8 overhauls and designs all of that.

## §6 — Asset supply window

**Real, usable assets already on disk** (downloaded 2026-07-30 to `Code/client-site-prep/radiantsmiles/assets/`):

- **3 brand marks** — `radiant-smiles-logo-lv.jpg` (colour, 472w), `radiant-smiles-logo-white.png` (reversed), `radiant-smiles-logo-mark.webp` (icon). ⚠OWNER — no vector master exists; the JPG has no transparency and is upscaled in the live header.
- **12 real clinician portrait files, covering all 10 named clinicians** — Dr. Adrian Ruiz, Dr. Norma Miranda, Dr. Vivi Dang-Roberts, Dr. Karthikeyan Subramani (two different photographs), Dr. Max Torres (two different photographs), Dr. Omar Lavado, Dr. Andy Landaverde, Dr. Victoria Quizon, Dr. Stephanie Andrade, Dr. Chris Schaudt. Real people, real photographs, every one md5-distinct and magic-byte verified on disk (the first nine 2026-07-31, the last three 2026-08-03). The final three are filed under camera-generated names — `IMG_9391-1-2.jpg`, `IMG_4337.jpg`, `IMG_1387-1-scaled.jpg` — and are paired to their clinician by the Elementor image-box binding in the captured roster page, cross-confirmed against each doctor's own page. *Corrected 2026-08-03: this line read "**9 real clinician portrait files, covering 7 of the 10 named clinicians**" and asserted that Quizon, Andrade and Schaudt had NO portrait in the pool. That was false — see the correction block below. An earlier 2026-07-31 correction to this same line (striking a byte-identical Ruiz duplicate and the phrase "and further roster images") was and remains valid; only the coverage claim is reversed.*
- **41 insurance carrier marks + 4 financing partner marks — but only ONE of the four financing files is a clean logo.** ⚠FLAG — third-party trademarks, usage rights unconfirmed (§G-18). Name carriers in text; ship marks only on confirmation. The four financing files are **not interchangeable** and must not be laid out as a uniform logo row: **Lending Club** (`LC-300x104-1.webp`) is the only standalone wordmark; **Cherry** (`cherry.png`) is a banner with *"QUALIFY FOR UP TO $10,000 IN 60 SECONDS"* baked into the pixels; **Sunbit** has **no standalone logo file at all** — its mark exists only inside `Dntl_FB-Post_1080x1080-1.png`, a 1080×1080 social-post creative that also asserts *"Over 85% get approved"* and *"Loans are made by TAB Bank"*; and **Care Credit** is a promotional *"Get Started"* button **hot-linked from `carecredit.com`**, not hosted first-party. Two of the four therefore carry lender terms in the image itself, so the §G-18 disclosure obligation cannot be discharged by adjacent body copy alone. See `selling-asset-manifest.json` `financing_marks` for the per-partner detail. *Corrected 2026-07-31: the count **4 is unchanged and was re-verified**, but this line previously said only "4 financing partner marks", which implied four equivalent first-party logo files. An audit pass challenged the number itself, arguing it should be 3 because `ls assets | grep -ic sunbit` returns 0 and no `<img>` tag references sunbit. Both greps re-ran true, but both are **name**-based and the Sunbit mark is filed under a filename carrying no brand string; reading the raw markup shows `<a href="https://sunbit.com/">` wrapping that PNG on 9 pages, and opening the PNG confirms the "Powered by sunbit" lockup. The challenge is therefore **rejected on the number** and **accepted on the characterisation**, which is what changed here.*

**Genuinely missing:**
- **Before/after smile photography — none exists.** ⚠OWNER §G-9. Ships as `⚠OWNER PLACEHOLDER` + `noindex` until supplied. No fabricated patient, quote, metric or outcome is permitted (D5/D19).
- **Office interior/exterior photography per location** — not separable from the current site's stock. ⚠OWNER.
- **A vector logo master.** ⚠OWNER §G-7.

<!-- ASSET-INTAKE {"real_image_count": 15, "waived": false, "assets": ["assets/radiantsmilesnv.com_wp-content_uploads_2024_03_radiant-smiles-logo-lv.jpg", "assets/radiantsmilesnv.com_wp-content_uploads_2024_03_radiant-smiles-logo-white.png", "assets/radiantsmilesnv.com_wp-content_uploads_2024_04_radiant-smiles-logo-mark.webp", "assets/radiantsmilesnv.com_wp-content_uploads_2024_04_Dr.-Adrian-Ruiz.jpg", "assets/radiantsmilesnv.com_wp-content_uploads_2024_04_Dr.-Norma-Miranda.jpg", "assets/radiantsmilesnv.com_wp-content_uploads_2024_04_Dr.-Vivi-Dang-Roberts.jpg", "assets/radiantsmilesnv.com_wp-content_uploads_2024_05_Dr.-Karthikeyan-Subramani-photo-sm.jpg", "assets/radiantsmilesnv.com_wp-content_uploads_2024_05_Dr.-Karthikeyan-Subramani-photo-1.jpg", "assets/radiantsmilesnv.com_wp-content_uploads_2024_05_dr-max-torres-sm.jpg", "assets/radiantsmilesnv.com_wp-content_uploads_2024_05_dr-max-torres-e1716864176440.jpeg", "assets/radiantsmilesnv.com_wp-content_uploads_2025_01_Dr.-Omar-Lavado-1.jpg", "assets/radiantsmilesnv.com_wp-content_uploads_2025_11_Dr-Andy-Landaverde1.jpg", "assets/radiantsmilesnv.com_wp-content_uploads_2026_05_IMG_9391-1-2.jpg", "assets/radiantsmilesnv.com_wp-content_uploads_2026_07_IMG_4337.jpg", "assets/radiantsmilesnv.com_wp-content_uploads_2026_05_IMG_1387-1-scaled.jpg"], "direction_locked": true} -->

> **⚠ ASSET-INTAKE — BLOCKER B3, corrected TWICE on 2026-07-31 and a THIRD time on 2026-08-03. Current value `real_image_count: 15`. The whole history, in order:**
>
> **(0) READ THIS FIRST — the 2026-08-03 correction, `12` → `15`.** The three clinician portraits declared missing on 2026-07-31 were never missing. They are on disk under camera-generated filenames (`IMG_9391-1-2.jpg`, `IMG_4337.jpg`, `IMG_1387-1-scaled.jpg`), all three md5-distinct and magic-byte verified as JPEG, and all three are now listed in `assets[]` above. The count rises 12 → 15 and clinician coverage rises 7 of 10 → **10 of 10**. The history in (1)–(3) below is preserved verbatim and remains accurate about the Cloudflare corruption it describes; only its clinician-coverage conclusion is reversed. See the reversal note under §6.
>
> **(1) The original claim was `real_image_count: 13`, and it was FALSE.** The count was never validated by content. A magic-byte census of `assets/` found **372 files = 190 real images + 182 Cloudflare bot-challenge HTML pages** saved under `.jpg` / `.jpeg` / `.png` / `.webp` names, each carrying `<title>Just a moment...`. **48.9% of the "recovered asset pool" was dead.** Three of the thirteen curated entries were bad:
>
> | dropped in correction 1 | bytes then | why it was wrong |
> |---|---|---|
> | `…_2024_05_Dr.-Karthikeyan-Subramani-photo-1.jpg` | 5,901 | Cloudflare challenge page, not an image |
> | `…_2024_05_dr-max-torres-e1716864176440.jpeg` | 5,867 | Cloudflare challenge page, not an image |
> | `…_2024_04_Dr.-Adrian-Ruiz-1.jpg` | 10,010 | byte-identical duplicate of `Dr.-Adrian-Ruiz.jpg` (md5 `e5f2fda8e1eda4c67a141a835525861e`) — one portrait counted twice |
>
> **(2) First correction, `13` → `10`.** All three rows above were removed from `assets[]`, leaving **3 brand marks + 7 distinct clinician portraits = 10**. Both affected clinicians kept a real portrait through the surviving `-photo-sm.jpg` (244,220 B) and `-sm.jpg` (108,001 B).
>
> **(3) Second correction, `10` → `12` — the dead files were never lost, only badly downloaded.** Root cause: the P0.0 crawler sent no browser User-Agent, so Cloudflare answered with a challenge page and the crawler wrote that HTML to disk under the image's filename. All **182** corrupted files were re-fetched with a browser User-Agent + Referer, each verified by magic bytes BEFORE replacing, and the corrupt originals quarantined (not deleted) to `_assets-quarantine-2026-07-31/` — 182 files, counted on disk. Re-verified independently on 2026-07-31 after the re-fetch:
>
> - `assets/` is now **372 files = 372 real images (303 JPEG, 66 PNG, 3 WEBP). ZERO dead files** — it was 190/372. `grep -rl "Just a moment" assets/` returns nothing.
> - **370 distinct by content**; exactly 2 duplicate groups by md5, both in the Ruiz family.
> - The two entries dropped as dead in correction 1 are now **real images and are back in `assets[]`**: `Dr.-Karthikeyan-Subramani-photo-1.jpg` is **203,777 B of JPEG** (was 5,901 B of HTML) and `dr-max-torres-e1716864176440.jpeg` is **67,562 B of JPEG** (was 5,867 B of HTML).
> - The **duplicate stays dropped and is the only remaining defect** in the curated set: `Dr.-Adrian-Ruiz-1.jpg` is still byte-identical to `Dr.-Adrian-Ruiz.jpg` (10,010 B each, md5 `e5f2fda8e1eda4c67a141a835525861e`). Re-fetching cannot turn one photograph into two.
>
> So the 13 originally-curated paths are **13 real images = 12 DISTINCT**, and as of this correction `assets[]` lists **15**: those 12 (**3 brand marks + 9 clinician portrait files**, Subramani and Torres each contributing two different photographs) **plus the 3 camera-named portraits restored on 2026-08-03** — giving **3 brand marks + 12 portrait files covering all 10 clinicians**. *(The sentence originally ended "…lists those 12: 3 brand marks + 9 clinician portrait files covering 7 clinicians." The curated set is no longer bounded by the 13 original paths, because three real portraits sat outside that curation the whole time.)*
>
> **~~Clinician coverage is UNCHANGED by the repair, and the gap is REAL.~~ REVERSED 2026-08-03 — THE GAP WAS NEVER REAL.** The paragraph that stood here read: *"Portraits exist for Ruiz, Miranda, Dang-Roberts, Subramani, Torres, Lavado and Landaverde — 7 of the 10 named clinicians. A filename search of the repaired 372-file pool for Quizon, Andrade and Schaudt returns zero files. Dr. Victoria Quizon, Dr. Stephanie Andrade and Dr. Chris Schaudt still have no portrait. Their briefs must carry ⚠OWNER, their pages ship a flagged placeholder, and clinician photography stays on the owner shopping list."* Every sentence after the first is false. Coverage is **10 of 10 over 12 files**. The three portraits were on disk throughout, under camera-generated names, which is precisely why the filename search returned zero — **that search could not have found them, so its null result was never evidence.** Correct pairing, from the Elementor image-box binding in `site-snapshot/meet-the-doctors.html` and confirmed against each clinician's own dedicated page: Quizon → `IMG_9391-1-2.jpg` (1130×1177), Andrade → `IMG_4337.jpg` (827×1191), Schaudt → `IMG_1387-1-scaled.jpg` (2560×2438). No brief carries a portrait `⚠OWNER`, no page ships a placeholder portrait, and clinician photography is **off** the owner shopping list. The `⚠OWNER §G-11` roster-integrity flags on those three briefs are a **different and still-real** gap and are untouched.
>
> **The lesson, which is the same one §7.1 already names and this file already quotes below.** The 2026-07-31 pass caught `fs.existsSync` going green over a file it never opened, wrote that lesson down here — and in the same breath accepted a filename grep as proof of a photograph's non-existence. Both are the identical error: **a check that cannot perceive the thing it is asked about, whose negative result is then read as a finding.** Catching an instance of a failure mode is not the same as being immune to it.
>
> **How this got through, stated plainly — the lesson outlives the repair.** Earlier the same day I wrote "all 13 assets[] paths re-tested against the build root: 13/13 resolve" into C9 and into `readiness-verdict.md` §7.8. That test was `fs.existsSync` and **never opened a file**. `fs.existsSync` answers "is there a directory entry with this name", not "is this an image" — a 5,901-byte HTML challenge page named `.jpg` passes it every time. It is exactly the failure mode §7.1 names — a check going green over something it never examined — committed while documenting that failure mode. No gate catches it either: `verify-selling-assets-catalogued` counts filenames, `verify-visual-direction-grounded` parses this JSON without stat-ing the files, and the seam copies bytes without validating them. **Nothing in the bundle sniffs magic bytes.** The re-fetch repaired the DATA; it did not repair the CHECK, and that hole is still open.
>
> **The BUILD tree is still stale — not fixed here.** `Code/client-sites/radiantsmiles/assets/` still holds the 182 corrupted copies, because the seam ran before the repair. It must be re-run from the repaired prep pool by the step that owns it.

**On `real_image_count: 15`.** That is the count of genuinely real, first-party, brand-owned images verified on disk **by magic bytes**: 3 brand marks and 12 clinician portrait files covering all 10 clinicians, all 15 distinct from one another by md5 (the first 12 verified 2026-07-31, the last 3 on 2026-08-03). It deliberately **excludes** the rest of the 372-asset raw download, the 41 third-party carrier marks (rights unconfirmed), platform chrome, and every thumbnail derivative. `waived` is `false` because real assets genuinely exist — the window is open on the strength of real material, not by waiver. *Corrected 2026-08-03, the third correction to this figure: it read 12 (3 brand marks + 9 portrait files over 7 clinicians). The three portraits it omitted were on disk all along under camera-generated names. Full sequence, and it is worth reading as one line: **13 → 10 → 12 → 15.** 13 counted two Cloudflare challenge pages and a byte-identical duplicate as images; 10 over-corrected by dropping the two challenge pages that were later re-fetched as real photographs; 12 was right about files but wrong about coverage; 15 is the figure with all three defects removed. Three of those four values were produced by a check that could not see what it was counting.*

**On `direction_locked: true`.** The tonal direction above is locked as the input set the build designs from: the measured light-dominant signature, the five captured references with explicit take/do-not-take, the tonal words, and the image-treatment rules. It does **not** mean a design has been chosen — no design decision has been made anywhere in this file.
