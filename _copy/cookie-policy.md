# COPY - `cookie-policy`

type: T-LEGAL · legal_variant: document · funnel_role: chrome-only · terminal: true
source brief: `_handoff/briefs/cookie-policy.md`
voice: legal register. `content-bible.md` §1 does NOT apply to the document body.

**Built to the T-LEGAL exemplar** `_copy/privacy-policy.md`. The governing rule for this type is
subtractive: a legal page is a DOCUMENT, not a marketing surface. No CTA band, no offer, no proof stat,
no cross-sell rail. `verify-legal-is-document` owns that check. This page carries the practice's existing
legal text unchanged; this pipeline never authors, rewrites or verifies legal copy.

---

## §1 - title-and-effective-date  [XS]
required IDs: D-PAGE-001

**H1:** Cookie Policy

**Effective date:** Last updated 14 July 2026

Carried from the practice's own cookie page, captured 30 July 2026.

⚠OWNER: confirm this is the date the current policy took effect, and not merely the date the generator last rewrote the file.

---

## §2 - anchored-toc  [XS]
required IDs: D-PAGE-003

Contents, anchored to the sections of the document below.

- What Are Cookies?
- How We Obtain Your Consent
- Types of Cookies We Use
- How to Manage Cookies
- Changes to This Cookie Policy
- Contact Us

⚠OWNER: this list is generated from the headings of the carried body in §3 and §4. No heading is invented, and none is added that the source document does not contain.

---

## §3 - document-body  [XL]
required IDs: D-PAGE-005

**Cookie Policy**

**Last Updated: July 14, 2026**

This Cookie Policy explains how Radiant Smiles Dental ("we," "us," or "our") uses cookies and similar tracking technologies on radiantsmilesnv.com. By using our website, you acknowledge the use of these technologies as described in this policy. You can manage your preferences at any time using the Cookie Settings button on our website.

**What Are Cookies?**

Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their site.

In addition to cookies, we also use localStorage - a browser-based storage mechanism - to save your cookie consent preferences on your device. This is stored under the key rs_consent_v2 and expires after 1 year.

**How We Obtain Your Consent**

When you first visit our website, a cookie consent banner will appear. No analytics or marketing cookies are set until you give your explicit consent.

You may:

- Accept All - enables all cookie categories including analytics and marketing.
- Reject Non-Essential - only essential/functional cookies are used.
- Manage Preferences - choose which categories to enable individually.

You can change or withdraw your consent at any time by clicking the Cookie Settings button visible on every page of our website.

**Types of Cookies We Use**

**1. Essential / Strictly Necessary Cookies**

These cookies are required for the website to function and cannot be switched off. They are set in response to actions you take, such as filling in a form or setting privacy preferences.

| Cookie / Storage | Purpose | Duration |
| --- | --- | --- |
| WordPress session cookies (wordpress_*, wp-settings-*) | Maintain session state for website functionality | Session |
| rs_consent_v2 (localStorage) | Stores your cookie consent preference (analytics: true/false, marketing: true/false) in browser localStorage - not a browser cookie | 1 year (auto-expires) |

**2. Analytics Cookies**

These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our website. These are only set after you provide consent.

| Cookie | Provider | Purpose | Duration |
| --- | --- | --- | --- |
| _ga | Google Analytics | Distinguishes unique users by assigning a randomly generated client identifier | 2 years |
| _gid | Google Analytics | Stores and updates a unique value for each page visited | 24 hours |
| _gat | Google Analytics | Used to throttle request rate | 1 minute |

**3. Marketing / Advertising Cookies**

These cookies may be set through our website by advertising partners loaded via Google Tag Manager. These are only set after you provide consent.

| Cookie | Provider | Purpose | Duration |
| --- | --- | --- | --- |
| Google Tag Manager (GTM-PZBGX4Z8) | Google | Tag management system that may load analytics, advertising, and other third-party tags upon consent | Varies |

**4. Third-Party Booking Platforms**

Our website links to third-party booking platforms. When you navigate to these external services, they may set their own cookies and collect data independently under their own privacy policies:

| Service | Purpose | Privacy Policy |
| --- | --- | --- |
| AppointNow | Online appointment booking | appointnow.com |
| ZocDoc | Online appointment booking | zocdoc.com/about/privacy |
| GoDaddy (Hosting) | Website hosting & infrastructure | godaddy.com privacy policy |

**How to Manage Cookies**

You have the right to decide whether to accept or reject non-essential cookies. You can manage your cookie preferences in the following ways:

- Cookie Settings button: Click the Cookie Settings button on any page of our website to review or change your consent preferences at any time.
- Browser settings: Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or alert you when cookies are being set. Note that disabling cookies may affect the functionality of our website.
- Google Analytics opt-out: Install the Google Analytics Opt-out Browser Add-on.
- Google Ads settings: Manage your Google advertising preferences at Google Ad Settings.

**Changes to This Cookie Policy**

We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated revision date.

⚠OWNER: the body above is carried from the practice's own cookie page, captured 30 July 2026 in `site-snapshot/cookie-policy.html`. Nothing is authored, generated or paraphrased here. Two character level normalizations were required by this build's punctuation gates. Each em dash is rendered as a hyphen, and the decorative emoji are dropped. Confirm with counsel that the carried text is current before launch.

⚠OWNER: the document's own Contact Us block is carried in §4, so it is not repeated here.

⚠FLAG: this inventory describes the site as captured on 30 July 2026. If the new build sets a cookie this table does not list, or drops one it does, the table must be corrected before launch. A cookie table that does not match the deployed site is a false disclosure.

---

## §4 - contact-line  [XS]
required IDs: D-PAGE-006

How to raise a data request. Carried from the Contact Us block of the same captured document:

If you have questions about our use of cookies or wish to exercise your privacy rights, please contact us:

Radiant Smiles Dental
info@radiantsmilesnv.com
Contact Form | Full Privacy Policy

⚠OWNER: this block is carried from `site-snapshot/cookie-policy.html`, captured 30 July 2026. It is not invented here, and it is not the general practice phone line. Confirm with counsel that `info@radiantsmilesnv.com` is the mailbox that should receive data requests.

---

### Compliance notes carried into this page

- Nothing in the document body is authored, paraphrased or generated. Every section carries text captured first-party from the practice's own cookie page on 30 July 2026. That capture is a tier 3 source under `content-bible.md` §4.
- No ⚠OWNER PLACEHOLDER stands on this page. The earlier placeholders in §2, §3 and §4 were withholding text that had already been captured. That is a fabricated absence, so they are removed.
- No CTA, no offer, no price, no review figure and no cross-sell rail appears. A T-LEGAL page is terminal by design, per the brief.
- The page ships with its route live so the chrome footer link resolves.
- The cookie inventory is carried, not composed. It is the inventory the captured page published, and it is flagged for re-check against the deployed build.
- The ADA coverage statistic used elsewhere on the site is deliberately absent. A legal document is not a proof surface.
- `fact-registry.json` sets no must_convey token on D-PAGE-001, D-PAGE-003, D-PAGE-005 or D-PAGE-006. Nothing is bolted on to satisfy a token.
- Addresses, ZIPs and phone numbers do not appear on this page. The practice email is carried from the capture, not retyped from memory.
- No exclamation points and no emoji, per `bannedPunctuation`. The decorative emoji in the captured source are dropped, which is recorded in the §3 owner note.
- No em or en dashes, per G-NODASH. Each em dash in the captured source is rendered as a hyphen, which is recorded in the same note.
- `content-bible.md` §1 voice rules are deliberately NOT applied to legal text; the sentence-length cap does not govern a verbatim legal document.
