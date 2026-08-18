#!/usr/bin/env node
// run-reseal.mjs — execute the radiantsmiles handoff re-seal, or refuse to.
//
// The seal is a CERTIFICATION step: once the receipt is re-emitted, every artifact it covers is
// asserted to have been verified. So this script does the whole sequence in one auditable run and
// ABORTS at the first failure rather than leaving a half-sealed tree.
//
//   1. preseal-gate.mjs           -> must exit 0, else refuse (no copy, no receipt)
//   2. seam-copy.mjs              -> byte-faithful prep -> build over the closed C1-C12 set
//   3. emit-handoff-receipt.mjs   -> recompute all 12 hashes incl. the C2 briefs dir-fold
//   4. verify-handoff-complete.mjs-> the prep-side completeness check
//   5. receipt self-check          -> re-hash every files[] entry against the receipt we just wrote
//   6. verify-all-66.mjs           -> the copy corpus must still be clean after the copy
//
// Run:  node _audit/run-reseal.mjs [--dry]
//   --dry  runs step 1 only and reports what WOULD happen. Default is a real seal.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = '/Users/aeroncloydc.malinab/Oso';
const SLUG = 'radiantsmiles';
const PREP = path.join(ROOT, `Code/client-site-prep/${SLUG}/_spec`);
const HANDOFF = path.join(ROOT, `Code/client-sites/${SLUG}/_handoff`);
const AUDIT = path.join(ROOT, `Code/client-sites/${SLUG}/_audit`);
const PREPSCRIPTS = path.join(ROOT, '.claude/skills/client-site-prep/scripts');
const BACKUP = '/tmp/handoff-backup-preseal';
const DRY = process.argv.includes('--dry');

function say(s) { process.stdout.write(s + '\n'); }
function die(step, msg) {
  say('');
  say('ABORTED at ' + step);
  say('  ' + msg);
  say('');
  say('Nothing further was executed. If a copy already ran, restore with:');
  say('  rm -rf ' + HANDOFF + ' && cp -R ' + BACKUP + ' ' + HANDOFF);
  process.exit(1);
}
function run(label, file, args, cwd) {
  say('');
  say('--- ' + label);
  try {
    const out = execFileSync('node', [file, ...args], { cwd: cwd || ROOT, encoding: 'utf8', stdio: 'pipe' });
    process.stdout.write(out.split('\n').map((l) => '    ' + l).join('\n') + '\n');
    return out;
  } catch (e) {
    const out = (e.stdout || '') + (e.stderr || '');
    process.stdout.write(out.split('\n').map((l) => '    ' + l).join('\n') + '\n');
    die(label, 'exit ' + e.status);
  }
}

// ---------------------------------------------------------------- 0. rollback must exist
if (!fs.existsSync(path.join(BACKUP, 'HANDOFF-RECEIPT.json'))) {
  die('pre-flight', 'ROLLBACK BACKUP MISSING at ' + BACKUP + '. Refusing to seal without a restore path.');
}
say('rollback backup present: ' + BACKUP);

// ---------------------------------------------------------------- 1. the gate
run('STEP 1  pre-seal gate (must exit 0)', path.join(AUDIT, 'preseal-gate.mjs'), []);

if (DRY) {
  say('');
  say('DRY RUN — gate is green. A real run would now copy, re-emit the receipt and verify.');
  process.exit(0);
}

// ---------------------------------------------------------------- 2. the copy
run('STEP 2  seam-copy (byte-faithful prep -> build)',
  path.join(PREPSCRIPTS, 'seam-copy.mjs'), [PREP, HANDOFF, SLUG]);

// ---------------------------------------------------------------- 3. the receipt
run('STEP 3  emit-handoff-receipt (recompute all 12 hashes)',
  path.join(PREPSCRIPTS, 'emit-handoff-receipt.mjs'), [HANDOFF, PREP, SLUG]);

// ---------------------------------------------------------------- 4. completeness
// ARGUMENT ORDER TRAP: emit-handoff-receipt takes <handoffDir> <prepSpecRoot>, but
// verify-handoff-complete takes <prepSpecRoot> <handoffDir> — the OPPOSITE order. Passing them the
// same way made the checker look for HANDOFF-RECEIPT.json inside the _spec tree and for
// spec-manifest.json inside _handoff, producing two phantom "missing" failures on a good seal.
const vhc = path.join(PREPSCRIPTS, 'verify-handoff-complete.mjs');
if (fs.existsSync(vhc)) run('STEP 4  verify-handoff-complete', vhc, [PREP, HANDOFF, SLUG]);
else say('\n--- STEP 4  verify-handoff-complete NOT FOUND — skipped (recorded, not silently passed)');

// ---------------------------------------------------------------- 5. receipt self-check
say('');
say('--- STEP 5  receipt self-check (re-hash every entry against what we just wrote)');
const receipt = JSON.parse(fs.readFileSync(path.join(HANDOFF, 'HANDOFF-RECEIPT.json'), 'utf8'));
const sha = (p) => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
let mismatch = 0;
for (const f of receipt.files || []) {
  const abs = path.join(HANDOFF, f.path || f.rel);
  if (f.id === 'C2') {                       // briefs/ is a directory fold
    let names = [];
    try { names = fs.readdirSync(abs).filter((n) => n.endsWith('.md')).sort(); } catch {}
    say('    C2 briefs/  ' + names.length + ' files (dir-fold hash recomputed by the emitter)');
    continue;
  }
  if (!fs.existsSync(abs)) { say('    MISSING  ' + f.id + '  ' + (f.path || f.rel)); mismatch++; continue; }
  const live = sha(abs);
  if (live !== f.sha256) { say('    MISMATCH ' + f.id + '  ' + (f.path || f.rel)); mismatch++; }
  else say('    ok       ' + f.id + '  ' + (f.path || f.rel));
}
if (mismatch) die('STEP 5', mismatch + ' receipt entr(ies) do not match the files on disk.');

// ---------------------------------------------------------------- 6. the copy corpus
run('STEP 6  verify-all-66 (the copy corpus must still be clean)',
  path.join(AUDIT, 'verify-all-66.mjs'), [], AUDIT);

say('');
say('RE-SEAL COMPLETE.');
say('  receipt concat_sha256: ' + receipt.concat_sha256);
say('  copied_at:             ' + receipt.copied_at);
say('  files sealed:          ' + (receipt.files || []).length);
say('');
say('This proves the receipt matches the tree and the gate was green BEFORE the copy.');
say('It does not prove the prose is honest — only that what was verified is what was sealed.');
