# Фрагменты: sales/

## Стадии воронки и критерии выхода (pipeline)

- Источник: Business Skills (astDeniss/business-skills), `sales-pipeline-management/SKILL.md`, строки 67–72
- Установлено в: `.claude/skills/sales-pipeline-management/SKILL.md`

> | # | Stage | Buyer state | Exit criteria (ALL required) | Prob. | Max age |
> |---|-------|-------------|------------------------------|-------|---------|
> | 1 | Discovery | Has admitted a problem | • Pain confirmed in buyer's words, logged in CRM • Budget range or funding source identified • Follow-up meeting booked | 10% | 14 days |
> | 2 | Qualified | Actively evaluating | • Meets ICP + qualification bar (see lead-qualification) • Decision process and timeline stated by buyer • Economic buyer identified by name | 25% | 21 days |
> | 3 | Solution Validated | Believes we can solve it | • Demo/eval done with success criteria agreed • Champion confirmed and testing our message internally • Economic buyer has attended a meeting or accepted a summary | 45% | 21 days |
> | 4 | Proposal | Weighing the decision | • Proposal delivered and verbally walked through (never just emailed) • Pricing acknowledged, no unresolved showstopper objection • Mutual close plan with dates agreed | 65% | 14 days |

## Маршрутизация лидов: MQL → SQL

- Источник: Business Skills (astDeniss/business-skills), `lead-qualification/SKILL.md`, строки 116–120
- Установлено в: `.claude/skills/lead-qualification/SKILL.md`

> MQL  = Fit ≥ 60 AND Behavior ≥ 40  → route to SDR, SLA 4 business hours
> Fast lane = Demo request + Fit ≥ 60 → route to SDR, SLA 5 minutes–1 hour
> SQL  = MQL + SDR confirms [3 of 4 BANT] on a live conversation → route to AE
> Recycle = Fit ≥ 60, Behavior < 40 → nurture track (see follow-up-sequences)
> Suppress = any hard disqualifier → no routing, tag reason

## Вопросы BANT для подтверждения SQL

- Источник: Business Skills (astDeniss/business-skills), `lead-qualification/SKILL.md`, строки 125–129
- Установлено в: `.claude/skills/lead-qualification/SKILL.md`

> **BANT** (confirm 3 of 4 for SQL):
> - Budget: "Have you set aside budget for solving this, or would it need a new line item?" Pass = named budget or a realistic path to one this cycle.
> - Authority: "Who besides you would weigh in before this gets signed?" Pass = speaking with the decision-maker or a mapped path to them.
> - Need: "What happens if you don't fix this in the next two quarters?" Pass = a consequence with a number or a deadline attached.
> - Timeline: "Is there an event driving the timing — renewal, launch, audit?" Pass = a driver inside 2 quarters.

## Принципы презентационных материалов

- Источник: Marketing Skills (coreyhaines31/marketingskills), `skills/sales-enablement/SKILL.md`, строки 44–52
- Установлено в: `.claude/skills/sales-enablement/SKILL.md`

> ## Core Principles
> 
> ### Sales Uses What Sales Trusts
> Involve reps in creation. Use their language, not marketing's. If reps rewrite your deck before sending it, you wrote the wrong deck. Test drafts with your top performers first.
> 
> ### Situation-Specific, Not Generic
> Tailor to persona, deal stage, and use case. A deck for a CTO should look different from one for a VP of Sales. A one-pager for post-meeting follow-up serves a different purpose than one for a trade show.
> 
> ### Scannable Over Comprehensive

