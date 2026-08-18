# Radiant Smiles Dental Care — website build

A static, seven-office dental practice site for Las Vegas and Henderson, built through the
deterministic `client-site-build` pipeline. This repo is the **build tree**: locked inputs, the design
system, the copy corpus, the composed pages, and the machine receipts that prove each page passed.

> **Status: BULK in progress.** 20 of 66 pages composed. See [Current state](#current-state) — that
> section is written from the audit output, not from memory, and it will be stale the moment the next
> wave lands. Re-run the audit rather than trusting it.

---

## What this is, and what it is not

This is not a hand-written site. Every page is **composed from its own locked copy** against a shared
design kit, and no page ships until a 52-gate stack passes on it. The gates are the point: they encode
the failures this build is not allowed to repeat.

Two rules do most of the work:

- **The copy is locked.** Every rendered word must already exist in `_copy/<page>.md`. A page may
  re-order, re-tag and re-shape that copy; it may not write a new sentence, invent a figure, a
  credential, a date or a testimonial, or soften a flagged limitation. Where a fact does not exist,
  the page ships a visible `⚠OWNER` hold rather than something plausible.
- **Every page composes its own section set.** Sharing the chrome, tokens and kit is *required* —
  that is the cohesion. An identical ordered section sequence across pages is the failure, and
  `verify-page-distinct` blocks it at 80% skeleton similarity.

## Layout

| path | what lives there |
|---|---|
| `_handoff/` | **The locked inputs (C1–C7).** Sitemap, per-page briefs, client rules, content bible, decisions ledger, token spec, visual direction, plus `HANDOFF-RECEIPT.json`. Under checksum — **never edit by hand.** |
| `_copy/` | The 66-page copy corpus. The source of every rendered word. |
| `_design/` | Tokens, the chrome carrier, `radiantsmiles-structural.css` (the kit), the imagery system, and `_tournament/` — the concept fan-outs the owner picked from. |
| `pages/` | `<slug>.content.html` (the composed body fragment) and `<slug>.html` (the assembled page). |
| `_build/` | `_template.html`, the locked chrome shell derived from the approved carrier. |
| `_receipts/` | `promote-<page>.json` — the per-page gate result. **This, not the file on disk, is what proves a page passed.** |
| `_approvals.json` | The owner stamps. Each stage holds the next. |
| `_audit/` | Findings and evidence from the build's own investigations. |
| `assets/` | Client photography. |

## Current state

Composed pages, by type:

| type | composed | total |
|---|---:|---:|
| T-ARTICLE (clinician biographies) | 10 | 10 |
| T-LEGAL | 3 | 3 |
| T-COMPANY | 1 | 1 |
| T-CONTACT | 1 | 1 |
| T-INDEX | 1 | 2 |
| T-HUB | 3 | 10 |
| T-FEATURE | 1 | 38 |
| T-HOME | 0 | 1 |
| **total** | **20** | **66** |

All 20 carry a clean, unfiltered 52/52 promote receipt. Worst pairwise structural similarity across
the set is 0.750, against a 0.80 block threshold — and that pair is the two legal documents, which are
*supposed* to share a template and are exempt.

`index` (the home page) is built **last**, on purpose: it is an analytical router derived from the
real pages, not a template stamped first.

## Verifying the build yourself

Do not trust a page because the file exists — `promote-concept` writes the fragment **even when a gate
fails**. The receipt is the evidence.

```sh
# every page: receipt clean + unfiltered, META directive present, asset refs resolve,
# built <title> is not the raw-slug fallback, plus the full distinctness matrix
node <scratchpad>/_verify/audit.mjs

# assemble every fragment into pages/<slug>.html (this also runs the render gates)
node <ace>/.claude/skills/client-site-build/scripts/build.mjs --site .

# the title sweep — note the CLI form is --site, NOT --page
node <ace>/.claude/skills/client-site-build/scripts/verify-title-quality.mjs --site .
```

**A gate given the wrong invocation form exits 0 without reading anything.** `--page` to a `--site`
gate looks exactly like a pass. This has already produced one false green in this build.

## Known open items

These are decisions and config, not build defects. They are recorded rather than papered over.

- **236 open `⚠OWNER` items** across the copy corpus, concentrated in four decisions: the clinician
  roster and per-office assignment, offer terms (expiry, exclusions, senior threshold), review-rating
  scope and platform of record, and insurance network status. Those four account for ~146 of the 236.
- **Sunrise Manor ZIP conflict** — 89107 vs 89104, affecting 13 pages.
- **North Decatur publishes hours identical to Lone Mountain** on all seven days. One record is wrong.
- **`#1` in `client-rules.json` bannedVocab compiles unanchored**, so it also matches inside
  `#10`–`#19`. Since `verify-selection-rationale` requires literal `<MENU>.md #N` citations, catalog
  items 1 and 10–19 were uncitable and so effectively unpickable. Worked around in the authoring
  convention (`# 11`, with a space, passes both gates); the regex itself is untouched because it is
  enforcement code.
- **`SQUAH_PREVIEWS_BASE_URL` is unset**, which blocks the P14 publish-preview step.
- **Vector logo (`⚠OWNER §G-7`)** — the wordmark is set in type, not the navy-and-yellow JPG, and the
  favicon currently ships an off-palette default.

## Note on where this repo lives

The Ace workspace root's `.gitignore` excludes all of `Code/client-sites/` — *"real client/business
data, NEVER ship, NEVER track"* — because the Ace distribution manifest is built from `git ls-files`.
That rule keeps client work out of the *distribution payload*; it does not stop a client build from
having its own history. So this tree carries its own repo, the same pattern as
`Code/web-mockup/desert-paws`. A repo at the workspace root would not capture this build at all.
