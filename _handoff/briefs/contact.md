# BRIEF — `contact`

type: T-CONTACT
funnel_role: F1
terminal: true
links_to: locations, offer, new-patients
links_from: index, services, locations, team, offer
bespoke: false

**SEO title (D-SEO-002):** Contact a Las Vegas Dentist – Book an Appointment
**Primary keyword (D-SEO-003):** Contact a Las Vegas Dentist
**Meta (D-SEO-004):** Book at any of our seven Las Vegas, North Las Vegas and Henderson offices, or call the office nearest you.
**Slug status (D-SEO-005):** [R] · **Intent (D-SEO-006):** transactional

FEATURE: One contact surface covering all seven offices → DO: book at the office nearest you, or call it directly → MEANS: no guessing which of three contact pages is the live one.

> **Voice + claim rules:** `content-bible.md` governs. No superlative ships without a cited source. Hours, addresses and phone numbers come only from `client-rules.json` contactData.

## §1 — hero  [XS]
required IDs: D-SEO-002
The inquiry framing. This page consolidates three overlapping surfaces from the current site.

## §2 — form  [S]
required IDs: D-OFFER-006
Name, contact, preferred office, preferred days and times, reason for visit. The SMS consent language is carried verbatim from the current form; it is a legal notice and is not rewritten.

## §3 — office-routing  [S]
required IDs: D-IA-001
All seven offices, each with its own phone and its own booking link. **All seven book online** — AppointNow office ids 100–106, North Decatur being 106, linked from its own location page. ⚠OWNER — id 106 is ABSENT from the shared multi-office booking selector on the current `/contact-us/`, `/appointment-request/` and `/new-patient-special/` pages, which offer only 100–105; the new contact page must carry all seven. The current site's call-now page **body** listed only four of seven numbers (its shared footer carries all seven). *(Corrected 2026-08-03 — REVERSAL OF A FABRICATED ABSENCE. This section read "North Decatur has NO online booking path today; its entry offers phone only until wired," which would have shipped an invented limitation onto a rendered page. `site-snapshot/north-decatur.html` carries a live AppointNow link for office 106. The original check missed it because the snapshot markup encodes the query-string ampersands as `&#038;`, so a raw grep for the booking URL matched nothing — a null result from an instrument that could not have returned a hit. The real, narrower defect is the shared-selector gap now stated above; it is an owner shopping-list item, not a build instruction. The four-of-seven call-now claim in the same sentence was re-verified this pass and is TRUE — 4 tel: links in the page body, 7 in the footer — so it is retained and sharpened rather than reversed.)*

## §4 — trust-response-line  [XS]
required IDs: D-PAGE-006
Response-time expectation. ⚠OWNER — no SLA is published anywhere on the current site; ships as a flagged placeholder rather than an invented promise.
