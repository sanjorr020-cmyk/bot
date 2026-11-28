---
name: okrs-and-goals
description: "Writes and audits OKRs: inspiring objectives paired with measurable key results, cascaded across teams without micromanaging, plus scoring cadences, review rituals, and anti-pattern fixes. Use when the user says things like \"help me write OKRs\", \"set quarterly goals\", \"are these key results measurable\", \"cascade company goals to my team\", \"how do we grade our OKRs\", \"our OKRs feel like a task list\", \"plan our quarterly planning\", \"run an OKR retrospective\", or \"my team sandbags its targets\"."
---

# OKRs & Goal Setting

Turn vague ambitions into a small set of inspiring Objectives, each backed by 2-4 measurable Key Results, wired into a review cadence that keeps them alive all quarter. This skill covers drafting OKRs from scratch, auditing existing ones, cascading goals from company to team to individual without turning them into assignments, designing the scoring and check-in ritual, and diagnosing the classic failure modes (sandbagging, task-lists-as-KRs, set-and-forget).

## When to use this skill

Use it when the user wants to:
- Draft company, team, or personal OKRs for a quarter or year
- Convert a strategy doc, mission, or wishlist into structured goals
- Audit or grade an existing OKR set ("are these good?")
- Design the cadence: check-ins, mid-quarter reviews, end-of-quarter grading
- Cascade or align OKRs across levels or between functions
- Fix a broken OKR program (nobody looks at them, everything scores 1.0, KRs are just projects)

Do NOT use it for:
- Building the dashboard that tracks the metrics — hand off to **kpi-dashboard-design**
- Ongoing reporting against metrics — **analytics-reporting**
- Choosing which metrics matter for a funnel or product — **funnel-analysis** or **retention-cohort-analysis**
- Company-level strategy the OKRs should serve — **business-plan** or **go-to-market**
- Writing the recurring meeting procedure as a formal SOP — **sop-writing** (this skill provides the ritual template; that one formalizes it)
- Individual performance reviews or compensation. Say so explicitly if asked: OKRs graded for pay get sandbagged within one cycle.

## Inputs to gather

Ask for these before drafting. If the user cannot answer, use the listed default and state the assumption in your output.

1. **Level and scope** — company, department, team, or individual OKRs? Default: team level.
2. **Time horizon** — Default: one quarter (13 weeks). Annual OKRs are acceptable only at company level, decomposed into quarterly sets.
3. **Strategic context** — mission, annual priorities, or the one problem this period must solve. If none exists, ask: "If this quarter goes perfectly, what is different at the end of it?" and build from the answer.
4. **Current baselines** — today's numbers for anything that might become a KR (revenue, churn %, NPS, cycle time, signups/week). If unknown, make KR #1 of the relevant objective "establish baseline for X by week 3" and flag that a KR without a baseline cannot be graded.
5. **Team size and capacity** — headcount and % of time available for OKR work vs. run-the-business work. Default assumption: 60-70% of capacity goes to keep-the-lights-on; OKRs claim the rest. OKRs covering 100% of work is a red flag — they've become a task list.
6. **Ambition model** — committed OKRs (expect 1.0, miss is a failure) vs. aspirational/stretch (0.7 is success)? Default: aspirational for growth goals, committed for compliance/reliability goals (e.g., uptime, security deadlines). Label each objective accordingly.
7. **Existing OKRs** — if auditing, get the full current set plus last quarter's scores if available.

## Process

1. **Anchor on the strategy.** Extract 1-3 strategic priorities from the context gathered. Every objective must trace to one. If the user hands you 7 priorities, force-rank: "If you could only move one of these this quarter, which?" Cut to at most 3.

2. **Draft Objectives first, alone.** Write 2-3 objectives (max 3 per team, max 5 at company level). Each objective must be:
   - Qualitative and inspiring — no numbers in the objective itself; numbers live in KRs
   - Short — under 60 characters is the target; under 80 is the hard cap
   - Outcome-framed — describes a changed state ("Become the obvious choice for mid-market buyers"), not an activity ("Improve marketing")
   - Time-bound by the cycle, so no date needed in the text
   Test each: would a team member repeat it in the hallway? If it sounds like a corporate memo, rewrite.

3. **Draft 2-4 Key Results per objective.** Every KR must pass all four gates:
   - **Metric gate**: contains a number and a unit. "Improve onboarding" fails; "Raise week-1 activation from 34% to 50%" passes.
   - **From-X-to-Y gate**: states baseline AND target. A target without a baseline can't be graded on a 0.0-1.0 scale.
   - **Outcome gate**: measures a result, not effort. "Ship the referral feature" is a task. Rewrite as the result the task should cause: "Referrals drive 400 new signups (baseline: 0)". If the user insists on shipping milestones, allow at most one milestone KR per objective and phrase it with an acceptance criterion ("Referral flow live to 100% of users with <2% error rate by week 8").
   - **Sufficiency gate**: if all KRs hit 1.0, is the objective undeniably achieved? If not, a KR is missing. If yes but a KR could be deleted without changing that, delete it.

4. **Stress-test for gaming.** For each KR ask: "What's the cheapest, ugliest way to hit this number?" If the cheap path is bad for the business (e.g., "increase demos booked" gamed by booking unqualified demos), add a paired counter-KR or quality constraint ("...with ≥40% demo-to-opportunity rate"). Speed metrics get quality pairs; volume metrics get efficiency pairs.

5. **Calibrate ambition.** For aspirational KRs, the target should feel ~50-70% likely at full effort — landing at 0.7 should be a good quarter. If the team hit 1.0 across the board last quarter, targets were sandbagged: raise this quarter's by the amount they overshot. For committed KRs, the target is the target; anything under 1.0 triggers a written cause analysis.

6. **Cascade by alignment, not decomposition.** When the user needs team or individual OKRs under company OKRs:
   - Do NOT split a parent KR arithmetically ("company needs $1M, so each of 4 teams gets $250k") — that's quota-setting, not goal-setting.
   - Instead, have each team answer: "Given the company objective, what is the biggest contribution WE can make?" and write their own objective referencing the parent (notate as "supports CO-1").
   - Expect 60-70% of team OKRs to link upward; leave room for 1 bottom-up objective per team — local knowledge the top can't see.
   - Individual OKRs are optional; below team level, prefer assigning each KR a single **owner** (a name, not a team) rather than writing personal OKR sets. Two names on a KR means no owner.
   - Cross-functional dependencies: if Team A's KR requires Team B's work, that dependency must appear in Team B's plan before finalizing. Ship a dependency list with the draft.

7. **Set the cadence.** Default rhythm for a quarterly cycle:
   - **Weekly check-in** (15 min, in standup or async): each KR gets a status (on track / at risk / off track), current value, and confidence score 1-10. Under 5 minutes per objective.
   - **Mid-quarter review** (week 6-7, 60 min): re-forecast every KR; allowed moves are keep, adjust the plan (not the target), or formally kill a KR that's become irrelevant. Killing with a written reason is healthy; silently editing targets is not.
   - **End-of-quarter grading** (week 13, 60-90 min): score, learn, feed forward. Use the retro template below.
   - Scores draft asynchronously before meetings; meetings debate deltas, not read numbers aloud.

8. **Define scoring up front.** Use the 0.0-1.0 scale per KR:
   - Linear interpolation from baseline to target: score = (current − baseline) / (target − baseline), capped at 1.0, floored at 0.0.
   - Milestone KRs score in steps agreed at draft time (e.g., 0.3 = spec approved, 0.7 = live to beta, 1.0 = live to all with acceptance criteria met).
   - Objective score = average of its KR scores. Interpretation for aspirational OKRs: 0.7-1.0 delivered; 0.4-0.6 progress but rethink approach; below 0.4 either wrong goal or wrong plan — the retro must say which.

9. **Deliver and pressure-test.** Present the full set in the output format below, run the quality checklist, list the top 3 risks to the set (dependency, baseline unknown, gaming vector), and ask the user to confirm owners and baselines before calling it final.

## Frameworks & templates

### The OKR formula (Doerr)

> I will **[Objective]** as measured by **[this set of Key Results]**.

If the sentence reads naturally, the structure is sound. If "as measured by" is followed by activities, the KRs are tasks.

### KR sentence template

```
[Verb: Increase/Reduce/Maintain/Achieve] [metric] from [baseline] to [target] [by week N / by end of quarter], [optional quality constraint].
Owner: [one name]   Type: [aspirational | committed]   Source of truth: [dashboard/report where the number lives]
```

### Worked example — B2B SaaS, 12-person company, Q3

**Company Objective 1 (aspirational): Make customers so successful they sell for us.**
- KR1: Increase logo retention from 84% to 92% (annualized). Owner: Head of CS. Source: billing system.
- KR2: Grow NPS from 31 to 45 on ≥60 responses. Owner: Head of CS. Source: quarterly survey.
- KR3: Generate 10 referral-sourced opportunities, from 2 last quarter. Owner: Head of Sales. Source: CRM source field.

**Team cascade — Customer Success team objective (supports CO-1): Kill the silent-churn problem.**
- KR1: Reduce accounts with zero logins in 14 days from 22% to 8%. Owner: Maria. 
- KR2: Reach 100% of at-risk accounts with a success call within 5 business days of flag, from ~40%. Owner: Devon.
- KR3 (committed): Launch health-score alerting live in CRM by week 6 with <5% false-positive rate. Owner: Maria.

Note what the cascade did NOT do: it didn't hand CS a slice of the NPS number. The team chose the lever (silent churn) they believe moves the parent.

### Weekly check-in template (per objective, ≤5 min)

```
Objective: [text] — Confidence this scores ≥0.7: [1-10, one owner's call]
| KR | Baseline → Target | Current | Status | Confidence Δ vs last week | Blocker |
|----|-------------------|---------|--------|---------------------------|---------|
Priorities this week that move a KR: 1) ... 2) ...
Decision needed from leadership (or "none"): ...
```

Rule: if confidence drops 2+ points in one week, it gets discussed live; otherwise the table is async.

### Mid-quarter review agenda (week 6-7, 60 min)

```
1. Forecast round (20 min): for each KR, owner states projected end-of-quarter
   score based on current trajectory, not hope. No debate yet.
2. Triage (25 min), only KRs forecast below 0.5:
   - Is the plan wrong? -> agree one concrete change to the approach this week.
   - Is the goal wrong (market shifted, assumption died)? -> formally kill the KR;
     record the reason and the original text struck through, never deleted.
   - Targets themselves do not move at this meeting.
3. Dependency check (10 min): any cross-team commitment slipping? Escalate now,
   not in week 12.
4. Close (5 min): each owner states their single highest-leverage action for the
   back half of the quarter.
```

### End-of-quarter grading & retro template (60-90 min)

```
1. Scores (pre-filled async): each KR 0.0-1.0 with one sentence of evidence.
2. For every KR below 0.4 or at 1.0: was it the goal, the plan, or the execution?
   (1.0 prompts "was this sandbagged?" as seriously as 0.2 prompts "what broke?")
3. Surprises: what did we learn that we didn't know at draft time?
4. Carry / kill / restate: which objectives continue next quarter, and in what form?
5. Process fix: one change to how we run OKRs next cycle (only one).
Output: scored sheet archived, 3-5 lessons, next quarter's draft priorities.
```

### Anti-pattern diagnostic table

| Symptom | Disease | Fix |
|---|---|---|
| Every score is 0.9-1.0, two quarters running | Sandbagging | Raise targets by last quarter's overshoot; decouple scores from performance reviews; celebrate a well-reasoned 0.6 publicly |
| KRs read "Launch X", "Ship Y", "Complete Z" | Task list as KRs | For each, ask "so that what number moves?" — promote that number to the KR, demote the task to the plan |
| Scores appear only in week 13 | Set-and-forget | Install the weekly check-in; put KR table at top of the existing team meeting doc rather than creating a new meeting |
| 6+ objectives, 20+ KRs for one team | No prioritization | Force-rank, cap at 3 objectives; move the rest to a "not this quarter" list so cuts feel recorded, not lost |
| Teams' KRs are arithmetic shares of the company KR | Cascade-as-quota | Re-run step 6: teams choose their lever, leaders check coverage gaps |
| Targets quietly edited mid-quarter | Moving goalposts | Only the mid-quarter review may change scope, in writing, with the original preserved and struck through |
| Every KR owned by "the team" | Diffuse ownership | One name per KR, visible in the doc |
| OKRs restate the job description ("answer support tickets") | BAU smuggled in | OKRs cover the change, not the run; keep BAU on a separate health-metrics list |

## Output format

Deliver a single document (markdown unless the user asks otherwise) containing, in order:

1. **Header**: team/company name, cycle (e.g., "Q3 2026, Jul 1 – Sep 26"), draft version and date.
2. **Strategic context**: 2-3 sentences linking this set to the priority it serves.
3. **The OKR set**: each objective as a bold heading tagged [aspirational] or [committed], its KRs as the filled KR sentence template (baseline, target, owner, source of truth), plus a one-line "why this objective, why now".
4. **Cascade map** (if multi-level): parent → child links ("supports CO-1") and the cross-team dependency list.
5. **Cadence card**: which meeting hosts the weekly check-in, mid-quarter review date, grading date, and who runs each.
6. **Scoring key**: the 0.0-1.0 rules and milestone step definitions agreed for any milestone KRs.
7. **Assumptions & open items**: unknown baselines, unconfirmed owners, top 3 risks.

Keep the whole deliverable under 2 pages for a single team; the OKR set itself must fit on one screen.

## Quality checklist

Pass every item before delivering:

1. No more than 3 objectives per team (5 at company level); each has 2-4 KRs.
2. Every objective is qualitative, outcome-framed, and ≤80 characters.
3. Every KR contains a number, a unit, a baseline, and a target (or an explicit baseline-discovery KR flagged as such).
4. No more than one milestone/shipping KR per objective, and it carries an acceptance criterion.
5. Each KR names exactly one owner and one source of truth for the number.
6. Each objective is labeled aspirational or committed, and scoring expectations differ accordingly.
7. Hitting all KRs at 1.0 would genuinely mean the objective is achieved (sufficiency test passed).
8. Each volume/speed KR was checked for gaming and paired with a quality constraint where needed.
9. Aspirational targets sit at roughly 50-70% subjective likelihood, checked against last quarter's scores if available.
10. Team OKRs were chosen by teams as levers, not assigned as arithmetic slices of a parent KR.
11. Cross-team dependencies are listed and acknowledged by the depending teams.
12. The cadence names specific meetings, dates, and facilitators — not "we'll check in regularly".
13. OKRs cover change work only; business-as-usual metrics live on a separate health list.
14. No KR's grading depends on data that won't exist until after the quarter ends.

## Common mistakes

- **Numbers in the objective.** "Grow revenue 20%" as an objective leaves KRs nothing to do and nothing to inspire. Move the number down, write the why up top.
- **Baseline amnesia.** Teams set "reach 50% activation" without knowing they're at 47% (trivial) or 12% (fantasy). Never finalize a KR without today's number or a week-3 baseline KR.
- **Grading effort instead of outcomes.** "We worked really hard on this" is not a 0.7. Scores come from the source-of-truth number via the interpolation formula, then the discussion is about why.
- **Binary KRs everywhere.** "Launch the feature: yes/no" scores 0 or 1 with nothing in between, which hides progress and invites shipping garbage on week 13. Define stepped milestones or convert to the outcome metric.
- **Tying scores to bonuses.** The fastest known way to convert an ambitious team into a sandbagging one. If leadership insists, only committed OKRs may touch compensation, never aspirational ones.
- **Ten-person companies running three-level cascades.** Below ~25 people, one company-level set with named KR owners beats team-level OKR bureaucracy.
- **Confusing OKRs with KPIs.** KPIs are health monitors (uptime, MRR, ticket volume) that persist forever; OKRs are change campaigns that expire. When a user lists their dashboard metrics as KRs, split them: monitors go to **kpi-dashboard-design**, the change targets stay here.
- **The 100%-of-work trap.** If every hour of the quarter maps to a KR, the OKRs are a workplan wearing a costume. Cut until only the vital change work remains.
- **New OKRs drafted before old ones are graded.** The retro feeds the draft. Grading week and planning week must be consecutive, in that order.
