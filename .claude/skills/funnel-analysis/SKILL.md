---
name: funnel-analysis
description: "Analyzes conversion funnels end-to-end: maps stages and required tracking events, computes stage-to-stage conversion, pinpoints the biggest drop-offs, generates root-cause hypotheses using segment cuts, prioritizes fixes by expected lift, and defines a correct before/after measurement plan. Use when the user asks to analyze a funnel, find where users drop off, diagnose a falling signup or checkout conversion rate, build a funnel report, compare conversion by segment or device, define funnel tracking events, prioritize CRO fixes from funnel data, or quantify the revenue impact of fixing a funnel step."
---

# Funnel Analysis

Guide the user from a vague "conversion feels low" to a specific, quantified diagnosis: a mapped funnel with clean instrumentation, stage-by-stage conversion math, the one or two drop-offs that matter most, evidence-backed hypotheses about why they happen, a fix list ranked by expected dollar or conversion lift, and a measurement plan that will prove whether the fix worked. The deliverable is an analysis and action plan, not a dashboard and not an experiment — hand those off to the sibling skills.

## When to use this skill

Use for:
- Diagnosing where and why users drop out of any multi-step flow: signup, onboarding, checkout, trial-to-paid, demo request, quote request, subscription upgrade.
- Defining or auditing the event tracking needed to measure a funnel.
- Segment-cut analysis (device, channel, plan, geography, new vs. returning) to explain a drop-off.
- Sizing the value of fixing a step and ranking fixes by expected lift.
- Designing the before/after measurement for a funnel change.

Do NOT use for — route instead to:
- Rewriting or redesigning the page itself once a drop-off is found → **landing-page-cro**.
- Designing and running the controlled experiment for a fix → **ab-testing** (this skill only decides *what* to test and *why*).
- Retention, repeat usage, or churn over weeks/months (funnels are one-directional flows; retention is recurring behavior) → **retention-cohort-analysis** or **churn-prevention**.
- Recurring reporting or building the ongoing dashboard from funnel metrics → **analytics-reporting** and **kpi-dashboard-design**.
- Sales-led funnels tracked as CRM deal stages with rep ownership → **sales-pipeline-management** (use this skill only for the self-serve/web portion).
- Fixing the post-signup activation experience itself → **customer-onboarding**.

## Inputs to gather

Ask for these before starting. Where the user doesn't know, assume the stated default and flag the assumption in the output.

1. **The flow and its endpoints.** What is the entry event and what counts as the final conversion? Default: first pageview of the flow → completed purchase/signup event.
2. **The steps in between.** Screens, forms, or actions the user must pass through. If unknown, walk the flow yourself (or have the user screen-record it) and enumerate every distinct page/state.
3. **Analytics stack and access.** GA4, Mixpanel, Amplitude, PostHog, Segment, warehouse SQL, or "just a spreadsheet of counts." Default: user will export step counts manually; write queries/instructions for whatever tool they name.
4. **Counting unit.** Users, sessions, or devices? Default: unique users, deduplicated across sessions, because session-based funnels overstate drop-off for multi-session journeys.
5. **Conversion window.** How long after entering may a user convert and still count? Defaults: 24 hours for checkout, 7 days for SaaS signup→activation, 30 days for trial→paid or B2B demo→opportunity.
6. **Date range.** Default: last 28 full days (covers 4 full weekly cycles), excluding today and any anomaly days (outages, viral spikes, sale events) — or including sale events if they are the business's normal state.
7. **Volume.** Rough entrants per week. Under ~500 entrants/week, warn that segment cuts and week-over-week comparisons will be noisy and widen the date range to 8–12 weeks.
8. **Economics.** Average order value or LTV per conversion, so drop-off can be priced in currency. Default: report lift in conversions only and mark the dollar column "needs AOV."
9. **Known changes.** Releases, pricing changes, or campaign launches during the window — these become confounders in the before/after plan.

## Process

1. **Map the funnel on paper first.** List every stage from entry to conversion as user-visible states (e.g., `Landing → Signup form viewed → Signup submitted → Email verified → First project created`). Rules: 4–8 stages (fewer hides problems; more fragments the data); each stage must be a *required* step (optional detours are segments, not stages); each stage must map to one observable event. Write the funnel definition table (template below) and get the user's confirmation before touching data.

2. **Audit instrumentation against the map.** For each stage, verify an event exists, fires exactly once per user per attempt, and carries the properties needed for segment cuts (device, channel/UTM, plan, new vs. returning, country). Check the three classic gaps: (a) form *submit* tracked but form *view* not, (b) client-side purchase event that undercounts vs. backend orders — reconcile against the source-of-truth table and flag if the gap exceeds 5%, (c) redirects or payment provider round-trips that drop parameters and break user identity. If a stage has no event, either instrument it and wait for data, or proxy it (e.g., pageview of the step's URL) and mark the number as approximate.

3. **Pull the data with consistent rules.** Same date range, same counting unit, same conversion window at every stage. Count a user at stage N only if they also counted at stage N−1 inside the window (a "closed" funnel) — otherwise re-entries and deep links inflate later stages above earlier ones. If any stage shows *more* users than the one before it, the funnel is open or the events are misdefined; fix before analyzing.

4. **Compute two conversion numbers per stage.** Step conversion (stage N ÷ stage N−1) and cumulative conversion (stage N ÷ stage 1). Also compute absolute users lost at each step. Present all three — percentages find the leak, absolute counts size it.

5. **Locate the biggest drop-off by opportunity, not by percentage.** The worst step-conversion rate is not automatically the best target. Score each step's opportunity with the expected-lift formula (framework below): users lost × plausible recovery share × downstream conversion × value. A 90%→92% improvement on a high-traffic first step often beats fixing a scary-looking 40% drop at a low-traffic late step. Benchmarks for calibration (wide ranges; treat as sanity checks, not targets): ecommerce sitewide visit→purchase 1.5–4%; add-to-cart→purchase 25–45%; checkout-started→completed 45–65%; SaaS visitor→signup 2–5%; signup→activation 20–40%; free trial→paid 8–25% (opt-in trials) or 40–60% (credit-card-upfront); B2B form view→submit 10–25%.

6. **Cut the top 1–2 drop-offs by segment.** Run the same step conversion split by: device (mobile vs. desktop), traffic source/channel, new vs. returning, browser, country/language, and any product dimension (plan, category). You are looking for a segment whose rate differs from the funnel average by a meaningful margin — as a screen, require at least a 20% relative difference AND at least ~100 entrants in the segment before treating a gap as signal. Two patterns to distinguish:
   - **Localized problem:** one segment converts far worse (mobile checkout at 31% vs. desktop 58%) → the cause lives in that segment's experience.
   - **Mix shift:** every segment's rate is stable but the blend changed (paid social grew from 10% to 40% of traffic) → the "drop" is composition, not the page. Check mix shift *first* whenever the question is "why did conversion fall over time."

7. **Generate hypotheses from evidence, not brainstorming.** For each priority drop-off, combine three evidence sources: (a) the segment cuts, (b) a manual walkthrough of the step on the worst-performing segment's device, (c) whatever qualitative data exists — session replays (watch 10–20 replays of users who abandoned the step), form-field analytics, rage-click reports, support tickets mentioning the step. Write each hypothesis in the template format below with its evidence and a confidence grade. Produce 3–6 hypotheses per drop-off; discard any hypothesis with zero supporting evidence.

8. **Prioritize fixes by expected lift.** For each candidate fix, estimate expected annual value with the expected-lift formula, then divide by effort (S/M/L ≈ days/weeks/months) to rank. Where the user prefers a scoring rubric, use ICE (Impact, Confidence, Ease, each 1–10, multiplied) — but anchor Impact to the computed lift, not gut feel. Recommend the top 2–3 fixes; more than that dilutes execution.

9. **Define the before/after measurement plan.** For each recommended fix specify: the primary metric (the specific step conversion, not overall conversion), the guardrail metrics (downstream steps — a fix that boosts form submits but drops paid conversion is a loss), the comparison method, and the decision rule. Decision ladder:
   - **Enough traffic for a test** (roughly ≥1,000 entrants per variant within 2–4 weeks at the affected step): recommend an A/B test and hand off to **ab-testing** for design and stats.
   - **Not enough traffic:** pre/post comparison of ≥4 full weeks before vs. ≥4 full weeks after, same seasonality, same counting rules; explicitly list confounders (campaigns, releases, pricing) active in either window; require the change to exceed normal week-to-week noise (compute the standard deviation of the weekly rate over the prior 8–12 weeks and demand movement > 2× that) before declaring victory.
   - Never compare a holiday window against a non-holiday window; never change the funnel definition mid-measurement.

10. **Deliver and schedule the follow-up.** Assemble the output document (format below), state the date the after-measurement will be read, and note that funnel definitions and event names must stay frozen until then.

## Frameworks & templates

### Template 1 — Funnel definition table

| # | Stage (user-visible state) | Event name | Fires when | Key properties | Owner / source of truth |
|---|---|---|---|---|---|
| 1 | Landing page viewed | `landing_viewed` | Pageview of /pricing or /signup | device, utm_source, utm_medium, referrer | GA4 / web |
| 2 | Signup form started | `signup_started` | First keystroke in any signup field | device, utm_source | Product analytics |
| 3 | Signup submitted | `signup_submitted` | Server 200 on POST /signup | device, plan_selected | Backend (source of truth) |
| 4 | Email verified | `email_verified` | Verification link clicked | hours_since_signup | Backend |
| 5 | Activated | `first_project_created` | First project saved | plan, team_size | Backend |

Counting unit: unique users · Window: 7 days from stage 1 · Range: 2026-06-08 → 2026-07-05 · Funnel type: closed

### Template 2 — Worked drop-off analysis (example numbers)

| Stage | Users | Step conv. | Cumulative | Lost here |
|---|---|---|---|---|
| Landing viewed | 42,000 | — | 100% | — |
| Signup started | 9,660 | 23.0% | 23.0% | 32,340 |
| Signup submitted | 6,470 | 67.0% | 15.4% | 3,190 |
| Email verified | 3,880 | 60.0% | 9.2% | 2,590 |
| Activated | 1,820 | 46.9% | 4.3% | 2,060 |

Reading: the ugliest *rate* is landing→start (23%), but that is near the 2–5% visitor→signup benchmark's healthy edge for a pricing page. The email-verified step (60%) is 15–25 points below what verified-email flows typically achieve (75–85%), and its 2,590 lost users sit deep in the funnel where downstream conversion is high — segment cut shows Gmail users verify at 72% but Outlook/corporate domains at 38% → hypothesis: verification emails are landing in corporate spam filters (cross-check with **email-deliverability**).

### Framework — Expected-lift formula (use for step 5 and step 8)

```
Recovered conversions / period =
  Users lost at step  ×  Recovery share  ×  Downstream conversion to final

Value / year = Recovered conversions × periods/year × AOV (or LTV)
```

- **Recovery share:** the fraction of lost users a fix could plausibly save. Calibrate against the gap to benchmark or to the best segment. Use 10–25% for copy/UX polish, 25–50% for removing a whole step or fixing a bug, never 100%.
- **Downstream conversion:** product of all step conversions *after* the fixed step (from your own table).

Worked example (from Template 2): fix email verification for corporate domains. Users lost = 2,590/28 days; recovery share = 40% (bug-class fix, gap to benchmark is huge); downstream conversion (verified→activated) = 46.9%. Recovered = 2,590 × 0.40 × 0.469 ≈ 486 activations/28 days ≈ 6,330/year. At $240 first-year LTV → ~$1.52M/year. Effort: M. This beats a landing-page headline test (32,340 lost × 10% × 15.4% downstream... but note lost-at-step-1 users must flow through *all* later steps: 32,340 × 0.10 × 0.187 ≈ 605/28 days — bigger! — yet confidence is far lower and it needs an A/B test). Present both; let effort and confidence break the tie.

### Template 3 — Hypothesis card (write one per hypothesis)

```
Drop-off: [stage N → N+1, current rate X%, benchmark/best-segment Y%]
Hypothesis: Users abandon because [specific cause].
Evidence:  - [segment cut result with numbers]
           - [replay/qualitative observation]
           - [benchmark or best-segment gap]
Confidence: High / Medium / Low
Proposed fix: [one sentence, specific]
Expected lift: [recovered conversions/period and $ if AOV known]
Effort: S / M / L
Validation: [A/B test | pre/post over N weeks | fix-and-verify (bugs)]
```

### Framework — Segment-cut priority order

Cut in this order and stop when you find a ≥20% relative gap with ≥100 entrants: 1) device type, 2) traffic source/channel, 3) new vs. returning, 4) browser (Safari and in-app browsers break payments and redirects disproportionately), 5) geography/language, 6) product dimension (plan, price tier, category). Always also run the mix-shift check: has any segment's *share of entrants* moved >10 points across the comparison window?

Worked segment-cut table (email-verified step from Template 2):

| Segment | Entrants | Verified | Step conv. | vs. avg (60%) | Verdict |
|---|---|---|---|---|---|
| Gmail / consumer domains | 4,530 | 3,262 | 72.0% | +12.0 pts | Healthy |
| Outlook / corporate domains | 1,680 | 638 | 38.0% | −22.0 pts | **Investigate** |
| Mobile | 3,560 | 2,065 | 58.0% | −2.0 pts | Within noise |
| Desktop | 2,910 | 1,815 | 62.4% | +2.4 pts | Within noise |

The corporate-domain gap is a 37% relative difference with 1,680 entrants — well past both screens. Device is flat, so the cause is email delivery, not the verification UI.

### Template 4 — Closed-funnel SQL (adapt table/column names to the user's warehouse)

```sql
WITH entrants AS (
  SELECT user_id, MIN(event_ts) AS entered_at
  FROM events
  WHERE event_name = 'landing_viewed'
    AND event_ts >= '2026-06-08' AND event_ts < '2026-07-06'
  GROUP BY user_id
),
staged AS (
  SELECT e.user_id,
    MAX(CASE WHEN ev.event_name = 'signup_started'   THEN 1 ELSE 0 END) AS s2,
    MAX(CASE WHEN ev.event_name = 'signup_submitted' THEN 1 ELSE 0 END) AS s3,
    MAX(CASE WHEN ev.event_name = 'email_verified'   THEN 1 ELSE 0 END) AS s4,
    MAX(CASE WHEN ev.event_name = 'first_project_created' THEN 1 ELSE 0 END) AS s5
  FROM entrants e
  LEFT JOIN events ev
    ON ev.user_id = e.user_id
   AND ev.event_ts BETWEEN e.entered_at AND e.entered_at + INTERVAL '7 days'
  GROUP BY e.user_id
)
SELECT COUNT(*)                                   AS stage1_landing,
       SUM(s2)                                    AS stage2_started,
       SUM(CASE WHEN s2=1 AND s3=1 THEN 1 END)    AS stage3_submitted,
       SUM(CASE WHEN s3=1 AND s4=1 THEN 1 END)    AS stage4_verified,
       SUM(CASE WHEN s4=1 AND s5=1 THEN 1 END)    AS stage5_activated
FROM staged;
```

Notes: the `entered_at`-anchored join enforces the 7-day window; the nested `CASE WHEN sN=1 AND sN+1=1` conditions enforce closed-funnel ordering at the membership level (for strict *event-order* enforcement, compare per-stage MIN timestamps instead). In GA4, the equivalent is a Funnel Exploration with "closed funnel" toggled on and elapsed-time limit set to the window; in Mixpanel/Amplitude/PostHog use the native funnel report with conversion window and "unique users" counting.

### Template 5 — Prioritized fix list (deliverable section 5 layout)

| Rank | Fix | Target step | Expected lift / yr | Confidence | Effort | Lift ÷ effort | Validation |
|---|---|---|---|---|---|---|---|
| 1 | Route verification email via transactional IP pool; add SPF/DKIM for corporate domains | Verified (60%→~75%) | ~6,330 activations / ~$1.52M | High | M | High | Fix-and-verify + 4-wk pre/post |
| 2 | Headline + social proof rewrite on /pricing | Started (23%→~25%) | ~7,900 activations / ~$1.90M | Low | S | High | A/B test → **ab-testing** |
| 3 | Autofill + inline validation on signup form | Submitted (67%→~72%) | ~2,100 activations / ~$0.50M | Medium | S | Medium | A/B test |

Recommend at most the top 2–3. If two fixes touch the same step, ship them sequentially or as separate test arms — stacked simultaneous changes make the before/after unreadable.

## Output format

Deliver a single document (markdown, or the user's requested format) with these sections in order:

1. **Executive summary** — 3–5 bullets: overall conversion, the #1 drop-off, its estimated annual cost, the top recommended fix, expected lift.
2. **Funnel definition table** (Template 1) including counting rules, window, and any instrumentation gaps found with severity.
3. **Funnel performance table** (Template 2 layout) plus a one-paragraph reading of it.
4. **Drop-off deep dives** — for each of the top 1–2 drop-offs: segment-cut table, mix-shift check result, and 3–6 hypothesis cards (Template 3).
5. **Prioritized fix list** — table ranked by expected lift ÷ effort: Fix | Target step | Expected lift (conversions and $) | Confidence | Effort | Validation method.
6. **Measurement plan** — per recommended fix: primary metric, guardrails, method (A/B vs. pre/post), decision threshold, read date.
7. **Assumptions & data caveats** — every default assumed, every approximate number, every confounder in the window.

## Quality checklist

Pass/fail each before delivering:

- [ ] Funnel has 4–8 stages, every stage is a required step, and every stage maps to exactly one named event.
- [ ] Counting unit, conversion window, and date range are stated once and applied identically to every stage.
- [ ] No stage shows more users than the previous stage (closed-funnel check passed).
- [ ] Client-side conversion counts were reconciled against a backend source of truth, or the gap is flagged.
- [ ] Both step conversion and cumulative conversion are reported, plus absolute users lost per step.
- [ ] The priority drop-off was chosen by expected-lift math, not by worst percentage.
- [ ] Every stated benchmark includes a realistic range and is labeled as calibration, not a target.
- [ ] At least two segment cuts were run on each priority drop-off, and the mix-shift check was performed for any over-time comparison.
- [ ] Every hypothesis card cites at least one piece of quantitative or qualitative evidence.
- [ ] Expected lift for step-1 fixes multiplies through *all* downstream step conversions, not just the next step.
- [ ] Recovery-share assumptions are ≤50% and justified.
- [ ] Each recommended fix has a named primary metric, at least one downstream guardrail metric, and a decision rule with a threshold.
- [ ] Pre/post plans use ≥4 comparable weeks per side and list known confounders.
- [ ] Assumptions and data caveats section exists and is honest about approximate numbers.

## Common mistakes

- **Session-based funnels for multi-session journeys.** A B2B buyer who researches Monday and signs up Thursday shows as two failed sessions and one mystery conversion. Use user-level counting with an explicit window.
- **Open funnels presented as closed.** Counting everyone who ever hit the checkout page — including deep links from cart-recovery emails — inflates late stages and can show >100% step conversion. Require stage N−1 membership.
- **Chasing the worst percentage.** A 40% drop at a step with 200 users/month is worth less than 2 points at a step with 40,000. Always convert to absolute recovered conversions × downstream rate.
- **Explaining a time-series drop with page changes when it's mix shift.** Conversion "fell" because paid social traffic doubled; every segment's rate is unchanged. Run the mix-shift check before auditing the page.
- **Averaging away the signal.** The blended rate looks fine while mobile Safari is at half the desktop rate. A funnel average with no segment cuts is a diagnosis not yet performed.
- **Fixing instrumentation and analysis simultaneously.** If you add a missing event mid-window, the before/after comparison is meaningless. Freeze definitions, backfill or wait, then analyze.
- **Counting the same user at a step multiple times.** Retried form submits or payment retries triple-count attempts and mask the real completion rate. Deduplicate per user per funnel entry.
- **Reading a pre/post delta smaller than weekly noise as a win.** If the weekly rate normally swings ±3 points, a +2 point "improvement" is nothing. Compare against 2× the historical weekly standard deviation, or run a real test via **ab-testing**.
- **Declaring victory on the target step while a guardrail bleeds.** Removing the email-verification step lifts activation 8% and lifts spam signups 300%. Guardrails are part of the result, not an afterthought.
- **Treating benchmarks as targets.** "Checkout completion should be 65%" ignores vertical, price point, and traffic mix. Benchmarks bound plausibility; your best segment is the more honest target.
