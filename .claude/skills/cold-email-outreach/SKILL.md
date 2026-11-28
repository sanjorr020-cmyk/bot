---
name: cold-email-outreach
description: "Plans and writes complete cold email campaigns: prospect targeting, personalization strategy, 3-6 step sequences with send timing, subject lines, reply handling, and deliverability guardrails. Use when the user asks to write a cold email, build an outbound sequence, plan a cold outreach campaign, improve reply rates on cold emails, write first lines or subject lines for prospecting, set up an SDR cadence, ramp a new sending domain safely, or fix a cold campaign that is getting no replies or landing in spam."
---

# Cold Email Outreach

Design and write cold email campaigns end-to-end: define who gets emailed and why, choose a personalization strategy that scales, draft a 3-6 step sequence with timing, and wrap it in a sending plan that protects deliverability. The finished deliverable is a campaign document the user can load into any sequencer (Instantly, Smartlead, Apollo, Outreach, Lemlist) and start sending: targeting brief, every email written out, send schedule, volume ramp, and a reply-handling playbook.

## When to use this skill

Use this skill when the user wants to:
- Write or rewrite cold emails or a full outbound sequence to people who have never heard of them
- Plan a cold campaign: list definition, segmentation, personalization approach, send cadence
- Diagnose a cold campaign with low opens (<40%) or low replies (<1%)
- Write subject lines, first lines, or breakup emails for prospecting

Do NOT use this skill for:
- **Warm follow-ups after a call, demo, or reply** — use `follow-up-sequences`
- **LinkedIn connection requests and DMs** — use `linkedin-outreach` (this skill may reference LinkedIn as a parallel touch, but doesn't write those messages)
- **Deep technical email infrastructure** (DMARC policy tuning, blacklist remediation, postmaster diagnostics) — this skill covers guardrails; hand full audits to `email-deliverability`
- **Emails to an opted-in list** (newsletters, promos, lifecycle) — use `email-marketing` or `email-newsletters`
- **Scoring and routing the replies that come in** — use `lead-qualification`
- **Handling objections raised in replies beyond the playbook here** — use `objection-handling`
- **Defining who the ideal customer is from scratch** — use `customer-personas` first if the user genuinely doesn't know; this skill assumes a rough target exists and sharpens it

## Inputs to gather

Ask for these before drafting. Where the user doesn't know, use the stated default and flag the assumption in the deliverable.

1. **Offer**: What is being sold, at what price point, and the single most concrete outcome it produces (a number, a timeframe, a named risk removed). If the user gives a feature list, push for one quantified outcome.
2. **Target**: Job titles, company size, industry, geography. Default: one persona per campaign — if the user lists 3 personas, propose 3 separate campaigns.
3. **List source and size**: Bought/scraped (Apollo, Clay, LinkedIn Sales Navigator export) or hand-built? Default assumption: scraped, unverified — plan for verification.
4. **Proof**: One customer result, named if possible ("helped Acme cut onboarding time 40%"). If none exists, use a specific mechanism instead ("we do X by doing Y") — never fabricate.
5. **Sending infrastructure**: Domain age, number of inboxes, whether warm-up has run. Default: assume a fresh secondary domain with zero warm-up and build the ramp accordingly.
6. **Volume goal**: Prospects per month. Default: 500-1,000/month, which needs 2-3 inboxes.
7. **CTA appetite**: Meeting ask vs. interest-based ask ("worth a look?"). Default: interest-based for email 1, meeting ask from email 2 onward.
8. **Constraints**: Regulated industry, GDPR/CAN-SPAM exposure (B2C or EU targets raise the bar — B2B US is the permissive default), banned phrases, brand voice notes.

## Process

1. **Define the list with exclusions, not just inclusions.** Write targeting as filters a tool can execute: title keywords, seniority, headcount range, industry, tech stack or hiring signals if relevant. Then add exclusions: existing customers, open opportunities, competitors, companies under N employees. A campaign of 200-500 tightly matched prospects beats 5,000 loose ones — reply rate falls roughly in half with each step away from the ideal profile.

2. **Pick the personalization tier.** Choose one per campaign; don't mix:
   - **Tier 1 — Manual research (lists under ~150, deal size $10k+):** 2-3 minutes per prospect finding one specific, recent, relevant fact. Custom first line on every email 1.
   - **Tier 2 — Signal-based (150-2,000):** Segment the list by a trigger event or shared signal (see Frameworks). Everyone in a segment gets the same email referencing that signal. This is the default.
   - **Tier 3 — Persona-based (2,000+):** No individual personalization; the email is hyper-specific to the role's pain instead. Only viable with a very sharp persona and offer.
   Decision point: if the user can't name a signal for Tier 2, either help them find one (funding, hiring, product launch, new exec, tool adoption, review complaint) or drop to Tier 3 with eyes open — expect roughly half the reply rate.

3. **Write email 1 to a strict spec.** 50-125 words. Structure: relevance hook (1-2 sentences, why them, why now) → problem/value (2-3 sentences, their pain in their words, one proof point) → CTA (1 sentence, one ask). No images, no attachments, at most one link (prefer zero in email 1). Write at a 5th-8th grade reading level. Mobile check: the core message must survive in the first ~90 characters of preview text.

4. **Write 3-6 subject line options.** 1-5 words, under 50 characters, lowercase or sentence case, internal-memo tone: "quick question", "{{company}} onboarding", "{{competitor}} vs you", "idea for {{first_name}}". No clickbait, no "Re:"/"Fwd:" fakery, no ALL CAPS, no more than one punctuation mark. Recommend the user A/B test two of them (see `ab-testing` for test design; minimum ~200 sends per variant before judging).

5. **Build the sequence.** Default: 4 steps over 12-14 business days. Range: 3 steps (minimum viable) to 6 (enterprise, long cycles). Spacing: 2-4 business days between steps, widening toward the end (e.g., days 1, 4, 8, 14). Each step needs a distinct job:
   - Step 1 (day 1): the core pitch, personalized per tier.
   - Step 2 (day 4): reply in the same thread ("Re:"), add one new element — a proof point, a one-line case study, a sharper question. Under 60 words. Never "just bumping this".
   - Step 3 (day 8): new thread, new subject, new angle — different pain point or a relevant resource. This is the spot for a genuinely useful asset if one exists.
   - Step 4 (day 12-14): breakup email. Short, gracious, zero guilt. Often the highest reply-rate step.
   - Optional steps 5-6: only with a new angle each (different stakeholder pain, timely trigger, a "should I talk to someone else?" referral ask).
   Decision point: if the user also runs LinkedIn touches, slot them between emails (e.g., profile view day 2, connection day 5) and hand the message writing to `linkedin-outreach`.

6. **Set the sending plan and deliverability guardrails.** Non-negotiables to state in the deliverable:
   - Send cold from a **secondary domain** (e.g., trycompany.com, getcompany.com), never the primary. New domains need 14-30 days of warm-up before any cold volume.
   - **SPF, DKIM, DMARC** configured on every sending domain; verify before send one.
   - **Verify the list** (NeverBounce, ZeroBounce, MillionVerifier); remove invalids and role addresses (info@, sales@). Target hard bounce rate under 2%; above 5% can burn the domain in days.
   - **Volume ramp per inbox**: week 1: 10-15/day; week 2: 20-25/day; week 3: 30-40/day; steady state cap: 30-50 cold sends/inbox/day (plus continued warm-up sends). Need more volume? Add inboxes (2-3 per domain max), not per-inbox volume.
   - **Send windows**: Tuesday-Thursday, 7-10am recipient local time, is the safe default; randomize send intervals; skip weekends.
   - **Kill-switch thresholds**: pause and diagnose if open rate <40%, bounce rate >3%, or spam complaints >0.1% (that's 1 per 1,000 — one complaint at low volume is a signal, not noise).
   - **Compliance**: real sender name and physical address in footer, working opt-out mechanism (a plain "let me know if you'd rather I not follow up" line satisfies CAN-SPAM's spirit at small scale; use a proper unsubscribe link at higher volume or for EU recipients).

7. **Write the reply-handling playbook.** Cover the five reply types with a ready response for each: positive (book fast — reply within 1 business hour if possible, propose 2 specific times), objection ("we use X already" / "no budget" — one-line reframe then hand to `objection-handling` patterns), referral ("talk to Sam" — thank, ask for a warm intro or CC), not-now ("Q3" — confirm the month, set a snooze, route into `follow-up-sequences`), and negative/opt-out (remove immediately, suppress the domain if hostile). Positive replies feed `lead-qualification` and then `sales-call-scripts`.

8. **Set benchmarks and a review cadence.** Give the user realistic targets so they know what "working" looks like: open rate 50-70% (warmed domain, verified list, clean subject); reply rate 2-5% typical, 5-10% strong (Tier 1 personalization can hit 10-15%); positive reply rate roughly one-third of total replies; meetings booked ~1-2% of prospects contacted. Review after every 200-300 sends: opens low → subject/deliverability problem; opens fine but replies low → body/offer/targeting problem; replies fine but negative → list-fit problem.

9. **Assemble the deliverable** in the Output format below and walk the user through the two or three decisions you made on their behalf (tier choice, cadence length, CTA style) so they can override.

## Frameworks & templates

**The 3x3 research rule (Tier 1 first lines).** Spend max 3 minutes finding a fact that satisfies 3 tests: *recent* (last 90 days), *specific* (couldn't apply to a competitor), *relevant* (connects to the problem you solve). "Congrats on the funding" fails test 3; "Saw you're hiring 4 SDRs post-Series A — usually the moment outbound data quality starts to hurt" passes all three.

**Trigger-event menu (Tier 2 segmentation).** Rank by intent strength: (1) hiring for a role your product supports; (2) new exec in the buying seat, first 90 days; (3) funding round closed <60 days ago; (4) launched a product/entered a market that creates your problem; (5) using a complementary or competing tool; (6) public complaint (G2/Reddit/X) about the status quo. Build each segment's email around its trigger.

**PPP body structure (Problem-Proof-Push).** After the hook: name the problem as the prospect experiences it (not your feature), one sentence of proof (named customer + number beats adjectives), then one push (the CTA). One idea per email; if a sentence doesn't serve the CTA, cut it.

**Interest-based CTA ladder.** Email 1: "Worth a look?" / "Open to seeing how?" (asks for interest, not time). Email 2-3: "Happy to share the 2 ideas — 15 minutes this week?" (asks for time). Breakup: "Should I close the file?" (asks for a decision). Never ask for 30 minutes in email 1 from a cold start.

**Template — Email 1 (Tier 2, trigger-based):**

> Subject: `{{company}} + [category, 1 word]`
>
> Hi {{first_name}} — saw {{company}} is [trigger event, specific: "hiring 3 CS managers" / "just launched in Germany"].
>
> Usually when [persona plural] hit that stage, [specific pain: "ticket volume outgrows the shared inbox before headcount catches up"]. [Named customer] had the same issue — [tool/mechanism] got them [quantified result] in [timeframe].
>
> Worth a look for {{company}}?
>
> [First name]
> [Title, Company — one line, no banner, no logo]

**Template — Step 2 bump (same thread, day 4):**

> Hi {{first_name}} — one thing I left out: [new proof point or sharper question, e.g., "Acme was skeptical too; their team saw the 40% drop inside 6 weeks, before full rollout."]
>
> If [pain] isn't on your plate, who owns it at {{company}}?

**Template — Step 3 new-angle email (new thread, day 8):**

> Subject: `[different pain, 2-3 words, e.g., "audit-week scramble"]`
>
> Hi {{first_name}} — different thought. Beyond [pain from email 1], most [persona plural] at [stage/size] tell us the harder cost is [second-order pain: "senior engineers losing sprint days to evidence requests"].
>
> We put together [genuinely useful asset: "a 1-page checklist of the 14 controls auditors flag most"] — want me to send it over?
>
> (No form, no follow-up strings attached.)

**Template — Step 4 breakup (new thread, day 12-14):**

> Subject: `closing the loop`
>
> Hi {{first_name}} — I'll stop here since the timing's likely off.
>
> If [pain] climbs the priority list, the short version: we help [persona] get [outcome] without [common objection/cost]. Door's open.
>
> Either way — good luck with [trigger event].

**Tier 1 first-line examples (pattern: observation + implication):**

- Weak: "Congrats on the Series B!" (recent, not relevant — says nothing about the problem)
- Strong: "Saw the Series B announcement mentioned doubling the sales team by Q1 — that's usually when CRM data hygiene goes from annoying to expensive."
- Weak: "Loved your post on remote work." (flattery with no bridge)
- Strong: "Your post on async standups mentioned status updates eating 4 hours a week — that's the exact number our last three customers started with."
- Test to apply: swap in a competitor's name. If the line still works, it isn't personalized enough for Tier 1.

**Subject line bank (adapt, don't copy verbatim across campaigns):**

- `quick question` — the workhorse; still performs but is saturated, rotate it
- `{{company}} + [category]` — e.g., `northbeam + soc 2`; reads like an internal note
- `[trigger], {{first_name}}?` — e.g., `germany launch, dana?`
- `[competitor/tool] vs you` — only when the tool signal is confirmed
- `idea for {{company}}'s [team]` — pairs well with a resource-led step 3
- `closing the loop` / `should I close the file?` — breakup-step standards
- `[number] [persona plural], same problem` — e.g., `3 eng leads, same problem`

**Reply-handling scripts (drop into the playbook, section 5 of the output):**

- *Positive ("sure, tell me more"):* "Great — two options: I can send a 90-second recap in writing, or grab 15 minutes [day] or [day]. Which works better?" (Offering the written option lowers commitment friction and still converts.)
- *Objection ("we already use X"):* "Makes sense — most of our customers ran X first. The gap they hit was [one specific gap]. If that's not biting you, X is the right call." Then stop; one reframe, no wall of text.
- *Referral ("talk to Sam"):* "Thanks — I'll reach out. Mind if I mention you pointed me their way?" (A named referral roughly triples reply odds on the next email.)
- *Not-now ("check back in Q4"):* "Will do — I'll reach back out the first week of October. One thing worth knowing before then: [single planning-relevant fact]." Log the date; route to `follow-up-sequences`.
- *Negative ("remove me"):* Suppress immediately, no reply needed; if the tone is hostile, suppress the whole domain and note it in the exclusion list.

**Volume ramp table (per inbox, fresh secondary domain):**

| Week | Warm-up sends/day | Cold sends/day | Notes |
|------|------------------|----------------|-------|
| 1-2  | 20-40 (tool-managed) | 0 | Warm-up only; verify SPF/DKIM/DMARC |
| 3    | 20-30 | 10-15 | First cold sends; watch bounces daily |
| 4    | 20-30 | 20-25 | Hold if opens <40% |
| 5    | 15-20 | 30-40 | Approaching steady state |
| 6+   | 10-15 (keep running) | 30-50 cap | Scale via added inboxes, not volume |

**Worked example (fictional, for calibration):** SaaS selling automated SOC 2 evidence collection, $12k ACV, targeting Heads of Engineering at 20-100 person B2B startups that posted a compliance or security-hire job ad (trigger #1). Subject: `soc 2 before the audit`. Email 1, 78 words: "Hi Dana — saw Northbeam's posting for a security engineer with 'SOC 2 experience' in the first line. Most eng leads we talk to are burning 8-10 hours a week on evidence screenshots by the time that hire starts. Fieldwork (42 people, same stack) automated collection with us and cut audit prep from 6 weeks to 9 days. Worth a look before your audit window?" Four steps, days 1/4/8/13; step 3 pivots to the engineer-retention angle ("your new hire didn't sign up for screenshots").

## Output format

Deliver one document titled **"Cold Email Campaign: [offer] → [persona]"** with these sections:

1. **Targeting brief** — ICP filters (inclusion + exclusion), list source, estimated list size, verification step, segments with their trigger events.
2. **Personalization plan** — tier chosen and why, variables required ({{first_name}}, {{company}}, {{trigger}}, custom line), who/what produces each variable (manual, Clay enrichment, scrape field).
3. **The sequence** — every email in full: step number, day, thread (same/new), subject line(s), complete body with merge variables, CTA type. Subject A/B variants for step 1.
4. **Sending plan** — domain and inbox setup, warm-up status/duration, week-by-week volume ramp table, daily caps, send windows/timezone handling, SPF/DKIM/DMARC checklist line, compliance footer text.
5. **Reply-handling playbook** — the 5 reply types, a 1-3 sentence canned response for each, routing (calendar link, `lead-qualification`, `follow-up-sequences`).
6. **Benchmarks & review plan** — target open/reply/positive/meeting rates, kill-switch thresholds, what to change first when each metric underperforms.
7. **Assumptions** — every default applied on the user's behalf, flagged for override.

## Quality checklist

Before delivering, verify every item:

- [ ] Email 1 body is 50-125 words; steps 2+ are each under 100 words
- [ ] Every subject line is under 50 characters with no spam-pattern words (free!!, guarantee, act now) and no fake "Re:" on new threads
- [ ] Email 1 contains zero images, zero attachments, and at most one link
- [ ] Each email has exactly one CTA, and email 1's CTA asks for interest, not 30 minutes
- [ ] The first sentence of email 1 is about the prospect, not the sender ("I'm reaching out because we..." fails)
- [ ] Every step in the sequence adds something new — no step is a bare "bumping this to the top of your inbox"
- [ ] Sequence is 3-6 steps spanning 10-21 days with 2-4 business days between steps
- [ ] Sending plan uses a secondary domain, includes a week-by-week ramp, and caps cold sends at 30-50/inbox/day
- [ ] List verification step is explicit, with the <2% bounce target stated
- [ ] Kill-switch thresholds (opens <40%, bounces >3%, complaints >0.1%) appear in the sending plan
- [ ] Proof points are real user-supplied facts or clearly flagged as "[user to supply]"; nothing invented
- [ ] Merge variables are consistent ({{first_name}} style throughout) and each has a stated data source
- [ ] Reply playbook covers all five reply types with a written response for each
- [ ] A prospect reading email 1 could answer "why me, why now" in one read

## Common mistakes

- **Personalization theater.** Mentioning the prospect's alma mater or a 2-year-old podcast appearance, then pivoting to a generic pitch. Irrelevant personalization performs worse than none — it proves you researched them and still couldn't find a real reason to write.
- **Leading with the sender.** "My name is X and I'm the founder of Y, which does Z." The prospect's delete finger has moved by word ten. The first sentence must contain them, not you.
- **One campaign, three personas.** A CFO and a Head of Engineering don't share pains; an email vague enough to cover both converts neither. Split the campaign.
- **Asking for 30 minutes cold.** A meeting is a high-price ask from a stranger. Interest-based CTAs ("worth a look?") routinely double email-1 reply rates versus calendar asks.
- **The guilt-trip breakup.** "Since I haven't heard back, I assume you don't care about [outcome]." Burns the brand for a persona you'll want to re-target in six months. Breakups should be gracious and leave a door open.
- **Sending cold from the primary domain.** One bad campaign can land the company's transactional and sales email in spam for weeks. Always a secondary domain, always warmed.
- **Skipping list verification to save $50.** A 10% bounce rate on 1,000 sends will do more deliverability damage than a month of warm-up can repair.
- **Ramping volume overnight.** Going from 20 to 200 sends/day on day one of a new tool trips provider velocity filters even on a warmed domain. Growth of ~30-50% per week is the ceiling.
- **HTML templates with logos and banners.** Cold email should look like a person typed it in 90 seconds: plain text, short signature, no tracking-pixel-heavy footer. Heavy HTML both lowers replies and raises spam scores.
- **Judging the campaign at 50 sends.** Reply-rate differences aren't meaningful until roughly 200-300 sends per variant. Changing subject lines daily based on 20-send samples is noise-chasing.
- **Ignoring open-vs-reply diagnostics.** Rewriting the body when opens are 25% (a deliverability/subject problem), or rewriting subjects when opens are 65% but replies are 0.5% (an offer/targeting problem). Match the fix to the failing metric.
- **Treating "not now" as "no".** Timing objections are the most common positive-adjacent reply; without a snooze-and-resurface path (see `follow-up-sequences`), 30-40% of eventual pipeline quietly evaporates.
