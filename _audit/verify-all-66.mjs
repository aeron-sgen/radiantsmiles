#!/usr/bin/env node
// verify-all-66.mjs -- deterministic verification of every radiantsmiles _copy/*.md.
//
// TWO LAYERS, and the split is the whole point:
//   LAYER 1  the REAL skill gates, driven exactly as the harness drives them (PreToolUse stdin payload).
//            These prove payload presence and mechanics. They are the skill's own code, not my reimplementation.
//   LAYER 2  content patterns of my own. These are WEAKER and I have been burned by them: a negative result
//            is only as strong as the pattern that produced it. So EVERY pattern is self-tested against a
//            positive and a negative fixture FIRST, and the run ABORTS if any pattern fails its own fixture.
//
// A gate that never fires on a known-bad probe is reported NOT-IN-SCOPE. It is never silently counted green.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const SITE = '/Users/aeroncloydc.malinab/Oso/Code/client-sites/radiantsmiles';
const COPY = path.join(SITE, '_copy');
const BRIEFS = path.join(SITE, '_handoff/briefs');
const GATEDIR = '/Users/aeroncloydc.malinab/Oso/.claude/skills/client-site-build/scripts';

const GATES = [
  { id: 'G-NODASH', file: path.join(GATEDIR, 'verify-no-dashes.mjs') },
  { id: 'G-BANNED', file: path.join(GATEDIR, 'hooks/block-banned-content.mjs') },
  { id: 'G-FIDELITY', file: path.join(GATEDIR, 'verify-copy-fidelity.mjs') },
  { id: 'G-OWNER', file: path.join(GATEDIR, 'verify-phase-owner-approved.mjs') },
  { id: 'G-SEAM', file: path.join(GATEDIR, 'verify-handoff-current.mjs') },
];

const EM = '—';
const EN = '–';

function runGate(gate, filePath, content) {
  const payload = JSON.stringify({
    tool_name: 'Write',
    tool_input: { file_path: filePath, content },
    cwd: '/Users/aeroncloydc.malinab/Oso',
  });
  try {
    execFileSync('node', [gate.file], { input: payload, stdio: ['pipe', 'pipe', 'pipe'], timeout: 30000 });
    return { code: 0, out: '' };
  } catch (e) {
    return { code: e.status == null ? -1 : e.status, out: String(e.stderr || '') + String(e.stdout || '') };
  }
}

// ---------------------------------------------------------------- gate scope probe
// Feed each gate a deliberately filthy _copy doc. A gate that stays silent is out of scope for this
// path and gets reported as such, so a green run can never be a green run of nothing.
const PROBE_PATH = path.join(COPY, 'zzz-probe.md');
const PROBE_BAD = [
  '# COPY - `zzz-probe`', '',
  'This sentence carries an em dash ' + EM + ' right here, and an en dash ' + EN + ' too.',
  'We are the number one rated best dental practice in Las Vegas and it is completely painless!',
  'Cutting-edge state-of-the-art world-class care that is second to none.',
].join('\n');

const scope = {};
for (const g of GATES) {
  if (!fs.existsSync(g.file)) { scope[g.id] = { inScope: false, why: 'gate script not found at ' + g.file }; continue; }
  const bad = runGate(g, PROBE_PATH, PROBE_BAD);
  scope[g.id] = bad.code === 2
    ? { inScope: true, why: 'fired exit 2 on the known-bad probe' }
    : { inScope: false, why: 'known-bad probe returned exit ' + bad.code + ' (fail-open / out of scope for _copy/*.md)' };
}

// ---------------------------------------------------------------- layer 2 predicates
// Written as PREDICATES over lines, not one clever regex. The last version of this file shipped a
// regex whose trailing \s* made a negative lookahead succeed on a zero-width match; predicates over
// explicit line text are checkable by eye and by fixture.

const ABSENCE_RE = /\b(not (?:published|confirmed|captured|stated|available|supplied|specified)|no (?:first-party )?source (?:confirms|states)|is not in the|nowhere (?:on|in) the|has not been supplied)\b/i;

// A disclaimer is the CORRECT form of a compliance note ("No shared record is asserted"). Counting it
// as the very defect it disclaims is how a harness invents findings. Suppress only when a negation
// GOVERNS a claim-verb in the same line, which "one patient record follows you" never does.
const NEG = /\b(no|not|never|nor|nothing|none)\b/i;
// META: passive/meta verbs describing what THIS COPY does. "is claimed", "are verified", "ships".
const META = /\b(asserted|claimed|implied|stated|verified|confirmed|cited|promised|described|repeated|guaranteed|printed|ships?|appears?)\b/i;
// A negation directly governing a speech act ("we will not call it painless", "is never used").
const NEG_SPEECH = /\b(no|not|never)\b(?:\s+\w+){0,2}\s+(call|calls|say|says|describe|tell|use|used|promise|guarantee|state|claim|imply|repeat)\b/i;
const REFUSAL = /\b(refus|reject|declin|abstain|withh)\w*/i;
// A clause that says the thing SHIPS AS A FLAG is declaring it un-claimed, even when the negation's
// antecedent sits in the previous sentence ("...is verified. A shared record is not, so §6 carries
// an owner flag instead"). The clause carries its own disclaimer status; honour it.
const FLAGGED = /\b(owner )?flag(ged)?\s+(instead|rather than)|\b(instead of|rather than)\s+(the |a )?claim\b|ships? as an? (⚠\s*)?(owner |build )?flag/i;

// A disclaimer is the CORRECT form of a compliance note ("No shared record is asserted"). Counting
// it as the defect it disclaims is how a harness invents findings. Three shapes, because one rule
// kept being wrong: a refusal verb carries its own negation; the meta verb may sit either side of
// the negation; and a negated speech act is a disclaimer even with no meta verb. Crucially "tell you
// what the plan covers and what it does not" is NONE of these - the negation governs the COVERAGE,
// not a statement about the page - so the blocked benefits promise is still caught.
const DISCLAIMER = {
  test(sIn) {
    const str = String(sIn);
    if (REFUSAL.test(str) || NEG_SPEECH.test(str) || FLAGGED.test(str)) return true;
    const n = str.search(NEG);
    if (n < 0) return false;
    return META.test(str.slice(n, n + 110)) || META.test(str.slice(Math.max(0, n - 110), n));
  },
};

// One line can hold a claim, an inline ⚠ note, and more prose after it. Judging the whole line let
// "no blanket guarantee" inside the note suppress the claim in front of it; truncating at ⚠ instead
// discarded the prose behind it. Both were wrong: split into clause-sized units and judge each.
function claimUnits(raw) {
  return String(raw).split(/⚠|(?<=\.)\s+/).map((x) => x.trim()).filter(Boolean);
}

function proseLines(text) {
  // Visitor-facing prose only. Markdown scaffolding, front-matter, section metadata, CTA labels,
  // image direction, owner flags and the compliance block are AUTHORING artefacts, not copy.
  const lines = text.split('\n');
  const out = [];
  let inCompliance = false;
  for (const raw of lines) {
    const l = raw.trim();
    if (/^#{2,3}\s+Compliance notes/i.test(l)) { inCompliance = true; continue; }
    if (inCompliance || !l) continue;
    if (/^#{1,6}\s/.test(l)) continue;
    if (/^-{3,}$/.test(l)) continue;
    if (/^required IDs:/i.test(l)) continue;
    if (/^(type|funnel_role|cta_primary|cta_secondary|source brief|voice|links_to|links_from|bespoke):/i.test(l)) continue;
    if (/^\*\*CTA (primary|secondary)/i.test(l)) continue;
    if (/^\*Image slot:/i.test(l)) continue;
    if (/^⚠(OWNER|FLAG)/.test(l)) continue;
    if (/^→/.test(l)) continue;
    out.push(raw);
  }
  return out;
}
const visibleLines = proseLines;

function sentences(lines) {
  // Split PER LINE. Splitting the joined document let a heading with no terminal period swallow the
  // paragraph after it and report a 38-word "sentence" that no visitor will ever read.
  const out = [];
  for (const raw of lines) {
    const l = raw
      .replace(/`[^`]*`/g, ' ')
      .replace(/^\s*[-*]\s+/, '')
      // Strip emphasis BEFORE splitting. A pillar lead-in ends ".**", so the lookbehind for a
      // terminal period never fired and the lead-in plus the sentence after it were counted as one
      // 26-word sentence. That was a harness bug reported as a house-style violation on 20+ pages.
      .replace(/\*\*/g, '')
      .replace(/(^|\s)\*(\S)/g, '$1$2')
      .replace(/(\S)\*(\s|$)/g, '$1$2')
      .trim();
    if (!l) continue;
    for (const s of l.split(/(?<=[.?])\s+/)) if (s.trim()) out.push(s.trim());
  }
  return out;
}
function wordCount(s) {
  return s.replace(/[*_>#|]/g, ' ').split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
}

// An interval is only a defect when it is UNATTRIBUTED. The build legitimately ships "up to six
// months" and "approximately two weeks" because our own pages publish them, so a clause that names
// its source is exempt. Judged per claim unit, not per line, for the reason in claimUnits().
const ATTRIBUTED = /\b(our own [\w\s-]{0,40}?page|our [\w\s-]{0,25}?page|captured|fetched|publishes|published|reports|ADA Health Policy Institute|BBB)\b/i;

const CHECKS = [
  {
    id: 'shared-record',
    desc: 'no shared record / chart / file / set of notes claim, including by contrast',
    // The defect that my own exemplars seeded and that a bad regex once reported as zero.
    hit: (text) => {
      const hits = [];
      for (const [i, raw] of text.split('\n').entries()) for (const l of claimUnits(raw)) {
        if (DISCLAIMER.test(l)) continue;
        if (/\b(one|single|shared|same)\s+(patient\s+)?(record|chart|file|set of notes|notes)\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\btwo\s+sets?\s+of\s+(notes|records|charts|files)\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\brecords?\s+(follow|move|travel)s?\b/i.test(l)) hits.push([i + 1, l.trim()]);
      }
      return hits;
    },
    extraGood: ['- No shared record or shared imaging system is claimed. The verified claim is one practice, one clinical roster.',
                '- No shared record, chart or patient file across offices is asserted, and none is implied by contrast.',
                '- No shared record, shared chart or single patient file across offices is claimed. Only the verified claim ships: one practice, one clinical team.',
                'One practice and one roster are verified: a shared record system is not, so §6 carries an owner flag instead.',
                'A shared record system is not verified, so §6 carries an owner flag instead.',
                '- No cross-office record or imaging capability is claimed. One practice and one clinical roster is verified; a shared record system is not, so §6 carries an owner flag instead.',
                'A shared record across the seven offices is not, so §6 carries an owner flag instead of the claim.'],
    bad: 'Your care is followed across every office because one patient record travels with you.',
    good: 'One practice, one clinical roster, one brand, seven offices.',
  },
  {
    id: 'painless',
    desc: 'no painless / does-not-hurt claim in any rewritten form',
    hit: (text) => {
      const hits = [];
      for (const [i, raw] of text.split('\n').entries()) for (const l of claimUnits(raw)) {
        if (DISCLAIMER.test(l)) continue;
        if (/\bpainless\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\b(it|this|the procedure|treatment)\s+(does|doesn't|does not|won't|will not)\s+hurt\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\byou (?:will|won't|will not) feel (?:no|nothing|none)\b/i.test(l)) hits.push([i + 1, l.trim()]);
      }
      return hits;
    },
    bad: 'The whole appointment is painless and you will feel nothing at all.',
    good: 'Not usually. Gums that are already inflamed can be tender while they are cleaned.',
    extraGood: ['We will not describe it as painless, and we will tell you what to expect after.',
                '- No pain promise is made. The word painless is never used and no outcome is guaranteed.',
                'The area is numbed where numbing is needed. We will not tell you the procedure is painless, and we will not promise a recovery time we have not published.',
                'Our own oral cancer page calls the exam painless, and §8 refuses that word rather than repeating it.',
                'The FAQ says plainly that we will not call the treatment painless.'],
  },
  {
    id: 'practice-wide-rating',
    desc: 'Birdeye 4.5 / 506 never stated practice-wide (Lake Mead scope must ride with it)',
    hit: (text) => {
      const hits = [];
      const lines = proseLines(text);
      for (const [i, l] of lines.entries()) {
        if (!/(4\.5\s*stars?|506\s+(patient\s+)?reviews?)/i.test(l)) continue;
        const window = lines.slice(Math.max(0, i - 1), i + 3).join(' ');
        if (!/lake mead/i.test(window)) hits.push([i + 1, l.trim()]);
      }
      return hits;
    },
    bad: 'Our practice is rated 4.5 stars across 506 patient reviews on Birdeye.',
    good: 'Our Lake Mead office is rated 4.5 stars across 506 patient reviews on Birdeye, fetched 30 July 2026.',
  },
  {
    id: 'ada-unsourced-consequence',
    desc: 'the 55% ADA figure never carries an invented consequence',
    hit: (text) => {
      const hits = [];
      const lines = proseLines(text);
      for (const [i, l] of lines.entries()) {
        if (!/55%/.test(l)) continue;
        if (/\b(so|which means|as a result|therefore|that is why|because of this)\b[^.]*\b(delay|avoid|skip|put off|go without|suffer|lose|worse)\b/i.test(l)) {
          hits.push([i + 1, l.trim()]);
        }
      }
      return hits;
    },
    bad: 'The ADA reports 55% of adults 65 and older have no dental benefits, which means they delay care until it is urgent.',
    good: 'The ADA Health Policy Institute reports that 55% of adults aged 65 and older have no dental benefits, fetched 30 July 2026.',
  },
  {
    id: 'ada-undated',
    desc: 'the 55% figure always names the ADA and its 30 July 2026 fetch date',
    hit: (text) => {
      const hits = [];
      const lines = proseLines(text);
      for (const [i, l] of lines.entries()) {
        if (!/55%/.test(l)) continue;
        const window = lines.slice(Math.max(0, i - 2), i + 3).join(' ');
        const named = /ADA|American Dental Association|Health Policy Institute/i.test(window);
        const dated = /30 July 2026|July 30, 2026|2026-07-30/i.test(window);
        if (!named || !dated) hits.push([i + 1, l.trim() + '   [named=' + named + ' dated=' + dated + ']']);
      }
      return hits;
    },
    bad: 'Around 55% of older adults have no dental benefits.',
    good: 'The ADA Health Policy Institute reports that 55% of adults aged 65 and older have no dental benefits, fetched 30 July 2026.',
    extraGood: ['### Compliance notes carried into this page\n- The 55% coverage figure is attributed to the ADA Health Policy Institute with its fetch date.'],
  },
  {
    id: 'treatment-price',
    desc: 'no treatment price; only the $45 / $29 entry offer is publishable',
    hit: (text) => {
      const hits = [];
      for (const [i, l] of text.split('\n').entries()) {
        for (const m of l.matchAll(/\$\s?(\d[\d,]*)(?:\.\d{2})?/g)) {
          const n = Number(m[1].replace(/,/g, ''));
          if (n !== 45 && n !== 29) hits.push([i + 1, m[0] + '  in: ' + l.trim().slice(0, 120)]);
        }
      }
      return hits;
    },
    bad: 'A crown is typically $1,200 and a cleaning starts at $95.',
    good: 'New patients can start with our $45 exam and X-ray, or $29 if you are a senior.',
  },
  {
    id: 'unnamed-device',
    desc: 'only SIROlaser and digital X-rays are nameable as devices',
    hit: (text) => {
      const hits = [];
      for (const [i, l] of visibleLines(text).entries()) {
        if (/\b(CEREC|iTero|Waterlase|Cone Beam|CBCT|Panorex|intraoral camera|3D printer|milling machine)\b/i.test(l)) {
          hits.push([i + 1, l.trim()]);
        }
      }
      return hits;
    },
    bad: 'We scan with an iTero and mill the crown on our CEREC the same day.',
    good: 'Digital X-rays are taken where they show something an examination cannot.',
  },
  {
    id: 'blanket-availability',
    desc: 'no blanket weekend or evening promise (4 of 7 closed Saturday, 5 of 7 Sunday)',
    hit: (text) => {
      const hits = [];
      for (const [i, l] of visibleLines(text).entries()) {
        if (/\?\s*\**\s*$/.test(l.trim())) continue;                      // a FAQ question, not a promise
        if (/\bclosed\b|\bvaries by office\b|\bhours on each location\b/i.test(l)) continue;
        // The ban is on a PRACTICE-WIDE promise. A line scoped to ONE office is the honest form the
        // rule protects: Henderson really is open Saturday and until 7 PM Tue/Thu per contactData.
        if (/\b(this office|our office on|this location|here at|at this address)\b/i.test(l)) continue;
        if (/\b\d{1,2}(:\d{2})?\s*(AM|PM)\b/i.test(l)) continue;          // a specific published time
        if (/\b(open|available|appointments?)\b[^.]{0,40}\b(seven days|7 days|weekends?|every day|evenings?)\b/i.test(l)) {
          hits.push([i + 1, l.trim()]);
        }
        else if (/\b(weekend|evening|saturday|sunday)\s+appointments?\s+(are\s+)?available\b/i.test(l)) hits.push([i + 1, l.trim()]);
      }
      return hits;
    },
    bad: 'We are open seven days a week and weekend appointments are available at every office.',
    good: 'Same-day and emergency appointments are available at our offices.',
    extraGood: ['**Which offices are open at the weekend?**',
                'That varies by office, so the hours on each location page are the answer.',
                '**Sub:** Our office on W. Horizon Ridge Pkwy., open Saturday and two evenings a week, with its own phone line.',
                'Saturday is open here until 3 PM, so a weekend appointment does not need a day off work. Sunday is closed.'],
  },
  {
    id: 'superlative',
    desc: 'no unsourced superlative, ranking or award claim',
    hit: (text) => {
      const hits = [];
      for (const [i, l] of visibleLines(text).entries()) {
        if ((l.match(/·/g) || []).length >= 2) continue;                  // a name roster, not prose
        if (/\b(number one|#1|best|top[- ]rated|award[- ]winning|leading|premier|voted|highest[- ]rated|most trusted)\b/i.test(l)) {
          hits.push([i + 1, l.trim()]);
        }
      }
      return hits;
    },
    bad: 'We are the top-rated and most trusted dental practice in Las Vegas.',
    good: 'Our Lake Mead office is rated 4.5 stars across 506 patient reviews on Birdeye.',
    extraGood: ['- Premier Access · PrimeCare Administrators · Principal · Regence / Reliance'],
  },
  {
    id: 'sentence-length',
    desc: 'every sentence 24 words or fewer (verbatim legal bodies exempt)',
    hit: (text) => {
      const legalExempt = /verbatim legal (body|text|document)|legal body .*exempt|exemption/i.test(text);
      if (legalExempt) return [];
      const hits = [];
      for (const s of sentences(proseLines(text))) {
        const n = wordCount(s);
        if (n > 24) hits.push([0, n + 'w: ' + s.slice(0, 140)]);
      }
      return hits;
    },
    bad: 'This is a deliberately long sentence written to exceed the house limit of twenty four words, and it keeps going well past that point without stopping for breath at all.',
    good: 'Plaque is soft for a day or two.',
    extraGood: ['## §1 - hero  [S]', 'required IDs: D-SEO-002, D-SEO-003',
                'type: T-FEATURE · funnel_role: F1', '**CTA primary:** Book an appointment',
                '**Keep your own teeth rather than replace them.** That is what treating a pocket is for, and it is why the stubborn sites are worth chasing.',
                '**Wear a guard shaped to your own bite.** It is made from an impression of your teeth, and designed to reduce the abrasive action of grinding.'],
  },
  {
    id: 'exclamation',
    desc: 'no exclamation points, no emoji',
    hit: (text) => {
      const hits = [];
      for (const [i, l] of text.split('\n').entries()) {
        if (/!/.test(l)) hits.push([i + 1, l.trim()]);
        else if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(l.replace(/⚠/g, ''))) hits.push([i + 1, l.trim()]);
      }
      return hits;
    },
    bad: 'Book today and save!',
    good: 'Book an appointment at whichever office suits you.',
  },
  {
    id: 'dashes',
    desc: 'no em dash, no en dash, anywhere including owner notes',
    hit: (text) => {
      const hits = [];
      for (const [i, l] of text.split('\n').entries()) {
        if (l.includes(EM) || l.includes(EN) || /&(mdash|ndash|#8212|#8211);/.test(l)) hits.push([i + 1, l.trim()]);
      }
      return hits;
    },
    bad: 'One practice ' + EM + ' seven offices.',
    good: 'One practice, seven offices.',
  },
  {
    id: 'invented-scope-years',
    desc: 'the 22-years credential never gains an invented locale (the team.md:39 leak)',
    hit: (text) => {
      const hits = [];
      for (const [i, l] of text.split('\n').entries()) {
        if (/\b\d{2}\+?\s*years?\b/i.test(l) && /\b(caring for|serving|treating)\b[^.]{0,40}\b(Las Vegas|Henderson|North Las Vegas|the valley|local)\b/i.test(l)) {
          hits.push([i + 1, l.trim()]);
        }
      }
      return hits;
    },
    bad: 'A second generation dentist, DDS from UCLA in 1995, with more than 22 years caring for Las Vegas patients.',
    good: 'A second generation dentist, DDS from UCLA in 1995, with over 22 years of practice experience.',
  },
  {
    id: 'patient-proportion',
    desc: 'no invented patient count, proportion, success rate or duration about THIS practice',
    hit: (text) => {
      const hits = [];
      for (const [i, l] of visibleLines(text).entries()) {
        if (/\b(most|many|nine out of ten|\d+%)\s+(of\s+)?(our\s+)?patients\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\b(success rate|satisfaction rate)\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\bwe have (treated|seen|helped)\s+(over\s+)?[\d,]+\b/i.test(l)) hits.push([i + 1, l.trim()]);
      }
      return hits;
    },
    bad: 'Most of our patients are back to normal within a day, and we have treated over 10,000 patients.',
    good: 'How often depends on what we found today, not on a fixed rule.',
  },
  {
    id: 'competitor-outcome',
    desc: 'no invented outcome about an alternative product, no competitor-is-worse claim',
    hit: (text) => {
      const hits = [];
      for (const [i, l] of visibleLines(text).entries()) {
        if (/\b(boil[- ]and[- ]bite|over[- ]the[- ]counter|drugstore|generic)\b[^.]{0,80}\b(shifts?|fails?|wears? out|do not|does not|worse|cheap)\b/i.test(l)) {
          hits.push([i + 1, l.trim()]);
        }
        else if (/\b(other|another|most) (practices?|offices?|dentists?)\b[^.]{0,60}\b(slower|worse|longer waits?|do not|cannot|fails?)\b/i.test(l)) {
          hits.push([i + 1, l.trim()]);
        }
      }
      return hits;
    },
    bad: 'A boil-and-bite guard often shifts the problem rather than solving it.',
    good: 'It is made from an impression of your teeth, and designed to reduce the abrasive action of grinding.',
  },
  {
    id: 'insurance-activity',
    desc: 'no promise to check, verify or report on a benefits plan (content-bible §G-6 blocks the class)',
    // Found on 24 pages in round 6. content-bible.md:32 blocks undefined insurance activity outright:
    // it "reads as regulated insurance brokerage with no license, carrier or process disclosed".
    // Nothing in the 102-file capture or the handoff receipts a benefits-checking service.
    hit: (text) => {
      const hits = [];
      for (const [i, raw] of proseLines(text).entries()) for (const l of claimUnits(raw)) {
        if (DISCLAIMER.test(l)) continue;
        // PRONOUN BLIND SPOT (found 2026-08-13, the mechanism behind four failed passes): this
        // required a literal benefits|coverage|plan NOUN after the verb, so "we will check YOURS"
        // slipped through while the fixture "we will check your PLAN" was caught. One word apart.
        // `north-decatur.md:122` shipped "Call and we will check yours." through a green 65/66 run.
        // A self-test proves the pattern catches its FIXTURES, never that the fixtures cover reality.
        if (/\b(we|our (office|team|staff))\b[^.]{0,60}\b(check|verify|confirm|review|look (in)?to)\b[^.]{0,40}\b(your |the )?(benefits|coverage|plan|yours)\b/i.test(l)) hits.push([i + 1, l.trim()]);
        // agent-free form: the practice is not named, but the lookup is still being offered/asked for
        else if (/\b(ask|asking) about yours\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\b(tell|let) you\b[^.]{0,40}\bwhat (the |your )?(plan|policy|insurance)\b[^.]{0,30}\bcovers?\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\bwe (help|assist)\b[^.]{0,40}\b(acquire|obtain|find|get)\b[^.]{0,20}\binsurance\b/i.test(l)) hits.push([i + 1, l.trim()]);
      }
      return hits;
    },
    bad: 'We check your benefits before treatment and tell you what the plan covers and what it does not.',
    extraBad: ['We accept 41 named plans. \u26a0OWNER \u00a7G-12: network status varies, so no blanket guarantee is made. Call Henderson and we will check your plan.',
               // the two REAL corpus strings that a green 65/66 run shipped past the old predicate
               'Call and we will check yours.',
               'Network status varies by office and by plan. Call the office you want and ask about yours before you book.'],
    good: 'We are contracted with a list of named carriers, and network status varies by office and plan.',
    extraGood: ['Routine cleanings are covered by many plans, though the number allowed per year varies.',
                '- No insurance activity is promised. Benefits verification is undefined and blocked per content-bible.md §G-6.'],
  },
  {
    id: 'invented-frequency',
    desc: 'no often / usually / most where the source states no frequency at all',
    // The capture presents crown-lengthening bone removal as two case-dependent branches with NO
    // frequency; the copy said "often". Same class as "usually the same two or three places".
    hit: (text) => {
      const hits = [];
      for (const [i, raw] of proseLines(text).entries()) for (const l of claimUnits(raw)) {
        if (DISCLAIMER.test(l)) continue;
        if (/\bhow (often|many|long)\b/i.test(l) && !/\bdecides how often\b/i.test(l)) continue;   // an interrogative refuses a frequency
        if (/\bthe usual (complaint|reason|barrier|problem|cause|excuse|story)\b/i.test(l)) { hits.push([i + 1, l.trim()]); continue; }
        if (/\b(is|are|was|were)\s+(often|usually|typically|normally)\s+(still|already|the|a|an)\b/i.test(l)) { hits.push([i + 1, l.trim()]); continue; }
        if (/\bhas usually\s+\w+/i.test(l)) { hits.push([i + 1, l.trim()]); continue; }
        if (/\b(often|usually|typically|in most cases|more often than not)\b[^.]{0,50}\b(we|our|the practice|the dentist|the clinician)\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\b(we|our (clinicians?|dentists?))\b[^.]{0,40}\b(often|usually|typically)\b/i.test(l)) hits.push([i + 1, l.trim()]);
      }
      return hits;
    },
    bad: 'The gum, and often a small amount of bone, is reshaped by the dentist during the visit.',
    good: 'In some cases removing a small amount of tissue exposes enough tooth. In others, bone is removed too.',
    extraBad: ['Some people dislike the taste or the texture, and that is the usual complaint.',
               'Decay found at an exam is often still a filling.',
               'By the time a tooth aches, the quick fix has usually passed.',
               'Money is the usual reason it sits.'],
    extraGood: ['Gums that are already inflamed can be tender while they are cleaned.',
                'How often depends on your history, so we take one when it will change what we do.',
                'Our own veneers page publishes two visits as the usual count, captured 30 July 2026.'],
  },
  {
    id: 'network-guarantee',
    desc: 'no blanket insurance network guarantee (client-rules OVERCLAIM.global[5], UNCONFIRMED)',
    // MY OWN round-6 instruction seeded this on 12 pages. client-rules.json pricing._insurance_note:
    // "do not state a blanket network guarantee". The sanctioned fallback is to NAME carriers only.
    hit: (text) => {
      const hits = [];
      for (const [i, raw] of proseLines(text).entries()) for (const l of claimUnits(raw)) {
        if (DISCLAIMER.test(l)) continue;
        if (/\b(we|our (practice|office|offices))\b[^.]{0,50}\b(are|is|am)\b[^.]{0,20}\b(contracted with|in network)\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\bwe (are )?(accept|take|work with|are contracted|participate)\b[^.]{0,40}\b(insuranc\w*|dental plans?|named plans?|plans?\b(?=[^.]*\b(insuranc|carrier|network|coverage))|carriers?|networks?)\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\bin network with\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\b(plans?|carriers?|insuranc\w*)\s+(that\s+)?(we|our office)\s+(accept|take)\b/i.test(l)) hits.push([i + 1, l.trim()]);
      }
      return hits;
    },
    bad: 'We are contracted with a long list of carriers, including Delta Dental, Cigna and MetLife.',
    extraBad: ['We accept a list of named plans, published in full on our insurance and financing page.',
               'We work with most insurance carriers in the valley.',
               '**Insurance and financing.** The carriers and plans we accept, and the four lenders patients use.',
               // claim first, inline owner note second: the note used to suppress the claim
               'We accept 41 named plans, including Culinary Health Fund and Nevada Medicaid. \u26a0OWNER \u00a7G-12: network status varies by office and by plan, so no blanket guarantee is made.'],
    good: 'Delta Dental, Cigna and MetLife are among the 41 carriers listed on our insurance page.',
    extraGood: ['Network status varies by office and by plan, so ask the office before you book.',
                '**We take records and plan.** Impressions and images become the plan for what moves, and in what order.',
                'Our insurance and financing page publishes the full list of named plans.',
                '- No blanket network guarantee is stated, per client-rules.json OVERCLAIM.global.'],
  },
  {
    id: 'coverage-frequency',
    desc: 'no unsourced claim about how often or how many plans cover something',
    // ~20 pages. Nothing in the capture, the registry or client-rules states any coverage frequency;
    // "coverage" returns zero hits across all 102 capture files.
    hit: (text) => {
      const hits = [];
      for (const [i, raw] of proseLines(text).entries()) for (const l of claimUnits(raw)) {
        if (DISCLAIMER.test(l)) continue;
        if (/\b(often|usually|commonly|frequently|typically|many|most|sometimes)\b[^.]{0,40}\b(covered|covers|cover it|plans? (treat|pay|cover|allow))\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/^\s*\**\s*(often|usually|commonly|sometimes)\b[^.]{0,30}\bin part\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\b(many|most|some) (dental )?plans\b/i.test(l)) hits.push([i + 1, l.trim()]);
      }
      return hits;
    },
    bad: 'Often, in part. Coverage depends on your plan and how the guard is coded.',
    good: 'Coverage depends on your plan. We do not publish treatment prices.',
    extraGood: ['Coverage depends on your plan and on how the work is coded.',
                '- No coverage frequency is claimed, because no source states one.'],
  },
  {
    id: 'comfort-promise',
    desc: 'no bare no-pain answer; content-bible §3b bans promising a sensation',
    // sealants answered "Does it hurt?" with a bare "No."; oral-cancer-exam with "Not usually."
    // The compliant sibling form is an explicit refusal to characterise it.
    hit: (text) => {
      const lines = proseLines(text);
      const hits = [];
      for (const [i, l] of lines.entries()) {
        if (!/\b(hurt|painful|pain)\b.*\?/i.test(l)) continue;
        const ans = (lines[i + 1] || '').trim().replace(/^\**\s*/, '');
        if (!ans) continue;
        if (DISCLAIMER.test(ans)) continue;
        if (/^(no|nope|not really|it should not|it shouldn't|not usually|rarely|hardly)\b/i.test(ans)) hits.push([i + 2, 'Q: ' + l.trim() + '  ->  A: ' + ans]);
      }
      return hits;
    },
    bad: '**Does it hurt?**\nNo. The sealant is painted on and cured.',
    good: '**Does it hurt?**\nWe will not describe it as painless. There is no drilling and no injection.',
    extraGood: ['**Does it hurt?**\nGums that are already inflamed can be tender while they are cleaned.'],
  },
  {
    id: 'market-prevalence',
    desc: 'no claim about how common a market model or patient behaviour is (nothing in the build measures it)',
    // 7 of 13 confirmed findings in the 38-page audit were this one construction. The build's whole
    // evidence base on competitors is FOUR first-party captures; equivalence-table.md §2 shows all
    // four deliver both general AND cosmetic care, so "the common route splits that in two" is not
    // merely unsourced, it is contradicted. competitorFraming permits framing against a MODEL, which
    // needs no prevalence claim to work.
    hit: (text) => {
      const hits = [];
      for (const [i, raw] of proseLines(text).entries()) for (const l of claimUnits(raw)) {
        if (DISCLAIMER.test(l)) continue;
        if (/\bthe (common|usual|typical|standard|normal) (route|model|way|approach|pattern|setup|arrangement)\b/i.test(l)) hits.push([i + 1, l.trim()]);
        // "run" was in this verb list and fired on "it usually runs across two visits" — a SOURCED
        // clinical frequency (the veneers capture says "Getting veneers usually requires two
        // visits"), not a market-model claim. The market sense is carried by the other verbs.
        else if (/\b(usually|commonly|typically|normally|often)\b[^.]{0,30}\b(split|separate|refer|sent|handled|owned|branded)\w*/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\bmost (people|patients|adults|parents)\b[^.]{0,45}\b(stall|wait|put off|postpone|delay|come in|ask|book|decide|choose|avoid|assume)\w*/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\bmost problems\b[^.]{0,25}\b(found|spotted|caught|detected|picked up)\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\bmost (practices|offices|dentists|groups)\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\bin (the|this) (usual|common|typical) (model|case|route)\b/i.test(l)) hits.push([i + 1, l.trim()]);
      }
      return hits;
    },
    bad: 'The common route splits that in two. A separately branded cosmetic studio does the visible part.',
    good: 'Where a practice refers out, the specialist part happens at another business.',
    extraBad: ['Dental care in this valley is usually split across separate businesses.',
               'In the usual model you meet your dentist for the first time in the chair.',
               'The first visit is where most people stall.',
               'The routine check and the standard cleaning, where most problems are found before you feel them.'],
    extraGood: ['A group with a similar footprint may run its offices as separately owned practices.',
                // clinical generality WITH first-party support, not a market prevalence claim
                'Most people who grind their teeth do it while asleep. You do not feel it happening.',
                'We are one practice with one clinical roster, running seven offices.',
                // SOURCED clinical frequency: the veneers capture publishes "Getting veneers
                // usually requires two visits to complete the process."
                'That matters for cosmetic work because it usually runs across two visits.',
                '- No prevalence claim is made about the market, because no source in this build measures one.'],
  },
  {
    id: 'invented-interval',
    desc: 'no duration or timeframe the capture never published, unless the clause names its source',
    // Confirmed five times by adjudicators instructed to rule the finder wrong by default.
    // Corpus measurement 2026-08-13 against the 102-file capture: "over months" 0 files,
    // "comes and goes" 0, "within days" 0. "for years" hits 2 files (sealants protecting teeth, and
    // being away from the dentist) and "a few days" hits 1 (whitening sensitivity) - none of them
    // transferable to the subjects the copy attached them to. "after" is deliberately NOT a trigger
    // word: it would fire on "after hours".
    hit: (text) => {
      const hits = [];
      for (const [i, raw] of proseLines(text).entries()) for (const l of claimUnits(raw)) {
        if (DISCLAIMER.test(l) || ATTRIBUTED.test(l)) continue;
        // Units restricted to day|week|month|year. "hour" fired on the hours-table label
        // "Tuesday Call for hours" on every location page - a harness bug, not a copy defect.
        if (/\b(within|over|for)\s+(a\s+few\s+)?(day|week|month|year)s?\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\ba few (seconds?|minutes?|hours?|days?|weeks?|months?|years?)\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\bcomes and goes\b/i.test(l)) hits.push([i + 1, l.trim()]);
      }
      return hits;
    },
    bad: 'The teeth either side lean towards the gap over months.',
    good: 'The teeth either side lean towards the gap.',
    extraBad: ['Plaque turns hard within days.',
               'It can quieten for a few days, which people read as recovery.',
               'A sore gum, a bad taste, or a swelling that comes and goes.',
               'Gum disease is followed for years, not fixed in an afternoon.'],
    // vague is NOT invented: "over time" and "for a while" measure nothing and need no source
    extraGood: ['Our own implants page publishes a healing and integration period of up to six months, captured 30 July 2026.',
                'Plaque left on the tooth turns hard over time.',
                'It can quieten for a while, which people read as recovery.',
                'Our own bone grafting page reports bone loss around an extraction site over the following three years.'],
  },
  {
    id: 'conditional-insurance-close',
    desc: 'the insurance answer may not tell a listed-plan reader that no call is needed (soft network claim)',
    // 13 pages shipped "contact the office if your plan is not listed" while 23 shipped the ratified
    // safe form. The conditional does not follow from its own premise: if network status varies by
    // office AND by plan, then a reader whose plan IS listed still has an unknown status, yet the
    // sentence tells them no call is needed. The residual implication is that a listed plan is
    // handled. client-rules.json records insurance_network_claim_scope as per-location, UNCONFIRMED.
    hit: (text) => {
      const hits = [];
      for (const [i, raw] of proseLines(text).entries()) for (const l of claimUnits(raw)) {
        if (DISCLAIMER.test(l)) continue;
        if (/\bif your plan is not listed\b/i.test(l)) hits.push([i + 1, l.trim()]);
        else if (/\bcontact the office\b[^.]{0,40}\bif (your plan|it) is not\b/i.test(l)) hits.push([i + 1, l.trim()]);
      }
      return hits;
    },
    bad: 'Network status varies by office and by plan, so contact the office if your plan is not listed.',
    good: 'Network status varies by office and by plan. Contact the office you want with your plan details before you book.',
    extraBad: ['Our insurance and financing page publishes the full list of named plans. Network status varies by office and by plan, so contact the office if your plan is not listed.'],
    extraGood: ['Call the office with your plan details before you come in.',
                '- The answer invites contact with the office, and states network status varies by office and by plan.'],
  },
];

// ---------------------------------------------------------------- SELF TEST (abort on failure)
const selfFail = [];
let fixtureCount = 0;
for (const c of CHECKS) {
  fixtureCount += 2;
  for (const b of [c.bad, ...(c.extraBad || [])]) {
    if (b !== c.bad) fixtureCount++;
    if (!c.hit(b).length) selfFail.push(c.id + ': MISSED a positive fixture -> ' + JSON.stringify(b));
  }
  for (const g of [c.good, ...(c.extraGood || [])]) {
    if (g !== c.good) fixtureCount++;
    const onGood = c.hit(g);
    if (onGood.length) selfFail.push(c.id + ': FIRED on a negative fixture -> ' + JSON.stringify(g) + ' :: ' + JSON.stringify(onGood[0]));
  }
}
if (selfFail.length) {
  console.error('SELF-TEST FAILED. The patterns are broken, so any result they produce is worthless.\n');
  for (const f of selfFail) console.error('  ' + f);
  console.error('\nABORTING without reporting on any page. A negative result is only as strong as the pattern behind it.');
  process.exit(3);
}

// ---------------------------------------------------------------- required fact tokens, from the registry
const registry = JSON.parse(fs.readFileSync(path.join(SITE, '_handoff/fact-registry.json'), 'utf8'));
const facts = registry.facts || {};
// MIRROR verify-copy-fidelity.mjs: the payload is `verbatim` OR every `must_convey` token. A fact with
// NEITHER has no payload to assert and is SKIPPED. An earlier version of this file fell back to
// `canonical_value`, which invented 43 obligations out of prose like "plainspoken" - a harness bug that
// would have sent agents to fix pages that were never wrong.
function requiredTokensFor(slug) {
  const out = [];
  for (const [id, f] of Object.entries(facts)) {
    if (!(f.pages || []).includes(slug)) continue;
    const toks = (f.must_convey || []).filter(Boolean);
    if (toks.length) out.push({ id, tokens: toks });
    else if (typeof f.verbatim === 'string' && f.verbatim.trim()) out.push({ id, tokens: [f.verbatim.trim()] });
  }
  return out;
}

// ---------------------------------------------------------------- run
const files = fs.readdirSync(COPY).filter((f) => f.endsWith('.md')).sort();
const report = [];

for (const f of files) {
  const slug = f.replace(/\.md$/, '');
  const fp = path.join(COPY, f);
  const text = fs.readFileSync(fp, 'utf8');
  const row = { slug, gates: {}, content: [], tokens: [], briefSections: null };

  for (const g of GATES) {
    if (!scope[g.id].inScope) { row.gates[g.id] = 'n/a'; continue; }
    const r = runGate(g, fp, text);
    row.gates[g.id] = r.code === 0 ? 'pass' : 'FAIL(' + r.code + ')';
    if (r.code !== 0) row.gates[g.id] += ' ' + r.out.split('\n').filter(Boolean).slice(0, 2).join(' | ').slice(0, 200);
  }

  for (const c of CHECKS) {
    const hits = c.hit(text);
    if (hits.length) row.content.push({ id: c.id, n: hits.length, first: hits.slice(0, 3) });
  }

  for (const req of requiredTokensFor(slug)) {
    const vis = visibleLines(text).join('\n');
    const missing = req.tokens.filter((t) => !vis.includes(t));
    if (missing.length) row.tokens.push({ id: req.id, missing });
  }

  const briefPath = path.join(BRIEFS, slug + '.md');
  if (fs.existsSync(briefPath)) {
    const brief = fs.readFileSync(briefPath, 'utf8');
    // ONLY the IDs the brief marks `required IDs:` per section. Sweeping every D-* out of the brief
    // also collected D-SEO-004/005/006, which are meta FIELDS of the brief itself and were never
    // meant to be echoed in copy - that mistake reported all 66 pages as failing.
    const wantIds = [...new Set(
      [...brief.matchAll(/^\s*required IDs:\s*(.+)$/gim)]
        .flatMap((m) => m[1].split(/[,\s]+/))
        .map((s) => s.trim())
        .filter((s) => /^D-[A-Z0-9-]+$/.test(s)),
    )];
    const missIds = wantIds.filter((id) => !text.includes(id));
    // Section headings the brief defines, and whether the copy carries a matching heading.
    const wantSecs = [...brief.matchAll(/^##\s*§\s*(\d+)\s*[—–-]\s*([a-z0-9-]{3,})/gim)].map((m) => m[2].toLowerCase());
    const haveSecs = [...text.matchAll(/^##\s*§\s*(\d+)\s*[—–-]\s*([a-z0-9-]{3,})/gim)].map((m) => m[2].toLowerCase());
    const missSecs = wantSecs.filter((s) => !haveSecs.includes(s));
    row.briefSections = { missingIds: missIds, briefIdCount: wantIds.length, missingSections: missSecs, wantSecCount: wantSecs.length };
  }

  report.push(row);
}

// ---------------------------------------------------------------- output
const line = (s) => console.log(s);
line('');
line('GATE SCOPE PROBE (a gate that cannot fire is never counted as a pass)');
for (const g of GATES) line('  ' + g.id.padEnd(12) + (scope[g.id].inScope ? 'IN SCOPE   ' : 'NOT IN SCOPE  ') + scope[g.id].why);
line('');
line('SELF-TEST: ' + CHECKS.length + ' content patterns passed all ' + fixtureCount + ' fixtures.');
line('');

const activeGates = GATES.filter((g) => scope[g.id].inScope).map((g) => g.id);
const gateFails = report.filter((r) => activeGates.some((g) => String(r.gates[g]).startsWith('FAIL')));
const contentFails = report.filter((r) => r.content.length);
const tokenFails = report.filter((r) => r.tokens.length);
const idFails = report.filter((r) => r.briefSections && r.briefSections.missingIds.length);
const secFails = report.filter((r) => r.briefSections && r.briefSections.missingSections.length);
const noBrief = report.filter((r) => !r.briefSections);

line('FILES: ' + report.length);
line('  gate failures      : ' + gateFails.length + '  (across ' + activeGates.length + ' in-scope gates)');
line('  content findings   : ' + contentFails.length);
line('  missing fact tokens: ' + tokenFails.length);
line('  missing brief D-IDs: ' + idFails.length);
line('  missing brief §s   : ' + secFails.length);
line('  no brief on disk   : ' + noBrief.length + (noBrief.length ? '  (' + noBrief.map((r) => r.slug).join(', ') + ')' : ''));
line('');

if (gateFails.length) {
  line('=== GATE FAILURES ===');
  for (const r of gateFails) {
    for (const g of activeGates) if (String(r.gates[g]).startsWith('FAIL')) line('  ' + r.slug.padEnd(36) + g + '  ' + r.gates[g]);
  }
  line('');
}
if (contentFails.length) {
  line('=== CONTENT FINDINGS ===');
  for (const r of contentFails) {
    line('  ' + r.slug);
    for (const c of r.content) {
      line('    [' + c.id + '] x' + c.n);
      for (const [ln, txt] of c.first) line('        ' + (ln ? 'L' + ln + ' ' : '') + String(txt).slice(0, 160));
    }
  }
  line('');
}
if (tokenFails.length) {
  line('=== MISSING REQUIRED FACT TOKENS (registry says this page must convey them) ===');
  for (const r of tokenFails) for (const t of r.tokens) line('  ' + r.slug.padEnd(36) + t.id + '  missing: ' + JSON.stringify(t.missing));
  line('');
}
if (idFails.length) {
  line('=== BRIEF D-IDs NOT REFERENCED IN COPY ===');
  for (const r of idFails) line('  ' + r.slug.padEnd(36) + r.briefSections.missingIds.join(', '));
  line('');
}
if (secFails.length) {
  line('=== BRIEF SECTIONS MISSING FROM COPY ===');
  for (const r of secFails) line('  ' + r.slug.padEnd(36) + r.briefSections.missingSections.join(', '));
  line('');
}

const clean = report.filter((r) =>
  !activeGates.some((g) => String(r.gates[g]).startsWith('FAIL')) &&
  !r.content.length && !r.tokens.length &&
  !(r.briefSections && (r.briefSections.missingIds.length || r.briefSections.missingSections.length)));
line('CLEAN ON EVERY CHECK: ' + clean.length + '/' + report.length);
line('');
line('CEILING: the gates prove payload presence and mechanics. The content patterns above are mine and');
line('catch only what they were written to catch. Neither layer reads the page. A clean run here is a');
line('floor, not a verdict.');

fs.writeFileSync(path.join(path.dirname(COPY), '_audit/verify-all-66.json'), JSON.stringify({ scope, report }, null, 2));
process.exit(gateFails.length || contentFails.length || tokenFails.length ? 1 : 0);
