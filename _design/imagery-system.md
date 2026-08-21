# IMAGERY SYSTEM - `radiantsmiles`

Governing spec for every photograph this build ships. Required on disk by G-IMG-SPEC
(`verify-imagery-spec-present`): a page that renders real imagery without this file is an ungoverned
gallery. Derived from C7 `_handoff/visual-direction.md` §2, §3 and §6. Nothing here is invented.

Status: **imagery generation REOPENED for FLAGGED PLACEHOLDERS ONLY.** Owner decision, 2026-08-21,
superseding the 2026-08-10 decision recorded in §3. One synthetic image ships (the index hero); it is
tracked in `_fabrication-manifest.json`, carries an in-file ⚠OWNER PLACEHOLDER marker, sets the page
`noindex`, and declares itself a placeholder in its own `alt`. §1's "Real over stock, always" is
UNCHANGED — this is that rule's flagged-placeholder branch, not an exception to it. No synthetic image
depicts a person, a patient, a clinician, teeth or any clinical outcome. See §3.

---

## §1 - Treatment (the look every photo obeys)

From C7 §3 and §2.

- **Real over stock, always.** Where a real image does not exist, this build ships a flagged
  placeholder. It never ships a stock or synthetic substitute that implies a facility or a patient
  that was never photographed.
- **People before teeth.** Clinician portraits and office interiors carry the trust argument.
  Clinical close-ups are illustrative and secondary.
- **Calm and uncrowded.** This is healthcare for anxious people. Generous whitespace around every
  image. Nothing that reads as a pressure sale.
- **The governing move:** replace every superlative with a specific. The layout must leave room for a
  named credential, a real review count and a stated opening hour, because those are what replace the
  adjectives being removed.
- **Palette relationship** (owner pivot, ledger D22): authority is teal `#0B3D3A` with `#128C7E` as
  the mid step. The accent is `#FFD447`, spent once rather than poured, and it signals the offer and
  nothing else. The accent measures 1.36:1 on the canvas, so it is decorative only. It may never
  carry text or act as a text ground on light. Image overlays and captions obey the same rule.
- **Every carrier mark needs a text label.** The 41 insurance logos on the current site ship with no
  `alt` text. This rebuild gives each one a real text label.

---

## §2 - The locked set (what exists, verified on disk)

Source of truth: the `ASSET-INTAKE` block in C7 §6, `real_image_count: 15`, `waived: false`,
`direction_locked: true`. Counts below were re-verified against `assets/` on 2026-08-10.

| class | files on disk | usable set | placement |
|---|---|---|---|
| brand marks | 6 | 3 distinct | header wordmark, reversed mark, icon |
| clinician portraits | 47 | 12 distinct, covering all 10 named clinicians | team page, per-clinician pages, office pages |
| insurance carrier marks | 18 | rights unconfirmed | name carriers in TEXT; ship marks only on confirmation |
| financing marks | 3 | 1 clean standalone wordmark | see the constraint below |
| **office interiors** | 161 files, **51 distinct photographs** | 51 | see the placement rules in §4 |
| ↳ Henderson's own two | `1-12-1` (interior), `1-16` (**group portrait, not a room**) | 2 | Henderson pages only, per §4 rule 4 |
| ↳ each office's own | one per office, all seven | 7 | that office's own page, or a context naming it |
| ↳ smile-gallery interiors | 24 | 24 | any page, described only as "one of our offices" |
| **before / after** | **0** | none | none |

**Clinician coverage is complete.** C7 §6 carries a 2026-08-03 correction reversing the earlier claim
that Quizon, Andrade and Schaudt had no portrait. All 10 are covered. Do not re-open that as a gap.

**Office-interior coverage is complete too.** *Corrected 2026-08-14. The row above read
"6 files, **2 distinct photographs, both Henderson**", placement "Henderson office page only". That is
true of `1-16` and `1-12-1` and of nothing else: the census was taken on the two files the Henderson
page publishes and was recorded as the whole office-interior pool.*

*Traced from the captured site on 2026-08-14, and every file confirmed on disk in `assets/` by magic
bytes: the `uploads/2025/01/1-*` family is **161 files / 51 md5-distinct photographs**, published by
`smile-gallery.html` (24), `locations-camino-al-norte.html` (4, North Las Vegas) and
`locations-s-nellis-blvd.html` (1, Sunrise Manor). And **all seven offices have their own photograph** —
Lone Mountain `radiant-smiles-lone-mountain-e1713902629576`, Sunrise Manor `1-6-1`, Summerlin
`radiant-smiles-summerlin-e1713903157892`, North Las Vegas `1-24-2`, Henderson `1-12-1`, North Decatur
`Radiant-Smiles-Decatur-Photo`, Blue Diamond `Radiant-Smiles-Blue-Diamond-Front-Desk`.*

***Henderson's entry corrected 2026-08-17.** It read `1-16`. Opened and looked at, `1-16` is a GROUP
PORTRAIT of five people in white coats standing in a room. It is a genuine first-party photograph of
Henderson, so rule 4's binding on it is unchanged, but it is not an office interior and it cannot
stand as Henderson's entry in a row of six buildings, entrances and front desks. `1-12-1`, Henderson's
other file, shows the reception desk and is the correct entry. This is what the `locations` T-HUB
variant ships.*

***A LIMIT ON THE ROW ABOVE, stated rather than papered over.** The 161 / 51 census counted FILES and
md5-distinct IMAGES. It did not classify what each one DEPICTS, and the class label "office interiors"
over-claims for at least three of the ones since examined: `1-16` is the group portrait above, `1-6-2`
is a review card and a letter on a counter, and `1-123` is a restroom. Every one is a real
first-party photograph of the practice, so nothing here is a substitution problem, but a slot that
needs A ROOM cannot be filled by picking any file from this pool by name. Look at the file. Only the
seven office-own files and the 24 smile-gallery files have been examined by eye; the rest of the 51
have not.*

*THE TRAP THAT PRODUCED THE UNDERCOUNT, because it will recur:
`Radiant-Smiles-Henderson-Dental-Office-4b` appears on ALL SEVEN office pages as a template/background
element. A per-page census that keeps meeting the same Henderson-named file concludes the offices share
one photograph. GENERAL LESSON, and this is the second instance on this spec after the 2026-08-03
portrait reversal: a count taken over one page's assets is a fact about that page, not about the pool.*

**Financing marks are not interchangeable and must not be laid out as a uniform logo row.**
Lending Club is the only standalone wordmark. The Cherry file is a banner with promotional copy baked
into the pixels. Sunbit has no standalone logo file at all.

---

## §3 - Fal-extend allowance (REOPENED 2026-08-21 — FLAGGED PLACEHOLDERS ONLY)

The skill's IMAGERY stage offers on-brand generation via `generate-images.mjs`.

> **AMENDED 2026-08-21.** The owner reopened this allowance for FLAGGED PLACEHOLDERS ONLY, after being
> shown the reasoning below and the three `proofPolicy.fabrication_requirements` that bind it. One image
> now ships: `assets/GENERATED-PLACEHOLDER-hero-reception.jpg` on the index hero. It depicts an EMPTY
> reception — no people, no teeth, no instruments, no signage — so it cannot be read as a patient, a
> clinician or a clinical outcome, which is what C7 §4 forbids illustrating. The paragraph below still
> states the reason the allowance was closed, and that reason still stands for shipping synthetic imagery
> AS REAL. It is preserved verbatim rather than rewritten, because it is the argument the placeholder
> conditions exist to answer.

**The original decision, preserved.** Owner decision, 2026-08-10, taken with the evidence below in front
of them.

**Why the allowance is closed here.** The one real gap is the smile gallery: consented before-and-after
photography, of which there is none on disk (§2 records 0 files). *Corrected 2026-08-14: this read "the
only two real gaps are office interiors for six of the seven offices, and the smile gallery". Office
interiors are NOT a gap — all seven offices have their own photograph. See the §2 correction. The
allowance stays closed regardless, because its real basis is the before-and-after case below, which is
untouched by that correction.* C7 §3 forbids substituting for exactly that:

- A generated office interior would depict **a facility that was never photographed**. That is the
  precise substitution §3 prohibits, and a synthetic image is a worse offender than stock because it
  looks like evidence.
- A generated before and after would **fabricate a clinical outcome**. Barred by `content-bible.md`
  §3b and ledger D5 and D19. No fabricated metric or outcome is permitted.

Everything else already has real photography. Generating clinician portraits would be both forbidden
and pointless, with 12 real files already on disk.

**If this is ever re-opened,** it requires an owner override recorded in `decisions-ledger.md`, and the
generated files must be visually distinguishable from photography of the real practice.

---

## §4 - Flagged placeholder policy (what ships in the gaps)

Per C7 §3, a gap ships a **flagged placeholder**, never a substitute. A placeholder here means a
token-built block that is honest about being empty. It carries no photographic content, does not
imply a room or a person, and is visible to a reviewer as unfinished.

| slot | pages affected | placeholder ships | owner item |
|---|---|---|---|
| smile gallery | `/about/smile-gallery/`, cosmetic service pages | flagged block, no sample imagery | ⚠OWNER: consented before and after photography |
| vector logo master | header and footer, all pages | existing raster mark, flagged | ⚠OWNER §G-7 |

Rules binding on every placeholder:

1. It must not use a photograph of a different office to stand in for the one it names.
2. It must not carry a caption that asserts the room shown is that office.
3. It must be a token-built surface from `radiantsmiles-tokens.css`, not a grey box and not a gradient
   pretending to be a photo. `verify-no-gradient-placeholders` owns the slot-by-slot check.
4. `1-16` and `1-12-1` are Henderson's own photographs and may appear ONLY on Henderson pages, or in a
   context that names Henderson. Using them as generic practice imagery would restate a single office
   as seven. The same binding applies to every other office's own photograph: it belongs to that
   office. *Scope corrected 2026-08-14 — this rule previously read "the Henderson photographs" without
   naming them, which read as though it governed every office interior on disk. It governs those two.*
   *Of the two, `1-12-1` is the INTERIOR and `1-16` is a group portrait of five people; see the §2
   correction. The binding is identical for both, but they are not interchangeable in a slot.*
   **THE OPEN QUESTION UNDER THIS RULE, unresolved as of 2026-08-17.** Two office-own files are
   currently spent as UNNAMED scenery on the services T-HUB exemplar: `1-24-2` (North Las Vegas) in
   the hero and `1-6-1` (Sunrise Manor) in the why-band, both captioned "one of our offices". The
   cosmetic-dentistry variant's finding D judged that acceptable because the alt does not name the
   office; this rule as written says the file belongs to that office. Both readings are defensible and
   they disagree, so it needs deciding once rather than per page. The `locations` variant is the page
   where `1-24-2` is named, which is the use this rule plainly intends.
5. The 24 smile-gallery interiors carry no office attribution in the source, so they may be described
   as "one of our offices" and NEVER as a named office. Naming one would be inventing it.

---

## §5 - What this spec does not govern

- The per-slot real-photo requirement is owned by `verify-no-gradient-placeholders`.
- The three-real-images floor on a marquee page is owned by CWB-063 `verify-applied-design`.
- The spec-stage asset floor is owned by `verify-asset-intake`, satisfied here at
  `real_image_count: 15` with `waived: false`.

This file is the reviewable treatment record. It is presence-gated by G-IMG-SPEC, which does not grade
content, so its accuracy is a review responsibility rather than a gate outcome.
