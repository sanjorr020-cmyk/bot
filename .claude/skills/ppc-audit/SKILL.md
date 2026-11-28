---
name: ppc-audit
description: "Audits paid search and paid social accounts end-to-end: finds wasted spend in search terms, placements, and overlapping audiences, validates conversion tracking, reviews structure and settings, diagnoses quality and relevance problems, runs budget reallocation math, and delivers a prioritized action plan with expected impact. Use when the user says things like \"audit my Google Ads account\", \"why is my CPA so high\", \"where is my ad budget being wasted\", \"review my PPC account\", \"my ROAS dropped, find out why\", \"check my conversion tracking\", \"should I restructure my campaigns\", \"which campaigns should I pause\", or \"prep an audit for a new client's ad account\"."
---

# PPC Account Audit

Run a structured, evidence-based audit of a paid advertising account (Google Ads, Microsoft Ads, Meta Ads, or similar) that separates measurement problems from spend problems, quantifies waste in currency rather than adjectives, and ends in a prioritized action plan where every recommendation has an expected impact and an effort estimate. The deliverable must let a stakeholder who never opens the ad platform decide what to fix first and why.

## When to use this skill

Use this skill when the user wants to evaluate an existing paid account: pre-engagement audits for agencies, quarterly account reviews, "performance dropped" investigations, waste hunts before a budget cut, or due diligence before scaling spend.

Do NOT use this skill for:
- Building new campaigns from scratch — use **google-ads** or **meta-ads**.
- Writing or improving ad creative — use **ad-copywriting**.
- Fixing the post-click experience — use **landing-page-cro**.
- Building keyword lists — use **keyword-research** (though the audit will flag keyword-level waste).
- Designing recurring performance reports — use **analytics-reporting** or **kpi-dashboard-design**.
- Designing controlled experiments on the findings — use **ab-testing**.
- Diagnosing drop-off after the click across the whole funnel — use **funnel-analysis**.

## Inputs to gather

Ask for these before starting. If the user cannot provide something, use the stated default and flag the assumption in the deliverable.

1. **Platform(s) and account access or exports.** Ideally: campaign/ad group/keyword performance reports, search terms report, placement report, and change history — last 90 days (default window: 90 days; use 180 for accounts spending under $3k/month so volume is judgeable).
2. **Monthly spend and currency.** Waste findings must be expressed in that currency.
3. **Business economics:** target CPA or target ROAS, average order value or LTV, and gross margin. Default if unknown: derive a break-even CPA as (AOV × gross margin) and treat 70% of break-even as the working target.
4. **What counts as a conversion** — and which conversion action is primary. If the user hesitates here, treat conversion tracking as suspect (Step 1 will confirm).
5. **Sales cycle length.** Default: 7 days for e-commerce, 30–90 days for B2B lead gen. This sets the attribution lookback you should judge against.
6. **Known constraints:** brand terms they must run, geos they must cover, compliance rules, seasonality (e.g., "Q4 is 45% of revenue").
7. **Prior context:** last restructure date, agency transitions, and whether auto-applied recommendations are on.

If the user has no exports, give them this pull list and proceed with whatever they paste in:

| Report | Where (Google Ads) | Where (Meta) | Used in step |
|--------|--------------------|--------------|--------------|
| Campaign performance, 90d | Campaigns view, segment by network | Ads Manager campaign view | 3, 5 |
| Search terms | Insights & Reports → Search terms | n/a | 2 |
| Placements | Insights & Reports → When & where ads showed | Breakdown → Placement | 2 |
| Audience overlap | n/a | Audiences → Actions → Show overlap | 2 |
| Conversion actions list | Goals → Conversions → Summary | Events Manager | 1 |
| Quality Score export | Add QS + component columns in keyword view | n/a (use relevance diagnostics) | 4 |
| Change history | Change history, filter to window | Account history | 3 |
| Day/hour, device, geo | Insights & Reports → When/Devices/Locations | Breakdowns | 2, 3 |

## Process

Work in this order — measurement first, because every later finding is only as trustworthy as the conversion data.

1. **Validate conversion tracking (gate step).**
   - List every conversion action, its source (tag, GA4 import, offline import, call tracking), counting method (one vs. every), click-through lookback window, and whether it is marked Primary or Secondary.
   - Red flags to check explicitly: page-view "conversions" (e.g., visits to /pricing) marked Primary; duplicate actions double-counting (tag + GA4 import of the same event both Primary); "every" counting on lead-gen forms (inflates conversions 10–30%); lookback window shorter than the sales cycle; zero conversions recorded in the last 7 days on an action that historically fired daily (tag broke); Enhanced Conversions / CAPI absent on accounts spending >$10k/month.
   - Cross-check platform-reported conversions against the source of truth (CRM closed leads, e-commerce orders) for the same window. Divergence >20% means every downstream metric needs a stated correction factor.
   - **Decision point:** if the primary conversion action is broken or meaningless, cap the rest of the audit at structural/settings findings and make "fix tracking" Priority #1 with everything else sequenced after it. Do not compute budget reallocation on bad conversion data.

2. **Run the waste finders.** Quantify each bucket in currency over the audit window.
   - **Search terms report:** sort by cost, zero conversions, descending. Flag terms with spend ≥ 2× target CPA and 0 conversions. Then run an N-gram pass: group terms by shared 1- and 2-word tokens (e.g., "free", "jobs", "salary", "diy", "login", competitor names they don't want) and total the cost per token. N-grams find distributed waste that single terms hide — a "free" n-gram burning $900 across 200 different queries never shows up in a top-terms sort.
   - **Placements (Display/PMax/Video):** pull the placement report; flag mobile app placements (typically 60–90% of Display waste via accidental clicks), made-for-advertising domains, and any placement with ≥ 1× target CPA spent and 0 conversions. Check whether an app-category or placement exclusion list exists at all.
   - **Overlapping audiences (Meta / paid social):** use the audience overlap tool on any two ad sets sharing >30% audience; overlapping ad sets bid against each other and split learning. Also flag remarketing audiences that don't exclude converters, and prospecting campaigns without a remarketing exclusion (they pay prospecting CPMs for warm traffic).
   - **Network and location leakage:** Search Partners performance split from Google Search (pause if CPA > 1.5× core search); Display Expansion enabled on Search campaigns; location setting on "Presence or interest" when the business only serves a physical area; ads running 24/7 when conversions only happen in business hours (check the day/hour report for lead-gen with phone-call dependence).
   - Sum all buckets into a single **monthly waste estimate** with a low/high range.

3. **Review structure and settings.**
   - Match types and intent separation: are brand and non-brand in separate campaigns with separate budgets? (Blended brand campaigns overstate account ROAS — brand typically converts at 3–10× non-brand rates and hides non-brand failure.)
   - Granularity: flag ad groups with >20 keywords or single-keyword-ad-group sprawl with <100 impressions each; both starve data. Healthy target: tightly themed ad groups where every keyword could be served by the same ad.
   - Bidding strategy fit: Target CPA/ROAS need roughly 30+ conversions per campaign per 30 days to optimize well (50+ for tROAS). Flag smart bidding on campaigns with <15 conversions/month — recommend Maximize Conversions without a target, or consolidation.
   - Budget-limited campaigns: list campaigns "Limited by budget" with CPA below target — that is free growth being rationed. Conversely, list campaigns spending unconstrained above target CPA.
   - Settings sweep: auto-applied recommendations ON (turn off — a top silent-drift cause), ad rotation, device bid adjustments contradicting device performance, negative keyword lists absent or not applied account-wide, broad match keywords running on manual CPC (broad match is only defensible with smart bidding and dense negatives).
   - Change history: correlate any performance cliff in the trend data with dated changes (bid strategy switches reset learning for ~1–2 weeks; note these before blaming the strategy).

4. **Diagnose quality and relevance.**
   - Google: export Quality Score with its three components. Interpret by component, not the 1–10 number: low *Expected CTR* → ad copy/keyword mismatch (route fixes to **ad-copywriting**); low *Ad Relevance* → ad group themes too broad (structure fix); low *Landing Page Experience* → route to **landing-page-cro**. Prioritize keywords with QS ≤ 4 AND spend in the top quartile.
   - Benchmarks to judge against (typical ranges, note vertical variance): Search CTR 3–6% non-brand, 10%+ brand; Display CTR 0.4–0.6%; Search conversion rate 3–5% lead-gen, 2–3% e-commerce; Meta prospecting CTR (link) 0.8–1.5%. Impression share lost to *rank* (not budget) >40% on priority campaigns signals a quality or bid problem.
   - Ad strength/creative coverage: RSAs with <10 unique headlines, no pinned compliance copy where required, ad groups running a single ad, Meta ad sets with creative older than 60 days or frequency >4 on a 7-day window (fatigue signal).

5. **Run the budget reallocation math.**
   - Build a table: campaign, spend, conversions, CPA (or ROAS), impression share, IS lost to budget, target delta.
   - Reallocate using marginal thinking, not averages: money moved TO a campaign buys its *marginal* conversions (assume marginal CPA ≈ 1.2–1.4× current CPA as headroom shrinks, worse if IS is already >80%); money moved FROM a wasteful campaign loses conversions at that campaign's actual CPA (often ~0 if it wasn't converting).
   - Only recommend increases into campaigns that are BOTH below target CPA AND losing impression share to budget. Cap any single recommended budget change at ±20–30% per step to avoid smart-bidding relearning shocks; state the multi-week ramp.
   - Produce a before/after projection with explicit assumptions (see worked example below).

6. **Assemble the prioritized action plan.**
   - Score every finding with ICE: Impact (monthly currency effect, 1–5), Confidence (evidence strength, 1–5), Ease (implementation effort inverted, 1–5). Priority = I × C × E; sort descending.
   - Sequence dependencies explicitly: tracking fixes before bidding changes; negative keywords before budget increases; structure changes batched (each restructure triggers relearning).
   - For each item, write: the finding with its evidence number, the specific action, expected monthly impact as a range, effort (hours or S/M/L), and owner.
   - Sanity-check the plan: expected total impact should not exceed the waste estimate plus realistic efficiency gains. If the plan claims to cut CPA 60%, you have overpromised — typical strong audit outcomes are 15–30% CPA improvement over 60–90 days.

## Frameworks & templates

### Template 1 — Audit scorecard (fill in per section)

```
PPC AUDIT SCORECARD — [Account] — [Date] — Window: [90 days] — Spend in window: [$X]

Section                      Grade (A–F)  Monthly waste / risk   Top finding
1. Conversion tracking       [ ]          [$ or "measurement"]   [one line]
2. Search term waste         [ ]          [$___–$___]            [one line]
3. Placements & networks     [ ]          [$___–$___]            [one line]
4. Audience overlap/exclusions [ ]        [$___–$___]            [one line]
5. Structure & settings      [ ]          [risk note]            [one line]
6. Bidding & budgets         [ ]          [$___ misallocated]    [one line]
7. Quality & creative        [ ]          [efficiency drag %]    [one line]

TOTAL ESTIMATED MONTHLY WASTE: $___–$___ ([__]% of spend)
Grading: A = no action needed; C = leaking money, fixable in <1 week; F = actively broken.
```

### Template 2 — Action plan line item

```
#[rank]. [Action verb + specific change]
Evidence: [metric, e.g., "'free' n-gram: $842/mo, 0 conversions across 214 queries"]
Action: [exact change, e.g., "Add 'free' as phrase-match negative to account-level list;
        review 12 exceptions listed in Appendix B first"]
Expected impact: [$X–$Y/mo saved OR +N–M conversions/mo] within [timeframe]
Effort: [S <1h / M 1–4h / L >4h]   ICE: [I]×[C]×[E] = [score]   Owner: [role]
Dependency: [none / "after tracking fix #1"]
```

### Template 3 — Conversion tracking validation checklist

```
CONVERSION TRACKING AUDIT — [Account]
Action name        Source        Counting  Lookback  Primary?  Last fired  Verdict
[Purchase]         [Tag/CAPI]    [Every]   [30d]     [Y]       [today]     [OK / fix]
[Lead form]        [GA4 import]  [One]     [30d]     [Y]       [3d ago]    [OK / fix]
[Pricing pageview] [Tag]         [Every]   [30d]     [Y]       [today]     [DEMOTE to Secondary]

Cross-check: Platform conversions [___] vs. source of truth [___] over same window
Divergence: [__]%  → Correction factor applied to audit: [1.0 / 0.__]
Enhanced Conversions / CAPI: [on / off / partial]   Offline import: [yes / no / n-a]
VERDICT: [Trustworthy / Usable with correction factor / Broken — gate the audit]
```

### Example finding write-up (use this evidence → interpretation → recommendation pattern)

> **Finding 2.3 — Mobile app placements consuming 71% of Display spend.**
> Evidence: Placement report, Mar 1–May 31: $6,120 of $8,610 Display spend on mobile app
> placements; 2 conversions ($3,060 CPA vs. $85 target). Top 5 apps are casual games.
> Interpretation: Classic accidental-click inventory; conversion rate 0.03% vs. 0.9%
> for web placements in the same campaigns.
> Recommendation: Exclude all app categories at account level; keep web placements.
> Expected impact: $1,900–$2,100/mo saved. Effort: S. ICE: 5×5×5 = 125. Dependency: none.

### Worked example — budget reallocation math

Account: $20,000/mo, target CPA $80, 90-day data.

| Campaign        | Spend/mo | Conv/mo | CPA   | IS   | IS lost to budget |
|-----------------|----------|---------|-------|------|-------------------|
| Brand           | $2,000   | 90      | $22   | 92%  | 0%                |
| NB — Core       | $8,000   | 130     | $62   | 55%  | 25%               |
| NB — Broad      | $6,000   | 45      | $133  | 70%  | 0%                |
| Display Prospect| $4,000   | 8       | $500  | n/a  | 0%                |

Moves: cut Display to $1,000 (retain remarketing only), trim NB-Broad to $4,000 pending negative-keyword cleanup, add $5,000 to NB-Core (below target AND budget-capped).
- Freed: $5,000. Conversions lost: Display ~6 (its CPA was $500 — cheap to lose), Broad ~15 at $133.
- Gained: NB-Core at marginal CPA ≈ $62 × 1.3 = $81 → $5,000 / $81 ≈ 62 conversions.
- Net: +41 conversions/mo on the same $20k; blended CPA falls from $73 to ~$63 (−14%).
- Ramp: NB-Core +$1,600/wk over 3 weeks (≤30% steps); re-check CPA weekly; abort further increases if marginal CPA exceeds $95.

### Statistical thresholds for judging anything

Do not label an element a winner or loser without minimum volume: ~100 clicks before judging CTR, ~30 conversions (or spend ≥ 3× target CPA with 0 conversions) before judging CPA, 2+ full business cycles (usually 2–4 weeks) before judging a bid-strategy change. Below these thresholds, mark findings "insufficient data" rather than guessing.

## Output format

Deliver a single audit document with this structure:

1. **Executive summary** (≤1 page): account grade, total monthly waste range in currency, the 3 biggest findings, and one sentence on what happens if nothing changes.
2. **Scorecard** (Template 1, filled).
3. **Findings by section** (mirroring Process steps 1–4): each finding = evidence (numbers, from named reports) → interpretation → recommendation. No recommendation without a number behind it.
4. **Budget reallocation table** with before/after projection and stated assumptions (as in the worked example).
5. **Prioritized action plan**: 8–15 items in Template 2 format, ICE-sorted, split into "Week 1 quick wins", "Weeks 2–4", and "Quarter" horizons.
6. **Assumptions & data caveats**: window used, tracking correction factor if any, anything the user couldn't provide.

Match the user's context: an agency pitching a prospect wants the executive summary punchy and waste-forward; an in-house team wants the action plan and dependencies detailed.

## Quality checklist

- [ ] Conversion tracking was audited FIRST, and its verdict is stated before any performance judgment.
- [ ] Every waste figure is in currency over a stated window, with a low/high range — no "significant waste" without a number.
- [ ] Search term findings include an N-gram pass, not just a top-terms sort.
- [ ] Brand and non-brand performance are reported separately everywhere.
- [ ] Every "pause/cut" recommendation cites spend AND the conversion threshold it failed (e.g., "≥3× target CPA, 0 conversions").
- [ ] No performance verdict rests on fewer than ~30 conversions or ~100 clicks without an "insufficient data" flag.
- [ ] Budget moves use marginal CPA assumptions (stated), respect the ±20–30% ramp rule, and only increase budgets on campaigns both under target and budget-limited.
- [ ] Smart bidding recommendations respect conversion-volume minimums (≈30/mo tCPA, ≈50/mo tROAS).
- [ ] Quality Score findings are diagnosed by component with a routed fix, not reported as a bare 1–10 number.
- [ ] Change history was checked before attributing any performance cliff to a strategy.
- [ ] Action plan items each have evidence, expected impact range, effort, ICE score, and dependencies; total claimed impact ≤ measured waste + realistic efficiency gains (15–30% CPA improvement ceiling).
- [ ] Auto-applied recommendations status is explicitly reported.
- [ ] Assumptions and data gaps section exists and lists every default the audit relied on.

## Common mistakes

- **Auditing performance on broken tracking.** If page views count as conversions, every CPA in the account is fiction; a reallocation plan built on it moves money toward whatever fires the fake event most. Gate everything on Step 1.
- **Judging blended metrics.** Account-level ROAS with brand mixed in is a vanity number — brand converts at 3–10× non-brand and can mask a non-brand program that loses money on every click.
- **Top-terms-only search term review.** The costliest waste is usually distributed across hundreds of low-spend queries sharing a toxic token. Skipping the N-gram pass misses it entirely.
- **Recommending pauses on thin data.** "Pause this keyword, 4 clicks and no conversions" is noise, not analysis. Apply the volume thresholds.
- **Big-bang restructures.** Rebuilding everything at once resets smart-bidding learning across the whole account and makes it impossible to attribute improvement to any change. Sequence and batch.
- **Reallocating at average CPA.** Assuming new budget converts at the campaign's current average CPA ignores diminishing returns; use a 1.2–1.4× marginal multiplier and check impression-share headroom first.
- **Confusing IS lost to budget with IS lost to rank.** The first is fixed with money, the second with quality; recommending budget for a rank problem burns cash at the same bad efficiency.
- **Blaming strategy for learning-phase dips.** A tCPA switch 10 days ago explains a bad week; check change history before declaring the strategy failed.
- **Negatives that amputate.** Adding a broad/phrase negative like "free" without scanning for legitimate queries containing it ("free shipping [product]") cuts converting traffic. Always list exceptions before applying.
- **Waste-only audits.** An audit that only cuts and never identifies scale opportunities (under-target campaigns capped by budget, IS headroom) reads as risk-averse and leaves growth on the table — the reallocation table must show both sides.
