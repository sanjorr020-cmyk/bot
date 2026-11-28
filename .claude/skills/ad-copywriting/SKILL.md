---
name: ad-copywriting
description: "Writes platform-ready ad copy for Google, Meta, and LinkedIn — hook and angle inventories, character-limit-compliant headlines and descriptions, CTA selection, structured variant matrices for testing, and ad policy pre-checks. Use when the user asks to write ad copy, draft Google RSA headlines, create Facebook or Instagram ad text, write LinkedIn sponsored content ads, generate ad variations for A/B testing, fix a disapproved or truncated ad, brainstorm hooks or angles for paid ads, or shorten existing copy to fit platform character limits."
---

# Ad Copywriting

Produce ad copy that fits each platform's exact specs, leads with a hook that earns the click, and ships as a structured set of variants ready to test — not a single "best guess" ad. Every deliverable must pass three gates: within character limits (counted, not eyeballed), policy-safe, and built around one clear angle per variant so test results are readable.

## When to use this skill

Use this skill when the deliverable is the ad text itself:

- Google Ads responsive search ad (RSA) headlines, descriptions, and assets (sitelinks, callouts)
- Meta (Facebook/Instagram) primary text, headlines, and link descriptions
- LinkedIn sponsored content, text ads, or message ad copy
- Hook/angle brainstorms for any paid channel
- Variant matrices for structured ad testing
- Rewrites to fix truncation, weak CTR, or policy disapprovals

Do NOT use this skill for:

- Campaign structure, bidding, budgets, or keyword match types → **google-ads** or **meta-ads**
- Deciding what to test and reading significance → **ab-testing** (this skill builds the variants; that one designs the experiment)
- The page the ad clicks through to → **landing-page-cro** or **website-copywriting**
- Video ad scripts beyond on-screen text overlays → **short-form-video** or **youtube-scripts**
- Positioning and value-prop development from scratch → **brand-messaging** (this skill consumes positioning; it doesn't invent it)
- Auditing an existing account's performance → **ppc-audit**

## Inputs to gather

Ask for these before writing. Where the user doesn't know, use the stated default and flag the assumption in your output.

1. **Platform and ad format.** Google RSA? Meta single image/carousel? LinkedIn single image? Default: if unstated, ask — specs differ too much to guess.
2. **Product/offer and the ONE conversion action.** "Book a demo," "Start free trial," "Buy now." Default: the primary CTA on the landing page URL if provided.
3. **Audience and funnel stage.** Cold prospecting, warm retargeting, or branded search? Default: cold. Cold traffic needs problem-led hooks; retargeting can lead with offer/urgency.
4. **Landing page URL or its key claims.** Ad copy must not promise anything the page doesn't deliver (hurts Quality Score on Google, conversion everywhere). If no page exists yet, write copy first and note claims the page must support.
5. **Proof points.** Numbers, customer counts, ratings, guarantees, awards. Default: write variants that work without proof, and mark slots like `[X,XXX customers]` the user must fill with real figures — never invent statistics.
6. **Offer/hook constraints.** Discounts, free trial length, pricing that can/can't be shown. Default: no price mention.
7. **Banned or required language.** Regulated industry? Brand voice rules? Competitor names allowed? Default: no competitor names in ad text (trademark risk on Google, poor taste elsewhere).
8. **How many variants they can run.** Default: 1 full RSA for Google; 3 primary-text × 2 headline variants for Meta; 2-4 intro variants for LinkedIn.

If the user has run **customer-personas** or **brand-messaging** work, ask for it — pain language from real customers beats invented copy.

## Process

1. **Confirm the platform spec sheet.** Write the limits at the top of your working notes and count characters for every line you draft (count with a script or character-by-character; do not estimate):
   - **Google RSA:** up to 15 headlines × 30 chars; up to 4 descriptions × 90 chars; 2 display-URL paths × 15 chars. Sitelinks: 25-char link text + two 35-char description lines. Callouts: 25 chars.
   - **Meta:** primary text truncates around **125 characters** in mobile feed before "…See more" — the hook and payoff must land inside that window. Headline: keep to **~40 chars** (27 is the safe never-truncates length). Link description: **~30 chars**, often hidden on mobile — never put essential info there.
   - **LinkedIn sponsored content:** intro text truncates around **150 chars** desktop / **~100 chars** mobile before "…see more" (hard max 3,000). Headline truncates around **70 chars** (max 200). Text ads: 25-char headline, 75-char description. Message ads: 60-char subject line.
2. **Build an angle inventory before writing any ad.** List 5-8 distinct angles (see Frameworks below). An angle is the strategic reason to buy; a hook is the opening line that dramatizes it. Get the user to rank or approve angles if they're available — angle choice matters more than word choice.
3. **Write hooks for the top 3-4 angles.** For each angle, draft 2-3 hook lines using different hook types (question, stat, pain callout, contrarian claim, social proof). On Meta/LinkedIn the hook is the first line of primary/intro text; on Google it's Headline 1.
4. **Draft platform-specific copy.**
   - **Google RSA:** write 12-15 headlines covering distinct slots — 3-4 keyword/search-intent headlines, 3-4 benefit headlines, 2-3 proof/trust headlines, 2 CTA headlines, 1-2 offer headlines. Every headline must make sense combined with any other (Google mixes them). Write 4 descriptions, each a complete thought with its own CTA-ish close. Only pin when a line is legally required or brand-mandated (pinning lowers Ad Strength; a pinned Headline 1 position is acceptable for the primary keyword).
   - **Meta:** lead with the hook, deliver the core benefit + one proof point inside the first 125 chars, then expand for readers who tap "See more" (2-4 short paragraphs, line breaks between them, optional 3-bullet benefit list). Headline restates the offer or CTA, not the hook again.
   - **LinkedIn:** first line must carry the entire value proposition for the target job title — assume nothing after ~100 chars gets read. Name the audience explicitly ("For RevOps leads at 50-500 person SaaS companies:") since targeting is job-title driven.
5. **Select the CTA by funnel stage and friction.** Low-friction assets for cold audiences (Learn More, Download, Watch), commitment CTAs for warm/retargeting (Sign Up, Book Demo, Buy Now, Get Quote). Match the platform's button label to the verb in your copy — copy that says "grab the guide" with a "Sign Up" button leaks clicks.
6. **Assemble the variant matrix.** Structure variants so each test isolates one variable (angle OR hook OR CTA — never all three at once). Use the matrix template below. Hand the finished matrix to an **ab-testing** workflow if the user wants significance planning; note that ad tests typically need ~1,000+ impressions per variant and 30-50 conversions per arm before trusting a winner.
7. **Run the policy pre-check** (see checklist section) and fix violations before delivering. A disapproved ad costs days of learning time.
8. **Deliver in the output format below**, with character counts shown for every line, assumptions flagged, and any `[FILL: …]` proof slots clearly marked.

## Frameworks & templates

### Angle inventory (pick 3-4, one per variant)

| Angle | What it argues | Example hook |
|---|---|---|
| Pain agitation | The current way hurts | "Still building reports by hand every Monday?" |
| Desired outcome | Life after buying | "Ship payroll in 10 minutes, not 2 days." |
| Social proof | Others like you chose this | "Why 4,200 clinics switched last year" |
| Contrarian | The common approach is wrong | "More ad spend won't fix a leaky funnel." |
| Speed/ease | Lowest effort path | "Set up in 15 minutes. No dev required." |
| Cost/value | Cheaper or better ROI | "Same coverage. 40% lower premium." |
| Fear of loss / urgency | Cost of waiting | "Every unanswered lead costs you ~$212." (only with a real number) |
| Identity | For people like you | "Built for freelance designers, not agencies." |

### Copy formulas (for descriptions and primary text)

- **PAS** — Problem, Agitate, Solve: "Manual invoicing eats hours. / One typo and the client pays late. / [Product] auto-generates and chases invoices for you."
- **BAB** — Before, After, Bridge: "Before: 14 tabs to close the books. After: one dashboard. Bridge: [Product] syncs your ledger automatically."
- **AIDA** — Attention, Interest, Desire, Action: hook → differentiator → proof → CTA. Best for Meta long-form below the fold.
- **4U headline test** — score each headline 0-4 on Urgent, Unique, Useful, Ultra-specific; rewrite anything scoring under 2.

### Template 1 — Google RSA build sheet (fill in; counts in parentheses are the hard caps)

```
HEADLINES (≤30 chars each; write 12-15)
H1  [Primary keyword phrase]                     — pin to pos. 1 only if required
H2  [Keyword variant / category term]
H3  [Core benefit in outcome words]
H4  [Second benefit]
H5  [Speed/ease claim: "Setup in X Minutes"]
H6  [Proof: "[X,XXX]+ Customers" / "Rated 4.8/5"]
H7  [Trust: guarantee / certification]
H8  [Offer: "Free 14-Day Trial"]
H9  [CTA: "Book a Free Demo Today"]
H10 [CTA variant: "Get Your Quote in 2 Min"]
H11 [Differentiator vs. status quo]
H12 [Audience callout: "For Small Law Firms"]

DESCRIPTIONS (≤90 chars each; 4 complete thoughts)
D1  [Benefit + proof + soft CTA]
D2  [PAS compressed to one sentence + CTA]
D3  [Offer terms + risk reversal]
D4  [Differentiator + audience fit + CTA]

PATHS: /[keyword]  /[action]     (≤15 chars each)
SITELINKS ×4: 25-char text + 2×35-char lines
CALLOUTS ×4-6: ≤25 chars ("Free Shipping", "24/7 Support")
```

**Worked example (B2B scheduling SaaS, keyword "meeting scheduler"):**
- H1: `Meeting Scheduler for Teams` (27) · H3: `Kill the Back-and-Forth Email` (29) · H6: `Trusted by 12,000+ Teams` (24) · H8: `Free Plan — No Card Needed` (26) · H9: `Start Scheduling in 5 Min` (25)
- D1: `Share one link, let clients pick a time. Syncs with Google & Outlook. Try it free.` (83)
- D2: `Double-bookings kill deals. Auto-buffer your calendar and never overlap again.` (79)

### Template 2 — Meta ad (single image/carousel)

```
PRIMARY TEXT
[Hook — question, stat, or pain callout. ≤125 chars incl. the payoff.]
[⏎]
[2-3 sentences: how it works + differentiator. Short lines.]
[⏎]
[Optional: ✓ benefit ✓ benefit ✓ benefit — 3 max]
[⏎]
[CTA line that mirrors the button verb + risk reversal.]

HEADLINE (≤40 chars): [Offer or outcome, not the hook again]
DESCRIPTION (≤30 chars, optional): [Reinforcement only]
BUTTON: [Learn More | Sign Up | Shop Now | Book Now | Get Offer | Download]
```

**Worked example (DTC sleep supplement, cold audience):**
> Primary (first 125 chars): `Lying awake at 2am doing mental math on tomorrow's meetings? There's a non-groggy fix — and it's not melatonin.` (111)
> Below fold: `Restora combines magnesium glycinate + L-theanine — no next-day fog, no habit formation. 60-night guarantee: sleep better or it's free.`
> Headline: `Fall Asleep 37% Faster*` (23, with `[FILL: substantiation for 37% claim or delete]`)
> Button: `Shop Now`

### Template 3 — Variant test matrix

```
| Variant | Angle        | Hook (first line)          | Body formula | CTA        | What this tests      |
|---------|--------------|----------------------------|--------------|------------|----------------------|
| A1      | Pain         | [hook 1]                   | PAS          | Learn More | control              |
| A2      | Pain         | [hook 2, same angle]       | PAS          | Learn More | hook (vs A1)         |
| B1      | Social proof | [proof-led hook]           | BAB          | Learn More | angle (vs A1)        |
| A1-cta  | Pain         | [hook 1]                   | PAS          | Sign Up    | CTA (vs A1)          |
```

Rule: any two rows being compared must differ in exactly one column (besides the label). 3-5 live variants per ad set is the practical ceiling; more starves each of data.

### CTA selection guide

| Funnel stage | Google CTA headline | Meta/LinkedIn button | Why |
|---|---|---|---|
| Cold, unaware | "See How It Works" | Learn More / Download | Low commitment, feeds retargeting |
| Cold, problem-aware | "Get the Free Guide" | Download / Watch More | Value exchange first |
| Warm / retargeting | "Start Your Free Trial" | Sign Up / Get Offer | Ready for commitment |
| High-intent search | "Get a Quote in 2 Min" | Book Now / Buy Now | Match the query's intent |

## Output format

Deliver one markdown document containing, in order:

1. **Brief recap** (3-5 lines): platform, audience, funnel stage, conversion action, assumptions made.
2. **Angle inventory**: the 5-8 angles considered, with the 3-4 selected ones marked and a one-line rationale each.
3. **The copy**, grouped by platform placement, with a character count after every limited field, e.g. `H4: Kill the Back-and-Forth Email (29/30)`. Google output uses the RSA build-sheet structure; Meta/LinkedIn output shows the truncation point explicitly (`— fold at 125 —`).
4. **Variant matrix** table mapping every variant to its angle/hook/CTA and what comparison it enables.
5. **Policy notes**: any claims needing substantiation, `[FILL:]` slots, restricted-category flags, and anything the landing page must say to back the ad.
6. **Next steps**: which variants to launch first, minimum data before judging (≥1,000 impressions and ~30-50 conversions per variant), and pointer to **ab-testing** for the evaluation plan.

## Quality checklist

Verify every item before delivering; each is pass/fail.

1. Every character-limited field is counted and within limit (Google 30/90/15, Meta hook payoff ≤125, headline ≤40, LinkedIn intro value ≤150/100, headline ≤70).
2. Google RSA has ≥10 headlines and 4 descriptions, and any headline reads sensibly next to any other (spot-check 3 random pairs).
3. No two RSA headlines say the same thing in different words — each fills a distinct slot (keyword, benefit, proof, CTA, offer).
4. On Meta and LinkedIn, the value proposition is complete before the truncation point — cover the text after the fold and the ad still works.
5. Exactly one angle per variant; no variant tries to argue pain AND social proof AND price at once.
6. Every statistic, rating, and customer count is user-supplied or marked `[FILL:]` — zero invented numbers.
7. Superlatives ("#1", "best", "fastest") appear only with substantiation the landing page states.
8. No Meta personal-attribute violations: copy never asserts or implies the reader's health condition, age, race, religion, sexual orientation, or financial status ("Struggling with debt?" fails; "Debt consolidation, explained" passes).
9. No Google style violations: no ALL-CAPS words (acronyms fine), no repeated punctuation ("!!"), no emoji in RSA fields, exclamation marks only in descriptions (max one), no phone numbers in headlines.
10. Special-category check done: housing, employment, credit, health, and political offers flagged for restricted targeting/claims rules on Meta and Google.
11. CTA verb in the copy matches the platform button label chosen.
12. Ad promises nothing the landing page doesn't visibly deliver (offer, price, guarantee, headline claim).
13. Variant matrix comparisons each differ by exactly one variable.
14. Competitor brand names absent from ad text (unless user explicitly accepted the trademark risk).
15. Reading level check: primary text sentences average under ~15 words; no sentence requires re-reading.

## Common mistakes

- **Writing 15 interchangeable RSA headlines.** "Best Meeting Scheduler," "Top Meeting Scheduler," "Great Meeting Scheduler" gives Google nothing to optimize. Slots, not synonyms.
- **Burying the payoff past the fold.** A Meta hook that's all setup ("We started this company because…") with the benefit at character 200 tests as a bad ad even when the offer is great.
- **Pinning every RSA position** to preserve a "perfect" ad. That converts an RSA into an expanded text ad, tanks Ad Strength, and blocks the combination learning you're paying for.
- **Testing a new angle, new hook, and new CTA in one variant.** When it wins (or loses) you learn nothing. One changed variable per comparison.
- **"You"-targeting on Meta in regulated verticals.** "Are you diabetic?" / "Over 50 and single?" gets disapproved for personal attributes. Describe the product's audience, not the reader.
- **Inventing proof.** "Trusted by 10,000+ customers" written on autopilot for a client with 40 customers is a liability, not copy. Always slot real numbers or cut the claim.
- **Letting the description carry Meta's message.** The ~30-char link description frequently doesn't render on mobile; anything essential there is invisible to most impressions.
- **CTA/button mismatch.** Copy says "download the free template," button says "Sign Up" — the click-to-conversion drop shows up as a landing page problem when it's an ad problem.
- **Clever over clear on search.** Google search ads answer a query; puns and curiosity gaps that work on Meta depress CTR when someone searched "emergency plumber near me."
- **Ignoring branded vs. non-branded context.** Copy for branded search should defend and convert (offer, proof, sitelinks), not re-explain what the company does.
- **Declaring winners at 200 impressions.** Note the ~30-50 conversions-per-variant floor in the deliverable so the user doesn't kill good ads early — and route the analysis to **ab-testing**.
