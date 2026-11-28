---
name: biz-marketing-plan
description: "Builds an annual or quarterly marketing plan end-to-end: derives marketing objectives from business goals via reverse-funnel math, selects channels and splits budget with explicit reasoning, builds a campaign calendar, plans team/agency resourcing, and sets per-channel KPI targets. Use when the user says things like 'create a marketing plan', 'plan next year's (or next quarter's) marketing', 'how should I split my marketing budget', 'which channels should we invest in', 'build our campaign calendar', 'set marketing KPIs and targets', 'plan marketing headcount or agency spend', or 'turn our revenue goal into a marketing plan'."
---

# Marketing Plan

Produce a complete, defensible marketing plan for a year or a quarter: objectives derived from the business goal with explicit funnel math, a channel mix chosen through scored comparison rather than habit, a budget split that survives scrutiny, a campaign calendar the team can actually execute, resourcing that matches the calendar, and per-channel KPI targets with kill/scale rules. The finished plan should let a CEO see exactly how marketing spend converts into revenue, and let a marketer know what to do in week one.

## When to use this skill

Use this skill when the user needs a top-level marketing plan for a defined period (annual or quarterly), a budget allocation across channels, a channel selection decision, or marketing targets tied to a revenue goal.

Do NOT use this skill for:
- **Launching a new product or entering a new market** → use `go-to-market` (strategy) or `product-launch` (execution of one launch).
- **A deep plan for one channel** → use `content-strategy`, `social-media-strategy`, `email-marketing`, `google-ads`, or `meta-ads`.
- **Company-wide goal setting** → use `okrs-and-goals`; this skill consumes those goals as input.
- **Building the reporting dashboard for the plan** → use `kpi-dashboard-design`; this skill only sets the targets.
- **Understanding the market or customer before planning** → use `market-research`, `customer-personas`, or `competitor-analysis`; if the user lacks these inputs, proceed with stated assumptions and flag them.
- **A full business plan or investor document** → use `business-plan` or `pitch-deck`.

## Inputs to gather

Ask for these up front. Where the user does not know, use the listed default and label it as an assumption in the plan.

1. **Business goal for the period** — revenue target, new-customer count, or other. No default; if truly unknown, ask for last period's revenue and assume 30% growth, flagged clearly.
2. **Timeframe** — default: annual plan with quarterly breakdown. If the user says "this quarter," build one quarter with monthly breakdown.
3. **Business model and sales motion** — B2B sales-led, B2B product-led, B2C subscription, e-commerce, marketplace, local/service. This drives every benchmark below.
4. **Average deal size** — ACV for B2B, AOV for e-commerce. Ask; do not default silently. If unknown, help estimate from pricing.
5. **Marketing budget** — if unknown, propose: established B2B 5–10% of revenue target, B2C/e-commerce 10–15%, venture-backed growth stage 15–30%. State which you used.
6. **Current funnel conversion rates** — defaults if unknown: visitor→lead 1–3% (B2B) or 2–4% add-to-cart-to-purchase path (e-com); lead→MQL 30%; MQL→SQL 25–35%; SQL→closed-won 20–25%; e-commerce sitewide conversion 1.5–3%.
7. **Marketing-sourced share of pipeline** — defaults: B2B sales-led 30–50%, PLG 70–90%, e-commerce/B2C ~100%.
8. **Last period's channel performance** — spend, leads/revenue, and CAC by channel if available. If none exists, note the plan is a zero-baseline plan and weight faster-feedback channels.
9. **Team** — headcount, skills, agency/freelancer relationships, and hours realistically available for marketing.
10. **Constraints** — brand/compliance restrictions, seasonality (e.g., B2B dead zones in late Aug and late Dec; e-com Q4 peak), geographic focus, sales team capacity to handle leads.

## Process

1. **Translate the business goal into a marketing-sourced revenue number.** Multiply the revenue target by the marketing-sourced share (input 7). Example: $3M new revenue × 40% marketing-sourced = $1.2M marketing must generate. Confirm this number with the user before proceeding — everything downstream depends on it.

2. **Run the reverse-funnel math.** Work backward from revenue to traffic using conversion rates (input 6). Show every step (see the worked example in Frameworks). Sanity-check the top: if the math demands 500,000 monthly visits and the site gets 8,000, the plan must either lower the marketing-sourced share, raise conversion rates (CRO workstream), raise deal size, or flag the goal as unrealistic. Say so explicitly rather than burying it.

3. **Set 3–5 marketing objectives.** Each must be measurable, time-bound, and traceable to a funnel gap found in step 2. Format: "Grow [metric] from [baseline] to [target] by [date]." One objective should almost always be a pipeline/revenue number; the rest cover the biggest leverage points (traffic, conversion rate, retention/expansion, brand awareness only if measurable).

4. **Audit the current channel mix.** For each active channel, compute CAC (or cost per SQL) and trend. Classify each: **Scale** (CAC under target, headroom exists), **Fix** (was working, degraded), **Maintain** (working, near saturation), **Kill** (CAC >2× target after fair spend). If no history exists, skip to step 5 and note it.

5. **Select channels with the scoring matrix.** Score 5–8 candidate channels using the matrix in Frameworks. Decision points:
   - Need results inside 90 days → weight paid search, paid social, outbound-support content, partnerships; do not lean on SEO (4–12 months to meaningful traffic) or brand plays.
   - 12+ month horizon and stable budget → fund SEO/content and community now; they compound.
   - High-ACV B2B (>$25k ACV) → LinkedIn ads, ABM, events, webinars outrank broad paid social.
   - Sub-$100 AOV e-commerce → Meta/TikTok ads, email/SMS flows, influencer seeding outrank LinkedIn and long-form content.
   - Pick 3–5 channels for most budgets under $1M/year. More than 6 channels on a small team means none get done well.

6. **Allocate the budget.** Apply 70/20/10: ~70% to proven channels (top matrix scores or "Scale" from audit), ~20% to 1–2 promising bets, ~10% to experiments. Enforce minimum viable spend: a paid channel needs $2,000–3,000/month minimum to learn anything (ad platforms optimize poorly below ~50 conversions/month) — if the allocation falls below that, cut the channel entirely instead of spreading thin. Separate **program spend** (ads, tools, contractors, events) from **people cost**; if the user gave one budget number, ask which it is. Typical split at small companies: 40–60% of total marketing cost is people. Cross-check: total program budget ÷ target new customers = implied CAC. Verify implied CAC ≤ gross margin × LTV ÷ 3 (or ACV × 1 with <12-month payback for SaaS). If it fails, the budget and goal are incompatible — surface this.

7. **Build the campaign calendar.** Structure per quarter: one quarterly theme, one flagship campaign (launch, event, big content asset, seasonal push), plus always-on layers (SEO/content cadence, paid, email, social). Rules: never stack two flagship campaigns in the same month; place e-commerce peak pushes 4–6 weeks before the buying moment; leave 2 weeks of slack per quarter for reactive work; every calendar item names an owner and a primary KPI.

8. **Plan resourcing.** Estimate hours per calendar item, sum by skill (content, design, paid media, ops/analytics), and compare to team capacity (input 9). Fill gaps with: hire (when a skill is needed 30+ hrs/week and ongoing), agency (paid media management typically 10–20% of ad spend or $2,500–10,000/month retainer; full-service $5,000–20,000/month), or freelance (content writing $0.30–1.00/word or $300–1,500/article; design $50–150/hr). Rough capacity benchmark: one full-time marketer can own 2–3 channels plus reporting; a solo marketer plans for ~30 productive campaign hours/week after meetings and ops.

9. **Set KPI targets per channel.** Each channel gets one lagging KPI (revenue, SQLs, or CAC) and 1–2 leading KPIs (traffic, CTR, CPL, email list growth). Phase monthly targets with a ramp — do not divide the annual number by 12. Typical ramp: new paid channels reach steady state in month 2–3; SEO contribution weights toward H2 (e.g., 15/25/60% across the first three quarters of contribution). Include the kill/scale rule per channel: e.g., "Pause if CAC >2× target after 90 days and ≥$10k spend; add 25% budget if CAC <75% of target for 2 consecutive months."

10. **Add risks and review cadence.** List the top 3–5 risks (single-channel dependence, key-person risk, seasonality, platform policy/CPM inflation — Meta CPMs commonly rise 30–60% in Q4) with mitigations. Set the operating rhythm: weekly leading-indicator check, monthly KPI review vs. target, quarterly reallocation where any channel's budget can move by up to 30% based on performance.

11. **Assemble the deliverable** per Output format, run the Quality checklist, and present the one-page summary first with the full plan beneath it.

## Frameworks & templates

### Reverse-funnel math — worked example (B2B SaaS)

Goal: $600k new ARR from marketing this year. ACV $12,000.

| Stage | Rate applied | Required volume |
|---|---|---|
| New ARR from marketing | — | $600,000 |
| Closed-won deals | ÷ $12,000 ACV | 50 deals |
| SQLs (sales-qualified) | ÷ 25% win rate | 200 SQLs |
| MQLs | ÷ 30% MQL→SQL | 667 MQLs |
| Leads (form fills, trials) | ÷ 35% lead→MQL | ~1,900 leads |
| Website visits | ÷ 2% visitor→lead | ~95,000 visits (~7,900/mo) |

Budget cross-check: $300k program budget ÷ 50 deals = $6,000 implied CAC → payback at $12k ACV is 6 months if gross margin ~80%. Passes.

### Reverse-funnel math — worked example (e-commerce)

Goal: $1.2M revenue this year, ~100% marketing-sourced. AOV $80, so ~15,000 orders. Assume 30% of orders come from repeat buyers via email/SMS flows, leaving 10,500 first-time orders from acquisition.

| Stage | Rate applied | Required volume |
|---|---|---|
| First-time orders | — | 10,500 |
| Sessions needed | ÷ 2% sitewide conversion | 525,000 sessions (~43,750/mo) |
| From paid (60% of sessions) | @ $0.70 avg cost/session | 315,000 sessions ≈ $220k ad spend |
| From organic + email + social (40%) | — | 210,000 sessions |

Cross-check: $220k paid spend ÷ (10,500 × 60% = 6,300 paid-attributed orders) = $35 CAC on an $80 AOV — only viable if contribution margin per order exceeds $35 or repeat rate lifts LTV past ~$110. If not, the plan must raise AOV (bundles), raise conversion (see `landing-page-cro`), or shift mix toward owned channels.

### Channel scoring matrix

Score each candidate 1–5 per criterion; multiply by weight; rank by total. Fund the top 3–5.

| Channel | Audience fit (×3) | Expected CAC (×3) | Time to results (×2) | Team capability (×2) | Scalability (×1) | Weighted total |
|---|---|---|---|---|---|---|
| Google Search Ads | 5 | 3 | 5 | 4 | 3 | 45 |
| SEO + content | 5 | 5 | 1 | 4 | 5 | 45 |
| LinkedIn Ads | 4 | 2 | 4 | 3 | 3 | 35 |
| Webinars/partnerships | 4 | 4 | 3 | 2 | 2 | 36 |
| Meta Ads | 2 | 3 | 4 | 3 | 4 | 33 |

Scoring anchors — Expected CAC: 5 = well under target, 1 = likely >2× target. Time to results: 5 = <30 days, 3 = 1–3 months, 1 = 6+ months. Use realistic channel benchmarks when scoring: Google Search CTR 3–6%, CPC $2–6 B2C / $4–12 B2B, landing conversion 3–7%; Meta CPM $8–20, CTR 0.9–1.6%; LinkedIn CPC $8–15, CTR 0.4–0.7%; email to owned list: open 20–35%, click 2–4%; SEO: 4–12 months to meaningful organic traffic.

### Budget allocation template (fill in)

| Channel | Bucket (70/20/10) | Annual $ | Monthly $ | % of program budget | Expected output | Target CAC/CPL | Kill/scale rule |
|---|---|---|---|---|---|---|---|
| ______ | Proven | $______ | $______ | ___% | ___ SQLs | $____ | Pause if CAC >2× target after 90 days & $__k spend |
| ______ | Proven | $______ | $______ | ___% | | | |
| ______ | Promising | $______ | $______ | ___% | | | |
| ______ | Experiment | $______ | $______ | ___% | | | |
| **Total program** | | **$______** | | 100% | | Implied CAC = budget ÷ target customers = $____ | |

People cost (salaries, agency retainers, freelance): $______ — reported separately from program spend.

### Budget allocation — filled example ($300k program budget, B2B SaaS from the funnel example)

| Channel | Bucket | Annual $ | Monthly $ | % | Expected output | Kill/scale rule |
|---|---|---|---|---|---|---|
| Google Search Ads | Proven | $120,000 | $10,000 | 40% | 90 SQLs @ ≤$1,350 CPL-to-SQL | Pause any campaign at 2× target CPA after $8k spend |
| SEO + content | Proven | $84,000 | $7,000 | 28% | 60 SQLs (weighted to H2) | Review at month 6: ≥40% organic traffic growth or reallocate |
| Webinars + partnerships | Promising | $45,000 | $3,750 | 15% | 30 SQLs, 2 co-marketing deals | Kill format if <80 registrants by 3rd webinar |
| LinkedIn Ads | Promising | $30,000 | $2,500 | 10% | 15 SQLs | 90-day test; CAC ≤ $8k or stop |
| Experiments (podcast tour, G2 profile, retargeting) | Experiment | $21,000 | $1,750 | 7% | Learning + 5 SQLs | Each experiment gets one 60-day cycle, then decide |
| **Total** | | **$300,000** | **$25,000** | 100% | **200 SQLs** | Implied CAC $6,000 ✓ |

### Campaign calendar template (one quarter shown)

| | Month 1 | Month 2 | Month 3 |
|---|---|---|---|
| **Quarterly theme** | "________" (one message the quarter reinforces) | | |
| **Flagship campaign** | — | [Campaign name] — Owner: ___ — KPI: ___ | (follow-up/retarget) |
| **Always-on: content/SEO** | 4 articles + 1 pillar page | 4 articles | 4 articles + refresh top 5 posts |
| **Always-on: paid** | Google Search live | + add LinkedIn test ($3k) | Scale winner +25% |
| **Always-on: email** | 2 sends + nurture live | 2 sends | 2 sends + re-engagement |
| **Events/other** | — | Webinar (reg target: ___) | — |

### KPI target sheet template

| Channel | Leading KPI (weekly) | Lagging KPI (monthly) | Q1 | Q2 | Q3 | Q4 | Owner |
|---|---|---|---|---|---|---|---|
| Google Ads | CPL ≤ $____ | ___ SQLs @ CAC ≤ $____ | | | | | |
| SEO/content | ___ organic visits | ___ leads | | | | | |
| Email | list +___/mo, CTR ≥ __% | ___ MQLs | | | | | |
| **Total** | | ___ SQLs → $___ pipeline | | | | | |

### Resourcing plan template

| Skill area | Hours/month needed (from calendar) | Hours/month available in-house | Gap | Fill decision | Est. cost |
|---|---|---|---|---|---|
| Content writing | ___ | ___ | ___ | Freelance @ $____/article × __/mo | $____/mo |
| Paid media management | ___ | ___ | ___ | Agency @ __% of spend or $____/mo retainer | $____/mo |
| Design/creative | ___ | ___ | ___ | Freelance @ $__–__/hr | $____/mo |
| Marketing ops & analytics | ___ | ___ | ___ | In-house / fractional | $____/mo |
| **Total people cost** | | | | | **$____/mo** |

Decision guide: hire full-time when a skill is needed 30+ hrs/week indefinitely; use an agency for paid media below ~$50k/month spend (typical fee 10–20% of spend, $2,500–10,000/month minimum); use freelancers for spiky creative work.

### Objective format

"Grow [metric] from [baseline] to [target] by [date], measured in [tool]." Example: "Grow marketing-sourced pipeline from $80k/quarter to $150k/quarter by Q4, measured in HubSpot."

Sample objective set for the SaaS example:
1. Generate $600k marketing-sourced ARR (200 SQLs) by Dec 31, measured in HubSpot.
2. Grow organic sessions from 3,100/mo to 8,000/mo by Q4, measured in GA4.
3. Lift visitor→lead conversion from 1.4% to 2.0% by end of Q2 via CRO sprints, measured in GA4.
4. Keep blended CAC ≤ $6,000 every quarter, measured in the monthly budget-vs-SQL report.

### Adapting for a quarterly plan

When the user asks for one quarter instead of a year: (a) inherit or confirm the annual context first — a quarter planned in a vacuum optimizes the wrong thing; (b) break the calendar down to weeks, not months; (c) restrict the 20% "promising" bucket to at most one new channel — a quarter is too short to evaluate two; (d) set weekly leading-indicator targets and a mid-quarter (week 6–7) checkpoint where up to 20% of budget can move; (e) exclude channels whose time-to-results exceeds the quarter (new SEO investment, brand campaigns) unless the user confirms they are funding beyond the quarter.

## Output format

Deliver a single markdown document titled "[Company] Marketing Plan — [Period]" containing, in order:

1. **One-page executive summary** — the business goal, marketing-sourced revenue target, total budget (program + people), the 3–5 channels chosen with one-line rationale each, and the top-line KPI table. Must stand alone.
2. **Objectives** — 3–5 objectives in the standard format, each linked to the funnel gap it closes.
3. **Funnel math** — the full reverse-funnel table with every assumption labeled as measured or assumed.
4. **Channel strategy** — the scored matrix, channels chosen and rejected (with reasons), and the audit classification of existing channels.
5. **Budget** — the allocation table, program-vs-people split, and the implied-CAC cross-check.
6. **Campaign calendar** — quarterly view for annual plans, monthly/weekly for quarterly plans.
7. **Resourcing plan** — hours by skill vs. capacity, hire/agency/freelance decisions with cost estimates.
8. **KPI targets** — per-channel sheet with monthly/quarterly phasing and kill/scale rules.
9. **Risks & review cadence** — top risks with mitigations; weekly/monthly/quarterly operating rhythm.
10. **Assumptions log** — every default or estimate used, so the plan can be corrected as real data arrives.

## Quality checklist

Pass every item before delivering:

- [ ] The marketing revenue target is explicitly derived from the business goal with a stated marketing-sourced percentage.
- [ ] Reverse-funnel math is shown stage by stage, and every conversion rate is labeled measured or assumed.
- [ ] Required traffic/lead volume was sanity-checked against current baseline; any >3× jump is flagged with how it will be achieved.
- [ ] There are 3–5 objectives, each with baseline, target, date, and measurement tool.
- [ ] No more than 6 funded channels; each was selected via the scoring matrix or audit, not asserted.
- [ ] Every paid channel gets ≥ $2,000/month or was cut — no token allocations.
- [ ] Budget follows roughly 70/20/10 across proven/promising/experimental, or deviates with a stated reason.
- [ ] Implied CAC (program budget ÷ target customers) passes the LTV:CAC ≥ 3 or <12-month payback check, or the conflict is flagged.
- [ ] Program spend and people cost are separated and both totaled.
- [ ] Calendar has no month with two flagship campaigns, and every item has an owner and a KPI.
- [ ] Resourcing hours were compared against actual team capacity; gaps have a named fill (hire/agency/freelance) with cost.
- [ ] Every channel has one lagging and at least one leading KPI, with targets phased on a ramp — not annual ÷ 12.
- [ ] Every channel has an explicit kill/scale rule with a spend threshold and time window.
- [ ] SEO/content targets show negligible contribution before month 4 of investment.
- [ ] An assumptions log lists every default used.

## Common mistakes

- **Peanut-butter budgeting** — $500/month across ten channels. Below ~$2k/month a paid channel never exits the learning phase; below ~50 conversions/month the ad platform can't optimize. Fewer channels, funded properly.
- **Annual ÷ 12 targets** — new channels ramp for 60–90 days and SEO for 4–12 months. Flat monthly targets guarantee a "failing" Q1 and a sandbagged Q4. Phase the ramp.
- **Funnel math with silent assumptions** — presenting a 3% visitor→lead rate as fact when the real rate is 0.8% makes the whole plan fiction. Label every number measured or assumed.
- **MQL targets sales never agreed to** — if sales doesn't accept the MQL definition, marketing "hits target" while pipeline misses. Get the definition and the MQL→SQL handshake into the plan.
- **Expecting SEO in Q1** — funding content but judging it on 90-day lead volume kills the channel before it compounds. Judge early content on output and rankings, not leads.
- **Forgetting people cost** — a "$200k marketing budget" that's actually $120k of salaries leaves $80k of program spend, not $200k. Always split the two.
- **A launch every month** — calendars built for an imaginary team. Map hours to capacity; one flagship campaign per quarter per marketer is realistic.
- **Copying the competitor's channel mix** — they have different CAC tolerance, brand equity, and team. Use `competitor-analysis` for intelligence, the scoring matrix for decisions.
- **Zero experimentation (or all experimentation)** — 100% proven channels means CAC inflation with no successor channel; 50% experiments means missing this year's number. Hold the 70/20/10 line.
- **No kill rules** — without a pre-committed threshold ("2× target CAC after 90 days and $10k"), losing channels run all year on sunk-cost hope.
- **Ignoring Q4 CPM inflation** — e-commerce plans that assume flat ad costs break in November when Meta CPMs jump 30–60%. Budget the seasonality in.
- **Treating the plan as frozen** — a plan without a monthly review and quarterly reallocation rule (±30% per channel) is obsolete by March. Ship the operating rhythm with the plan.
