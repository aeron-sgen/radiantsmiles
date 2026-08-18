# COPY - `cookie-settings`

type: T-LEGAL · legal_variant: document · funnel_role: chrome-only · terminal: true
source brief: `_handoff/briefs/cookie-settings.md`
voice: legal register. `content-bible.md` §1 does NOT apply to the document body.

**Built to the T-LEGAL exemplar** `_copy/privacy-policy.md`. The governing rule for this type is
subtractive: a legal page is a DOCUMENT, not a marketing surface. No CTA band, no offer, no proof stat,
no cross-sell rail. `verify-legal-is-document` owns that check. This page carries the practice's existing
legal text unchanged; this pipeline never authors, rewrites or verifies legal copy.

---

## §1 - title-and-effective-date  [XS]
required IDs: D-PAGE-001

**H1:** Cookie Settings

**Effective date:** ⚠OWNER PLACEHOLDER

⚠OWNER: the effective date is not published on the current preferences page and is not inferred here. A consent record without a date cannot show which terms a visitor agreed to. Supply the date, or confirm the date of the existing Complianz generation.

---

## §2 - anchored-toc  [XS]
required IDs: D-PAGE-003

⚠OWNER PLACEHOLDER: the anchored contents list for this document.

⚠OWNER: the anchor list is generated from the headings of the verbatim body in §3, which is itself a placeholder. It is not authored here, because inventing a contents list implies sections the real document may not contain. Supply the verbatim body and the list generates from its headings. Until then this section renders as a registered placeholder, not as a contents heading over an empty list.

---

## §3 - document-body  [XL]
required IDs: D-PAGE-005

⚠OWNER PLACEHOLDER: the full preferences text is carried VERBATIM from the practice's existing Complianz generated opt-out preferences page.

⚠OWNER: the live `/opt-out-preferences/` page was captured on 30 July 2026. Its body reads only "Opt-out preferences" and "Region US not activated for cookie-statement". That is a consent tool error state, not policy text, so there is nothing to carry. Supply the intended preferences text.

⚠OWNER: legal text is never rewritten, never paraphrased and never asserted as verified fact by this pipeline, per the brief. The preference controls themselves are rendered by the consent tool at run time. Their categories, their default states and their wording come from that tool.

⚠FLAG: this section must not be filled by generation. Controls shown here must actually write consent state. A toggle that changes nothing is a false disclosure, so the consent tool must be wired before launch.

---

## §4 - contact-line  [XS]
required IDs: D-PAGE-006

How to raise a data request. Carried from the Contact Us block of the practice's own cookie policy:

If you have questions about our use of cookies or wish to exercise your privacy rights, please contact us:

Radiant Smiles Dental
info@radiantsmilesnv.com
Contact Form | Full Privacy Policy

⚠OWNER: this block is carried from `site-snapshot/cookie-policy.html`, captured 30 July 2026. The same mailbox is published again in section 9 of `site-snapshot/privacy-policy.html`. It is not invented here, and it is not the general practice phone line. Confirm with counsel that `info@radiantsmilesnv.com` is the mailbox that should receive data requests.

---

### Compliance notes carried into this page

- Nothing in the document body is authored, paraphrased or generated. Three ⚠OWNER PLACEHOLDER markers stand where real text is required, in §1, §2 and §3.
- §4 is not a placeholder. The same data controller block is published first-party twice, in the captured cookie policy and in section 9 of the captured privacy policy. Carrying a captured value is not inventing one, which is the reasoning that removed the matching placeholder from `_copy/cookie-policy.md` §4.
- No CTA, no offer, no price, no review figure and no cross-sell rail appears. A T-LEGAL page is terminal by design, per the brief.
- The page ships with its route live so the chrome footer link resolves. The placeholders are visible rather than the page being withheld.
- The consent categories and toggle states are not authored here. They belong to the consent tool, and a wrong default is a consent defect.
- `seo-enrichment.md` records the redirect from the live `/opt-out-preferences/` URL to `/cookie-settings/` as planned, not as verified live. That is build routing, so it is recorded here and never in the page body. A T-LEGAL page reads as a document and nothing else.
- No legal_draft mode is used on this build. That is build policy, so it is recorded here rather than in the rendered body.
- The §1 effective date is a placeholder because the captured `/opt-out-preferences/` page carries no date. The privacy and cookie policy captures both carry Last Updated: July 14, 2026; the preferences page does not, so no date is borrowed across.
- The ADA coverage statistic used elsewhere on the site is deliberately absent. A legal document is not a proof surface.
- `fact-registry.json` sets no must_convey token on D-PAGE-001, D-PAGE-003, D-PAGE-005 or D-PAGE-006. Nothing is bolted on to satisfy a token.
- Addresses, ZIPs and phone numbers do not appear on this page. The practice email in §4 is carried from the capture, not retyped from memory.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH.
- `content-bible.md` §1 voice rules are deliberately NOT applied to legal text; the sentence-length cap does not govern a verbatim legal document.
