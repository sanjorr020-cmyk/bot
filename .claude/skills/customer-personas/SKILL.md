---
name: customer-personas
description: "Researches and documents an ideal customer profile (ICP) and evidence-based buyer personas: data sources, customer interview scripts, persona templates covering goals, pains, triggers, objections, and watering holes, plus anti-personas and activation in copy and targeting. Use when the user asks to define their ICP or target customer, create buyer personas, write customer interview questions or scripts, segment their audience, build an anti-persona, document customer pains and buying triggers, figure out who their best customers are, or translate persona research into ad targeting and messaging."
---

# Customer Personas & ICP

Guide the user from raw customer evidence to a documented ideal customer profile (ICP), 2-4 buyer personas, and at least one anti-persona — then make the work usable by mapping each persona to concrete copy, channel, and targeting decisions. The output must be built on real signals (interviews, CRM data, support tickets, reviews), not demographic guesswork: a persona that says "Marketing Mary, 34, likes yoga" is decoration; a persona that says "buys within 30 days of a failed agency engagement, objects on integration risk, reads r/marketing" changes what the user writes and where they spend.

## When to use this skill

Use this skill when the user wants to:
- Define or sharpen their ICP (which companies/people to sell to, and which to disqualify)
- Build buyer personas from scratch or rebuild fluffy ones into decision-useful ones
- Write customer discovery/interview scripts and synthesize the answers
- Create anti-personas (who NOT to sell to) to protect sales time and ad spend
- Turn existing persona docs into copy angles, channel plans, or ad audience definitions

Do NOT use this skill for adjacent jobs — hand off instead:
- Sizing the market or validating demand for a new product → **market-research**
- Positioning against named competitors → **competitor-analysis**
- Writing the value prop, tagline, or messaging hierarchy itself → **brand-messaging** (personas are an input to it)
- Scoring inbound leads against the ICP in a live sales process → **lead-qualification**
- Mining support tickets/NPS/reviews at scale for product decisions → **customer-feedback-analysis**
- Building the campaign that uses the personas → **marketing-plan**, **go-to-market**, **meta-ads**, **google-ads**

## Inputs to gather

Ask the user for these before starting. If they lack an item, use the stated default and flag the gap in the deliverable.

1. **Business basics**: product, price point, sales motion (self-serve, sales-led, PLG), B2B or B2C, average deal size / order value. No default — always ask.
2. **Existing customer evidence**: CRM export or customer list, closed-won/closed-lost notes, support tickets, reviews (G2, Capterra, Amazon, App Store, Google), NPS verbatims, sales call recordings, analytics (GA4 audiences, top converting segments). Default if none: proceed as a *provisional* persona built from founder hypotheses plus public review mining of 2-3 competitor products, and label every claim "hypothesis" vs "evidenced."
3. **Best and worst customers**: ask for 5-10 named examples of each ("who renews, expands, refers?" / "who churned, discounted, drained support?"). Default: derive from revenue + tenure if the user can't name them.
4. **Access to customers for interviews**: can the user get 5-8 interviews per segment? Default: assume yes for recent buyers; if no, substitute review mining + win/loss notes and mark confidence lower.
5. **Number of personas expected**: default 2-3 (one primary, one secondary, optionally one influencer/blocker role for B2B). Refuse to produce more than 4-5 — beyond that, segmentation belongs in **market-research**.
6. **Intended use**: ads targeting, sales enablement, website copy, product roadmap. Default: copy + targeting. This determines which activation section to emphasize.

## Process

1. **Frame the unit of analysis.** For B2B, split the work in two layers: the ICP describes the *company* (firmographics: industry, headcount, revenue, tooling, growth signals); personas describe the *people* inside it (champion, economic buyer, end user, blocker). For B2C, the ICP is the segment definition (life stage, behavior, spend capacity) and the persona is the individual. Never blend the layers in one document — a confused ICP/persona hybrid is the most common failure in this domain.

2. **Mine existing data first (2-4 hours of work before any interview).**
   - Pull the customer list and rank by LTV, tenure, and expansion. The top ~20% by revenue-weighted retention is the seed ICP cohort.
   - Read 20-30 closed-lost notes and churn reasons; these seed the anti-persona and objections list.
   - Scrape language: pull 30-50 review sentences (own product + competitors) and 20+ support tickets. Extract verbatim phrases for pains and goals — customers' exact words become copy later.
   - Check analytics: which acquisition channels and landing pages produce the highest-retaining customers, not just the most conversions.

3. **Run 5-8 interviews per suspected segment** (research on qualitative saturation shows ~80% of themes surface within the first 6-8 interviews; stop adding interviews when two consecutive ones yield no new theme). Recruit recent buyers (purchased in the last 90 days — memory of the buying process decays fast), a few churned customers, and 1-2 near-misses (evaluated but didn't buy). Offer a $50-100 gift card for B2C, $100-150 or a donation for B2B; expect 10-25% acceptance on recruit emails. Keep calls to 30-45 minutes, record with permission, and use the script in Frameworks below. Interview one person at a time — never focus groups (groupthink contaminates buying narratives).

4. **Synthesize with a switch-moment lens (Jobs-to-be-Done).** For each interview, reconstruct the timeline: first thought → passive looking → active looking → deciding → buying. Tag every quote with one of: *goal, pain, trigger, objection, decision criterion, watering hole, alternative considered*. Cluster tags across interviews. A persona boundary exists where the *trigger + job* differ, not where demographics differ — two people with different titles who both buy after "our spreadsheet broke at 50 SKUs" are one persona.

5. **Draft the ICP.** Write inclusion criteria (must-haves), strong-fit signals (nice-to-haves), and disqualifiers. Score it: build a 5-attribute scorecard (see Frameworks) and back-test it against the 10 best and 10 worst known customers — the best should average ≥8/10, the worst ≤4/10. If they don't separate, the criteria are wrong; revise.

6. **Draft 2-4 personas** using the template in Frameworks. Every field must trace to evidence: cite at least one verbatim quote per pain and per objection. If a field has no evidence, write "HYPOTHESIS:" before it — do not invent plausible-sounding filler.

7. **Draft 1-2 anti-personas.** Source them from churned/refunded/high-support customers and closed-lost notes. Each anti-persona needs: identifying signals visible *before* the sale, why they look attractive, why they fail (churn in <90 days, 3x support load, endless discounting), and the disqualifying question sales or the signup flow should ask.

8. **Activate.** Produce the activation map (see Output format): for the primary persona, write 3 message angles in the customer's own words, list top 3 watering holes with a specific action each, and translate the persona into platform targeting (e.g., LinkedIn: job titles + company size + skills; Meta: interest stacks + lookalike seed definition; Google: 5-10 seed keywords reflecting the trigger — hand keyword expansion to **keyword-research**).

9. **Set a review cadence.** Personas are perishable: schedule a refresh every 6-12 months or after any pivot, pricing change, or new-segment launch. Add "last validated" and "confidence" (High = 6+ interviews + data; Medium = data only; Low = hypothesis) to every persona header.

## Frameworks & templates

### Customer interview script (30-45 min, switch-moment structure)

Use open past-tense questions about a *specific* purchase, never hypotheticals ("would you...") — people are unreliable predictors of their own behavior but accurate narrators of it.

```
WARM-UP (3 min)
1. What's your role, and what does a normal Tuesday look like?

FIRST THOUGHT & TRIGGER (8 min)
2. Take me back to the first time you realized you needed something
   like [product]. What was happening that day/week?
3. What were you using before? What finally made that unacceptable?

SEARCH & ALTERNATIVES (8 min)
4. What did you do next — where did you look, who did you ask?
5. What else did you seriously consider, including "do nothing"?
6. Where do you normally learn about tools/products like this?
   (communities, newsletters, podcasts, people)  ← watering holes

DECISION (8 min)
7. What almost stopped you from buying?          ← objections
8. Who else was involved in the decision, and what did they care about?
9. What was the deciding factor in the end? Why us and not [alt]?

OUTCOME & LANGUAGE (5 min)
10. How would you describe [product] to a colleague in one sentence?
11. If [product] disappeared tomorrow, what would you do?

WRAP (3 min)
12. Anything I should have asked but didn't?
13. Anyone else you know who faced this problem I could talk to?
```

Follow-up probes to use throughout: "Tell me more about that." / "What do you mean by ___?" / "What happened next?" Never pitch, never correct, never explain the roadmap.

### ICP scorecard (B2B example — adapt attributes)

Score prospects 0-2 per attribute; fit threshold ≥7/10.

| Attribute | 0 points | 1 point | 2 points |
|---|---|---|---|
| Company size | <10 or >1,000 staff | 10-50 | 51-500 |
| Trigger present | none visible | growth signal | hiring for the pain / just failed alternative |
| Tech stack | incompatible | partial fit | uses tools we integrate with |
| Budget authority | no budget line | budget exists, owner unclear | named owner + budget |
| Use-case match | edge case | secondary use case | core use case |

### Persona one-pager template (fill in every field or mark HYPOTHESIS)

```
PERSONA: [Role-based name, e.g., "Ops Lead Olivia"]   Priority: Primary/Secondary
Confidence: High/Med/Low   Evidence: n interviews, n reviews   Last validated: [date]

SNAPSHOT: role/title(s), seniority, company type & size (B2B) or life
stage & context (B2C), reports to / buys with

GOALS (max 3, outcome-phrased): what success looks like in their words
PAINS (max 4, each with a verbatim quote): current cost of the problem —
  time, money, risk, status
BUYING TRIGGERS (the event, not the state): e.g., "new head of sales
  joined," "spreadsheet broke past 50 SKUs," "lost a client to a
  reporting error"
DECISION CRITERIA (ranked): what they compare vendors on, in order
OBJECTIONS (each with the honest answer): price vs. what, risk, switching
  cost, "we already have X"
ALTERNATIVES CONSIDERED: incl. status quo and duct-tape solutions
WATERING HOLES (specific, not "social media"): named communities,
  newsletters, podcasts, events, influencers, search behaviors
BUYING PROCESS: who's involved, typical timeline, how they justify spend
VERBATIM VOICE: 3-5 exact quotes to reuse in copy
DISQUALIFIERS: signals this person is actually the anti-persona
```

### Worked example (condensed)

```
PERSONA: "Agency-Burned Ben" — Primary. Confidence: High (7 interviews, 22 reviews).
SNAPSHOT: Founder/head of growth, 10-40 person e-commerce brand, $1-8M rev.
GOAL: "Know within a week whether ad spend is working, without hiring."
PAIN: "We paid the agency $4K/mo and I still couldn't tell you our CAC."
TRIGGER: Fired or is about to fire an agency; new fiscal quarter.
CRITERIA: 1) time-to-first-insight <1 wk, 2) no analyst needed, 3) Shopify-native.
OBJECTION: "Last tool took 3 months to set up." → Answer: guided 45-min onboarding, live in day one.
WATERING HOLES: r/PPC, Ecommerce Fuel forum, "Marketing Operators" podcast.
TARGETING: Meta lookalike seeded on 180-day LTV top quartile; LinkedIn
  title "founder" + industry retail + 11-50 employees.
ANTI-SIGNAL: <$20K/mo ad spend — churns in 60 days (9 of 11 churned accounts).
```

### Anti-persona mini-template

```
ANTI-PERSONA: [name, e.g., "Bargain-Hunter Blake"]
LOOKS ATTRACTIVE BECAUSE: [converts fast / big logo / high volume]
FAILS BECAUSE: [churn <90 days / 3x support tickets / demands custom work]
PRE-SALE SIGNALS: [asks for discount on first call, no trigger event,
  wrong stack, team of one]
DISQUALIFYING QUESTION: [one question sales/signup asks to filter them]
EVIDENCE: [n churned accounts, refund rate, support data]
```

## Output format

Deliver a single markdown document titled "ICP & Buyer Personas — [Company]" containing, in order:

1. **Executive summary** (≤150 words): the ICP in two sentences, persona names with one-line descriptions, top 3 strategic implications.
2. **ICP definition**: must-have criteria, strong-fit signals, disqualifiers, and the 5-attribute scorecard with back-test results ("top-10 customers avg 8.4, bottom-10 avg 3.1").
3. **Personas** (2-4): full one-pagers per the template, evidence-cited, hypothesis-flagged.
4. **Anti-personas** (1-2): per the mini-template.
5. **Activation map** — a table per primary persona: rows = pains/triggers; columns = message angle (in verbatim voice), channel/watering hole, targeting parameters, suggested asset (hand execution to **ad-copywriting**, **landing-page-cro**, or **brand-messaging** as relevant).
6. **Research log**: sources used, interview count, dates, and open questions to validate next.
7. **Refresh plan**: next validation date and what evidence would change the picture.

If the user only asked for a subset (e.g., just interview scripts), deliver that piece using the relevant template and note which upstream/downstream steps remain.

## Quality checklist

Verify every item before delivering; fix failures rather than shipping with caveats.

- [ ] ICP (company/segment) and personas (people) are separate sections, not blended
- [ ] 2-4 personas maximum, one clearly marked Primary
- [ ] Every pain and objection has at least one verbatim customer quote or is explicitly marked HYPOTHESIS
- [ ] Each persona names a concrete buying *trigger event*, not a standing condition ("wants to grow" fails; "just lost a deal to a reporting error" passes)
- [ ] Watering holes are named specifically (community, newsletter, podcast, event) — "LinkedIn" alone fails
- [ ] Anti-persona includes at least 2 pre-sale detectable signals and one disqualifying question
- [ ] ICP scorecard back-tested: best customers score ≥7/10, worst ≤5/10, and the gap is stated
- [ ] Demographics appear only where they change a decision (targeting parameters), never as personality decoration
- [ ] No stock-photo-style attributes (age, hobbies, fictional family) unless B2C and decision-relevant
- [ ] Activation map translates each persona into at least one message angle AND one targeting definition
- [ ] Confidence level (High/Med/Low) and "last validated" date on every persona
- [ ] Interview script (if delivered) uses past-tense, specific-instance questions with zero hypotheticals
- [ ] Document states sample sizes everywhere a claim depends on them (n interviews, n reviews, n accounts)
- [ ] Refresh date set within 12 months

## Common mistakes

- **Demographic cosplay.** "Sarah, 34, drinks oat-milk lattes" — attributes that don't change a single copy or targeting decision. Cut any field that couldn't alter a headline, an audience filter, or a sales question.
- **Personas from the org chart of the imagination.** Building personas in a workshop with zero customer contact, then treating them as fact. Founder hypotheses are a fine v0 — only if labeled as such and with interviews scheduled.
- **Averaging across segments.** Blending two different jobs-to-be-done into one mushy persona ("wants both enterprise security and a free tier"). If triggers and decision criteria conflict, split the persona.
- **Interviewing only happy current customers.** Skipping churned customers and closed-losts guarantees a flattering, incomplete picture and an empty objections section. Aim for roughly 60/25/15 buyers/churned/near-misses.
- **Asking hypothetical questions.** "Would you pay $50/mo for this?" produces polite lies. Only past behavior on specific occasions is evidence.
- **Persona sprawl.** Seven personas means no one uses any of them. Cap at 4-5; merge anything that shares trigger + job + decision criteria.
- **Confusing the ICP with the TAM.** The ICP is who you win, retain, and expand *today with evidence* — not everyone who could conceivably use the product. Aspirational segments belong in **go-to-market**, flagged as bets.
- **Skipping the anti-persona.** Without documented disqualifiers, sales chases bad-fit revenue and ads optimize toward cheap-but-churning conversions.
- **Writing pains in company voice.** "Lacks workflow optimization solutions" is vendor-speak; the customer said "I lose every Friday afternoon to copy-pasting reports." Keep the customer's words — that phrasing outperforms in ads and landing pages.
- **One-and-done research.** Markets shift; a persona validated 18 months ago before a pricing change is fiction. Version the document and put the refresh date in the header.
