---
name: customer-feedback-analysis
description: "Aggregates customer feedback from support tickets, sales calls, reviews, surveys, and community channels into a tagged, prioritized synthesis with themes, counts, severity, verbatims, and a close-the-loop plan. Use when the user asks to analyze customer feedback, build a feedback tagging taxonomy, synthesize NPS or survey comments, summarize support tickets or app reviews into themes, prioritize feature requests by reach and impact, create a voice-of-customer report, or respond to customers whose feedback shipped."
---

# Customer Feedback Analysis

Turn scattered, messy customer feedback into a decision-ready synthesis: a single aggregated dataset, a stable tagging taxonomy, quantified themes ranked by reach and severity, verbatim quotes that make the data persuasive, a prioritized action list, and a plan to tell customers what happened with their input. The output should let a product team defend a roadmap decision with counts and quotes instead of the loudest recent anecdote.

## When to use this skill

Use this skill when the user wants to:
- Analyze a batch of raw feedback (support tickets, NPS comments, app store reviews, sales call notes, community threads, churn reasons)
- Build or refactor a feedback tagging taxonomy
- Produce a voice-of-customer (VoC) report or monthly feedback digest
- Prioritize feature requests or complaints by reach, severity, and revenue impact
- Select verbatim quotes for a roadmap review, board deck, or launch retro
- Design a close-the-loop process for shipped fixes

Do NOT use this skill for adjacent jobs — route to the sibling skill instead:
- Writing survey questions or NPS program design from scratch → **market-research** (for study design) covers methodology
- Diagnosing churn drivers from behavioral/usage data and building save plays → **churn-prevention** and **retention-cohort-analysis**
- Soliciting and publishing public reviews/testimonials → **reviews-and-testimonials**
- Turning validated themes into a spec → **product-requirements**
- Fixing the underlying support-content gaps the feedback reveals → **help-docs**
- Interviewing users to generate net-new insight (this skill analyzes feedback that already exists) → **customer-personas** or **market-research**

## Inputs to gather

Ask the user for these before starting. Where they don't know, use the stated default and say you did.

1. **The raw feedback data.** File(s), pasted text, or export (CSV/JSON from Zendesk, Intercom, Gong, Delighted, App Store, G2, Discord, etc.). If they have nothing exportable, ask them to paste even 30-50 items — below ~30 items, deliver a qualitative read and flag that counts are directional only.
2. **Channels represented and their volume mix.** Default assumption: support tickets dominate volume (often 60-80% of items), reviews and surveys carry more strategic signal per item.
3. **Time window.** Default: last 90 days. Older than 12 months, recommend excluding or tagging `stale` — product reality has usually changed.
4. **Customer metadata available.** Plan tier, ARR/MRR, tenure, segment. If none: proceed, but flag that prioritization will use raw counts instead of revenue-weighted reach.
5. **Existing taxonomy.** If one exists, extend it rather than replace it; renaming tags breaks trend lines. If none, build one (Process step 3).
6. **The decision this feeds.** Roadmap planning, quarterly review, churn postmortem, launch retro. Default: quarterly roadmap input.
7. **Who receives the output.** Product team (detail-heavy) vs. execs (one-page summary + top 5 themes). Default: product team.

## Process

1. **Normalize into one flat dataset.** Create one row per feedback item with columns: `id`, `date`, `channel`, `source_link`, `customer_id/segment`, `plan/ARR` (if available), `verbatim_text`, `context` (e.g., ticket subject, NPS score, star rating). Split multi-issue items: one support ticket complaining about pricing AND a bug becomes two rows sharing an `id` suffix (`T-1042a`, `T-1042b`). Never analyze channel-by-channel in silos — cross-channel corroboration is the whole point.

2. **De-duplicate and de-bias.** Collapse repeat contacts from the same customer about the same issue into one row with a `contact_count` field (a customer who wrote 6 times is one voice, six units of pain — count them once for reach, note the persistence for severity). Flag channel skew explicitly: support over-represents broken things, sales calls over-represent prospects' wishlists, communities over-represent power users. State the skew in the final report.

3. **Build (or extend) the tagging taxonomy.** Use a two-level structure: 6-10 top-level categories, 3-8 subtags each. Cap the total taxonomy at ~50 tags; beyond that, tagging consistency collapses. Every tag needs a one-line definition and an example. Standard top-level starter set (adapt, don't copy blindly): `Bug/Reliability`, `Usability/UX`, `Missing Capability`, `Performance`, `Pricing/Packaging`, `Onboarding/Docs`, `Integrations`, `Support Experience`, `Praise`. Also tag two orthogonal dimensions per item: **sentiment** (positive / neutral / negative / mixed) and **type** (complaint / feature request / question / praise / churn signal).

4. **Tag every item; run a consistency check.** Tag in a single pass, then re-tag a random 10% sample blind and compare. If agreement is below ~85%, the ambiguous tags need tighter definitions — fix the definitions and re-tag affected items, don't just live with the noise. Park genuinely unclassifiable items in an `Other` tag; if `Other` exceeds 10% of items, the taxonomy is missing a category.

5. **Quantify themes.** For each tag: count of items, % of total, count of unique customers, trend vs. prior period if data exists (flag anything moving ±30%+), and channel breakdown. Then assign **severity** per theme (not per item) on a 4-point scale:
   - **S1 Critical** — blocks core workflow, causes churn or refund requests, data loss
   - **S2 Major** — significant friction with workaround; drives support volume
   - **S3 Minor** — annoyance; cosmetic or edge-case
   - **S4 Request** — absence of something, not a defect
   Severity comes from the worst credible consequence described in the verbatims, not from how angry the wording is.

6. **Prioritize with a Reach × Impact score.** For each theme compute:
   - **Reach** = unique customers affected ÷ total customers in dataset, bucketed 1-5 (1 = <2%, 2 = 2-5%, 3 = 5-15%, 4 = 15-30%, 5 = >30%)
   - **Impact** = severity inverted to 1-4 (S1→4 … S4→1)
   - **Revenue weight** (if ARR data exists) = 1.5× multiplier when >25% of affected customers are top-tier/enterprise
   - **Priority score = Reach × Impact × Revenue weight.** Rank descending. This is deliberately RICE-lite: effort and confidence belong to the product team's planning process (**product-requirements**), not the feedback analysis. If the user wants full RICE, add Confidence (100/80/50%) and let them supply Effort.
   Decision point: a theme with 3+ independent churn-signal verbatims jumps to the top regardless of score — annotate it "churn-linked, score overridden."

7. **Select verbatims.** For each top theme choose 2-3 quotes that are: specific (names the workflow, not "it's bad"), attributable to a segment ("Enterprise admin, 14 months tenure"), and ≤40 words (trim with ellipses, never alter meaning). Include at least one from a second channel when available — cross-channel quotes are the strongest evidence. Never fabricate, merge, or paraphrase-as-quote; if no good verbatim exists for a theme, say so.

8. **Write the synthesis report** (see Output format). Lead with the 3-5 headlines, not the methodology.

9. **Close the loop.** Produce two artifacts:
   - **Internal**: route each top theme to an owner (PM, support lead, pricing) with a due date for a disposition decision (build / won't build / needs research) within 2 weeks.
   - **External**: a customer-notification plan. When a reported issue ships, every customer who reported it gets a personal message within 1 week of release (template below). For "won't build" decisions on high-reach requests, recommend an honest public note (changelog or community post) rather than silence — closing the loop on a "no" retains more trust than ghosting. Track loop-closure rate; a healthy program closes the loop on >80% of customers behind shipped themes.

10. **Set the cadence.** Recommend: tag continuously or weekly, synthesize monthly, deep-dive quarterly tied to planning. One-off analyses decay — offer the user the taxonomy file and dataset structure so the next cycle starts warm.

## Frameworks & templates

### Two-level taxonomy template (fill in the blanks)

```
CATEGORY: Bug/Reliability — "Something that worked (or should work) doesn't"
  ├─ crash-error        — App crashes, error screens, failed saves
  ├─ data-integrity     — Wrong/missing/duplicated data
  ├─ sync-delay         — Stale or slow-to-update data across devices/integrations
  └─ intermittent       — Works sometimes; not reliably reproducible

CATEGORY: Missing Capability — "Product can't do a thing the customer needs"
  ├─ export-reporting   — Can't get data out in the shape needed
  ├─ permissions-roles  — Access control granularity
  ├─ bulk-actions       — Can't operate on many records at once
  └─ [your-domain-tag]  — [one-line definition + example item ID]

DIMENSIONS (tag every item with both):
  Sentiment: positive | neutral | negative | mixed
  Type: complaint | feature-request | question | praise | churn-signal
```

### Worked theme entry (what step 5-7 output looks like)

```
THEME: Export & reporting gaps (Missing Capability > export-reporting)
Items: 47 (11% of all feedback) | Unique customers: 38 | Trend: +40% vs. prior quarter
Channels: support 26, sales calls 12, G2 reviews 6, community 3
Severity: S2 (workaround = manual CSV assembly, ~2 hrs/week per admin per verbatims)
Reach 3 (9% of customers) × Impact 3 × Revenue 1.5 (62% enterprise) = SCORE 13.5 — Rank #2
Churn-linked: yes — 2 churn-survey mentions ("left for Looker integration")

Verbatims:
  "Every Monday I rebuild the same pipeline report by hand because I can't
   schedule exports. It's the one thing that makes me look at competitors."
   — Enterprise admin, 14 mo tenure (support ticket T-1042)
  "Loved the product in the demo until they asked about scheduled reporting
   and I had to say we don't have it. Deal went dark." — AE call note (Gong)

Recommended disposition: Build candidate — route to PM Riley, decision due Jul 21.
```

### Close-the-loop message template (external, per customer)

```
Subject: You asked for [feature/fix] — it's live

Hi [First name],

Back in [month], you told us [one-sentence restatement of their specific
feedback — quote their words if possible]. That stuck with us.

As of [release date], [what shipped, in one sentence of customer language,
not release-note jargon]. Here's how to use it: [link or 1-2 steps].

Your feedback directly shaped this. If it doesn't solve what you described,
reply and tell me — I read every response.

[Sender name, real human on product/support]
```

Keep it under 120 words, one CTA, sent from a named person. For "won't build": replace paragraph 2 with the honest reason and what you're doing instead — never "we'll consider it for the future" boilerplate.

### Worked normalization example (step 1-2 in action)

Raw support ticket:

> T-1042 (Jun 3, Enterprise, $48k ARR): "Third time writing in. Exports still
> can't be scheduled so I rebuild reports manually, AND the date picker keeps
> defaulting to the wrong month."

Becomes two rows in the dataset:

| id | channel | segment | tag | sentiment | type | severity input | contact_count |
|---|---|---|---|---|---|---|---|
| T-1042a | support | Ent/$48k | export-reporting | negative | feature-request | S2 (weekly manual work) | 3 |
| T-1042b | support | Ent/$48k | usability > date-picker | negative | complaint | S3 (annoyance) | 1 |

Note: `contact_count: 3` on row a records persistence for severity judgment, but this customer still counts once in export-reporting's unique-customer reach.

### Channel-bias cheat sheet (state these in every report)

| Channel | Over-represents | Under-represents |
|---|---|---|
| Support tickets | Broken things, confused users | Silent churners, happy users |
| Sales call notes | Prospect wishlists, competitor gaps | Current-customer pain |
| App/G2 reviews | Extremes (1★ and 5★), post-incident anger | The satisfied middle |
| NPS/survey comments | Engaged respondents (typical response rate 10-30%) | Disengaged accounts most at risk |
| Community/Discord | Power users, edge cases | Mainstream and new users |

### Severity calibration examples

| Verbatim signal | Severity |
|---|---|
| "We lost a week of entries after the update" | S1 |
| "I export to CSV and fix it in Sheets every week" | S2 |
| "The date picker defaults to the wrong month, mildly annoying" | S3 |
| "Would love a dark mode someday" | S4 |

## Output format

Deliver a single markdown report (offer CSV of the tagged dataset alongside it):

1. **Headline summary** (≤150 words): dataset size, window, channels, top 3 findings, one sentence on the biggest trend change.
2. **Data & method** (short): item counts per channel, de-dup notes, stated channel biases, taxonomy version, tagging agreement rate from the 10% check.
3. **Theme table**: every theme with count, % of items, unique customers, severity, trend arrow, priority score — sorted by score.
4. **Top 5 theme deep-dives**: each in the worked-example format above (quantification + verbatims + recommended disposition).
5. **Sentiment & praise snapshot**: don't bury the positives — top 3 praised aspects with counts (feeds **brand-messaging** and **case-studies**).
6. **Watch list**: themes below the top 5 that are low-count but fast-growing (+50%+ trend) or churn-linked.
7. **Action & loop-closure plan**: owner/date table for internal dispositions; count of customers queued for close-the-loop messages; the message template pre-filled for the #1 theme.
8. **Appendix**: full taxonomy with definitions, and the tagged dataset (or its file path).

## Quality checklist

Pass/fail every item before delivering:

- [ ] Every feedback item has exactly one primary tag, plus sentiment and type dimensions
- [ ] Multi-issue items were split into separate rows, not forced under one tag
- [ ] Repeat contacts from the same customer are collapsed; reach counts unique customers, not messages
- [ ] `Other` tag holds ≤10% of items
- [ ] 10% blind re-tag agreement is ≥85% (or the miss is disclosed in Data & method)
- [ ] Every count in the report is reproducible from the tagged dataset (spot-check 3 themes)
- [ ] Channel bias is stated explicitly in the report, not silently absorbed
- [ ] Severity ratings trace to consequences described in verbatims, not tone
- [ ] Every top-5 theme has 2-3 verbatims, each ≤40 words, unaltered, with segment attribution and source ID
- [ ] Priority ranking shows its arithmetic (Reach × Impact × Revenue weight visible per theme)
- [ ] Churn-linked themes are flagged and top-ranked regardless of score
- [ ] Positive feedback appears in the report (praise snapshot present)
- [ ] Every top theme has a named owner and a disposition due date
- [ ] Close-the-loop plan covers both "shipped" and "won't build" outcomes
- [ ] Report states the time window and total N in the first 150 words

## Common mistakes

- **Counting messages instead of customers.** One furious customer with 9 tickets is not 9 data points. Reach = unique voices; persistence informs severity.
- **Letting support volume set the roadmap.** Support skews toward what's broken for current users; it systematically under-represents why prospects don't buy and why quiet customers churn. Weight channels consciously.
- **Taxonomy sprawl.** 120 tags feels precise and guarantees inconsistent tagging. Fewer, well-defined tags with a disciplined `Other` bucket beat a tag-per-nuance scheme every time.
- **Renaming tags mid-stream.** Every rename severs the trend line. Extend, deprecate-with-mapping, but don't rename casually.
- **Treating feature-request phrasing as the requirement.** "Add a duplicate button" is a proposed solution; tag the underlying job ("re-create similar records fast"). Solution-tagging hides that five differently-worded requests are one theme.
- **Severity by volume.** 40 people mildly annoyed by a date picker (S3) should not outrank 4 people describing data loss (S1). That's why the score multiplies reach by impact instead of using count alone.
- **Cherry-picking verbatims that match the pre-existing roadmap.** Select quotes after ranking themes, from the top themes — not the other way around. If the data contradicts the plan, the report says so.
- **Percentage theater on small N.** "33% of customers want X" from 9 survey responses is 3 people. Below ~30 items per theme comparison, report raw counts and call the finding directional.
- **Analyzing sentiment of questions.** "How do I export?" is not negative feedback about export; it's a docs/onboarding signal. The type dimension exists to keep questions from polluting complaint counts.
- **Ghosting after the ask.** Running a survey or soliciting feedback and never reporting back trains customers to stop responding. Closing the loop — including on "no" — is what keeps response rates alive for the next cycle.
- **One-and-done reports.** A synthesis with no cadence, no owned dispositions, and no reusable taxonomy is a slideshow, not a system. Ship the dataset and taxonomy with the report.
