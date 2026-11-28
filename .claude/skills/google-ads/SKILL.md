---
name: google-ads
description: "Plans and builds Google Ads search campaigns end-to-end: account structure, keyword match-type strategy, ad groups, responsive search ads, assets/extensions, bidding and ramp plans, negative keyword workflows, Performance Max basics, and conversion tracking checks. Use when the user asks to set up or launch a Google Ads campaign, structure a Google Ads account, choose keyword match types, write responsive search ads, pick a bidding strategy, build a negative keyword list, set up Performance Max, review the search terms report, fix or verify conversion tracking, or plan Google Ads budget and ramp-up."
---

# Google Ads Campaigns

Build launch-ready Google Ads search campaigns: a full account and campaign structure, keyword-to-ad-group mapping with match types, responsive search ad (RSA) copy that fits character limits, a complete asset/extension set, a bidding strategy with a week-by-week ramp plan, a negative keyword workflow, Performance Max guardrails, and a conversion tracking verification checklist. The deliverable is a build sheet the user can implement in the Google Ads UI or Google Ads Editor in one sitting.

## When to use this skill

Use when the user wants to:
- Launch a new Google Ads search campaign or restructure an existing one
- Decide match types, ad group themes, or campaign segmentation
- Write or improve RSAs and ad assets (sitelinks, callouts, structured snippets)
- Choose or change a bidding strategy, set budgets, or plan the first 90 days
- Build negative keyword lists or set up a search-terms review cadence
- Stand up a basic Performance Max campaign alongside search
- Verify that conversion tracking is trustworthy before spending money

Do NOT use for:
- Auditing an already-running account for waste and structural problems — use **ppc-audit**
- Deep keyword discovery, volume/difficulty analysis, and intent mapping — use **keyword-research** (this skill consumes its output)
- Facebook/Instagram campaigns — use **meta-ads**
- General ad copy theory, hooks, and angle development across channels — use **ad-copywriting** (this skill applies it within Google's character limits)
- Fixing the page users land on — use **landing-page-cro**
- Post-launch reporting and dashboards — use **analytics-reporting**

## Inputs to gather

Ask for these; if the user doesn't know, assume the stated default and flag the assumption in the deliverable:

1. **Business, offer, and landing page URL(s).** No default — required. If no dedicated landing page exists, note that homepage traffic typically converts 30-50% worse and recommend landing-page-cro.
2. **Primary conversion action** (purchase, lead form, call, signup) and its approximate value. Default: lead form submit valued at 10% of average deal size if B2B; revenue if e-commerce.
3. **Monthly budget.** Default assumption for planning: $3,000/month. Below ~$1,500/month, recommend one campaign, exact + phrase only, no Performance Max.
4. **Geography.** Default: user's home country, single campaign; split campaigns by country only when budgets or languages differ.
5. **Keyword list or seed terms.** If none exists, run **keyword-research** first or build a 20-40 term seed list from the landing page.
6. **Target CPA or ROAS.** Default: back into allowable CPA as (average customer value × close rate) if leads, or breakeven ROAS = 1/gross margin if e-commerce.
7. **Existing account?** If yes: current conversion volume per month (this gates bidding strategy), any historical CPA/CPC data, and whether auto-apply recommendations is on (tell them to turn it off).
8. **Brand vs. non-brand.** Default: separate brand campaign at 5-15% of budget so brand's cheap conversions don't mask non-brand performance.

## Process

1. **Verify conversion tracking before anything else.** A campaign built on broken tracking is worse than no campaign. Check:
   - One PRIMARY conversion action per real business goal; everything else (page views, scroll, add-to-cart for lead gen) set to Secondary so it doesn't pollute Smart Bidding.
   - Google tag (gtag.js) or GA4-imported conversions firing — test with Google Tag Assistant or a live test conversion. If importing from GA4, expect ~24-48h reporting lag and slightly lower counts than native tags; prefer the native Google Ads tag for the primary action.
   - Enhanced conversions enabled (hashed email passback) — typically recovers 5-15% of conversions lost to browser privacy.
   - Attribution model: data-driven (default). Conversion window: 30 days click-through for considered purchases, 7 days for impulse/e-commerce.
   - If tracking is not verifiable, stop and deliver the tracking fix list first.

2. **Design the account structure.** Segment campaigns ONLY where you need separate control of budget, geography, language, or bidding target. Standard starter structure:
   - Campaign 1: Brand (exact + phrase on brand terms)
   - Campaign 2: Non-brand — Core intent (highest-intent commercial keywords)
   - Campaign 3 (optional, budget ≥ $5k/mo): Non-brand — Competitor or Category expansion
   - Campaign 4 (optional, after 30+ conversions/month): Performance Max
   - Do not build 10+ campaigns on a $3k budget: each campaign needs ~15-30 conversions/month for Smart Bidding to work, so fewer campaigns = faster learning.

3. **Group keywords into ad groups by intent theme, not by match type.** Target 5-15 ad groups per campaign, 3-20 keywords per ad group. Every keyword in an ad group must be answerable by the same headline. Test: if you can't write one H1 that fits all keywords in the group, split the group. SKAGs (single keyword ad groups) are obsolete — close variants collapsed them; themed groups are the standard.

4. **Assign match types by intent confidence and data volume:**
   - **Exact** `[keyword]`: your 10-30 proven or highest-intent terms. Bid highest here.
   - **Phrase** `"keyword"`: mid-confidence discovery. The workhorse at launch.
   - **Broad** `keyword`: ONLY with Smart Bidding (tCPA/tROAS) AND ≥ 30 conversions in the last 30 days AND a mature negative list. Never broad + Manual CPC.
   - Launch default for a new account: phrase + exact in the same ad group; add broad in week 5+ if CPA holds.

5. **Write RSAs — 2 per ad group (Google's stated best practice; a 3rd adds little).** Specs and rules:
   - Up to 15 headlines × 30 characters; up to 4 descriptions × 90 characters. Provide 10-12 headlines and 4 descriptions minimum for "Good" Ad Strength.
   - Headline mix: 3-4 with the keyword, 2-3 benefit/outcome, 2 proof/numbers (reviews, years, customers), 2 CTA, 1-2 offer/price, 1 urgency or differentiator.
   - Pin sparingly: pin position 1 only for legally required or brand-mandated text; every pin reduces combinations Google can test. Aim for 0-2 pins.
   - Descriptions: each must stand alone (any 2 can show together); lead with the value prop, end with a CTA.
   - Include the primary keyword in the display path fields (2 × 15 characters).
   - Apply **ad-copywriting** principles for angles; this step enforces Google's format.

6. **Build the asset (extension) set — assets lift CTR 10-15% on average and are free real estate:**
   - **Sitelinks**: minimum 4, ideally 6-8. Link text ≤ 25 chars + two 35-char description lines each. Point to distinct pages (pricing, testimonials, product categories, contact).
   - **Callouts**: 6-8 at ≤ 25 chars each ("Free Shipping", "24/7 Support", "No Contracts").
   - **Structured snippets**: 1-2 headers (Services, Brands, Types) with 4+ values.
   - **Call asset** if phones matter; schedule it to business hours. **Image assets** (1.91:1 and 1:1, min 600×314 / 300×300). **Price/Promotion assets** for e-commerce.
   - Apply at account level unless a campaign genuinely needs different ones.

7. **Select bidding strategy by conversion volume (the decision gate is data, not preference):**
   - **0 conversions history**: launch on Maximize Conversions with NO target CPA, or Maximize Clicks with a max CPC cap (~cost of allowable CPA × expected 3-5% CVR) for the first 2-3 weeks to gather data.
   - **15-30 conversions/month in the campaign**: switch to Maximize Conversions with a target CPA. Set the initial tCPA 20-30% ABOVE your true goal, then walk it down ≤ 10-15% per adjustment, no more than once per week.
   - **50+ conversions/30 days with reliable values**: target ROAS becomes viable.
   - Never change bid strategy, targets, or budgets by more than ~20% at once — bigger moves restart the ~7-day learning period.

8. **Set campaign settings — the defaults are traps:**
   - Networks: UNCHECK Display Network; UNCHECK Search Partners at launch (revisit later with data).
   - Locations: set "Presence" (people IN your locations), not the default "Presence or interest."
   - Turn OFF auto-apply recommendations account-wide.
   - Daily budget = monthly ÷ 30.4; Google can spend up to 2× daily on any day but won't exceed monthly cap.
   - Ad rotation: "Optimize." Languages: match user language + English.

9. **Pre-load negative keywords and set the review cadence:**
   - Before launch: apply a universal negative list (see template below) plus vertical-specific negatives, as a shared account-level list.
   - Add brand terms as negatives in non-brand campaigns (and vice versa) to prevent cross-contamination.
   - Cadence: review the Search Terms report 2×/week for weeks 1-4, weekly through month 3, biweekly after. Add negatives at the right level: ad group (wrong group matched), campaign (wrong campaign), shared list (never relevant anywhere). Use exact-match negatives for single bad queries, phrase-match negatives for bad patterns.

10. **Add Performance Max only when foundations exist** (30+ conversions/month, tracking verified, search running ≥ 4 weeks):
    - One asset group per product/service theme; fill every asset slot (up to 15 headlines, 5 long headlines at 90 chars, 5 descriptions, 20 images, 5 videos — supply at least 1 video or Google auto-generates an ugly one).
    - Add audience signals (customer lists, converters, in-market segments) — they seed learning, they are not targeting.
    - Turn OFF Final URL expansion (or add strict URL exclusions) and add brand terms as campaign-level brand exclusions so PMax doesn't cannibalize brand search.
    - Expect PMax to need 4-6 weeks and ~60 conversions before judging it.

11. **Write the 90-day ramp plan** (see framework below), assemble everything into the build sheet output format, and hand off with the quality checklist self-scored.

## Frameworks & templates

### Campaign build sheet (fill-in)

```
CAMPAIGN: [Non-Brand — Core]           BUDGET: $[__]/day    BID: Max Conversions (no target, weeks 1-3)
Settings: Search only | Partners OFF | Display OFF | Location: [__] (Presence) | Lang: [__]

  AD GROUP: [Theme, e.g. "Payroll Software"]
    Keywords: [payroll software]  "payroll software"  [payroll software for small business]
              "small business payroll"  "online payroll service"
    Negatives (ad group): "free", "jobs", "salary calculator"
    Final URL: [https://site.com/payroll]
    RSA 1: (see RSA template)   RSA 2: (variant angle: price vs. proof)

  AD GROUP: [next theme...]
```

### RSA template with worked example (B2B payroll software)

```
H1  (keyword):        Payroll Software for SMBs        (29/30)
H2  (keyword):        Small Business Payroll Tool      (27/30)
H3  (keyword):        Online Payroll Service           (22/30)
H4  (benefit):        Run Payroll in 5 Minutes         (24/30)
H5  (benefit):        Automate Taxes & Filings         (24/30)
H6  (proof):          Trusted by 12,000+ Companies     (28/30)
H7  (proof):          4.8★ on G2 — 900+ Reviews        (25/30)
H8  (CTA):            Start Your Free 30-Day Trial     (28/30)
H9  (CTA):            Get a Demo Today                 (16/30)
H10 (offer):          Plans From $39/Month             (20/30)
H11 (differentiator): No Setup Fees, Cancel Anytime    (29/30)
H12 (urgency):        Set Up Before Next Pay Run       (26/30)

D1: Automated payroll, taxes, and compliance in one dashboard. Set up in under 20 minutes. (88/90)
D2: Join 12,000+ small businesses. Unlimited pay runs, direct deposit, and W-2s included.   (89/90)
D3: Full-service payroll from $39/mo. No contracts, no setup fees. Start your free trial.  (88/90)
D4: Rated 4.8/5 by 900+ customers. US-based support answers in under 2 minutes.            (79/90)

Path: /payroll /small-business     Pins: none
```

### Universal starter negative list (shared, account level)

```
free, cheap, jobs, job, careers, hiring, salary, internship, course, courses,
training, certification, tutorial, "how to become", diy, template, templates,
sample, pdf, download, wiki, definition, "what is", meaning, reviews of competitors
you don't want, [your brand] (in non-brand campaigns only)
```
Trim "reviews"/"what is" negatives if you deliberately target informational queries.

### 90-day ramp plan framework

| Phase | Weeks | Actions | Do NOT |
|---|---|---|---|
| Learn | 1-2 | Max Conversions (no target) or Max Clicks w/ CPC cap; search terms review 2×/wk; fix broken tracking immediately | Touch bids, budgets, or structure; judge CPA |
| Stabilize | 3-4 | Set tCPA at ~120-130% of goal once ≥ 15 conversions; pause keywords with ≥ 2× allowable CPA and ≥ 100 clicks; keep adding negatives | Change target > 15% at once; add broad match |
| Optimize | 5-8 | Walk tCPA down 10-15%/week toward goal; test broad match on top 5 converting themes; launch 2nd RSA variants; consider Search Partners test | Restructure ad groups wholesale |
| Scale | 9-13 | Raise budget ≤ 20%/week where CPA ≤ goal; launch PMax if ≥ 30 conv/mo; expand to Campaign 3 themes | Scale campaigns still above target CPA |

### Allowable CPA math (show your work in the deliverable)

Lead gen: Allowable CPA = Avg customer value × close rate × target spend share.
Example: $4,000 LTV × 20% close × 30% allowed acquisition cost = $240/lead ceiling; set launch tCPA ≈ $290-310 (120-130%).
E-commerce: Breakeven ROAS = 1 ÷ gross margin. 60% margin → 1.67 breakeven; set launch tROAS 200-250%.

## Output format

Deliver a single build document (markdown, or a spreadsheet-style layout if the user will import via Google Ads Editor) containing, in order:

1. **Tracking verification checklist** — pass/fail per item, with fixes required before launch flagged in bold.
2. **Account map** — campaigns → ad groups → keyword counts, one tree diagram or table.
3. **Per-campaign build sheets** — settings, budgets, bidding, and every ad group with keywords (match types shown in `[ ]`/`" "` notation), negatives, final URLs.
4. **RSA copy blocks** — every headline and description with character counts shown as (n/30) or (n/90).
5. **Asset sheet** — sitelinks, callouts, structured snippets, other assets, with character counts.
6. **Negative keyword lists** — shared list + campaign-level lists, ready to paste.
7. **90-day ramp plan** — the phase table customized with the user's actual dates, budgets, and tCPA walk-down numbers.
8. **Assumptions log** — every default you assumed because the user didn't provide the input.

## Quality checklist

- [ ] Conversion tracking section exists and gates launch (no "assume tracking works")
- [ ] Exactly one primary conversion action defined; secondaries explicitly listed
- [ ] Every headline ≤ 30 chars and every description ≤ 90 chars, with counts shown
- [ ] Each RSA has ≥ 10 headlines and 4 descriptions; ≥ 3 headlines contain the ad group's keyword
- [ ] No more than 2 pinned headlines per RSA, with a stated reason for each pin
- [ ] Every ad group passes the one-headline test (all keywords answerable by the same H1)
- [ ] No broad match anywhere unless Smart Bidding + 30 conv/30 days is documented
- [ ] Display Network and Search Partners explicitly OFF; location set to "Presence"
- [ ] Brand and non-brand separated, with cross-negatives applied both directions
- [ ] Universal negative list included and search-terms review cadence scheduled with specific days
- [ ] Bidding strategy matches the conversion-volume gate, and the tCPA walk-down math is shown
- [ ] Daily budget = monthly ÷ 30.4 and no planned change exceeds 20% per week
- [ ] Sitelinks ≥ 4 with description lines; callouts ≥ 6
- [ ] Performance Max (if included) has audience signals, brand exclusions, and Final URL expansion addressed
- [ ] Assumptions log lists every default assumed

## Common mistakes

- **Launching tCPA at your goal CPA on day one.** With no data, an aggressive target strangles delivery — impressions flatline and people blame "Google not spending." Start 20-30% above goal and walk down.
- **Judging performance inside the learning period.** The first ~7 days after launch or any major change are noise. Pausing a campaign at day 5 for high CPA resets learning and guarantees you never exit the loop.
- **Broad match on Manual CPC or on a fresh account.** Broad without Smart Bidding signals is a donation to Google. It also silently absorbs traffic from your exact keywords via close variants.
- **One campaign per match type ("Alpha/Beta" structures).** Modern close-variant matching makes these fight themselves; they triple the conversion data needed and are obsolete post-2021.
- **Counting secondary actions as conversions.** A "Conversions" column inflated by page-view or scroll actions makes Smart Bidding optimize for garbage. Audit the conversion actions list first, always.
- **Pinning 6 headlines to force a "perfect" ad.** You've rebuilt an expanded text ad and killed the RSA's combinatorial testing; Ad Strength drops to Poor and CTR usually follows.
- **Letting auto-apply recommendations run.** Google will add broad keywords, raise targets, and "optimize" you into its revenue goals. Turn it off before building anything.
- **Ignoring the daily 2× overspend rule.** Users see a $100/day campaign spend $180 on Tuesday and panic-cut budget, which whipsaws delivery. Explain the 30.4× monthly cap up front.
- **Launching PMax first on a new account.** With no conversion history and no negatives, PMax farms your brand queries and remarketing lists, then reports itself a hero. Search first, PMax at 30+ conversions/month with brand exclusions.
- **Sending all traffic to the homepage.** Message match between the ad group keyword, the RSA H1, and the landing page H1 is the cheapest Quality Score lever you have; a mismatch raises CPCs 20-50% via lower QS.
