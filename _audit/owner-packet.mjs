#!/usr/bin/env node
// owner-packet.mjs -- turn 418 scattered ⚠ markers across 66 copy docs into a deduped decision list.
//
// The markers are the build's honest output: every place the copy refused to invent something and
// asked instead. But 418 lines is not a decision list, it is a haystack. Most are the SAME question
// repeated across pages (the roster, the offer terms, the Birdeye scope). This clusters them so the
// owner sees each DECISION once, with the blast radius attached.
import fs from 'node:fs';
import path from 'node:path';

const COPY = '/Users/aeroncloydc.malinab/Oso/Code/client-sites/radiantsmiles/_copy';
const OUT = process.argv[2] || '/Users/aeroncloydc.malinab/Oso/Code/client-sites/radiantsmiles/_audit/OWNER-DECISIONS.md';

// PLACEHOLDER blocks the page from shipping; OWNER needs an answer; FLAG is a disclosed gap that
// ships as-is. Ranking them is the difference between a to-do list and a priority order.
const KIND = [
  { re: /⚠OWNER\s+PLACEHOLDER/, id: 'BLOCKS SHIP', rank: 0 },
  { re: /⚠OWNER/, id: 'NEEDS ANSWER', rank: 1 },
  { re: /⚠BUILD/, id: 'BUILD NOTE', rank: 2 },
  { re: /⚠FLAG/, id: 'DISCLOSED GAP', rank: 3 },
];

const STOP = new Set((
  // ordinary english
  'the a an and or of to in on for is are be it this that with our we you your they' +
  ' as at by from not no but if then than so which what who whom whose per its has have had was were' +
  ' any all each both here there when where while also only just before after until unless' +
  // BUILD BOILERPLATE. Nearly every marker contains these, so leaving them in makes two unrelated
  // notes look 40% similar and defeats the clustering entirely.
  ' first party firstparty source sources supply supplied confirm confirmed confirming unconfirmed' +
  ' verify verified unverified publish published publishes anywhere captured capture ships ship' +
  ' shipping page pages owner build copy claim claims claimed stated states state statement' +
  ' before this section that line note flag placeholder real actual current live site' +
  ' needs need required requires nothing none holds held carries carry per fetched july'
).split(/\s+/).filter(Boolean));

function normalize(s) {
  return s
    .replace(/`[^`]*`/g, ' ')
    .replace(/⚠[A-Z ]+:?/g, ' ')
    .replace(/§\s*\d+(\.\d+)?/g, ' ')
    .replace(/\b[GD]-[A-Z0-9-]+\b/g, ' ')
    .replace(/\b\d[\d,.]*\b/g, ' ')
    .toLowerCase()
    .replace(/[^a-z\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w));
}
// Overlap coefficient, not Jaccard: a one-line marker and a six-line one can be the SAME question,
// and Jaccard scores that pair low purely because the lengths differ.
function overlap(a, b) {
  const A = new Set(a), B = new Set(b);
  if (!A.size || !B.size) return 0;
  let inter = 0;
  for (const x of A) if (B.has(x)) inter++;
  return inter / Math.min(A.size, B.size);
}

// ---- collect every marker, with its page and the full (possibly multi-line) note body
const items = [];
for (const f of fs.readdirSync(COPY).filter((x) => x.endsWith('.md')).sort()) {
  const slug = f.replace(/\.md$/, '');
  const lines = fs.readFileSync(path.join(COPY, f), 'utf8').split('\n');
  // The compliance block DISCUSSES the markers ("the offer terms ship as a ⚠OWNER PLACEHOLDER",
  // "No ⚠OWNER PLACEHOLDER stands on this page"). Those are commentary, not open questions, and
  // reading them as markers puts phantom decisions in front of the owner.
  const complianceAt = lines.findIndex((l) => /^#{2,3}\s+Compliance notes/i.test(l.trim()));
  const end = complianceAt === -1 ? lines.length : complianceAt;
  for (let i = 0; i < end; i++) {
    if (!/⚠/.test(lines[i])) continue;
    // a marker runs until a blank line, a heading, or the next marker
    const buf = [lines[i].trim()];
    for (let j = i + 1; j < end; j++) {
      const nx = lines[j];
      if (!nx.trim() || /^#{1,6}\s/.test(nx) || /⚠/.test(nx) || /^-{3,}$/.test(nx)) break;
      buf.push(nx.trim());
    }
    const text = buf.join(' ').replace(/\s+/g, ' ');
    const kind = KIND.find((k) => k.re.test(text)) || { id: 'OTHER', rank: 4 };
    items.push({ slug, line: i + 1, text, kind: kind.id, rank: kind.rank, tok: normalize(text) });
  }
}

// ---- greedy clustering by token overlap, within a kind
const THRESH = 0.62;
const clusters = [];
for (const it of items) {
  let best = null, bestScore = 0;
  for (const c of clusters) {
    if (c.kind !== it.kind) continue;
    const s = overlap(it.tok, c.tok);
    if (s > bestScore) { bestScore = s; best = c; }
  }
  if (best && bestScore >= THRESH) {
    best.members.push(it);
    // keep the longest example: it usually carries the most context for the owner
    if (it.text.length > best.example.length) best.example = it.text;
    // keep the cluster's SHARED core, so it stays a tight question rather than a sponge
    const B = new Set(it.tok);
    const core = best.tok.filter((t) => B.has(t));
    if (core.length >= 3) best.tok = core;
  } else {
    clusters.push({ kind: it.kind, rank: it.rank, tok: [...it.tok], example: it.text, members: [it] });
  }
}
clusters.sort((a, b) => a.rank - b.rank || b.members.length - a.members.length);

// ---- emit
const totalPages = new Set(items.map((i) => i.slug)).size;
const out = [];
out.push('# Owner decisions — Radiant Smiles copy');
out.push('');
out.push('Generated from every ⚠ marker in `_copy/*.md`. These are the points where the copy refused to');
out.push('invent something and asked instead, so each one is a real decision, not a defect.');
out.push('');
out.push('| | |');
out.push('|---|---|');
out.push(`| Marker lines | ${items.length} |`);
out.push(`| Pages carrying at least one | ${totalPages} of 66 |`);
out.push(`| Distinct decisions after deduping | **${clusters.length}** |`);
out.push('');
for (const k of KIND) {
  const n = clusters.filter((c) => c.kind === k.id).length;
  const m = items.filter((i) => i.kind === k.id).length;
  if (n) out.push(`- **${k.id}** — ${n} decision${n === 1 ? '' : 's'}, ${m} marker line${m === 1 ? '' : 's'}`);
}
out.push('');
out.push('`BLOCKS SHIP` must be answered before those pages can publish. `NEEDS ANSWER` should be');
out.push('answered but the page ships with the question visible. `DISCLOSED GAP` ships as-is: it is a');
out.push('thing we could not verify and say so plainly.');
out.push('');
out.push('---');
out.push('');

let n = 0;
for (const c of clusters) {
  n++;
  const pages = [...new Set(c.members.map((m) => m.slug))].sort();
  out.push(`## ${n}. [${c.kind}] ${pages.length} page${pages.length === 1 ? '' : 's'}`);
  out.push('');
  out.push('> ' + c.example.replace(/\s+/g, ' ').slice(0, 900));
  out.push('');
  out.push(`**Affects:** ${pages.join(', ')}`);
  out.push('');
  if (c.members.length > pages.length) {
    out.push(`_(${c.members.length} marker lines across those ${pages.length} pages.)_`);
    out.push('');
  }
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, out.join('\n'));
console.log('markers:', items.length, '| pages:', totalPages, '| distinct decisions:', clusters.length);
for (const k of KIND) {
  const cs = clusters.filter((c) => c.kind === k.id);
  if (cs.length) console.log('  ' + k.id.padEnd(14), String(cs.length).padStart(3), 'decisions,',
    String(cs.reduce((s, c) => s + c.members.length, 0)).padStart(3), 'lines');
}
console.log('wrote', OUT);
