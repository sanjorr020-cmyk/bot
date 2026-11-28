---
name: biz-influencer-marketing
description: "Plans and executes influencer marketing campaigns end-to-end: finding and vetting creators (engagement math, fake-follower checks), outreach and rate negotiation, campaign briefs, usage rights and FTC disclosure compliance, UTM/promo-code tracking, and post-campaign performance evaluation. Use when the user asks to find influencers or creators for their brand, vet an influencer's audience quality, figure out what to pay a creator, write an influencer outreach message or negotiate rates, draft a campaign brief or creator contract terms, set up tracking for an influencer campaign, decide between gifting vs paid vs affiliate deals, or measure whether an influencer campaign worked."
---

# Influencer Marketing

Guide the user through the full lifecycle of an influencer campaign: define goals, find and vet creators whose audiences actually match the target customer, negotiate fair compensation, brief creators so content converts without killing authenticity, stay compliant on disclosure and usage rights, instrument tracking before launch, and evaluate results against concrete benchmarks. The default failure mode in this domain is paying for reach that is fake, mismatched, or unmeasured — every step below exists to prevent one of those three.

## When to use this skill

Use for:
- Building a creator shortlist and vetting audience quality
- Pricing and negotiating creator deals (flat fee, affiliate, gifting, hybrid)
- Writing outreach messages to creators and their managers
- Drafting campaign briefs, deliverable specs, and usage-rights terms
- Setting up UTM links, promo codes, and attribution for creator content
- Post-campaign reporting and deciding which creators to renew

Do NOT use for:
- Ongoing affiliate program design (commission tiers, cookie windows, network selection) → **affiliate-program**
- Formal brand partnerships, co-marketing, or channel deals → **partnership-development**
- Pitching journalists or publications → **media-outreach**
- The brand's own organic social strategy or posting calendar → **social-media-strategy**, **social-content-calendar**
- Paid amplification of creator content beyond basic whitelisting notes → **meta-ads**
- Deep attribution modeling across all channels → **analytics-reporting**, **funnel-analysis**

## Inputs to gather

Ask the user for these; apply the defaults when they don't know:

1. **Campaign goal** — awareness, direct sales, content generation (UGC for ads), or app installs. Default: direct sales with UGC rights as secondary value.
2. **Product, price point, and margin** — needed to compute break-even and pick a deal structure. A $30 DTC product and a $500 B2B tool need different creators and deals.
3. **Target customer** — demographics, interests, platforms they actually use. If a **customer-personas** doc exists, pull from it.
4. **Budget** — total and per-creator ceiling. Default assumption if unknown: $2,000–$10,000 test budget across 5–10 micro creators rather than 1 big name.
5. **Platform** — default by goal: TikTok/Reels for awareness and impulse products, YouTube for considered purchases and evergreen search traffic, Instagram for lifestyle/visual brands, Twitch/YouTube for gaming, LinkedIn/newsletters for B2B.
6. **Timeline** — default: 2 weeks sourcing/outreach, 2 weeks negotiation/contracting, 2–3 weeks content production and revisions, then flight. ~6–8 weeks end to end.
7. **Existing assets** — prior creator relationships, brand guidelines, promo-code infrastructure, affiliate platform, any past campaign data.
8. **Geography and language** — affects rates (US/UK/AU rates run 2–4x higher than most other markets) and disclosure law (FTC in the US, ASA in the UK, EU influencer rules).

## Process

### 1. Define success before sourcing
Set one primary KPI and a numeric target: e.g., "≤ $40 blended CAC from creator traffic," "≥ 500,000 tracked video views at ≤ $25 CPM," or "20 usable UGC assets at ≤ $150 each." Compute the break-even math up front: if margin per sale is $25 and a creator costs $500, they must drive 20 sales to break even — sanity-check that against their audience size before signing anything.

### 2. Build a sourcing longlist (target 3–5x the number you'll hire)
- Search platform-native: hashtags, keyword search, "customers also watched," competitor tags and comment sections.
- Mine the brand's own followers and customers first — creators who already use the product convert best and charge less.
- Check who competitors work with (their tagged posts, #ad content) — those creators are proven to accept deals in the category.
- Pick the right tier for the goal:

| Tier | Followers | Typical ER | Best for |
|---|---|---|---|
| Nano | 1K–10K | 4–8% (IG) | Gifting, UGC, hyper-local |
| Micro | 10K–100K | 2–4% | Conversion campaigns, best ROI per dollar |
| Mid | 100K–500K | 1.5–2.5% | Awareness + conversion blend |
| Macro | 500K–1M | 1–2% | Reach, launches |
| Mega/Celebrity | 1M+ | 0.5–1.5% | Mass awareness, PR moments |

Default recommendation: micro creators, 5–10 of them, unless the goal is pure awareness.

### 3. Vet every shortlisted creator (the gate step — never skip)
Run each candidate through the Creator Vetting Scorecard (see Frameworks). The two quantitative checks:

**Engagement rate (ER):**
- Instagram/TikTok: `ER = (likes + comments + saves/shares if visible) ÷ followers × 100`, averaged over the last 10–12 non-viral posts (drop the single highest outlier).
- YouTube: use `median views of last 10 videos ÷ subscribers`; healthy is 10–20%+. Also check like-to-view ratio (≥ 3–4% is good).
- Flags: IG ER below 1% at under 100K followers is weak; above 10% with generic comments is suspicious. TikTok ER runs higher — 3–9% is normal for micro accounts; judge TikTok primarily on median views, not followers.

**Fake-follower / bought-engagement checks (fail any 2 → reject):**
- Follower growth history shows vertical spikes followed by flat or declining lines (check with a free audit tool like HypeAuditor/Modash free tiers, or Social Blade for growth curves).
- Comments are generic ("🔥🔥", "nice pic", "great content") or from accounts with no posts/profile photos — sample 20 comments on 3 posts.
- Engagement is high but views/reach are low relative to likes (likes > views is impossible organically).
- Audience geography mismatches the creator's content language/location (e.g., US lifestyle creator with 60% followers in follower-farm-heavy regions).
- Like counts are nearly identical across every post (organic engagement varies ±30–50%).
- Followers-to-following ratio near 1:1 at scale suggests follow/unfollow growth.

**Qualitative checks:** brand-safety scan of last 6 months of content and recent controversies; past sponsored content — did it get comments referencing the product (buying signal) or a visible engagement drop vs organic posts (audience rejects ads)? More than 1 in 4 recent posts being sponsored means saturated audience — deprioritize.

**Ask for a screenshot of their platform analytics** (audience demographics, reach, and for IG: story views) before agreeing on price. Refusal to share is a soft red flag; treat their follower count as unverified.

### 4. Choose the deal structure
Decision rules:
- **Gifting only** — product value ≥ ~$50–100 and creator is nano/micro with genuine category interest. Expect a 10–30% post-through rate on gifting; send to 3–5x as many creators as posts you need. Never demand deliverables for gifting alone — ask, don't require.
- **Affiliate/commission only** — works only if the creator already loves the product or the commission is rich (15–30% of sale). Most established creators reject pure affiliate; offering it as the only comp to a 100K+ creator reads as unserious.
- **Flat fee** — the standard for guaranteed deliverables. Use when you need specific content, timing, or usage rights.
- **Hybrid (recommended default for sales goals)** — reduced flat fee + 10–20% commission or $X per sale via their code. Aligns incentives and lowers your downside.

**Pricing benchmarks (US market, 2025–26; halve for many non-US markets):**
- Instagram: rough heuristic $100–250 per 10K followers per feed post; Reels 1.2–1.5x that; a 3-frame Story set roughly 50–70% of a post.
- TikTok: $100–200 per 10K followers per video for micro/mid; strong TikTok creators price on average views — expect $15–40 CPM on their median views.
- YouTube dedicated video: $30–80 CPM on median views (a creator with 50K median views: $1,500–4,000); a 60–90-second integration is typically 40–60% of a dedicated video.
- UGC-only (content for your ads, no posting to their audience): $150–500 per video regardless of following.
Adjust up for exclusivity, whitelisting, and usage rights (see step 6); adjust down 10–25% for multi-post packages.

### 5. Outreach and negotiation
- Send outreach via email if listed (check bio/link-in-bio), else platform DM. Keep the first message under 125 words: who you are, why *specifically* this creator (reference a real post), what the collaboration is, and one clear next step. Template below. For deliverability mechanics and follow-up cadence, **cold-email-outreach** and **follow-up-sequences** apply — but keep the creator-specific personalization rules here.
- Follow up once after 4–5 days, then once more after another week. Three touches max.
- Expect a 10–25% reply rate to well-personalized outreach; 1–5% to obvious mass blasts.
- Negotiation levers other than price: number of deliverables, usage rights duration, exclusivity scope, payment terms (50% upfront / 50% on posting is standard; net-30 after posting is acceptable for larger brands), timeline flexibility, product bundles.
- If a creator quotes 2x+ your benchmark: ask what the rate includes (usage? whitelisting?), counter with a package (e.g., 3 videos over 3 months at a lower per-unit rate), or add performance upside instead of raising the flat fee.
- Creators with managers/agents: expect 10–20% higher quotes and slower cycles; get all terms in writing regardless.

### 6. Contract essentials — usage rights and compliance
Put these in writing (an email thread both parties confirm is enforceable for small deals; use a one-page agreement above ~$1,000):
- **Deliverables:** exact count, format, length, platform, and posting window (date range, not a single day).
- **Usage rights:** default organic license = creator posts on their channels, brand may reshare organically with credit. **Paid usage (running their content as ads) and whitelisting are separate line items**: typical pricing is +25–50% of the content fee per 30 days of paid usage, or +75–100% for 6–12 months. Perpetual, all-media buyouts run 2–4x the base fee. Never assume ad rights — creators can and do issue takedowns.
- **Exclusivity:** category exclusivity (no direct competitors) for 30–90 days typically adds 10–30% to the fee. Don't pay for exclusivity on awareness-only campaigns.
- **Approval:** one revision round included; 48–72h brand review window; creator retains final voice.
- **Disclosure (non-negotiable):** US FTC requires clear, unmissable disclosure — #ad or "Paid partnership with [brand]" at the *start* of the caption (not buried after "more"), verbal disclosure in videos where the endorsement is verbal, and platform paid-partnership tags *in addition to*, not instead of, #ad where ambiguous. #sp, #collab, #ambassador alone are non-compliant. Gifted product still requires disclosure ("gifted" / #gifted minimum). The brand is liable for creator non-compliance — put disclosure requirements in the brief and contract, and check the live post.
- **Kill/repost clauses:** what happens if content underperforms or the creator has a controversy (termination for brand-safety breach, no reshoot obligation beyond one revision).

### 7. Brief the creator (use the template below)
The brief should constrain the *message*, not the *execution*. Mandatory: key message, required disclosure, dos/don'ts, link/code, deadline. Leave hook, format, and voice to the creator — their content outperforms scripted reads by wide margins. Briefs over 2 pages get skimmed; keep to one page plus product info.

### 8. Instrument tracking BEFORE anything goes live
Set up all three layers; creator traffic is notoriously leaky (link-in-bio friction, dark social, delayed purchases):
- **UTM links:** one unique link per creator per platform. Convention: `utm_source=<platform>`, `utm_medium=influencer`, `utm_campaign=<campaign-name>`, `utm_content=<creator-handle>`. Shorten via the brand's link shortener. Verify each link resolves and fires in GA4 before sending.
- **Promo codes:** unique memorable code per creator (`ANNA15`, not `INFL-0032-Q3`), same discount for all to keep comparisons clean. Codes catch conversions that links miss (people who search the brand later).
- **Post-purchase survey:** add "How did you hear about us?" with creator/platform options — typically captures 1.5–3x the conversions that links + codes show. Use it as the reconciliation layer.
Also record baseline branded-search volume and direct traffic for the flight window comparison.

### 9. Launch, monitor, evaluate
- Within 24h of each post: verify disclosure is compliant, link/code works, and screenshot the post (content gets deleted; you need records).
- Ask creators for platform analytics screenshots (reach, views, link taps) 3–7 days after posting — put this obligation in the brief.
- Evaluate at day 7 (early read) and day 30 (settled read; considered purchases lag). Score each creator with the evaluation framework below.
- Renew the top ~20–30% into ongoing relationships — repeat collaborations convert 1.5–2x better than one-offs because the audience needs 2–3 exposures to trust the endorsement.

## Frameworks & templates

### Creator Vetting Scorecard (score each 1–5; hire at ≥ 20/30, reject any creator with a 1 on rows 1, 2, or 6)

| # | Criterion | What a 5 looks like |
|---|---|---|
| 1 | Audience match | Demographics screenshot matches target persona ≥ 60% |
| 2 | Engagement quality | ER at/above tier benchmark; comments are specific and conversational |
| 3 | Authenticity signals | Smooth growth curve, varied like counts, real commenters |
| 4 | Content fit | Style suits the brand without heavy direction; past sponsored posts feel native |
| 5 | Sponsored-post performance | Prior #ad posts hold ≥ 70% of organic engagement |
| 6 | Brand safety | 6-month content scan clean; no unresolved controversies |

### Outreach message template (first touch, < 125 words)

```
Subject: [Brand] x @[handle] — [product] collab?

Hi [Name],

I'm [name] from [brand] — we make [one-line product description].
Your [specific recent post, e.g., "video on packing carry-on-only
for 2 weeks"] is exactly how our customers think about [category].

We'd love to work with you on [campaign concept, e.g., "a Reel
showing your real travel-prep routine featuring our kit"]. Paid
collaboration — happy to share budget once we know your rates.

Could you send your rate card (or manager's contact) for
[deliverable, e.g., "1 Reel + 3 Stories"]? We're booking for
[month].

Either way, keep making great stuff.

[Name], [role], [brand] — [website]
```

### One-page campaign brief template

```
CAMPAIGN BRIEF — [Brand] x [Creator]

About us: [2 sentences: what the brand is, who it's for]
Campaign goal: [awareness / sales / UGC] — [one-line why-now]

Deliverables: [e.g., 1 TikTok video 30–60s + 1 IG Story with link]
Posting window: [date range, e.g., Sep 8–14]
Draft due: [date, ≥ 5 business days before window]

Key message (must come through, in your own words):
- [Single most important claim, e.g., "sets up in under 2 minutes"]

Talking points (pick 2–3, your choice):
- [benefit 1] / - [benefit 2] / - [benefit 3] / - [origin story]

Do:
- Show the product in real use for at least [X] seconds
- Use your unique link [URL] and code [CODE] (X% off) in caption + verbally
- Disclose: "#ad" at the start of the caption + platform paid-partnership tag
  + verbal "thanks to [brand] for sponsoring" if you speak in the video

Don't:
- Claim [prohibited claims, e.g., medical/financial outcomes]
- Show competitor products in frame
- Bury the disclosure below the fold

Approval: send draft to [email]; we'll reply within 48h; one revision
round included.
Usage: [e.g., "Brand may reshare organically with credit. Paid usage
not included."]
Payment: [amount], [50% on signing / 50% within 7 days of posting].
Analytics: please send a screenshot of post insights 5 days after
posting.
```

### Performance evaluation framework (per creator, day-30)

Compute and tabulate:
- **CPM** = fee ÷ (views/reach ÷ 1000). Good: ≤ $25 TikTok/Reels, ≤ $50 YouTube integration.
- **CPE** (cost per engagement) = fee ÷ total engagements. Good: $0.10–0.50 micro, up to $1 mid-tier.
- **Tracked CAC** = fee ÷ (link conversions + code redemptions). Compare to blended CAC target; then apply survey multiplier (if survey attributes 2x the tracked conversions, note "true CAC likely ~half of tracked").
- **UGC value offset** = (number of usable assets × what UGC-only production would have cost, ~$150–500/asset). Subtract from fee for adjusted CAC.
- **Halo check:** branded search + direct traffic during flight week vs 4-week baseline.
- Verdict per creator: **Renew** (beat CAC or CPM target), **Renegotiate** (within 1.5x of target — cut fee or shift to hybrid), **Drop** (worse than 1.5x with no halo signal).

### Worked example — should we sign this creator?

Creator: 45K IG followers. Last 10 posts (outlier dropped): avg 1,350 likes + 85 comments → ER = (1,435 ÷ 45,000) × 100 = **3.2%** — healthy for the micro tier. Quote: $700 for 1 Reel + 2 Stories, organic usage only. Her median Reel gets 60K views → expected CPM = 700 ÷ 60 = **$11.67** — well under the $25 bar. User's product margin: $28/sale → break-even = 700 ÷ 28 = **25 sales**, i.e., 0.04% of expected viewers must convert — plausible for a matched audience. Comments sampled: specific, real accounts. Growth curve: steady. **Decision: sign, propose hybrid** — $600 flat + $5/sale via code, and offer +$250 for 60 days of paid usage rights on the Reel.

## Output format

Deliver campaign work as a single document with these sections (omit sections the user didn't ask for):
1. **Campaign summary** — goal, primary KPI with numeric target, budget, timeline, break-even math.
2. **Creator shortlist table** — handle, platform, followers, ER, median views, vetting score /30, estimated fee, expected CPM, one-line rationale each.
3. **Deal structure recommendation** — per creator or per tier, with negotiation ceiling and fallback terms.
4. **Ready-to-send outreach messages** — personalized per creator, not one generic blast.
5. **Campaign brief** — filled-in one-pager per the template.
6. **Tracking plan** — exact UTM strings, code list, survey question, baseline metrics to record.
7. **Contract term sheet** — deliverables, usage rights, exclusivity, disclosure requirements, payment terms.
8. **Evaluation plan** — the day-7/day-30 metrics table pre-built with formulas and pass thresholds.

For a vetting-only ask, deliver just the scorecard table with evidence per row and a hire/pass verdict. For an evaluation-only ask, deliver the performance table with verdicts per creator.

## Quality checklist

- [ ] Primary KPI has a numeric target and the break-even math is shown (fee ÷ margin = required sales)
- [ ] Every recommended creator has a computed ER from their actual recent posts, not an assumed one
- [ ] At least 2 fake-follower checks were run per shortlisted creator, with findings noted
- [ ] Creator tier matches the goal (micro for conversion tests, not a single macro bet)
- [ ] Deal structure is justified against goal and margin, not defaulted to flat fee
- [ ] Quoted/estimated fees are benchmarked (CPM on median views computed, not follower-count-only)
- [ ] Outreach messages reference a specific real post per creator and are under 125 words
- [ ] Usage rights are explicitly scoped (organic vs paid, duration, platforms) with a price attached to paid usage
- [ ] Disclosure requirements are stated in the brief and contract terms, platform-correct, and non-buried
- [ ] Every creator has a unique UTM link AND a unique promo code, and a survey backstop exists
- [ ] Brief constrains message and compliance but leaves creative execution to the creator, ≤ 1 page
- [ ] Evaluation plan includes both tracked metrics and halo/survey reconciliation
- [ ] Posting window, draft deadline, and analytics-screenshot obligation appear in the brief
- [ ] No pricing, ER, or benchmark number appears without a stated range or source basis

## Common mistakes

- **Buying followers, not audiences.** Paying on follower count when median views is the real inventory — a 200K account with 8K median views is an 8K-reach buy.
- **Skipping the analytics screenshot ask.** Public metrics hide reach collapse; creators with dead audiences count on you not asking.
- **Scripting the content.** Word-for-word scripts produce content the audience scrolls past; the creator knows their hook patterns better than the brand does.
- **Assuming ad rights.** Running creator content as paid ads without a paid-usage license — this triggers takedowns, invoices, and burned relationships.
- **Burying disclosure or accepting #sp.** The FTC fines brands, not just creators; "partner" tags alone don't satisfy clear-and-conspicuous.
- **One mega-creator instead of a portfolio.** A single $10K bet has huge variance; ten $1K micro deals give a distribution you can learn from and a renewal pipeline.
- **Judging at day 3.** Creator-driven purchases lag 1–4 weeks, especially for products over $50; killing the channel on day-3 data undercounts by half or more.
- **Link-only attribution.** Instagram viewers don't click bio links; without codes and a post-purchase survey, creator CAC looks 2–3x worse than reality.
- **Same generic outreach to 200 creators.** Reply rates collapse below 5% and the brand gets screenshot-mocked; 20 personalized messages outperform 200 blasts.
- **Gifting with demands.** Requiring deliverables for free product violates platform norms (and disclosure still applies); it earns public callouts, not posts.
- **Ignoring sponsored-post decay.** A creator posting #ad content weekly has trained their audience to skip it — check the sponsored-to-organic ratio before paying full rate.
- **No screenshot archive.** Deleted posts leave no proof of delivery or compliance; screenshot every live deliverable within 24 hours.
