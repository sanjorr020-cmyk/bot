---
name: pricing-strategy
description: "Designs and evaluates pricing for products and services: selects a pricing model (flat, tiered, per-seat, usage-based, hybrid), builds packaging and feature fencing, runs pricing research (Van Westendorp, lightweight conjoint), plans price changes with grandfathering rules, and writes discount policies. Use when the user asks how to price a product, wants to restructure tiers or plans, asks whether to charge per seat or by usage, needs a price increase rollout plan, asks whether to grandfather existing customers, wants a Van Westendorp or willingness-to-pay survey, asks how much discount sales should be allowed to give, wants to design a free trial vs freemium offer, or asks if their pricing page tiers make sense."
---

# Pricing Strategy

Guide the user from "what should we charge?" to a defensible, documented pricing decision: a chosen pricing model and value metric, a packaging grid with feature fences, a specific price point per tier backed by research or explicit assumptions, a rollout plan for any change (including grandfathering rules), and a written discount policy. Pricing is the highest-leverage growth lever most businesses have — a 1% price improvement typically moves operating profit 8-11%, far more than a 1% volume gain — so treat every recommendation as a decision with stated evidence, not a vibe.

## When to use this skill

Use this skill when the user wants to:
- Set initial pricing for a new product or service
- Choose between flat, tiered, per-seat, usage-based, or hybrid models
- Design or redesign plans/tiers and decide which features go in which tier
- Run pricing research (Van Westendorp survey, lightweight conjoint, competitor price mapping)
- Plan and communicate a price increase or decrease, including grandfathering
- Write a discount policy or approval matrix for a sales team
- Decide free trial vs freemium vs paid-only

Do NOT use this skill for:
- Revenue modeling and forecasts driven by a chosen price → **financial-projections**
- Deep competitor teardown beyond price/packaging comparison → **competitor-analysis**
- Broad market sizing or customer discovery interviews → **market-research** and **customer-personas**
- Building or copywriting the pricing page itself → **website-copywriting** and **landing-page-cro**
- Statistically testing two live prices against each other → **ab-testing** (this skill designs what to test; that one designs the experiment)
- Negotiating a specific deal or answering "it's too expensive" live → **objection-handling** and **sales-proposals**
- Launch sequencing for new pricing announcements → **product-launch**

## Inputs to gather

Ask for these before recommending anything. If the user can't answer, use the stated default and flag the assumption in the deliverable.

1. **What is being priced?** Product description, delivery model (SaaS, service, physical, marketplace), and stage (pre-launch, early revenue, established). Default: assume B2B SaaS if ambiguous language like "plans" and "seats" appears.
2. **Current pricing, if any.** Exact prices, tiers, billing terms, and how long they've been in place. Default: none (greenfield).
3. **Unit economics.** Gross margin per unit/customer, or COGS. Default: 80% gross margin for SaaS, 30-50% for services, 40% for physical goods — state which you assumed.
4. **Customer segments and ACV range.** Who buys, deal sizes today, self-serve vs sales-led. Default: single segment, self-serve under $5k/yr, sales-led above.
5. **Value metric candidates.** What grows as the customer gets more value (seats, usage events, revenue processed, projects, contacts stored)? Default: derive candidates from the product description and present 2-3 options rather than assuming.
6. **Competitor prices.** 3-5 named competitors with their public pricing. Default: ask the user for names; if they have none, note "no competitive anchor" as a risk. (Full teardown belongs in **competitor-analysis**.)
7. **Constraints.** Billing system limits, contractual notice periods, investor/board targets, regulated price caps. Default: assume monthly + annual billing is possible and 30 days' notice is contractually required for changes.
8. **Research capacity.** Can they survey customers/prospects, and roughly how many responses can they get? Default: assume 30-50 responses reachable via email list; scale method choice accordingly.
9. **For price changes only:** number of existing customers on each current plan, churn rate baseline, and renewal dates distribution. No default — a change plan without this is guesswork; insist on at least rough counts.

## Process

1. **Frame the pricing job.** Classify the request: (a) new pricing, (b) repackaging, (c) price level change, (d) discount policy, or (e) research design. Confirm the classification with the user in one sentence before proceeding — the workflows differ.

2. **Pick the value metric first, price second.** Score each candidate metric against four criteria, 1-5 each: scales with customer value, easy for the buyer to predict their bill, easy to measure/meter, hard to game (e.g., seat-sharing). A metric scoring below 3 on predictability will generate billing complaints; below 3 on value-scaling caps expansion revenue. Recommend the top scorer and say why the runner-up lost.

3. **Choose the pricing model.** Decision guide:
   - **Flat rate** — single price, all features. Choose when: one homogeneous segment, simplicity is a selling point, ACV under ~$50/mo. Weakness: no expansion revenue.
   - **Per-seat** — choose when value genuinely scales with users (collaboration, CRM). Check: if 2 users can share a login and lose little, seats will be gamed.
   - **Usage-based** — choose when consumption maps directly to value (API calls, messages sent, GB processed). Add committed-use tiers or spend caps so buyers can budget; pure pay-as-you-go stalls procurement in B2B.
   - **Tiered (good-better-best)** — the default for most SaaS: 3 paid tiers plus an "Enterprise — talk to us" tier. More than 4 visible options measurably depresses conversion (choice overload).
   - **Hybrid** — platform fee + usage or seats + usage. Choose when there's a fixed value floor plus variable consumption. Most $100M+ SaaS companies land here eventually.
   State the recommendation and the one condition under which you'd switch models.

4. **Design packaging and fences.** Assign every feature to a tier using three fence types: feature fences (capability locked to a tier), usage fences (quantity limits: seats, records, API calls), and service fences (SLA, support channel, onboarding). Rules: each tier upgrade must be justified by at least one "must-have" feature for the next segment up; put your most-demanded differentiator one tier above where most prospects enter (that's the upgrade engine); never fence security basics (SSO is contested — fencing it to Enterprise is common but increasingly resented; if you do it, price the jump accordingly). Fill in the Packaging Grid template below.

5. **Set price points.** Triangulate three inputs:
   - **Value anchor:** estimate the economic value delivered per year (time saved × loaded hourly cost, revenue enabled, cost replaced). Price at roughly 10-25% of quantified value for B2B (the "10x rule" — customer perceives ~4-10x return).
   - **Competitive anchor:** map competitor prices for comparable packages; decide deliberately to price at a premium (+20-50%, requires clear differentiation), at parity, or discount (-20-30%, only with a structural cost advantage — otherwise it just resets the category floor).
   - **Cost floor:** price must clear COGS with target gross margin; for services, floor = loaded cost ÷ (1 − target margin).
   Set tier ratios around 1 : 2-2.5 : 4-5 (e.g., $29 / $79 / $149). End self-serve prices in 9 or 5 ($49, $95); use round numbers for sales-led deals ($1,200/mo, not $1,199). If two anchors disagree by more than 2x, run research (step 6) before committing.

6. **Run research when stakes justify it.** If the decision affects >$100k of annual revenue or the anchors conflict, don't guess:
   - **Van Westendorp Price Sensitivity Meter** — best for a defined product concept with a somewhat familiar category. Needs n ≥ 100 per segment for stable intersection curves; n = 40-60 gives directional ranges only (say so in the writeup). Use the survey template below.
   - **Lightweight conjoint / package-choice test** — best when deciding what goes in each tier, not just the number. Show respondents 6-10 screens, each with 3 package cards (name, 4-6 bullet features, price) plus "none of these"; vary prices ±30% and swap 1-2 fence features across versions. n ≥ 150 for takeaway-grade share-of-choice numbers; n = 50-80 flags only large preference gaps.
   - **Cheapest valid option:** 10-15 customer interviews asking "walk me through how you'd budget for this" plus reaction to two specific price points. Never ask "what would you pay?" cold — stated WTP without anchors overstates or understates by 2x routinely.
   Analyze and report the acceptable price range, not a single point.

7. **For price changes: decide grandfathering explicitly.** Use the decision matrix in Frameworks below. Then build the rollout: new customers get new pricing on day 1; existing customers get written notice ≥ 30 days before their renewal (check contracts — enterprise MSAs often require 60-90 days); changes land at renewal, not mid-term. Model the downside: a well-communicated 10-20% increase with genuine product improvement typically costs 1-4% incremental churn; if the user's baseline churn is already >3%/mo, recommend a smaller step or a 12-month price lock offer. Draft the announcement using the email template below. Pair with **churn-prevention** for the save-offer playbook.

8. **Write the discount policy.** Every discount must trade for something: annual prepay (standard: 15-20% off, i.e., "2 months free"), multi-year commitment (additional 5-10%/yr), case study or logo rights (5-10%), volume tiers (published, not negotiated). Set the approval ladder: reps 0-10%, sales manager to 20%, VP/founder to 30%, anything beyond 30% requires the exec owner plus a written expiration — no perpetual discounts, ever; time-box at 12 months with renewal at then-current rates stated in the order form. Publish end-of-quarter discipline: if reps learn Q-end discounts appear, buyers learn to wait.

9. **Package the deliverable.** Assemble everything into the Output format below. Every number must trace to an input, a benchmark you cited, or a labeled assumption. List the top 3 risks and the single metric that would trigger a revisit (e.g., "if trial→paid conversion drops below 8% in 60 days, retest the entry price").

## Frameworks & templates

### Template 1 — Packaging Grid (fill in)

| | **[Starter — $__/mo]** | **[Growth — $__/mo]** | **[Scale — $__/mo]** | **[Enterprise — custom]** |
|---|---|---|---|---|
| Target buyer | [solo / small team] | [team of __-__] | [department] | [org-wide, procurement] |
| Value metric limit | [__ seats / __ units] | [__ seats / __ units] | [__ seats / __ units] | [custom] |
| Core features | ✓ | ✓ | ✓ | ✓ |
| Upgrade-driver feature | — | **✓ [name it]** | ✓ | ✓ |
| Power feature | — | — | **✓ [name it]** | ✓ |
| Support | Email, 48h | Email + chat, 24h | Priority, 8h | Dedicated CSM, SLA |
| Security/admin | Basics | + [audit log] | + [SSO/SCIM] | + [DPA, SOC 2 pkg] |
| Billing | Monthly/annual | Monthly/annual | Annual | Annual, invoice |

Worked example (project-management SaaS): Starter $12/user/mo (up to 10 users, core boards), Growth $29/user/mo (unlimited users, **automations** as the upgrade driver, 24h support), Scale $49/user/mo (**portfolio reporting + SSO**, priority support), Enterprise custom (SCIM, audit API, 99.9% SLA). Ratio 1 : 2.4 : 4.1. Automations sit in Growth because trial data showed it was the #1 requested feature among free users — the fence does the selling.

### Template 2 — Van Westendorp survey (verbatim questions)

After a 2-3 sentence neutral product description (no price mentioned), ask:
1. "At what price would this be **so expensive you would not consider buying it**?" (Too expensive)
2. "At what price would this be **expensive, but you'd still consider it**?" (Expensive/high)
3. "At what price would this be **a bargain — great value for the money**?" (Cheap/good value)
4. "At what price would this be **so cheap you'd question its quality**?" (Too cheap)

Analysis: plot cumulative % curves; read four intersections — Point of Marginal Cheapness (PMC), Point of Marginal Expensiveness (PME), Optimal Price Point (OPP, "too cheap" × "too expensive"), Indifference Point (IDP). Report the PMC-PME span as the acceptable range and OPP as the tension-minimizing point. Discard responses where answers aren't monotonic (too-cheap < cheap < expensive < too-expensive) — typically 5-15% of raw responses. Add the optional purchase-intent follow-up ("How likely are you to buy at $X?", 5-point scale) to convert the range into a demand curve (Newton-Miller-Smith extension) when n ≥ 100.

### Framework — Grandfathering decision matrix

| Situation | Recommendation |
|---|---|
| Increase ≤ 10%, product clearly improved since they bought | No grandfathering; move everyone at renewal with 30-60 days' notice |
| Increase 10-30% | 12-month price lock for existing customers, then new price; offer annual prepay at old rate as a bridge |
| Increase > 30% or packaging restructure | Legacy plan frozen (no new features), 12-24 month migration window, personal outreach to top 10% of accounts by revenue |
| Killing a plan entirely | Map every account to nearest new plan at equal-or-lower effective price for 12 months; anything else reads as a bait-and-switch |
| Early believers / design partners on handshake deals | Grandfather indefinitely or until they expand — the goodwill outperforms the revenue |

Never create a permanent shadow catalog: cap legacy plans at 24 months and put the end date in the announcement.

### Template 3 — Price change announcement email

> **Subject:** Upcoming change to your [Product] pricing — nothing to do today
>
> Hi [first name],
>
> On **[date, ≥30 days out]**, the price of your [plan name] plan will change from **$[old]** to **$[new]** per [billing unit], effective at your next renewal on [renewal date].
>
> Since you joined, we've shipped [2-3 concrete improvements — name features, not "lots of value"]. This is our first price change since [date/launch].
>
> **What stays the same:** your plan, your data, your limits — everything except the price.
> **Lock in current pricing:** switch to annual billing before [date] and keep $[old] for the next 12 months. [One-click link.]
>
> Questions? Reply to this email — a human reads every response.
>
> — [Founder/GM name]

Rules: subject line states it's a pricing email (burying it destroys trust), old and new price both shown in bold, exactly one retention offer, sent from a named person, no "exciting news" framing.

### Framework — Free trial vs freemium vs paid-only

| Choose | When | Watch metric |
|---|---|---|
| **Free trial (14 days default)** | Value is provable inside 2 weeks; setup takes < 1 hour. Use 14 days over 30 — trial→paid conversion is usually equal or better with the shorter clock. Card-upfront trials convert 40-60% of starts; no-card trials convert 8-25% of a much larger top of funnel. | Trial→paid: 8-12% (no card) or ≥ 40% (card upfront) is healthy for self-serve B2B |
| **Freemium** | The free tier itself creates distribution (network effects, shared artifacts, virality) AND marginal cost per free user is near zero. Expect 2-5% free→paid conversion; below 1% after 6 months means the free tier gives away the upgrade driver. | Free→paid ≥ 2%; cost per free user < 5% of ARPU |
| **Paid-only / demo-gated** | Sales-led, ACV > $10k, or COGS per trial is material (compute-heavy products). Pair with a paid pilot ($1-5k, creditable to the annual contract) instead of a free POC. | Demo→pilot and pilot→contract rates |

Reversibility warning: removing a free tier later is a public event; adding one is quiet. When uncertain, launch with a trial and add freemium deliberately, not the reverse.

### Worked example — hybrid usage pricing (email API product)

Value metric scoring picked "emails sent" (value 5, predictable 4, measurable 5, gameable 5) over "contacts stored" (value 3 — lists sit idle). Design: $0 dev tier (100 emails/day, product-branded footer as the fence), then committed tiers — $35/mo for 50k emails, $95/mo for 200k, $290/mo for 1M — with overage priced at ~1.5× the effective in-tier rate ($1.05/1k on the $35 tier) so overage nudges upgrades without feeling punitive. Cost floor: sending infra ≈ $0.09/1k, so the lowest tier runs ~87% gross margin. Enterprise (> 5M/mo) moves to annual committed volume with quarterly true-up, because month-to-month invoices above that size stall in procurement.

### Template 4 — Discount approval matrix

| Discount | Approver | Required trade | Expiry |
|---|---|---|---|
| 0-10% | Rep | Annual prepay OR 3+ seat expansion | Order form term |
| 10-20% | Sales manager | Annual prepay AND (case study OR multi-year) | 12 months, renews at list |
| 20-30% | VP Sales / founder | Multi-year committed OR strategic-logo memo | 12 months, step-up schedule in contract |
| > 30% | CEO/exec owner, written | Board-visible strategic rationale | Hard expiry, no auto-renew |

## Output format

Deliver a single markdown document titled **"[Product] Pricing Strategy — [date]"** containing, in order:
1. **Decision summary** (≤ 150 words): model, value metric, tier prices, and the one-line rationale for each.
2. **Assumptions log**: every default you applied, tagged `[ASSUMED]`, with what evidence would firm it up.
3. **Packaging grid** (Template 1, filled in).
4. **Price point rationale**: the three anchors (value, competitive, cost) with numbers, and how they triangulate.
5. **Research plan or results** (if applicable): method, sample size, questions, and how results map to a go/no-go.
6. **Rollout & grandfathering plan** (for changes): timeline table with dates, segment-by-segment treatment, drafted announcement email, and projected churn impact with the trigger metric for rollback.
7. **Discount policy** (Template 4, adapted).
8. **Risks & revisit triggers**: top 3 risks, each with the metric and threshold that reopens the decision.

Keep the whole document under ~1,500 words excluding tables; executives skim.

## Quality checklist

- [ ] A value metric was explicitly chosen and scored — price points never appear before the metric decision
- [ ] No more than 4 visible tiers (3 paid + Enterprise is the ceiling)
- [ ] Tier price ratios fall in the 1 : 2-2.5 : 4-5 band, or the deviation is justified in writing
- [ ] Every price traces to a value anchor, competitive anchor, or labeled assumption — zero unexplained numbers
- [ ] Gross-margin floor was checked and stated for the lowest tier
- [ ] Each tier boundary has at least one named "must-have" fence feature for the next segment up
- [ ] Research method matches available sample size (no Van Westendorp curves claimed from n < 40)
- [ ] Van Westendorp responses screened for monotonicity before analysis
- [ ] Any price change plan includes: notice period ≥ 30 days, change-at-renewal timing, and a grandfathering row for every existing plan
- [ ] Announcement email states old and new price explicitly and contains exactly one retention offer
- [ ] Every discount in the policy has a required trade AND an expiry date
- [ ] Annual prepay discount sits in the 10-20% range or the deviation is justified
- [ ] Deliverable names the single metric + threshold that would trigger revisiting the pricing
- [ ] Assumptions log exists and every default the user couldn't answer appears in it

## Common mistakes

- **Cost-plus as the strategy.** Cost sets the floor, never the price. If the doc's price rationale starts with "our costs are X, so...", restart from the value anchor.
- **Asking customers "what would you pay?"** Unanchored stated WTP is noise. Use Van Westendorp's four indirect questions or forced package choices instead.
- **Pricing before packaging.** Debating $79 vs $99 while the tier contents are unsettled wastes the debate — the fence features move willingness-to-pay more than the digits do.
- **Per-seat pricing for products where one power user serves the whole team** (dashboards, reporting tools). You'll sell one seat per company forever. Fence on the shared output (viewers, reports, data volume) instead.
- **Pure usage-based pricing with no commitment tier for B2B.** Finance teams can't budget it; procurement stalls; bill-shock churn follows the first spike. Always offer committed tiers with overage rates.
- **Permanent grandfathering.** Five legacy plans after three price changes means engineering supports 15 SKUs and finance can't forecast. Time-box legacy plans at 12-24 months, in writing, at announcement time.
- **Changing price and packaging in the same move without a control.** When churn moves you won't know which change caused it. If both must change, stagger by 60-90 days or hold one cohort constant.
- **Discounts with no expiry.** A 25% "first-year" discount that silently renews becomes the customer's permanent price and the anchor for every future negotiation. Expiry in the order form, step-up schedule stated.
- **Announcing increases with "exciting news" framing.** Customers see through it instantly and screenshot it. State the change, the date, the reason, and the one offer — plainly.
- **Undercutting the market leader by 50% as the whole strategy.** Without a structural cost advantage this just anchors the product as the cheap option and funds a price war you lose. Discount pricing needs a cost story, not just ambition.
- **Ignoring the billing system until launch week.** Confirm the billing platform can meter the chosen value metric, prorate upgrades, and run legacy plans in parallel *before* committing to the design — Stripe/Chargebee constraints have quietly redesigned more pricing pages than any strategy deck.
