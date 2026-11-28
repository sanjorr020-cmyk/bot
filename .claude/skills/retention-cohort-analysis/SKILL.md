---
name: retention-cohort-analysis
description: "Builds cohort retention tables and interprets retention curves, churn patterns, and LTV to show whether a business keeps the customers it acquires. Use when the user asks to build a cohort analysis, read or explain a retention curve, calculate LTV or CAC payback, separate voluntary from involuntary churn, compute net revenue retention, find their product's aha moment, check product-market fit via retention, or decide which retention lever to invest in."
---

# Retention & Cohort Analysis

Guide the user from raw user/transaction data to a cohort retention table, a correct reading of the curve shape, an honest LTV number, and a ranked list of retention levers. Retention analysis answers one question: "Of the people who started in period X, how many are still delivering value in period X+n — and why?" Acquisition metrics can be bought; retention cannot, which is why this analysis is the closest thing to a product-market-fit instrument that exists. Keep every calculation cohort-based — blended averages are where retention analysis goes to die.

## When to use this skill

Use this skill when the user wants to:
- Build a cohort table (weekly/monthly, activity or revenue retention)
- Interpret a retention curve: flattening, decaying to zero, or smiling
- Compute churn correctly (logo vs revenue, gross vs net, voluntary vs involuntary)
- Calculate LTV, LTV:CAC, or CAC payback without the classic errors
- Find aha-moment correlates (early actions that predict long-term retention)
- Prioritize retention improvement work

Do NOT use this skill for:
- Designing the intervention playbook for at-risk customers (win-back emails, save offers, dunning sequences) — use **churn-prevention**
- Diagnosing drop-off in a signup or checkout flow (single-session conversion) — use **funnel-analysis**
- Validating whether a retention fix worked via experiment — use **ab-testing**
- Building the recurring dashboard that tracks these metrics — use **kpi-dashboard-design** or **analytics-reporting**
- Redesigning first-run experience once activation is identified as the lever — use **customer-onboarding**
- Feeding LTV into revenue models or fundraising projections — use **financial-projections**
- Understanding *why* users churn from survey/interview data — use **customer-feedback-analysis**

## Inputs to gather

Ask for these before starting. Where the user doesn't know, apply the default and state that you did.

1. **Business model** — SaaS subscription, consumer app, ecommerce/repeat purchase, marketplace, or usage-based. This drives every benchmark and formula choice. No default; must ask.
2. **The retention event** — what counts as "retained"? Default by model: SaaS = active subscription (not login); consumer app = a core action (message sent, workout logged — not app open); ecommerce = repeat purchase; marketplace = completed transaction on the demand side.
3. **Natural usage frequency** — how often *should* a healthy user use it? Default: daily-use products → weekly cohort periods; weekly-use → monthly periods; ecommerce → 30/60/90-day repeat windows. Never analyze at a finer grain than the natural frequency (a monthly-use product will always look terrible on D7 retention).
4. **Data available** — a user table with signup dates plus an events/orders table with timestamps, or an existing export (CSV, SQL access, Amplitude/Mixpanel/GA4 export, Stripe/billing data). If only aggregate numbers exist ("our churn is 5%"), warn that blended numbers can't support cohort analysis and offer the diagnostic questions instead.
5. **Time span** — default: at least 6 complete periods for the oldest cohort (6 months of monthly cohorts, or 8+ weeks of weekly). Fewer than 4 periods → say the curve shape can't be read yet and analyze what exists with that caveat.
6. **Unit economics inputs (for LTV)** — ARPA/AOV, gross margin %, and CAC. Defaults if unknown: SaaS gross margin 75-80%, ecommerce 30-50%, marketplace take-rate-dependent. Flag any default used in the deliverable.
7. **The decision at stake** — "is retention good enough to scale spend?", "why did churn jump?", "what should the product team fix?" Shape the output around the decision.

## Process

1. **Define the retention triple: cohort key, retention event, period grain.** Cohort key = the period of a user's *first* value event (first purchase, subscription start, activation) — not account creation if signup and first value differ meaningfully. Write the definition down verbatim in the output; ambiguous definitions are the #1 source of unreproducible retention numbers.

2. **Choose the retention type and state it explicitly.**
   - *Classic (N-period) retention*: active in period N exactly. Standard for cohort tables.
   - *Unbounded (return) retention*: active in period N **or any later period**. Use for infrequent products; note that recent periods are biased downward (users haven't had time to return).
   - *Range retention*: active at least once within a window (e.g., week 4-6). Good middle ground for spiky usage.
   Default to classic unless usage is naturally sporadic.

3. **Build the cohort table.** Rows = cohorts (newest at bottom), columns = periods since start (M0, M1, ... or W0, W1, ...), cells = % of cohort retained. The table is a triangle — recent cohorts have fewer observable periods. Exclude the current incomplete period entirely. If cohort sizes are under ~200 users, add the raw N per cohort and warn that single-cohort swings under roughly ±5 percentage points are likely noise. Use the SQL template below if the user has query access; otherwise compute from their export.

4. **Read the curve — three shapes, three verdicts.** Plot or read the *column averages weighted by cohort size*, and separately the most mature 2-3 cohorts:
   - **Flattens to a plateau above zero** (e.g., drops to 35% by M3 then holds 30-35% through M12): a retained core exists — product-market fit for some segment. Growth math works.
   - **Decays toward zero with no asymptote**: leaky bucket. Every acquired user eventually leaves; scaling acquisition scales losses. Do not compute long-horizon LTV from this curve — there is no stable lifetime.
   - **Smiles (dips then rises)**: resurrection is happening — seasonal usage, win-back campaigns, or a product improvement pulling old users back. Only visible with unbounded retention; verify it isn't a data artifact (e.g., a bot, an event definition change) before celebrating.
   Also read **down the columns**: are newer cohorts retaining better at M1/M3 than old ones? Improving columns = product or onboarding improvements landing. Degrading columns = channel mix shifting to lower-intent users or product regression.

5. **Decompose churn before prescribing anything.**
   - *Voluntary vs involuntary*: in subscription businesses, failed payments typically cause 20-40% of gross churn. Pull cancellation-reason / payment-failure data. Involuntary churn is a dunning/billing fix, not a product problem — hand the fix design to **churn-prevention**.
   - *Logo vs revenue churn*: count of accounts lost vs dollars lost. A business can lose 10% of logos (all small accounts) and only 3% of revenue.
   - *Gross vs net revenue retention (NRR)*: NRR = (starting MRR of a cohort − churn − contraction + expansion) ÷ starting MRR, measured on the same cohort 12 months later. Benchmarks: SMB SaaS 90-100% is normal, 100%+ is good; enterprise SaaS 110%+ is good, 120-130% is best-in-class. NRR above 100% means the business grows even with zero new sales.

6. **Compute LTV the defensible way.** Prefer the *cumulative cohort method*: sum gross-margin dollars per user from the cohort table over a fixed horizon (24 months for SaaS, 12 for ecommerce), extrapolating only the flat part of the curve. Use the formula shortcut (LTV = ARPA × gross margin ÷ monthly churn) *only* when the curve has visibly flattened and churn on the plateau is stable — and say which churn rate was used. Then compute **LTV:CAC** (healthy ≥ 3:1) and **CAC payback** = CAC ÷ (ARPA × gross margin) in months (good: <12 months SMB, <18-24 enterprise, <6 ecommerce). If the curve decays to zero, report cumulative 12- or 24-month contribution per user instead of "LTV" and say why.

7. **Hunt the aha moment.** Take the most mature cohorts and split them into retained-at-M3+ vs churned-before-M3. For 5-10 candidate early behaviors (first-week actions: invited a teammate, created 3 projects, made a second purchase within 30 days), compute the retention rate of users who did vs didn't do each. Rank by lift, but check both directions: what % of retained users did the action (coverage) and what % of users who did the action retained (precision). A great correlate scores high on both — "users who did X retained at 60% vs 20% baseline, and 70% of all retained users did X." Label results as correlational and recommend an **ab-testing** experiment before rebuilding onboarding around one.

8. **Choose the lever.** Map findings to the lever table in Frameworks below, estimate impact for the top 2-3 (e.g., "recovering half of involuntary churn adds ~1.5 points of monthly retention ≈ +18% LTV"), and rank by impact ÷ effort. Early-curve fixes (activation) compound across every future cohort; late-curve fixes (resurrection) act on a smaller base — prioritize early-curve unless the plateau itself is the problem.

9. **Deliver** in the Output format below, leading with the verdict (curve shape + PMF read), not the table.

## Frameworks & templates

### Cohort table template (monthly, classic retention)

| Cohort | Size | M0 | M1 | M2 | M3 | M4 | M5 | M6 |
|--------|------|-----|-----|-----|-----|-----|-----|-----|
| 2026-01 | 840 | 100% | 42% | 33% | 29% | 28% | 27% | 27% |
| 2026-02 | 910 | 100% | 44% | 34% | 30% | 29% | 28% | — |
| 2026-03 | 1,120 | 100% | 47% | 37% | 32% | 30% | — | — |
| 2026-04 | 1,050 | 100% | 49% | 38% | 33% | — | — | — |
| 2026-05 | 1,300 | 100% | 51% | 40% | — | — | — | — |
| 2026-06 | 1,410 | 100% | 52% | — | — | — | — | — |

Reading of this example: curve flattens around 27-28% (plateau exists — PMF signal), and columns improve down the page (M1 went 42% → 52% over six cohorts: onboarding changes are working). Both observations belong in the summary.

### SQL template (monthly cohorts, classic retention)

```sql
WITH cohorts AS (
  SELECT user_id, DATE_TRUNC('month', MIN(event_at)) AS cohort_month
  FROM core_events            -- the value event, not logins
  GROUP BY 1
),
activity AS (
  SELECT DISTINCT user_id, DATE_TRUNC('month', event_at) AS active_month
  FROM core_events
)
SELECT
  c.cohort_month,
  DATEDIFF('month', c.cohort_month, a.active_month) AS period_n,
  COUNT(DISTINCT a.user_id) AS retained,
  COUNT(DISTINCT a.user_id) * 100.0
    / MAX(COUNT(DISTINCT a.user_id)) OVER (PARTITION BY c.cohort_month) AS pct
FROM cohorts c
JOIN activity a USING (user_id)
GROUP BY 1, 2
ORDER BY 1, 2;
```

Adapt date functions to the user's warehouse; swap `core_events` for the agreed retention event; exclude the current incomplete month in a WHERE clause.

### LTV worked example (do it this way)

SaaS, ARPA $50/mo, gross margin 78%, cohort curve flattens: M1 62%, M3 45%, M6 40%, M12 38% (stable plateau, ~0.8%/mo churn on the plateau).

- Cumulative 24-month method: sum of (retention% × $50 × 0.78) across M0-M23 ≈ $50 × 0.78 × 11.9 retained-months ≈ **$464 LTV**.
- Formula shortcut using *plateau* churn: only valid for users who reached the plateau — do NOT apply ARPA ÷ blended churn (blended monthly churn here is ~4%, which would give $50 × 0.78 ÷ 0.04 = $975: more than double the honest number, because early churners drag the average lifetime down).
- If CAC = $150: LTV:CAC = 3.1 (acceptable), payback = 150 ÷ 39 = 3.8 months (strong).

### Retention benchmarks (order-of-magnitude sanity checks, not targets)

- Consumer apps (classic): D1 40-60% / D7 20-35% / D30 10-20% is good; social/messaging top decile reaches D30 30%+.
- SaaS logo churn: SMB 3-5%/mo typical, <3% good; mid-market/enterprise <1-1.5%/mo good (often quoted annually: <10% gross).
- Ecommerce: 20-30% of first-time buyers making a second purchase within 90 days is solid; subscription boxes commonly lose 10-15%/mo.
- NRR: see step 5 (100%+ SMB good, 120%+ enterprise best-in-class).

### Aha-moment analysis template (worked example)

Baseline: 28% of the March-April cohorts retained at M3. Candidate first-week actions:

| First-week action | Retained if done | Retained if not | Lift | Coverage (% of retained who did it) | Verdict |
|---|---|---|---|---|---|
| Invited ≥1 teammate | 61% | 21% | +40pts | 68% | Strong candidate — test it |
| Created ≥3 projects | 55% | 24% | +31pts | 52% | Good secondary signal |
| Connected an integration | 66% | 26% | +40pts | 19% | High precision, low coverage — power-user marker, not an onboarding goal |
| Completed profile | 31% | 27% | +4pts | 74% | Noise — nearly everyone does it |

Rules for filling it in: compute on cohorts mature enough to have a real M3 outcome; require both lift ≥ 15pts *and* coverage ≥ 40% before nominating an action as "the" aha moment; write the nomination as a testable hypothesis ("Getting new users to invite a teammate in week 1 will raise M3 retention") and route to **ab-testing**.

### Retention diagnosis one-pager (fill-in template)

```
RETENTION DIAGNOSIS — [Company], [date range]

Definitions
  Cohort key: first [value event], grouped by [week/month]
  Retention event: [event]; Type: [classic/unbounded/range]

Verdict
  Curve shape: [plateau at __% by period __ / decay, no plateau / smile]
  PMF read: [retained core exists for __ segment / leaky bucket / mixed]
  Column trend: cohorts are [improving/flat/degrading] at M1 (__%  → __%)

Churn decomposition (last full quarter)
  Gross logo churn: __%/mo   Gross revenue churn: __%/mo
  Involuntary share of churn: __%   NRR (12-mo cohort): __%
  Benchmark position: [above/at/below] typical for [model/segment]

Unit economics
  LTV ([cumulative __-mo / formula-on-plateau] method): $__
  LTV:CAC: __ : 1   CAC payback: __ months
  Sensitivity: +1pt plateau churn → LTV −__%

Top levers (ranked)
  1. [lever] — est. +__pts retention / +$__ LTV — next step: [action, owner]
  2. [lever] — ...
  3. [lever] — ...

Caveats: [small cohorts / incomplete periods / definition changes on date __]
```

### Retention lever selection matrix

| Symptom in the data | Likely lever | First move |
|---|---|---|
| Steep M0→M1 drop (>50% loss), plateau fine | Activation / onboarding | Aha-moment analysis → **customer-onboarding** |
| Plateau exists but low (<15%) | Audience/product fit | Segment cohorts by channel & persona; cut low-intent channels |
| Newer cohorts worse down the columns | Channel mix degradation | Cohort by acquisition source; recheck targeting |
| 20-40% of churn is payment failures | Involuntary churn | Dunning, card updater, retry logic → **churn-prevention** |
| Gross retention fine, NRR <100% | Expansion/pricing | Plan structure, usage-based upsell → **pricing-strategy** |
| Curve decays with no plateau | No habit / no PMF core | Frequency-building loops, or reposition before spending on growth |
| Smile from win-backs only | Fragile resurrection | Measure resurrected-user retention separately; fix the core dip |

## Output format

Deliver a single document (markdown, or spreadsheet-ready tables on request) containing, in order:

1. **Verdict (3-5 sentences)**: curve shape, PMF read, headline retention/churn/NRR numbers, and the single biggest lever.
2. **Definitions block**: cohort key, retention event, retention type, period grain, date range, exclusions. Verbatim, so the analysis is reproducible.
3. **Cohort table** (as above, with cohort sizes) plus a one-paragraph column-trend reading.
4. **Churn decomposition**: voluntary/involuntary split, logo vs revenue churn, gross retention and NRR with benchmark comparison.
5. **LTV section**: method used, horizon, inputs (flagging defaults), LTV, LTV:CAC, CAC payback, and the sensitivity note ("if plateau churn worsens 1pt, LTV drops X%").
6. **Aha-moment table** (if event data allowed it): action, retention with/without, lift, coverage, precision — with the correlation-not-causation caveat and a proposed experiment.
7. **Ranked levers**: top 3 with estimated impact in retention points and LTV dollars, effort guess, and owner-shaped next step.
8. **Caveats**: small cohorts, incomplete periods, data-quality issues found.

## Quality checklist

Pass every item before delivering:

- [ ] Retention event is a value action, not logins/app-opens, and is written verbatim in the definitions block
- [ ] Retention type (classic/unbounded/range) is stated; unbounded results note the recency bias
- [ ] Current incomplete period is excluded from the table
- [ ] Cohort sizes shown; cohorts under ~200 users flagged as noisy
- [ ] Curve shape called explicitly as one of: plateau / decay-to-zero / smile, with the numbers behind the call
- [ ] Column trends (cohort-over-cohort at fixed period) analyzed, not just row curves
- [ ] Churn split voluntary vs involuntary, and logo vs revenue, where billing data exists
- [ ] NRR computed on a fixed cohort over 12 months, not from this-month's-MRR arithmetic
- [ ] LTV uses gross margin dollars, not revenue
- [ ] LTV formula shortcut only applied where the curve has flattened; otherwise cumulative fixed-horizon method used and horizon stated
- [ ] Monthly and annual churn never mixed (3%/mo ≈ 30.6%/yr via 1−(1−0.03)^12, not 36%)
- [ ] Aha-moment findings labeled correlational, with both lift and coverage reported
- [ ] Every benchmark cited as a range with the business model it applies to
- [ ] Deliverable leads with the verdict and ends with ranked levers, not just tables

## Common mistakes

- **Measuring logins instead of value.** "Active" = opened the app inflates retention 2-3x for many products. A user who logs in, sees nothing useful, and leaves is churning in slow motion.
- **Blended churn in the LTV denominator.** Early-cohort churn is always higher; dividing ARPA by blended churn overstates LTV, often by 2x (see the worked example). Investors check this one first.
- **Annualizing monthly churn by multiplying by 12.** Survival compounds: 5%/mo is 46% annual churn (1−0.95^12), not 60%.
- **Computing LTV on a curve that never flattens.** No asymptote means no finite expected lifetime — report fixed-horizon contribution instead of pretending.
- **Cohorting by signup date when activation lags.** A trial-heavy product cohorted on account creation mixes tire-kickers with buyers; cohort on first value event and analyze signup→activation separately with **funnel-analysis**.
- **Reading the triangle's ragged edge as a trend.** The newest cohort's M1 cell is one data point from a partially matured group; wait for the period to complete before declaring improvement or collapse.
- **Ignoring involuntary churn, then buying product fixes for a billing problem.** Check payment-failure share before commissioning a roadmap.
- **Celebrating a smile curve caused by a definition change.** Event renames, SDK upgrades, and bot traffic create fake resurrections; diff the event schema history before reporting a smile.
- **Averaging retention across cohorts unweighted.** A 100-user January cohort and a 5,000-user June cohort are not peers; weight by size or report cohorts separately.
- **Treating the aha-moment correlate as causal and forcing it in onboarding.** Facebook's "7 friends in 10 days" was a discovered correlate later validated by experiment — run the test (**ab-testing**) before redesigning the funnel around it.
- **Survivorship in expansion metrics.** NRR computed only on accounts still alive at month 12 (dropping churned ones from the denominator) fabricates 100%+ retention; keep churned accounts in at $0.
