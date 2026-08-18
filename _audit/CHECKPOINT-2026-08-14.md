# CHECKPOINT — radiantsmiles build — 2026-08-14

Resume point. Supersedes nothing in `CHECKPOINT-2026-08-13.md`; that one covers the COPY corpus and
the handoff re-seal, this one covers the TEMPLATES stage.

---

## §1 — Where the build actually is

Phase DAG: BRAND-CARD → CHROME → FOUNDATION → COPY → **TEMPLATES** → BULK → HOME.

`_approvals.json` holds **BRAND-CARD · CHROME · FOUNDATION · T-FEATURE**, all `approved: true`.

- **T-FEATURE is STAMPED.** Owner picked concept C, "Scannable and Decisive", on 2026-08-14.
  Promoted to `pages/dental-implants.content.html`, receipt `_receipts/promote-dental-implants.json`
  (52/52, failCount 0, unfiltered, fresh). Its CSS is promoted into
  `_design/radiantsmiles-structural.css` §7.
- **T-HUB is PICKED BUT NOT STAMPED.** Owner picked concept B, "The Guided Path".
  `_design/_tournament/templates/T-HUB/concept-b/` holds `concept-b.content.html` plus
  `_variant-cosmetic-dentistry.content.html` (the proof that the template survives a page with no
  escape block). Concepts a and c remain on disk as the tournament record.
- **COPY is deliberately NOT stamped.** A stamp asserts the owner saw and approved; they have not been
  shown the 66-page corpus. It is not required for a T-`<TYPE>` stamp — it gates BULK.
- Five page types still have no tournament: **T-ARTICLE (10), T-LEGAL (3), T-INDEX (2), T-CONTACT (1),
  T-COMPANY (1)**. T-HOME (1) is built LAST, after BULK.

---

## §2 — The two things standing between T-HUB and a stamp

**(a) The 8-row density question — unsettled, and only a real build settles it.**
Concept B's §1 row-list was made denser by narrowing the shot column `minmax(0,220px)` →
`minmax(0,176px)` (same 4:3 crop, no copy or alt touched; pages got *shorter*, 6834 → 6636). The
reviewer then modelled other row counts and found `verify-section-density` failing at **7 and 8 rows**.
The real §3 row counts across the ten hubs are:

| page | rows | | page | rows |
|---|---|---|---|---|
| services | 7 | | cosmetic-dentistry | 2 |
| locations | 8 | | restorations | 8 |
| team | 11 | | oral-surgery | 2 |
| new-patients | 4 | | periodontics | 9 |
| general-dentistry | 5 | | orthodontics | 3 |

The model says 7 fails — but the **real 7-row exemplar (`services`) PASSES**. So the model is not
trustworthy here. `locations` and `restorations` (both 8) must be BUILT and MEASURED. Do not settle
this by arithmetic.

**(b) A missing smoke fixture in `verify-mobile-quality`.**
Its `--smoke` does not pin half the hero exemption's conjunction. A mutant reduced to
`if (sec === firstTitledSec) return;` — dropping the `pageH1 && lead === pageH1` half — passes
`--smoke` GREEN while laundering a real built page. The fixture set cannot distinguish the shipped
predicate from the looser one the source itself calls "too loose HERE". Needs a fixture whose opening
titled band has an **ordinary h2 title** with stacked media, asserted to FIRE.

---

## §3 — What changed on 2026-08-14, and why

**Chrome carrier.** `_design/_chrome-block.html` had 99 internal hrefs authored root-absolute
(`/services`) against a build that resolves `<slug>.html`, and the New Patients nav entry linked its
own hub nowhere. Repaired AT THE CARRIER and re-derived with `derive-shell.mjs` — never hand-edited in
`_build/_template.html`, which `verify-chrome-edit-at-carrier` exists to prevent. Later the same day
the mobile sticky CTA was found DEAD site-wide (nothing ever added `.is-revealed`); fixed at the
carrier and re-derived, all chrome gates unchanged 0 → 0.

**Foundation sheet.** `--rs-e1`/`--rs-e2` were declared on `:root` as
`var(--ds-shadow-*),var(--ds-inset-hi)`. A custom property substitutes where it is DECLARED, so both
froze to LIGHT values and inherited down already-resolved; `.surface-dark`'s token flip could not reach
them. Cards on dark painted a 7.9:1 white hairline where the flip intends 1.56:1, with a teal shadow on
a teal ground. Re-declared inside `.surface-dark`. Also: `.cc-pillars__media{order:-1}` was hoisting a
photograph 349px (375) / 585px (768) above its own heading on mobile — removed.

**`imagery-system.md` — corrected.** §2 recorded office interiors as "6 files, 2 distinct photographs,
both Henderson". True of `1-16` and `1-12-1` and nothing else. The pool is **161 files / 51 md5-distinct
photographs**, from `smile-gallery.html` (24), `locations-camino-al-norte.html` (4) and
`locations-s-nellis-blvd.html` (1). **All seven offices have their own photograph.** The
"photography per location" owner item is removed; the smile-gallery before/after gap remains real.
The trap that caused the undercount: `Radiant-Smiles-Henderson-Dental-Office-4b` appears on ALL SEVEN
office pages as a template element.

**Four gate scripts.** See §4.

---

## §4 — Harness traps found this session. Re-read before trusting any green.

1. **A gate fed the WRONG INVOCATION FORM exits 0 without reading.** `verify-mobile-quality`,
   `verify-no-text-overlap`, `verify-section-density`, `verify-section-rhythm` are **CLI** gates:
   `node <gate>.mjs --page <ABS built .html>`. Fed a stdin payload they exit 0 and the writer gets
   EPIPE — a fail-open that looks exactly like a pass. Conversely `verify-sticky-cta-behavior` is a
   **stdin** gate and returns 0 to `--page`.
2. **A RELATIVE `file_path` silently disables every stdin gate.** `buildPathDisposition` matches
   `/\/Code\/client-sites\//` with a LEADING SLASH. Proof: concept-b with all 7 ledgers stripped gives
   EXIT=2 absolute, EXIT=0 relative. **Always pass absolute paths.**
3. **The promote battery is NOT the whole gate set.** `promote-concept.mjs` reads
   `_settings-patch.json` hooks_entries = stdin gates only. The four CLI render gates above are outside
   it. The T-FEATURE 52/52 stamp did not include them; run properly, the winner failed two.
4. **`verify-chrome-parity` reports PASS while measuring nothing.** It renders from a temp dir where
   the page's relative CSS 404s, so every BUILT measurement is `null` and null-vs-165 reads as
   agreement. Parity was confirmed by hand instead (headerH 165 = ref, footerH 1399 = ref, hamburger
   present at 375). **Its green is not evidence.**
5. **Three gates could not see this build's vocabulary.** `verify-section-rhythm` and
   `verify-mobile-quality` both detect the hero with `/hero/.test(cls)` while this foundation names it
   `.rs-sec--lead`. Same defect shape twice.

---

## §5 — Gate changes made, and the exact evidence for each

All four were owner-authorised. Each is loosening a check, so each ships both directions proved.

| gate | change | proof |
|---|---|---|
| `verify-section-rhythm` | recognise bookends structurally (`isFirst`/`isLast`) as well as by vocabulary; **median over ALL measured sections, flag only non-bookends** | 4 real pages EXIT=0; middle asymmetry (40/200) EXIT=2 via (A); middle sprawl (260/260) EXIT=2 via (B); `--smoke` PASS |
| `verify-mobile-quality` | lead heading resolved over `h1,h2,h3`; hero carve-out bounded by `sections.length > 1`; false source comment replaced | `--smoke` PASS; controlled pair identical but for section count → 1-section EXIT=2, 2-section EXIT=0; T-FEATURE 0, T-HUB b 0, T-HUB **a 2 and c 2** (genuine defects still caught) |
| `verify-no-text-overlap` | fixed-park exemption refused when any ancestor establishes the containing block (`transform`/`perspective`/`filter`/`backdrop-filter`/`will-change`/`contain`) | 3 laundering controls now EXIT=2; real-page badge control EXIT=2; revealed-bar EXIT=2; baseline EXIT=0; `--smoke` PASS 7 fixtures |
| `verify-conversion-integrity` | also read `routeRules.cta_primary` | real content EXIT=0, label struck EXIT=2; its own 14-check smoke ALL GREEN |

**The near-miss worth remembering.** The first `verify-section-rhythm` patch passed four real pages AND
two valid negative controls and was still broken: excluding bookends from the cadence set also shrank
the median basis detector (B) computes from, so on the gate's own BAD fixture the median moved 60 → 90
and (B) silently stopped firing. **Only `--smoke` caught it.** Real pages, controls and the self-test
are three different instruments and none substitutes for another.

---

## §6 — Open owner items

- **⚠OWNER §G-7** — vector logo master; `assets/favicon.svg` still does not exist and is the single
  console error on every rendered page.
- **Consented before-and-after photography** for the smile gallery (§2 records 0 files).
- **`readiness-verdict.md:83`** — a false uniqueness claim, blocked on a stale owner approval. Needs a
  preview re-render, real sign-off, digest, then a one-line edit; "and public" must also go.
- **Two fal API keys remain unrotated** — one in this session's transcripts, one in
  `logs/archive/code-aeron-c-2026-07-31-eb1a02e3.md`.

---

## §7 — How to resume

1. Read this file and `§4` before running any gate.
2. Build `locations` and `restorations` from concept B's template against their own locked copy; run
   `verify-section-density --page` on each. That settles §2(a) and is the last blocker on the T-HUB stamp.
3. Add the missing `verify-mobile-quality` fixture (§2b).
4. Stamp T-HUB — it needs ≥1 promote receipt for a T-HUB page, so promote one (`services`) first, the
   same way `dental-implants` was done.
5. Then the five remaining tournaments. Brief every one for **hero divergence up front**: on T-FEATURE
   all three concepts independently chose the same opening and the owner had no real choice above the
   fold; on T-HUB the constraint was made explicit and they landed on three different heroes.
