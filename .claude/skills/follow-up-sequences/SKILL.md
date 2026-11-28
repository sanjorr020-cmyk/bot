---
name: follow-up-sequences
description: Designs multi-touch sales follow-up sequences for post-meeting, proposal-sent, no-show, and gone-dark scenarios, mixing email, phone, and LinkedIn touches built around value-adds instead of check-ins, and writes breakup emails that revive dead threads. Use when the user asks to follow up after a sales call or demo, chase a proposal or quote that got no reply, re-engage a prospect who ghosted, recover a meeting no-show, build a follow-up cadence or sequence, write a breakup email, decide how many times or how often to follow up, or figure out what to say besides "just checking in".
---

# Sales Follow-up Sequences

Design and write complete multi-touch follow-up cadences that keep deals moving after the first conversation happens — the stage where most deals actually die. Roughly 80% of closed deals require five or more follow-ups, yet close to half of reps stop after one. This skill produces the full sequence: touch-by-touch schedule across email, phone, and LinkedIn, ready-to-send copy for every touch, a value-add reason for each contact, and a breakup email that either revives the thread or cleanly closes the loop.

## When to use this skill

Use it when a prospect has already engaged at least once and the user needs to sustain momentum:

- After a discovery call, demo, or in-person meeting
- After a proposal, quote, or pricing was sent and went quiet
- After a prospect no-showed a scheduled meeting
- When a previously active thread has been dark for 2+ weeks (ghosting)
- When the user wants a reusable cadence template for their team or CRM sequence tool

Do NOT use it for:

- **Net-new prospecting to people who have never replied** — use `cold-email-outreach` or `linkedin-outreach`; those cover first-touch personalization and deliverability.
- **What to say live on the phone** — use `sales-call-scripts` for call structure and talk tracks (this skill only writes the voicemail and the reason for the call).
- **Writing or restructuring the proposal itself** — use `sales-proposals`; this skill only handles the chase sequence after it's sent.
- **Handling a stated objection ("too expensive", "using a competitor")** — a reply, even negative, means the sequence worked; hand off to `objection-handling`.
- **Deciding which stalled deals deserve a sequence at all** — use `lead-qualification` or `sales-pipeline-management` for triage; assume here the deal is worth pursuing.
- **Re-engaging churned or at-risk *customers*** — use `churn-prevention`.

## Inputs to gather

Ask for these before drafting. Where the user doesn't know, use the defaults — state the assumption in the output rather than stalling.

1. **Scenario**: post-meeting, proposal sent, no-show, or ghosted? (This selects the cadence skeleton — they are not interchangeable.)
2. **What happened last**: date of last touch, what was said/sent, and any commitment the prospect made ("I'll review with my CFO by Friday"). A broken commitment is the single best follow-up hook.
3. **Deal context**: product/service, deal size, sales cycle length. Default: B2B, mid-market, 30–90 day cycle.
4. **Prospect details**: name, title, company, the pain they voiced, any personal detail from the conversation. If the user has call notes or the email thread, ask them to paste it.
5. **Channels available**: Does the user have the prospect's direct phone number? Are they LinkedIn-connected? Default: email + LinkedIn, phone only if a number exists.
6. **Value-add ammunition**: case studies, relevant blog posts, benchmark data, event invites, mutual connections. If none exist, plan to manufacture touches from public signals (prospect's company news, industry reports, their own LinkedIn activity).
7. **Tone**: default to direct, warm, low-pressure. Ask only if the brand is unusually formal or playful.
8. **Sequence exit rule**: what counts as "done" — booked meeting, signed proposal, or explicit no? Default: any reply exits the sequence.

## Process

1. **Classify the scenario and pick the cadence skeleton.** Post-meeting and proposal-sent sequences front-load touches (deal heat decays fast — reply likelihood drops measurably after 48 hours of silence). No-show sequences start within minutes. Ghosted sequences space touches wider and end in a breakup email. Use the skeletons in Frameworks below.

2. **Anchor Touch 1 to the last interaction.** Never open a sequence generically. Touch 1 must reference something specific: the commitment made, a question they asked, a moment from the demo, or the exact section of the proposal most relevant to their stated pain. For post-meeting, send within 24 hours (same day is better) with a recap + agreed next step. For no-shows, send within 5–10 minutes of the missed slot while it's still on their calendar.

3. **Assign one job and one channel per touch.** Every touch needs exactly one purpose (confirm next step, deliver an asset, create urgency, ask a direct question) and one CTA. Mix channels: sequences that combine email + phone + LinkedIn outperform email-only sequences on connect rate. Rough mix for a 6–8 touch sequence: 4–5 emails, 1–2 calls (with voicemail), 1–2 LinkedIn touches (comment on their post, or a short DM — 300 characters or less).

4. **Attach a value-add to every touch after Touch 2.** Generate the value-add list before writing copy. Rank options: (a) something about *them* — their company's news, a relevant trigger event, a mutual connection intro offer; (b) something for *their problem* — case study of a similar company, benchmark stat, a 3-bullet answer to a question they raised; (c) something useful *generally* — relevant article with one sentence on why it applies to them, event invite. Never send an article without the "here's why this matters to you" sentence. Banned phrases: "just checking in", "just following up", "circling back", "bumping this to the top of your inbox", "did you get my last email?".

5. **Set the spacing.** Early touches: 2–3 business days apart. After touch 4: widen to 5–7 business days. Ghosted sequences: 4–7 days between touches. Send Tuesday–Thursday, 8–10am or 1–3pm recipient's local time as a default; avoid Monday morning and Friday afternoon. Total sequence length: 6–8 touches over 3–4 weeks for active deals; 4–5 touches over 3 weeks for ghosted revival.

6. **Write every touch in full.** Emails: 50–125 words, subject lines 1–5 words (under 45 characters), one CTA, no attachments on the first proposal chase (link instead, so opens are trackable). Threading rule: reply in-thread for touches 2–3 (context helps), then break to a fresh subject line around touch 4–5 (a new subject re-earns the open). Voicemails: script them at 15–25 seconds, name + one-sentence reason + "I'll send an email with the details" — the voicemail's job is to lift the next email's open rate, not to get a callback. LinkedIn: comment on their content before DMing; DMs under 300 characters, no pitch.

7. **Make CTAs progressively easier.** Early touches can ask for a meeting ("Does Thursday 2pm work to walk through the pricing section?"). Later touches should shrink the ask: a one-word reply ("Worth a quick yes/no: is this still on your radar for Q3?"), a 1–10 scale question, or a binary choice. Interest-based CTAs ("Is this still a priority?") outperform meeting-request CTAs late in a sequence.

8. **End with a breakup email — and honor it.** The final touch names the silence, removes pressure, and closes the loop. Breakup emails commonly pull 10–30% reply rates on otherwise dead threads precisely because they're credible. Never send a fake breakup and then keep emailing; if they don't reply, move them to a long-term nurture list (quarterly value-adds) and mark the deal closed-lost in the pipeline.

9. **Define exit and branch rules.** Any reply → exit sequence, respond within 4 business hours. Objection reply → `objection-handling`. Out-of-office → pause sequence, resume 1 business day after their return date. "Not now, try in Q4" → calendar a re-engagement touch for that date and exit. Email bounce → switch remaining email touches to LinkedIn/phone.

10. **Deliver the sequence in the Output format below**, with assumptions listed and copy the user can paste directly into their email client or sequence tool (Outreach, Salesloft, HubSpot, Apollo).

## Frameworks & templates

### Cadence skeletons by scenario

**A. Post-meeting / post-demo (7 touches, ~3 weeks)**
| # | Day | Channel | Job |
|---|-----|---------|-----|
| 1 | 0 | Email | Recap + agreed next step + calendar link |
| 2 | 3 | Email | Deliver promised asset or answer an open question |
| 3 | 6 | LinkedIn | Comment on their post, or connect w/ short note |
| 4 | 8 | Phone + VM | Reference the recap email; tee up email 5 |
| 5 | 9 | Email (new subject) | Case study matched to their stated pain |
| 6 | 14 | Email | Direct question: "Still targeting a [month] start?" |
| 7 | 21 | Email | Breakup |

**B. Proposal sent (7 touches, ~3.5 weeks)**
| # | Day | Channel | Job |
|---|-----|---------|-----|
| 1 | 0 | Email | Confirm sent + flag the one section to read first |
| 2 | 3 | Email | Specific question about a specific section |
| 3 | 7 | Phone + VM | "Wanted to answer questions live"; tee up email 4 |
| 4 | 10 | Email (new subject) | Value-add: ROI stat or reference-customer offer |
| 5 | 14 | Email | Direct timeline question, binary CTA |
| 6 | 19 | Email | "Anything changed on your end?" + offer to revise scope |
| 7 | 25 | Email | Breakup |

**C. No-show (4 touches, ~1 week)** — Touch 1 within 5–10 minutes: zero guilt, one-click reschedule link ("Looks like the timing didn't work today — here's my calendar, or reply with a time."). Touch 2 next morning: 2-sentence email restating the value of the meeting in terms of *their* stated pain + reschedule link. Touch 3 day 3: phone call + 15-second voicemail. Touch 4 day 6: light breakup ("If priorities shifted, no problem — should I close the file?"). Never say "you missed our meeting" or "as per my calendar invite".

**D. Ghosted / gone dark (5 touches over ~3 weeks, after 14+ days of silence)** — Touch 1: re-anchor to their own words ("When we spoke on May 12 you said onboarding time was the #1 blocker — is that still true?"). Touch 2 (day 5): fresh value-add tied to a trigger event at their company. Touch 3 (day 10): LinkedIn touch. Touch 4 (day 14): the 1–10 email (below). Touch 5 (day 21): breakup.

### Template 1 — Post-meeting recap (Touch 1, send same day)

> **Subject:** Notes + next step from today
>
> Hi [First name],
>
> Thanks for the time today. What I heard: [pain #1 in their words] is costing you [impact they stated], and [pain #2] is the blocker for [their initiative/quarter goal].
>
> As discussed, next step is [specific action] by [date]. I'll [your commitment — e.g., "send the security docs by Thursday"].
>
> One thing I didn't get to: [one insight or resource tied to their pain]. [1-sentence why it's relevant.]
>
> Does [day, time] still work for [next meeting purpose]? Holding it here: [calendar link]
>
> [Name]

### Template 2 — Proposal chase, direct-question touch (Touch ~2–3)

> **Subject:** The phased option
>
> Hi [First name],
>
> When we scoped this, you flagged [their concern — e.g., "getting sign-off before end of quarter"]. Page [X] of the proposal has the [option/section] built for exactly that.
>
> Quick question so I can be useful: is the sticking point budget, timing, or something in the scope itself?
>
> If it's easier live, here's 15 minutes: [link]
>
> [Name]

### Template 3 — The 1–10 email (late-sequence, ghosted threads)

> **Subject:** 1 to 10?
>
> Hi [First name],
>
> Rather than guess, I'll just ask: on a scale of 1–10, where is [project/initiative] on your priority list right now?
>
> If it's a 2, tell me and I'll stop cluttering your inbox. If it's a 7 but the timing's wrong, tell me when to come back. Either answer helps.
>
> [Name]

### Template 4 — Breakup email (final touch, any scenario)

> **Subject:** Closing the file on this?
>
> Hi [First name],
>
> I've reached out a few times since [last real interaction — "our demo on June 3"] and haven't heard back — which usually means priorities changed, this isn't a fit, or my emails are landing at the wrong time.
>
> All three are fine. Unless I hear otherwise, I'll close this out and won't keep emailing.
>
> If [pain they stated] resurfaces, [one-sentence standing offer — "the pilot pricing we scoped holds through Q3"], and I'm easy to find.
>
> [Name]

Rules for breakups: no guilt, no sarcasm, no "since I haven't heard from you I assume you've been eaten by an alligator" gimmicks for enterprise deals (fine for SMB/casual brands, use judgment). State a real consequence of closing (pricing expiry, pilot slot) only if it's true.

### Voicemail script frame (15–25 seconds)

> "Hi [First name], [Your name] from [Company]. Calling about [the specific thing — 'the proposal's phased option', not 'our conversation']. I just sent you an email with [the one detail] — subject line is '[subject]'. No need to call back; a one-line reply works. Again, [Name], [number]."

### Worked example — no-show Touch 1 (sent 8 minutes after the missed slot)

> **Subject:** Grab a new time?
>
> Hi Dana,
>
> Looks like 2pm didn't work out today — happens to everyone. Still keen to show you the reporting automation you asked about, since you mentioned month-end close is eating 3 days of your team's time.
>
> Grab any slot that works: [calendar link] — or reply with a time and I'll send the invite.
>
> Sam

Why it works: no guilt, restates the value in *her* stated pain (3-day close), and the only ask is a one-click reschedule. Compare the failure mode: "Hi Dana, we had a meeting scheduled for 2pm today. Please let me know when you're available to reschedule." — guilt-adjacent, value-free, and puts all the work on her.

### Value-add touch generator

When the user has no assets, build touches from these, in priority order: (1) trigger events — funding, leadership change, product launch, hiring spike at the prospect's company; (2) their own LinkedIn post or podcast appearance (comment or reference it); (3) a competitor-of-theirs move ("Saw [rival] just launched X — here's how teams like yours are responding"); (4) a benchmark stat from an industry report with one applied sentence; (5) an intro offer to a relevant person in your network; (6) an event/webinar invite. Each needs the bridge sentence: "Sharing because you mentioned ___."

## Output format

Deliver a single document with these sections:

1. **Sequence summary** — scenario, total touches, duration, channel mix (e.g., "Proposal-sent revival: 7 touches / 25 days / 5 email, 1 call, 1 LinkedIn"), and stated assumptions.
2. **Cadence table** — one row per touch: touch #, day, weekday to send, channel, job of the touch, CTA type.
3. **Full copy for every touch** — emails with subject lines, voicemail scripts, LinkedIn message text. Bracketed [placeholders] only for facts Claude genuinely doesn't have; everything the user provided gets written in.
4. **Branch rules** — what to do on reply, objection, OOO, bounce, and "not now".
5. **Exit plan** — what happens after the breakup (nurture list cadence, CRM stage change, re-engagement date if one was promised).

If the user asked for a single email rather than a sequence, still show where it sits in a recommended cadence (one-line note), then give the email.

## Quality checklist

Verify every item before delivering:

- [ ] Touch 1 references a specific fact from the last interaction (date, quote, commitment) — not a generic opener
- [ ] Zero instances of "checking in", "following up", "circling back", "bumping", or "per my last email"
- [ ] Every touch after Touch 2 contains a value-add or a direct question — no content-free nudges
- [ ] Every email is 50–125 words with exactly one CTA
- [ ] Subject lines are 1–5 words and under 45 characters
- [ ] At least two channels used in any sequence of 5+ touches
- [ ] Spacing follows the skeleton: no two touches less than 2 business days apart (except no-show Touch 1)
- [ ] CTAs get easier as the sequence progresses (meeting ask → binary/one-word reply)
- [ ] Voicemail scripts read aloud in under 25 seconds and point to an email
- [ ] LinkedIn messages are under 300 characters and don't pitch
- [ ] The sequence ends with a breakup email that names the silence and states what happens next
- [ ] Any urgency claim (expiring pricing, limited slots) is real per the user's input — nothing invented
- [ ] Branch rules cover reply, objection, OOO, and bounce
- [ ] No-show copy contains zero guilt language

## Common mistakes

- **Every touch asks for the same meeting.** Seven identical "got 15 minutes?" emails is one email sent seven times. Vary the job: deliver, ask, share, then ask again.
- **Value-adds with no bridge.** Sending an article link without the sentence connecting it to *their* stated problem reads as automated spray. The bridge sentence is the value.
- **Front-loading the whole sequence into week one.** Five touches in five days signals desperation and triggers spam filters (3+ same-thread emails in quick succession hurts deliverability — see `email-deliverability` if replies mysteriously stop).
- **Threading forever.** By touch 5, a thread titled "Re: Re: Re: Proposal" is visually dead in their inbox. Break to a fresh subject.
- **Guilting the no-show.** "You missed our meeting" converts a scheduling accident into an adversarial relationship. The no-show sequence's only job is a frictionless reschedule.
- **The fake breakup.** Sending "I'll stop reaching out" and then reaching out two weeks later torches credibility permanently. The breakup is a contract.
- **Chasing the proposal with "any updates?"** It puts all the work on the prospect. Ask a specific question about a specific section instead — it's answerable in one line from a phone.
- **Ignoring the commitment they made.** If the prospect said "I'll get back to you Friday," the strongest possible follow-up is anchored to that exact promise on Monday — most reps send a generic nudge instead.
- **Sending attachments on chase emails.** Attachments can't be tracked and re-trigger spam filters; link to the hosted proposal instead.
- **Treating a "no" as a failed sequence.** A clear no is a successful exit — it frees pipeline attention. Only silence is failure, and the breakup email converts even silence into a decision.
