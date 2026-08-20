# Gate patches — enforcement-code changes that live OUTSIDE version control

`/Users/aeroncloydc.malinab/Oso` is **not a git repository**, so everything under
`.claude/skills/**` is untracked. Any fix made there exists only as the live file. This directory is
the durable copy. It is outside `/private/tmp`, which has been wiped three times in a single session.

## verify-conversion-integrity.mjs — page-specific CTA (2026-08-19, owner-authorised)

**Live path:** `~/Oso/.claude/skills/client-site-build/scripts/verify-conversion-integrity.mjs`

**What it fixes.** `hasPrimaryCta()` resolved a page brief's `cta_primary` ONLY through
`linksToSlug()` — treating a human label as a slug, so it built a regex demanding
`href="...Claim this offer.html"`. No honest page can satisfy that, which made the gate
UNSATISFIABLE for any page whose brief sets a page-specific CTA. The patch adds a label-TEXT match
on the brief's own `cta_primary`.

**Do NOT "fix" this by adding `routeRules.cta_offer` to the `ctaLabelOf` chain.** That was the
obvious-looking fix and it does nothing: `cta_offer` sits behind `cta_primary` in an `||` chain and
is never reached while `cta_primary` exists.

**Restore / re-apply**
```sh
G=~/Oso/.claude/skills/client-site-build/scripts/verify-conversion-integrity.mjs
cp verify-conversion-integrity.PATCHED.mjs "$G"     # re-apply the fix
cp verify-conversion-integrity.ORIGINAL.mjs "$G"    # revert to stock
patch "$G" < verify-conversion-integrity.patch      # or apply as a diff
```

**Re-verify after ANY restore — all three, the third is load-bearing**
```sh
# 1. old-vs-new across every page: the patch must flip EXACTLY one (offer) and no others
# 2. the real offer page must exit 0
# 3. NEGATIVE CONTROL: neutralise the CTA labels on a copy -> the gate must STILL exit 2
```
Without (3), "everything passes now" is equally consistent with having broken the gate wide open.
Measured when the patch was accepted: OLD fails `offer` only · NEW fails none · control `EXIT=2`.

Full write-up: memory note `reference_conversion_gate_page_specific_cta`.
