---
name: customer-onboarding
description: "Designs end-to-end customer onboarding programs: defines the activation metric, maps milestones to it, plans day 0/7/30 touchpoints, builds a combined email and in-app sequence, audits the current flow for friction, structures the sales-to-success handoff, and sets up onboarding measurement. Use when the user asks to design an onboarding flow, improve activation or time-to-value, write onboarding emails or in-app messages, audit a signup or setup flow for friction, define an activation metric, plan a sales-to-CS handoff, build a customer-facing 30/60/90 plan, or figure out how to measure onboarding success."
---

# Customer Onboarding

Design onboarding programs that move new customers from signup to their first moment of real value as fast as possible, then to durable habit. The deliverable is a complete onboarding program: an activation metric with milestone map, a day 0/7/30 touchpoint plan, a sequenced set of emails and in-app messages, a friction audit of the current flow, a sales-to-success handoff process (where sales-assisted), and a measurement plan. Everything anchors to one number — the activation rate — because onboarding that isn't accountable to a metric degrades into a welcome email and a tour nobody finishes.

## When to use this skill

Use this skill when the user wants to:
- Design or redesign onboarding for a new or existing product (self-serve, sales-assisted, or hybrid)
- Define or sharpen an activation metric and the milestones leading to it
- Write or restructure onboarding emails, in-app checklists, tooltips, or empty states
- Audit an existing signup-to-value flow for friction and drop-off
- Build the handoff process from sales to customer success / implementation
- Decide what to measure and report on for onboarding performance

Do NOT use this skill for:
- Winning back or saving customers already past onboarding — use **churn-prevention**
- Ongoing lifecycle or promotional email programs — use **email-marketing**
- Writing the knowledge base or setup documentation itself — use **help-docs** (this skill decides *when* to link docs, not their content)
- Cohort retention math beyond onboarding windows — use **retention-cohort-analysis**
- Pre-signup conversion (landing pages, trials-start rate) — use **landing-page-cro** or **funnel-analysis**
- Onboarding new employees — use **employee-onboarding**
- Testing onboarding variants statistically — design experiments with **ab-testing**

## Inputs to gather

Ask for these before starting. Where the user doesn't know, use the defaults and label them as assumptions in the output.

1. **Product and core job**: What does the product do, and what job does a new customer hire it for? (No default — required.)
2. **Motion**: Self-serve/PLG, sales-assisted, or hybrid? Default: self-serve if ACV < $5k/yr, sales-assisted if > $15k/yr, hybrid between.
3. **Current activation definition**, if any, and current activation rate. Default assumption if unknown: no formal metric exists; benchmark self-serve SaaS activation at 20-40% of signups.
4. **Signup-to-value steps today**: Ask the user to walk through the current flow step by step (or paste screenshots/flow description). If they can't, build the friction audit as a checklist for them to run.
5. **Personas and use cases**: Is there one primary use case or several? Default: design for the single highest-volume use case; branch only if two use cases exceed ~30% of signups each. Reference **customer-personas** output if it exists.
6. **Team and tooling**: Who sends emails (tool?), can they ship in-app messages (Intercom, Appcues, Pendo, custom?), is there a CSM team? Default: email tool exists, no in-app messaging tool, no CSMs.
7. **Time-to-value today**: How long from signup to first meaningful outcome? Default assumption: unknown; treat reducing it as a primary goal.
8. **Trial/plan structure**: Free trial length, freemium, paid-from-day-one? Default: 14-day free trial.
9. **Data access**: Can they query product events? Default: basic analytics only (GA4 or similar), no event warehouse.

## Process

### Step 1 — Define the activation metric

1. List 3-6 candidate actions that plausibly represent "first value received" (not "feature used"). Good candidates are outcomes: report generated, first invoice sent, first teammate replied, first campaign launched.
2. Score each candidate against three criteria:
   - **Leading**: happens within the first 1-14 days (self-serve) or first 30-60 days (enterprise implementation).
   - **Predictive**: users who do it retain meaningfully better. If the user has data, ask them to compare 8-week retention of doers vs. non-doers; look for a 2x+ retention lift. Without data, pick the action closest to the product's core job and flag it for validation.
   - **Influenceable**: onboarding touches can actually drive it (rules out "signed annual contract").
3. Write the metric in the canonical form: **"[Persona] completes [action] [threshold] times within [window] of signup."** Example: "A workspace admin creates a project and invites ≥2 teammates within 7 days of signup."
4. Decision point: if two use cases each exceed ~30% of signups and have different value moments, define one activation metric per use case and branch the program at the first "what do you want to do?" question. Otherwise keep one metric — multiple metrics for one flow is a smell.

### Step 2 — Map milestones backward from activation

1. Work backward from the activation event to signup, listing every required user state in between. Keep it to **3-6 milestones**; more than 6 means the setup is too heavy and the friction audit (Step 3) matters more than messaging.
2. For each milestone record: the user action, where it happens (in product, email, call), the expected completion timeframe, and the current conversion rate if known.
3. Identify the **"aha" milestone** — the single milestone with the biggest retention correlation or, absent data, the one where the user first sees their own data/outcome in the product. Everything before it is setup cost; minimize it. Everything after is reinforcement.

### Step 3 — Friction audit of the current flow

Walk the current flow (from the user's description, screenshots, or a live walkthrough they narrate) and score every step:

1. Count for each step: form fields, decisions required, context switches (email verification, downloading something, inviting someone who must respond), and wait states.
2. Flag against these thresholds:
   - Signup form > 3 fields before showing the product → flag (each extra field typically costs 5-10% conversion).
   - Required credit card for a free trial → flag as a strategic choice: expect roughly half the signups but 2-3x the trial-to-paid rate (opt-out trials convert ~40-60% vs. ~15-25% opt-in).
   - Any mandatory step that isn't required to reach the aha milestone → cut or defer it ("progressive profiling": ask later, in context).
   - Empty states with no next action → replace with a one-click sample/demo dataset or template.
   - Time from signup to aha > 10 minutes for self-serve → restructure; > 1 session is an emergency.
3. Classify each flagged item: **Cut** (remove), **Defer** (move post-activation), **Default** (pre-fill or use templates), **Assist** (add checklist item, tooltip, or human touch).
4. Output the audit as a table (template below) sorted by estimated drop-off impact.

### Step 4 — Design the day 0 / day 7 / day 30 touchpoint plan

Structure the program in three horizons. Adjust day numbers to the trial length (for a 14-day trial: day 0 / day 5 / day 12; for enterprise: week 0 / week 2 / week 6) but keep the three-horizon logic.

- **Day 0 (signup day) — reach setup momentum.** Goal: first milestone completed in the first session. Touches: in-product welcome + 3-5 item checklist, welcome email within 5 minutes, and (sales-assisted) kickoff scheduled within 3 business days.
- **Day 7 (or mid-trial) — reach activation.** Goal: activation metric hit. Touches: behavior-triggered nudges for stalled users, a "you're 1 step away" email, and (sales-assisted) first working session completed.
- **Day 30 (or trial end + buffer) — habit and expansion.** Goal: 2nd/3rd value repetition, team invited, conversion/renewal footing. Touches: progress recap email ("here's what you accomplished"), CSAT or onboarding-effort survey, and (sales-assisted) success plan review against goals captured at handoff.

Decision point: if activation rate at day 7 is under ~25% in a self-serve flow, prioritize Step 3 fixes over adding more messages — messaging cannot rescue a broken flow.

### Step 5 — Build the combined email + in-app sequence

Design email and in-app as one system with distinct jobs: **in-app drives action in the moment; email pulls users back in.** Never deliver the same message in both channels on the same day.

1. Sequence length: 5-8 emails across the onboarding window for self-serve (a 14-day trial supports ~6). More than 8 in 14 days reads as spam.
2. Make the sequence **behavior-branched, not purely time-based**: every email after the welcome should check "has the user done X?" and either skip, congratulate-and-advance, or nudge. A user who activated on day 1 must not get "have you tried logging in?" on day 3.
3. One CTA per email. Subject lines under 50 characters. Welcome email benchmarks: 50-60% open rate (vs. 20-25% for later sends) — spend it on the single most important action, not a feature tour.
4. In-app elements, in priority order: (a) setup checklist with 3-5 items, first item pre-checked to exploit completion bias; (b) contextual empty states with one primary action; (c) tooltips only where the UI genuinely can't be self-evident — cap product tours at 3-5 steps, skippable, because forced tours are dismissed-without-reading by most users.
5. Write every message in the sequence (template below). For each: trigger (time or behavior), channel, subject/headline, body, CTA, and suppression rule (who should NOT get it).

### Step 6 — Sales-to-success handoff (sales-assisted and hybrid only)

Skip this step for pure self-serve. Otherwise:

1. Define the handoff artifact — a structured doc the AE completes before or within 24 hours of closed-won (template below). The rule: **the customer should never have to repeat to the CSM anything they already told sales.**
2. Set the handoff SLA: internal handoff within 1 business day of signature; customer kickoff call within 3-5 business days. Every day of silence after signature raises early-churn risk — the emotional peak is at purchase and decays fast.
3. Script the transition: the AE introduces the CSM by email (warm intro, not a ticket), stays on the kickoff call for the first 10 minutes, then exits. Define who owns the account during onboarding (CSM) and when sales re-enters (expansion signals).
4. Define "onboarding complete" exit criteria tied to the activation metric plus adoption breadth (e.g., "activation metric hit + 3 active users + success plan reviewed"), and what happens at exit (transition to steady-state cadence; see **churn-prevention** for what comes next).

### Step 7 — Measurement plan

1. Define the metric stack:
   - **North star**: activation rate = activated signups ÷ total signups, reported weekly by signup cohort.
   - **Speed**: median time-to-activation (report median, not mean — a few slow enterprise accounts wreck the mean).
   - **Funnel**: milestone-to-milestone conversion from Step 2's map — this locates the problem when activation dips.
   - **Program health**: onboarding email open/click by message, checklist completion rate, kickoff-call attendance (sales-assisted), day-30 CSAT or Customer Effort Score.
   - **Lagging validation**: week-8 (or month-3) retention of activated vs. non-activated cohorts — re-check the 2x+ lift quarterly to confirm the activation metric still predicts retention.
2. Specify instrumentation: the exact events to track for each milestone (event name, properties, when fired). If the user has no event tracking, list the 5-10 events to implement first.
3. Set the review cadence: weekly cohort review during active iteration, monthly once stable. For dashboard layout, hand off to **kpi-dashboard-design**; for deeper cohort math, **retention-cohort-analysis**.

## Frameworks & templates

### Activation metric statement (fill-in)

```
Activation = [persona] completes [outcome action] [N] time(s) within [X days] of signup.
Validated by: users meeting this retained [Y]x better at week 8 than those who didn't
(or: "unvalidated — validate against retention within 90 days").
Current rate: [Z]% of signups. Target: [Z + realistic increment]%.
```

### Milestone map + friction audit table

| # | Milestone | Where | Target time | Conv. today | Friction found | Fix (Cut/Defer/Default/Assist) |
|---|-----------|-------|-------------|-------------|----------------|-------------------------------|
| 1 | Account created | Web | Min 0 | 100% | 6 form fields | Cut to 3; defer company size to first project |
| 2 | First project created | In-app | Min 5 | 61% | Blank empty state | Default: 3 starter templates |
| 3 | Data imported | In-app | Min 10 | 34% | CSV mapping confusing | Assist: checklist item + sample file |
| 4 | **Aha: first report viewed** | In-app | Day 1 | 22% | — | Auto-generate from sample data |
| 5 | Teammate invited | In-app/email | Day 5 | 15% | Invite buried in settings | Assist: prompt after first report |

### Sequence message spec (use for every email and in-app message)

```
Message: [name, e.g., "Day 2 — import nudge"]
Channel: [email | in-app checklist | tooltip | banner | modal]
Trigger: [time: day N at local 9am] AND/OR [behavior: has done X, has NOT done Y]
Suppress if: [e.g., already activated; unsubscribed; enterprise segment]
Subject/headline (≤50 chars): [___]
Body (≤120 words for email; ≤30 words in-app): [___]
CTA (one): [verb + object, deep-links to the exact screen]
Success event: [what the user does that marks this message as having worked]
```

### Worked example — 14-day trial, self-serve analytics tool

- Day 0, minute 0 (in-app): checklist — ✓ Account created / Connect a data source / View your first dashboard / Invite a teammate.
- Day 0, minute 5 (email): "Your first dashboard in 10 minutes" → CTA: Connect data source. Suppress if source already connected.
- Day 1 (email, branch): IF no source connected → "Stuck connecting your data?" with 3 one-click integrations + support link. IF connected → "Your dashboard is live — 3 things to try."
- Day 3 (in-app banner): "Dashboards are better together" → Invite teammate. Suppress if ≥1 invite sent.
- Day 5 (email): social proof + second use case ("Teams like yours also track ___").
- Day 9 (email): progress recap — "You've created 4 charts viewed 12 times" — auto-generated numbers; CTA: upgrade preview. Suppress if no activity since day 2; those get a "want help or want out?" email instead.
- Day 12 (email): trial ends in 2 days; plan comparison; one CTA: choose a plan.
- Day 14 (email): trial end; offer 7-day extension IF activation metric was hit but no conversion.

### Sales-to-success handoff doc (fill-in)

```
Account: [company] | ARR: [$] | Contract start: [date] | Renewal: [date]
Champion: [name, role, what they personally win if this succeeds]
Economic buyer: [name, role] | Other stakeholders: [names/roles]
Why they bought (verbatim from discovery): "[___]"
Success criteria the customer stated: 1) [___] 2) [___] 3) [___]
Timeline pressure: [e.g., must launch before Q4 board meeting]
Competitors evaluated / displaced tool: [___] — migration data lives in [___]
Risks flagged during sale: [e.g., IT security review pending; champion changing roles]
Commitments made by sales: [anything promised — integrations, training, pricing terms]
Technical setup notes: [SSO? data volume? integrations required?]
Kickoff scheduled: [date — must be ≤5 business days from signature]
```

### First working-session agenda (sales-assisted, 45 min)

10 min goals recap (from handoff doc — confirm, don't re-ask) → 25 min hands-on setup of milestone 1-2 in the customer's own account with their real data → 5 min assign homework with dates → 5 min schedule next session before hanging up.

## Output format

Deliver a single document titled "**[Product] Onboarding Program**" with these sections, in order:

1. **Summary** (≤150 words): motion, activation metric, current vs. target rate, top 3 changes recommended.
2. **Activation metric** — the filled statement, validation status, and rationale for rejecting the runner-up candidates.
3. **Milestone map & friction audit** — the combined table, sorted by impact, with each fix classified Cut/Defer/Default/Assist.
4. **Day 0/7/30 plan** — one subsection per horizon: goal, touchpoints, owner (product/lifecycle/CSM).
5. **Message sequence** — every email and in-app message fully written using the message spec (trigger, suppression, subject, body, CTA). Ready to paste into the user's tools.
6. **Handoff process** (if sales-assisted) — filled handoff template, SLAs, kickoff agenda, exit criteria.
7. **Measurement plan** — metric stack table (metric, formula, source event, cadence, owner), event tracking spec, and review cadence.
8. **Assumptions & open questions** — every default assumed in place of a real answer, plus the validation the user should run (e.g., "confirm activation-retention correlation").

Match tone to the user's product voice if samples were provided; otherwise default to plain, warm, second-person copy.

## Quality checklist

Pass every item before delivering:

1. Activation metric is a customer outcome, not a vanity action ("logged in twice" fails; "sent first invoice" passes).
2. Activation metric has persona + action + threshold + time window — all four present.
3. Milestone map has 3-6 milestones and identifies exactly one aha milestone.
4. Friction audit flags every mandatory pre-aha step that isn't strictly required, each with a Cut/Defer/Default/Assist decision.
5. Every message has a behavioral trigger or suppression rule — no purely time-based blast to all users after the welcome email.
6. No user can receive a nudge for an action they already completed.
7. Email count fits the window (≤8 per 14 days) and every email has exactly one CTA deep-linking to the relevant screen.
8. Welcome email asks for the single next action, not a feature tour.
9. In-app checklist has 3-5 items with the first pre-checked.
10. Day 0/7/30 goals map 1:1 to milestones from the map — no touchpoint exists without a milestone it advances.
11. Sales-assisted: handoff doc requires zero re-asking of discovery answers, and kickoff SLA is ≤5 business days.
12. Measurement plan names specific events with formulas, and includes the activated-vs-not retention validation check.
13. Metrics use medians for time-based measures and cohort-based reporting (by signup week), not all-time averages.
14. Zero placeholder text remains; all numbers are either user-provided, benchmarked with a stated range, or explicitly flagged as assumptions.

## Common mistakes

- **Activation defined by what's easy to track instead of what predicts retention.** "Completed profile" is measurable and meaningless. If doers and non-doers retain the same, it's not activation — it's trivia.
- **Onboarding = product tour.** A 9-step tooltip carousel shown before the user has any context gets clicked through blind. Teach in the moment of need, not in a lecture at the door.
- **Time-based sequences that ignore behavior.** The fastest way to train users to ignore you is emailing "getting started tips" to someone who activated a week ago. Branch on events or don't send.
- **Front-loading configuration.** Asking for integrations, team invites, notification preferences, and billing before showing any value optimizes for churn. Defer everything the aha moment doesn't need.
- **Measuring completion instead of outcomes.** 80% checklist completion with flat retention means the checklist items are wrong. The checklist serves activation, not itself.
- **The post-sale dead zone.** Contract signed Friday, first contact 2.5 weeks later. Buyer enthusiasm peaks at signature and decays daily; a kickoff SLA is a retention lever, not an ops nicety.
- **Handoffs where the customer repeats their whole story.** Nothing signals "you're a ticket number now" faster than a CSM asking "so, what are you hoping to get out of the product?" after three discovery calls captured exactly that.
- **One flow for every persona.** Sending an end-user through admin setup (or vice versa) guarantees irrelevant steps. If a second use case exceeds ~30% of signups, branch at the first question.
- **Declaring victory at conversion.** Trial-to-paid is a billing event, not proof of value. Onboarding exits at habit (repeated value + breadth of adoption), and what follows belongs to **churn-prevention**.
- **Adding messages to fix a broken flow.** If day-7 activation is under ~25%, the problem is friction, not persuasion. Fix the flow first; no email rescues a 6-field signup form and an empty dashboard.
