---
name: lead-qualification
description: "Builds complete lead qualification systems: ideal customer profile (ICP) definitions, demographic and behavioral lead scoring models with point values and thresholds, qualification frameworks (BANT, MEDDPICC, CHAMP) with ready-to-ask question banks, plus disqualification criteria and lead routing rules with SLAs. Use when the user asks to define their ICP, build or fix a lead scoring model, decide what makes a lead an MQL or SQL, qualify or disqualify leads, apply BANT/MEDDPICC/CHAMP to a deal, write discovery qualification questions, set up lead routing or assignment rules, or reduce junk leads reaching sales."
---

# Lead Qualification

Design the system that decides which leads deserve sales time and which do not. This skill produces four connected deliverables: an ideal customer profile (ICP), a points-based lead scoring model (demographic fit + behavioral engagement), a qualification framework adapted to the user's sales motion (BANT, MEDDPICC, or CHAMP) with a question bank, and disqualification criteria plus routing rules with response-time SLAs. The goal is a document a sales and marketing team can implement in their CRM within a week.

## When to use this skill

Use when the user wants to:
- Define or sharpen their ICP (firmographic/technographic fit criteria)
- Build, audit, or recalibrate a lead scoring model
- Set MQL/SQL definitions and handoff thresholds
- Choose and apply a qualification framework (BANT, MEDDPICC, CHAMP) to their motion or a specific deal
- Write qualification/discovery questions reps can actually ask
- Create disqualification rules to stop wasting rep time
- Design lead routing (territory, round-robin, account-based) and response SLAs

Do NOT use this skill for:
- Full buyer persona narratives (motivations, day-in-the-life) → **customer-personas**. ICP here is the account/lead fit filter, not the persona story.
- Writing the outreach that generates leads → **cold-email-outreach**, **linkedin-outreach**
- Full discovery/demo call scripts beyond qualification questions → **sales-call-scripts**
- Managing deals after qualification (stages, forecasting, pipeline reviews) → **sales-pipeline-management**
- Nurture tracks for not-yet-ready leads → **follow-up-sequences** or **email-marketing**
- Handling pushback during qualification calls → **objection-handling**
- Sizing the market the ICP lives in → **market-research**

## Inputs to gather

Ask for these before starting. If the user doesn't know, use the default and flag the assumption in the deliverable.

1. **What they sell, price point, and sales motion.** ACV/price band and whether it's self-serve, inside sales, or field sales. Default if unknown: inside sales, ~$10K–$50K ACV — this drives framework choice (see Step 4).
2. **Current best customers.** 5–10 examples of accounts that closed fast, retained, and expanded. If none exist (pre-revenue), build the ICP from the problem hypothesis and mark it "provisional — revisit after 10 closed deals."
3. **Lead sources and volume.** Inbound (forms, trials, content), outbound, partner, events — and roughly how many leads/month. Default: mixed inbound/outbound at 100–500 leads/month. Under ~50 leads/month, scoring is overkill; say so and focus on qualification questions + disqualification instead.
4. **Tooling.** CRM (HubSpot, Salesforce, Pipedrive) and marketing automation. Scoring mechanics must be implementable in their stack. Default: HubSpot-style native lead scoring.
5. **Team structure.** Do SDRs qualify before AEs? How many reps, any territories? Default: SDR → AE handoff.
6. **Known bad-fit patterns.** Deals that churned, ghosted, or dragged — these seed disqualification criteria.
7. **Current definitions, if any.** Existing MQL/SQL definitions and conversion rates. Benchmarks to compare against: MQL→SQL 13–25%, SQL→opportunity 50–60%, opportunity→win 20–30% for B2B SaaS. Outside these ranges signals a threshold problem.

## Process

1. **Define the ICP from evidence, not aspiration.** Take the best-customer list and extract the common attributes: industry, employee count, revenue band, geography, tech stack, business model, trigger events (funding, hiring spikes, new leadership). Write the ICP as tiered fit — Tier 1 (perfect fit), Tier 2 (workable fit), Tier 3 (fit only with caveats) — using the ICP template below. Decision point: if the user's best customers span wildly different profiles, propose 2 ICPs maximum and recommend scoring them separately; more than 2 means they need **market-research** or **go-to-market** work first, not scoring.

2. **List explicit disqualifiers before building the score.** Disqualification is cheaper than qualification. Capture hard disqualifiers (never a fit: wrong geography for compliance reasons, company size below viable minimum, industries you can't serve, students/competitors/vendors filling forms) and soft disqualifiers (not now: no budget cycle for 12+ months, active contract with 18 months left). Hard disqualifiers bypass scoring entirely — auto-suppress or route to a recycle list.

3. **Build the two-axis scoring model.** Keep fit and engagement as separate scores; a highly engaged student is not a lead.
   - **Demographic/firmographic fit score (0–100):** assign points per attribute from the ICP tiers. Weight the 2–3 attributes that best predicted closed-won historically at 2–3x the others. Include negative points for soft disqualifiers (e.g., −20 for company size one band below minimum).
   - **Behavioral score (0–100):** assign points to actions by buying intent, not activity volume. High intent (pricing page, demo request, ROI calculator): 15–30 points. Medium intent (case study, webinar attendance, 3+ site visits in a week): 5–15 points. Low intent (blog read, single email open): 1–3 points. Cap any single action type (e.g., email opens max 10 points total) so one behavior can't inflate the score.
   - **Add decay:** halve behavioral points after 30 days of inactivity, zero them at 90 days. Fit scores don't decay.

4. **Set thresholds and stage definitions.** Define MQL as fit ≥ threshold AND behavior ≥ threshold (typical starting point: fit ≥ 60 and behavior ≥ 40 on 100-point scales — calibrate in Step 7). Define SQL as MQL + human confirmation of at least 2 qualification framework criteria. Write both definitions in one sentence each; if the definition needs a paragraph, it won't survive contact with the team.

5. **Choose and adapt the qualification framework.** Decision rule by deal complexity:
   - **BANT** — transactional/velocity sales, ACV under ~$25K, 1–2 stakeholders, cycle under 60 days.
   - **CHAMP** — SMB/mid-market where leading with budget kills conversations; challenge-first motions, ACV ~$10K–$75K.
   - **MEDDPICC** — enterprise, ACV $75K+, 4+ stakeholders, 3+ month cycles, procurement involved.
   Adapt the chosen framework: for each letter, write 2–3 questions in the user's product context (see question bank below), and define what a "pass" answer looks like. Set the SQL bar: minimum criteria confirmed (BANT: 3 of 4; CHAMP: CH + A; MEDDPICC: pain + champion + economic buyer identified).

6. **Design routing rules and SLAs.** Build a routing table (template below): who gets which lead, in what order of precedence (named accounts → territory → segment → round-robin), and how fast. SLA anchors: inbound demo requests contacted within 5 minutes where staffing allows, 1 hour maximum (contact rates drop ~8x between 5 and 30 minutes); other MQLs within 4 business hours; recycled leads re-enter nurture, not a rep's queue. Include an escalation rule: untouched lead past SLA reassigns automatically.

7. **Define the calibration loop.** Scoring models are wrong on day one by design. Specify: review MQL→SQL and SQL→win rates monthly for the first quarter, then quarterly. Recalibrate when MQL→SQL falls below 10% (threshold too low or scoring rewards noise) or exceeds 40% (threshold too high — marketing is sitting on sellable leads). Pull 10 closed-won and 10 closed-lost deals per review and check what their scores were at handoff.

8. **Package the deliverable** per the Output format section, including an implementation checklist mapped to the user's CRM.

## Frameworks & templates

### Template 1 — ICP definition (fill in the blanks)

```
IDEAL CUSTOMER PROFILE — [Product name]           Status: [Evidence-based / Provisional]

TIER 1 (perfect fit — prioritize everywhere)
  Industry:        [e.g., B2B SaaS, e-commerce brands doing $5M–$50M GMV]
  Company size:    [e.g., 50–500 employees]
  Revenue band:    [e.g., $10M–$100M ARR]
  Geography:       [e.g., US, UK, ANZ]
  Tech stack:      [e.g., uses Salesforce + a data warehouse]
  Trigger events:  [e.g., raised Series B in last 12 months; hired first RevOps lead]
  Economic buyer:  [title, e.g., VP Sales / CRO]

TIER 2 (workable fit — pursue with adjusted expectations)
  [Same fields; e.g., 20–49 employees, no RevOps hire yet]

HARD DISQUALIFIERS (never route to sales)
  - [e.g., <10 employees]
  - [e.g., regulated industry we can't support: healthcare with PHI]
  - [e.g., geography outside supported data-residency regions]
  - Students, competitors, existing vendors, personal email + no company match

SOFT DISQUALIFIERS (recycle to nurture)
  - [e.g., locked into competitor contract >12 months remaining]
  - [e.g., explicit "researching for next fiscal year"]

EVIDENCE: Based on [N] closed-won accounts from [date range]. Revisit after [N+10] wins.
```

### Template 2 — Lead scoring model (worked example: B2B SaaS, ~$30K ACV)

```
FIT SCORE (0–100)                          BEHAVIORAL SCORE (0–100, 30-day half-life)
Employee count 50–500 .......... +25       Demo request ................... +30
Employee count 20–49 ........... +10       Pricing page (per visit, max 2). +15
Employee count <10 ............. −20       Free trial started ............. +25
Target industry (Tier 1 list) .. +20       Trial: hit activation event .... +20
Title = VP/Dir Sales or RevOps . +20       Webinar attended live .......... +10
Title = manager/IC ............. +5        Case study viewed .............. +8
Uses Salesforce (enrichment) ... +15       3+ web sessions in 7 days ...... +8
Raised funding <12 mo .......... +10       Email click (each, cap 10 total) +3
US/UK/ANZ ...................... +10       Email open (each, cap 5 total) . +1
Personal email domain .......... −15       Careers page visit ............. −10
                                           Unsubscribed ................... −15

THRESHOLDS
MQL  = Fit ≥ 60 AND Behavior ≥ 40  → route to SDR, SLA 4 business hours
Fast lane = Demo request + Fit ≥ 60 → route to SDR, SLA 5 minutes–1 hour
SQL  = MQL + SDR confirms [3 of 4 BANT] on a live conversation → route to AE
Recycle = Fit ≥ 60, Behavior < 40 → nurture track (see follow-up-sequences)
Suppress = any hard disqualifier → no routing, tag reason
```

### Framework question banks

**BANT** (confirm 3 of 4 for SQL):
- Budget: "Have you set aside budget for solving this, or would it need a new line item?" Pass = named budget or a realistic path to one this cycle.
- Authority: "Who besides you would weigh in before this gets signed?" Pass = speaking with the decision-maker or a mapped path to them.
- Need: "What happens if you don't fix this in the next two quarters?" Pass = a consequence with a number or a deadline attached.
- Timeline: "Is there an event driving the timing — renewal, launch, audit?" Pass = a driver inside 2 quarters.

**CHAMP** (lead with the problem, not the wallet; confirm CH + A for SQL):
- CHallenges: "What broke or got painful enough that you took this call?" Pass = a specific, current pain the product addresses.
- Authority: "How did a decision like this get made last time?" Pass = process mapped, contact can navigate it.
- Money: "When you've solved problems this size before, what did the investment look like?" Pass = expectations within 2x of your price.
- Prioritization: "Where does this sit against everything else on your Q[N] roadmap?" Pass = top-3 initiative or an executive sponsor pushing it.

**MEDDPICC** (enterprise; score each letter 0–2, qualify at 10+ of 16, but require Pain, Champion, and Economic Buyer ≥ 1 each):
- **M**etrics — quantified business outcome the buyer expects ("reduce onboarding time 40%")
- **E**conomic Buyer — the person who can spend unbudgeted money; have you met them?
- **D**ecision Criteria — the written or unwritten checklist you'll be judged against
- **D**ecision Process — steps, approvers, and dates from evaluation to signature
- **P**aper Process — legal, security review, procurement; timeline in weeks
- **I**dentify Pain — the cost of doing nothing, in dollars, hours, or risk
- **C**hampion — someone with power who sells internally when you're not in the room (test: will they set up the EB meeting?)
- **C**ompetition — who else is in the deal, including "build it ourselves" and "do nothing"

### Template 3 — Routing rules table

```
PRIORITY  CONDITION                                ROUTE TO              SLA
1         Hard disqualifier                        Suppress + tag        —
2         Named/target account list match          Account owner (AE)    1 hour
3         Demo request, Fit ≥ 60                   SDR round-robin       5 min–1 hr
4         MQL, territory = [region list]           Territory SDR         4 bus. hrs
5         MQL, no territory match                  SDR round-robin       4 bus. hrs
6         Fit ≥ 60, Behavior < 40                  Nurture track         —
7         Fit < 60, any behavior                   Nurture (low-touch)   —
ESCALATION: any lead untouched past SLA → reassign next in round-robin + notify manager.
RE-ROUTING: recycled lead re-crosses MQL threshold → treat as new, full SLA applies.
```

## Output format

Deliver a single markdown document titled "[Company] Lead Qualification System" with these sections, in order:

1. **Summary** — 5–8 bullet decisions: ICP in one sentence, framework chosen and why, MQL/SQL definitions, top-priority routing rule, first calibration date.
2. **ICP** — completed Template 1, with tiers and evidence note.
3. **Disqualification criteria** — hard and soft lists with the action each triggers.
4. **Scoring model** — fit table, behavior table (with caps and decay rule), thresholds, in Template 2 format.
5. **Qualification framework** — the chosen framework with the adapted question bank, pass criteria per element, and the SQL bar.
6. **Routing rules** — completed Template 3 with the user's actual territories/owners.
7. **Handoff definitions** — one-sentence MQL and SQL definitions, plus what the SDR must log at handoff (framework answers, next step booked).
8. **Calibration plan** — review cadence, the two recalibration trigger conditions (MQL→SQL <10% or >40%), and what data to pull.
9. **Implementation checklist** — 6–10 CRM-specific steps (create score properties, build workflows, set assignment rules, dashboards).

Keep the whole document under ~4 pages; if the user only asked for one component (e.g., just scoring), deliver that section standalone with the Summary.

## Quality checklist

- [ ] ICP is built from named evidence (real customers or an explicitly flagged provisional hypothesis) — not generic "companies that need our product"
- [ ] ICP has no more than 2 profiles; each has tiers and hard disqualifiers
- [ ] Fit and behavioral scores are separate axes, each 0–100, never summed into one number
- [ ] Every scored attribute has a specific point value; the 2–3 strongest predictors are weighted 2–3x
- [ ] At least 3 negative-scoring items exist (careers page, personal email, unsubscribes, sub-minimum size)
- [ ] Repeatable behaviors (opens, clicks, visits) have explicit caps
- [ ] Behavioral decay rule is stated with numbers (half at 30 days, zero at 90)
- [ ] MQL and SQL are each defined in a single sentence with numeric thresholds
- [ ] Framework choice is justified by ACV, cycle length, and stakeholder count — not picked by habit
- [ ] Every framework element has at least 2 askable questions and a stated pass condition
- [ ] Routing table covers 100% of leads — every lead matches exactly one row, including suppress and nurture rows
- [ ] Every routed row has a numeric SLA and there is an escalation rule for missed SLAs
- [ ] Hard disqualifiers bypass scoring entirely rather than relying on negative points
- [ ] Calibration plan includes both trigger conditions and a first review date

## Common mistakes

- **One blended score.** Summing fit and behavior lets an unqualified lead who binge-reads the blog outrank a perfect-fit VP who visited pricing once. Always two axes, both required for MQL.
- **Scoring activity instead of intent.** 50 email opens ≠ buying signal. Uncapped low-intent actions are the #1 cause of "our MQLs are junk" complaints from sales.
- **No decay.** A lead who downloaded a whitepaper in January is still "hot" in June. Without decay, the MQL queue fills with dead interest and reps stop trusting it.
- **BANT-ing a $150K enterprise deal.** Budget/Authority/Need/Timing collapses in committee sales — it misses champions, paper process, and competition. Match framework to deal complexity (Step 5 decision rule).
- **Asking framework questions as an interrogation.** "What's your budget? Who decides? When?" in sequence torches rapport. The question bank exists to be woven into discovery — pair with **sales-call-scripts** for the conversation design.
- **Treating disqualification as failure.** A fast, kind "we're not the right fit" protects rep time and brand. Teams without explicit disqualifiers quietly spend 30–40% of SDR time on leads that could never close.
- **Setting thresholds once and never recalibrating.** The first threshold is a guess. Skipping the monthly review in quarter one locks in that guess; use the <10% / >40% MQL→SQL triggers.
- **Routing by fairness instead of fit.** Pure round-robin sends your best target account to whoever's next in line. Precedence order matters: named accounts and territories before round-robin.
- **Slow-walking demo requests.** A hand-raiser routed on a 24-hour SLA is a lead handed to a faster competitor. Hand-raisers get the 5-minute-to-1-hour fast lane regardless of score.
- **Confusing ICP with persona.** ICP filters accounts and leads (firmographics, fit); personas describe the humans (goals, fears, messaging). Building messaging from the ICP produces generic copy — that's **customer-personas** territory.
