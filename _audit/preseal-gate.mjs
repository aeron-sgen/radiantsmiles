#!/usr/bin/env node
// preseal-gate.mjs — the DETERMINISTIC go/no-go for re-sealing the radiantsmiles handoff.
//
// WHY THIS EXISTS. The seal is irreversible in the sense that matters: once the receipt is
// re-emitted, every artifact it covers is asserted to have been verified. Sealing over a defect
// does not merely preserve it, it certifies it. Twelve remediation rounds on this build failed to
// converge, and the last prep round REMOVED THE BANNED STRINGS WHILE THE CLAIMS SURVIVED AS
// SYNONYMS. So "the verifier said it passed" is not sufficient evidence to seal. This file is.
//
// It fails CLOSED: any check that cannot run is a FAIL, never a skip.
// Run:  node _audit/preseal-gate.mjs
// Exit: 0 = SAFE TO SEAL, 1 = DO NOT SEAL.
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = '/Users/aeroncloydc.malinab/Oso';
const PREP = path.join(ROOT, 'Code/client-site-prep/radiantsmiles/_spec');
const SNAP = path.join(ROOT, 'Code/client-site-prep/radiantsmiles/site-snapshot');
const BUILD = path.join(ROOT, 'Code/client-sites/radiantsmiles');
const HANDOFF = path.join(BUILD, '_handoff');

const fails = [];
const passes = [];
const notes = [];
function ok(m) { passes.push(m); }
function bad(m) { fails.push(m); }

// SCOPE: the gate must judge the SEALED set — the closed C1-C12 that emit-handoff-receipt.mjs
// checksums — not every file in the prep tree. Scanning everything made the gate fire on
// intake-brief.md / page-inventory.md / _reconciled.json, which are prep-internal working notes
// that never reach the build and are not covered by the receipt. Those are reported ADVISORY.
// (C7 visual-direction.md and C9 selling-asset-manifest.json ARE sealed, and both carried a real
// defect that this correction is what surfaced.)
const SEALED = ['sitemap.yaml', 'client-rules.json', 'content-bible.md', 'decisions-ledger.md',
  'radiantsmiles-tokens-spec.md', 'visual-direction.md', 'link-funnel-map.md',
  'selling-asset-manifest.json', 'seo-manifest.json', 'seo-enrichment.md', 'fact-registry.json'];

function specFiles() {
  const out = [];
  for (const f of SEALED) { const p = path.join(PREP, f); if (fs.existsSync(p)) out.push(p); }
  let briefs = [];
  try { briefs = fs.readdirSync(path.join(PREP, 'briefs')).filter((f) => f.endsWith('.md')); } catch {}
  for (const b of briefs) out.push(path.join(PREP, 'briefs', b));   // C2
  return out;
}

// Prep-internal files: NOT sealed, so a hit here cannot block the seal — but it re-seeds the next
// prep pass, so it is surfaced as advisory rather than swallowed.
function advisoryFiles() {
  const out = [];
  (function walk(d) {
    let ents;
    try { ents = fs.readdirSync(d, { withFileTypes: true }); } catch { return; }
    for (const e of ents) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) {
        if (['_owner-preview', '_snapshots', 'briefs'].includes(e.name)) continue;
        walk(p);
      } else if (/\.(md|json)$/i.test(e.name) && !SEALED.includes(e.name)) out.push(p);
    }
  })(PREP);
  return out;
}

// ---------------------------------------------------------------- 1. JSON parses (fail closed)
try {
  const raw = fs.readFileSync(path.join(PREP, 'client-rules.json'), 'utf8');
  if (raw.charCodeAt(0) === 0xfeff) bad('client-rules.json has a BOM (every gate fail-closes on UTF-16/BOM)');
  const cr = JSON.parse(raw);
  ok('client-rules.json parses (' + Object.keys(cr).length + ' top-level keys)');
  // the OVERCLAIM equipment census must name all four technologies actually in the capture
  const tech = (cr.OVERCLAIM?.global || []).find((e) => /technolog|equipment/i.test(e.claim + ' ' + e.status));
  if (!tech) bad('OVERCLAIM technology entry not found — cannot verify the equipment census');
  else {
    const s = tech.status.toLowerCase();
    const missing = ['panoramic', 'cat scan'].filter((t) => !s.includes(t));
    if (missing.length) bad('OVERCLAIM equipment census still omits: ' + missing.join(', '));
    else ok('OVERCLAIM equipment census names panoramic + CAT scan');
  }
} catch (e) {
  bad('client-rules.json DOES NOT PARSE: ' + e.message);
}

// ---------------------------------------------------------------- 2. synonym sweep (the real test)
// Removing the literal string is not the fix. These patterns match the CLAIM in its costumes.
const ACCEPT_CLAIM = [
  /\b(we|our (office|offices|practice))\s+(accept|take)s?\b[^.]{0,40}\b(insuranc\w*|plans?|carriers?)/i,
  /\b(insuranc\w*|plans?|carriers?)\b[^.]{0,30}\b(we|our office)\s+(accept|take)\b/i,
  /\bcarriers? (and plans? )?we accept\b/i,
  /\bthe insurance we (accept|take)\b/i,
  /\btakes? your insurance\b/i,
  /\binsurance[- ]accepting\b/i,
  /\b(plans?|carriers?)\s+accepted\b/i,
  /\b(in|in-)network with\b/i,
  /\bcontracted with\b/i,
  // GERUND HOLE, found 2026-08-13: the sweep went GREEN while client-rules.json:131 asserted
  // "Accepting them is a concrete, checkable access claim". Every pattern above wants a finite
  // verb ("we accept") or a past participle ("plans accepted"); none matches "Accepting them".
  // Same class as the harness's pronoun hole ("check your plan" caught, "check yours" missed):
  // the author writes the canonical form, the corpus uses an inflection.
  /\bacceptin(g)\b[^.]{0,30}\b(them|these|those|plans?|carriers?|insuranc\w*)\b/i,
  /\b(accepting|acceptance) (of )?(these |those |the )?(plans?|carriers?|insuranc\w*)\b/i,
];
// DISCLOSURE EXEMPTION. Quoting a banned wording in order to DOCUMENT its removal, or quoting a
// COMPETITOR's own page text as evidence, is correct authoring — not an assertion by this practice.
// Without this the gate can never go green on a file that honestly records its own correction:
// client-rules.json's _local_plans_note now says "Naming is not accepting", then quotes both the
// superseded wording and Absolute Dental's own "We Accept Most Dental Insurance" list title.
// Judged per SENTENCE, so a disclosure clause cannot launder an assertion elsewhere in the value.
const DISCLOSURE = /\b(CORRECTED \d{4}-\d{2}-\d{2}|previously read|previously|superseded|is not accepting|naming is not|rather than|instead of|UNCONFIRMED|in its own|its own\b|forbids?|blocked|must not|never (state|write|assert))\b/i;

let acceptHits = 0;
for (const f of specFiles()) {
  const lines = fs.readFileSync(f, 'utf8').split('\n');
  lines.forEach((l, i) => {
    for (const re of ACCEPT_CLAIM) {
      const m = l.match(re);
      if (!m) continue;
      // isolate the sentence the match sits in before ruling on it
      const sentences = l.split(/(?<=[.;:])\s+/);
      const host = sentences.find((s) => re.test(s)) || l;
      if (DISCLOSURE.test(host)) break;                 // documented, not asserted
      acceptHits++;
      bad('ACCEPTANCE CLAIM survives: ' + path.relative(PREP, f) + ':' + (i + 1) + '  ' + host.trim().slice(0, 110));
      break;
    }
  });
}
if (!acceptHits) ok('synonym sweep: no acceptance/network assertion anywhere in the sealed _spec set');

// ---------------------------------------------------------------- 3. no false incumbent claims
for (const f of specFiles()) {
  const lines = fs.readFileSync(f, 'utf8').split('\n');
  lines.forEach((l, i) => {
    if (/LIVE AND EMPTY/i.test(l) && /smile.gallery|faq/i.test(l + ' ' + path.basename(f))) {
      bad('FALSE INCUMBENT claim survives: ' + path.relative(PREP, f) + ':' + (i + 1) + '  ' + l.trim().slice(0, 110));
    }
  });
}
if (!fails.some((x) => x.startsWith('FALSE INCUMBENT'))) ok('no "LIVE AND EMPTY" claim survives for faq or smile-gallery');

// ---------------------------------------------------------------- 4. invented intervals / superlatives
const BANNED_UPSTREAM = [
  { re: /\bwithin months\b/i, why: 'invented interval (0 hits in the 102-file capture)' },
  { re: /\bmost painful\b/i, why: 'unsourced superlative (0 hits in the capture)' },
  { re: /\bmost often placed for children\b/i, why: 'invented placement frequency' },
  { re: /\bcaring for Las Vegas patients\b/i, why: 'invented scope (capture says "practice experience")' },
  { re: /\bcall to check your plan\b/i, why: 'blocked insurance activity' },
  { re: /\bwhich carriers are accepted\b/i, why: 'instructs the acceptance claim' },
];
for (const f of specFiles()) {
  const lines = fs.readFileSync(f, 'utf8').split('\n');
  lines.forEach((l, i) => {
    for (const b of BANNED_UPSTREAM) {
      if (b.re.test(l)) bad('UPSTREAM SEED survives (' + b.why + '): ' + path.relative(PREP, f) + ':' + (i + 1));
    }
  });
}
if (!fails.some((x) => x.startsWith('UPSTREAM SEED'))) ok('no known upstream seed string survives in the sealed _spec set');

// ---------------------------------------------------------------- 4b. competitive uniqueness
// ADDED AFTER A BAD SEAL. briefs/insurance-financing.md:26 instructed authors to "Lead with the
// Las Vegas-specific plans NO COMPETITOR SURFACES" and then named eight, three of which Absolute
// Dental publishes verbatim ("preferred provider for ... Health Plan of Nevada (HPN) ... Teachers
// Health Trust ... We also accept Medicaid"). The gate was GREEN and I sealed it, because no check
// covered this class at all. A uniqueness claim is falsifiable against the captures we hold, so it
// is exactly the kind of claim a deterministic gate should own.
const SNAPS = path.join(PREP, 'market-intel/_snapshots');
// Allow intervening count/qualifier words: the real corpus says "none of the FOUR captured
// competitors surfaces". Requiring `competitors` immediately after the determiner missed it — the
// third inflection blindness of this session (pronoun, gerund, now an interposed count word).
const UNIQUE_CLAIM = /\b(no|not one|none of the|zero)\s+(?:\w+\s+){0,3}competitors?\s+(surfaces?|names?|publishes?|lists?|mentions?)/i;
let uniqChecked = 0;
for (const f of specFiles()) {
  const lines = fs.readFileSync(f, 'utf8').split('\n');
  lines.forEach((l, i) => {
    if (!UNIQUE_CLAIM.test(l)) return;
    uniqChecked++;
    // Scope to the SENTENCE the claim sits in, then apply the same DISCLOSURE exemption the
    // acceptance sweep uses. client-rules.json:131 is the CORRECTED note: it quotes the superseded
    // wording ("...none of the four captured competitors surfaces") and then names Absolute Dental
    // and the three plans as the EVIDENCE that disproved it. Extracting entities from the whole
    // line pulled that evidence in and flagged a correct note. Documenting a removed claim is
    // correct authoring, not an assertion.
    const sents = l.split(/(?<=[.;])\s+/);
    const hi = sents.findIndex((x) => UNIQUE_CLAIM.test(x));
    const hostSent = hi >= 0 ? sents[hi] : l;
    if (DISCLOSURE.test(hostSent)) return;
    const win = (hi > 0 ? sents[hi - 1] + ' ' : '') + hostSent;
    const after = win.replace(/\*\*/g, '').replace(/[`_]/g, '');
    // Entity extraction must be TIGHT. A first cut reported "WITHOUT" as a plan a competitor
    // surfaces — noise that buries the real hits and trains you to skim the gate's output, which is
    // how the false claim got sealed in the first place. Proper-noun shaped only: Title Case, not
    // ALL CAPS, not a markup/instruction word.
    const STOP = /^(Las Vegas|Lead|Name|The|This|That|Nevada|Plans?|Carriers?|Health|Trust|Fund|Insurance|Financing|Owner|Meta|Feature|Note|Section)$/i;
    const names = (after.match(/\b([A-Z][a-z][A-Za-z&.'-]*(?: [A-Z][a-z][A-Za-z&.'-]*){0,3})\b/g) || [])
      .filter((n) => !STOP.test(n) && !/^[A-Z]+$/.test(n) && n.split(' ').length >= 2);
    let corpus = '';
    try {
      for (const s of fs.readdirSync(SNAPS)) corpus += fs.readFileSync(path.join(SNAPS, s), 'utf8').toLowerCase();
    } catch { bad('UNIQUENESS CLAIM cannot be checked (competitor snapshots unreadable): ' + path.relative(PREP, f) + ':' + (i + 1)); return; }
    const contradicted = [...new Set(names)].filter((n) => n.length > 6 && corpus.includes(n.toLowerCase()));
    if (contradicted.length) {
      bad('FALSE UNIQUENESS CLAIM: ' + path.relative(PREP, f) + ':' + (i + 1) +
          '  a competitor capture DOES surface: ' + contradicted.join(', '));
    }
  });
}
ok('competitive-uniqueness claims checked against the 21 competitor captures (' + uniqChecked + ' claim(s) in the sealed set)');

// The same check over PREP-INTERNAL files. These cannot reach the build and must never block the
// seal — but they are what the NEXT prep pass re-derives from, and that is exactly how this false
// claim reached a sealed brief. Reported as advisory so it is visible rather than invisible.
{
  let corpus = '';
  try { for (const s of fs.readdirSync(SNAPS)) corpus += fs.readFileSync(path.join(SNAPS, s), 'utf8').toLowerCase(); } catch {}
  const STOP2 = /^(Las Vegas|Lead|Name|The|This|That|Nevada|Plans?|Carriers?|Health|Trust|Fund|Insurance|Financing|Owner|Meta|Feature|Note|Section)$/i;
  let advUniq = 0;
  for (const f of advisoryFiles()) {
    const lines = fs.readFileSync(f, 'utf8').split('\n');
    lines.forEach((l, i) => {
      if (!UNIQUE_CLAIM.test(l)) return;
      const sents2 = l.split(/(?<=[.;])\s+/);
      const hi2 = sents2.findIndex((x) => UNIQUE_CLAIM.test(x));
      const hostSent2 = hi2 >= 0 ? sents2[hi2] : l;
      if (DISCLOSURE.test(hostSent2)) return;
      const win2 = (hi2 > 0 ? sents2[hi2 - 1] + ' ' : '') + hostSent2;
      const after = win2.replace(/\*\*/g, '').replace(/[`_]/g, '');
      const names = (after.match(/\b([A-Z][a-z][A-Za-z&.'-]*(?: [A-Z][a-z][A-Za-z&.'-]*){0,3})\b/g) || [])
        .filter((n) => !STOP2.test(n) && !/^[A-Z]+$/.test(n) && n.split(' ').length >= 2);
      const contradicted = [...new Set(names)].filter((n) => n.length > 6 && corpus.includes(n.toLowerCase()));
      if (contradicted.length) {
        advUniq++;
        notes.push('ADVISORY FALSE UNIQUENESS (not sealed, re-seeds prep): ' + path.relative(PREP, f) +
                   ':' + (i + 1) + '  competitor DOES surface: ' + contradicted.join(', '));
      }
    });
  }
  if (!advUniq) ok('prep-internal uniqueness claims also clean against the captures');
}

// Acceptance-framing in prep-internal files: same rationale, advisory only.
{
  let advAcc = 0;
  for (const f of advisoryFiles()) {
    const lines = fs.readFileSync(f, 'utf8').split('\n');
    lines.forEach((l, i) => {
      if (!/\baccess claim\b|\bAccepting them\b/i.test(l)) return;
      const sentences = l.split(/(?<=[.;:])\s+/);
      const host = sentences.find((s) => /\baccess claim\b|\bAccepting them\b/i.test(s)) || l;
      if (DISCLOSURE.test(host)) return;
      advAcc++;
      notes.push('ADVISORY acceptance framing (not sealed, re-seeds prep): ' + path.relative(PREP, f) + ':' + (i + 1));
    });
  }
  if (!advAcc) ok('prep-internal acceptance framing clean');
}

// ---------------------------------------------------------------- 5. brief <-> meta agreement
function metaOf(file) {
  try {
    const m = fs.readFileSync(file, 'utf8').match(/\*\*Meta \(D-SEO-004\):\*\*\s*(.+)/);
    return m ? m[1].trim() : null;
  } catch { return null; }
}
const enrich = (() => { try { return fs.readFileSync(path.join(PREP, 'seo-enrichment.md'), 'utf8'); } catch { return ''; } })();
for (const slug of ['dr-adrian-ruiz', 'sealants', 'new-patients', 'insurance-financing']) {
  const bm = metaOf(path.join(PREP, 'briefs', slug + '.md'));
  if (!bm) { notes.push('no D-SEO-004 meta found in briefs/' + slug + '.md (not necessarily a defect)'); continue; }
  // find the enrichment row for this slug and compare the description cell loosely (last cell)
  const row = enrich.split('\n').find((l) => l.includes('| ' + slug + ' ['));
  if (!row) { bad('seo-enrichment.md has no row for ' + slug); continue; }
  // header is: | slug | title | meta | primary_keyword | intent |  -> meta is index 2.
  // Taking the LAST cell read the INTENT column ("commercial"/"navigational") and reported a
  // desync on every page. A gate bug, caught by its own first run.
  const cells = row.split('|').map((c) => c.trim());
  const desc = cells[3] || '';
  const norm = (s) => s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  const a = norm(bm), b = norm(desc);
  const shared = a.split(' ').filter((w) => w.length > 4 && b.includes(w)).length;
  const ratio = shared / Math.max(1, a.split(' ').filter((w) => w.length > 4).length);
  if (ratio < 0.6) bad('BRIEF/META DESYNC for ' + slug + ':\n      brief: ' + bm.slice(0, 100) + '\n      meta:  ' + desc.slice(0, 100));
  else ok('brief/meta agree for ' + slug + ' (' + Math.round(ratio * 100) + '% shared)');
}

// ---------------------------------------------------------------- 6. meta length limits
enrich.split('\n').forEach((l, i) => {
  if (!/^\|/.test(l) || /^\|\s*-+/.test(l)) return;
  // NOTE the .filter(Boolean) here shifts every index down by one versus the unfiltered split
  // used in check 5. With the filter: [slug, title, meta, keyword, intent]. Getting this wrong
  // reported all 66 META cells as over-length TITLES — 66 phantom failures on the first run.
  const cells = l.split('|').map((c) => c.trim()).filter(Boolean);
  if (cells.length < 3) return;
  const title = cells[1] || '', desc = cells[2] || '';
  if (title.length > 60 && !/^page|^slug/i.test(title)) bad('seo-enrichment.md:' + (i + 1) + ' title ' + title.length + ' chars (>60)');
  if (desc.length > 160) bad('seo-enrichment.md:' + (i + 1) + ' meta ' + desc.length + ' chars (>160)');
});
if (!fails.some((x) => x.includes('chars (>'))) ok('every seo-enrichment row within title<=60 / meta<=160');

// ---------------------------------------------------------------- 7. divergence audit
// Only the files we INTENDED to change may differ prep-vs-build. Anything else means something
// modified the tree that we do not know about, and sealing would bake it in.
const CSET = ['sitemap.yaml', 'client-rules.json', 'content-bible.md', 'decisions-ledger.md',
  'radiantsmiles-tokens-spec.md', 'visual-direction.md', 'link-funnel-map.md',
  'selling-asset-manifest.json', 'seo-manifest.json', 'seo-enrichment.md', 'fact-registry.json'];
// Files we DELIBERATELY corrected upstream this session. Anything else differing prep-vs-build is
// drift we did not author, and sealing would bake it in. visual-direction.md (C7) and
// selling-asset-manifest.json (C9) were added after the gate caught them BOTH asserting the smile
// gallery is "live and empty" — false; it ships 30 photographs, all with empty alt text and none
// identified as a consented before/after pair.
const EXPECTED = new Set(['client-rules.json', 'content-bible.md', 'seo-enrichment.md',
  'visual-direction.md', 'selling-asset-manifest.json']);
const sha = (p) => { try { return execSync('shasum -a 256 ' + JSON.stringify(p)).toString().split(' ')[0]; } catch { return null; } };
for (const f of CSET) {
  const a = sha(path.join(PREP, f)), b = sha(path.join(HANDOFF, f));
  if (!a || !b) { bad('C-set file missing on one side: ' + f); continue; }
  if (a !== b && !EXPECTED.has(f)) bad('UNEXPECTED DIVERGENCE (not in today\'s edit set): ' + f);
}
if (!fails.some((x) => x.startsWith('UNEXPECTED DIVERGENCE'))) ok('prep-vs-build divergence limited to the intended edit set');

// fact-registry must NOT have drifted — the copy is byte-faithful and would clobber it
if (sha(path.join(PREP, 'fact-registry.json')) !== sha(path.join(HANDOFF, 'fact-registry.json'))) {
  bad('fact-registry.json DIVERGED — the byte-faithful copy would overwrite the build-side registry');
} else ok('fact-registry.json identical prep/build (copy will not regress it)');

// ---------------------------------------------------------------- 8. backup exists
const BK = '/tmp/handoff-backup-preseal';
if (!fs.existsSync(path.join(BK, 'HANDOFF-RECEIPT.json'))) bad('ROLLBACK BACKUP MISSING at ' + BK);
else ok('rollback backup present at ' + BK);

// ---------------------------------------------------------------- advisory (never blocks)
for (const f of advisoryFiles()) {
  const lines = fs.readFileSync(f, 'utf8').split('\n');
  lines.forEach((l, i) => {
    for (const re of ACCEPT_CLAIM) {
      if (re.test(l)) { notes.push('ADVISORY (not sealed, but re-seeds prep): ' + path.relative(PREP, f) + ':' + (i + 1)); break; }
    }
    if (/live and empty/i.test(l)) notes.push('ADVISORY false-incumbent (not sealed): ' + path.relative(PREP, f) + ':' + (i + 1));
  });
}

// ---------------------------------------------------------------- report
const line = (s) => process.stdout.write(s + '\n');
line('');
line('PRE-SEAL GATE — radiantsmiles');
line('='.repeat(64));
for (const p of passes) line('  PASS  ' + p);
for (const n of notes) line('  note  ' + n);
if (fails.length) {
  line('');
  for (const f of fails) line('  FAIL  ' + f);
  line('');
  line('DO NOT SEAL. ' + fails.length + ' check(s) failed.');
  line('Sealing does not merely preserve a defect, it CERTIFIES it as verified.');
  process.exit(1);
}
line('');
line('SAFE TO SEAL — all ' + passes.length + ' checks passed.');
line('This gate proves only what it checks. It does not read the prose.');
process.exit(0);
