---
name: email-newsletters
description: "Designs recurring email newsletters end-to-end: issue format and recurring sections, subject line systems with A/B rotation, list growth channels, welcome sequences for new subscribers, engagement hygiene, and monetization-readiness metrics. Use when the user says things like \"start a newsletter\", \"design my newsletter format\", \"write newsletter subject lines\", \"grow my email list\", \"set up a welcome email for subscribers\", \"my open rates are dropping\", \"clean my list\", \"when can I monetize my newsletter\", or \"plan my weekly email\"."
---

# Email Newsletters

Design and operate a recurring newsletter as a product: a repeatable issue format readers recognize, a subject line system that gets tested instead of guessed, growth loops that feed the list, a welcome path that converts new subscribers into habitual readers, hygiene rules that protect deliverability, and a metrics dashboard that says when the list is ready to make money. The output is an operating system for the newsletter, not a single email.

## When to use this skill

Use this skill when the user wants to:
- Launch a new newsletter (positioning, format, cadence, first issues)
- Redesign an existing newsletter's structure or recurring sections
- Build a subject line library and an A/B rotation plan
- Grow the subscriber list through specific channels
- Create or fix the welcome sequence for new subscribers
- Diagnose falling opens/clicks or plan a list-cleaning (sunset) policy
- Assess whether the list is ready for sponsorships, paid tiers, or product cross-sell

Do NOT use this skill for:
- One-off promotional campaigns, drip automations, or full lifecycle email programs → **email-marketing**
- SPF/DKIM/DMARC, inbox placement, warming, or blocklist issues → **email-deliverability**
- Unsolicited outbound to prospects → **cold-email-outreach** (a newsletter is opt-in only; never merge these lists)
- Post-sales-call nudges → **follow-up-sequences**
- Optimizing the signup landing page itself → **landing-page-cro**
- Rigorous experiment statistics beyond subject line rotation → **ab-testing**
- Turning newsletter issues into social posts or vice versa → **content-repurposing**

## Inputs to gather

Ask for these before starting. Where the user shrugs, apply the default.

| Input | Question | Default if unknown |
|---|---|---|
| Audience & niche | Who reads this and what job does it do for them? | Force an answer — do not proceed without a one-sentence reader + payoff statement |
| Business goal | Audience asset, lead gen, retention, or direct revenue? | Audience asset that later monetizes via sponsorship |
| Current list size & source | How many subscribers, from where? | 0 (pre-launch) |
| Cadence capacity | Hours/week the user can actually spend? | 2-4 hrs/week → weekly issue |
| ESP/platform | Beehiiv, Substack, ConvertKit (Kit), Mailchimp, Ghost, other? | Beehiiv for growth-focused, Substack if paid subscriptions are the plan |
| Voice | Personal (from a named human) or brand? | Personal — named-sender newsletters reliably out-open brand-sender ones |
| Existing metrics | Open rate, CTR, unsubscribe rate, list growth last 90 days | Use benchmarks in Process step 6 as the baseline |
| Monetization intent | Sponsorship, paid tier, own products, none yet? | Decide at 1,000 engaged subscribers, not before |

## Process

1. **Nail the editorial promise.** Write one sentence: "Every [day/week], [reader] gets [specific payoff] in under [N] minutes." Test it: would a stranger know exactly what they're signing up for and when? If the promise needs "and also..." clauses, cut scope. This sentence becomes the signup page headline and the welcome email's first line.

2. **Choose cadence by capacity, not ambition.** Weekly is the default (best habit-formation-to-effort ratio). Daily only if issues take <45 min to produce (curation formats). Monthly is a last resort — readers forget they subscribed, which shows up as spam complaints. Rule: pick the cadence the user can sustain for 26 consecutive issues, then never miss. Fix the send day and time (Tue/Wed/Thu mornings in the audience's dominant timezone are safe starting points; the specific slot matters less than never moving it).

3. **Design the issue format with 3-5 recurring sections.** Recurring sections are the product — they create scan patterns and let readers self-select. For each section define: name, purpose, length cap, and position. Use the Format Spec template below. Target total issue length: 500-1,200 words for weekly editorial, 200-500 for daily curation. Every issue should be readable in the promised time. Include exactly one primary CTA per issue; everything else is links.

4. **Build the subject line system.** Do not write subject lines ad hoc. Set constraints: 30-50 characters (mobile truncates ~35-40), no more than one number or one punctuation mark, no ALL CAPS words, spam-trigger words avoided (free!!!, act now, $$$). Write the preview text deliberately (40-90 characters) — it must extend the subject, not repeat it or show "View in browser". Then set up archetype rotation (see Frameworks): classify every subject into one of 6 archetypes and rotate so no archetype repeats more than twice in a row. A/B test decision point: if the list has ≥2,000 subscribers, run true A/B splits (min ~1,000 per arm, opens as primary metric, clicks as tiebreaker, call winners only at gaps >2 percentage points). Below 2,000, don't pretend to A/B test — instead track archetype performance across 8-12 sends in a simple log and shift the mix toward what wins.

5. **Build the growth engine — pick 2-3 channels, not 8.** Rank by fit:
   - **Owned content funnels**: CTA boxes in blog posts, YouTube descriptions, podcast outros, social bios. Cheapest and most durable. Expect 0.5-2% of content viewers to convert.
   - **Lead magnet + landing page**: a specific, small asset (checklist, template, database) converting at 15-40% on a dedicated page vs. 1-3% for a bare "subscribe" box. Hand page optimization to **landing-page-cro**.
   - **Cross-promotions / newsletter swaps**: trade recommendation slots with newsletters of similar size and adjacent audience. Expect 50-300 subs per swap at the 5k-20k tier.
   - **Paid recommendation networks** (Beehiiv Boosts, SparkLoop): budget $1.50-$3.50 per subscriber; MANDATE a 30-day engagement audit — cut any source whose subscribers open below 60% of organic rate.
   - **Referral program**: only after 5,000+ engaged subs; below that the math rarely covers the reward cost.
   - **Social platform content**: see **twitter-x-content** / **linkedin-content**; the newsletter CTA goes in the follow-up reply or profile, not the post body.
   Set a growth target: 5-10% net list growth per month is healthy for year one; flag anything under 2% for channel review.

6. **Design the welcome path (the highest-leverage emails the user will ever send).** Welcome email #1 goes out instantly on signup and will earn a 50-70% open rate — 1.5-2x normal. Structure: deliver the promised lead magnet in the first two lines, restate the editorial promise, set expectations (what arrives, when), one "reply and tell me X" question (replies train inbox providers to prioritize the sender — this is a deliverability play, not just engagement), and a whitelist/move-to-primary instruction. Optionally add welcome emails #2 (day 2-3: best-of links, 3-5 top past issues) and #3 (day 5-7: the one action or resource that delivers a quick win). Cap the welcome path at 3 emails — longer onboarding automations belong to **email-marketing**. New subscribers should receive the regular issue starting with the next scheduled send, even mid-welcome-path.

7. **Install engagement hygiene rules.** Define "engaged" as opened or clicked in the last 90 days (use clicks as the trustworthy signal — Apple Mail Privacy Protection auto-fires opens and inflates open rates by 15-25 points). Policy: at 120 days of inactivity, enter a 2-email re-engagement sequence ("Do you still want this?" with a one-click stay button, then a goodbye email); no response after 14 more days → suppress (stop sending, don't delete — keep for suppression matching). Run this quarterly. Watch the guardrails every send: unsubscribe rate <0.5% (investigate at >0.8%), spam complaint rate <0.1% (Gmail's hard bulk-sender line is 0.3% — crossing it tanks inbox placement for weeks), bounce rate <2%. If complaints or placement problems persist after hygiene, escalate to **email-deliverability**.

8. **Track monetization readiness.** Score the list with the scorecard in Frameworks. General thresholds: sponsorships become sellable around 1,000-5,000 engaged subscribers in a tight niche (B2B niches monetize smallest); paid tiers need a free list where 5-10% would plausibly convert; own-product cross-sell works at any size. Sponsor pricing anchor: $25-50 CPM (per 1,000 sends) for niche B2B, $15-30 for broad consumer; a dedicated send prices 2-3x an embedded slot. Do not sell ads before 26 consecutive on-time issues — sponsors buy consistency.

9. **Deliver the operating document** (see Output format) and, if asked, draft the first 1-3 issues using the format spec.

## Frameworks & templates

### Template 1: Newsletter Format Spec (fill in the blanks)

```
NEWSLETTER: [name]
PROMISE: Every [cadence], [reader] gets [payoff] in under [N] minutes.
SENDER: [First Last] <[first]@[domain]>   (personal name, real reply-to)
SEND SLOT: [day] at [time] [timezone] — never moves.
TOTAL LENGTH: [500-1,200] words.

SECTIONS (in order):
1. [Cold open / personal note] — [50-100] words. Purpose: voice + continuity hook.
2. [Main story / deep dive]   — [300-600] words. Purpose: the payoff. 1 idea only.
3. [Curated links: "N things"] — [3-5] links, one line of commentary each.
4. [Recurring gimmick: poll / tool of the week / reader Q] — [50] words.
5. [Sign-off + P.S.] — P.S. carries the primary CTA or the referral ask.

PRIMARY CTA THIS ISSUE: [one link — reply prompt, product, or share ask]
```

### Framework: Subject Line Archetype Rotation

Six archetypes. Log every send's archetype and open/click result; rotate so no archetype runs >2x in a row; after 8-12 sends, weight the mix toward the top two performers but never drop to a single archetype (fatigue sets in within ~6 sends).

| Archetype | Pattern | Example (ops newsletter) |
|---|---|---|
| Curiosity gap | Withhold the noun | "The spreadsheet mistake costing you Fridays" |
| Direct benefit | Promise + specificity | "Cut your onboarding doc from 40 pages to 6" |
| Number/list | Count + payoff | "5 automations that survived our audit" |
| Contrarian | Attack a default | "Stop writing SOPs nobody reads" |
| News/timely | Event + implication | "Notion's new API changes your wiki plan" |
| Question | Reader's inner monologue | "Is your handoff doc lying to you?" |

Pair every subject with preview text that adds a second hook: subject "Stop writing SOPs nobody reads" + preview "The 1-page format our 4-person team actually follows" (not "View this email in your browser").

### Template 2: Welcome Email #1 (send instantly on signup)

```
SUBJECT: Your [lead magnet] is inside (+ what happens next)
PREVIEW: One quick favor at the bottom — takes 10 seconds.

Hey [first name] —

Here's your [lead magnet]: [LINK]

Quick intro: I'm [name], and every [day] you'll get [promise] —
readable in about [N] minutes.

Two things before [day]'s issue:

1. Move this email to your Primary tab (Gmail) or add
   [sender address] to contacts, so issues don't get buried.
2. Hit reply and tell me: [one specific, easy question about
   their situation]. I read every reply, and it shapes what
   I write next.

See you [day],
[Name]

P.S. Want a head start? The three most-shared issues so far:
[Issue link 1] / [Issue link 2] / [Issue link 3]
```

### Template 3: Re-engagement email (day 120 of inactivity)

```
SUBJECT: Should I stop emailing you?
PREVIEW: One click keeps you on the list. No hard feelings either way.

[First name] — you haven't opened [newsletter] in a while.
Inboxes change, interests change. Totally fine.

→ [BUTTON: Keep sending me {newsletter}]

Click and you stay. Ignore this and I'll stop sending in two
weeks — you can always re-subscribe at [URL].

[Name]
```

### Framework: Monetization-Readiness Scorecard

Score each row 0 (miss) / 1 (near) / 2 (hit). **10+ of 14: pitch sponsors or launch the paid tier. 7-9: fix the misses first. <7: focus on growth and habit.**

| Metric | Target |
|---|---|
| Engaged subscribers (clicked/opened ≤90d) | ≥1,000 (niche B2B) or ≥5,000 (consumer) |
| Click-through rate (unique clicks / delivered) | ≥2% (≥3% strong) |
| Click-to-open rate | ≥10% |
| Open rate (directional, MPP-inflated) | ≥40% |
| Net list growth | ≥5%/month |
| Unsubscribe rate per send | ≤0.5% |
| Spam complaint rate | ≤0.1% |

Plus a consistency gate: 26 consecutive on-time issues before the first sponsorship pitch.

### Worked example: format decision

User: solo consultant, HR-tech niche, 3 hrs/week, 400 subscribers from LinkedIn. Recommended: weekly Thursday 8am ET; personal sender; 700-word format = 80-word cold open on a client anecdote → 450-word teardown of one HR workflow → "3 links worth your coffee" → P.S. with reply prompt. Growth: LinkedIn posts (see **linkedin-content**) with the signup link in comments, plus one lead magnet ("HRIS vendor comparison sheet") on a dedicated page. No A/B testing at 400 subs — archetype log only. Monetization review deferred to 1,000 engaged.

## Output format

Deliver a single **Newsletter Operating Doc** in markdown containing:

1. **Editorial promise** — the one-sentence promise, audience, and cadence with fixed send slot
2. **Format spec** — completed Template 1 with all sections, lengths, and CTA policy
3. **Subject line system** — 12 ready-to-use subject+preview pairs (2 per archetype) written for this newsletter, plus the rotation/logging rule and the A/B threshold decision for this list size
4. **Growth plan** — the 2-3 chosen channels with monthly subscriber targets and per-channel conversion assumptions
5. **Welcome path** — fully drafted welcome email #1 (and #2-3 if scoped), with send timing
6. **Hygiene policy** — engaged-subscriber definition, sunset timeline, drafted re-engagement email, and guardrail thresholds
7. **Metrics dashboard spec** — the scorecard table pre-filled with the user's current numbers vs. targets, and the monetization decision (ready / fix-list / grow-first)

If the user asked for issue drafts, append them after the doc, each following the format spec exactly.

## Quality checklist

- [ ] Editorial promise fits one sentence with a named reader, payoff, and cadence
- [ ] Cadence is sustainable at the user's stated weekly hours (weekly issue ≤4 hrs production)
- [ ] Send day/time is fixed and stated with a timezone
- [ ] Format has 3-5 named recurring sections, each with a word cap
- [ ] Exactly one primary CTA per issue is specified
- [ ] All 12 subject lines are 30-50 characters (count them) and each has distinct preview text of 40-90 characters
- [ ] Subject lines cover all 6 archetypes; rotation rule stated
- [ ] A/B plan matches list size (true splits only at ≥2,000 subs; archetype log below)
- [ ] Growth plan names 2-3 channels with numeric monthly targets, not "post more on social"
- [ ] Welcome email #1 delivers the lead magnet in the first two lines and includes a reply prompt and a move-to-primary instruction
- [ ] Sunset policy has specific day counts (90/120/134) and keeps suppressed contacts for matching
- [ ] Guardrail thresholds stated: unsub <0.5%, complaints <0.1%, bounces <2%
- [ ] Scorecard is filled with the user's actual numbers or marked "pre-launch baseline"
- [ ] No sponsorship pitch recommended before 26 consecutive issues
- [ ] Nothing in the doc requires a tool the user's stated ESP lacks

## Common mistakes

- **Treating open rate as truth post-2021.** Apple MPP auto-opens inflate rates 15-25 points; a "45% open rate" list may have 25% humans. Anchor decisions to clicks and replies; use opens only for subject line A/Bs within the same send (inflation is roughly symmetric across arms).
- **Launching daily, dying by week six.** Cadence ambition is the top newsletter killer. A weekly that ships 52 times beats a daily that ships 30 and vanishes.
- **Brand-name sender with a no-reply address.** "newsletter@company.com (no-reply)" suppresses opens and blocks the reply signal that inbox providers use to rank the sender. Always a human name, always a monitored reply-to.
- **A/B testing subject lines on a 600-person list and "learning" from noise.** With 300 per arm, a 5-point open gap is usually random. Below ~2,000 subscribers, log archetypes across sends instead.
- **New template every issue.** Readers build scan habits around recurring sections; redesigning weekly resets the habit to zero. Change the format at most twice a year, and announce it.
- **Buying paid subscribers without an engagement audit.** Paid-acquisition subs who never click drag down engagement signals for the whole list, which hurts inbox placement for the organic subscribers too. Audit every paid source at day 30; cut anything under 60% of organic engagement.
- **Hoarding dead subscribers for vanity.** "25,000 subscribers" with 8% clicking is worth less than 5,000 with 40% — to sponsors (who now ask for click data) and to Gmail (which rates the sender by engagement ratio). Sunset on schedule.
- **Burying the lead magnet under three paragraphs of brand story in the welcome email.** Deliver the asset in line one or two; unmet expectations in email #1 are the #1 driver of instant spam complaints.
- **One growth channel: "I'll just post about it."** Bio links convert at fractions of a percent. Pair every content channel with a dedicated lead-magnet landing page or the growth targets will never be met.
- **Selling the first sponsorship at issue #4.** Sponsors renew based on click reports; an unproven list under-delivers, kills the renewal, and burns the niche's small sponsor pool. Hit the scorecard first.
