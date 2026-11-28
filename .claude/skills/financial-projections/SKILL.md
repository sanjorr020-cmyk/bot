---
name: financial-projections
description: "Builds driver-based financial projections: revenue models tied to operational drivers, full cost structure, unit economics (CAC, LTV, payback period, contribution margin), cash flow and runway math, and base/bull/bear scenario cases with a documented assumptions log. Use when the user asks to build a financial model or forecast, project revenue for the next 12-36 months, calculate CAC, LTV, or payback period, estimate burn rate or runway, create base/bull/bear scenarios, model unit economics for a product or channel, prepare financials for a pitch deck or fundraise, or pressure-test whether a growth plan is achievable."
---

# Financial Projections

Build financial projections that start from operational drivers (leads, conversion rates, prices, churn, headcount) rather than a hoped-for revenue curve. The deliverable is a model the user can defend line by line: every number traces back to an assumption, every assumption has a stated source, and the base/bull/bear cases show which levers matter most. Work in plain tables (Markdown or CSV/spreadsheet formulas) so the user can rebuild it in Google Sheets or Excel in under an hour.

## When to use this skill

Use this skill when the user needs:
- A revenue forecast built from drivers (traffic, pipeline, sales capacity, retention)
- Unit economics: CAC, LTV, LTV:CAC, CAC payback, contribution margin
- Burn rate, runway, and default-alive/default-dead analysis
- Base/bull/bear scenarios for planning or fundraising
- A projections tab or appendix for investors, a board, or a bank

Do NOT use this skill for:
- Pricing decisions (tier design, price points, discounting) — use **pricing-strategy**; take its output as an input here
- The narrative business plan around the numbers — use **business-plan**
- Turning finished projections into 1-2 investor slides — use **pitch-deck**
- Market sizing (TAM/SAM/SOM) — use **market-research**; projections should be bottom-up, not "1% of TAM"
- Analyzing historical retention data to derive churn inputs — use **retention-cohort-analysis**
- Designing the ongoing dashboard that tracks actuals vs. plan — use **kpi-dashboard-design**
- Diagnosing why conversion rates are what they are — use **funnel-analysis**

## Inputs to gather

Ask for these before modeling. Where the user does not know, use the stated default and log it as an assumption to validate.

1. **Business model type** — SaaS subscription, transactional/e-commerce, marketplace (take rate), services/agency, or usage-based. This determines the driver tree. No default; must ask.
2. **Current state** — monthly revenue, customer count, average price, cash in bank, monthly expenses. If pre-revenue, say so and model from launch month.
3. **Time horizon and granularity** — default: 36 months, monthly for months 1-12, quarterly summaries after. Fundraising decks usually want 3-5 years; internal plans 12-18 months.
4. **Pricing** — price points, billing frequency (monthly vs. annual prepay matters enormously for cash), expected mix. If unknown, defer to **pricing-strategy** first or assume 100% monthly billing (conservative for cash).
5. **Acquisition channels and their metrics** — for each channel: monthly spend or effort, cost per lead, conversion rates through the funnel. Defaults if unknown: paid ads visitor→signup 2-4%, signup/trial→paid 10-20% self-serve, SQL→closed-won 15-25% for sales-led, sales cycle 30-90 days B2B.
6. **Retention** — monthly logo churn. Defaults: 4-6% SMB SaaS, 1-2% mid-market, 0.5-1% enterprise, 20-40% month-1 drop-off for consumer apps. For e-commerce ask for repeat purchase rate instead (typical 20-35% of customers repurchase within 90 days).
7. **Gross margin inputs** — COGS: hosting/infra, payment processing (~2.9% + $0.30), support staff, delivery labor for services. Defaults: SaaS gross margin 75-85%, e-commerce 30-50%, marketplaces 60-80% of net take, services 40-60%.
8. **Headcount plan** — current team, planned hires with start months and salaries. Load salaries at 1.3x for taxes/benefits (1.25x lean, 1.4x with rich benefits). If unknown, build a minimal hiring plan tied to revenue milestones and flag it.
9. **Cash timing** — payment terms (B2B invoices typically collect in 30-60 days), annual prepay share, any debt or committed funding.
10. **Purpose and audience** — fundraise, bank loan, internal planning, or board review. This sets tone: fundraising models emphasize the bull case mechanics; internal plans emphasize the bear case and runway.

## Process

1. **Classify the business model and pick the driver tree.** Every revenue line must decompose into countable drivers. Use the matching template from Frameworks below. If the business has multiple revenue streams (e.g., SaaS + services), model each stream separately and sum — never blend them into one average price.
2. **Reconstruct the last 3-6 months of actuals** (if any) inside the driver structure. If the drivers can't reproduce actual revenue within ~10%, the driver tree is wrong — fix it before projecting. Pre-revenue companies skip to step 3 but must source every assumption externally (comparable companies, channel benchmarks, pilot data).
3. **Build the revenue engine month by month.** New customers = channel inputs × conversion rates, lagged by the sales cycle. Ending customers = beginning + new − churned. Revenue = customers × ARPA (or orders × AOV). Never type a revenue number directly; revenue is always computed.
4. **Layer in COGS and compute gross margin.** Separate variable costs (scale with revenue: hosting per customer, payment fees, fulfillment) from the fixed portion of COGS (support headcount steps). Check the result against the defaults in Inputs #7; if SaaS gross margin comes out below 70%, investigate before proceeding.
5. **Build operating expenses in four blocks:** (a) People — the hiring plan with loaded salaries and start months; typically 60-75% of opex for early-stage software companies. (b) Sales & marketing — the channel spend from step 3, so CAC is internally consistent. (c) Tools/infra/office — default $150-400/employee/month for software tooling. (d) G&A — legal, accounting, insurance; default 5-10% of total opex, minimum ~$2-4k/month for an incorporated startup.
6. **Compute unit economics** using the formulas in Frameworks. Decision point: if fully-loaded LTV:CAC < 3 or CAC payback > 18 months in the base case, stop and tell the user the model shows a business that scales losses — either the inputs need re-examination or growth spend should be reduced in the plan. Do not silently present a broken engine with a hockey stick on top.
7. **Convert P&L to cash flow.** Adjust for timing: revenue booked ≠ cash collected (apply payment terms and annual-prepay share); add one-time costs (equipment, deposits, legal for a raise). Compute monthly net burn, cumulative cash, and runway = current cash ÷ average net burn over the next 3 months. Flag the month cash goes negative.
8. **Run the default-alive test** (Paul Graham's framing): holding the current team and growth rate, does the company reach profitability before cash runs out? State the answer explicitly as "default alive" or "default dead, funding needed by [month]."
9. **Build base/bull/bear scenarios** by flexing only the 3-5 most sensitive drivers — typically conversion rate, churn, price, and hiring pace. Bull: top-quartile execution (not fantasy) — e.g., conversion +30% relative, churn −25% relative. Bear: things that have actually happened to similar companies — conversion −30%, churn +50%, sales cycle +30 days, one key hire delayed 2 quarters. Keep everything else identical so differences are attributable. Report revenue, ending cash, and runway for each case.
10. **Run a one-way sensitivity check:** move each key driver ±20% alone and rank drivers by impact on month-12 revenue and runway. The top 2-3 become the "watch metrics" recommendation.
11. **Write the assumptions log** (template below) covering every input, its value in each scenario, its source, and its confidence. This is the defensibility layer — an investor diligence call is won or lost here.
12. **Sanity-check the whole model** against the Quality checklist, then assemble the Output format. Reconcile: does implied market share stay plausible (<5-10% of SAM by year 3)? Does revenue-per-employee stay in a sane band ($100-300k for software at scale)? Does the marketing budget actually fund the customer counts claimed?

## Frameworks & templates

### Driver trees by business model

- **SaaS (sales-led):** Leads → SQLs (× qualify rate) → Closed-won (× win rate, lagged by sales cycle) → New MRR (× ACV/12) → MRR roll-forward: `MRR(t) = MRR(t-1) + New + Expansion − Churned MRR`
- **SaaS (self-serve):** Visitors → Signups (× 2-4%) → Paid (× 10-20%, lagged 14-30 days) → customer roll-forward × ARPA
- **E-commerce:** Sessions → Orders (× 1-3% conversion) × AOV = first-order revenue; + repeat orders = prior customers × repeat rate × AOV
- **Marketplace:** Listings/supply → matched transactions × average transaction value × take rate (typical 10-25%); model supply and demand sides separately and revenue off the constrained side
- **Services/agency:** Billable headcount × capacity hours (~120-140/month at 70-85% utilization) × rate; revenue is capacity-capped — flag when the plan requires hiring ahead of demand

### Unit economics formulas (with worked example)

```
CAC            = fully-loaded S&M cost / new customers acquired (same period,
                 lag S&M by the sales cycle; include salaries, not just ad spend)
Contribution   = ARPA × gross margin %          (per customer per month)
Avg lifetime   = 1 / monthly churn rate         (months; use cohort data if available)
LTV            = Contribution × Avg lifetime
LTV:CAC        = LTV / CAC                      (target ≥ 3; < 1 means paying to lose money)
CAC payback    = CAC / Contribution             (months; target < 12 SMB, < 18 mid-market/enterprise)
```

Worked example A — SMB SaaS at $99/month, 80% gross margin, 4% monthly churn, $12,000/month total S&M producing 30 new customers:
- CAC = 12,000 / 30 = **$400**
- Contribution = 99 × 0.80 = **$79.20/month**
- Lifetime = 1 / 0.04 = **25 months**; LTV = 79.20 × 25 = **$1,980**
- LTV:CAC = 1,980 / 400 = **5.0** ✓ ; Payback = 400 / 79.20 = **5.1 months** ✓
Healthy engine — the model can justify increasing S&M spend in the bull case.

Worked example B — e-commerce, $85 AOV, first-order economics:
- COGS $34 (40%) + shipping $9 + payment fees $2.77 (2.9% + $0.30) + pick/pack $4 = **$49.77**
- Contribution per order = 85 − 49.77 = **$35.23** (41.4%)
- Blended CAC $42 → **first order loses $6.77** — acceptable only because 28% of customers reorder within 90 days at zero CAC
- 12-month LTV = 1.65 lifetime orders × $35.23 = **$58.13**; LTV:CAC = 1.38 ✗
Verdict: below the ≥3 target — the model must show CAC falling or repeat rate rising, or growth spend destroys value. Say this plainly in the output.

For SaaS with upsells, also compute Net Revenue Retention:
```
NRR = (starting MRR + expansion − contraction − churned MRR) / starting MRR
```
Benchmarks: <90% weak, 100-110% solid SMB, 110-130% strong mid-market/enterprise. If NRR ≥ 100%, existing customers grow revenue with zero acquisition cost — model expansion as its own line (e.g., 2-4% of the base upgrades monthly), never bury it in a lower churn number.

### Monthly model skeleton (columns = months)

```
REVENUE DRIVERS      M1     M2     M3   ...
  Marketing spend    $8,000 $8,000 $10,000
  Leads              160    160    200        (spend / $50 CPL)
  New customers      24     24     30         (× 15% close, 1-mo lag)
  Churned customers  −4     −5     −5         (× 4% of beginning base)
  Ending customers   120    139    164
  MRR                $11,880 $13,761 $16,236  (× $99 ARPA)
COSTS
  COGS               $2,376 $2,752 $3,247     (20% of revenue)
  Gross profit       $9,504 $11,009 $12,989   (80% margin)
  People (loaded)    $45,500 $45,500 $58,500  (hire #4 starts M3)
  S&M non-people     $8,000 $8,000 $10,000
  Tools & G&A        $4,200 $4,200 $4,600
CASH
  Net burn           −$48,196 −$46,691 −$60,111
  Cash balance       $551,804 $505,113 $445,002
  Runway (months)    11.4   10.8   7.4
```

### Cash timing walkthrough

Booking $12,000 of new business in March means very different cash depending on terms — model each pattern explicitly:

| Terms | Cash in March | Cash in April | Cash in May+ |
|-------|--------------|---------------|--------------|
| Monthly card billing | $1,000 | $1,000 | $1,000/mo ongoing |
| Annual prepaid | $12,000 | $0 | $0 (renewal M15) |
| Monthly invoiced, net-45 | $0 | $0 | $1,000/mo starting mid-May |

Rule of thumb: shift invoiced B2B revenue 1-2 months right in the cash view, and recognize annual prepay as 100% cash in month 1 but 1/12 per month in the P&L view. When >30% of bookings are annual prepay, show both views — burn can look fine while deferred-revenue obligations pile up.

### Assumptions log template

| # | Assumption | Base | Bull | Bear | Source | Confidence |
|---|-----------|------|------|------|--------|------------|
| 1 | Visitor→signup rate | 3.0% | 3.9% | 2.1% | Last 90 days GA4 actuals | High |
| 2 | Signup→paid rate | 12% | 16% | 8% | Industry benchmark, no trial data yet | Low — validate by M3 |
| 3 | Monthly logo churn | 4.0% | 3.0% | 6.0% | 6-mo cohort average | Medium |
| 4 | ARPA | $99 | $110 (annual mix) | $92 (discounting) | Current price list | High |
| 5 | CPL (paid search) | $50 | $42 | $68 | Google Ads last quarter | Medium |
| 6 | Hire: AE #2 start | M4 | M3 | M7 | Hiring plan | Medium |

Every row needs a real source: actuals, cohort data, a named benchmark, a signed LOI, or "founder estimate — validate by [month]." Confidence = High (own data), Medium (comparable/benchmark), Low (estimate).

### Scenario summary template

| Metric | Bear | Base | Bull |
|--------|------|------|------|
| Month-12 MRR | $ | $ | $ |
| Month-12 customers | | | |
| Blended CAC / payback | / | / | / |
| Peak monthly burn | $ | $ | $ |
| Ending cash (M12) | $ | $ | $ |
| Runway / cash-out month | | | |
| Default alive? | | | |

## Output format

Deliver a single document (or spreadsheet-ready set of tables) containing, in order:

1. **Summary block (≤ 150 words):** business model, horizon, headline base-case numbers (M12 and final-month revenue, peak burn, runway), default-alive verdict, and the top 2-3 sensitive drivers to watch.
2. **Assumptions log** — the full table, every driver, with sources and confidence.
3. **Monthly driver-based model** — base case, months 1-12 monthly (quarterly thereafter), in the skeleton format above: revenue drivers → revenue → COGS/gross profit → opex blocks → net burn → cash balance → runway.
4. **Unit economics panel** — CAC, contribution margin, LTV, LTV:CAC, payback, each with the formula shown and a one-line verdict against benchmarks.
5. **Scenario summary table** — bear/base/bull side by side, plus 2-3 sentences on what breaks first in the bear case and what must be true for the bull case.
6. **Sensitivity ranking** — the ±20% one-way results, ranked.
7. **Validation plan** — for every Low-confidence assumption, the cheapest experiment or data pull that would upgrade it, with a target month.

If the user wants a spreadsheet, output CSV blocks per tab (Assumptions, Model, Scenarios) with formulas expressed in the Assumptions-reference style (`=Assumptions!B2*Model!C5`) so cells stay linked, not hardcoded.

## Quality checklist

Pass/fail every item before delivering:

- [ ] No revenue number is typed directly — every revenue cell computes from drivers
- [ ] Driver tree reproduces historical actuals within ~10% (or the company is pre-revenue and every input has an external source)
- [ ] Customer counts roll forward correctly: ending = beginning + new − churned, every month
- [ ] CAC is fully loaded (includes S&M salaries) and lagged by the sales cycle
- [ ] LTV uses contribution margin (post-COGS), not raw revenue
- [ ] Gross margin lands in the plausible band for the business model (SaaS 70-85%, e-comm 30-50%, services 40-60%) or the deviation is explained
- [ ] Salaries are loaded at 1.25-1.4x and hires appear in the month they start, not smeared across the year
- [ ] Cash flow differs from P&L wherever billing terms, prepay, or one-time costs apply
- [ ] Runway and cash-out month are stated explicitly; default-alive verdict is given
- [ ] Bear case includes at least one operational failure (hire delay, churn spike, or longer sales cycle), not just "revenue minus 20%"
- [ ] Scenarios flex only named drivers; all other inputs identical across cases
- [ ] Every assumption has a source and confidence rating; no orphan numbers anywhere in the model
- [ ] Implied market share by final year is < ~10% of SAM, or the exception is justified
- [ ] Marketing budget in the cost section actually funds the lead volumes in the revenue section (same numbers, one source of truth)

## Common mistakes

- **Hope-based smoothing:** typing "20% MoM growth" as an input. Growth must be an output of spend × conversion × capacity. If 20% MoM requires tripling the sales team by M6, the model must show those hires and their cost.
- **Blended-average blindness:** one ARPA across plans, one CAC across channels. A $30 self-serve plan and a $500 enterprise plan averaged together produce a customer that doesn't exist. Segment anything whose economics differ by >2x.
- **LTV inflation:** using revenue instead of contribution margin, or annual churn divided by 12 when monthly cohort churn is available (early-month churn is always worse). Both flatter LTV by 30-100% and evaporate in diligence.
- **CAC amnesia:** counting only ad spend. Two SDRs at $70k loaded each is $11.7k/month of CAC whether or not it appears in the ads dashboard.
- **P&L-as-cash:** booking annual contracts as 12 monthly slices in the cash view (understates cash) or monthly B2B invoices as collected instantly (overstates it by 30-60 days). Companies die of cash timing while "profitable on paper."
- **Linear headcount, instant productivity:** new AEs typically ramp 3-4 months before hitting quota; support needs step-function hires. Model ramp explicitly.
- **Bear case that's just base × 0.8:** a real bear case has a mechanism — churn goes to 6% because the onboarding hire slipped, pipeline stalls because the sales cycle stretched. Percentage haircuts convince no one.
- **Top-down market-share revenue:** "1% of a $4B market = $40M." Investors pattern-match this instantly as a non-model. Always bottom-up; use SAM only as a ceiling check.
- **Churn applied to new customers in month one:** churn the beginning-of-month base, not the customers who just arrived — double-dipping deflates growth in fast-growing months.
- **Frozen assumptions:** conversion and churn held constant for 36 months. Mature channels degrade (CPLs typically rise 10-30%/year in competitive auctions); retention often improves with product maturity. Flat lines beyond month 18 signal the modeler stopped thinking.
