# COPY - `contact`

type: T-CONTACT · funnel_role: F1 · terminal: true
cta_primary: Book an appointment · cta_secondary: Call the office
source brief: `_handoff/briefs/contact.md`
voice: `_handoff/content-bible.md` §1 (plainspoken · warm · specific · unhurried · clinical-but-human)

**EXEMPLAR for T-CONTACT.** Only one page of this type ships. The governing rule for this type is that
every routing atom is load bearing: a wrong digit here costs a patient, so every address, phone and
booking id below is copied from `client-rules.json` contactData and never retyped from memory.

---

## §1 - hero  [XS]
required IDs: D-SEO-002

**H1:** Contact a Las Vegas Dentist

**Sub:** Book at any of our seven offices in Las Vegas, North Las Vegas and Henderson, or call the one nearest you directly.

⚠FLAG: this page consolidates three overlapping surfaces from the current site. There is one live contact route after this build, not three that disagree.

---

## §2 - form  [S]
required IDs: D-OFFER-006

**Fields:** name · contact details · preferred office · preferred days and times · reason for visit

**Controls:** an SMS consent checkbox, optional and unticked by default, sitting between the reason for visit field and the submit button.

Tell us which office suits you and roughly when. We will confirm the appointment rather than assume it.

**SMS consent checkbox.** This is a control, not a static line. It is unticked when the page loads. The form validates and submits whether or not it is ticked, and nothing else on the form depends on it. The text below is the checkbox label, carried verbatim from the current form. "Privacy Policy & Terms" is a link to the privacy policy inside that label.

> By submitting this form and signing up for texts, you consent to receive appointment reminder text messages from Radiant Smiles at the number provided, including messages sent by autodialed. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP. Reply HELP for help. Privacy Policy & Terms.

⚠BUILD: render this as a real checkbox input with the text above as its label. Do not render the text as a standalone paragraph, and do not mark the field required. Rendering it as a line at the submit button would deem every submitter to have consented. That turns an optional opt-in into consent by submission.

⚠OWNER: the notice above is copied character for character from `site-snapshot/contact-us.html`, captured 30 July 2026. In that capture it is the label of a Contact Form 7 acceptance field, `acceptance-710`. The field carries the class `wpcf7-acceptance optional`, and the input has no checked attribute. That is why it is carried here as an optional, unticked opt-in. It is a legal notice, so this build does not rewrite, shorten or reword its words. The phrase "sent by autodialed" reads as truncated in the live source and is carried as found. Confirm with your SMS provider that this is still the notice they require, and whether that phrase needs correcting. Confirm also that the opt-in stays optional.

---

## §3 - office-routing  [S]
required IDs: D-IA-001

**All seven offices book online.** Each carries its own phone and its own booking link.

**Lone Mountain.** 7469 W. Lake Mead Blvd., Suite 270, Las Vegas, NV 89128. (702) 289-4424
**Sunrise Manor.** 1825 S. Nellis Blvd., Las Vegas, NV 89107. (702) 452-3552
**Summerlin.** 8961 W. Sahara Ave., Suite 108, Las Vegas, NV 89117. (702) 360-4800
**North Las Vegas.** 5195 Camino Al Norte Rd., North Las Vegas, NV 89031. (702) 509-1967
**Henderson.** 2633 W. Horizon Ridge Pkwy., Suite 130, Henderson, NV 89052. (702) 897-7001
**North Decatur.** 6311 N. Decatur Blvd., Suite 140, Las Vegas, NV 89130. (702) 522-0119
**Blue Diamond.** 5095 S. Blue Diamond Rd., Suite 105, Las Vegas, NV 89139. (702) 331-0010

⚠OWNER: the shared multi office booking selector on the current `/contact-us/`, `/appointment-request/` and `/new-patient-special/` pages offers only booking ids 100 to 105. North Decatur is id 106 and is ABSENT from that selector. Its own location page does carry a live booking link. This page must carry all seven.

⚠OWNER §G-16: the Sunrise Manor ZIP conflicts on the live site. 89107 is carried here from `client-rules.json` contactData, pending confirmation against 89104 in the booking block. NAP consistency depends on resolving it.

⚠FLAG: the current call now page body lists only four of the seven numbers; its shared footer carries all seven. Re verified 2026-08-03. All seven appear above.

---

## §4 - trust-response-line  [XS]
required IDs: D-PAGE-006

⚠OWNER PLACEHOLDER: response time expectation.

No service level is published anywhere on the current site. Rather than promise a response window the practice has not committed to, this line ships as a flagged placeholder.

⚠FLAG: do not fill this with a generic same day or within 24 hours promise. An invented response commitment is a promise a real patient will hold the practice to.

---

### Compliance notes carried into this page

- Every address, ZIP and phone number is copied from `client-rules.json` contactData. None is retyped from memory or from the live site.
- All seven offices are stated as booking online. The earlier claim that North Decatur had no online booking path was a FABRICATED ABSENCE, reversed 2026-08-03, and is not reintroduced here.
- No response time is promised. No SLA exists to cite.
- The SMS consent notice is carried verbatim from `site-snapshot/contact-us.html` and is not treated as editable copy. Its first sentence runs past the 24 word guideline and is deliberately not shortened. A consent notice is never rewritten to fit a house style rule.
- The notice is carried as a MECHANISM as well as a text. The capture shows a Contact Form 7 acceptance field, `acceptance-710`, classed `wpcf7-acceptance optional`, with an unchecked checkbox input and the notice as its label. §2 therefore lists it as a form control and states that the form submits without it.
- Specifying the notice as a static line at the submit button would convert an optional opt-in into consent by submission. That is a change to the legal effect of the form, not a layout choice. The ⚠BUILD note in §2 bars it.
- This page is the T-CONTACT exemplar, so every other form surface inherits the control and not only the words.
- No treatment price is stated. Treatment is quote-only per `pricing.treatment_prices_published: false`.
- No superlative, ranking or award claim appears.
- No exclamation points and no emoji, per `bannedPunctuation`.
- No em or en dashes, per G-NODASH. Office hour ranges are deliberately not carried here, because `contactData` stores them with en dashes that would trip the gate on render.
- Every authored sentence is 24 words or fewer, per `content-bible.md` §1. The verbatim SMS consent notice is the one exemption, for the reason given above.
