# Open data conflicts — evidence for the owner decisions

Investigated 2026-08-20 against the captured first-party snapshot
(`Code/client-site-prep/radiantsmiles/site-snapshot`, 67 files) and the locked
`_handoff/client-rules.json` `contactData`. **Neither conflict is resolved here** — both need the
practice to confirm. What follows is the evidence, so the decision is a five-minute check rather
than a research task.

---

## 1. Sunrise Manor ZIP — 89107 vs 89104

**Address on record:** `1825 S. Nellis Blvd., Las Vegas NV` · (702) 452-3552

**The build currently ships 89107**, on 13 pages. That follows the locked `contactData` note, which
already documents the conflict: *"89107 site-wide footer vs 89104 in the booking block — 89107
carried forward pending owner confirmation (intake §G-16). NAP consistency depends on resolving
this."*

**Frequency in the captured snapshot:**

| value | files | occurrences | where |
|---|---:|---:|---|
| **89107** | 67 | 70 | the site-wide footer, i.e. every page |
| **89104** | 3 | 4 | `appointment-request.html`, `contact-us.html`, `new-patient-special.html` |

**Do not read that table as settling it.** Frequency here measures how many pages inherit one
footer template, not how many independent sources agree. A single wrong value in a site-wide footer
reproduces 70 times; a correct value entered by hand on three booking pages stays at 4.

**The signal that points the other way, and it is the reason this is written up rather than
closed:** `1825 S. Nellis Blvd.` is in **east** Las Vegas, near Charleston. 89107 covers **west**
Las Vegas. On that basis the minority value (89104) looks more likely to be the correct one, and
the site-wide footer looks like the propagated error.

**LABEL: that last paragraph is UNVERIFIED.** It is geographic inference, not a lookup. No
authoritative ZIP check was performed. It is offered as the reason to check, not as an answer.

**To resolve:** confirm the ZIP for 1825 S. Nellis Blvd against USPS or the practice's own mail.
If it is 89104, 13 pages need correcting and the locked `contactData` needs re-issuing — this is a
NAP-consistency item that affects local search, not a cosmetic one.

---

## 2. North Decatur hours identical to Lone Mountain

**Both offices publish the same seven-day block:**
`Mon 10–6 · Tue 8:30–7 · Wed 10–5 · Thu 8:45–4 · Fri 8:45–4 · Sat Closed · Sun 8:30–3`

They are different addresses and different phone numbers:
- Lone Mountain — 7469 W. Lake Mead Blvd., Suite 270, 89128 · (702) 289-4424
- North Decatur — 6311 N. Decatur Blvd., Suite 140, 89130 · (702) 522-0119

**The README previously said "One record is wrong." That claim is NOT established, and this
document supersedes it.** Grouping all seven offices by their hours block shows duplication is not a
one-off:

| pattern | offices |
|---|---|
| 1 | **lone-mountain, north-decatur** |
| 2 | sunrise-manor |
| 3 | summerlin |
| 4 | **north-las-vegas, henderson** |
| 5 | blue-diamond (itself carrying three ⚠OWNER "not listed" days) |

**Two pairs share a block, not one.** A single copy-paste slip is a plausible story for one pair; it
is a weaker story for two. Offices in one group genuinely running the same schedule is at least as
likely. Sunday opening (8:30–3) is unusual enough that two offices sharing it is worth confirming
either way.

**To resolve:** confirm North Decatur's real seven-day schedule, and while doing so confirm
North Las Vegas and Henderson too, since they share a block on the same evidence.

---

## What the build does about both, today

Ships exactly what the locked copy states, per office, and annotates neither as correct. No page
cross-checks one office against another, and no page silently omits hours to dodge the conflict.
Both items remain open rather than being quietly resolved in the build's favour.
