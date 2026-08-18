# What stands between here and the COPY stamp

Written 2026-08-17, after the TEMPLATES phase reached the point where BULK is the next move and
cannot start.

## Why this matters now

`verify-phase-owner-approved` refuses every write to `pages/` with:

```
reason: prior stage "COPY" is not owner-approved (COPY.approved !== true)
required prior stamp(s): BRAND-CARD + CHROME + FOUNDATION + COPY
                       + T-HUB + T-COMPANY + T-FEATURE + T-ARTICLE + T-INDEX + T-CONTACT + T-LEGAL
```

This is not a side effect of the three placeholder tournaments. **It was verified against the
pre-placeholder ledger and fails identically** — COPY has never been stamped, and BULK has always
been gated behind it. So the critical path to BULK runs through COPY, and it runs through COPY
*regardless* of how the T-ARTICLE / T-INDEX / T-COMPANY question is settled.

COPY is deliberately unstamped and always has been: a stamp asserts the owner saw and approved, and
the owner has not been shown the 66-page corpus. That is correct, not an oversight.

## The corpus is complete; it is the open questions that block it

Verified 2026-08-17: 66 copy files, 66 sitemap nodes, 66 briefs, every node with exactly one type,
all five governing docs present, and 66/66 files carrying flags, a source marker and a compliance
appendix. `verify-all-66` records G-NODASH 66/66 and G-BANNED 66/66 with zero missing required IDs.

What is NOT resolved: **236 open `⚠OWNER` items, 126 of them distinct, spread across all 66 pages.**
Every one is a question the copy refused to answer by inventing something. That refusal is the
pipeline working correctly — but each one is a decision the owner still owes.

## The 236 items are really twelve decisions

| decision | items | pages |
|---|---:|---:|
| Clinician roster + per-office assignment (§G-11) | 41 | 36 |
| Offer terms: expiry, exclusions, senior-age threshold | 38 | 37 |
| Review rating scope + platform of record | 38 | 37 |
| Insurance: coverage-check activity + network status (§G-6 / §G-12) | 29 | 29 |
| Sunrise Manor ZIP conflict, 89107 vs 89104 | 13 | 13 |
| Per-office parking arrangements | 7 | 7 |
| Missing clinician credentials: degree / school / year | 7 | 7 |
| Legal / counsel sign-off: dates, mailbox, entity name, office name | 7 | 4 |
| Cross-office shared records / imaging | 6 | 6 |
| Consented before-and-after photography (§G-9) | 5 | 4 |
| Hours anomalies: Blue Diamond blanks, N. Decatur duplicates | 5 | 3 |
| Booking selector: North Decatur absent | 2 | 2 |
| *(page-specific one-offs)* | 38 | 23 |
| **TOTAL** | **236** | **66** |

**The top four decisions account for 146 of the 236 items.** Answering just those clears most of the
corpus.

### What each of the top four actually asks

**1. The clinician roster (§G-11).** Two separate problems. (a) Three of the ten biographies are
served on the live site from URLs and page titles naming a *different doctor* — Quizon, Andrade and
Schaudt. Identification was verified first-hand against the Elementor binding, so the names are
right, but the roster needs owner confirmation before ten clinician pages ship. (b) **No page on the
live site records which clinician works at which office.** Every page that would name one instead
routes to the locations hub. This is also what leaves T-ARTICLE's section 4 as "the quietest beat on
the page" and, downstream, why that concept has only one dark anchor and fails the look-floor rule.

**2. Offer terms.** The $45 / $29 entry offer is called a *limited time offer* on the live site and
carries no end date, no exclusions and no senior-age threshold. Until those exist, every page
mentioning the offer ships a flagged placeholder and no urgency framing is permitted.

**3. Review rating scope.** The 4.5 stars / 506 reviews Birdeye record is the **Lake Mead office
only**. `content-bible.md` §6 says the scope travels with the number and is never aggregated. Two
questions: does a practice-wide figure exist, and which platform is the system of record?

**4. Insurance.** Two blocked claims: checking a plan and reporting what it covers is an *undefined
insurance activity* with no license or process disclosed (§G-6), and network status is unconfirmed
per office and per plan (§G-12), so carriers are named with no in-network claim.

## What can proceed without any of this

Nothing in `pages/`. The gate is absolute. The work that remains available is upstream of BULK:
the T-ARTICLE / T-INDEX / T-COMPANY promote question, and T-HOME, which is built last and after BULK
in any case.

## Recommended sequence

1. Owner answers the four large decisions above. That alone releases ~146 items across ~37 pages each.
2. Re-run `_audit/verify-all-66.mjs` and re-count the open items.
3. Show the owner the corpus and stamp COPY.
4. Settle the `funnel_role: F3` question so the three placeholder tournaments can stamp.
5. BULK unblocks only when COPY **and all seven** T-`<TYPE>` stamps are `approved: true`.
