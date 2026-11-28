---
name: linkedin-outreach
description: "Builds LinkedIn prospecting and social-selling systems: seller profile optimization, connection request notes, non-spammy DM sequences, InMail and voice-note variants, content-assisted warm-up, and daily activity plans that respect LinkedIn limits. Use when the user asks to write a LinkedIn connection request, build a LinkedIn DM or InMail sequence, do LinkedIn prospecting or social selling, optimize their profile for outbound, warm up prospects before pitching, plan safe daily LinkedIn activity quotas, write a Sales Navigator outreach campaign, or fix low connection-acceptance or reply rates."
---

# LinkedIn Outreach

Turn LinkedIn from a resume site into a pipeline channel. This skill covers the full social-selling motion: making the seller's profile convert profile-views into accepts, warming prospects with comments before any ask, writing connection notes and DM/InMail/voice-note sequences that read like a peer reaching out (not a template blast), and pacing all activity inside LinkedIn's rate limits so the account never gets restricted. The output is a complete, ready-to-run outreach system, not a single message.

## When to use this skill

Use when the user wants to:
- Prospect or book meetings via LinkedIn (free, Premium, or Sales Navigator)
- Write or fix connection request notes, DMs, InMails, or voice-note scripts
- Rewrite their headline/About/banner so outbound converts better
- Design a comment-first warm-up play before pitching
- Set daily/weekly activity quotas that stay under LinkedIn's limits
- Diagnose low accept rates (<20%) or low reply rates (<5%)

Do NOT use for:
- Cold email campaigns or multichannel email cadences → **cold-email-outreach**
- Publishing a personal-brand posting calendar (posts as marketing, not as an outreach warm-up tactic) → **linkedin-content**
- Scoring whether a prospect is worth pursuing → **lead-qualification**
- What to say once the call is booked → **sales-call-scripts**
- Cross-channel follow-up architecture after a demo or proposal → **follow-up-sequences**
- Defining who to target in the first place → **customer-personas**

## Inputs to gather

Ask for these; where the user shrugs, apply the default in parentheses:

1. **Who they sell to** — title, industry, company size, geography. (Default: ask for at least a job title + industry; refuse to write "spray" copy for "anyone who needs X." Point to **customer-personas** if they genuinely don't know.)
2. **Offer and proof** — what they sell, one quantified customer result, one recognizable customer name if available. (Default: proceed with a clearly flagged {{OutcomeClaim}} variable the user must supply before sending.)
3. **Account status** — account age, current connection count, Premium/Sales Navigator or free, SSI score if known, any past restrictions. (Default: assume a free, established account >1 year old with 500+ connections; if the account is <3 months old or previously restricted, halve all quotas below.)
4. **Sender's credibility assets** — mutual communities, shared employers/schools, content they've posted, podcast/webinar appearances. (Default: none; the sequence then leans harder on warm-up.)
5. **Desired call to action** — 15-min call, demo, event invite, resource swap. (Default: low-friction "worth a look?" interest check first, calendar link only after a reply.)
6. **Volume goal** — meetings/month target. (Default: reverse-engineer from benchmarks in the Process; ~100 connection requests/week at benchmark rates yields roughly 3-6 conversations and 1-3 meetings.)
7. **Tone constraints** — regulated industry, formal vs. casual, first-name culture. (Default: casual-professional, contractions allowed, no emojis in first touch.)

## Process

1. **Audit the seller profile first — it is the landing page.** 30-50% of people who receive a connection request view the profile before deciding. Fix in this order:
   - **Headline (220 char max):** replace job title with outcome + audience, e.g. "Helping mid-market CFOs close the books in 3 days, not 12 | Controller-turned-seller." First ~70 characters show in search results and comment feeds — front-load the value.
   - **About section (2,600 char max):** first 265-300 characters display before "…see more" — open with the buyer's problem, not "I'm a passionate…". Structure: problem (2 lines) → how you fix it (3 lines) → proof with numbers (2 lines) → CTA with contact info.
   - **Banner (1584×396 px):** one-line value prop + customer logos or a stat. No default blue banner.
   - **Featured section:** pin one case study or lead magnet, one strong post.
   - **Photo:** face fills ~60% of frame, plain background. Profiles with photos get up to 21x more views.
   - Decision point: if the profile is weak and the user won't fix it, warn that accept rates will run 10-15 points lower and proceed.

2. **Define the list and segment it by warmth.** Three tiers, each gets different copy:
   - **Tier A (warm):** engaged with the seller's content, mutual connections >3, shared community/employer.
   - **Tier B (active):** posts or comments on LinkedIn at least monthly (visible activity in last 30 days).
   - **Tier C (cold/dormant):** no visible activity. Deprioritize; consider **cold-email-outreach** for these instead — dormant LinkedIn users often check the inbox never.

3. **Run the warm-up before the ask (Tier B especially).** Over 7-14 days before connecting: react to 2-3 of the prospect's posts and leave 1-2 substantive comments (2-4 sentences that add a data point, a counterexample, or a sharpened question — never "Great post!"). Goal: name recognition, so the connection request arrives pre-warmed. Comments on prospects' posts also surface the seller's headline to the prospect's network. Budget: 15-20 minutes/day of commenting covers 8-12 prospects.

4. **Send the connection request.** Decide note vs. blank:
   - **Blank requests** convert at 25-35% for relevant senders and burn no personalization; LinkedIn also caps free accounts at roughly 5-10 personalized notes/month, so ration notes for Tier A.
   - **Notes (300 char max)** win when there is a genuine specific hook (their post, a mutual, an event). A generic note ("I'd love to add you to my network") performs *worse* than blank.
   - Never pitch in the note. The note's only job is the accept.
   - Benchmark: 30-40% accept rate is healthy; <20% means wrong list or weak profile — stop and fix before scaling.

5. **Wait, then open the conversation.** After accept, wait 1-2 business days (instant messages read as automation). First DM: 300-500 characters, one idea, ends in an easy question — never a calendar link. Follow the Peer Opener template below.

6. **Run a 4-touch DM sequence over ~3 weeks** (spacing: Day 0, Day 4-5, Day 10-12, Day 18-21). Each touch must add something new — an insight, a relevant resource, a specific observation. If touch 4 gets no reply, stop messaging and rotate the prospect back into the comment-engagement pool for 60-90 days. Decision points:
   - Reply that's positive → move to CTA, propose 2 time windows, then hand off to **sales-call-scripts** for the meeting itself.
   - Reply with an objection → handle in-channel briefly (see **objection-handling**); do not paste a wall of text.
   - "Not now" → tag for a 90-day re-touch; track in **sales-pipeline-management**.

7. **Layer in format variants:**
   - **Voice notes** (mobile app only, 60-sec cap): use as touch 2 or 3 for Tier A/B. Script 25-40 seconds (~60-100 words). Voice notes commonly pull 2-3x the reply rate of an equivalent text DM because almost nobody sends them. Never use a voice note as touch 1 to a cold contact.
   - **InMail** (Premium/Sales Nav; ~5-50 credits/month by plan): reserve for high-value prospects who ignored or won't accept a request. Subject line ≤8 words, body under 400 characters outperforms — LinkedIn's own data shows shorter InMails lift response up to 25%. Benchmark reply rate: 10-25%; below 10% means weak targeting.
   - **Video DM** (optional): 30-45 seconds, prospect's name on a whiteboard or their website on screen in the first 3 seconds.

8. **Set the daily activity plan inside LinkedIn limits.** LinkedIn's invitation cap is roughly 100-200/week (about 20-25/day) and enforcement is behavioral, not just numeric. Safe daily quotas for an established account:
   - Connection requests: 15-20/day, max 100/week
   - DMs to 1st-degree connections: 25-40/day
   - InMails: within plan credits, ≤10/day
   - Profile views: 80-150/day (views are themselves a soft touch — prospects see "viewed your profile")
   - Comments: 5-10/day; reactions 20-30/day
   - Withdraw pending invites older than 3 weeks; keep pending count under ~500 (high pending-to-accept ratios trigger restrictions)
   - New accounts (<3 months): start at 5-10 requests/day and ramp weekly. Spread activity across the day; a burst of 20 requests in 5 minutes looks like a bot. Warn explicitly if the user mentions automation tools — automated accounts get restricted, and a restricted account kills the whole channel.

9. **Instrument and iterate weekly.** Track: requests sent → accept rate → reply rate → conversation-to-meeting rate. Healthy funnel: 100 requests → 30-40 accepts → 5-10 replies → 1-3 meetings. If accept rate is fine but replies are <10% of accepts, the problem is the first DM — rewrite touch 1 before touching anything else. Change one variable at a time and give each variant ≥50 sends before judging.

## Frameworks & templates

### The 3C Connection Note framework (≤300 characters)
**Context** (where you found them) → **Compliment or Common ground** (specific, verifiable) → **Connect ask** (no pitch). One sentence each.

> Hi {{FirstName}} — your comment on {{Mutual}}'s post about warehouse WMS migrations was the only one that mentioned change management. I work with ops leaders on exactly that mess and would like to follow your takes. Open to connecting?

(289 characters. Note: no pitch, no calendar link, one specific detail they know is real.)

### Template: Peer Opener DM (touch 1, after accept)
Formula: **Observation → Relevance → Micro-question.** 300-500 characters, no link, no attachment.

> Thanks for connecting, {{FirstName}}. Saw {{Company}} is hiring 3 SDRs this quarter — usually that's when reply-rate problems start showing up at scale. We got {{PeerCompany}} from 2% to 7% replies without adding headcount. Out of curiosity, is outbound quality something on your radar this quarter, or running fine?

Why it works: the observation proves research (hiring page), the proof is one number + one peer name, and the question is answerable in one word.

### Template: 4-touch DM sequence skeleton
- **Touch 1 (Day 0):** Peer Opener above. Goal: any reply.
- **Touch 2 (Day 4-5):** Give, don't chase. "No worries if timing's off — this teardown of {{topic}} we did for {{industry}} teams might be useful regardless: {{one-line takeaway, offer to send it}}." Offer the asset; don't paste the link unsolicited.
- **Touch 3 (Day 10-12), voice note where possible (25-40 sec):** "Hey {{FirstName}}, {{YourName}} here — sending a voice note because text is easy to skim past. One reason I reached out: {{specific trigger — funding, hire, post}}. If {{outcome}} matters this quarter, happy to share how {{PeerCompany}} handled it. Either way, no chase after this — cheers."
- **Touch 4 (Day 18-21), the honest close:** "Last note from me, {{FirstName}} — I'll assume timing's off and stop here. If {{problem}} climbs the list later, my door's open. Meanwhile I'll keep enjoying your posts on {{topic}}." Then actually stop; move to the 90-day engagement pool.

### Template: InMail (for non-connections, high-value targets)
- **Subject (≤8 words):** "{{Mutual/trigger}} + a question" beats clever. E.g. "Your Q3 fulfillment post — quick question"
- **Body (≤400 characters):**

> {{FirstName}} — your post on Q3 fulfillment misses hit home; two of our customers had the same 4% miss rate. We helped {{PeerCompany}} cut it to under 1% in a quarter. Worth 15 minutes to hear how, or should I just send the 2-page breakdown?

The either/or CTA ("call or doc?") lifts replies because "send the doc" is a low-commitment yes.

### Voice note script frame (25-40 seconds, ~60-100 words)
1. Name + why voice (5 sec) → 2. The one trigger you noticed (10 sec) → 3. One proof point (10 sec) → 4. Soft CTA + release valve "no worries either way" (5-10 sec). Write it out, but deliver unscripted-sounding: one take, natural stumbles are fine, reading-voice is not.

### Trigger-event opener library
Match the opener to the strongest available trigger; a trigger-based touch 1 typically replies 2-3x better than a persona-only one.

- **New role (30-90 days in):** "Congrats on the new seat, {{FirstName}} — most {{title}}s tell me the first 90 days are all about {{typical priority}}. Is that where your head is, or something else first?"
- **Funding round:** "Saw the Series {{X}} news — congrats. Post-raise is usually when {{function}} gets told to scale fast without breaking. How are you planning to handle {{specific scaling problem}}?"
- **Hiring surge:** "Noticed {{Company}} has {{N}} open {{role}} reqs. Teams that grow that fast usually hit {{bottleneck}} around month two. Curious if you're seeing that yet."
- **Their content:** "Your point in yesterday's post about {{claim}} matches what we're seeing, with one twist: {{data point}}. Would you expect that to hold at {{their segment}}?"
- **Competitor move:** "With {{Competitor}} launching {{thing}} last week, a few {{title}}s I talk with are rethinking {{area}}. Is that conversation happening at {{Company}} too, or noise?"

### Reply-handling snippets (keep replies under 4 sentences)
- **Positive ("sure, tell me more"):** "Happy to. Short version: {{one-sentence mechanism}} — that's how {{PeerCompany}} got {{result}}. Easier to show than type: does {{day}} or {{day}} work for 15 minutes? I'll send the invite."
- **Objection ("we already use {{tool}}/have this covered"):** "Makes sense — most teams we help ran {{tool}} first. The gap usually shows up in {{specific gap}}. If that's not biting you, genuinely nothing to fix. Worth me sending the 1-pager so you can gut-check it?"
- **"Not now":** "Totally fair. I'll close the loop on my end — mind if I check back in Q{{next quarter}}? Meanwhile if {{trigger}} happens sooner, you know where I am." Then schedule the 90-day re-touch and keep commenting occasionally so the re-touch isn't cold.
- **Referral down/up ("talk to {{Name}}"):** "Appreciate the pointer — I'll reach out to {{Name}} and mention you sent me, unless you'd rather forward this thread? Whichever's easier."

### Worked example: About-section rewrite (first 300 characters bolded in delivery)
> Most controllers spend the first 12 days of every month closing the books — and the CFO still asks why the numbers are late. I work with mid-market finance teams to cut close time to 3-5 days without adding headcount.
>
> How: we automate the reconciliation grunt work (the 60% of close that's copy-paste), standardize the checklist across entities, and give the CFO a live dashboard instead of a Friday PDF.
>
> Proof: 40+ finance teams migrated; median close went from 11.2 to 4.1 days; {{CustomerName}} closed their first 3-day month within one quarter.
>
> If a faster close is on your roadmap, message me here or grab time: {{link}}.

### 90-day re-engagement touch (after the sequence closed)
> {{FirstName}} — closing the loop from {{month}}. Two things changed since: {{new proof point or feature}}, and {{relevant market shift}}. If {{problem}} moved up the list, worth a fresh 15 minutes? If not, I'll keep out of your inbox.

### Warmth-tier routing table

| Tier | Warm-up | Note or blank? | Sequence |
|------|---------|----------------|----------|
| A (engaged/mutual) | 0-3 days, light | Note, reference the mutual/interaction | Touches 1-3, voice note at touch 2 |
| B (active poster) | 7-14 days of comments | Note if a real hook exists, else blank | Full 4 touches |
| C (dormant) | Skip | Blank, low priority | 2 touches max, then route to cold-email-outreach |

### Sample weekly activity schedule (established account, ~45 min/day)

| Day | Requests | DMs (touches 2-4) | Comments | Other |
|-----|----------|-------------------|----------|-------|
| Mon | 20 | 10 | 5 | Withdraw invites >3 weeks old |
| Tue | 20 | 10 | 8 | 1 voice-note batch (5 sends) |
| Wed | 20 | 10 | 5 | Review reply metrics |
| Thu | 20 | 10 | 8 | InMails to top 5 non-accepts |
| Fri | 20 | 10 | 5 | Tag "not now"s for 90-day re-touch |
| Weekly total | 100 | 50 | 31 | — |

Spread each day's sends across at least two sessions (e.g., 9-10am and 3-4pm local). Do not run this schedule on a brand-new account — ramp from 25%/50%/75% over the first three weeks.

## Output format

Deliver as a single markdown document with these sections:

1. **Profile fixes** — before/after headline, rewritten About (first 300 chars marked), banner copy line, Featured picks.
2. **Target list spec** — tier definitions with the user's ICP filters (and Sales Navigator filter string if they have it).
3. **Warm-up playbook** — daily comment quota, 3 example comments written for real posts in the prospect's niche.
4. **Message library** — connection note (with character count shown), all 4 DM touches, InMail variant, voice-note script with timing marks. Every template's variables in {{double braces}} with a filled-in worked example beside each.
5. **Daily activity plan** — table of quotas (requests, DMs, comments, views) matched to the user's account status, plus weekly totals.
6. **Metrics & iteration rules** — the funnel benchmarks and the "if X < Y, change Z" diagnostic rules from Process step 9.

## Quality checklist

Pass/fail every item before delivering:

- [ ] Connection note is ≤300 characters (count it) and contains zero pitch language
- [ ] First DM is 300-500 characters, contains no link and no calendar invite
- [ ] Every message references one specific, verifiable detail about the prospect or their company
- [ ] No touch repeats a previous touch's angle; each adds new information or a new format
- [ ] Sequence is exactly 3-4 touches with 4-7 day gaps, then a genuine stop
- [ ] Voice-note script reads aloud in under 40 seconds (~100 words max)
- [ ] InMail subject is ≤8 words; body ≤400 characters with an either/or CTA
- [ ] Daily quotas: ≤20 connection requests/day and ≤100/week, halved for accounts <3 months old
- [ ] Plan includes withdrawing pending invites older than 3 weeks
- [ ] Headline rewrite leads with buyer outcome in the first 70 characters
- [ ] About-section opener hooks within the first 300 characters (pre-"see more")
- [ ] Warm-up step exists for Tier B prospects before any connection request
- [ ] Funnel benchmarks and at least two if-then diagnostic rules are included
- [ ] No message contains "I hope this finds you well," "quick question" as a subject crutch on touch 1, or "synergy"

## Common mistakes

- **Pitching in the connection note.** The note's only job is the accept. A pitch in the note converts the request into an ad, and accept rates drop from ~30% to under 15%.
- **The pitch-slap:** connection accepted at 9:02, 1,200-character pitch at 9:03. Instant-message-after-accept is the single most recognizable automation tell. Wait 1-2 business days.
- **"Great post!" commenting.** Low-effort comments during warm-up actively hurt — the prospect's first impression of the seller is filler. If there's nothing substantive to add, react and move on.
- **Sending the calendar link before the first reply.** Asking for 30 minutes from a stranger is a big ask disguised as a small one. Earn a reply first; propose times second.
- **Treating LinkedIn like email volume.** Email tolerates 200 sends/day; LinkedIn restricts accounts for it. The channel trades volume for warmth — 15 researched requests beat 100 sprayed ones, and a restricted account produces zero.
- **One template for all tiers.** A Tier A mutual-community prospect getting the same message as a Tier C cold contact wastes the warmth. Route by tier every time.
- **Ignoring the profile.** Sending 100 requests/week to a profile with a default banner and a duties-list About section is paying for clicks to a broken landing page.
- **"Just bumping this to the top of your inbox."** A follow-up that adds nothing teaches the prospect the messages are safe to ignore. Every touch earns its place or doesn't get sent.
- **Fake personalization.** "I love what {{Company}} is doing in the {{industry}} space" is detectable as merge-field filler in one read. If the personalization would be true of 50 companies, it isn't personalization.
- **Never stopping.** Touch 7 in week 5 doesn't book meetings; it gets the account reported. Four touches, an honest close, and a 90-day engagement-pool rotation preserve the relationship for the next trigger event.
