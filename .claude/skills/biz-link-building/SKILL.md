---
name: biz-link-building
description: "Builds a complete link acquisition campaign: prospect lists from competitor gap analysis, resource pages, unlinked mentions, and digital PR angles; qualification scoring; personalized outreach emails; anchor text plans; and a tracking system — all within Google's link spam policies. Use when the user asks to get backlinks, build links, improve domain authority/rating, do a link gap analysis, find link prospects, write link outreach emails, do broken link building, reclaim unlinked brand mentions, plan a digital PR campaign for links, or evaluate whether a link opportunity is safe."
---

# Link Building

Plan and execute white-hat backlink acquisition: identify realistic link prospects, qualify them against measurable criteria, craft outreach that earns replies, specify safe anchor text, and track everything in a pipeline. Links remain one of the strongest ranking signals, but the margin between effective link building and a Google link-spam penalty is narrow — this skill keeps every recommendation on the safe side of that line while still producing links that move rankings.

## When to use this skill

Use this skill when the user wants to:
- Earn backlinks to a site, page, or content asset
- Analyze competitors' backlink profiles to find gap opportunities
- Find and pitch resource pages, broken links, or unlinked brand mentions
- Develop digital PR angles (data studies, tools, expert commentary) specifically to attract links
- Write or improve link outreach emails and follow-ups
- Decide anchor text for links they control (guest posts, partner mentions)
- Audit whether their current link tactics are risky
- Set up a link prospect tracker or report on link building results

Do NOT use this skill for:
- General cold outreach for sales or partnerships → **cold-email-outreach** or **partnership-development**
- Pitching journalists for press coverage where links are secondary → **media-outreach** or **press-releases**
- Creating the linkable content asset itself (the study, guide, or tool) → **blog-writing**, **content-strategy**, or **case-studies**
- Choosing which keywords/pages to target with links → **keyword-research** and **on-page-seo** first
- Local citations and Google Business Profile links → **local-seo**
- Fixing crawl/index issues that make links pointless → **technical-seo**
- Full competitor business analysis beyond backlinks → **competitor-analysis**

## Inputs to gather

Ask the user for these before starting. Where they don't know, use the stated default.

1. **Target site and target pages.** Which URLs need links? Default: homepage plus the 2-3 highest-commercial-value pages currently ranking positions 4-15 for their money keywords (links move these fastest).
2. **Current authority baseline.** Ahrefs DR / Moz DA / Semrush AS if known, plus referring domain count. Default: assume a small site (DR under 30, fewer than 100 referring domains) and calibrate prospect targets accordingly.
3. **3-5 competitors that outrank them.** Default: ask for their top 3 target keywords and treat the top-ranking domains (excluding Wikipedia, Amazon, and other giants) as competitors.
4. **Niche and audience.** Needed to judge relevance and find resource-page verticals.
5. **Available linkable assets.** Original data, free tools, calculators, definitive guides, strong visuals, notable customers. Default: if none exist, flag this — plan one asset before mass outreach, because "please link to my product page" campaigns convert under 1%.
6. **Capacity and constraints.** Emails per week they can send and personalize (default: 25-50), whether they have Ahrefs/Semrush/Moz access (default: assume one of them; every step below names the free fallback), sender email on a warmed real domain (never a brand-new domain — see **email-deliverability**).
7. **Risk tolerance and history.** Any past penalties, purchased links, or PBN use. Default: assume clean profile, zero tolerance for paid links.
8. **Timeline and goal.** Default goal: 5-15 new quality referring domains per month for a small site; expect ranking impact in 2-4 months, not weeks.

## Process

1. **Set the target and baseline.** Confirm target URLs and pull (or ask the user to pull) current referring domains, DR/DA, and top anchor texts for the target site. Record these as the baseline in the tracker (Step 8). Decision point: if the target page has thin content (under ~800 words for an informational target, no unique value), stop and route to **seo-content-briefs** / **on-page-seo** first — links to weak pages are wasted budget.

2. **Run competitor link gap analysis.** For each competitor, list domains linking to them but not to the user (Ahrefs "Link Intersect", Semrush "Backlink Gap"; free fallback: manually check the top 20 backlinks of each competitor's best page via a free backlink checker). Prioritize domains that link to **2 or more competitors** — they demonstrably link out in this niche and are 2-3x more likely to convert. Export candidates with URL, DR, and the competitor page they link to.

3. **Mine four more prospect sources.** Build the list to 100-200 raw prospects before qualifying:
   - **Resource pages.** Search operators: `[niche] intitle:"resources"`, `[niche] inurl:links`, `[niche] "useful links"`, `[topic] "recommended reading"`. Also try `.edu` and `.gov` variants for high-trust pages.
   - **Unlinked brand mentions.** Search `"[brand name]" -site:userdomain.com` (plus product names, founder names, unique study statistics). Ahrefs Content Explorer or Google News; filter to mentions without a link. These convert at 15-30% — the highest of any tactic — so do them first.
   - **Broken link building.** Find dead pages competitors' backlinks point to (Ahrefs "Best by links" filtered to 404s; free fallback: run resource pages through a broken-link checker extension). The user must have or create a suitable replacement page.
   - **Digital PR angles.** Brainstorm 3-5 hooks: original data from the user's product ("We analyzed 10,000 X and found..."), a contrarian expert take, a free calculator/tool, an annual industry survey, or newsjacking a trend with data. Route the actual journalist pitching to **media-outreach**; keep asset selection and link-focused blogger outreach here. Also register for reporter-query services (Connectively, Qwoted, Featured, SourceBottle) for passive high-DR opportunities.

4. **Qualify every prospect.** Score each against the Prospect Qualification Rubric (see Frameworks). Discard anything scoring below 6/10 or hitting any automatic disqualifier. Expect to keep 40-60% of raw prospects. Decision point: if fewer than 30 qualified prospects survive, widen the niche definition or add a second linkable asset angle before starting outreach — a campaign under 30 prospects can't produce statistically meaningful results.

5. **Find contacts.** For each qualified prospect, identify the right person: content/blog editor for resource and content pitches, author of the specific article for mentions and broken links, webmaster for .edu pages. Use the site's about/team page, LinkedIn, or a finder tool (Hunter.io, Snov.io); verify addresses (bounce rate above 5% damages sender reputation — see **email-deliverability**). Generic `info@` addresses convert at roughly half the rate of named contacts; use them only as last resort.

6. **Write and send outreach.** Use the templates below. Hard rules:
   - Subject line under 50 characters, no clickbait, no "quick question" cliché.
   - Body 60-150 words. Every email opens with 1-2 lines proving you read their specific page (quote it, react to it) — not "I love your blog."
   - One clear, low-friction ask per email. Never ask for a link AND a share AND feedback.
   - Send 10-25 per day from one inbox, weekdays, recipient's morning hours.
   - Follow up exactly twice: first at day 3-5, second at day 8-12. Stop after two. Route sequencing mechanics to **follow-up-sequences** if the user wants automation.
   - Benchmarks to set expectations: 40-60% open rate (with a good subject and clean list), 5-15% reply rate, 1-5% of sent emails become links for cold tactics; 15-30% for unlinked mentions. Below 3% reply after 50 sends means the template or targeting is broken — revise before sending more.

7. **Handle replies.** "Yes" → send the exact URL and a suggested (natural, non-exact-match) anchor, thank them, log it. "Yes, for $X" → decline politely, mark the domain as disqualified (payment demand = the site sells links = toxic neighborhood). "What's in it for me?" → offer legitimate value: a share to your audience, a quote from your expert, a genuine testimonial — never money, product-for-link swaps on undisclosed terms, or reciprocal links at scale.

8. **Track and verify.** Maintain the tracker (see Output format). Verify each won link after 1-2 weeks: still live, indexed, correct URL, and note `rel` attribute. A `nofollow`/`ugc`/`sponsored` link from a relevant high-traffic site still has referral and discovery value — log it, but weight follow links in reporting. Re-verify all links quarterly; 10-15% of won links typically drop within a year, and a polite restoration email recovers many.

9. **Manage anchor text across the campaign.** For links the user controls or suggests, keep the sitewide profile inside the safe distribution (see Frameworks). Never request exact-match commercial anchors from outreach targets — let editors choose, and only nudge if their draft anchor is misleading.

10. **Report monthly.** New referring domains won, links by tactic, average DR of won links, reply/conversion rates by template, target-page ranking movement, and next month's prospect pipeline. Route dashboard design to **kpi-dashboard-design** if the user wants an ongoing report.

## Frameworks & templates

### Prospect Qualification Rubric (score 0-10; keep ≥6)

| Criterion | Points | Pass condition |
|---|---|---|
| Topical relevance | 0-3 | 3 = same niche; 2 = adjacent; 1 = general but has a relevant section; 0 = unrelated |
| Authority | 0-2 | 2 = DR/DA 40+; 1 = DR/DA 20-39; 0 = under 20 (still fine for very new sites) |
| Organic traffic | 0-2 | 2 = 1,000+ monthly organic visits (Ahrefs/Semrush estimate); 1 = 200-999; 0 = under 200 |
| Editorial standards | 0-2 | 2 = real authors, recent posts, outbound links look hand-picked; 1 = mixed; 0 = churned content |
| Attainability | 0-1 | 1 = links to sites like the user's (similar DR) or to 2+ competitors |

**Automatic disqualifiers (score is irrelevant — reject):** a "write for us"/"sponsored post" page with published prices; site sells links when asked; outbound links to casino/pharma/essay-mill niches unrelated to its topic; traffic graph shows a cliff (likely penalized); article pages stuffed with 15+ external dofollow links; domain is part of an obvious network (same theme/IP/footer across sites); content is clearly mass-produced AI churn with no editing.

### Anchor text distribution (target profile for anchors the user influences)

- Branded ("Acme", "Acme's guide"): **40-60%**
- Naked URL ("acme.com"): **10-20%**
- Generic ("this study", "read more", "here"): **10-20%**
- Partial-match / natural phrase ("guide to inventory forecasting"): **10-20%**
- Exact-match commercial keyword ("inventory management software"): **under 5%** — and never twice from the same domain

If the site's existing profile already exceeds 10% exact-match on a money keyword, recommend diluting with branded links before building anything else.

### Template 1 — Unlinked brand mention (highest conversion; send these first)

> **Subject:** Your mention of [Brand] in [article topic]
>
> Hi [First name],
>
> I was reading your piece on [specific topic] — [one genuine, specific reaction, e.g., "the section on X matched exactly what we see with our customers"].
>
> Thanks for mentioning [Brand/statistic/study]. One small ask: would you add a link on that mention so your readers can find the source? It's here: [URL]
>
> Either way, glad the [study/product] was useful. Happy to send over [newer data / a quote from our founder] if you ever update the piece.
>
> [Name], [role] at [Brand]

### Template 2 — Resource page pitch

> **Subject:** Suggestion for your [topic] resources page
>
> Hi [First name],
>
> Your [page name] page is one of the better-curated lists on [topic] — I found [specific resource on their list] through it, which I hadn't seen before.
>
> One suggestion: we published [asset title], a [what it is — e.g., "free calculator that estimates X" / "guide with original data from N companies"]. It covers [gap their list doesn't], so it may fit alongside [existing resource on their page].
>
> Here it is if you'd like to take a look: [URL]
>
> No worries either way — thanks for maintaining the list.
>
> [Name]

### Template 3 — Broken link replacement

> **Subject:** Dead link on your [topic] page
>
> Hi [First name],
>
> Heads-up: on [page URL], the link to [dead resource name] (under "[nearby heading]") returns a 404 — looks like [old site] took it down.
>
> If you want a replacement, we have [asset title], which covers the same ground plus [one concrete improvement, e.g., "2026 data"]: [URL]
>
> Even if not, wanted to flag the broken one.
>
> [Name]

### Follow-up (use for any template, day 3-5)

> **Subject:** Re: [original subject]
>
> Hi [First name] — floating this back up in case it got buried. The short version: [one-line restatement of the ask]. If it's not a fit, a quick "no" is totally fine and I'll stop emailing.
>
> [Name]

### Worked example — competitor gap shortlist entry

> **Prospect:** materialhandling-weekly.com/warehouse-tech-resources
> **Source:** Link Intersect — links to competitors StockIQ and Fishbowl, not to us
> **Scores:** Relevance 3, Authority 2 (DR 47), Traffic 2 (4.1k/mo), Editorial 2, Attainability 1 → **10/10**
> **Contact:** Dana R., resources editor (found via /about, verified with Hunter)
> **Angle:** Resource page pitch; our free reorder-point calculator fills the "tools" section gap
> **Suggested anchor if asked:** "free reorder point calculator" (partial-match)

## Output format

Deliver three artifacts (in chat, or as files if the user asks):

1. **Prospect tracker** — a table/CSV with columns: `Prospect URL | Domain | DR/DA | Monthly traffic | Tactic (gap/resource/mention/broken/PR) | Score /10 | Contact name | Contact email | Status (to-contact / sent / followed-up-1 / followed-up-2 / replied / won / declined / disqualified) | Date sent | Template used | Link URL won | Anchor | rel attribute | Verified date`. Populate every qualified prospect; sort by score descending.
2. **Outreach kit** — the 2-4 templates customized to the user's brand and assets, each with subject line, body, and the two follow-ups, plus a one-paragraph personalization instruction ("before sending, replace bracketed fields and write lines 1-2 fresh for each prospect").
3. **Campaign plan (one page)** — baseline metrics, monthly link target, tactic mix with expected conversion per tactic, anchor text plan for the target pages, sending cadence, the safety rules in force, and the monthly reporting metrics.

## Quality checklist

Verify every item before delivering:

- [ ] Target pages are specified and each can plausibly earn links (has substance or a linkable asset attached)
- [ ] Prospect list contains at least 30 qualified prospects (or explicitly flags the shortfall and the fix)
- [ ] Every prospect has a rubric score and a source tactic recorded
- [ ] No prospect on the list hits an automatic disqualifier (spot-check the top 10)
- [ ] Unlinked mentions and 2+-competitor-overlap domains are prioritized at the top of the queue
- [ ] Every outreach template body is 60-150 words with one ask and a personalization slot in lines 1-2
- [ ] All subject lines are under 50 characters and reference the recipient's page or topic
- [ ] Follow-up plan is exactly two touches (day 3-5 and day 8-12), then stop
- [ ] Anchor guidance keeps exact-match under 5% and never scripts exact-match anchors into outreach emails
- [ ] Zero recommendations involve paying for links, link exchanges at scale, PBNs, or undisclosed sponsored placements
- [ ] Benchmarks are stated (5-15% reply, 1-5% cold conversion, 15-30% mention reclamation) so the user can judge results
- [ ] Tracker includes verification fields (live, rel attribute, verified date) and a quarterly re-check note
- [ ] Reporting metrics tie links to target-page rankings, not just raw link counts
- [ ] Adjacent work (asset creation, journalist PR, deliverability setup) is routed to the correct sibling skill, not half-done here

## Common mistakes

- **Chasing DR while ignoring traffic and relevance.** A DR 70 site with 0 organic visitors is usually a link farm inflated by other link farms. Traffic estimate ≥ 1,000/month is a stronger quality signal than DR alone.
- **Buying "guest posts" from marketplaces.** $50-500 placements on sites with "write for us" pricing pages are the exact pattern Google's SpamBrain devalues; at best the money is wasted, at worst it triggers a manual action. If a site quotes a price mid-conversation, disqualify it — don't negotiate.
- **Exact-match anchor requests in outreach.** Asking an editor to link with "best CRM software" is both a spam-policy violation (link schemes) and a fingerprint that makes the whole campaign auditable. Suggest the URL; let them write the anchor.
- **Mass-blasting one template to 500 prospects.** Reply rates collapse below 2%, the domain gets flagged for spam, and future campaigns from that inbox are dead. 25 personalized emails outperform 250 templated ones on absolute links won.
- **Pitching a homepage or product page with no linkable asset.** Nobody cites a pricing page. Build the calculator/data study/definitive guide first, earn links to it, and pass authority internally (see **on-page-seo** for internal linking).
- **Treating nofollow as worthless.** A nofollow link from a relevant DR 80 publication drives referral traffic, brand searches, and often triggers follow links from writers who discover the content there. Log it as a win with a weight note, not a failure.
- **Three-plus follow-ups.** After two, replies asymptote near zero and spam complaints spike, damaging deliverability for the whole domain.
- **Reciprocal and three-way link swaps at scale.** "Link to me and I'll link to you" arranged systematically is an explicit link scheme. Occasional natural mutual links between genuinely related sites are fine; a swap spreadsheet is not.
- **Ignoring link velocity context.** A 40-referring-domain site suddenly gaining 200 links in a month looks manipulated. Pace acquisition roughly in line with the site's history and content output.
- **No verification loop.** Teams celebrate the "yes" email but never confirm the link went live, was placed on the agreed page, or survived the site's next redesign. Verify at 1-2 weeks and re-verify quarterly.
- **Counting links instead of outcomes.** The report the user actually needs is "target page moved from position 9 to 4 on [keyword]" — always tie monthly link wins to ranking and traffic movement on the target pages.
