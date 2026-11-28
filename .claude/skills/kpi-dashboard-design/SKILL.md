---
name: kpi-dashboard-design
description: "Designs KPI systems and dashboards: selects a north star metric, builds a KPI tree linking input metrics to output metrics, splits leading vs lagging indicators, specifies dashboard layout with audience-appropriate hierarchy and 5-second readability, sets targets and alert thresholds, and defines review rituals. Use when the user asks to pick a north star metric, define KPIs, build a KPI tree or metrics hierarchy, design a dashboard or scorecard, decide what metrics to track, set targets or alert thresholds, choose leading indicators, fix a cluttered dashboard, or set up a weekly metrics review."
---

# KPI & Dashboard Design

Guide the user from "what should we measure?" to a complete, buildable specification: one north star metric, a KPI tree that shows which input levers drive it, a dashboard layout spec anyone can implement in Looker Studio, Metabase, Tableau, or a spreadsheet, plus targets, alert thresholds, and a review ritual so the dashboard actually changes decisions instead of decorating a wall. The deliverable is a metrics system, not a chart gallery.

## When to use this skill

Use when the user wants to:
- Choose or pressure-test a north star metric
- Define KPIs for a company, team, product, or campaign
- Build a KPI tree / driver tree / metrics hierarchy
- Design a new dashboard or fix an existing cluttered one
- Set targets, thresholds, or alerting rules for metrics
- Establish a weekly/monthly metrics review cadence

Do NOT use for adjacent jobs — route instead:
- Writing the recurring report narrative or stakeholder commentary → **analytics-reporting**
- Diagnosing conversion drop-offs stage by stage → **funnel-analysis**
- Retention curves and cohort tables → **retention-cohort-analysis**
- Designing experiments to move a metric → **ab-testing**
- Turning metrics into quarterly objectives and key results → **okrs-and-goals**
- Auditing ad account performance metrics → **ppc-audit**
- Financial statements and revenue modeling → **financial-projections**

If the user only asks "which chart type for this data," answer directly; that alone does not need this skill.

## Inputs to gather

Ask for these up front. Where the user shrugs, apply the stated default and label it as an assumption in the output.

1. **Business model and stage.** SaaS, ecommerce, marketplace, agency, media, local service? Pre-revenue, growth, or mature? (Default: assume growth-stage; the north star differs sharply by model — see the picker table below.)
2. **Audience for the dashboard.** Exec/board, functional team lead, or operators doing daily work? (Default: one exec view + one team view; never force one dashboard to serve both.)
3. **Decision cadence.** What decisions should this dashboard trigger, and how often — daily standup, weekly growth meeting, monthly board? (Default: weekly team review + monthly exec review.)
4. **Data sources available.** GA4, Stripe, HubSpot/Salesforce, product database, ad platforms, spreadsheets? (Default: assume GA4 + billing + CRM exist; flag any KPI with no plausible source as "instrument first.")
5. **Current metrics, if any.** What do they track today, and which numbers have actually changed a decision in the last 90 days? (Anything that hasn't is a cut candidate.)
6. **Targets or baselines.** Last 3–12 months of the key numbers if available. (Default: if no baseline exists, first target = "establish baseline over 4 weeks," not an invented number.)
7. **Tooling.** Where will this live? (Default: spec is tool-agnostic; add tool-specific notes only if the user names one.)

## Process

1. **Select the north star metric (NSM).** Propose exactly one, using three tests: (a) it measures value *delivered to customers*, not just value captured (revenue is usually an output, not a north star); (b) every team can influence it; (c) moving it now predicts revenue in 6–12 months. Offer 2–3 candidates from the picker table in Frameworks, state trade-offs in one sentence each, and recommend one. Decision point: if the user insists on revenue as NSM, accept it but pair it with a leading "value moment" metric one level down.

2. **Define the NSM precisely.** Write a one-line operational definition covering: exact event or state counted, entity (user, account, order), time window, and inclusion/exclusion rules (e.g., "Weekly active teams = accounts with ≥3 members who each created ≥1 document in the trailing 7 days, excluding internal and trial-expired accounts"). Ambiguous definitions are the #1 cause of dashboard distrust.

3. **Build the KPI tree.** Decompose the NSM into 2–4 direct drivers using arithmetic where possible (e.g., Revenue = Traffic × Conversion Rate × AOV; MRR growth = New MRR + Expansion − Contraction − Churned MRR). Go at most 3 levels deep. Each leaf must be: owned by one named person/role, movable within a quarter, and measurable with current data. Decision point: if a branch can't be owned or measured, prune it or mark it "instrument first" — do not leave orphan metrics in the tree.

4. **Split leading vs lagging.** Tag every tree node. Lagging = confirms results after the fact (revenue, churn rate, NPS). Leading = predicts the lagging metric and is directly actionable this week (demos booked, activation rate, weekly usage depth). Rule of thumb: the top 1–2 levels of the tree are lagging; leaves should be mostly leading. Every lagging KPI on the dashboard needs at least one leading counterpart, or the dashboard can only report history, never change it.

5. **Cut to a shortlist.** Exec dashboard: 5–7 KPIs maximum. Team dashboard: 7–10. Everything else becomes drill-down or gets deleted. For each survivor, answer: "If this number moved 20%, who does what differently?" No answer → cut it.

6. **Design the layout.** Apply the 5-second rule: a first-time viewer must identify "are we winning or losing?" within 5 seconds of looking at the top of the page. Structure top-to-bottom, left-to-right by importance:
   - **Row 1 — Health strip:** NSM plus 2–4 headline KPIs as big-number tiles, each with current value, % change vs prior period, and a tiny sparkline. Status color per tile (green/amber/red) driven by threshold rules, not eyeballing.
   - **Row 2 — Trends:** 2–3 time-series charts for the KPIs where trajectory matters more than the point value. Default to 12–13 weeks of weekly data; monthly for board views.
   - **Row 3 — Drivers/segments:** breakdowns that explain row 1 (by channel, plan, region, cohort). This is where operators dig.
   - One screen, no scrolling, for the exec view. Team views may scroll once.
   Chart selection defaults: line for trends, bar for category comparison, big-number tile for status, table for granular operator data. Never pie charts with >3 slices; never dual-axis charts on an exec view; never gauges (they burn space for one number a tile shows better).

7. **Set targets and alert thresholds.** For each shortlisted KPI define three numbers:
   - **Target:** where it should be. Base on baseline + realistic improvement (e.g., baseline +10–20% for a quarter unless the user has evidence for more), industry benchmark, or a top-down requirement — state which.
   - **Amber threshold:** early warning, typically 5–15% adverse of target or a broken trend (2+ consecutive periods declining).
   - **Red threshold:** intervention trigger, typically 15–25% adverse of target or a statistically abnormal reading (beyond ±2–3 standard deviations of the trailing 8-week mean, if volume supports it — under ~100 events/period, use wider bands or longer windows because noise will dominate).
   Assign an owner and a first-response action to every red threshold (e.g., "Red on activation rate → PM reviews this week's onboarding funnel within 24h"). An alert without an owner and action is decoration.

8. **Define the review ritual.** Specify cadence, duration, attendees, and agenda. Default: weekly 30-minute metrics review — 5 min health strip walkthrough, 15 min on the 1–2 reddest metrics (owner presents cause hypothesis + action), 5 min on leading indicators of next month's results, 5 min to log decisions. Monthly: 45-minute deeper review including target re-forecast. Quarterly: re-validate the tree itself — do the leading indicators still correlate with the lagging ones they claim to predict?

9. **Deliver the spec** in the Output format below, list assumptions, and flag every metric that needs instrumentation before launch. Offer to draft the review meeting agenda doc or a spreadsheet skeleton as a follow-up.

## Frameworks & templates

### North star metric picker (by business model)

| Business model | Strong NSM candidates | Weak/trap choices |
|---|---|---|
| B2B SaaS | Weekly active accounts hitting core action; seats actively used | Signups, logins, page views |
| Consumer subscription | Weekly/monthly retained actives completing value moment | Downloads, registered users |
| Ecommerce | Repeat purchase rate × active customers; weekly purchasers | Sessions, cart adds |
| Marketplace | Completed transactions/liquidity (fill rate) | Listings, GMV alone (hides one-sided growth) |
| Media/content | Engaged time per active reader; qualified subscribers | Raw pageviews, ad impressions |
| Agency/services | Retained client revenue; utilization × realized rate | Proposal count, meetings held |

### KPI tree template (fill in the blanks)

```
NORTH STAR: ____________________  [Lagging] Owner: ______
Definition: ____________________ (entity, event, window, exclusions)

├─ Driver 1: ____________ [Leading/Lagging] Owner: ____ Target: ____
│   ├─ Input 1a: ________ [Leading] Owner: ____ Target: ____
│   └─ Input 1b: ________ [Leading] Owner: ____ Target: ____
├─ Driver 2: ____________ [Leading/Lagging] Owner: ____ Target: ____
│   └─ Input 2a: ________ [Leading] Owner: ____ Target: ____
└─ Driver 3: ____________ [Leading/Lagging] Owner: ____ Target: ____
Arithmetic check: NSM ≈ ____ × ____ × ____ (or sum of parts)
```

### Worked example — B2B SaaS KPI tree

```
NORTH STAR: Weekly Active Teams (accounts with ≥3 users each doing
≥1 core action in trailing 7 days) [Lagging] Owner: CEO

├─ New activated teams/week [Leading] Owner: Head of Growth  Target: 25/wk
│   ├─ Trials started/week [Leading] Owner: Marketing  Target: 120/wk
│   └─ Trial→activated rate [Leading] Owner: PM  Target: 21% (baseline 16%)
├─ Retained active teams [Lagging] Owner: Head of CS  Target: 93% wk-over-wk
│   ├─ Teams w/ ≥5 core actions/wk [Leading] Owner: PM  Target: 60% of actives
│   └─ Accounts w/ open red-flag ticket [Leading, inverse] Owner: CS  Target: <8
└─ Reactivated teams/week [Leading] Owner: Lifecycle Mktg  Target: 6/wk
Arithmetic check: WAT_t ≈ WAT_(t-1) × retention + new activated + reactivated
```

### KPI definition card (one per shortlisted metric)

```
Metric: ______   Type: Leading / Lagging   Owner: ______
Definition: ______ (exact formula, filters, time window)
Source: ______ (system + table/report)   Refresh: daily / weekly
Baseline: ______   Target: ______ by ______
Amber: ______   Red: ______   Red response: ______ (who does what, by when)
Decision it informs: ______
```

### Dashboard layout spec — worked example (exec view, one screen)

```
Row 1 (tiles): Weekly Active Teams | New MRR | Net Revenue Retention |
               Trial→Activated %          — each: value, Δ% vs prior 4-wk
               avg, sparkline, status color
Row 2 (charts): WAT weekly line, 13 wks w/ target band | MRR movements
                stacked bar (new/expansion/contraction/churn), 6 mo
Row 3 (drivers): Activation rate by acquisition channel (bar) |
                 Actives by plan tier (stacked area, 13 wks)
Annotations: mark launches/pricing changes on time axes.
```

### Leading vs lagging — 3-question classification test

Apply to any metric whose tag is disputed:

1. **Can the owner move it within 1–2 weeks of deliberate effort?** Yes → leans leading. (Churn rate: no. Onboarding emails sent: yes.)
2. **Does it change before or after the business result it relates to?** Before → leading; after → lagging.
3. **Is there evidence (or at least a stated mechanism) that it predicts a lagging metric?** No mechanism → it is neither; it is noise. Cut it or run the correlation before promoting it to the dashboard.

Common tags: revenue, churn %, NPS, LTV, CAC payback → lagging. Trials started, activation rate, sales calls held, weekly core actions per account, pipeline created → leading. Some metrics are both depending on altitude — e.g., activation rate is lagging for the onboarding team but leading for the revenue view; tag it per view, not globally.

### Threshold-setting quick reference

- Stable, high-volume metric (>1,000 events/period): amber at ±2σ of trailing 8-period mean, red at ±3σ.
- Low-volume metric (<100 events/period): use 4-week rolling averages and percentage bands (amber −10%, red −20% vs target); point values will whipsaw.
- Ratio metrics (conversion, churn): alert on both the ratio and its denominator — a "stable" conversion rate on collapsing traffic is a red, not a green.
- New metric with no history: 4-week baseline period, thresholds set at the end of it; show it on the dashboard greyed as "baselining."
- Seasonal businesses: compare vs same period last year (or trailing 52-week same-weekday average), not vs last week, or every December reads as a crisis or a triumph.
- Cap total red-capable alerts at ~5 per dashboard; if more than 2 metrics are red in a normal week, thresholds are miscalibrated and will be ignored.

## Output format

Deliver one document with these sections, in order:

1. **North star metric** — name, one-line rationale, full operational definition, and the 1–2 rejected candidates with one-line reasons.
2. **KPI tree** — the filled-in tree diagram (code block), every node tagged Leading/Lagging with owner, plus the arithmetic check line.
3. **KPI definition cards** — one card per shortlisted metric (5–7 exec, up to 10 team), using the card template.
4. **Dashboard layout spec** — per audience view: row-by-row layout, chart type per slot, time ranges, comparison logic, and status-color rules. Written so someone can build it without asking questions.
5. **Targets & alert table** — metric | baseline | target | amber | red | owner | red-response action.
6. **Review ritual** — cadence, duration, attendees, agenda, and the quarterly tree re-validation note.
7. **Assumptions & instrumentation gaps** — defaults you applied and metrics that need tracking built before the dashboard is real.

## Quality checklist

- [ ] Exactly one north star metric, with a precise operational definition (entity, event, window, exclusions).
- [ ] NSM measures customer value delivered, or the pairing with a value-moment metric is explicit.
- [ ] KPI tree is ≤3 levels deep and arithmetic/logical decomposition is stated and checkable.
- [ ] Every tree node is tagged Leading or Lagging and has a single named owner or role.
- [ ] Every lagging KPI on the dashboard has at least one leading counterpart.
- [ ] Exec view has 5–7 KPIs and fits one screen; team view has ≤10.
- [ ] Every shortlisted KPI has a documented answer to "who does what differently if this moves 20%?"
- [ ] Every KPI card names a real data source, or the metric is flagged "instrument first."
- [ ] Every KPI has baseline, target, amber, and red values — with the basis for the target stated.
- [ ] Every red threshold has an owner and a concrete first-response action with a deadline.
- [ ] Ratio metrics alert on the denominator as well as the ratio.
- [ ] Layout spec names chart types, time ranges, and comparison periods for every slot; no gauges, no >3-slice pies, no dual-axis charts on exec views.
- [ ] Review ritual specifies cadence, duration, attendees, and agenda — not just "review weekly."
- [ ] Assumptions and instrumentation gaps are listed explicitly.

## Common mistakes

- **Revenue as the north star.** Revenue lags customer value by months and no single team can own it; use it as the top lagging output and put a value-delivery metric beside or above it.
- **The 30-tile wall.** Dashboards accrete metrics because deleting feels risky. Enforce the 5–7 exec cap; move everything else to drill-downs. A dashboard nobody can read in 5 seconds gets read by nobody.
- **All-lagging dashboards.** Revenue, churn, NPS, CAC — all rear-view mirror. By the time they move, the quarter is decided. Leaves of the tree must be things a team can push *this week*.
- **Vanity leading indicators.** Signups, followers, pageviews feel leading but predict nothing if they don't correlate with the lagging metric. In the quarterly re-validation, check the correlation; cut leaders that don't lead.
- **Undefined metrics.** "Active users" without window, entity, and exclusions guarantees two people quoting two numbers in the same meeting, after which nobody trusts the dashboard.
- **Targets invented without baselines.** A target of "40% activation" pulled from a blog post when your baseline is unknown produces permanent red and alert fatigue. Baseline first (4 weeks), then set targets at baseline +10–20% unless evidence supports more.
- **Alerts with no owner or playbook.** A red cell that pings a channel nobody owns trains everyone to ignore red. Owner + action + deadline, or don't alert.
- **One dashboard for everyone.** The board wants 6 numbers and trends; operators need segment tables. Merging them yields a page too shallow for operators and too dense for execs. Build per-audience views off the same tree.
- **Point-in-time tiles without comparison.** "MRR: $84,200" is meaningless alone. Every tile needs Δ vs prior period or vs target — the comparison is the information.
- **Ratio blindness.** Celebrating a conversion-rate uptick while the denominator (traffic, trials) collapses. Always show or alert on the volume beneath every ratio.
- **Treating the dashboard as the deliverable.** Without the review ritual, dashboards decay into wallpaper within ~2 months. The meeting where reds get owners and actions is what makes the metrics system real.
