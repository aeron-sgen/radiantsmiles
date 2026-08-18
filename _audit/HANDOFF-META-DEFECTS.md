# Defects inside the SEALED HANDOFF (meta, briefs and the content bible)

**Status: NONE FIXED. This needs a decision, because these files are under the seam checksum.**

Originally two meta defects (§1 and §2 below). The 2026-08-13 re-audit and fix rounds found **eleven
more**, in the BRIEFS, in `content-bible.md` and in `client-rules.json` itself — see "§3 onward".

Three distinct failure modes, worst first:
1. **Instructions that seed the forbidden claim** (§5, §6, §7, §8, §11) — a brief tells the author to
   write what the doctrine bans. §3 is the extreme: the "ratified safe version" IS the banned claim.
2. **Doctrine that blocks the correct fix** (§12) — OVERCLAIM's equipment census is factually wrong,
   and would tell an author that the capture's own "Panoramic or digital x-rays" may not ship.
3. **Sanctioned wording that was never written down** (§13) — the safe insurance close survives only
   by convention and dies at the next build.

**The pattern matters more than the count.** At least five of these (§5, §6, §7, §8, §11) are not
passive errors in a reference file — they are INSTRUCTIONS that tell an author to write the exact
claim the doctrine forbids. Copy-layer remediation cannot converge against them: every pass that
re-derives a page from its brief reintroduces the defect. §3 is the extreme case, where the
"ratified safe version" a page is told to copy is itself the forbidden claim.
Every agent that found one refused to touch the file and reported it instead, which is correct.
The receipt was re-verified after that round: all 11 single-file entries still hash-match, and the
whole `_handoff/` tree still carries its 2026-08-11 07:34 mtime.

Both live in `_handoff/seo-enrichment.md`, which is one of the 12 artifacts covered by
`HANDOFF-RECEIPT.json` (`concat_sha256`). Editing it invalidates the receipt, so it cannot be
corrected the way a `_copy/*.md` page can. Re-sealing through the seam is a known procedure and was
executed once this session for `fact-registry.json`, but doing it again is a prep-phase call rather
than a copy fix.

These matter more than their size suggests: a meta description ships in the page `<head>` and into
search results. In both cases the **visible copy has already been corrected** and only the meta still
carries the false claim, so the page would contradict its own tag.

---

## 1. `seo-enrichment.md:63` — invented scope on a named clinician

Shipped meta for `dr-adrian-ruiz`:

> A second generation dentist, DDS from UCLA in 1995, with more than 22 years **caring for Las Vegas
> patients**.

The first-party capture supports only:

> With over 22 years **of practice experience**

`site-snapshot/meet-the-doctors.html` and `meet-the-doctors-meet-the-team-dr-adrian-ruiz.html`.
Practice experience has been relocated into Las Vegas patient-years. Nothing states where those years
were served.

This is the same defect already removed from three visible pages this session:
`team.md:38`, `henderson.md:96` and `lone-mountain.md:98`. The meta was missed because every
remediation round was scoped to `_copy/`, and no gate reads `_handoff/`.

**Suggested correction:** `...DDS from UCLA in 1995, with over 22 years of practice experience.`

---

## 2. `seo-enrichment.md:31` — invented frequency on sealants

Shipped meta for `sealants`:

> Protective sealants that shield the chewing surfaces of back teeth from decay, **most often placed
> for children**.

The capture (`procedures-cleanings-prevention-sealants.html`) gives an INDICATION, not a placement
frequency:

> Children and teenagers should get sealants when their first permanent back teeth (six-year molars)
> erupt.
> Adults can opt for sealants on healthy teeth with deep grooves and depressions.

"Most often placed for" states how often we place them for one group versus another. No source
measures that, and the capture explicitly covers adults too. This is the same invented-frequency
class that rounds 10 and 11 are removing from the visible copy.

**Suggested correction:** `...from decay, indicated for children and teenagers as their permanent
back teeth erupt, and available to adults.`

---

## §3 onward: found 2026-08-13

Every line below was read verbatim out of the file named, and every claim about the capture was
re-grepped by the main agent, not taken from an agent's report.

### §3. `content-bible.md:39` — the ratified SAFE VERSION is itself a network guarantee

The row that replaces "a luxury dental experience" offers this as the approved wording:

> "Comprehensive care, close to home, **that takes your insurance**"

"takes your insurance" is a blanket network guarantee. `client-rules.json` `pricing._insurance_note`
says "do not state a blanket network guarantee", and this same file's own HOLDS row at **line 36**
rules the site-wide network claim unsafe and requires "Name the carriers, and state network status
per office". So the content bible contradicts itself, and the half that contradicts is the half
labelled as the safe replacement to copy. **Any page adopting the ratified safe version breaks the
rule.** This is the most dangerous entry in this document.

### §4. `content-bible.md:56` — a logo row treated as a receipt for acceptance

> **DO:** Aetna, Anthem, Cigna, Delta Dental, Guardian, Humana and MetLife **accepted** — receipt:
> `/patient-information/` logo row.

Filed under "permitted, with receipts". A logo row is evidence that logos appear on a page. It is
not evidence of network participation. Same contradiction with line 36 as §3.

### §5. `briefs/faq.md:26` — instructs the acceptance claim directly

> What the exam costs, **which carriers are accepted**, what happens if uninsured.

An author following this brief literally reintroduces the guarantee. This is the same class that an
earlier remediation round put on 13 pages before it was caught.

### §6. `briefs/new-patients.md:13` — the shipped SEO meta carries the acceptance claim

> **Meta (D-SEO-004):** What to expect on your first visit, the new patient exam offer, **the
> insurance we accept** and the financing available.

The visible copy on `new-patients.md` has already been corrected to point at the insurance page.
Only the meta still carries it, so the page would contradict its own tag — same shape as §1 and §2.

### §7. `briefs/insurance-financing.md:54` — instructs the blocked insurance activity

> Book, or **call to check your plan**.

Checking a plan is the undefined insurance activity `content-bible.md` §2 blocks outright, citing
`intake-brief.md` §G-6. This sits in the brief that most directly governs insurance copy.
The ratified safe form used across the corpus is "call the office with your plan details".

### §8. `briefs/root-canal-therapy.md:16` and `:26` — an unsourced superlative in the DO-statement

> an infected nerve is **one of the most painful things in dentistry**

`grep -ril "most painful"` across all 102 captured files returns **zero hits**. It sits in both the
DO-statement and the §2 instruction, so it feeds straight into copy as prose. It is also adjacent in
shape to `bannedVocab` entries such as "most trusted" and "most advanced".

### §9. `briefs/faq.md:22` and `:50` — factually wrong about the live site

> ⚠ This page is LIVE AND EMPTY today: an H1 with no questions
> This page carries FAQPage structured data. No FAQ schema exists anywhere on the current site.

Both false. `site-snapshot/faqs.html` carries **9 `"@type": "Question"` nodes and 1 `"FAQPage"`
block** (counted directly; `FAQPage` appears in exactly 1 of the 102 files). The copy page is
right and the brief is wrong: `faq.md`'s own ⚠FLAG records the nine captured questions, and its §8
states the incumbent markup is removed at build time so the page never ships two FAQPage blocks.
Following the brief would have licensed a duplicate FAQPage.

### §10. `briefs/sealants.md:13` — the invented frequency, same as §2

> **Meta (D-SEO-004):** Protective sealants that shield the chewing surfaces of back teeth from
> decay, **most often placed for children**.

Identical to the `seo-enrichment.md:31` defect in §2, in a second sealed file. The visible copy has
been corrected; both handoff carriers still ship it.

### §11. `briefs/bone-grafting.md:16` and `:26` — the brief INSTRUCTS an invented interval, and breaks its own rule in the same sentence

> **:16** ... DO: deal with **jaw loses bone within months** of a tooth coming out ...
> **:26** The problem in the patient's words: the **jaw loses bone within months** of a tooth coming
> out. Cite the ADA Health Policy Institute data by name and date where it is relevant; **never imply
> a consequence the source does not support**.

`grep -ril "within months"` across the 102-file capture returns **zero**. The practice never
published that interval. Line 26 issues the instruction and then, in the next clause, forbids
exactly what the instruction does.

What the capture DOES publish, on the matching page
(`procedures-oral-maxillofacial-surgery-bone-grafting.html`):

> Studies have shown that patients who have experienced a tooth extraction subsequently lose 40-60%
> of the bone surrounding the extraction site **during the following three years**.

So a sourced interval exists and is three years, not months. The visible copy now carries that
figure with its attribution and fetch date. The brief still carries the invented one, so any pass
that re-derives §2 from the brief reintroduces the defect.

This is the clearest instance of the pattern behind §3 to §10: **the defect classes this build keeps
removing from `_copy/` are largely seeded by `_handoff/`.** Remediation at the copy layer alone
cannot converge while the instructions still carry the claims.

### §12. `client-rules.json` OVERCLAIM.global[3] — the equipment census is factually WRONG

The entry reads:

> "claim": "latest / most advanced technology",
> "status": "UNSOURCED — only **'Digital X-rays' and 'SIROlaser' are ever named**"

That census is false. Verified against the capture this session:

- `panoramic` — **2 files**. `procedures-oral-maxillofacial-surgery-wisdom-teeth-extractions.html`:
  *"**Panoramic or digital x-rays** will be taken in order for your dentist to evaluate the position
  of the wisdom teeth."* `...bone-grafting.html`: *"recommend **panoramic X-rays** to assess the
  precise depth and width of the existing bone."*
- `CAT scan` — **1 file**, bone-grafting: *"**CAT scan** may be recommended to determine the bone
  condition."*

**Why it matters, and it is not academic.** This is the doctrine a builder consults when deciding
whether a page may name a device. A confirmed defect this session was `wisdom-teeth:55` narrowing
the published disjunction *"Panoramic or digital x-rays"* down to *"digital X-rays"* — a
possibility-to-certainty defect. An author who checked OVERCLAIM.global[3] before restoring the full
disjunction would have been told, wrongly, that panoramic is unsourced and must not ship.

So this entry does not merely record a stale fact: **it actively blocks the correct fix for a
confirmed defect.**

Incidental: the `status` string itself contains an EM DASH (U+2014). G-NODASH bans those in copy;
no gate reads this file, which is the §-wide problem again.

### §13. The ratified insurance close exists NOWHERE in `_handoff/`

20 pages ship this, and it is the sanctioned resolution of the whole network-guarantee class:

> Network status varies by office and by plan. **Contact the office you want with your plan details
> before you book.**

`content-bible.md:36` supplies only the FIRST sentence ("Network status varies by office and plan").
The second sentence — the one that makes the patient the information supplier and so keeps the page
clear of the blocked insurance activity — **is written down in no handoff artifact at all.** It has
been propagating page-to-page by convention.

Consequence: it does not survive the next build. Any page re-derived from its brief gets the
first sentence and invents its own second one, which is exactly how the corpus ended up carrying
five different closings, one of which ("call the office you want and **ask about yours**", on
`insurance-financing.md`, whose brief says "call to check your plan") drifted back toward the
blocked activity.

**Record the full two-sentence close in `content-bible.md` §2 as the ratified safe form.**

---

## Checked and NOT a defect

`seo-enrichment.md:77` (`faq`): "Answers to the questions patients ask most about cost, insurance,
first visits, emergencies and treatment." This describes what the page itself covers. It is a
statement about the page's own scope, not a measured claim about patient behaviour, so it does not
belong to the same class. No change proposed.

---

## The wider gap this exposes

The build has four deterministic gates, and **all four scope to `_copy/*.md` or `pages/*.html`**.
Nothing reads `_handoff/`. So a claim that was removed from every visible page can still ship in the
meta, the fact registry, or a brief, and no gate will fire. The `fact-registry.json` carrier-count
conflict recorded earlier (registry says 7 named carriers, `client-rules.json` says 41) is the same
blind spot in a different file.

Worth considering for the skill itself, not just this build: the honesty gates should read the
handoff artifacts that ship into the page head, not only the body copy.
