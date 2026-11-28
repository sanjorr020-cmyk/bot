---
name: business-plan
description: "Writes lean one-page and full-length business plans: business model canvas, market and competition sections, operations plan, financial summary, and risk analysis, with depth and emphasis tailored to bank, investor, or internal audiences. Use when the user says things like \"write a business plan\", \"I need a plan for my SBA loan application\", \"help me fill out a business model canvas\", \"turn my idea into a lean canvas\", \"draft the market analysis section\", \"what goes in the operations plan\", \"add a risk section to my plan\", \"make this plan investor-ready\", or \"review my business plan\"."
---

# Business Plans

Produce a business plan that matches its reader's decision: a lender deciding whether the business can service debt, an investor deciding whether it can grow 10x, or a founding team deciding what to do next quarter. This skill covers the full document — canvas, market, competition, operations, financials summary, risks — and the judgment calls about depth, length, and emphasis for each audience. The plan is an argument with evidence, not a form to fill in.

## When to use this skill

Use it when the user needs:
- A lean/one-page plan or business model canvas for a new idea
- A full business plan (bank loan, SBA application, investor diligence, grant, visa, franchise, internal approval)
- A specific section drafted or rewritten (market analysis, operations, risk analysis, executive summary)
- An existing plan reviewed, tightened, or re-targeted at a different audience

Do NOT use it for adjacent deliverables — hand off instead:
- Slide narrative for a fundraise → **pitch-deck** (the plan is the reference document; the deck is the story)
- Full financial model with monthly statements and scenarios → **financial-projections** (this skill writes the financial *summary* section and defines what the model must show)
- Deep primary/secondary market sizing research → **market-research**; detailed competitor teardowns → **competitor-analysis** (this skill consumes their outputs into plan sections)
- Launch and channel execution detail → **go-to-market** and **marketing-plan**
- Price-setting analysis → **pricing-strategy**; buyer profiles → **customer-personas**

## Inputs to gather

Ask for these up front. Where the user doesn't know, apply the default and flag the assumption in the draft.

1. **Audience and purpose** — bank/SBA loan, equity investor, internal strategy, grant, landlord, visa. Default: internal lean plan if the user just says "business plan" for an early idea; ask explicitly if any money is being raised, because audience changes everything.
2. **Business basics** — what it sells, to whom, at what price, how it's delivered, geography, legal structure (default: single-member LLC if unknown), stage (idea / pre-revenue / revenue / profitable).
3. **Numbers available** — current revenue, costs, cash, any funding amount sought and its use. If none exist, build assumption-based estimates and label every one "Assumption:".
4. **Team** — founders, key hires, relevant experience. For lenders, personal credit and collateral situation matter; ask.
5. **Timeline and format** — deadline, required template (SBA lenders often accept any format but expect specific contents; some banks issue their own), target length. Defaults: lean plan 1–3 pages; full plan 15–25 pages plus appendix; executive summary 1–2 pages max.
6. **Existing material** — pitch deck, model, prior plan, canvas. Never rebuild what exists; upgrade it.

## Process

1. **Pick the plan type.** Idea-stage or internal audience → lean plan (canvas + 1–3 page narrative). External capital (debt or equity) → full plan. If the user asks for a full plan at idea stage with zero validation, say so: recommend the lean plan first and offer to expand later.

2. **Fill the Business Model Canvas first, whatever the final format.** Use the 9-block template below. This forces the core logic (who pays, for what, through what channel, at what cost) before any prose. Spend the most time on Value Proposition, Customer Segments, and Revenue Streams — if those three are mushy, stop and resolve them with the user before writing anything else.

3. **Draft the market section.** Size top-down AND bottom-up:
   - Top-down: TAM → SAM → SOM. Cite the source and year for TAM. SOM should be defensible: typically 0.5–5% of SAM within 3 years for a new entrant; anything above 10% needs an explicit mechanism (exclusive contract, regulatory moat, existing customer base).
   - Bottom-up: (reachable customers) × (realistic conversion) × (price). Example: 4,000 dental practices in region × 2% year-1 penetration × $6,000/yr = $480k year-1 revenue ceiling.
   - If the two methods disagree by more than 3x, trust the bottom-up number and say why in the text. For heavy sizing work, invoke **market-research**.

4. **Draft the competition section.** Name 3–6 real competitors including the status quo ("do nothing" / spreadsheets / hiring in-house). Build a comparison table on 4–6 buyer-relevant dimensions (price, speed, coverage, support — not "quality"). State the positioning in one sentence: "Unlike [main alternative], we [difference] for [segment], which matters because [buyer consequence]." Never write "we have no competitors" — a lender or investor reads that as "no market" or "no research."

5. **Draft the operations plan.** Cover: production/delivery workflow (step-by-step for one unit of sale), suppliers and key dependencies (name them; note any single points of failure), location and facilities, equipment, staffing plan by role with hire timing and fully-loaded cost, quality control, and the 2–3 operational metrics that will be tracked weekly (e.g., utilization %, fulfillment time, cost per unit). For a service business, include capacity math: billable hours available × utilization (assume 60–75% if unknown) × rate = revenue ceiling per head.

6. **Write the financial summary.** This section summarizes; the model itself belongs to **financial-projections**. Include:
   - 3-year P&L summary table (5-year for banks/SBA), monthly detail for year 1 available in appendix
   - Break-even point in units and months ("break-even at 210 subscriptions, projected month 14")
   - Funding ask, exact use of funds table (equipment $X, working capital $Y, marketing $Z — sums to the ask), and runway it buys
   - For lenders: debt service coverage ratio. Compute DSCR = (net operating income) / (annual debt payments); lenders typically require ≥ 1.25. If projections show less, revise the plan or the ask before submitting.
   - The 3–5 assumptions the numbers hinge on, stated plainly (CAC, churn, price, conversion rate) with the evidence for each.

7. **Build the risk analysis with mitigations.** Use the risk register template below. 5–8 risks across categories: market, execution, financial, key-person, regulatory, supplier/platform dependency. Every risk gets likelihood, impact, and a specific mitigation already underway or planned. A plan with no risk section reads naive; one with risks-but-no-mitigations reads doomed.

8. **Tailor to the audience** using the matrix in Frameworks. Reorder, expand, and cut sections accordingly. Then rewrite the executive summary LAST — it must stand alone, fit 1–2 pages, and contain: the business in one sentence, the market opportunity with one number, traction/proof, the team's unfair advantage, the financial headline, and (if raising) the ask.

9. **Run the quality checklist**, fix failures, and deliver in the output format below. Offer follow-ups: **pitch-deck** if raising equity, **financial-projections** for the full model, **go-to-market** for launch execution.

## Frameworks & templates

### Business Model Canvas (fill-in template)

| Block | Prompt to answer | Example (B2B SaaS for dental practices) |
|---|---|---|
| Customer Segments | Who pays? Who uses? Rank segments. | Independent dental practices, 1–5 dentists, US Midwest |
| Value Proposition | What pain is removed / gain created, in the customer's words? | "Cut no-show rate from 18% to under 8% without hiring front-desk staff" |
| Channels | How do customers find, evaluate, buy, receive it? | Dental supply distributor partnerships; state association conferences |
| Customer Relationships | Self-serve, high-touch, community? Per segment. | Onboarding call + email support; quarterly usage review |
| Revenue Streams | What do they pay for, how, at what price? | $499/mo subscription per practice; annual prepay at 15% discount |
| Key Resources | Assets the model can't run without | Scheduling integrations (Dentrix, Eaglesoft); HIPAA compliance |
| Key Activities | What the business must do daily to deliver | Integration maintenance; onboarding; reminder-engine tuning |
| Key Partnerships | Who does what you don't | Supply distributors (distribution); Twilio (SMS delivery) |
| Cost Structure | Biggest fixed and variable costs | Engineering payroll (fixed); SMS costs ~$0.02/message (variable) |

Lean-startup variant: if the user says "lean canvas," swap Key Partnerships → **Problem** (top 3), Key Activities → **Solution** (top 3 features), Key Resources → **Key Metrics**, Customer Relationships → **Unfair Advantage** (the one thing that can't be copied or bought).

### Lean one-page plan (template)

```
[BUSINESS NAME] — One-Page Plan            Date: ____  Version: ____

PROBLEM: [Who] struggles with [pain], costing them [time/money quantified].
SOLUTION: [Product/service] that [mechanism] so that [outcome].
CUSTOMER: [Segment], approx. [N] of them in [geography/channel]. First 10: [named list or source].
COMPETITION: Today they use [alternative]. We win because [1 sentence].
PRICING & REVENUE: [Price] per [unit]. Year-1 target: [units] = $[revenue].
CHANNEL: First customers come from [specific channel], costing ~$[CAC each].
COSTS: Startup: $[X]. Monthly burn: $[Y]. Break-even: [units]/mo, est. month [M].
MILESTONES (next 90 days): 1) ____  2) ____  3) ____
TOP 3 RISKS: 1) ____ → mitigation ____  2) ____ → ____  3) ____ → ____
ASK / DECISION NEEDED: [funding amount + use, or the internal go/no-go question]
```

### Full plan outline (15–25 pages + appendix)

| # | Section | Length | Must contain |
|---|---|---|---|
| 1 | Executive Summary | 1–2 pp | Business in one sentence; market number; traction; team edge; financial headline; the ask. Write last. |
| 2 | Company Overview | 1 p | Legal structure, ownership %, founding date, location, mission in one sentence, stage/history |
| 3 | Products & Services | 1–2 pp | What it is, how it's priced, IP or differentiation, development status, roadmap in 3 bullets |
| 4 | Market Analysis | 2–3 pp | TAM/SAM/SOM with sources; bottom-up build; 2–3 trends with data; target segment definition |
| 5 | Competition & Positioning | 1–2 pp | Comparison table (3–6 competitors incl. status quo); one-sentence positioning statement |
| 6 | Marketing & Sales Plan | 2–3 pp | Channels ranked, CAC target per channel, sales process steps, year-1 customer acquisition math (detail lives in **marketing-plan**) |
| 7 | Operations Plan | 2–3 pp | Delivery workflow, suppliers, facilities, staffing plan with hire dates and loaded costs, capacity math, 2–3 weekly metrics |
| 8 | Team & Management | 1–2 pp | Founder bios tied to this business's needs, org chart, hiring plan, advisors, gaps admitted |
| 9 | Financial Plan | 2–4 pp | 3–5 yr P&L summary, break-even (units + month), use-of-funds table, DSCR for lenders, top assumptions |
| 10 | Risk Analysis | 1 p | Risk register table, 5–8 rows |
| — | Appendix | as needed | Monthly year-1 financials, resumes, letters of intent, permits/licenses, research detail |

### Worked example: executive summary skeleton (investor version)

```
BrightRecall — Executive Summary                                  July 2026

BrightRecall reduces patient no-shows for independent dental practices from
an average 18% to under 8% using automated, PMS-integrated reminders —
recovering roughly $46,000/yr in lost chair time for a typical 3-dentist
practice (Assumption: 1,400 appts/yr/dentist × $110 avg × 10-pt reduction).

Market: 128,000 independent US practices (ADA, 2025); our serviceable
segment — 1–5 dentist practices on Dentrix or Eaglesoft — is ~61,000
practices, a $365M ARR opportunity at our $499/mo price. We target 420
practices (0.7% of SAM) by end of year 3.

Traction: 14 paying practices, $7.0k MRR, 4% monthly logo churn over
6 months, LTV:CAC currently 3.8:1.

Team: CEO ran operations for a 22-location dental group; CTO built the
scheduling module at [PMS vendor].

Financials: $480k revenue year 1 → $2.5M year 3; gross margin 81%;
break-even at 210 practices, projected month 14.

Ask: $500k for 18 months' runway — engineering $220k, sales $180k,
working capital $100k — to reach 120 practices and Series A metrics.
```

Swap emphasis per the tailoring matrix: the lender version of the same summary leads with 6 months of billing history, owner equity injection, collateral, and DSCR of 1.4 in the base case — and drops the Series A sentence entirely.

### Risk register (template + worked rows)

| # | Risk | Likelihood (H/M/L) | Impact (H/M/L) | Mitigation (specific, already planned) |
|---|---|---|---|---|
| 1 | Twilio SMS price increase erodes gross margin | M | M | Contract price lock for 24 mo; WhatsApp fallback integration scoped |
| 2 | Founder (only engineer) unavailable > 2 weeks | L | H | Code documented; contractor on retainer from month 6; key-person insurance at $500k raise |
| 3 | Dentrix closes API access | L | H | Signed integration agreement; supporting 3 PMS platforms by month 9 so no single platform > 50% of customers |

Rules: no more than 8 rows; at least one H-impact row (there always is one); every mitigation names an action and a timeframe, never "we will monitor this."

### Worked example: financial summary table

Present the P&L summary in exactly this shape (add Years 4–5 columns for lenders; keep monthly year-1 detail in the appendix):

| Line | Year 1 | Year 2 | Year 3 |
|---|---:|---:|---:|
| Customers (end of year) | 80 | 210 | 420 |
| Revenue | $480,000 | $1,260,000 | $2,520,000 |
| COGS (SMS, hosting, onboarding labor) | $91,000 | $239,000 | $479,000 |
| **Gross profit (margin)** | **$389,000 (81%)** | **$1,021,000 (81%)** | **$2,041,000 (81%)** |
| Sales & marketing | $180,000 | $340,000 | $560,000 |
| Engineering & product | $220,000 | $310,000 | $430,000 |
| G&A | $95,000 | $140,000 | $210,000 |
| **Operating income** | **($106,000)** | **$231,000** | **$841,000** |

Below the table, always state: break-even point, cash low point ("maximum cumulative burn $310k, month 11 — the $500k ask covers this with 1.6x headroom"), and the 3–5 driving assumptions with evidence (e.g., "CAC $2,250 — actual blended CAC over last 14 customers; churn 4%/mo observed, modeled improving to 2.5% by month 18 as onboarding matures — flag as the highest-sensitivity assumption").

### Audience tailoring matrix

| Dimension | Bank / SBA lender | Equity investor | Internal team |
|---|---|---|---|
| Core question | Can you repay? | Can this return 10x+? | What do we do next? |
| Length | 15–25 pp, complete every section | 10–15 pp (deck carries the story; plan is diligence backup) | 1–3 pp lean plan, refreshed quarterly |
| Financial emphasis | 5-yr projections, DSCR ≥ 1.25, collateral, owner equity injection (SBA 7(a) typically wants ~10%+), conservative case | Growth rate, market size, unit economics (LTV:CAC ≥ 3:1 as a screen), path to next round | Burn, runway, next 90-day milestones |
| Market section | Prove demand is stable | Prove market is large and growing (credible TAM, expansion logic) | Prove the segment focus is right |
| Risk section | Emphasize downside protection and personal guarantees | Emphasize risks-with-mitigations; naming real risks builds credibility | Brutally honest; this is the working doc |
| Tone | Conservative; understate | Ambitious but evidence-backed | Direct; decisions over polish |

## Output format

Deliver a single markdown document (offer .docx conversion if the user needs to submit it):
- Title page block: business name, plan type, date, contact, confidentiality line for external audiences
- Sections per the chosen outline (lean or full), with all tables rendered as markdown tables
- Every number either sourced ("IBISWorld 2025", "Census County Business Patterns 2024") or labeled "Assumption:" with its basis
- Financial summary tables with column headers Year 1 / Year 2 / Year 3 (add Years 4–5 for lenders)
- Risk register as a table in the exact format above
- Close with an "Assumptions log" listing every assumed figure in one place, and a "Next steps" list (3–5 items with owners/dates)
- Flag any section the user must verify before submission (legal structure, license requirements, cited statistics)

## Quality checklist

Pass/fail every item before delivering:

1. Executive summary fits in 2 pages and makes sense read alone, with the ask (if any) stated in the first half.
2. The plan type matches the audience (no 25-page document for an internal idea review; no 2-pager for an SBA application).
3. Market size includes BOTH top-down and bottom-up estimates, and the narrative uses the more conservative one.
4. SOM ≤ 10% of SAM within 3 years, or an explicit mechanism justifies more.
5. Competition section names ≥ 3 real alternatives including the status quo, with a comparison table.
6. Every price, cost, and revenue figure is either sourced or labeled "Assumption:" — zero unlabeled numbers.
7. Use-of-funds table sums exactly to the funding ask.
8. Break-even is stated in both units and calendar months.
9. For lender audiences: DSCR computed and ≥ 1.25 in the base case.
10. Risk register has 5–8 risks, each with likelihood, impact, and a mitigation containing an action + timeframe.
11. Operations section includes capacity math or unit-flow that reconciles with the revenue projection (revenue never exceeds operational capacity).
12. Revenue projections and marketing plan agree: (customers needed) × (CAC) fits within the stated marketing budget.
13. No hedging filler ("we believe", "world-class", "revolutionary") — claims carry a number or a source.
14. Team section explains why THIS team wins, not just resumes.
15. Assumptions log exists and matches every "Assumption:" flag in the body.

## Common mistakes

- **Hockey-stick revenue with flat costs.** Year 3 revenue 8x year 1 while headcount and marketing barely move. Costs must scale with the driver: if revenue needs 500 more customers, show the CAC spend and the support hires that acquire and serve them.
- **"1% of a $50B market" sizing.** Top-down-only TAM math with no bottom-up path. Always show the customer-count × conversion × price build, and let it discipline the headline number.
- **No competitors claimed.** Instantly discredits the plan. The status quo is always a competitor; if literally no one solves this problem, address why the market has left money on the table.
- **Writing the executive summary first.** It ends up describing a plan that no longer exists after revisions. Write it last, from the finished sections.
- **One plan for every audience.** Sending the investor version (growth, dilution, exit) to a bank, which wants stability and repayment. Retarget with the tailoring matrix; at minimum rewrite the exec summary and financial emphasis.
- **Risk section as a disclaimer.** Three generic risks ("competition may increase") with "we will monitor" mitigations. Real mitigations name an action, an owner, and a date.
- **Operations as an afterthought.** Revenue projections that exceed physical capacity — e.g., a consultancy projecting $900k on 2 people (implies ~$450k/head; feasible only above ~$250/hr at 70% utilization — show that math or cut the number).
- **Precision theater.** "$1,247,893 revenue in year 3." False precision signals a spreadsheet, not judgment. Round projections sensibly ($1.25M) and put the precision into year-1 monthly numbers where it's earned.
- **Burying the ask.** The funding amount and use of funds appearing first on page 14. State it in the executive summary and repeat it in the financial plan.
- **Confusing the plan with the pitch.** Cramming narrative arc and design flourishes into a diligence document, or padding a deck's content to 20 pages. The plan proves; the deck (see **pitch-deck**) persuades.
