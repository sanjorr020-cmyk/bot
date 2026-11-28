---
name: social-media-strategy
description: "Builds a complete social media strategy: platform selection matched to audience and effort budget, content pillars, per-platform cadence and format mix, voice adaptation, growth loops, and a measurement plan that goes beyond follower count. Use when the user asks to create a social media strategy, decide which platforms to be on, define content pillars, figure out how often to post, grow an audience on social, audit or overhaul their social presence, set social media KPIs, or asks questions like \"should we be on TikTok?\" or \"why isn't our social growing?\""
---

# Social Media Strategy

This skill produces a decision-ready social media strategy document: which platforms to invest in (and which to deliberately skip), what to talk about (content pillars), how often and in what formats to post, how the brand voice flexes per platform, which growth loops to run, and how success will be measured with metrics tied to business outcomes rather than vanity counts. The deliverable is a strategy, not a post schedule — it should still be correct six months later even as individual posts change.

## When to use this skill

Use this skill when the user needs the strategic layer: platform choices, pillars, cadence policy, growth mechanics, or a measurement framework — whether starting from zero or overhauling an underperforming presence.

Do NOT use this skill for:
- Building the actual week-by-week posting schedule with dated slots → **social-content-calendar**
- Writing individual posts or threads for X → **twitter-x-content**; for LinkedIn → **linkedin-content**
- Reply strategy, DMs, moderation, and community building → **community-management**
- Creator partnerships and sponsored content → **influencer-marketing**
- Scripting Reels/TikToks/Shorts → **short-form-video**; YouTube long-form → **youtube-scripts**
- Turning existing content into social posts → **content-repurposing**
- Paid social campaigns → **meta-ads**
- Defining the core brand voice itself (this skill only adapts an existing voice per platform) → **brand-messaging**
- The overall marketing mix where social is one channel among many → **marketing-plan**

If the user has no defined audience at all, run **customer-personas** first or ask the persona questions inline before Step 2.

## Inputs to gather

Ask for these before starting. Where the user doesn't know, use the stated default and flag the assumption in the output.

1. **Business and offer**: What do they sell, to whom, at what price point? (No default — required.)
2. **Primary business goal for social**: awareness, inbound leads/demos, direct sales, hiring, or community. Default: awareness → inbound leads, since that's the most common commercial use.
3. **Target audience**: role/demographic, where they already spend time online, what they search vs. scroll for. Default: infer from the offer and state the inference explicitly.
4. **Effort budget**: hours per week available for social (creation + engagement + analysis), and who does the work (founder, marketer, agency, team). Default: 5 hours/week, one person. This number drives platform count more than anything else.
5. **Existing presence**: current platforms, follower counts, engagement rate, top 3 performing posts if known. Default: assume starting near zero.
6. **Assets and constraints**: Is the user comfortable on camera? Do they have design support? Regulated industry (finance, health, legal)? Default: no camera, no designer, unregulated.
7. **Brand voice reference**: existing voice guidelines or 2–3 adjectives. Default: "knowledgeable, plainspoken, occasionally wry" and note that **brand-messaging** should formalize it.
8. **Time horizon**: Default: 90-day strategy with a 12-month direction.

## Process

1. **Anchor on one north-star outcome.** Convert the business goal into a single measurable outcome social must influence (e.g., "20 demo requests/month attributable to social by day 90," "500 newsletter signups from social per quarter"). Refuse to proceed with "grow our following" as the goal — followers are an input, not an outcome. If the user insists on multiple goals, force-rank them and design for #1 only.

2. **Map the audience to platforms.** For each candidate platform (LinkedIn, X, Instagram, TikTok, YouTube, Facebook, Pinterest, Reddit, Threads), assess: (a) is the target audience actively there in a buying-relevant mindset, (b) does the platform's native format suit the user's assets (camera-shy founder ≠ TikTok-first), (c) discovery mechanics — search-driven (YouTube, Pinterest, Reddit) content compounds for years; feed-driven (X, LinkedIn, Threads) content dies in 24–72 hours; algorithmic-discovery (TikTok, Reels, Shorts) can reach cold audiences from zero followers.

3. **Score and select platforms with the Platform Selection Scorecard** (see Frameworks). Hard rules:
   - ≤5 hours/week → 1 primary platform + 1 repurposing target, maximum.
   - 6–15 hours/week → 2 platforms done well.
   - 15+ hours/week or a team → 3 platforms, never more than 4.
   - Every platform not selected gets an explicit "not now" line in the strategy with the trigger that would revisit it (e.g., "TikTok: revisit when we can film 3 videos/week or hire a video editor").

4. **Define 3–5 content pillars.** Each pillar must name the audience pain it addresses, the business objective it serves, and 5 example topics. Assign percentage weights that sum to 100%. Default split for a lead-gen goal: Education/how-to 40%, Proof (case studies, results, teardowns) 25%, Point-of-view/industry takes 20%, Behind-the-scenes/personality 10%, Direct promotion 5%. More than 5 pillars means no positioning; fewer than 3 means the feed gets monotonous.

5. **Set cadence and format mix per platform.** Use the minimum-effective-dose table in Frameworks — consistency at a sustainable rate beats bursts. Assign each platform: posts/week, format split (e.g., LinkedIn: 3 text posts, 1 carousel/document, 1 video per week), and the pillar rotation. Cadence must fit the effort budget: estimate real production time (a LinkedIn text post ≈ 30–45 min; a carousel ≈ 60–90 min; an edited short video ≈ 2–4 hours) and show the math. If the math exceeds the budget, cut cadence — never quality.

6. **Adapt the voice per platform.** Keep the same brand character; change the register. Write a 2–3 line voice note per selected platform covering: formality level, sentence length, emoji/slang policy, first-person vs. brand-voice, and one "we sound like / we never sound like" pair. Example: same SaaS brand → LinkedIn: "peer sharing hard-won lessons, no corporate we, 1–3 short paragraphs"; X: "sharp and compressed, strong opinions stated plainly, no hashtags"; TikTok: "energetic, talks to camera like a smart friend, hooks in the first 1.5 seconds."

7. **Design 2–3 growth loops.** Pick from: collaborations (guest posts, podcast swaps, co-hosted lives, duets/stitches — highest-leverage for small accounts because you borrow a warm audience), trend participation (fast-follow formats within 24–48 hours of a trend emerging, only where the trend fits a pillar), comment-led growth (15–20 substantive comments/day on larger accounts in the niche — reliably drives profile visits), and cross-promotion (newsletter ↔ social, see **email-newsletters**). Address engagement pods explicitly if the user asks or is tempted: state the trade-off honestly (see Frameworks) and recommend against them by default.

8. **Build the measurement plan.** Define one north-star metric, 3–5 driver metrics, and 2–3 health metrics per the Measurement Plan template. Set a review cadence: weekly 15-minute pulse check, monthly 1-hour review against benchmarks, quarterly strategy revision. Rule: no format or pillar verdicts until it has ≥10 posts of data — single-post performance is noise. Route dashboard construction to **kpi-dashboard-design** and recurring reports to **analytics-reporting**.

9. **Write the 90-day rollout.** Days 1–14: profiles optimized (bio states who it's for + what they get, pinned post is best proof asset), first content batch produced. Days 15–60: full cadence live, daily engagement routine running, weekly metrics logged. Days 61–90: first data review, kill the worst-performing format, double the best, launch first collaboration.

10. **Assemble the deliverable** per Output format, present it, and offer next steps: **social-content-calendar** to schedule it, and the platform-specific content skills to write it.

## Frameworks & templates

### Platform Selection Scorecard

Score each platform 1–5 on each criterion; multiply by the weight; sum. Select the top scorer(s) per the effort-budget rules in Step 3.

| Criterion | Weight | 5 looks like | 1 looks like |
|---|---|---|---|
| Audience density | 35% | Target buyers actively post/lurk here weekly | Audience technically present but passive |
| Format fit to assets | 25% | User can produce the native format comfortably | Requires skills/gear the user lacks |
| Discovery upside | 20% | Search or algorithmic reach from zero followers | Reach gated by existing follower graph |
| Competitive gap | 10% | Competitors absent or mediocre here | Saturated with strong incumbents |
| Effort per post | 10% | ≤45 min per post | ≥3 hours per post |

**Worked example — B2B SaaS founder selling to heads of ops, 5 hrs/week, camera-shy, no designer:**

| Platform | Audience (35%) | Format fit (25%) | Discovery (20%) | Gap (10%) | Effort (10%) | Total |
|---|---|---|---|---|---|---|
| LinkedIn | 5 → 1.75 | 5 → 1.25 | 3 → 0.60 | 3 → 0.30 | 4 → 0.40 | **4.30** |
| X | 3 → 1.05 | 5 → 1.25 | 3 → 0.60 | 4 → 0.40 | 5 → 0.50 | **3.80** |
| YouTube | 4 → 1.40 | 1 → 0.25 | 5 → 1.00 | 4 → 0.40 | 1 → 0.10 | **3.15** |
| TikTok | 2 → 0.70 | 1 → 0.25 | 5 → 1.00 | 5 → 0.50 | 2 → 0.20 | **2.65** |

Decision: LinkedIn primary, X as repurposing target (rewrite LinkedIn posts as threads/single posts). YouTube: revisit when comfortable on camera or budget allows an editor. TikTok: not now.

### Minimum-effective-dose cadence table

| Platform | Minimum viable | Competitive | Formats that currently earn reach | Content half-life |
|---|---|---|---|---|
| LinkedIn | 2–3 posts/wk | 5 posts/wk | Text posts 900–1,200 chars, document carousels (8–12 slides), native video 30–90s | 24–48 h |
| X | 5 posts/wk | 2–4 posts/day | Single takes <280 chars, threads 5–9 tweets, images/screenshots | 2–6 h |
| Instagram | 3 feed posts/wk + 3–5 Stories/wk | 5 feed/wk + daily Stories | Reels 15–45s, carousels 6–10 slides, caption hook in first 125 chars | 24–48 h (Reels can resurface for weeks) |
| TikTok | 3 videos/wk | 1–2/day | 15–60s talking-head or demo, hook in first 1.5s, on-screen captions | 48 h – 2 wks (algorithmic resurfacing) |
| YouTube | 1 long-form/wk or 3 Shorts/wk | 2 long + 3 Shorts/wk | 8–15 min searchable how-to; Shorts ≤60s | Months–years (search-driven) |
| Facebook | 3 posts/wk | 5–7/wk | Groups > Pages for organic; video and link-free posts | 12–24 h |
| Pinterest | 5 pins/wk | 15–25 pins/wk | Vertical 2:3 idea pins, keyword-rich titles | Months (search-driven) |

Engagement-rate benchmarks to calibrate expectations (organic, engagement ÷ followers): LinkedIn personal profiles 2–5%, LinkedIn company pages 1–2%, Instagram 0.5–1.5% (Reels reach often 2–10x follower count when they work), TikTok 3–6% of views, X 0.5–1% for accounts under 10k followers, Facebook Pages 0.05–0.2%. Below half the low end for 4+ consecutive weeks = content or targeting problem, not an algorithm excuse.

### Content pillar template (fill in per pillar)

```
Pillar name:        ______ (2–4 words, e.g., "Ops Teardowns")
Audience pain:      ______ (the specific problem this speaks to)
Business objective: ______ (awareness / trust / conversion / hiring)
Weight:             ___% of posts
Example topics (5): 1.____ 2.____ 3.____ 4.____ 5.____
Best formats:       ______ (e.g., LinkedIn carousel + X thread)
Proof it can work:  ______ (a competitor/creator post in this vein that performed)
```

**Worked example:** Pillar: "Ops Teardowns" · Pain: heads of ops can't tell which workflows are worth automating · Objective: trust → demo requests · Weight: 25% · Topics: (1) teardown of a 14-step invoice approval we cut to 3, (2) the real cost of a weekly status meeting, (3) before/after of an onboarding checklist, (4) 5 automation ideas ranked by payback period, (5) what our churned customer's ops stack looked like · Formats: LinkedIn document carousel, repurposed as X thread · Proof: similar workflow-teardown carousels from ops-niche creators regularly clear 200+ reactions on LinkedIn.

### Engagement pods — the honest trade-off

Pods (groups that agree to like/comment on each other's posts) buy a short-term reach bump but: (a) the algorithm learns your content appeals to pod members, not buyers, so distribution skews wrong; (b) pod comments are visibly generic and erode credibility with the exact prospects you want; (c) LinkedIn and Instagram actively detect coordinated engagement and can suppress accounts; (d) they poison your data — you can no longer tell which content genuinely resonates. Acceptable substitute: a small (5–10 person) circle of genuine peers who share drafts and comment substantively when they actually have something to say. Recommend against classic pods by default.

### Per-platform voice note template (fill in per selected platform)

```
Platform:            ______
Register:            ______ (e.g., peer-to-peer / expert-casual / high-energy)
Sentence length:     ______ (e.g., mostly under 15 words; one-line paragraphs)
Emoji & slang:       ______ (e.g., max 1 emoji per post; no slang / slang OK)
Person:              ______ (first-person "I" / team "we" / brand voice)
We sound like:       ______ (one sentence in-voice)
We never sound like: ______ (one sentence of the failure mode, e.g., press-release corporate)
```

### Collaboration pitch mini-template (growth loop starter)

```
Subject/DM opener: Loved your [specific post/episode] on [topic]
1. Specific compliment proving you actually consumed their content (1 sentence)
2. The swap: "I'd like to propose [guest post / podcast swap / co-hosted live /
   duet] on [topic both audiences care about]"
3. What's in it for them: audience size/fit, an asset you bring, or promotion
   you'll do (1 sentence, with a number if you have one)
4. Low-friction close: "Worth a 15-minute call, or happy to send a one-pager."
```

Target list rule: pitch accounts 1–5x your size (peers say yes; 100x accounts ignore you). Aim for 10 pitches per month; a 20–30% response rate is normal when step 1 is genuinely specific.

### Measurement plan template

```
North-star metric: ______ (business outcome, e.g., demo requests from social/month)
Target: ______ by day 90

Driver metrics (leading indicators, check weekly):
- Reach/impressions per post (trend, 4-week rolling average)
- Saves + shares per post (strongest intent signals on IG/LinkedIn/TikTok)
- Profile visits → follows conversion (healthy: 5–10%)
- Link clicks or bio clicks per week
- Inbound DMs / comment questions from target-persona accounts

Health metrics (check monthly):
- Engagement rate vs. platform benchmark (table above)
- Posting consistency: % of planned posts actually shipped (target ≥90%)
- Follower quality: % of new followers matching target persona (spot-check 20)

Review cadence: weekly 15-min pulse / monthly 1-hr review / quarterly strategy revision
Kill rule: any format below half of benchmark after 10 posts gets cut or reworked
Attribution: UTM-tag every link; ask "how did you hear about us?" on every demo/signup form
```

## Output format

Deliver a single strategy document with these sections, in this order:

1. **Executive summary** — 3–5 sentences: goal, selected platforms, cadence, and the one number that defines success at day 90.
2. **Goal & north-star metric** — with the day-90 target.
3. **Audience snapshot** — who, where they spend time, scroll vs. search behavior (link to **customer-personas** output if it exists).
4. **Platform decisions** — completed scorecard table, selected platforms with rationale, and explicit "not now" list with revisit triggers.
5. **Content pillars** — 3–5 completed pillar templates with weights summing to 100%.
6. **Cadence & format mix** — per-platform table (posts/week × format × pillar rotation) plus the production-time math proving it fits the effort budget.
7. **Voice notes per platform** — 2–3 lines each.
8. **Growth loops** — 2–3 loops with a concrete first action for each (e.g., "list 10 podcast swap targets by day 21").
9. **Measurement plan** — completed template.
10. **90-day rollout** — three phases with dated milestones.
11. **Assumptions & open questions** — every default assumed in Inputs, listed for the user to confirm.

Format as markdown. Keep the whole document under ~1,500 words excluding tables so it gets read, not filed.

## Quality checklist

Verify every item before delivering; fix any failure.

- [ ] North-star metric is a business outcome (leads, sales, signups, hires), not followers or impressions.
- [ ] Platform count obeys the effort-budget rules (≤5 hrs/wk → max 1 primary + 1 repurposing target).
- [ ] Every rejected platform has a "not now" line with a concrete revisit trigger.
- [ ] Scorecard scores are justified by the user's actual audience and assets, not generic platform reputations.
- [ ] There are 3–5 pillars and their weights sum to exactly 100%.
- [ ] Each pillar has 5 non-overlapping example topics and a named pain point.
- [ ] Cadence production-time math is shown and totals ≤ the stated weekly effort budget.
- [ ] Every stated cadence meets or exceeds the platform's minimum viable dose from the table.
- [ ] Voice notes exist for every selected platform and include one "we never sound like" line each.
- [ ] At least two growth loops are specified, each with a first action and owner.
- [ ] Measurement plan includes saves/shares or another intent metric, not just likes.
- [ ] The 10-post minimum before format verdicts and the kill rule are stated.
- [ ] UTM tagging or a "how did you hear about us?" attribution mechanism is included.
- [ ] All assumed defaults are listed in the Assumptions section.
- [ ] No dated tactics presented as permanent truths — platform-specific reach tactics are labeled "as of now."

## Common mistakes

- **Choosing platforms by the founder's personal feed.** The user scrolls TikTok, so they want TikTok — but their buyers are heads of procurement on LinkedIn. Score audience density first; personal familiarity only counts inside "format fit."
- **Spreading 5 hours across 4 platforms.** Sub-critical effort on every platform yields zero compounding anywhere. One platform posted 4x/week beats four platforms posted 1x/week in virtually every case.
- **Follower count as the goal.** 10,000 followers who never buy is a worse outcome than 800 followers containing 50 buyers. If the strategy's success metric can be inflated by giveaways or follow-for-follow, it's the wrong metric.
- **Confusing feed-native and search-native platforms.** Treating YouTube like X (topical hot takes) wastes its multi-year search compounding; treating X like YouTube (evergreen explainers only) misses that X rewards timeliness and conversation.
- **Pillars defined by what the company wants to say, not what the audience wants to consume.** "Our product updates" is not a pillar; it's the 5% promotion slice. If more than 15% of content is about the company itself, the feed becomes a brochure.
- **Copying a big account's playbook at small-account scale.** A 500k-follower creator can post one bare paragraph and earn reach; a 300-follower account needs discovery formats (search content, carousels, collabs, comments on larger accounts) because their follower graph provides no distribution.
- **Judging formats on 1–3 posts.** Social performance is high-variance; a great format can flop three times. Enforce the 10-post minimum and compare 4-week rolling averages, not single posts.
- **Joining engagement pods to fake momentum.** It corrupts the algorithm's audience model and the user's own data. If the numbers need to lie to look good, the strategy has already failed.
- **Setting launch-week cadence as permanent cadence.** Users commit to daily posting in a burst of motivation, burn out by week 3, and the account goes silent — which reads worse than a steady 3x/week. Set cadence at what's sustainable in the user's worst week.
- **No engagement budget.** Posting without replying to comments within the first 1–2 hours or commenting on others' content treats social as a broadcast channel; the platforms reward accounts that behave socially. Reserve 20–30% of the effort budget for engagement, not creation.
