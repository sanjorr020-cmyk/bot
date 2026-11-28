---
name: interview-kits
description: "Builds complete structured interview kits: role competency models, behavioral/situational/work-sample question banks, scorecards with anchored 1-4 rating scales, interviewer panel assignments, debrief protocols, and bias guards. Use when the user asks to create interview questions, build an interview process or loop, design a scorecard or rubric, prepare interviewers for a role, standardize hiring evaluations, plan a work-sample or take-home exercise, run a hiring debrief, or reduce bias in interviews."
---

# Interview Kits

Build end-to-end structured interview kits that make hiring decisions consistent, defensible, and predictive. A kit covers one role and contains: a competency model, a stage-by-stage interview plan, question banks mapped to competencies, scorecards with behaviorally anchored rating scales, interviewer assignments, and a debrief protocol. Structured interviews are among the strongest predictors of job performance (meta-analytic validity roughly r = .42-.51, vs. ~.20 for unstructured); the entire value comes from asking every candidate the same questions and scoring against pre-written anchors — so never produce a loose list of "good questions to ask."

## When to use this skill

Use for: designing interview loops for a specific role, writing question banks, building scorecards and rubrics, creating work-sample exercises, assigning panels, writing debrief agendas, auditing an existing interview process for bias or redundancy, and prepping individual interviewers with guides.

Do NOT use for:
- Writing the job posting or role description itself — use **job-descriptions** (but pull its competency list as input if one exists).
- Post-offer ramp plans, 30/60/90 plans, or new-hire orientation — use **employee-onboarding**.
- Documenting the hiring process as a repeatable company procedure — build the kit here, then use **sop-writing** to codify it.
- Compensation bands or offer strategy — out of scope for this library; flag it and move on.
- Legal compliance advice for a specific jurisdiction — provide standard guardrails (below) but tell the user to confirm with employment counsel for anything region-specific (e.g., salary-history bans, ban-the-box laws).

## Inputs to gather

Ask for these up front. If the user can't answer, apply the default and say so.

1. **Role title, level, and function** (e.g., "Senior Backend Engineer," "SDR," "Head of Marketing"). No default — required.
2. **Job description or top 5 responsibilities.** If none exists, draft a 5-bullet responsibility sketch from the title and confirm it, or point to **job-descriptions** for a full JD.
3. **Company stage and size.** Default: <100-person company, so bias toward fewer stages and generalist interviewers.
4. **Number of interviewers available and who they are** (names/roles). Default: hiring manager + 2-3 others.
5. **Total candidate-time budget.** Default: 3.5-4.5 hours across all stages for full-time roles; 2-2.5 hours for junior/high-volume roles. Flag anything the user proposes over 6 hours as a drop-off risk.
6. **Existing artifacts** — current questions, scorecards, ATS in use (Greenhouse, Ashby, Lever). Default: assume none; deliver ATS-agnostic markdown they can paste in.
7. **Must-have vs. trainable skills.** If unknown, propose the split yourself in the competency model and mark it for confirmation.
8. **Whether a work sample is feasible** (time-zone spread, candidate seniority, confidentiality limits). Default: yes for any role where output quality is observable (engineering, design, writing, sales, analytics).

## Process

1. **Define 5-7 competencies for the role.** Fewer than 5 misses the job; more than 8 makes scorecards unusable. Split them: 3-4 role-specific skills (e.g., "API design," "pipeline management"), 2-3 general (e.g., "communication," "ownership," "collaboration"). Write each as a one-sentence observable definition — "what a strong performer visibly does" — not a trait ("smart," "passionate" are unratable). Mark each competency **must-have** (screen-out if weak) or **trainable**.

2. **Design the stage plan.** Default pipeline for a full-time role:
   - Recruiter/HM screen — 30 min — motivation, logistics, 1-2 must-have competencies at surface depth
   - Skills deep-dive — 60 min — 2-3 core competencies via behavioral + situational questions
   - Work sample — 45-90 min live, or take-home capped at 2-3 hours candidate effort — the top must-have skill
   - Values/collaboration interview — 45 min — general competencies, cross-functional partner as interviewer
   - Final HM conversation — 30 min — gaps from earlier rounds, candidate questions, selling
   Decision point: for high-volume/junior roles, collapse to screen + one 60-90 min combined session. For executive roles, add a panel presentation and 2-3 stakeholder conversations, but keep every session mapped to named competencies.

3. **Build the coverage matrix.** Make a table: competencies as rows, stages as columns. Every competency must be assessed in at least one stage; every must-have in at least two (two independent data points before rejecting or advancing on it). No stage should carry more than 3 competencies — at 3 questions per competency-stage minimum depth, a 60-minute interview fits 2-3 competencies with follow-ups. Kill or merge stages that duplicate coverage without adding a second perspective.

4. **Write the question bank.** For each competency, write 3-5 questions of mixed types so interviewers can vary across candidates in the same loop *only if the scorecard anchors stay identical* — the primary question per competency should be fixed:
   - **Behavioral** ("Tell me about a time...") — past behavior; best for experienced candidates. Pair every behavioral question with 3-4 STAR follow-up probes (see template).
   - **Situational** ("How would you handle...") — hypothetical; use for career-changers/juniors with thin history, or scenarios the company uniquely faces.
   - **Work-sample** — a scoped exercise mirroring real work (code review, mock discovery call, editing a brief, prioritizing a backlog). Most predictive; always include one for must-have skills when feasible.
   Ban these from the bank: brainteasers ("golf balls in a bus"), "greatest weakness," "where do you see yourself in 5 years," culture-fit vibes questions, and anything touching protected characteristics (age, family plans, health, religion, national origin, salary history where banned).

5. **Write anchored scorecards.** One scorecard per stage. Each competency gets a 4-point behaviorally anchored scale — use 4 points, not 5, to remove the safe middle. For every competency, write concrete anchors for at least levels 1, 2, and 4 (3 can be "between 2 and 4 with these signals"). Anchors describe evidence, not adjectives: "gave a specific example with measurable outcome and named their own mistake" not "good answer." Add a per-competency free-text evidence field ("quote or paraphrase what the candidate said") and an overall recommendation: Strong Hire / Hire / No Hire / Strong No Hire — no neutral option.

6. **Assign the panel.** Rules: each stage has one accountable interviewer plus at most one shadow/trainee; no interviewer covers the same competency twice in the loop unless deliberately seeking a second read on a must-have; include at least one interviewer outside the hiring team for the values interview; aim for demographic diversity on the panel where the team allows. Cap any individual's load at 3-4 interviews/week to protect quality. Every interviewer gets a one-page guide: their competencies, their questions with probes, their scorecard, and the two logistics rules (submit scores within 24 hours; do not discuss the candidate with other panelists before the debrief).

7. **Write the debrief protocol.** Non-negotiables to encode:
   - Scorecards submitted independently within 24 hours of the interview, **before** seeing anyone else's scores.
   - Debrief within 48 hours of the final interview; 30 minutes; hiring manager or recruiter facilitates.
   - Order of operations: reveal scores simultaneously → most junior panelist speaks first (prevents anchoring on the senior voice) → discuss competencies with score spreads ≥2 points, evidence only → HM decides (decision-maker model; consensus is optional and slow).
   - Decision rule stated in advance, e.g.: "Any must-have competency averaging <2.5, or any Strong No Hire with corroborated evidence, is a rejection. Otherwise HM decides."
   - Log the decision and one-sentence rationale for pipeline analytics and legal defensibility.

8. **Layer in bias guards** (do this throughout, then verify in the checklist): identical primary questions per candidate; anchors written before the first interview; independent scoring; junior-first debrief; evidence-only discussion (challenge "I just didn't click with them" — ask "which competency, what evidence?"); work samples anonymized for review where possible; structured note-taking during (not after) the interview; no scores changed after the debrief starts.

9. **Assemble and deliver the kit** in the output format below. Offer two follow-ups: a candidate-facing prep email describing stages and timing (transparency improves completion rates), and interviewer calibration — have two panelists score the same recorded/mock interview and compare; a spread >1 point on any competency means the anchors need rewriting.

## Frameworks & templates

**STAR probing** — train interviewers to fill all four slots before moving on:
- Situation: "What was the context? When was this?"
- Task: "What were you specifically responsible for?"
- Action: "What did *you* do — walk me through your steps." (Convert "we" to "I": "What was your individual contribution?")
- Result: "What happened? How did you measure it? What would you do differently?"
A behavioral answer without a concrete Result scores no higher than 2.

**Template 1 — Competency definition block** (repeat 5-7 times):

```
Competency: [name]
Type: [Must-have / Trainable]
Definition: A strong performer [observable behavior] resulting in [outcome].
Assessed in: [stage(s)]
Primary question: [behavioral or situational question]
Probes:
- [STAR follow-up 1]
- [STAR follow-up 2]
- [STAR follow-up 3]
Backup questions: [2-3 alternates for repeat candidates or second reads]
```

**Template 2 — Anchored scorecard row:**

```
Competency: [name]
4 - Exceptional: [specific evidence, e.g., "Described a system they designed
    end-to-end, quantified impact, proactively named a tradeoff they got wrong
    and what they changed."]
3 - Strong: Between 2 and 4; clear individual ownership and a measured result,
    but [missing element, e.g., "limited reflection on tradeoffs"].
2 - Mixed: [e.g., "Example was real but vague on their individual role; result
    stated without evidence; needed heavy prompting."]
1 - Weak: [e.g., "No concrete example after two prompts; spoke only in
    generalities or took credit for team outcomes."]
Evidence (required, quote/paraphrase): ______________________________________
Score: [1-4]
```

**Worked example — Senior Backend Engineer, competency "Operational ownership" (must-have):**
- Primary question (behavioral): "Tell me about the worst production incident you were on the hook for. Walk me through it from first alert to postmortem."
- Probes: "What did the monitoring show and what did you check first?" / "What was your specific role vs. others on the call?" / "What changed in the system or process afterward?" / "What would you do differently today?"
- Anchor 4: Owned diagnosis and mitigation personally; quantified impact (downtime, revenue, users); drove a specific durable fix (alerting, runbook, architectural change); volunteered their own mistake without prompting.
- Anchor 2: Was present during an incident but actions described were mostly others'; fix described is generic ("we added more tests"); no measurable outcome.
- Work-sample pairing (stage 3): 60-minute live session — hand the candidate a service diagram plus a simulated alert and logs; ask them to narrate diagnosis. Score on the same competency's anchors, plus "Communication" (does the narration stay clear under pressure?).

**Worked example — SDR, competency "Coachability" (trainable):**
- Situational question: "Here's a 30-second pitch for our product [give it]. Deliver it back to me, then I'll give you one piece of feedback and you'll try again."
- Anchor 4: Second attempt visibly incorporates the feedback and improves; candidate asks a clarifying question about the feedback.
- Anchor 1: Second attempt ignores or argues with the feedback.
This role-play doubles as a micro work sample and takes 8 minutes inside the screen — a pattern worth reusing for any high-volume role. (For the pitch content itself, see **sales-call-scripts**.)

**Worked example — coverage matrix (Senior Backend Engineer, 5 competencies, 5 stages):**

```
Competency              | Screen | Deep-dive | Work sample | Values | Final HM
------------------------|--------|-----------|-------------|--------|---------
System design (must)    |        |     X     |      X      |        |
Operational ownership   |   X    |           |      X      |        |
  (must)                |        |           |             |        |
Coding fluency (must)   |        |     X     |      X      |        |
Communication (train)   |   X    |           |             |   X    |
Ownership/initiative    |        |           |             |   X    |    X
  (trainable)           |        |           |             |        |
```
Read the matrix for defects before writing questions: every must-have has 2+
marks in different columns; no column exceeds 3 marks; the Final HM stage
intentionally carries only one competency because half its time is selling.

**Template 3 — candidate-facing work-sample brief:**

```
Exercise: [name, e.g., "Incident diagnosis walkthrough"]
Time: [45-90 min live / take-home capped at N hours — we mean it; stop at the cap]
What you'll do: [2-3 sentences describing the task and materials provided]
What we evaluate: [the 1-2 competencies, in plain language — share the rubric
headings, e.g., "diagnostic approach, communication of tradeoffs"]
What we do NOT evaluate: [e.g., "memorized syntax — docs and search are allowed"]
Logistics: [tools allowed, who will be in the room, how to submit]
Your work is used only for evaluation and is deleted after the process.
```
Sharing evaluation criteria in advance does not weaken the signal — it shifts
the test from "guess what we want" to actual skill, and raises completion rates.

**Debrief agenda template (30 min):**

```
0:00 Facilitator restates the decision rule and competency model (2 min)
0:02 Simultaneous score reveal — read-only, no edits from here (3 min)
0:05 Junior-first round-robin: each panelist, 2 min, evidence only (10 min)
0:15 Deep-dive on competencies with a score spread >= 2 points (10 min)
0:25 HM states decision + one-sentence rationale; recruiter logs it (5 min)
Rules: no new scores, no "gut feel" without evidence, no discussing the
candidate's demographics, school pedigree, or current employer prestige.
```

## Output format

Deliver one markdown document titled "Interview Kit — [Role]" with these sections, in order:

1. **Role summary** — 3-4 lines: title, level, mission of the role.
2. **Competency model** — table: competency, type (must-have/trainable), one-line definition, stages where assessed.
3. **Interview plan** — table: stage, duration, interviewer(s), competencies covered, format. Include total candidate time.
4. **Coverage matrix** — competencies × stages grid with X marks; must-haves visibly double-covered.
5. **Per-stage interviewer guides** — one subsection per stage: purpose, timing breakdown (e.g., "5 min intro / 40 min questions / 10 min candidate Qs / 5 min close"), primary questions with probes, backup questions, the stage scorecard with full anchors.
6. **Work-sample brief** (if applicable) — candidate-facing instructions (scope, time cap, what's evaluated) and internal grading rubric.
7. **Debrief protocol** — the filled-in agenda, decision rule, and 24-hour scorecard SLA.
8. **Bias-guard summary** — bulleted list of every guard embedded in the kit, so the user can audit compliance later.

Length norms: full kit for a standard role lands at 1,500-3,000 words. If the user only asked for a slice (just questions, just a scorecard), deliver that slice in the same format and offer the rest.

## Quality checklist

Verify every item before delivering; fix failures rather than shipping caveats.

1. 5-7 competencies, each with an observable one-line definition — zero pure traits ("smart," "hungry," "culture fit").
2. Every must-have competency is assessed in at least 2 different stages by different interviewers.
3. No stage covers more than 3 competencies.
4. Every competency has at least 3 questions, and every behavioral question has at least 3 STAR probes.
5. Every scorecard uses a 4-point scale with written behavioral anchors for at least levels 1, 2, and 4.
6. Overall recommendation scale has no neutral middle option.
7. Total candidate time is stated and is ≤4.5 hours (or the overage is explicitly justified).
8. Take-home work samples are capped at 3 hours of candidate effort, with the cap stated in the candidate-facing brief.
9. Zero banned questions: no brainteasers, no protected-characteristic questions, no salary-history questions, no "greatest weakness."
10. Debrief protocol includes independent scoring before discussion, junior-first speaking order, and a pre-stated decision rule.
11. Scorecards require a free-text evidence field, not just a number.
12. Every interviewer assignment names a specific person or role and includes their one-page guide.
13. The kit works standalone — an interviewer who has never met the hiring manager could run their stage from the guide alone.
14. Every question maps to exactly one primary competency (no orphan questions asked "because they're interesting").

## Common mistakes

- **Question banks without anchors.** A list of great questions with a bare 1-5 scale is still an unstructured interview — interviewers project their own bar. The anchors are the product; the questions are just prompts for evidence.
- **5-point scales.** Interviewers cluster at 3 and the scorecard stops discriminating. Force a lean with 4 points.
- **"Culture fit" as a competency.** It becomes a similarity-to-me score and is the single biggest bias vector in debriefs. Replace with defined values behaviors ("gives direct feedback upward," "documents decisions") that can be anchored and probed.
- **Every interviewer assessing everything.** Produces five shallow reads and no deep ones; debriefs devolve into repeating the same anecdote. The coverage matrix exists to prevent this.
- **Confusing polish with competence.** Confident, fluent candidates score higher on everything (halo effect). The Result probe and the evidence field are the antidote — a smooth answer with no verifiable outcome is a 2.
- **Letting the loudest/most senior panelist open the debrief.** Anchors everyone within the first two minutes. Junior-first order is cheap and measurably reduces conformity.
- **Take-homes that are real work.** Unpaid multi-day projects or tasks suspiciously close to the current roadmap crater acceptance rates and can be exploitative. Cap at 3 hours, use synthetic or stale data, and grade with a rubric written before the first submission.
- **Adding stages instead of adding structure.** Six interviews with vague mandates predict worse than three well-anchored ones and stretch time-to-decision past the 2-3 weeks strong candidates will tolerate.
- **Editing scores after the debrief starts.** Once discussion opens, scores are frozen; otherwise the debrief measures social pressure, not the candidate.
- **Reusing one generic kit across roles.** Competencies for an SDR and a staff engineer overlap maybe 20%. Rebuild the competency model per role; only the process scaffolding (scales, debrief rules, bias guards) transfers.
