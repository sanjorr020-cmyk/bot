---
name: product-launch
description: "Plans and runs product launches end-to-end: assigns a launch tier (major/minor/silent), builds a T-minus timeline, coordinates the channel bundle (Product Hunt, email, social, PR, community, in-app), produces the asset checklist and day-of runbook with owners, and structures the post-launch review. Use when the user says things like: \"plan our product launch\", \"we're launching a new feature next month\", \"build a launch checklist\", \"help me launch on Product Hunt\", \"what's our launch timeline\", \"write a day-of launch runbook\", \"how big should this launch be\", \"run a launch retrospective\", or \"we shipped something and nobody noticed\"."
---

# Product Launches

Turn a shipping date into a coordinated market moment. This skill produces a complete launch plan: a tier decision that sizes the effort, a T-minus timeline working backward from launch day, a channel bundle matched to the tier, an asset checklist with owners and deadlines, an hour-by-hour day-of runbook, and a post-launch review that captures what to repeat and what to fix. The output is an operational document a team can execute without you in the room — every task has an owner, a deadline, and a definition of done.

## When to use this skill

Use when the user needs to plan, coordinate, or review the launch of a product, feature, version, or rebrand — anything with a ship date that deserves external attention.

Do NOT use for:
- Overall market entry strategy, positioning, pricing, and segment selection — use **go-to-market** (a launch is one event inside a GTM strategy)
- Quarterly/annual marketing planning — use **marketing-plan**
- Writing the press release or media pitch itself — use **press-releases** and **media-outreach** (this skill schedules them and defines the embargo; those skills write them)
- Deciding what to build or writing specs — use **product-requirements**
- Ongoing social presence beyond launch week — use **social-media-strategy** and **social-content-calendar**
- The launch landing page's conversion mechanics — use **landing-page-cro**
- Standing email programs — use **email-marketing** (this skill defines the launch sends; that skill covers list health and automation)

## Inputs to gather

Ask for these before drafting. Where the user doesn't know, apply the default and state the assumption in the plan.

1. **What is launching?** Product, feature, major version, pricing change, rebrand. One sentence on what's new and who it's for.
2. **Target launch date and flexibility.** Default: pick a Tuesday or Wednesday 4+ weeks out (avoid Mondays, Fridays, holiday weeks, and days adjacent to major industry events unless piggybacking deliberately).
3. **Audience size today.** Email list size, social followers, active users, community members. Default assumption if unknown: small (<5,000 combined reach) — plan accordingly.
4. **Team available.** Who can own workstreams? Default: solo founder or 2-person team — collapse owner roles as needed.
5. **Business goal of the launch.** Signups, revenue, waitlist, press coverage, upsell to existing users. Default: new signups.
6. **Success number.** A specific target (e.g., 500 signups in launch week, top-5 on Product Hunt, 3 press mentions). If the user has no baseline, set a target of 3-5x their normal weekly signup volume for a major launch.
7. **Constraints.** Budget, embargoes, app-store review timelines (Apple review: budget 1-3 days, plan resubmission buffer), dependency on another company's date.
8. **Prior launch data.** Anything from the last launch to beat or avoid repeating.

## Process

1. **Assign the launch tier.** Score the launch using the Tier Rubric (see Frameworks). Do not let the team's excitement set the tier — the rubric does. State the tier and its consequences explicitly: a Tier 3 launch gets a changelog entry and an in-app note, not a Product Hunt campaign. If the user pushes back, re-score together; the most common failure is running Tier 1 machinery for Tier 2 news, which burns the audience's attention before the launch that deserves it.

2. **Set the launch date and freeze it.** Work backward from constraints (app review, PR embargo lead time — journalists need 5-10 business days under embargo; see **media-outreach**). Once the T-minus timeline starts, a date slip cascades through every channel: name a single owner (usually PM or founder) with sole authority to move the date, and a rule that any slip announced inside T-7 days triggers a full runbook re-plan, not an ad-hoc shuffle.

3. **Define the one-sentence launch message.** Before any asset is made, write the core message: "[Product] now lets [audience] [outcome] without [old pain]." Every channel asset must be a variation of this sentence. If positioning is unclear, stop and use **brand-messaging** first — launching an unclear message loudly just amplifies confusion.

4. **Build the T-minus timeline.** Instantiate the timeline template (see Frameworks) for the chosen tier. Tier 1: start at T-6 weeks. Tier 2: T-3 weeks. Tier 3: T-1 week. Assign an owner and a definition-of-done to every line. Cut lines the team can't staff rather than leaving them ownerless — an ownerless task is a silent no.

5. **Select the channel bundle.** Match channels to tier and audience:
   - **Product Hunt** — Tier 1, or Tier 2 for dev/design/startup audiences. Skip it if the target buyer isn't on PH (e.g., local services, enterprise procurement); a #14 finish is worse than not launching there.
   - **Email** — every tier. Existing users and list are the highest-converting channel; segment "announcement" (all) from "activation" (users the feature affects).
   - **Social** — every tier, scaled: Tier 1 gets a week of content per platform (see **twitter-x-content**, **linkedin-content**); Tier 3 gets one post.
   - **PR** — Tier 1 only, and only if there's a genuinely newsworthy angle (funding, category-first, notable data). Coordinate embargo via **media-outreach**.
   - **Community** — owned community (Slack/Discord) at every tier; external communities (relevant subreddits, Hacker News "Show HN", niche forums) at Tier 1-2, following each community's self-promotion norms, posted by a genuine member of that community.
   - **In-app** — every tier. Banner/modal/changelog for Tier 1-2, changelog only for Tier 3. Cap in-app interruption: one modal max, dismissible, shown once.
   For each selected channel, record: owner, publish time, primary link (with UTM parameters: `utm_source={channel}&utm_medium={type}&utm_campaign={launch-slug}`), and the metric it's accountable for.

6. **Produce the asset checklist.** Generate the checklist (see Frameworks) filtered to the chosen channels. Set asset deadlines at T-7 days minimum — assets finishing on launch morning is the top cause of day-of chaos. Demo video: 60-90 seconds, first 5 seconds must show the product doing the thing (see **short-form-video** for cutting it into social clips).

7. **Prepare Product Hunt specifics (if selected).** Tagline max 60 characters, benefit-first, no buzzwords. Gallery: first image 1270×760px and self-explanatory (it's the thumbnail everywhere); 4-6 images total; optional 30-60s video. Maker comment drafted in advance: the origin story, what's different, one honest limitation, and a question inviting feedback. Launch at 12:01 AM Pacific to get the full 24-hour voting window. Line up 10-20 genuine supporters to engage in the first 4 hours with real comments — but never ask for upvotes directly or run upvote chains; PH detects and penalizes coordinated voting. Hunter selection matters far less than it used to; self-hunting is fine.

8. **Write the day-of runbook.** Instantiate the runbook template (see Frameworks): hour-by-hour, every entry with an owner. Include a monitoring rotation (who watches PH comments, social replies, support inbox, error dashboards, signup funnel) and an escalation path: who can declare an incident, and the pre-drafted "we're aware and fixing" holding statement for each channel.

9. **Define the go/no-go gate.** At T-2 days, hold a 30-minute go/no-go: product stable in production behind a flag, all assets live-linked and clicked-through, tracking verified end-to-end (fire a test conversion and see it land in analytics), support briefed with FAQ, rollback plan named. Any "no" on the first three is a no-go. A slipped launch is a Tuesday problem; a broken launch is a reputation problem.

10. **Execute launch day.** Follow the runbook. The owner's job on the day is reallocation, not creation: shift effort toward the channel that's working (e.g., if HN front page hits, prioritize answering comments there over scheduled tweets). Post metrics to the team at midday and end of day.

11. **Run the sustain week (T+1 to T+7).** Launches die when the team goes silent on day 2. Schedule: day 2 metrics-or-story social post, day 3 follow-up email to non-openers with a changed subject line (typically recovers 30-50% additional opens), a "what we learned launching X" post, and repurposing of launch assets (see **content-repurposing**).

12. **Hold the post-launch review at T+7 to T+14.** Use the review template (see Frameworks). Compare every channel's actual against target, capture 3-5 keep/change decisions, and write the next launch's first draft assumptions. File it where the next launch planner will find it.

## Frameworks & templates

### Launch Tier Rubric

Score one point for each "yes":
- Changes what a prospect would say the product *is* (new category, new core capability)?
- Affects >50% of the user base or opens a new segment?
- Credible press angle (first-in-category, funding, striking data, big-name partner)?
- Direct revenue lever (new pricing tier, new paid product)?
- Competitive response likely (you want to control the narrative)?

**4-5 points → Tier 1 (Major):** full channel bundle, T-6 week timeline, PR, Product Hunt, launch event or livestream optional. Budget most companies can sustain 2-4 Tier 1 launches per year.
**2-3 points → Tier 2 (Minor):** email + social + community + in-app, T-3 week timeline, no PR, PH optional.
**0-1 points → Tier 3 (Silent):** changelog entry, in-app note, optional single social post, T-1 week. Silent does not mean unshipped comms — users who asked for the feature get a personal email (great retention moment; see **churn-prevention**).

### T-minus timeline template (Tier 1 shown; compress for lower tiers)

```
T-6 wks  Tier decision, date freeze, success metric set ......... Owner: PM
T-6 wks  One-sentence launch message approved ................... Owner: Marketing
T-5 wks  Channel bundle + budget locked ......................... Owner: Marketing
T-5 wks  Landing page copy drafted (see website-copywriting) .... Owner: Marketing
T-4 wks  Demo video scripted and shot ........................... Owner: Design/Video
T-4 wks  PR pitch + press release drafted ....................... Owner: PR/Founder
T-3 wks  Landing page live on staging; email drafts done ........ Owner: Marketing
T-3 wks  Press outreach under embargo begins .................... Owner: PR/Founder
T-2 wks  All visual assets final (PH gallery, social cards) ..... Owner: Design
T-2 wks  Beta users primed for testimonials/PH comments ......... Owner: Community
T-1 wk   Support FAQ + macros written; team briefed ............. Owner: Support
T-1 wk   Tracking/UTMs verified with test conversion ............ Owner: Analytics
T-1 wk   In-app announcement built behind flag .................. Owner: Eng
T-2 d    Go/no-go meeting ....................................... Owner: PM
T-1 d    All posts scheduled; runbook circulated; sleep ......... Owner: All
T-0      LAUNCH (runbook below)
T+1→7    Sustain week: follow-up email, story posts, repurpose .. Owner: Marketing
T+7→14   Post-launch review ..................................... Owner: PM
```

### Launch asset checklist (filter by channel)

- Landing page or announcement page (one CTA; hero restates the one-sentence message)
- Blog announcement post, 600-1,000 words: what, why it matters, how to get it, one honest limitation
- Demo video 60-90s + 3 social cutdowns of 15-30s each
- Email #1 announcement (subject <50 chars, one CTA) and email #2 resend variant
- Social copy per platform: X thread (hook tweet <200 chars), LinkedIn post (150-300 words), plus 3-5 sustain-week posts
- Product Hunt kit: 60-char tagline, 260-char description, 1270×760 gallery images ×4-6, maker comment, first-hour reply drafts
- Press release + pitch email (via **press-releases** / **media-outreach**) if Tier 1
- In-app banner/modal copy + changelog entry
- Support FAQ (top 10 predicted questions) + saved replies
- Screenshot/GIF set in every needed aspect ratio (1200×630 OG image mandatory — test the link unfurl in Slack and X before launch day)
- UTM'd links for every channel, tested end-to-end into analytics

### Day-of runbook template (times local to team; PH times Pacific)

```
00:01 PT  Product Hunt post goes live ................ Owner: Founder
00:15     Maker comment posted; PH link verified ..... Owner: Founder
06:00     Feature flag ON; smoke-test signup flow .... Owner: Eng
07:00     Blog post + landing page live .............. Owner: Marketing
08:00     Email #1 to full list ...................... Owner: Marketing
08:15     X thread + LinkedIn post published ......... Owner: Marketing
09:00     Community posts (own Slack/Discord, then
          external communities per their norms) ...... Owner: Community
09:00     Supporter nudge: "we're live, would love
          your honest take" (never "upvote us") ...... Owner: Founder
09:00-18:00  Reply rotation: PH + social + support,
          every comment answered <30 min ............. Owner: rotating, 2-hr shifts
12:00     Midday metrics check vs. target; reallocate  Owner: PM
14:00     Second social touch (metric, quote, or
          behind-the-scenes) ......................... Owner: Marketing
18:00     End-of-day metrics summary to team ......... Owner: PM
ALL DAY   Error dashboards + signup funnel watch ..... Owner: Eng
IF INCIDENT  Eng lead declares; post holding
          statement; PM decides pause/continue ....... Owner: Eng lead + PM
```

### Post-launch review template

```
LAUNCH REVIEW: [name] — [date], Tier [1/2/3]
Goal: [metric + target]        Result: [actual] ([x]% of target)

By channel (target → actual):
  Product Hunt: [rank, upvotes, referral signups]
  Email: [open %, click %, conversions]   (benchmarks: 35-45% open,
         3-6% click for an engaged list on a launch send)
  Social: [impressions, link clicks, signups]
  PR: [pieces landed / pitched, referral traffic]
  Community: [posts, top thread outcome, signups]
  In-app: [views, CTR, feature adoption %]

What worked (evidence, not vibes): 1) ... 2) ... 3) ...
What failed or underperformed: 1) ... 2) ...
Surprises: ...
Keep/Change decisions for next launch (3-5, each with an owner): ...
Assets worth reusing: ...
Next launch first-draft tier + date assumption: ...
```

### Worked example: one-sentence message → channel variants

Core: "Acme Reports now lets agency owners send white-labeled client dashboards without exporting a single spreadsheet."
- PH tagline (54 chars): "White-label client dashboards, zero spreadsheets"
- Email subject (38 chars): "Client reports, minus the spreadsheet"
- X hook: "We watched 40 agency owners build client reports. All 40 started by exporting a CSV. So we killed the export step. Acme Reports is live:"
- In-app banner: "New: send white-labeled dashboards to clients — try it on your next report →"

## Output format

Deliver a single launch plan document with these sections, in order:

1. **Launch summary** — what/when/tier/one-sentence message/success metric (5 lines max)
2. **Tier decision** — rubric scores with one-line justification each
3. **T-minus timeline** — table: date, task, owner, definition of done
4. **Channel plan** — table per channel: owner, publish time, link+UTM, accountable metric
5. **Asset checklist** — checkbox list with owner and deadline per asset
6. **Day-of runbook** — hour-by-hour table with owners, monitoring rotation, escalation path, holding statement
7. **Sustain week schedule** — day-by-day T+1 to T+7
8. **Post-launch review template** — pre-filled with this launch's targets, with the review meeting date on the calendar

Format as markdown with tables. Bold every owner name. If the user asked for only one component (e.g., just the runbook), deliver that component in full plus the launch summary for context.

## Quality checklist

- [ ] Launch tier assigned via the rubric with visible scores, not by enthusiasm
- [ ] Launch date is Tue/Wed, avoids holidays/major industry events, and has a named date-change owner
- [ ] One-sentence launch message exists and every asset traces back to it
- [ ] Every timeline task has an owner and a definition of done — zero ownerless lines
- [ ] All asset deadlines are T-7 days or earlier
- [ ] Every channel link carries UTM parameters and a test conversion was verified in analytics
- [ ] Product Hunt (if used): tagline ≤60 chars, first gallery image 1270×760 and self-explanatory, maker comment pre-drafted, 12:01 AM PT start
- [ ] Email plan includes a resend-to-non-openers with a changed subject at T+2/T+3
- [ ] Runbook covers 00:01 through end of day with a named reply rotation (<30 min response target)
- [ ] Go/no-go gate at T-2 days with the three hard criteria (stability, assets, tracking)
- [ ] Escalation path and pre-drafted holding statement exist before launch day
- [ ] Sustain week (T+1 to T+7) is scheduled, not left to momentum
- [ ] Post-launch review is calendared for T+7 to T+14 with the template pre-filled with targets
- [ ] Success metric is a specific number with a deadline, recorded before launch

## Common mistakes

- **Tier inflation.** Running the full Tier 1 machine for a settings-page improvement. The audience learns to ignore your announcements, and the launch that deserves noise gets none. Enforce the rubric; most "launches" are Tier 3.
- **Launching to nobody.** A Product Hunt post with zero audience prep gets 30 upvotes and dies by 9 AM. The list-building and community-warming happens in the weeks before (T-2 weeks: beta users primed) — launch day harvests attention, it doesn't create it.
- **Assets finishing on launch morning.** The demo video "just needs one more edit" at 7 AM guarantees a late, sloppy start. T-7 asset freeze, no exceptions except typo fixes.
- **Upvote begging.** DM blasts asking for PH upvotes get detected, penalized, and screenshot-shamed. Ask for honest feedback on the live post instead — comments with substance help ranking more than hollow votes.
- **Announcing everywhere simultaneously at 00:01.** Email at midnight wastes your best channel's open window. Stagger: PH at 00:01 PT (its clock demands it), everything else during your audience's working morning.
- **No resend email.** Skipping the T+2/T+3 resend to non-openers leaves the cheapest 30-50% of additional opens on the table.
- **Silent day two.** The team celebrates, then nothing for a week. The sustain-week schedule exists because launch-day traffic is a spike; the follow-up content converts the people who saw it but didn't click.
- **Untested tracking.** Discovering at T+3 that half the UTMs were malformed means the post-launch review is fiction. Fire a real test conversion through every channel link before go/no-go.
- **The date slips but only some channels hear.** Press runs the embargoed story about a product that isn't live. One date-change owner, one broadcast protocol.
- **Measuring upvotes instead of the goal.** PH rank is a vanity proxy. If the success metric was 500 signups, a #4 finish with 90 signups is a miss — write the review against the number you set at T-6 weeks.
- **No honest limitation anywhere.** Launch copy that overclaims generates day-one support fires and "this is just X" comments. One acknowledged limitation in the blog post and maker comment buys durable credibility.
