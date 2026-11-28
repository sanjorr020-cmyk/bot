---
name: product-requirements
description: "Writes and reviews Product Requirements Documents (PRDs): evidence-backed problem statements, user stories with acceptance criteria, explicit scope and non-goals, measurable success metrics, edge cases, and an engineering spec-review workflow. Use when the user asks to write a PRD, spec out a feature, draft product requirements, turn an idea or feedback into a spec, write user stories or acceptance criteria, define scope or non-goals for a feature, define success metrics for a launch, prepare a spec for engineering review, or tighten up an existing requirements doc."
---

# Product Requirements Docs

Produce PRDs that engineering can build from without a follow-up meeting for every ambiguity. A good PRD proves the problem is real, defines exactly what ships (and what deliberately does not), states how success will be measured before a line of code is written, and surfaces the edge cases and open questions that otherwise appear as mid-sprint surprises. Optimize for the reader: a PRD is a decision-and-alignment tool, not a novel.

## When to use this skill

Use for: new-feature PRDs, feature-change specs, one-pagers for small features, rewriting vague requirements into testable ones, converting stakeholder asks or customer feedback into user stories with acceptance criteria, and running or preparing for spec reviews with engineering.

Do NOT use for — hand off instead:
- Launch timing, channel plans, and announcement sequencing → **product-launch**
- Company- or team-level goal setting → **okrs-and-goals**
- Mining raw customer feedback for themes (the input to a PRD, not the PRD itself) → **customer-feedback-analysis**
- Sizing the market or validating demand → **market-research** / **competitor-analysis**
- Designing the experiment that will measure the feature → **ab-testing**
- Pricing or packaging decisions the feature triggers → **pricing-strategy**
- Internal process documentation → **sop-writing**

## Inputs to gather

Ask the user for these before drafting. Defaults let you proceed when answers are missing — state every assumption in the draft under "Open questions."

1. **The problem or idea, in their words.** If they lead with a solution ("we need a dashboard"), ask "what happens today without it, and to whom?" until you have a problem.
2. **Evidence.** Support tickets, churn reasons, sales-call notes, usage data, NPS verbatims. Default if none: mark the problem statement as hypothesis-grade and add "validate with 5 customer interviews" as the first open question.
3. **Target user/segment.** Which persona, plan tier, or role. Default: the product's primary persona (reference **customer-personas** if they need one defined).
4. **Business goal it ladders to.** Revenue, retention, activation, cost reduction. Default: infer from the problem and flag for confirmation.
5. **Constraints.** Deadline, team size, platform (web/iOS/Android/API), compliance requirements, dependencies on other teams. Default: assume no hard deadline, single squad (2-4 engineers), existing platform only.
6. **Size of the effort.** Rough t-shirt size. Default: Medium. This picks the format — see decision point in Process step 2.
7. **Prior art.** Existing docs, competitor implementations, past attempts that failed. Default: none; note it.
8. **Reviewers.** Who signs off (eng lead, design, data, legal). Default: eng lead + design.

## Process

1. **Interrogate the problem before writing anything.** Apply the "5 Whys, 3 Whos" filter: ask why until you hit a user pain or business cost (usually 2-3 whys deep), then confirm who feels it, who reported it, and who pays for it. If the answer to "what happens if we do nothing for 6 months?" is "nothing measurable," tell the user this may not warrant a PRD and suggest logging it to the backlog instead.

2. **Pick the format — decision point.**
   - **Small** (< 1 engineer-week, no design work, no data-model changes): one-pager — problem, solution sketch, 1-3 acceptance criteria, done. ~200-400 words.
   - **Medium** (1-6 engineer-weeks, one squad): full PRD template below, 2-4 pages (900-1,800 words).
   - **Large** (multi-squad, > 6 engineer-weeks, or irreversible decisions like data migrations or public API contracts): full PRD plus a separate technical design doc owned by engineering. The PRD stays at the "what and why" level; explicitly delegate the "how" and never exceed ~6 pages — past that, split into phased PRDs.

3. **Draft the problem statement (evidence first).** Structure: user + context + pain + evidence + cost of inaction. Every claim gets a number or a source. "Users are frustrated with export" fails; "14% of support tickets in Q2 (n=212) were export failures; 3 of the 9 churned enterprise accounts cited it in exit interviews" passes. If evidence is thin, write the statement as a falsifiable hypothesis and say what data would confirm it.

4. **Define success metrics before the solution.** Ordering matters — metrics chosen after the solution tend to be vanity metrics that the solution automatically moves. For each metric capture: name, current baseline, target, measurement window, and data source. Pick 1 primary metric and at most 2 secondary. Always add 1 guardrail metric (something that must NOT get worse, e.g., page-load p95, support ticket volume, opt-out rate). Set targets from baselines: a realistic feature-level lift is typically 5-20% on the primary metric; a target like "double activation" needs extraordinary justification. If no baseline exists, first milestone = instrument and measure for 2 weeks.

5. **Write user stories with acceptance criteria.** Format: "As a [specific persona/role], I want [action] so that [outcome]." Run each story through INVEST (see Frameworks). Attach 2-5 acceptance criteria per story in Given/When/Then form; each criterion must be verifiable by a person who didn't write the PRD. Cover the unhappy paths: for every happy-path criterion, ask "what if the input is empty, huge, duplicated, unauthorized, or offline?" A Medium PRD typically carries 3-8 stories; more than 12 means the scope is too big — split it.

6. **Set scope with MoSCoW and write explicit non-goals.** Sort every candidate requirement into Must/Should/Could/Won't. Everything in "Won't" plus anything stakeholders will predictably assume is included becomes a **Non-goals** section with a one-line reason each ("Non-goal: bulk export — <2% of target segment has >1k records; revisit if enterprise tier launches"). A PRD without non-goals is the number-one cause of scope creep; require at least 3.

7. **Enumerate edge cases and open questions separately.** Edge cases = known scenarios needing defined behavior (empty states, permission boundaries, concurrency, localization, rate limits, migration of existing data). Open questions = genuinely unresolved decisions, each with an owner and a resolve-by date. Never ship a PRD with an open question that blocks a Must-have and has no owner.

8. **Run the spec review with engineering.**
   - Share the draft asynchronously at least 48 hours before any live review; ask reviewers to comment inline.
   - Live review (30-45 min, timeboxed): walk the problem and metrics in 5 minutes, then spend the rest on stories, edge cases, and feasibility. Do not read the doc aloud.
   - Ask engineering three questions explicitly: "What's ambiguous?", "What's harder than it looks?", "What would you cut to ship 30% sooner?"
   - Capture every decision in a decision log (see template) — date, decision, rationale, who decided. Verbal agreements that aren't logged get relitigated.
   - Exit criteria: eng lead can produce a rough estimate, all Must-have acceptance criteria are testable, zero unowned blocking questions. Then mark the PRD status "Approved" and treat further scope changes as change requests appended to the decision log, not silent edits.

9. **Keep the PRD alive during build.** When implementation reveals a wrong assumption, update the doc and the decision log the same day. After launch, append actuals vs. targets — this is what makes the next PRD's targets credible.

## Frameworks & templates

### INVEST (quality test for each user story)
- **I**ndependent — buildable without waiting on another story in the same PRD
- **N**egotiable — describes the need, not the pixel-perfect implementation
- **V**aluable — a user or the business can name the benefit
- **E**stimable — engineering can size it without a spike (if not, the spike becomes its own story)
- **S**mall — fits in one sprint; split anything larger
- **T**estable — acceptance criteria are pass/fail, no adverbs like "quickly" or "easily" without a number

### MoSCoW (scope sorting)
- **Must** — release fails without it; the acceptance bar
- **Should** — important, ship in fast-follow if cut; cutting needs a note, not a meeting
- **Could** — nice-to-have; first to go under schedule pressure
- **Won't (this release)** — explicitly excluded; feeds the Non-goals section

### Full PRD template (Medium/Large)

```markdown
# PRD: [Feature name]
**Status:** Draft | In review | Approved | Shipped   **Owner:** [name]
**Last updated:** [date]   **Reviewers:** [eng lead], [design], [data]
**Target release:** [version/quarter or "unscheduled"]

## 1. Problem
[Who] experiences [pain] when [context].
Evidence: [metric/source #1], [metric/source #2].
Cost of inaction: [quantified impact over 6 months].

## 2. Goals & success metrics
| Metric | Type | Baseline | Target | Window | Source |
|---|---|---|---|---|---|
| [primary] | Primary | [x] | [y] | [30/60/90 days post-launch] | [tool] |
| [secondary] | Secondary | [x] | [y] | [window] | [tool] |
| [guardrail] | Guardrail | [x] | no worse than [z] | [window] | [tool] |

## 3. Users & use cases
Primary: [persona, segment size]. Secondary: [persona].

## 4. Requirements (user stories)
### Story 1 — [short name] (Must)
As a [persona], I want [action] so that [outcome].
Acceptance criteria:
- Given [precondition], when [action], then [observable result].
- Given [edge precondition], when [action], then [defined behavior].

### Story 2 — [short name] (Should)
[...]

## 5. Non-goals
- [Excluded thing] — [one-line reason].
- [Excluded thing] — [one-line reason].
- [Excluded thing] — [one-line reason].

## 6. Edge cases
| Scenario | Expected behavior |
|---|---|
| [empty state / no data] | [behavior] |
| [permission denied] | [behavior] |
| [concurrent edit / race] | [behavior] |

## 7. Open questions
| # | Question | Owner | Resolve by | Blocks |
|---|---|---|---|---|
| 1 | [question] | [name] | [date] | Story [n] / nothing |

## 8. Decision log
| Date | Decision | Rationale | Decided by |
|---|---|---|---|

## 9. Dependencies & risks
[Teams, services, legal/compliance, sequencing risks.]
```

### Worked example — story with acceptance criteria

```markdown
### Story 3 — CSV export of invoice history (Must)
As a finance admin on the Business plan, I want to export all invoices
as CSV so that I can reconcile payments in my accounting system without
copying rows by hand.

Acceptance criteria:
- Given an account with 1–10,000 invoices, when the admin clicks
  "Export CSV," then a file downloads within 10 seconds containing one
  row per invoice with columns: invoice_id, date (ISO 8601), amount,
  currency, status, customer_email.
- Given an account with more than 10,000 invoices, when the admin
  clicks "Export CSV," then the export runs async and an email with a
  download link (valid 72 hours) is sent within 15 minutes.
- Given a user with a Viewer role, when they open the invoices page,
  then the "Export CSV" button is not rendered and the export endpoint
  returns 403.
- Given an account with zero invoices, when the admin clicks
  "Export CSV," then a file with only the header row downloads (no error).
```

### Worked example — problem statement

> Finance admins at Business-plan accounts (n≈1,400, 31% of ARR) reconcile invoices by manually copying data from our UI into spreadsheets. Support logged 212 export-related tickets in Q2 — 14% of all volume — and 3 of 9 churned enterprise accounts named "no export" in exit interviews (~$86k ARR). If unaddressed, ticket volume grows with the customer base and the objection keeps appearing in enterprise sales calls (7 mentions in Gong last quarter).

## Output format

Deliver a single markdown document following the template above:
- **One-pager** (Small): Problem (with evidence), Proposed solution, Acceptance criteria, Non-goals, Metric. 200-400 words.
- **Full PRD** (Medium/Large): all 9 template sections, 900-1,800 words / 2-4 pages, tables rendered as markdown tables. Status header filled in, "Draft."
- Close the deliverable with a **"Next steps"** block: named reviewers, async review deadline (48h+), proposed 30-45 min review slot, and the exit criteria for approval.
- If the user asked for a review of an existing PRD instead of a draft: return a findings list ordered by severity (blocking ambiguity → missing section → wording), each with the exact quote, why it fails, and a rewritten replacement.

## Quality checklist

Pass/fail every item before delivering:

1. Problem statement names a specific user segment, not "users" or "customers."
2. Problem statement cites at least one quantified piece of evidence with a source, or is explicitly labeled a hypothesis with a validation plan.
3. Exactly one primary metric; it has a baseline (or an instrumentation milestone) and a numeric target with a measurement window.
4. At least one guardrail metric is defined.
5. Every user story names a persona and an outcome ("so that..." clause is present and non-circular).
6. Every acceptance criterion is Given/When/Then and verifiable by someone who didn't write it — no "fast," "intuitive," or "seamless" without a number.
7. Every story has at least one unhappy-path or edge-case criterion.
8. Every requirement carries a MoSCoW priority; Must-haves alone would still constitute a shippable release.
9. Non-goals section exists with 3+ entries, each with a reason.
10. Every open question has an owner and a resolve-by date; none of them block a Must-have without a resolution plan.
11. Doc length within band: one-pager ≤ 400 words, full PRD ≤ ~1,800 words / 6 pages.
12. No solution details that belong in engineering's design doc (database schemas, class names, infra choices) unless they are genuine product constraints.
13. Decision log section exists (even if empty at draft stage).
14. Status, owner, reviewers, and last-updated date are filled in.

## Common mistakes

- **Solution masquerading as problem.** "Problem: we don't have a mobile app" is a solution with the word "problem" stapled on. Rewrite until the statement survives with the proposed solution deleted.
- **Metrics chosen after the solution.** Picking "number of exports" as the success metric for an export feature is circular — usage of a thing proves people clicked it, not that reconciliation pain dropped. Tie the primary metric to the pain (ticket volume, churn reason mentions, task completion time).
- **Acceptance criteria that restate the story.** "Given the user wants to export, when they export, then the export works" verifies nothing. Each criterion must pin a concrete input, boundary, or failure mode.
- **The invisible non-goal.** Omitting non-goals because "everyone knows we're not doing X." Three weeks later a stakeholder demos-in X. If it will be assumed, write it down.
- **The 15-page PRD.** Past ~6 pages, engineers skim and ambiguities hide. Length is not rigor; a tight edge-case table beats three pages of prose.
- **Averaging targets out of thin air.** "Increase activation 50%" with a 4% baseline and no comparable prior change. Anchor targets to past launches or industry deltas (5-20% feature-level lift is the normal band) or downgrade to a learning goal.
- **Review theater.** Sending the PRD 30 minutes before the meeting and reading it aloud. Async first (48h), live time spent only on disagreements and edge cases.
- **Silent scope edits after approval.** Changing a Must-have in the doc without a decision-log entry destroys the doc's authority; engineering stops trusting it and reverts to hallway agreements.
- **Prescribing implementation.** Specifying "add a Redis cache" or "use a modal" when the actual requirement is "results within 2 seconds" or "user can act without losing page context." Constrain outcomes; let engineering and design own mechanisms.
- **One giant story.** "As a user I want the new billing system so that billing works" is a project, not a story. If a story can't ship inside a sprint or needs more than 5 acceptance criteria, split it.
