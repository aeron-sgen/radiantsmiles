# RESUME — radiantsmiles BULK (checkpoint 2026-08-19, updated 14:30)

## SESSION-LIMIT EVENT — all 3 waves cut off at once (resets 4:40pm Asia/Manila)
14 agents hit the limit. **11 of the 14 had SAVED COMPLETE DRAFTS** because "SAVE YOUR WORK EARLY"
is now in every brief — that instruction is the single highest-value change made this session.
Those 11 were salvaged by ME (no agents, my own tokens) via `$SP/_salvage2.sh`.
**3 pages have NO draft and must be re-run by agents when the limit resets:**
`antibiotic-treatment` (6 sections), `periodontal-scaling-root-planing` (8), `blue-diamond` (9).

## State
- Build verified: `Done: 50/50`, **zero "fail" strings in the whole log**. (The job reported exit 1;
  that was MY bug — `grep -c` exits 1 on zero matches. Same class as the sweep script bug. Both fixed.)
- G13 worst pairwise **0.750** (cookie-policy vs privacy-policy — both T-LEGAL, EXEMPT).
- `offer` is **51/52** — OWNER DECISION, see below. Not a page defect.

## FIRST COMMANDS ON RESUME
```sh
SP=/private/tmp/claude-501/-Users-aeroncloydc-malinab-Oso/07edbc58-9a34-43b4-a530-a285e33fbe21/scratchpad
# 1. If the scratchpad was wiped again, restore it:
mkdir -p "$SP" && tar xzf <this-dir>/radiantsmiles-bulk-tools.tgz -C "$SP"
tar xzf <this-dir>/radiantsmiles-drafts.tgz -C "$SP"
# 2. Ground truth:
cd /Users/aeroncloydc.malinab/Oso/Code/client-sites/radiantsmiles && node "$SP/_verify/audit.mjs"
```

## 15 pages left: 14 T-FEATURE + index
Three waves were IN FLIGHT at checkpoint. **Check which landed before re-running anything** —
`_receipts/promote-<page>.json` with `failCount 0`, `gateCount 52`, `filtered []` is the ONLY proof.
Then check `$SP/bulk-<page>.content.html` for salvageable drafts.

| page | assigned sections | wave |
|---|---|---|
| sirolaser | 4 | wsc9vseti — DRAFT SAVED (4 sections), not promoted |
| sunrise-manor | 5 | wsc9vseti |
| gum-recession | 7 | wsc9vseti |
| summerlin | 8 | wsc9vseti |
| ~~onlay-restorations~~ | 9 | **LANDED 52/52** |
| braces-for-children | 10 | wsc9vseti |
| antibiotic-treatment | 6 | wdzcydnqy |
| periodontal-scaling-root-planing | 8 | wdzcydnqy |
| crown-lengthening | 10 | wdzcydnqy |
| dentures-partial-dentures | 11 | wdzcydnqy |
| north-las-vegas | 4 | wmpap3twg |
| insurance-financing | 5 | wmpap3twg |
| henderson | 6 | wmpap3twg |
| north-decatur | 7 | wmpap3twg |
| blue-diamond | 9 | wmpap3twg |
| **index (T-HOME)** | — | **BUILD LAST, bespoke, analytical router** |

To re-run any page: `Workflow({scriptPath: "$SP/wave.js", args: [{page, type:"T-FEATURE", sectionTarget, extra}]})`.
Full `extra` briefs for all 15 are recoverable from the session transcript (search the run IDs above).

## SALVAGE BEFORE RE-RUNNING (this saved 6 pages already)
A dead/limited wave is usually NOT lost work. For each page with a draft but no receipt:
```sh
node $SP/_verify/decite.mjs $SP/bulk-<page>.content.html      # fixes bare #1 / #1x in ledgers
node $SP/assemble-bulk.mjs $SP/bulk-<page>.content.html \
  --outfile <ROOT>/_design/_tournament/templates/T-FEATURE/_bulk/<page>/preview.html
# 4 render gates on the PREVIEW (proven byte-identical to the built page):
for g in verify-section-density verify-section-rhythm verify-mobile-quality verify-no-text-overlap; do
  node <SKILL>/scripts/$g.mjs --page <preview>; done
node <SKILL>/scripts/promote-concept.mjs radiantsmiles <page> templates/T-FEATURE/_bulk/<page>
```
`$SP/_salvage.sh` does exactly this for a list of pages — edit the `for p in ...` line.

## FINAL STEPS ONCE ALL 65 ARE COMPOSED
1. Build `index` LAST (T-HOME, bespoke, `links_from: entry:`) — it is an analytical router derived
   from the finished pages; building it earlier means deriving it twice.
2. `node <SKILL>/scripts/build.mjs --site .` → expect `Done: 66/66`, **grep the log for "fail" = 0**.
3. `zsh $SP/_gatesweep.sh` → expect `RENDER GATES: 264 pass, 0 fail`.
4. Re-run `audit.mjs` for the **final G13 matrix** — every page was measured against whatever
   siblings existed at ITS promote time, NOT the final set. This re-check is REQUIRED.
5. Update README.md "Current state" (still says 20/66 — stale) and commit.

## ⚠ OWNER DECISION PENDING — `offer` 51/52
`verify-conversion-integrity` reads only `routeRules.cta_primary` ("Book an appointment").
This page's CTA is legitimately **"Claim this offer"**: the brief sets `cta_primary: Claim this offer`,
`_copy/offer.md` states it twice, `routeRules` carries a dedicated **`cta_offer`** key for exactly this,
and the locked funnel map defines F4 as *"offer-led … terminates at 'claim the offer'"*.
44 of 45 other pages pass only because "Book an appointment" appears 3x in THEIR copy; it appears **0x**
in offer's. Satisfying the gate = rendering a CTA that contradicts brief + copy + locked rules.
**One-line fix** (add `cta_offer` to the `ctaLabelOf` fallback chain in
`.claude/skills/client-site-build/scripts/verify-conversion-integrity.mjs`) but it is ENFORCEMENT CODE —
left untouched, same precedent as the unanchored `#1` bannedVocab regex. **Owner's call.**

## Hard-won rules now baked into `wave.js` (do not lose these)
- **Step 2b**: the assembled preview is a PROVEN-EQUIVALENT proxy for the built page on the 4 CLI
  render gates (verified identical on prophylaxis-teeth-cleaning). A 52/52 promote does NOT prove a
  page builds — this closed a gap that cost 2 pages.
- **`#1` banlist is unanchored and bites LEDGER PROSE**, not just citations ("#15" contains "#1").
  Write `# 11`, `# 15` with a space, EVERYWHERE in the file.
- **`verify-content-repetition` is the systematic constraint for this corpus** — every copy file
  repeats sourcing boilerplate ("fetched 30 July 2026") across blocks, so it decides the section set.
  Remedies are STRUCTURAL (fold blocks into fewer sections / render a shared sentence once), never a reword.
- **visual-rhythm Rule 5**: `.rs-card`, `.cc-panel` and bordered ladder rows all classify as
  `hairline-card`; 4 consecutive blocks. Rule 4 needs >=50% of sections carrying imagery.
- **SAVE WORK EARLY** is in every brief — it is why 6 of 8 agents were recoverable when a wave died.
- **Never trust a receipt without checking `filtered`** — a filtered receipt (`gateCount 1`) is NOT
  evidence of a full-stack pass. porcelain-veneers carried one for days.

## Two diagnosis mistakes I made — do not repeat
1. Polled receipts on disk to decide a wave was "still composing" when it had finished.
2. Polled `ps` and declared a wave DEAD when it was merely slow (it ran 2h 5m, then completed fine).
   Cost ~950K tokens of duplicated work. **Only the workflow completion notification settles it.**

## Untouched / intact (verified this session)
`_handoff/`, `_approvals.json`, `_build/`, `assets/`, `_design/*.css` — all clean.
All three handoff checksums MATCH. Every `_design/` change is inside `_tournament/.../_bulk/` previews.

---

## KNOWN OPEN PAGE DEFECTS AT THIS CHECKPOINT

### 1. `sirolaser` — promotes 52/52 but FAILS `verify-section-density`
This is the "52/52 does not prove it builds" case again. Measured on the preview:
```
§0:1.15vh/d394/Δ0.22  §1:1.26vh/d479.1/Δ0.65  §2:1.67vh/d713.9/Δ0.87  §3:1.38vh/d409.7/Δ0.76
FAIL — §2 "Here it is the same practice t" TALL+THIN: 1.67vh, density 713.9, colΔ 0.87 [97,767,399]
```
**Note this is NOT the prophylaxis failure mode.** Density is HIGH (713.9, well over the 400 floor).
The trigger is the OTHER arm of the rule: section is tall (1.67vh > 1.65) **AND** column delta 0.87
exceeds 0.50. Its stack children measure `[97, 767, 399]` — a 767px column beside a 399px column.
**Remedy: rebalance §2's two columns** (move content between them, or split the tall column), do NOT
add copy and do NOT shorten by deleting facts. Re-check with:
```sh
node <SKILL>/scripts/verify-section-density.mjs --page <ROOT>/_design/_tournament/templates/T-FEATURE/_bulk/sirolaser/preview.html
```
sirolaser is 1708 words in 4 sections — the tightest page on the site — so its bands run naturally
tall. If rebalancing cannot clear it, the honest fix is to ship 5 sections and record the deviation.

### 2. `offer` — 51/52, OWNER DECISION (see above, unchanged)

### 3. Three pages have NO draft and need real agents when the limit resets (4:40pm Asia/Manila)
`antibiotic-treatment` (6 sections), `periodontal-scaling-root-planing` (8), `blue-diamond` (9).
Their full `extra` briefs are recoverable from the session transcript — search run IDs
`wdzcydnqy` / `wf_269e49c8-667` and `wmpap3twg` / `wf_c641a66c-39d`.

## SHELL BUG TO STOP REPEATING
`grep -c` **exits 1 when it finds zero matches**. Putting it last in a verification chain makes a
PASSING check report failure. This produced two false "job failed" signals today (the gate sweep and
the 50-page build, both of which had actually SUCCEEDED). End such chains with an explicit
`if ...; then ...; exit 1; fi; exit 0` instead.
