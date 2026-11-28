---
name: sales-pipeline-management
description: "Designs and runs a complete sales pipeline system: stage definitions with objective exit criteria, forecast categories with roll-up math, CRM hygiene rules, a weekly pipeline review agenda, and rescue plays for stuck or aging deals. Use when the user asks to define pipeline stages, build or fix a sales forecast, calculate pipeline coverage, clean up their CRM, run a pipeline review meeting, unstick stalled deals, audit deal health, set up HubSpot/Salesforce/Pipedrive stages, or figure out why forecasts keep missing."
---

# Sales Pipeline Management

Build the operating system for a sales team's deal flow: stages that mean the same thing to every rep, a forecast the CEO can trust, CRM data clean enough to run the business on, a weekly review cadence that moves deals instead of reciting them, and specific plays to rescue deals that have gone quiet. The deliverable is a pipeline playbook the team can adopt in one week — not a philosophy document.

## When to use this skill

Use this skill when the user wants to:
- Define or redesign pipeline stages and their exit criteria
- Build a forecast methodology (categories, weighting, roll-up, coverage targets)
- Write CRM hygiene rules and audit an existing pipeline for rot
- Design or improve a weekly pipeline review meeting
- Diagnose and unstick aging, stalled, or ghosted deals
- Set stage-conversion benchmarks and diagnose where deals die

Do NOT use this skill for:
- Deciding whether a single lead is worth pursuing → **lead-qualification** (MEDDPICC/BANT scoring lives there; this skill only consumes the output)
- Writing the actual re-engagement emails for a stalled deal → **follow-up-sequences** (this skill decides WHEN and WHICH play; that skill writes the copy)
- Handling a specific objection blocking a deal → **objection-handling**
- Writing the proposal that advances a deal → **sales-proposals**
- Building the visual dashboard for pipeline metrics → **kpi-dashboard-design**
- Discovery or demo call structure → **sales-call-scripts**

## Inputs to gather

Ask the user for these before starting. Where they don't know, use the stated default and flag the assumption in the output.

1. **Sales motion**: self-serve assist, inbound SMB, outbound mid-market, or enterprise? (Default: inbound + outbound mid-market, 30–90 day cycle.)
2. **Average deal size and sales cycle length**: (Default: $15K ACV, 45-day cycle. Enterprise: $75K+, 90–180 days.)
3. **Team size and structure**: number of AEs, whether SDRs hand off, who owns renewals. (Default: 3 AEs, SDR handoff at meeting-booked.)
4. **CRM in use**: HubSpot, Salesforce, Pipedrive, Close, Attio, or spreadsheet. (Default: HubSpot — adapt field names accordingly.)
5. **Current stages, if any**: paste the existing stage list and per-stage deal counts/values if available. Real pipeline data beats assumptions.
6. **Quota and revenue target**: monthly or quarterly team quota. (Default: quarterly, per-AE quota = 4–5x their ACV per month.)
7. **Known pain**: forecasts miss high or low, deals rot in one stage, reps sandbag, CRM is garbage, reviews are status theater. Prioritize the deliverable around the stated pain.
8. **Historical win rate from qualified opportunity to close**, if known. (Default assumption: 20–25% SQL-to-won for mid-market SaaS; 15% for outbound-heavy; 30%+ for inbound/PLG-assist.)

## Process

1. **Diagnose before prescribing.** If the user shared existing pipeline data, compute: deals per stage, total and weighted value per stage, average deal age vs. stated cycle length, % of deals with a close date in the past, % with no next step. Any stage holding >40% of total pipeline value, or >20% of deals older than 2x the average cycle, is a red flag — name it explicitly in the output.

2. **Define 5–7 stages, never more.** Each stage needs four elements: a name describing the BUYER's state (not the seller's activity), an objective exit criterion (verifiable fact, not opinion), a default win probability, and a maximum healthy age. Use the stage template in Frameworks below. Decision point: if the user's motion is transactional (<$5K, <14-day cycle), collapse to 4 stages (Qualified → Demo/Trial → Proposal → Closed). If enterprise, add a distinct "Business Case / Procurement" stage between Proposal and Closed — that's where enterprise deals actually spend 30–60 days.

3. **Write exit criteria as evidence, not activity.** "Demo completed" is seller activity; "champion confirmed the problem is a top-3 priority and agreed to intro the economic buyer" is buyer evidence. Every exit criterion must be checkable by a sales manager reading the CRM record without asking the rep. Rule of thumb: 2–4 criteria per stage, ALL required to advance.

4. **Assign forecast categories and probabilities.** Use the four standard categories — Pipeline, Best Case, Commit, Closed — defined by rep judgment PLUS stage gates (a deal can't be Commit before the Proposal stage regardless of rep optimism). Set stage probabilities from historical conversion if data exists; otherwise start with the defaults in Frameworks and instruct the user to recalibrate quarterly against actuals.

5. **Build the roll-up math.** Produce three numbers every week: (a) **Commit total** — sum of Commit deals at face value; (b) **Weighted pipeline** — Σ(deal value × stage probability) across open deals closing this period; (c) **Coverage ratio** — open qualified pipeline closing this period ÷ remaining quota. Targets: coverage of 3x for inbound-heavy motions, 4x for outbound, 5x for new reps or new segments. Forecast = Commit + (25–50% of Best Case), tuned to the team's historical Best Case conversion. Show a worked example with the user's real numbers.

6. **Write CRM hygiene rules — maximum 8, each enforceable.** Every rule must specify the field, the rule, the check frequency, and the consequence. Non-negotiable core four: (1) every open deal has a next step with a due date ≤14 days out; (2) no close date in the past — slipped deals get re-dated the day they slip, and 2+ slips triggers a manager review; (3) required fields per stage (amount and close date by stage 2; economic buyer and decision process by stage 3; paper process by stage 4); (4) deals with no logged activity in 21 days are auto-flagged, and at 45 days moved to Closed-Lost with reason "no decision" (they can be reopened — a resurrected deal is a win, a zombie deal is a lie).

7. **Design the weekly pipeline review.** 45 minutes, same slot weekly, agenda in Frameworks below. Hard rule to state in the deliverable: the meeting reviews CHANGES and DECISIONS, not every deal. Deals are updated in the CRM before the meeting (set a "pipeline scrub by Monday 5pm" deadline); meeting time goes to the 5–8 deals that are new, stuck, slipped, or in Commit.

8. **Build the stuck-deal play library.** Define "stuck" quantitatively: deal age in current stage > 1.5x the stage's maximum healthy age, OR no inbound response in 14+ days, OR close date slipped twice. Map each stall pattern to a specific play (see Frameworks). For the actual email/call copy, reference **follow-up-sequences**; this skill delivers the decision tree and play selection.

9. **Assemble and pressure-test the deliverable.** Compile everything into the Output format below. Then sanity-check: do the stage probabilities multiply out to a realistic win rate (stage-1-to-won between 10–30% for most B2B)? Does the coverage math use only deals closing in the forecast period? Does every hygiene rule name an owner? Fix anything that fails before delivering.

10. **Give a 1-week rollout plan.** Day 1–2: manager maps existing deals to new stages (expect 20–40% of deals to move backward or die — say so, it's the point). Day 3: rep training on exit criteria (30 min). Day 5: first pipeline scrub. Week 2: first review meeting on the new agenda. Recalibrate probabilities after one full sales cycle.

## Frameworks & templates

### Template 1 — Stage definition table (fill in the blanks)

| # | Stage | Buyer state | Exit criteria (ALL required) | Prob. | Max age |
|---|-------|-------------|------------------------------|-------|---------|
| 1 | Discovery | Has admitted a problem | • Pain confirmed in buyer's words, logged in CRM • Budget range or funding source identified • Follow-up meeting booked | 10% | 14 days |
| 2 | Qualified | Actively evaluating | • Meets ICP + qualification bar (see lead-qualification) • Decision process and timeline stated by buyer • Economic buyer identified by name | 25% | 21 days |
| 3 | Solution Validated | Believes we can solve it | • Demo/eval done with success criteria agreed • Champion confirmed and testing our message internally • Economic buyer has attended a meeting or accepted a summary | 45% | 21 days |
| 4 | Proposal | Weighing the decision | • Proposal delivered and verbally walked through (never just emailed) • Pricing acknowledged, no unresolved showstopper objection • Mutual close plan with dates agreed | 65% | 14 days |
| 5 | Verbal / Contract | Has said yes | • Verbal commitment from economic buyer • Contract sent, legal/procurement contacts known | 85% | 14 days |
| 6 | Closed Won / Lost | Decided | • Signature, OR loss reason logged from fixed picklist | 100/0% | — |

Adjust probabilities to the user's history. Check the chain: 0.10→0.25→0.45→0.65→0.85 implies later-stage conversion rates of 40–76% per stage, which is realistic; if the user's numbers imply >85% conversion at any single stage transition, the two stages should be merged.

### Framework — Forecast categories

- **Commit**: rep would bet their commission check; economic buyer verbally committed; only signature mechanics remain. Stage 4+. Expected conversion: 85–95%. If a team's Commit lands below 80%, the category is being abused — tighten the definition.
- **Best Case**: real deal, real timeline, but a known risk is unresolved (competitor, budget sign-off, single-threaded). Stage 3+. Expected conversion: 40–60%.
- **Pipeline**: qualified but early; not counted in this period's forecast number.
- **Omitted/Closed**: lost, no-decision, or pushed beyond the forecast period.

**Roll-up formula:** `Forecast = Σ(Commit) + k × Σ(Best Case)`, where k starts at 0.33 and gets recalibrated quarterly: k = historical Best Case win rate. Report weighted pipeline alongside as a cross-check — if Forecast and weighted pipeline diverge by >25%, rep judgment and stage data disagree; scrub the deals causing the gap.

### Worked example — quarterly roll-up

Team quota: $500K for the quarter, 6 weeks remaining, $180K closed so far → $320K remaining.

| Deal | Value | Stage | Prob. | Category |
|------|-------|-------|-------|----------|
| Acme | $80K | Verbal | 85% | Commit |
| Birch | $60K | Proposal | 65% | Commit |
| Cedar | $90K | Proposal | 65% | Best Case |
| Delta | $40K | Solution Validated | 45% | Best Case |
| Elm | $120K | Qualified | 25% | Pipeline |
| Fern | $50K | Discovery | 10% | Pipeline |

- Commit = 80 + 60 = **$140K**
- Best Case = 90 + 40 = $130K → k=0.33 → **$43K**
- **Forecast = $183K** against $320K remaining → projected miss of $137K. Say this plainly.
- Weighted pipeline = 68 + 39 + 58.5 + 18 + 30 + 5 = **$218.5K** (68% of remaining quota)
- Coverage = 440 ÷ 320 = **1.4x** vs. a 3x target → the real problem is pipeline creation, not deal execution. Recommendation: shift effort to top-of-funnel (see cold-email-outreach, linkedin-outreach) and pull next quarter's deals forward only if genuinely accelerable.

### Template 2 — CRM hygiene rules (fill in owner and adapt field names)

| # | Field / object | Rule | Checked | Owner | Consequence |
|---|----------------|------|---------|-------|-------------|
| 1 | Next step + date | Every open deal has a next step with a due date ≤14 days out, written as a buyer-facing event ("EB review call 3/14"), not "follow up" | Monday scrub | Rep; manager audits | Deal skipped in review; 2 weeks non-compliant → manager takes the deal to 1:1 |
| 2 | Close date | Never in the past; re-dated same day a slip is confirmed by the buyer | Daily (automated filter) | Rep | 2+ slips → auto-demote from Commit, close-plan rebuild required |
| 3 | Amount | Populated by Stage 2; within ±30% of final contract on won deals | Monday scrub | Rep | Deal excluded from forecast roll-up until fixed |
| 4 | Economic buyer + decision process | Named contact and buying process notes required to enter Stage 3 | Stage-change validation | Manager approves stage moves 3+ | Stage move rejected |
| 5 | Activity recency | No logged activity in 21 days → flagged; 45 days → auto-move to Closed-Lost ("no decision") | Weekly automation | RevOps/manager | Auto-close; reopening allowed and celebrated |
| 6 | Contacts on deal | ≥2 contacts by Stage 3, ≥3 by Stage 4 | Monday scrub | Rep | Deal flagged single-threaded → multithread play assigned |
| 7 | Loss reason | Closed-Lost requires a picklist reason + 1-sentence note | On close | Rep | Deal can't be closed without it (required field) |
| 8 | Forecast category | Reviewed and re-affirmed weekly; Commit requires Stage 4+ AND mutual close plan attached | Weekly review | Manager | Manager owns final category; rep proposes |

**Loss-reason picklist (keep to 7 options — more and reps pick randomly):** No decision / status quo · Lost to competitor (name in note) · Price/budget · Missing product capability (name it) · Timing — pushed 2+ quarters · Champion left · Bad fit / shouldn't have qualified. Review the distribution monthly: >35% "no decision" means qualification or compelling-event problems, not a closing problem.

### Benchmarks — stage conversion and cycle norms (B2B, directional)

| Metric | Healthy range | Investigate if |
|--------|---------------|----------------|
| SQL/Stage-2 → Won | 20–30% inbound; 12–20% outbound | <10% or >40% |
| Proposal → Won | 40–60% | <35% (proposing too early) |
| Commit accuracy | 85–95% close as forecast | <80% |
| Best Case conversion | 40–60% | Outside range → retune k |
| Deals slipping per quarter | <25% of closing deals | >40% |
| Pipeline coverage (period-matched) | 3x inbound / 4x outbound / 5x new segment | <2x = creation crisis; >6x = junk pipeline or sandbagging |
| Avg deal age at close vs. stated cycle | Within ±20% | Actual ≫ stated → stages or close dates are fantasy |

Use these to sanity-check the user's data in step 1 and the design in step 9. Always prefer the user's own trailing 2–4 quarters of actuals over these defaults.

### Template 3 — Weekly pipeline review agenda (45 min)

> **Pre-work (due Monday 5pm, before the meeting):** every rep scrubs their pipeline — next steps current, close dates honest, dead deals killed. Manager runs the hygiene report. Deals failing hygiene are skipped in the meeting and handled 1:1.
>
> 1. **Numbers snapshot (5 min)** — Closed QTD vs. quota, Commit, Forecast, coverage ratio. One slide/screen, no discussion yet.
> 2. **Changes since last week (10 min)** — new deals in, deals advanced, deals slipped or lost. Slips get one question: "what did the buyer say that changed the date?" (Buyer evidence, not rep hope.)
> 3. **Commit interrogation (10 min)** — every Commit deal: "What's the close plan date-by-date, and what could still kill it?" A Commit deal with no mutual close plan gets demoted on the spot.
> 4. **Stuck-deal triage (15 min)** — the 3–5 deals flagged by aging rules. For each: pick a play from the play library, name an owner and a deadline. Max 3 minutes per deal; deeper coaching moves to 1:1s.
> 5. **Commitments recap (5 min)** — read back every action item with owner and date. These open next week's meeting.
>
> **Banned in this meeting:** deal-by-deal status recitals, "just checking in" as a next step, relitigating lost deals (do that monthly in a separate loss review).

### Framework — Stuck-deal play selection

| Stall pattern | Diagnostic signal | Play |
|---------------|-------------------|------|
| Ghosted after proposal | No reply 14+ days post-proposal | **Breakup sequence** — 3 touches over 10 days, last one closes the file explicitly (copy: follow-up-sequences). ~15–25% of breakup emails get a reply. |
| Single-threaded | Only one contact on the record | **Multithread play** — champion-enabled intro to the economic buyer, or exec-to-exec outreach from your side. Deals with 3+ contacts close at roughly 2x the rate of single-threaded ones. |
| "No decision" drift | Timeline keeps sliding, no compelling event | **Cost-of-inaction reframe** — quantify the monthly cost of the status quo; offer a smaller/pilot scope to shrink the decision. If no compelling event exists, move to Pipeline or kill. |
| Stuck in procurement/legal | Verbal yes, 21+ days of paper silence | **Close-plan reset** — get the champion to name the actual blocker and internal SLA; offer redlines pre-review, security docs, or a mutual action plan with executive sponsors named. |
| Champion went quiet | Champion stopped replying but company still engaged (opens, other contacts active) | **Re-anchor around new value** — send a relevant asset (case study: case-studies), then go around via a second thread, not over the champion's head first. |
| Price standoff | Deal alive but stalled on number | Route to **objection-handling** and **pricing-strategy**; never discount to fix a stall that is actually a priority problem — a discount on a no-decision deal buys nothing. |

**Play execution rules:** every play assigned in the weekly review gets an owner and a run-by date ≤5 business days out. A deal gets a maximum of 2 plays; if the second play doesn't produce a buyer response or a stage change within 14 days, the deal moves to Pipeline (out of forecast) or Closed-Lost. Log which play was run in the CRM so quarterly reviews can measure which plays actually revive deals.

### Framework — Commit interrogation questions

Use these verbatim in agenda item 3; a Commit deal should survive all five:

1. "What date is the signature, and what has the BUYER confirmed happens on each date between now and then?"
2. "Who signs, and have we spoken to them in the last 14 days?"
3. "What's the paper process — legal, security, procurement — and where is each one right now?"
4. "What would have to be true for this to slip, and what's our mitigation?"
5. "If you had to bet a week's commission, does this close on that date?"

Any "I think" or "they should" answer → demote to Best Case and assign a close-plan reset play. This is the single highest-leverage 10 minutes in the weekly meeting.

## Output format

Deliver a single markdown document titled "[Company] Pipeline Playbook" with these sections, in order:

1. **Diagnosis** (only if current pipeline data was provided) — 3–5 bullet findings with numbers
2. **Stage definitions** — completed stage table with exit criteria, probabilities, max ages
3. **Forecast method** — category definitions, roll-up formula with the user's k value, coverage target, plus one worked roll-up using their real or example numbers
4. **CRM hygiene rules** — numbered list of ≤8 rules, each with field, rule, check cadence, owner, and consequence; plus field-name mapping for their specific CRM
5. **Weekly review** — the customized agenda with day/time and pre-work deadline
6. **Stuck-deal playbook** — the play-selection table tuned to their motion
7. **Rollout plan** — the 1-week adoption schedule with owners
8. **Assumptions log** — every default assumed because the user didn't know, so they can correct it

Keep the total playbook under 3 pages equivalent (~1,200 words plus tables). A playbook nobody reads is hygiene rule zero.

## Quality checklist

Verify every item before delivering; fix failures rather than caveating them.

- [ ] 4–7 stages total; no stage named after a seller activity ("Demo scheduled", "Contacted")
- [ ] Every exit criterion is verifiable from the CRM record without asking the rep
- [ ] Stage probabilities multiply to a stage-1-to-won rate between 10% and 30% (or match user's actuals)
- [ ] No single stage-to-stage implied conversion exceeds 85% (merge stages if so)
- [ ] Forecast formula includes both a Commit-based number and a weighted cross-check
- [ ] Coverage ratio uses only deals closing within the forecast period, against REMAINING quota
- [ ] A concrete k (Best Case multiplier) is stated with a recalibration cadence
- [ ] ≤8 hygiene rules; every rule names field, cadence, owner, and consequence
- [ ] Zombie-deal rule exists: hard auto-close threshold (30–60 days inactivity) with a loss-reason picklist
- [ ] Review agenda totals ≤60 minutes and bans deal-by-deal status recitals
- [ ] Every stuck-deal play has a quantitative trigger (days, slip count, or contact count)
- [ ] "Stuck" thresholds are derived from the user's cycle length, not copied from the template blindly
- [ ] Worked roll-up example uses the user's numbers (or clearly labeled example numbers)
- [ ] Assumptions log lists every default the user didn't confirm
- [ ] Cross-references point to sibling skills instead of duplicating their content (no email copy, no qualification scoring rubric, no dashboard specs inside this deliverable)

## Common mistakes

- **Stages that describe seller motion.** "Demo scheduled" tells you what the rep did; it predicts nothing about the buyer. Deals advance on buyer evidence or not at all.
- **Probability theater.** Applying 65% to a deal because it sits in Proposal, when it was dragged there by an optimistic rep, poisons the weighted number. Stage gates + exit criteria exist precisely so probability attaches to evidence.
- **Counting all open pipeline as coverage.** A $2M pipeline where $1.4M closes next quarter is 0.6x coverage for this quarter, not 4x. Coverage is period-matched or it's fiction.
- **Letting Commit mean "I'd like it to close."** If Commit converts below 80%, the forecast is a mood ring. Enforce the stage-gate floor (no Commit before Proposal) and interrogate close plans weekly.
- **The 47-deal review meeting.** Reciting every deal trains reps to prepare stories, not to move deals. Review changes, Commits, and stuck deals; everything else lives in the CRM and 1:1s.
- **Zombie mercy.** Keeping 90-day-silent deals open to protect the coverage number hides the real pipeline-creation problem until it's a missed quarter. Auto-close and celebrate resurrections.
- **Re-dating slipped deals to the last day of the quarter, twice.** A close date is a buyer-confirmed event, not a container. Two slips = mandatory downgrade and a close-plan rebuild.
- **Fixing stalls with discounts.** A deal stalled on priority (not price) that gets a 20% discount is now a cheaper stalled deal. Diagnose the stall pattern first; discounting is a play for exactly one pattern (price standoff, late stage, with a trade).
- **Ten hygiene rules enforced never.** Four rules checked every Monday beat twelve rules in a doc nobody opens. Enforcement cadence and a named owner are part of the rule or the rule doesn't exist.
- **Redesigning stages without migrating deals.** Launching new stages on top of old data means the first month's metrics are noise. Force the remapping scrub on day 1–2 and accept the pipeline shrinking — it was never that big.
