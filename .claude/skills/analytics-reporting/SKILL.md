---
name: analytics-reporting
description: "Builds recurring marketing and business reports that drive decisions: audience-matched metric sets, weekly and monthly report templates, narrative insights (what happened, so what, now what), anomaly explanations, and vanity-metric filtering. Use when the user asks to write a weekly or monthly marketing report, summarize GA4/ad/email performance for stakeholders, create a recurring reporting template, explain why a metric spiked or dropped, turn a data export into an executive summary, decide which KPIs to report to leadership vs. the channel team, or make a report 'actually useful' instead of a data dump."
---

# Analytics Reporting

Turn raw performance data into a recurring report someone acts on. A good report answers three questions in order — what happened, why it matters, and what to do next — for a specific audience, in under five minutes of reading. This skill covers choosing the right metric set per audience, structuring weekly and monthly reports, writing narrative insight (not metric recitation), explaining anomalies credibly, and keeping vanity metrics out.

## When to use this skill

**Use for:**
- Writing or templating a recurring report (weekly, monthly, quarterly) on marketing or business performance
- Turning a CSV export, GA4 screenshot, or pasted metrics into a stakeholder-ready summary
- Choosing which metrics belong in a report for a given audience
- Explaining a spike, drop, or flatline in a metric
- Auditing an existing report for vanity metrics and missing insight

**Do NOT use for — point to the sibling skill instead:**
- Designing a live, always-on dashboard (metric selection for screens, layout, tooling) → **kpi-dashboard-design**
- Diagnosing where users drop off across conversion steps → **funnel-analysis**
- Reading out an experiment result with significance testing → **ab-testing**
- Cohort-based retention or churn analysis → **retention-cohort-analysis**
- Synthesizing survey/review/support-ticket data → **customer-feedback-analysis**
- Setting the goals themselves → **okrs-and-goals**; auditing paid accounts → **ppc-audit**

## Inputs to gather

Ask for these before drafting. If the user can't answer, apply the default.

1. **Audience** — who reads this and what decision do they make with it? Default: assume a founder/marketing-lead hybrid who both approves budget and executes.
2. **Cadence** — weekly, monthly, or both? Default: weekly for channel operators, monthly for leadership. If they want one report for everyone, build monthly and add a one-screen weekly digest.
3. **The data** — pasted numbers, CSV, screenshots, or descriptions. Always ask for the comparison period too (prior week/month AND same period last year if the business is seasonal). If they only have current-period numbers, say plainly that the report will be weaker without comparisons and use targets as the baseline.
4. **Goals/targets** — monthly or quarterly targets per metric. Default: if none exist, use trailing 3-month average as the implicit baseline and flag "no targets set" as a recommendation in the report itself.
5. **Channels in scope** — organic, paid, email, social, referral, direct. Default: whatever the data shows, grouped into paid vs. owned vs. earned.
6. **Business model** — ecommerce (revenue, AOV, ROAS), SaaS (signups, MQLs, pipeline), lead-gen (leads, CPL, close rate), content/media (audience, engagement, monetization). This determines the North Star metric.
7. **Known context** — launches, promos, outages, seasonality, budget changes during the period. This is the raw material for anomaly explanations; ask explicitly because users forget to volunteer it.
8. **Prior report** — if one exists, request it. Match its structure unless it violates the quality checklist below; continuity matters more than elegance in recurring reporting.

## Process

1. **Fix the audience and the decision.** Write one sentence: "This report helps [role] decide [decision]." If you cannot fill that in, the report has no reason to exist — push back and ask what changes based on what the numbers say. Every metric that follows must serve that sentence.

2. **Build the metric set with the 3-tier hierarchy** (see Frameworks). Cap it hard:
   - Executive/monthly: 5–7 metrics total, one North Star.
   - Channel owner/weekly: 8–15 metrics, grouped by channel.
   - Never report a metric nobody will act on. For each candidate metric, ask: "If this halved overnight, would anyone do anything?" If no, cut it.

3. **Run the vanity filter** on every metric. A metric survives only if it is (a) tied to revenue or a validated leading indicator of it, (b) comparable across periods, and (c) influenceable by the reader. Impressions, total pageviews, follower counts, and cumulative anything ("10,000 all-time downloads!") almost never survive. Replace, don't just delete: impressions → qualified clicks or CTR; followers → engaged reach or email signups from social; pageviews → conversions or scroll-qualified sessions.

4. **Compute the comparisons.** For every metric, produce: current value, prior period, % change, and (if data exists) same period last year and target. Round sensibly — 12.4% not 12.4187%, $48.2K not $48,231.17 for exec reports (channel reports can keep full precision on spend).

5. **Flag anomalies before writing.** Mark any metric that moved more than the noise band:
   - Weekly reports: flag moves >±15–20% week-over-week for volume metrics, >±10% for rate metrics (CVR, CTR, open rate).
   - Monthly reports: flag >±10% month-over-month or >±20% year-over-year.
   - If you have 8+ periods of history, use ±2 standard deviations from the trailing mean instead — it's the better test.
   - Small denominators lie: don't flag a rate change built on fewer than ~100 events in the denominator (e.g., CVR going 2%→4% on 50 sessions is noise).

6. **Explain each flagged anomaly with the 4-source check**, in this order, because this is the order of likelihood:
   1. **Tracking/data issue** — tag broke, bot traffic, attribution window change, GA4 sampling or threshold. Check date of any site deploy or tool change first.
   2. **Something we did** — launch, promo, budget change, email send, price change, paused campaign.
   3. **Something external** — seasonality, holiday, competitor move, platform algorithm change, news event.
   4. **Genuine trend** — only claim this after ruling out 1–3, and only with 3+ periods pointing the same direction.
   Label your confidence: "confirmed" (verified cause), "likely" (strong circumstantial), or "under investigation" (say what you'll check and by when). Never present a guess as a finding.

7. **Write the narrative using What / So What / Now What** (see Frameworks). Lead with the single most decision-relevant finding, not the first metric in the spreadsheet. 3–5 insights for a weekly, 4–7 for a monthly. Each insight is 2–4 sentences, not a paragraph per metric.

8. **Write recommendations as owner + action + deadline.** "Improve email performance" is not a recommendation. "Anna to A/B test subject lines on the Thursday newsletter starting next send; readout in the July 21 report" is. 2–4 recommendations max; more means none get done.

9. **Assemble in the template** (weekly or monthly, below), TL;DR first. The TL;DR must stand alone — assume 60% of recipients read nothing else.

10. **Self-review against the quality checklist**, then deliver. If this is a recurring engagement, also deliver the blank template so future periods take 30 minutes, not 3 hours.

## Frameworks & templates

### The 3-tier metric hierarchy

Structure every metric set as a pyramid so each number has a defined job:

- **Tier 1 — North Star (1 metric):** the number the business runs on. Ecommerce: revenue. SaaS: new MRR or qualified signups. Lead-gen: SQLs. If the user names two, make them pick; a report with two North Stars has zero.
- **Tier 2 — Drivers (3–6 metrics):** the inputs that mathematically compose the North Star. Ecommerce: sessions × CVR × AOV. Lead-gen: traffic × lead CVR × lead-to-SQL rate. When the North Star moves, the drivers tell you which lever moved it.
- **Tier 3 — Diagnostics (per channel, weekly reports only):** channel-level detail — CPC, CTR, open rate, ranking movements, CAC by channel. These explain driver movement. They live in the channel section or appendix, never in the exec summary.

### What / So What / Now What (insight structure)

Every insight in the narrative follows three beats:
- **What:** the observation, with numbers and comparison. "Paid CVR fell from 3.1% to 2.2% (-29%) while traffic held flat."
- **So What:** the business consequence. "At current spend that's ~$9K/month in lost revenue; CAC rose from $42 to $58, above our $50 ceiling."
- **Now What:** the action. "Pausing the two prospecting ad sets driving the decline (details in appendix); landing-page fix shipping Tuesday — expect recovery visible in next week's report."

An insight missing "Now What" is a status update. One or two pure-status items are fine in a weekly ("SEO steady, nothing to act on"); a report of only status updates has failed.

### Weekly report template (channel owner audience — fill in the brackets)

```
# [Company] Marketing Weekly — Week of [date] (vs. prior week)

## TL;DR (3 bullets max)
- [Biggest thing that happened + what we're doing about it]
- [Second signal worth knowing]
- [Status of last week's top action item]

## Scorecard
| Metric              | This wk | Last wk | Δ%   | 4-wk avg | Target | Flag |
|---------------------|---------|---------|------|----------|--------|------|
| [North Star]        |         |         |      |          |        |      |
| [Driver 1]          |         |         |      |          |        |      |
| [Driver 2]          |         |         |      |          |        |      |
Flags: 🟢 on/above target · 🟡 within 10% · 🔴 >10% off target

## Insights (3–5, What/So What/Now What each)
1. ...

## By channel (1–3 lines each: headline number, change, action if any)
- Paid: ...
- Organic: ...
- Email: ...

## Actions for next week
| Action | Owner | Due | Expected effect |

## Watchlist
- [Metric drifting but not yet actionable — state the threshold that triggers action]
```

### Monthly report template (leadership audience)

```
# [Company] Marketing Report — [Month YYYY]

## Executive summary (≤150 words)
[Month in 3–4 sentences: North Star vs. target, the one thing that
drove it, the one risk, the one ask/decision needed from leadership.]

## Scorecard
| Metric | [Month] | Prior mo | Δ% | [Month] LY | YoY% | Target | Status |

## What drove the number (3 insights, What/So What/Now What)
1. ...

## Anomalies & explanations
- [Metric]: [what happened] — Cause: [4-source finding] — Confidence:
  [confirmed/likely/investigating] — Action: [what changes]

## Next month: plan & forecast
- Targets: [North Star + drivers]
- Top 3 initiatives: [initiative → metric it moves → expected size of effect]
- Decision needed: [budget/priority ask, if any — one only]

## Appendix (link or attach)
- Channel detail tables, methodology notes, definitions
```

### Worked example — anomaly explanation done right

> **Organic traffic -34% MoM (41,200 → 27,100 sessions).** Checked the four sources: (1) Tracking — GA4 tag verified firing; no deploys in the window. (2) Our actions — none; no content removed. (3) External — drop began June 12, matching Google's June core update; Search Console shows average position for our 20 head terms fell 6.8 → 11.2, and losses concentrate in the 2023 glossary pages (-61%), while product pages held (-4%). (4) Trend — not gradual; step-change on one date confirms external cause. **Confidence: confirmed (external — core update).** So what: those glossary pages drove 9% of signups; expect ~35 fewer signups/month if unaddressed. Now what: content refresh sprint on the top 10 affected pages by lost signups, scoped this week (see seo-content-briefs); recovery typically takes 4–12 weeks post-update, so hold paid budget steady rather than compensating — revisit in the August report.

Contrast with the version to never write: "Organic traffic was down 34% this month. We'll keep monitoring."

### Vanity → actionable swap table

| If tempted to report      | Report instead                                  |
|---------------------------|-------------------------------------------------|
| Impressions               | CTR and qualified clicks                        |
| Total pageviews           | Conversions, or signups per 1,000 sessions      |
| Follower count            | Email signups / demo requests from social       |
| Email list size           | Engaged subscribers (opened in 90 days), revenue per send |
| Cumulative all-time totals| Period-over-period rate of the same metric      |
| "Engagement" (undefined)  | The one engagement action that predicts revenue |
| Rankings for 100 keywords | Clicks + conversions from top 10 money keywords |

## Output format

Deliver as markdown (or the user's stated format — Google Doc text, Slack post, email body):

1. **The completed report** for the current period, following the weekly or monthly template — TL;DR/exec summary first, scorecard table, narrative insights, anomaly section, actions.
2. **Length discipline:** weekly ≤1 page (~400–600 words plus tables); monthly ≤2 pages (~800–1,200 words plus tables); everything longer goes to an appendix.
3. **A reusable blank template** matching the report, if this is the first period or no template existed.
4. **Open questions list** if data was missing — each item names the metric, the source to pull it from, and what insight it would unlock.

Every number in the report carries a comparison (Δ% vs. prior period, target, or LY). A number with no comparison is decoration.

## Quality checklist

Pass/fail every item before delivering:

- [ ] One sentence at top of your reasoning (not necessarily the report) completes: "This report helps [role] decide [decision]."
- [ ] Metric count within cap: ≤7 for exec/monthly summary, ≤15 for weekly channel report.
- [ ] Exactly one North Star metric, positioned first in the scorecard.
- [ ] Every metric has at least one comparison: prior period, target, or year-over-year.
- [ ] Zero surviving vanity metrics (check against the swap table).
- [ ] TL;DR/exec summary stands alone and is within its word limit (3 bullets / 150 words).
- [ ] Every insight has all three beats — What, So What, Now What — with numbers in the What.
- [ ] The single most important finding leads the narrative (not the first column of the spreadsheet).
- [ ] Every flagged anomaly has a 4-source explanation with a stated confidence level.
- [ ] No rate-metric conclusion drawn on a denominator under ~100 events.
- [ ] 2–4 recommendations, each with owner, action, and deadline.
- [ ] Last period's action items are followed up (recurring reports only).
- [ ] Numbers rounded appropriately for the audience; percentages to one decimal.
- [ ] Report fits the length cap; overflow moved to appendix, not deleted silently.

## Common mistakes

- **The data dump.** Forty metrics, no narrative, "let the numbers speak." Numbers don't speak; the reader closes the doc. If the report takes longer to read than the meeting it feeds, it's a data dump.
- **Green-only reporting.** Cherry-picking metrics that improved and burying the misses. The first time leadership catches it, every future report is discounted. Lead with the miss when there is one — it's also where the action is.
- **Explaining noise.** Writing a confident causal story for a 6% weekly wobble that's inside normal variance. State the noise band once, then only narrate moves outside it. Conversely, a metric that's been 5% below target for four straight periods is a trend, not noise — flag drift, not just spikes.
- **"We'll keep monitoring."** The tell of a report with no owner. Monitoring is not an action; either name a threshold that triggers action ("if CAC stays >$55 two more weeks, we cut prospecting spend 30%") or drop the item.
- **Changing definitions silently.** Redefining "lead" or switching attribution models between periods and comparing anyway. Any definition change gets a footnote and, where possible, a restated prior period.
- **Same report for every audience.** The CEO gets the channel manager's 15-metric grid, or the channel manager gets a 5-metric summary they can't operate from. Two audiences means two views (they can share the same data and appendix).
- **Anomaly explanation by vibes.** Jumping to "the algorithm changed" or "seasonality" without checking tracking first. Broken tags cause more "traffic drops" than Google updates do.
- **Percentages without absolutes.** "Referral signups up 300%!" — from 2 to 8. Always pair Δ% with the raw numbers when the base is small.
- **Recommendations nobody asked to own.** A "Next steps" list with no names attached converts to zero action. If you don't know owners, list the action and mark owner as an open question for the meeting.
- **Rebuilding the report from scratch each period.** Structure churn destroys comparability and wastes hours. Freeze the template, version it, and change it deliberately at quarter boundaries only.
