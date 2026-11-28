---
name: market-research
description: "Runs end-to-end market research: sizes markets with TAM/SAM/SOM (top-down and bottom-up), designs unbiased surveys and customer interview guides, sources secondary data, analyzes trends, and synthesizes findings into an opportunity assessment. Use when the user asks to size a market, calculate TAM/SAM/SOM, validate a business or product idea, design a survey or questionnaire, write customer interview questions, find industry data or reports, analyze market trends, assess whether a market opportunity is worth pursuing, or prepare market evidence for a pitch or plan."
---

# Market Research

Turn a vague "is this market worth it?" question into a defensible, numbers-backed opportunity assessment. This skill covers sizing the market (TAM/SAM/SOM via two independent methods), gathering primary evidence (surveys and interviews designed to avoid bias), mining secondary sources, reading trend signals, and synthesizing everything into a go/no-go recommendation with explicit confidence levels and assumptions.

## When to use this skill

Use when the user needs to:
- Size a market (TAM/SAM/SOM) for a business plan, pitch deck, or internal decision
- Validate demand for a new product, feature, or market entry before building
- Design a customer survey or interview script that produces trustworthy answers
- Find and evaluate secondary data (industry reports, government stats, filings)
- Identify and interpret market trends (growth, decline, shifts in buyer behavior)
- Package research into an opportunity assessment with a recommendation

Do NOT use for adjacent jobs — hand off instead:
- Profiling competitors' features, pricing, and positioning → **competitor-analysis**
- Turning research into buyer personas → **customer-personas** (this skill feeds it raw data)
- Deciding launch strategy, channels, and sequencing → **go-to-market**
- Setting price points from willingness-to-pay data → **pricing-strategy**
- Search demand volume as a proxy for market interest → **keyword-research**
- Mining existing support tickets, reviews, and NPS verbatims → **customer-feedback-analysis**
- Assembling the full business plan or investor deck → **business-plan** / **pitch-deck**

## Inputs to gather

Ask the user for these before starting. Where they don't know, apply the default and state it as an assumption in the deliverable.

1. **The decision this research must inform.** ("Should we build X?", "Which segment first?", "Is the TAM big enough for VC?") Default: general opportunity validation.
2. **Product/service and category.** One sentence on what it does and who pays.
3. **Geography.** Default: user's home country first, global TAM as a secondary figure.
4. **Target customer hypothesis.** Segment, company size, role, or demographic. Default: derive from the product description and flag as unvalidated.
5. **Price point or monetization model.** Needed for bottom-up sizing. Default: use 2-3 competitor price points and show a range.
6. **Budget and timeline for primary research.** Default: assume $0 budget and 2 weeks — free survey tools, own-network recruiting, 5-8 interviews.
7. **What research already exists.** Prior surveys, analytics, sales data, past reports. Never re-collect what they already have.
8. **Audience for the output.** Investors want TAM defensibility; internal teams want the go/no-go logic. Default: internal decision memo.

## Process

1. **Frame the research question as a falsifiable statement.** Rewrite the user's ask as 1-3 hypotheses, e.g., "At least 20% of US boutique gyms (10-50 staff) would pay $99+/mo for automated class scheduling." Every later step must attack these hypotheses, not confirm them. Define upfront what evidence would kill the idea.

2. **Size the market top-down.** Start from the largest credible published number and narrow:
   - TAM (Total Addressable Market): everyone who could ever buy the category, globally or in scope geography. Source from industry reports, government data, or public-company filings.
   - SAM (Serviceable Addressable Market): the slice reachable with this product, geography, language, and channel. Typically 5-30% of TAM; justify each filter with a number.
   - SOM (Serviceable Obtainable Market): realistic 1-3 year capture. For a new entrant, 1-5% of SAM is credible; above 10% requires strong evidence (existing distribution, no incumbent). State the capture assumption explicitly.

3. **Size the market bottom-up (mandatory second method).** Count buyable units × realistic price:
   - Formula: `# of target customers × % with the problem × % willing to pay × annual contract value`.
   - Get customer counts from census/statistical agencies, LinkedIn Sales Navigator filters, industry association member counts, or app-store/marketplace listing counts.
   - **Decision point:** compare bottom-up to top-down. If they differ by less than 3x, present the range. If more than 3x apart, one set of assumptions is broken — audit both, and trust bottom-up (its assumptions are inspectable). Never average two incompatible numbers.

4. **Mine secondary sources before spending on primary research.** Work in this order (cheapest and most credible first):
   - Government/official: census bureaus, labor statistics (BLS), trade data, central-bank and regulator reports — free, authoritative, often 1-2 years lagged.
   - Public filings: 10-Ks and S-1s of players in the space — search for "market opportunity" sections; note these are self-interested estimates.
   - Analyst/industry: Gartner, Forrester, IBISWorld, Statista, Grand View Research, McKinsey — cite the freshest edition; press releases summarizing paid reports often carry the headline CAGR and market size for free.
   - Trade associations and academic studies for niche verticals.
   - For every number captured, record: source, publication year, methodology (if stated), and whether the definition of "market" matches yours. Discard numbers older than 3 years unless nothing newer exists, and flag them.

5. **Run trend analysis.** Answer "is this market getting bigger or smaller, and why?":
   - Pull 3-5 years of the market-size series and compute CAGR: `(end/start)^(1/years) - 1`. Under 3% = mature/flat; 3-10% = healthy; over 10% = high growth (verify it's not one report's hype — find a second source).
   - Check Google Trends (5-year view) for category search interest direction; cross-check with **keyword-research** if search demand is central to the thesis.
   - Identify 2-4 structural drivers or headwinds: regulation, technology shifts, demographic change, funding activity (Crunchbase deal counts), incumbent exits/entries.
   - **Decision point:** a big but shrinking market usually loses to a smaller market growing 15%+ — say so explicitly if the data shows it.

6. **Design the survey (if primary quantitative data is needed).** Skip if secondary + interviews already answer the hypotheses.
   - Length: 8-12 questions, under 5 minutes to complete. Completion rates drop sharply past 10 minutes.
   - Structure: screener questions first (disqualify non-target respondents early), behavior questions before attitude questions, demographics last.
   - Question rules — every question must pass all four:
     a. No leading language ("How much do you love...") — neutral framing only.
     b. One concept per question — split double-barreled questions ("fast and affordable").
     c. Ask about past behavior over future intent wherever possible ("How many times in the last 3 months did you..." beats "Would you...") — stated intent overstates real purchase behavior by roughly 2-5x.
     d. Balanced scales: 5-point Likert with a true midpoint, labeled at every point, same direction throughout.
   - Sample size: n≥100 for directional reads; n≈385 for ±5% margin of error at 95% confidence on a large population; per-segment cuts need n≥50 each to be reportable.
   - Expected response rates: 20-30% from an engaged own email list, 5-15% from a lukewarm list, 1-3% from cold outreach, near-guaranteed but paid via panels (Prolific, Pollfish, ~$1-5 per complete). Plan invitations accordingly.
   - Pilot with 5 people before launch; fix any question that gets misread.

7. **Design and run customer interviews (always recommend at least a few).**
   - 5-8 interviews per segment surfaces ~80% of major themes; plan 10-15 total across 2 segments. 25-30 minutes each.
   - Recruit from the target segment, not friends. Offer a $25-50 gift card for consumers, $50-100 for professionals, or a results summary for B2B peers.
   - Use the interview guide template below. Core discipline: ask about specific past events, never hypotheticals; follow every claim with "tell me about the last time that happened."
   - Record (with consent) and tag quotes to hypotheses while transcribing.

8. **Synthesize into the opportunity assessment.**
   - Score each hypothesis: Supported / Mixed / Refuted, with the 2-3 strongest pieces of evidence for each and a confidence level (High = 2+ independent sources agree; Medium = single decent source; Low = inference or stale data).
   - Assemble the deliverable per the Output format section.
   - **Decision point — the recommendation:** GO (SOM supports the business model, demand evidence Supported, trend flat or growing), CONDITIONAL GO (name the 1-2 assumptions that must be validated next and how), or NO-GO (state which killed it: market too small, shrinking, or demand unvalidated). Never end without one of these three.

## Frameworks & templates

### TAM/SAM/SOM worked example (bottom-up, B2B SaaS)

Product: scheduling software for US boutique fitness studios at $99/mo ($1,188 ACV).

| Layer | Calculation | Value |
|---|---|---|
| TAM | 105,000 US fitness facilities (IBISWorld 2025) × $1,188 | $124.7M |
| SAM | 41,000 boutique studios (10-50 staff, per census size-class data) × 70% still scheduling manually (survey, n=112) × $1,188 | $34.1M |
| SOM (yr 3) | 3% of SAM's 28,700 studios = 860 customers × $1,188 | $1.02M ARR |

Top-down cross-check: "fitness management software" market ≈ $450M US (Grand View, 2024); boutique-studio slice ≈ 8-10% ≈ $36-45M — within 1.5x of the bottom-up SAM, so the range $34-45M is presented. Always show the math table like this, one row per layer, sources named inline.

### Survey question bank — biased vs. fixed

| Biased draft | Why it fails | Unbiased rewrite |
|---|---|---|
| "How much do you love our easy-to-use scheduling idea?" | Leading + assumes positive | "How useful, if at all, would scheduling software be for your studio? (Not at all / Slightly / Moderately / Very / Extremely)" |
| "Would you pay $99/mo for this?" | Hypothetical intent, anchored | "What do you currently spend per month on scheduling tools or admin time?" then "At what monthly price would this be so expensive you wouldn't consider it?" (Van Westendorp item) |
| "Do you struggle with slow and confusing tools?" | Double-barreled + leading | Split: "How would you rate your current tool's speed?" / "...ease of use?" (separate 5-point scales) |
| "Will you switch tools next year?" | Future intent | "Have you switched scheduling tools in the past 2 years? (Yes/No)" + "What prompted it?" (open) |

### Customer interview guide template (25-30 min)

```
INTRO (2 min)
"Thanks for the time. I'm researching how [role] handles [problem area].
No right answers — I'm not selling anything today. OK to record for notes?"

CONTEXT (5 min)
1. Walk me through your role and where [task area] fits in your week.
2. When did you last deal with [problem]? Walk me through exactly what happened.

PROBLEM DEPTH (10 min)
3. What did that cost you — time, money, frustration? Can you put a number on it?
4. What have you already tried to fix it? What happened with each attempt?
5. If nothing changes, what happens? (Tests urgency — "nothing" = weak problem.)

CURRENT ALTERNATIVES (5 min)
6. What tools/processes do you use today? What do you pay?
7. What would make you switch away from your current approach? What's stopped you before?

WRAP (3 min)
8. If you had a magic wand for this area, what would it do? (Ideas, not commitments.)
9. Who else do you know who deals with this? (Recruiting chain.)
NEVER ASK: "Would you buy my product?" — pitch nothing until the final minute, if at all.
```

### Secondary source log template

Track every figure the moment it is captured — this table becomes the appendix:

| Figure used | Value | Source | Year | Market definition matches ours? | Trust level |
|---|---|---|---|---|---|
| US fitness facilities count | 105,000 | IBISWorld industry report | 2025 | Yes — all facility types, filtered later | High |
| Fitness mgmt software market | $450M | Grand View press release | 2024 | Partial — includes enterprise gyms | Medium |
| Studios scheduling manually | 70% | Own survey, n=112 | 2026 | Yes | Medium (single sample) |

Trust levels: High = official statistics or 2+ agreeing sources; Medium = single reputable source; Low = vendor-sponsored, stale (>3 yrs), or definition mismatch. Never let a Low-trust figure carry the headline number.

### Hypothesis scorecard template

```
H1: [statement with a number, e.g., "≥20% of segment X pays for a solution today"]
  Verdict: Supported / Mixed / Refuted
  Evidence: [source 1 + figure] ; [source 2 + figure] ; [strongest interview quote]
  Confidence: High / Medium / Low — because [one line]
```

## Output format

Deliver a single opportunity assessment document (markdown, 2-4 pages) with these sections in order:

1. **Executive summary** — 3-5 bullets: market size range, growth rate, demand verdict, recommendation. Readable standalone in 60 seconds.
2. **Recommendation** — GO / CONDITIONAL GO / NO-GO with the deciding rationale in 2-3 sentences.
3. **Market size** — TAM/SAM/SOM table showing both top-down and bottom-up math, sources and years cited inline, final range stated (never a false-precision single number like "$34,127,412").
4. **Trends** — CAGR with source, 2-4 drivers/headwinds, direction call.
5. **Demand evidence** — hypothesis scorecards; survey topline stats (n, response rate, key percentages); 3-5 verbatim interview quotes tagged to hypotheses.
6. **Risks and open questions** — top 3-5 unknowns, each with the cheapest next test to resolve it.
7. **Appendix** — full source list (source, year, figure used), survey instrument, interview guide.

Also hand the user any survey instrument or interview guide as ready-to-use standalone text they can paste into Typeform/Google Forms or read from live.

## Quality checklist

Pass every item before delivering:

- [ ] Market sized by BOTH top-down and bottom-up; figures within 3x or the discrepancy is diagnosed
- [ ] Every market-size layer (TAM, SAM, SOM) shows its arithmetic, not just a number
- [ ] SOM capture rate is ≤5% of SAM, or the higher figure is explicitly justified
- [ ] Every cited statistic has a named source and publication year; nothing older than 3 years without a flag
- [ ] At least 2 independent sources for the headline market size
- [ ] CAGR computed and classified (flat / healthy / high-growth) with a second-source sanity check for claims over 10%
- [ ] Survey (if designed) is ≤12 questions, screener-first, with zero leading, double-barreled, or unlabeled-scale questions
- [ ] Survey sample plan states target n, expected response rate, and required invitations
- [ ] Interview guide asks about specific past events; contains no "would you buy" question
- [ ] Each hypothesis has a Supported/Mixed/Refuted verdict with a confidence level
- [ ] Deliverable states a GO / CONDITIONAL GO / NO-GO recommendation
- [ ] Sizes are presented as ranges, not single false-precision numbers
- [ ] All assumptions the user didn't confirm are listed and labeled as assumptions
- [ ] Risks section names the cheapest next test for each open question

## Common mistakes

- **Quoting one analyst report's TAM as gospel.** Paid-report headline numbers vary 2-4x for the same market depending on category definition. Always check what the report counts as "the market" and triangulate with a second source.
- **Top-down only.** "1% of a $10B market" is not a plan; it's an applause line. Bottom-up counting of reachable customers × price is what makes SOM defensible.
- **Confusing TAM with SAM.** Global TAM for a product only sold in English, in one country, through one channel misleads everyone. Apply and quantify each narrowing filter.
- **Treating stated intent as demand.** "87% said they'd buy" converts to real purchases at roughly a fifth to half that rate. Weight past behavior (current spend, switching history, workarounds built) far above intent answers.
- **Leading the witness.** Describing your product enthusiastically and then asking opinions produces polite lies. Interview about their problem for 25 minutes; mention your solution last or never.
- **Surveying friends and existing fans.** Convenience samples of people who like you inflate every positive metric. Screen respondents against the target-segment definition and report how many were screened out.
- **Reporting segment cuts from tiny cells.** "60% of enterprise respondents agreed" is noise when the cell is n=10. Enforce n≥50 per reported segment or label it anecdotal.
- **Averaging incompatible estimates.** When top-down says $400M and bottom-up says $40M, the average is meaningless. Find the broken assumption — usually a category-definition mismatch.
- **Ignoring market direction.** A $5B market shrinking 8%/year is a worse home than a $300M market growing 20%/year for a new entrant. Always pair size with trajectory.
- **Research that never lands on a decision.** Fifteen pages of data with no recommendation wastes the work. The deliverable exists to say GO, CONDITIONAL GO, or NO-GO — and what to test next.
