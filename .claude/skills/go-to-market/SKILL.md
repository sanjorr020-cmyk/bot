---
name: go-to-market
description: "Builds a complete go-to-market plan for a product launch or new market entry: segmentation and beachhead selection, positioning, pricing/packaging alignment, channel strategy, a phased launch plan, and success metrics with kill criteria. Use when the user asks to create a GTM strategy, plan how to take a product to market, enter a new market or geography, pick a beachhead or first target segment, choose sales and marketing channels, decide between product-led and sales-led motions, write a launch positioning statement, define launch success metrics or kill criteria, or asks 'who should we sell this to first and how'."
---

# Go-to-Market Strategy

Produce a decision-complete go-to-market plan that answers, in order: who exactly buys first (beachhead), why they buy this instead of what they do today (positioning), what they pay and for what (pricing/packaging), how the product reaches them (channels and motion), in what sequence the launch unfolds (phases with gates), and how the team knows it is working or failing (metrics with kill criteria). The output is a plan a founder or GTM lead can execute Monday morning, not a strategy essay. Every recommendation must be a choice with a stated rejection of the alternatives.

## When to use this skill

Use this skill when the user needs:
- A GTM plan for a new product, feature line, or company
- A market-entry plan for an existing product moving into a new segment, vertical, or geography
- A decision on GTM motion (self-serve/PLG vs. inside sales vs. field sales vs. partner-led)
- Beachhead selection when the team is spread across too many segments
- A launch sequenced into phases with go/no-go gates and kill criteria

Do NOT use this skill for adjacent jobs — route instead:
- Launch-week execution mechanics (announcement copy, Product Hunt, email sequences, launch-day checklist) → **product-launch**
- Ongoing annual/quarterly marketing budget and calendar → **marketing-plan**
- Deep pricing research (willingness-to-pay surveys, Van Westendorp, price-model redesign) → **pricing-strategy**; this skill only aligns existing or draft pricing with the GTM motion
- Detailed buyer persona documents → **customer-personas** (this skill defines segments; personas go deeper on individuals)
- Full competitive teardown → **competitor-analysis**; market sizing research → **market-research**
- Messaging house, voice, and taglines → **brand-messaging** (this skill produces the positioning statement that feeds it)
- Building the pipeline stages and CRM process the GTM plan implies → **sales-pipeline-management**

## Inputs to gather

Ask for these before drafting. Where the user does not know, use the stated default and flag it as an assumption in the plan.

1. **Product and stage**: What does it do, in one sentence? Is this pre-launch, in beta, or an existing product entering a new market? Default: pre-launch v1.
2. **Evidence of demand**: Paying customers, pilots, waitlist size, discovery interviews done? Default: assume <10 design partners and treat the beachhead as a hypothesis to validate in Phase 1.
3. **Candidate segments**: Which 2-5 segments are under consideration? If the user says "everyone," extract candidates by asking who has the most painful, most frequent version of the problem. Default: derive 3 candidates from the product's strongest use case.
4. **Price point / ACV**: Current or intended price. This single number constrains channel choice more than anything else. Default: estimate from closest comparable product and flag loudly.
5. **Resources**: Team size, roles (any sales reps? content? paid budget?), monthly GTM budget, runway in months. Default: 2 GTM-capable people, $5k/month budget, 12 months runway.
6. **Sales cycle constraints**: Regulated industry? Procurement-heavy buyers? Security review requirements (SOC 2)? Default: none.
7. **Competitive alternative**: What do target customers do today — a named competitor, spreadsheets, an internal tool, or nothing? Default: "status quo / manual process" (the most common real competitor).
8. **Timeline and success bar**: When must the launch happen, and what number makes leadership call it a win at 90 days? Default: launch in 8 weeks; success = 10 paying customers or $10k MRR at day 90, scaled to price point.

If the user cannot answer #2 and #7 at all, pause and recommend running **market-research** or 10 discovery interviews first — a GTM plan built on zero customer contact is a fiction. You can still draft the plan, but mark it "hypothesis-grade" at the top.

## Process

1. **Frame the market and size it roughly.** State TAM/SAM/SOM in one paragraph each using a bottoms-up count: (number of target accounts or users) × (realistic ACV). Do not spend more than 10% of the plan on sizing; GTM plans die from bad targeting, not bad TAM math. SOM should be what the beachhead can yield in 12-18 months — typically 0.5-2% of SAM for a new entrant.

2. **Score candidate segments and pick one beachhead.** Build the Beachhead Scoring Matrix (template below) across 6 criteria, weighted. The winner must satisfy the beachhead test: (a) members feel the pain acutely enough to buy a v1, (b) they talk to each other (associations, communities, shared conferences — word of mouth compounds), (c) they are reachable through 1-2 channels the team can actually operate, (d) the segment is winnable — small enough to dominate: aim for a segment where 20-30% share is plausible within 18 months, usually 500-5,000 target accounts for B2B or a community of 50k-500k for consumer. If two segments tie within 5%, pick the one with existing customer evidence. Name 1-2 explicit "later" segments so stakeholders see them parked, not ignored.

3. **Write the positioning statement.** Use the Moore template (below). The competitive alternative must be what the beachhead actually uses today, not the scariest logo in the space. Derive 3 supporting proof points (metric, customer quote, or capability demo). This statement is the source of truth for the landing page, sales deck, and ads — hand it to **brand-messaging** for expansion into a full messaging house.

4. **Align pricing and packaging with the motion.** Do not design pricing from scratch (that's **pricing-strategy**); instead verify four alignment checks and fix violations:
   - **Channel math**: ACV must support the channel. Rules of thumb — self-serve/PLG works below ~$5k ACV; inside sales (SDR + AE, demos over Zoom) needs $5k-$50k ACV; field sales needs $50k+ ACV; partner/channel resale needs enough margin to give partners 20-30%.
   - **CAC payback**: target <12 months for SMB, <18 months for mid-market, <24 months for enterprise. Estimate CAC per channel in step 5 and check it here.
   - **Packaging ladder**: a low-friction entry point (free trial 14 days, freemium tier, or pilot) plus one obvious upgrade trigger tied to value (seats, usage, or a gated feature the beachhead needs at scale).
   - **Beachhead-shaped tiers**: the mid tier should read like it was written for the beachhead persona. If the beachhead maps to the cheapest tier, the segment or the pricing is wrong.

5. **Choose channels — two primary, one experimental.** List every plausible channel, then cut to 2 primary + 1 experimental. For each surviving channel, state: expected CAC range, time-to-first-results, monthly cost floor, and why it reaches the beachhead specifically. Typical time-to-results: paid search/social 2-6 weeks; outbound email/LinkedIn 4-8 weeks; SEO/content 4-9 months; community/events 2-4 months; partnerships 3-6+ months. A pre-launch team should have at least one channel with <8 week feedback loops. Reference execution skills by name (e.g., **cold-email-outreach**, **google-ads**, **linkedin-content**, **partnership-development**) rather than detailing tactics here.

6. **Define the GTM motion and the human process.** State the motion in one line (e.g., "PLG with sales-assist above 10 seats"). Sketch the funnel stages from first touch to closed-won, who owns each stage, and target conversion rates per stage (see benchmark table below). Flag what must exist before launch: demo environment, pricing page, 3 case studies or design-partner quotes, security one-pager if selling to mid-market+.

7. **Build the phased launch plan with gates.** Use the 4-phase template below. Every phase gets: duration, objective, activities, exit gate (a measurable go/no-go), and what changes if the gate fails. Phases overlap in preparation but gates are sequential — Phase 2 does not start on a calendar date, it starts when Phase 1's gate passes.

8. **Set success metrics and kill criteria.** Choose one North Star metric plus 4-6 input metrics mapped to funnel stages. For each, set a 30/60/90-day target and a kill/pivot threshold (typically: <40% of target at the checkpoint after channels have had their minimum ramp time). Kill criteria must name the decision they trigger: kill the channel, change the segment, reprice, or stop the launch. A plan without pre-committed kill numbers will be defended emotionally instead of evaluated.

9. **Adapt for new-market entry (when applicable).** If this is an existing product entering a new geography or vertical rather than a v1 launch, add these to the plan:
   - **Transferability audit**: list which proof points, case studies, and integrations carry over to the new market and which are void (a US logo wall means little to DACH buyers; a healthcare case study means little to fintech). Plan to rebuild 2-3 market-native proof points in Phase 1.
   - **Localization floor**: for geographic entry, minimum viable localization is pricing in local currency, legally compliant contracts/data handling (GDPR for EU), and sales coverage in the local time zone. Full language localization is only a Phase 0 requirement if <50% of the buyer group works comfortably in English.
   - **Entry mode decision**: direct (own reps/marketing), partner-led (local resellers — see **partnership-development**), or acquisition of a local player. Default to direct for ACV <$25k, partner-led when local relationships gate deals or ACV supports 20-30% margin sharing.
   - **Re-run the beachhead matrix inside the new market** — the winning segment at home is frequently not the winning segment abroad because reachability and whitespace scores change.

10. **Stress-test and assemble.** Run the Quality checklist below. Write the one-page executive summary last. Deliver in the Output format.

## Frameworks & templates

### Bottoms-up TAM/SAM/SOM (worked example)

Always size bottoms-up (counts × price), never top-down ("1% of a $40B market"). Example for the conflict-checking tool below:

- **TAM**: ~48,000 US law firms with 2+ attorneys × $6k ACV ≈ **$288M**
- **SAM**: ~9,500 firms of 5-25 attorneys in states where bar rules make manual conflict checks a malpractice exposure × $6k ≈ **$57M**
- **SOM (18 months)**: 1.5% of SAM ≈ 140 firms ≈ **$850k ARR** — this number must reconcile with the Phase 2-3 funnel math (e.g., 140 wins ÷ 25% demo-close rate = 560 demos needed ≈ 8/week; check that against channel capacity)

If SOM implies a weekly funnel volume the chosen channels cannot produce, shrink the SOM claim or add channel capacity — never leave the contradiction in the plan.

### GTM motion decision guide

Answer four questions in order; the first decisive answer picks the motion:

1. **Can a user reach first value alone in <30 minutes, without data migration or IT?** Yes → PLG/self-serve core; add sales-assist only above a seat/usage threshold.
2. **Is ACV ≥$5k AND does buying require convincing 2+ stakeholders?** Yes → sales-led (inside sales up to ~$50k, field above).
3. **Do local relationships, compliance, or implementation gate the deal?** Yes → partner/channel-led; budget 20-30% margin for partners and 3-6 months of enablement before revenue.
4. **None decisive?** Default to founder-led sales for the first 10-25 customers regardless of long-term motion — it maximizes learning per deal and is the correct Phase 1 motion for almost every new product.

Hybrids are normal at scale but poison a launch: pick ONE motion for Phases 0-2 and state when the second motion turns on (e.g., "sales-assist activates at 10+ seats, expected Phase 3").

### Beachhead Scoring Matrix (fill-in, with worked example)

Score each candidate 1-5 per criterion; multiply by weight; highest total wins.

| Criterion (weight) | Seg A: Boutique law firms 5-25 attys | Seg B: In-house legal teams | Seg C: Solo attorneys |
|---|---|---|---|
| Pain intensity — urgent, budgeted problem? (25%) | 5 | 3 | 4 |
| Reachability — 1-2 operable channels? (20%) | 4 (state bar assns, 2 conferences) | 2 (gated by procurement) | 3 |
| Willingness/ability to pay at target ACV (20%) | 4 | 5 | 2 |
| Word-of-mouth density — do they talk? (15%) | 5 | 2 | 3 |
| Competitive whitespace in segment (10%) | 4 | 2 | 3 |
| Product fit today, no roadmap needed (10%) | 4 | 2 | 5 |
| **Weighted total** | **4.45 — winner** | 2.85 | 3.25 |

Record the runner-up as the named Phase 3 expansion segment.

### Positioning statement (Moore template)

> For **[beachhead segment]** who **[pressing problem/trigger]**, **[product]** is a **[category]** that **[key benefit stated as an outcome]**. Unlike **[the real competitive alternative]**, we **[primary differentiator]**.

Worked example:
> For boutique law firms of 5-25 attorneys who lose 6+ billable hours a week to manual conflict checks, ClearConflict is a conflict-checking automation tool that clears new matters in under 5 minutes. Unlike the paralegal-plus-spreadsheet process firms use today, we search every past matter, email, and contact record automatically and produce an audit trail malpractice insurers accept.

Proof points to attach: one quantified metric ("cuts conflict checks from 45 min to 5"), one named design-partner quote, one differentiating capability demoable in 60 seconds.

### Channel–ACV fit (rule of thumb)

| ACV | Viable motions | Typical blended CAC target |
|---|---|---|
| <$1k | Pure self-serve, PLG, content/SEO, community | <$300 |
| $1k-$5k | Self-serve + email nurture, light sales-assist | $300-$1.5k |
| $5k-$25k | Inside sales, outbound, webinars, paid search | $1.5k-$8k |
| $25k-$100k | Inside/field hybrid, ABM, events, partners | $8k-$30k |
| $100k+ | Field sales, exec relationships, analyst relations | $30k+ |

If the plan's channel row and ACV row don't intersect, change one of them before proceeding.

### Phased launch plan template

| Phase | Duration | Objective | Exit gate (go/no-go) |
|---|---|---|---|
| 0 — Foundation | 2-4 wks | Positioning locked, pricing page live, demo ready, 3 design-partner proof points | Internal: 5 cold prospects can repeat the value prop back after a 2-min pitch |
| 1 — Beachhead validation | 4-8 wks | Sell manually to 10-25 beachhead accounts via founder-led outreach | ≥20% of qualified conversations advance to trial/pilot; ≥3 paid conversions or signed pilots |
| 2 — Channel launch | 8-12 wks | Turn on the 2 primary channels; public launch moment (hand execution to **product-launch**) | CAC within 2× of target and trending down; ≥40% of 90-day revenue/user goal |
| 3 — Scale or expand | Ongoing | Double down on the winning channel; open runner-up segment or add sales hire | CAC payback under threshold for 2 consecutive months |

Gate failure playbook: fail Phase 1 → revisit segment scoring before spending on channels; fail Phase 2 on one channel → reallocate to the other, promote the experimental channel; fail Phase 2 on both → reprice or reposition before adding spend.

### Week-by-week schedule, Phases 0-1 (worked example, 10 weeks)

| Week | Workstream | Deliverable / target |
|---|---|---|
| 1 | Positioning + list build | Moore statement drafted; 150-account beachhead list with contact data |
| 2 | Assets | Pricing page live; 10-slide sales narrative; 60-second demo recorded |
| 3 | Message test | 5 friendly pitches delivered; value prop repeat-back test passed (Phase 0 gate) |
| 4-5 | Founder outbound wave 1 | 50 accounts contacted (see **cold-email-outreach** / **linkedin-outreach**); target 4-8 replies |
| 6 | First conversations | 5+ qualified conversations held; objections logged verbatim |
| 7 | Iterate | Positioning/pricing adjusted from objection log; wave 2 to 50 accounts |
| 8-9 | Pilots | 3-5 trials or pilots running with success criteria signed |
| 10 | Gate review | Phase 1 gate: ≥20% conversation→trial, ≥3 paid/signed → go to Phase 2 |

Adjust volumes to price point: at $50k+ ACV, halve the account counts and double the durations; at <$1k ACV, replace outbound waves with a waitlist/community build and test landing-page conversion (2-5% visitor→trial is the healthy band).

### Metrics and kill criteria table (worked example, $6k ACV inside-sales motion)

| Metric | 30-day | 60-day | 90-day | Kill/pivot threshold |
|---|---|---|---|---|
| North Star: new MRR | $1.5k | $5k | $12k | <$5k at day 90 → pause spend, rerun segment review |
| Qualified conversations/wk | 5 | 10 | 15 | <4/wk at day 45 → swap primary channel |
| Conversation → trial | 25% | 30% | 30% | <15% sustained → positioning rewrite |
| Trial → paid | 15% | 20% | 25% | <10% at day 60 → pricing/packaging review |
| Blended CAC | — | <$6k | <$4k | >$8k at day 90 → kill weakest channel |

Funnel benchmarks to calibrate targets: B2B SaaS visitor→trial 2-5% (landing page dependent — see **landing-page-cro**); free trial→paid 8-20% (opt-out cards higher); freemium→paid 2-5%; cold outbound reply rate 2-8%; demo→close for inside sales 15-30%.

## Output format

Deliver one markdown document titled "**Go-to-Market Plan: [Product] → [Beachhead]**" with these sections in order:

1. **Executive summary** — ≤200 words: beachhead, positioning statement, motion, 2 primary channels, 90-day success number, top risk. Written last, placed first.
2. **Market & beachhead** — TAM/SAM/SOM paragraph, scoring matrix, chosen beachhead with the three-sentence rationale, named "later" segments.
3. **Positioning** — Moore statement, 3 proof points, one-line objection responses to the 3 most likely objections.
4. **Pricing & packaging alignment** — tier table, entry point, upgrade trigger, the four alignment checks with pass/fail.
5. **Channels & motion** — chosen channels table (CAC range, time-to-results, monthly floor, owner), motion statement, funnel stages with target conversion rates, pre-launch asset checklist.
6. **Phased launch plan** — the four-phase table plus a week-by-week schedule for Phases 0-1 only (later phases stay gate-driven, not calendar-driven).
7. **Metrics & kill criteria** — the metrics table with all thresholds and the named decision each kill number triggers.
8. **Assumptions & risks** — every defaulted input flagged, top 3 risks with mitigations.

Length: 1,200-2,500 words for a startup plan; up to 4,000 for multi-region enterprise entry. Use tables over prose wherever a table is possible.

## Quality checklist

Pass/fail every item before delivering:

- [ ] Beachhead is one named, countable segment (you could build a list of its members), not a demographic blur
- [ ] At least 2 candidate segments were scored and visibly rejected in the matrix
- [ ] Positioning names the customer's actual current alternative, including "spreadsheets/manual" where true
- [ ] Positioning statement fits the Moore template in ≤60 words and contains zero unverifiable superlatives
- [ ] ACV and channel choice intersect on the Channel–ACV table
- [ ] Estimated CAC payback is stated and under the threshold for the segment type (12/18/24 months)
- [ ] Exactly 2 primary channels + 1 experimental — no more
- [ ] At least one channel has a feedback loop under 8 weeks
- [ ] Every phase has a measurable exit gate and a named failure playbook
- [ ] Every metric has a numeric 90-day target AND a numeric kill threshold that triggers a named decision
- [ ] Total monthly channel cost floor fits inside the stated budget with ≥20% reserve
- [ ] All defaulted/assumed inputs are flagged in the Assumptions section
- [ ] The plan names which sibling skills execute each downstream piece (launch mechanics, messaging, pipeline)
- [ ] A reader could not delete any section without losing a decision

## Common mistakes

- **Beachhead sized for the pitch deck, not the landing.** "Mid-market healthcare" is a TAM slice, not a beachhead. A beachhead you can't enumerate as a target-account list (or a specific community) is not selectable, reachable, or winnable.
- **Channel–price mismatch.** Hiring SDRs to sell a $588/year product, or expecting a $60k ACV product to close self-serve. Run the Channel–ACV table before anything else; this single check invalidates more GTM plans than any other.
- **Positioning against the market leader nobody in the beachhead uses.** If 80% of the segment runs the process in spreadsheets, "unlike Salesforce" is positioning against a ghost. Position against the status quo.
- **Five channels at 20% effort each.** Sub-scale spend on paid channels ($500/month on Google Ads in a $15 CPC market) produces noise, not signal. Two channels funded to their minimum viable spend beat five starved ones.
- **Calendar-gated phases.** "Phase 2 starts March 1" regardless of whether Phase 1 produced paying customers. Gates are metrics, not dates; the date is a forcing function only for Phase 0.
- **Metrics without kill criteria.** A dashboard of green-ish numbers lets a failing launch limp for two quarters. Pre-commit the number and the decision it triggers while everyone is still calm.
- **Confusing the launch moment with the GTM.** A Product Hunt spike is Phase 2 theater, not a strategy. If the plan's centerpiece is announcement day, it's a **product-launch** checklist wearing a strategy costume.
- **Pricing decided after the channel plan.** Pricing determines the motion, which determines the channels. Sequencing it last forces a rewrite of everything upstream.
- **Judging slow channels on fast-channel clocks.** Killing SEO at week 6 or a partnership at month 2 wastes the spend entirely. Set kill checkpoints after each channel's minimum ramp (from the time-to-results ranges), not on a uniform 30-day review.
- **Expansion segments as a to-do list.** Naming 4 "fast-follow" segments for Phase 3 recreates the everyone-problem one quarter later. Park exactly one runner-up, gated on beachhead dominance (a real share number), not on boredom.
