---
name: sop-writing
description: "Writes standard operating procedures, playbooks, and checklists that people actually follow: decides what deserves documentation, structures steps with owners, triggers, exceptions, and quality checks, and sets up versioning and review ownership. Use when the user asks to write an SOP, document a process, turn a recording or walkthrough into a procedure, create a runbook or playbook, standardize how a task gets done, build a process checklist, fix an SOP nobody follows, audit outdated process docs, or set up a process documentation system for their team."
---

# SOPs & Process Docs

Turn tribal knowledge into procedures a competent stranger can execute correctly on the first try. This skill covers the full lifecycle: deciding which processes deserve documentation, capturing how the work actually happens (not how people say it happens), writing steps in a testable format with owners, triggers, exceptions, and quality checks, choosing the right document type (SOP vs playbook vs checklist), and installing versioning and ownership so the doc stays true. The measure of success is not completeness — it is whether a new hire can follow the doc unsupervised and produce the same output as the expert.

## When to use this skill

Use this skill when the user wants to:
- Document a recurring internal process (invoicing, publishing, deployments, client offboarding, refund handling)
- Convert a screen recording, call transcript, or verbal walkthrough into a written procedure
- Standardize work done inconsistently across team members
- Build a runbook for incidents or on-call
- Audit, restructure, or revive a stale process library
- Decide whether something needs an SOP, a playbook, or a checklist

Do NOT use this skill for:
- Customer-facing how-to articles or knowledge bases — use **help-docs**
- Onboarding new employees to the company (schedules, 30-60-90 plans) — use **employee-onboarding**; SOPs are inputs to onboarding, not the plan itself
- Onboarding customers to a product — use **customer-onboarding**
- Setting goals or defining what the team should achieve — use **okrs-and-goals**; SOPs describe *how*, not *what* or *why*
- Product specs and feature definitions — use **product-requirements**
- Hiring process documents like scorecards and interview guides — use **interview-kits**

## Inputs to gather

Ask the user for these before drafting. Where they don't know, use the defaults.

1. **The process itself.** Name, and the best available capture: a screen recording, call transcript, chat log, existing rough notes, or a live walkthrough where you interview them step by step. If they have nothing, run the interview in the Process section.
2. **Trigger and frequency.** What event starts this process, and how often it runs (daily/weekly/monthly/ad hoc). Default: assume ad hoc, triggered manually — but flag this, because vague triggers are the #1 reason SOPs go unused.
3. **The performer.** Who executes it — role, not name — and their experience level. Default: assume a competent new hire in that role with zero context on this company's tools and conventions. Write to that reader.
4. **The owner.** Who is accountable for the doc staying accurate (may differ from the performer). Default: the most senior person who currently performs the process.
5. **Failure cost.** What happens when this process is done wrong — lost money, compliance breach, angry customer, or mild annoyance. This sets how much exception-handling and verification the doc needs. Default: assume moderate cost (an error costs hours to fix but isn't catastrophic).
6. **Tools and access.** Systems touched, and any credentials/permissions the performer needs. Default: list tools as encountered and add a Prerequisites section.
7. **Format constraints.** Where docs live (Notion, Google Docs, Confluence, wiki, Git repo) and any existing template. Default: portable Markdown using the template in this skill.
8. **Variants.** Does the process fork (e.g., refunds under vs over $500)? Default: assume one happy path plus exceptions; split into separate SOPs only if fewer than 60% of steps are shared.

## Process

1. **Decide whether this deserves an SOP at all.** Score the process against these gates; recommend documenting only if at least two are true:
   - Runs at least monthly, or is rare but high-stakes (incident response, security breach, payroll)
   - More than one person performs it now, or will within 6 months
   - Errors have real cost (money, compliance, customer trust)
   - The current expert is a single point of failure
   If it fails the gates, tell the user directly: a 15-minute Loom or a 5-bullet checklist beats a full SOP that will rot. Over-documentation is a real failure mode — teams with 200 SOPs where 150 are stale trust none of them.

2. **Pick the document type.** Use this rule:
   - **SOP** — one repeatable process, one correct sequence, judgment mostly removed. "How to issue a refund." Typical length: 1-3 pages, 5-25 steps.
   - **Playbook** — a situation requiring judgment, offering strategies and decision criteria rather than a fixed sequence. "How to handle an enterprise churn risk." Contains principles, decision trees, and example scenarios; steps are optional.
   - **Checklist** — a memory aid for someone who already knows the process. Verification, not instruction. 5-12 items, each under 10 words. Derive it FROM the SOP after the SOP exists; a checklist with no backing SOP forces guessing.
   If the user asks for a "playbook" but describes a fixed sequence, write an SOP and say why. If a process has more than ~25 steps, split it into linked sub-SOPs at natural handoff points.

3. **Capture how the work actually happens — record-then-write.** Never draft from the expert's summary alone; experts compress and skip steps they've automated mentally (studies of expert knowledge elicitation consistently find experts omit roughly 70% of the decision points they actually make). In order of preference:
   - **Screen recording with narration** (Loom, OBS, QuickTime): ask the expert to perform the task once for real, talking through every click and every "it depends." 
   - **Live walkthrough interview**: you drive; the expert performs while you interrogate. Key prompts: "What tells you to start this?" "What did you just check before clicking that?" "What if that field is empty?" "How do you know this step worked?" "When did this last go wrong, and what happened?"
   - **Written brain-dump**: acceptable as a starting skeleton only; follow up with the interrogation prompts above on each step.
   From the capture, extract: the trigger, every action, every decision point, every tool switch, every verification the expert performs (often silently), and every exception mentioned or implied.

4. **Draft using the step format standard.** Every SOP gets a metadata header (owner, performer, trigger, frequency, version, last-verified date, time to complete) and numbered steps. Every step must contain:
   - **One action, active voice, starting with a verb.** "Export the CSV from Stripe → Payments → Export." Not "The CSV should be exported."
   - **The system and location** where the action happens, specific enough to find without asking ("Settings → Billing → Invoices tab", not "in the billing area").
   - **The expected result** whenever the outcome isn't obvious: "Click Send — the row turns green within ~10 seconds."
   - **Exact values, not vibes**: "wait 24 hours", not "wait a while"; "if the amount exceeds $500", not "for large amounts".
   Steps needing a screenshot: mark the exact spot with `[Screenshot: state to capture]` so the user can insert it. Rule of thumb: one screenshot per UI-heavy step in an unfamiliar tool; zero for CLI steps (paste the exact command instead, in a code block).

5. **Add decision points and exceptions explicitly.** Wherever the capture revealed an "it depends," encode it as a decision step: "IF X → do step 12; IF Y → skip to step 15." Then add an **Exceptions** section covering the 2-5 most common deviations with named handling ("Customer paid by wire: skip steps 4-6, instead email finance@ with the invoice number"). For anything beyond the listed exceptions, always end with an escalation line: who to contact, through what channel, with what expected response time. An SOP without an escalation path strands the performer at the first surprise.

6. **Add quality checks.** Two kinds:
   - **Inline verifications** at risky steps ("Before sending, confirm the amount matches the invoice total").
   - **A final Quality Check section**: 3-6 observable conditions that are true when the process was done correctly ("Invoice status shows Paid in Xero; customer received the receipt email — check the Sent folder"). These must be checkable by the performer without asking anyone.

7. **Test the draft against a cold reader.** Ideal: the user has someone unfamiliar execute the SOP while the expert watches silently, noting every hesitation and question — each one is a defect in the doc, not in the reader. If no cold reader is available, self-test by walking the doc step by step and challenging each step: Could someone find this screen? Is there a term used that a new hire wouldn't know (define it or link a glossary)? Is there any step where two readers could do different things? Fix, don't explain.

8. **Install versioning and ownership.** Without this, the SOP is stale within 6-12 months. Set up:
   - **Version line** in the header: `v1.2 — 2026-07-07 — changed refund threshold to $500 (J. Park)`. Semantic-ish: bump the minor for step changes, the major for process redesigns. Keep a changelog at the bottom for anything beyond 3 versions.
   - **A named owner (role + person)** responsible for accuracy — not "the team." One doc, one owner.
   - **A review cadence**: every 6 months for stable processes, every 3 months for processes touching tools that update frequently or compliance requirements, plus an event-driven rule — any process change ships with its SOP update in the same week, or the change didn't happen.
   - **A last-verified date** distinct from last-edited: reviewing and confirming "still accurate" updates the verified date even with zero edits. Docs verified >12 months ago should be flagged as untrusted in any audit.

9. **If the ask is a library audit rather than a single doc**: inventory all docs into a table (title, owner, last-verified, monthly usage if trackable, trigger clarity yes/no), then triage — archive anything unowned and unverified for >18 months (move, don't delete), assign owners to keepers, and rewrite the top 5 by usage x staleness first. Do not attempt to fix everything at once; a 10-doc trusted library beats a 100-doc graveyard.

## Frameworks & templates

### Template 1 — SOP (the default deliverable)

```markdown
# SOP: [Process name, verb-first — e.g., "Issue a customer refund"]

| Field | Value |
|---|---|
| Owner | [Role — Name] |
| Performer | [Role] |
| Trigger | [Specific event — e.g., "Refund request tagged in Zendesk"] |
| Frequency | [e.g., ~10x/week] |
| Time to complete | [e.g., 15 min] |
| Version | v1.0 — [YYYY-MM-DD] |
| Last verified | [YYYY-MM-DD] by [Name] |

## Prerequisites
- Access to: [systems + permission level]
- Know before starting: [linked glossary terms or 1-line definitions]

## Steps
1. [Verb + object + location.] *(Expected result if not obvious.)*
2. [Next action.] [Screenshot: what state to capture]
3. **Decision:** IF [condition] → continue to step 4. IF [condition] → go to step 7.
4. ...

## Exceptions
- **[Named case]:** [exact handling — which steps change and how]
- **Anything else:** escalate to [role] via [channel]; expect a response within [time].

## Quality check (done = all true)
- [ ] [Observable condition 1]
- [ ] [Observable condition 2]
- [ ] [Observable condition 3]

## Changelog
- v1.0 — [date] — initial version ([author])
```

### Template 2 — Checklist (derived from an SOP)

```markdown
# Checklist: [Process name] — v[matches SOP version]
Full procedure: [link to SOP]. Use only if you've done this before.

- [ ] [Condition or action, <10 words]
- [ ] [Next item]
- [ ] [5-12 items total]
- [ ] Quality check passed (see SOP)
```

### Worked example — steps done right vs wrong

Wrong (typical first draft):
> 3. Process the refund in Stripe and let the customer know.

Right:
> 3. In Stripe → Payments, search the charge by the customer's email. Open the charge and click **Refund**.
> 4. **Decision:** IF the amount is $500 or less → refund in full, continue to step 5. IF over $500 → stop; post the charge link in #finance-approvals and wait for a 👍 from the Finance lead (SLA: same business day), then continue.
> 5. Reply on the Zendesk ticket using macro "Refund confirmed". *(Expected: ticket auto-moves to Solved.)*

The wrong version hides one decision, two systems, one approval gate, and one verification. That gap is where the new hire fails.

### Framework — the SOP-worthiness gate (from step 1)

Document IF at least 2 of: (a) runs ≥1x/month or is rare-but-critical, (b) ≥2 performers now or soon, (c) errors cost real money/trust/compliance, (d) single point of failure. Otherwise: Loom video or 5-bullet checklist.

### Framework — SOP vs Playbook vs Checklist in one line each

- **SOP** = "do exactly this, in this order" (execution)
- **Playbook** = "in this situation, choose among these moves using these criteria" (judgment)
- **Checklist** = "confirm you didn't skip anything" (verification, requires prior knowledge)

## Output format

Deliver, in Markdown (or the user's stated platform format):
1. The completed SOP using Template 1, with all metadata fields filled — no empty fields; if unknown, state the default assumed and flag it for the user to confirm.
2. Screenshot placeholders marked inline where visuals are needed, each specifying the exact screen state to capture.
3. If requested or clearly useful: the derived checklist (Template 2).
4. A short "Maintenance plan" block: owner, review cadence, and the event-driven update rule — 3-5 lines, not a document.
5. Open questions list: every step where you had to assume something the capture didn't cover, phrased as questions the expert can answer in one line.

For library audits: the inventory table plus a prioritized rewrite queue (top 5) with one-line reasons.

## Quality checklist

- [ ] The trigger is a specific observable event, not "as needed" or "when required"
- [ ] Header names one owner (role + person) and one performer role
- [ ] Every step starts with a verb and contains exactly one action
- [ ] Every step names the system and location precisely enough to find without asking
- [ ] All quantities are exact (amounts, durations, thresholds) — zero instances of "large," "soon," "a while," "as appropriate"
- [ ] Every decision point is written as explicit IF/THEN with step numbers to jump to
- [ ] Exceptions section exists and ends with a named escalation path (who, channel, response time)
- [ ] Quality check section has 3-6 conditions the performer can verify alone
- [ ] Risky steps have inline expected results ("you should see...")
- [ ] No undefined jargon, internal nicknames, or acronyms a new hire wouldn't know
- [ ] Step count is 5-25; longer processes are split into linked sub-SOPs
- [ ] Version, last-verified date, and review cadence are all present
- [ ] Screenshot placeholders specify the exact state to capture, not just "add screenshot"
- [ ] Document type matches the content (fixed sequence → SOP, judgment → playbook, memory aid → checklist)
- [ ] Open assumptions are listed as questions for the expert, not silently baked in

## Common mistakes

- **Writing from the expert's summary instead of a capture.** The expert says "then I just reconcile it" and that sentence hides nine steps and two decision points. Always record or interrogate the actual performance.
- **Documenting the aspirational process instead of the real one.** If the doc says "get approval in the ticketing system" but everyone actually Slacks the manager, the doc is fiction and readers learn to distrust the whole library. Document reality; file the improvement as a separate change.
- **The "as needed" trigger.** An SOP with no concrete trigger never fires. "When a refund request is tagged in Zendesk" starts a process; "when necessary" starts nothing.
- **Steps that are goals, not actions.** "Ensure the data is clean" is an outcome. What does the performer click, run, or check to ensure it? If you can't answer, you haven't captured the process.
- **Burying decisions in prose.** "Usually you'd refund it unless it's a big amount or an annual plan, in which case check with finance" — three branches smeared into one sentence. Each branch gets its own IF/THEN line.
- **No escalation path.** The first exception not covered by the doc strands the performer, and they'll interrupt the expert anyway — which was the thing the SOP existed to prevent.
- **Screenshot-everything.** A doc with 30 screenshots breaks the day the UI updates and nobody re-captures them. Screenshot only genuinely confusing screens; prefer exact menu paths and copy-pasteable commands, which survive redesigns better.
- **Committee ownership.** "The ops team owns this doc" means nobody does. One name in the header, one person embarrassed when it's wrong.
- **Confusing edited with verified.** A doc edited last week (typo fix) but never re-walked in 18 months looks fresh and is stale. Track last-verified separately and treat >12 months as untrusted.
- **Writing a checklist for people who don't know the process.** A checklist compresses; it can't teach. Handing "☐ Reconcile Stripe payouts" to someone who's never done it produces improvisation with a false sense of coverage.
- **Documenting everything.** SOP libraries die of obesity, not starvation. Every marginal doc dilutes trust in the essential ones; apply the worthiness gate ruthlessly and archive aggressively.
