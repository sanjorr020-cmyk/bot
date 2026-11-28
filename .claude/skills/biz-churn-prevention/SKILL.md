---
name: biz-churn-prevention
description: "Builds churn prevention and win-back systems: customer health scores, churn risk alerts, save plays matched to cancellation reasons, ethical cancellation flows, timed win-back campaigns, and exit surveys. Use when the user says things like \"customers keep cancelling\", \"build a health score\", \"design our cancellation flow\", \"write a win-back email\", \"how do I save at-risk accounts\", \"create an exit survey\", \"reduce churn\", \"set up churn alerts\", or \"win back lost customers\"."
---

# Churn Prevention & Win-back

Design the full lifecycle of keeping customers: score account health before risk becomes visible, trigger alerts on leading indicators, run save plays matched to the real cancellation reason, build a cancellation flow that retains without trapping, and recover lost customers with timed win-back campaigns. The output is an operational system the user's team can run weekly, not a strategy memo.

## When to use this skill

Use for: health score models, churn risk signal definitions and alert rules, save-play playbooks, retention offers, cancellation/offboarding flow design, dunning-adjacent save messaging, win-back email sequences, exit survey questions, and churn post-mortems.

Do NOT use for:
- Measuring churn/retention rates across cohorts — use **retention-cohort-analysis**
- Fixing activation problems in the first 30 days — use **customer-onboarding** (churn caused by never activating is an onboarding problem)
- Failed-payment recovery mechanics and email infrastructure — use **email-deliverability** and **email-marketing**
- Analyzing a pile of existing feedback/survey responses — use **customer-feedback-analysis**
- Repricing or packaging changes to reduce price-driven churn structurally — use **pricing-strategy**
- Turning saved/happy customers into proof — use **reviews-and-testimonials** or **case-studies**

## Inputs to gather

Ask for these; assume the defaults in parentheses when the user doesn't know:

1. **Business model**: SaaS, subscription e-commerce, membership, or services? Billing cycle — monthly or annual? (Default: monthly SaaS.)
2. **Current churn rate and definition**: logo churn vs. revenue churn, monthly or annual. (Benchmarks to calibrate against: SMB SaaS 3–7% monthly logo churn; mid-market 1–2% monthly; enterprise <1% monthly / 5–10% annual; subscription e-commerce 8–12% monthly.)
3. **Customer segments and ACV/LTV spread**: is churn concentrated in one segment? High-touch (CSM-managed) vs. tech-touch accounts? (Default: single tech-touch segment.)
4. **Data available**: product usage events, login data, support ticket volume, NPS/CSAT, billing events, CRM fields. (Default: logins, billing, and support tickets only — design the v1 score around what exists.)
5. **Known churn reasons**: exit survey data, cancellation notes, anecdotes. (Default: none — the skill will produce the exit survey to start collecting them.)
6. **Team capacity**: is there anyone to run manual save plays, or must everything be automated? (Default: founder-led, ~2 hours/week — bias toward automation with one manual play for top accounts.)
7. **Offer constraints**: maximum discount allowed, whether pausing is technically possible, refund policy. (Default: up to 25% discount for 3 months, pause available.)
8. **Cancellation flow today**: self-serve button, email request, or call-to-cancel? (If call-to-cancel or email-only: flag it — see Common mistakes.)

## Process

### Step 1 — Diagnose where churn actually happens
Before building anything, place churn on a timeline. Ask: what % of churned customers cancel in months 1–3 vs. months 4+? If more than ~40% of churn happens in the first 90 days, stop and route the user to **customer-onboarding** first — save plays can't fix a product that was never adopted. For mature-customer churn, continue.

### Step 2 — Build the health score (v1 in one sitting)
Use 3–6 inputs max, weighted to 100 points. More inputs than that delays launch and adds noise. Pick from four signal families and take the strongest available signal from each:

| Family | Example metrics | Typical weight |
|---|---|---|
| Product usage | login frequency, % of key features adopted, usage trend vs. prior 30 days | 40–50 |
| Relationship | champion still active, exec sponsor identified, QBR attended | 15–25 (high-touch only) |
| Support/sentiment | ticket volume trend, escalations, latest NPS/CSAT | 15–20 |
| Commercial | payment failures, downgrade requests, renewal <90 days with no engagement | 15–20 |

Set bands: **Green 70–100, Yellow 40–69, Red 0–39.** Then back-test: score 10 recently churned accounts and 10 healthy ones with the model. If churned accounts don't average at least 20 points lower, reweight before shipping. Recalibrate the weights quarterly.

### Step 3 — Define risk signals and alert rules
Health scores are lagging composites; alerts must fire on individual leading events. Define 5–8 alert triggers with an owner and SLA for each. Standard set:

- Usage drops ≥30% vs. trailing 30-day average, sustained 14 days → CSM/founder outreach within 3 business days
- Champion's email bounces or their user is deactivated → identify new stakeholder within 7 days
- Payment failure → automated dunning immediately; human touch on 2nd failure for accounts above median ACV
- NPS ≤6 (detractor) → personal reply within 48 hours, not a survey autoresponder
- 3+ support tickets in 30 days, or any ticket containing "cancel", "refund", "switching", "alternative" → route to save-play owner same day
- Renewal within 90 days AND health score Yellow/Red → open a save opportunity in the pipeline (see **sales-pipeline-management** for stage design)
- Login gap: no logins from any user for 21 days (tech-touch) → automated re-engagement email sequence

Decision point: if the user has no event tracking, ship alerts on billing + support signals only, and add usage alerts in v2. Never block launch on instrumentation.

### Step 4 — Map save plays to churn reasons
A save play is only effective if matched to the real reason. Build a play per reason using the table in Frameworks below. For each play define: trigger, owner, first-touch channel, the concession ladder (what to offer first, what to hold back), and a walk-away point. Rules of thumb:
- Lead with value (training, plan fit review, roadmap preview) before price. Discounting fixes price objections only; it delays every other churn reason by one billing cycle.
- Cap discounts at 20–25% for a defined term (3 months typical). Open-ended discounts permanently reprice the account.
- Offer pause/downgrade before discount — a paused customer reactivates at full price 15–30% of the time; a churned one rarely returns unprompted.
- For objection-handling language on save calls, borrow structure from **objection-handling**; this skill supplies the offers and triggers.

### Step 5 — Design the cancellation flow (ethical, and it still saves)
A good cancel flow recovers 10–20% of cancel attempts without dark patterns. Hard rules:
- Cancellation must be self-serve, findable within 2 clicks from account settings, and completable in ≤3 screens.
- Exactly ONE intervention screen between "Cancel" and confirmation. Never chain multiple "are you sure" screens.
- The decline path ("No thanks, cancel anyway") must be a visible button of equal prominence — not gray-on-gray, not hidden below the fold.
- Match the flow to the sign-up: if they subscribed online, they cancel online (this is also the legal direction of the FTC's click-to-cancel rulemaking — never require a phone call to cancel an online subscription).
- Confirm immediately on-screen and by email, stating the exact end-of-access date and what happens to their data (retention window of 30–90 days before deletion is standard; say it explicitly).

Flow structure: (1) Cancel click → (2) one-question reason picker (this doubles as exit survey question 1) → (3) ONE reason-matched counter-offer → (4) confirmation with end date. Total time under 60 seconds if they decline everything.

### Step 6 — Design the exit survey
Keep it to 3 questions maximum, embedded in the flow (in-flow surveys get 60–80% completion; post-cancel emailed surveys get 5–15%):
1. Required, single-select reason (7 options max + "Other" with text field; randomize option order to kill primacy bias)
2. Optional: "What could we have done differently?" (open text)
3. Optional: "Where are you going instead?" (open text — competitive intel; feed answers to **competitor-analysis**)

Never gate cancellation on survey completion. Question 1 sits inside the flow; 2–3 appear on the confirmation screen as optional.

### Step 7 — Build the win-back campaign
Segment cancelled customers by (a) churn reason and (b) value, then sequence:

| Timing post-cancel | Message | Offer |
|---|---|---|
| Day 0 | Confirmation + "door is open" + data retention window | None |
| Day 30 | Check-in matched to churn reason ("you mentioned X — here's what changed") | Soft: extended trial of what they lacked |
| Day 60–90 | Product update / new-feature announcement | 20–30% off for 3 months, or free month |
| Quarterly after | Only when there is a genuinely relevant launch | Varies |

Exclusions: suppress win-back for customers who churned for "going out of business" or who were refunded for cause. Realistic benchmarks: win-back emails see 25–35% open rates (ex-customers recognize the brand) but 2–8% reactivation; treat anything above 5% as strong. Win-back offers should beat new-customer promos — a returning customer skips acquisition cost. Hand the sequence mechanics (send infrastructure, list hygiene) to **email-marketing** / **follow-up-sequences**; this skill owns the timing, segmentation, and offers.

### Step 8 — Instrument and review
Define the operating cadence: weekly review of Red accounts and fired alerts (30 min), monthly churn-reason distribution review, quarterly health-score recalibration. Report save rate (saves ÷ save attempts, healthy = 15–30% for reactive plays, 10–20% in-flow), win-back reactivation rate, and churn by reason trend. Route dashboard construction to **kpi-dashboard-design**.

## Frameworks & templates

### Framework: Reason-to-play matrix

| Churn reason | Save play | Concession ladder (offer in order) | Walk-away point |
|---|---|---|---|
| Too expensive | Plan-fit review call/email | 1. Downgrade to cheaper tier 2. Annual plan (lower effective price) 3. 20–25% off for 3 months | They need >30% off permanently |
| Not using it | Adoption rescue | 1. Free 1:1 training or setup session 2. Pause for 1–3 months 3. Downgrade | No usage after rescue attempt |
| Missing feature | Roadmap bridge | 1. Workaround walkthrough 2. Roadmap preview + beta access if <90 days out 3. Pause until ship | Feature isn't planned — let them go honestly |
| Switching to competitor | Comparison + concession | 1. Honest gap comparison 2. Migration-cost framing 3. Term discount | They've already signed elsewhere |
| Budget cut / company change | Pause play | 1. Pause 1–3 months 2. Downgrade to minimum tier 3. Scoped discount | Company is shutting down |
| Bad support experience | Service recovery | 1. Founder/manager personal apology + fix 2. Credit for affected period | Trust unrecoverable after fix attempt |
| Champion left | Re-onboard successor | 1. Find new stakeholder via team admin 2. Fresh onboarding for successor | No successor exists |

### Template: Health score definition (fill in the blanks)

```
HEALTH SCORE v1 — [Product name]
Scale: 0–100. Green ≥70 / Yellow 40–69 / Red ≤39. Recalculated: [weekly].

INPUT 1 — Usage frequency (weight: 30)
  30 pts: [e.g., 3+ active days/week]  | 15 pts: [1–2 days/week] | 0 pts: [none in 14 days]
INPUT 2 — Feature adoption (weight: 20)
  20 pts: uses [2 of 3 core features: ___, ___, ___] | 10 pts: 1 | 0 pts: 0
INPUT 3 — Usage trend vs. prior 30 days (weight: 20)
  20 pts: flat or up | 10 pts: down 10–30% | 0 pts: down >30%
INPUT 4 — Support/sentiment (weight: 15)
  15 pts: no open escalations, last NPS ≥7 | 7 pts: mixed | 0 pts: escalation or NPS ≤6
INPUT 5 — Commercial (weight: 15)
  15 pts: paid on time, no downgrade requests | 0 pts: failed payment or downgrade request
Back-test result: churned accounts avg [__] vs. healthy avg [__] (need ≥20-pt gap).
```

### Template: Reactive save email (usage-drop trigger, tech-touch)

```
Subject: Everything okay with [Product]?

Hi [First name],

I noticed your team hasn't been in [Product] much over the past couple of
weeks — usually that means something's in the way, and I'd rather fix it
than guess.

Two quick options:
1. Reply with what's blocking you (one line is fine), or
2. Grab 15 minutes with me here: [link] — I'll get you unstuck live.

If [Product] just isn't a fit right now, that's genuinely fine too — I can
pause your account for up to 3 months so you're not paying for something
you're not using. Just say the word.

[Name, role]
```
(Under 120 words, one CTA cluster, includes a no-pressure exit — that last paragraph is what earns replies.)

### Template: In-flow save screen copy (reason: "Too expensive")

```
Headline: Before you go — would a smaller plan work?
Body: You're on [Current plan] at $[X]/mo. The [Lite plan] keeps
[capabilities kept] for $[Y]/mo. Or take 20% off your current plan for the
next 3 months while you decide.
Buttons: [Switch to Lite]  [Take 20% off]  [No thanks, cancel my account]
```
All three buttons styled with equal visual weight. Show this screen once; if declined, complete the cancellation with no further interruption.

### Template: Day-60 win-back email

```
Subject: [Feature they asked for] is live

Hi [First name],

When you left [Product] in [month], you told us [their stated reason —
e.g., "you needed X"]. Fair. We shipped it: [1-sentence description +
link to 60-second demo].

Your old account and data are still here until [data deletion date].
Come back this month and it's [30% off for 3 months / first month free]
— restore everything in one click: [link]

No hard feelings either way.
[Name]
```

### Template: Exit survey question 1

```
What's the main reason you're cancelling? (pick one)
( ) Too expensive for the value I got
( ) Not using it enough
( ) Missing a feature I need: [text field]
( ) Switching to another tool: [text field]
( ) Budget cuts / company changes
( ) Too hard to use / poor support
( ) Other: [text field]
```

## Output format

Deliver as a single markdown document titled "[Company] Churn Prevention System", containing:

1. **Churn diagnosis** — timeline placement (early vs. mature churn), current rate vs. benchmark, top known reasons (3–5 bullets)
2. **Health score spec** — completed health score template with the user's actual metrics, bands, recalculation frequency, and back-test instruction
3. **Alert rules table** — trigger, threshold, owner, SLA, action (5–8 rows)
4. **Save playbook** — reason-to-play matrix customized to the user's offers and constraints, plus 2–3 fully written save messages (email or call opener)
5. **Cancellation flow** — screen-by-screen spec (max 4 screens) with full copy for each screen, including the reason picker and one counter-offer screen per top-3 reason
6. **Exit survey** — final question set with answer options
7. **Win-back campaign** — segmented timing table plus 2 fully written emails (day 30 and day 60–90)
8. **Operating cadence & metrics** — weekly/monthly/quarterly rituals, target save rate, win-back rate, and review owner

Every message includes final copy, not descriptions of copy. If data is missing for the health score, ship the v1 with available signals and list v2 additions.

## Quality checklist

Pass every item before delivering:

- [ ] Health score uses 3–6 inputs, weights sum to 100, and bands are defined with exact cutoffs
- [ ] Back-test instruction included (churned vs. healthy accounts, ≥20-point gap required)
- [ ] Every alert rule has a numeric threshold, a named owner, and a response SLA
- [ ] Every save play maps to a specific churn reason — no generic "reach out and offer discount" play
- [ ] Discounts are term-limited (≤25%, ≤3 months) with a stated walk-away point per play
- [ ] Pause and downgrade are offered before discounts wherever technically possible
- [ ] Cancellation is self-serve, ≤3 screens, with exactly one counter-offer screen
- [ ] Decline/cancel buttons have equal visual prominence to save-offer buttons in all flow copy
- [ ] Cancellation confirmation states end-of-access date and data retention window explicitly
- [ ] Exit survey is ≤3 questions, only the reason picker is required, options are randomized
- [ ] Win-back sequence has ≥3 timed touches with reason-based segmentation and suppression rules
- [ ] Win-back copy references the customer's stated cancellation reason where known
- [ ] All emails are under 150 words with a single primary CTA
- [ ] Success metrics have numeric targets (save rate, reactivation rate) and a named review cadence

## Common mistakes

- **Scoring on lagging indicators only.** NPS and renewals confirm churn that already happened operationally. Usage trend is the earliest reliable signal — weight it heaviest.
- **A health score nobody acts on.** A score without alert rules, owners, and SLAs is a dashboard decoration. Ship the score and the response protocol together, always.
- **Discount-first saving.** Leading with 25% off tells the customer the product was overpriced and trains them to threaten cancellation at every renewal. Diagnose the reason first; discount is the last rung on every ladder.
- **Treating all churn as save-able.** "Going out of business" and "acquired, switching to parent-co stack" are unwinnable — attempting saves there burns team hours and dignity. Define walk-away points.
- **Call-to-cancel and cancel mazes.** Requiring a phone call, hiding the button, or chaining guilt screens inflates short-term retention, poisons reviews, invites chargebacks, and is the target of FTC click-to-cancel enforcement. One offer, equal-weight buttons, done.
- **Confirmshaming copy.** Decline buttons that read "No, I hate saving money" belong nowhere. The decline button says "No thanks, cancel my account."
- **Exit surveys sent by email after cancellation.** 5–15% respond, and the angriest disproportionately. Put the reason question inside the flow where completion hits 60–80%.
- **One win-back blast to the whole churned list.** A price-churner getting a feature announcement (or a feature-churner getting a discount) reads as "they never listened." Segment by stated reason or don't send.
- **Win-back offers weaker than new-customer promos.** Ex-customers see the "20% off for new users" banner. If returning is a worse deal than churning-and-resigning-up under a new email, the campaign is self-defeating.
- **Ignoring pause as an outcome.** Teams count pauses as failures and push discounts instead. A pause preserves the relationship at zero revenue cost and reactivates at full price 15–30% of the time.
- **Building the perfect score before shipping anything.** A 3-input score on billing + logins launched this week beats a 12-input ML model shipped next quarter. Recalibrate quarterly instead of perfecting upfront.
