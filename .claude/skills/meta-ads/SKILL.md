---
name: meta-ads
description: "Plans and builds Facebook/Instagram ad campaigns end-to-end: campaign and ad set structure (CBO vs ABO), audience strategy, creative testing systems, ad specs, Pixel/CAPI verification, and scaling rules. Use when the user asks to set up Facebook or Instagram ads, structure a Meta campaign, choose between CBO and ABO, build lookalike or interest audiences, design a creative testing plan, fix a pixel or Conversions API setup, diagnose ad fatigue or rising CPMs, scale a winning ad set, or plan retargeting on Meta."
---

# Meta Ads Campaigns

Design, build, and scale Meta (Facebook/Instagram) advertising campaigns that exit the learning phase quickly, test creative systematically, and scale without destroying performance. This skill covers account architecture, audience strategy, creative testing frameworks, technical tracking verification, and the operating rules for budget changes — producing a complete, launch-ready campaign plan the user can implement in Ads Manager in under an hour.

## When to use this skill

Use this skill when the user wants to:
- Launch a new Meta campaign (prospecting, retargeting, or full-funnel)
- Restructure an account (consolidate ad sets, move to CBO/Advantage+ budget, simplify a bloated build)
- Design a creative testing system or diagnose creative fatigue
- Choose audiences: broad vs interest stacks vs lookalikes vs custom audiences
- Verify Pixel + Conversions API (CAPI) setup before spending
- Decide how and when to scale budget on winners

Do NOT use this skill for:
- Writing the actual ad copy and hooks — use **ad-copywriting**
- Google Search/Shopping/PMax campaigns — use **google-ads**
- Auditing an existing account's historical performance — use **ppc-audit**
- Fixing the landing page the ads send traffic to — use **landing-page-cro**
- Statistical design of experiments beyond creative testing — use **ab-testing**
- Defining who the customer is in the first place — use **customer-personas**
- Producing the video assets themselves — use **short-form-video** or **video-production**

## Inputs to gather

Ask for these before building. Where the user doesn't know, use the stated default and flag the assumption in the deliverable.

1. **Objective and conversion event.** What action counts as success (purchase, lead, trial, app install)? Default: the deepest event with ≥50 occurrences per week at planned spend; if volume is too thin, optimize one step up-funnel (e.g., Add to Cart or Lead instead of Purchase).
2. **Monthly budget.** Default assumption: split 80% prospecting / 20% retargeting. Below ~$3,000/month, recommend a single consolidated prospecting campaign plus one retargeting ad set at most.
3. **Unit economics.** AOV or LTV, gross margin, and target CPA or ROAS. If unknown, derive break-even ROAS = 1 / gross margin (e.g., 60% margin → 1.67 break-even ROAS) and set the target 30-50% above break-even.
4. **Business type and sales cycle.** Ecommerce (buy now), lead gen (form/call), or app. Sales cycle length determines attribution window choice (7-day click default; 1-day click for impulse purchases under $50).
5. **Existing assets.** Pixel installed? CAPI live? Customer list size (need 1,000+ matched for a usable lookalike seed; 100 is Meta's floor but quality suffers)? Existing creative inventory (count of images, videos, UGC)?
6. **Geography and language.** Default: single country per campaign; CPMs vary 5-10x between markets (US CPMs commonly $15-40; SEA/LATAM often $1-8), so never mix tiers in one ad set.
7. **Historical data.** Past 90 days of results if the account has run before — best CPA, best creative angle, frequency at which performance decayed.
8. **Compliance flags.** Housing, employment, credit, health, or financial products trigger Special Ad Categories with restricted targeting (no age/gender/zip targeting, no lookalikes — Special Ad Audiences only). Ask explicitly; getting this wrong gets accounts flagged.

## Process

1. **Confirm the tracking foundation before anything else.** No campaign plan is valid on broken tracking.
   - Check the Pixel fires on all key pages: use Meta Events Manager "Test Events" tab plus the Meta Pixel Helper browser extension. Verify PageView, ViewContent, AddToCart, InitiateCheckout, Purchase (or Lead/CompleteRegistration for lead gen) with correct `value` and `currency` parameters.
   - Verify CAPI is sending server-side events AND deduplicating: browser and server events must share the same `event_id` and `event_name`, or Meta double-counts. In Events Manager, each event should show both "Browser" and "Server" as sources with a "Deduplicated" label.
   - Check Event Match Quality (EMQ) score in Events Manager: target **6.0+/10** on Purchase/Lead. Below 5, push more customer parameters through CAPI (email, phone, fbp/fbc cookies, external_id) — hashed automatically by the API.
   - Confirm domain is verified in Business Manager and the conversion event is in the account's event configuration.
   - If any of this fails, stop and deliver a tracking fix list first. Spending on broken tracking wastes 100% of learnings.

2. **Choose the campaign architecture.** Decision rules:
   - **Under $100/day total:** one Advantage+ Shopping campaign (ecommerce) or one CBO prospecting campaign with 1-2 ad sets (lead gen), plus at most one small retargeting ad set. Fragmentation kills learning at low budgets.
   - **$100-500/day:** 1 prospecting campaign (CBO, 2-3 ad sets max), 1 dedicated creative-testing campaign (ABO, so each test gets guaranteed spend), 1 retargeting campaign.
   - **$500+/day:** add a scaling campaign (CBO, winners only) and optionally segment prospecting by funnel angle or product line — never by micro-audience.
   - **CBO vs ABO rule:** CBO (campaign budget, Meta allocates across ad sets) for scaling and evergreen prospecting — it feeds spend to what works. ABO (budget set per ad set) for testing — it guarantees every test cell gets spend. Do not test new creatives inside a CBO scaling campaign; the algorithm starves them.
   - **Learning phase math drives everything:** an ad set needs ~**50 conversion events in 7 days** to exit learning. Minimum viable ad set budget = (target CPA × 50) / 7. At a $40 CPA that is ~$285/day per ad set. If the user's budget can't support that, consolidate ad sets or optimize a cheaper event.

3. **Build the audience strategy.** Default hierarchy for 2025+ accounts:
   - **Broad first** (age 18-65+, country only, Advantage+ audience on) — with a strong pixel and good creative, broad usually beats interest targeting because the delivery algorithm targets better than manual stacks. Make it the control.
   - **Lookalikes** where a quality seed exists: 1-3% LAL of purchasers (or 180-day customer list). Test 1% vs 1-5% stacked. Seed minimum 1,000 matched users; below that, use Add to Cart or Lead as seed.
   - **Interest stacks** only when broad and LALs are unavailable (new pixel, no list) or the product is genuinely niche (e.g., fly fishing gear). Stack 3-8 related interests per ad set to keep audience size above ~2M in the US; do not run one-interest-per-ad-set splits — audiences overlap 30-70% anyway and the split just multiplies learning phases.
   - **Retargeting:** website visitors 30-day, ATC/IC 14-day, video viewers 75%+ 30-day, IG/FB engagers 90-day — combined into ONE ad set at typical budgets. Always exclude purchasers 180-day from prospecting AND retargeting.
   - Check audience overlap (Audiences tool → Show Audience Overlap) if running multiple prospecting ad sets; consolidate anything over ~30% overlap.

4. **Plan placements and formats.** Default to Advantage+ placements (all placements). Manually exclude only Audience Network for lead gen with quality problems. Build creative for the three aspect-ratio slots:
   - **Feed:** 1:1 (1080×1080) or 4:5 (1080×1350 — takes more screen, usually wins in feed)
   - **Stories/Reels:** 9:16 (1080×1920), keep critical elements inside the center safe zone — top 14% and bottom 20% get covered by UI
   - **Video:** MP4/MOV, ≤4GB; hook in the first 3 seconds; 15-30s typical for prospecting; captions mandatory (~85% of feed video is watched muted)
   - **Text limits:** primary text truncates around 125 characters ("...See more"), headline ~40 characters (27 safe on all placements), description ~30 characters. Front-load the hook into the first 125 characters. Hand the actual copywriting to **ad-copywriting**.
   - **Carousel:** 2-10 cards, 1:1, first card must work standalone.

5. **Design the creative testing system.** Creative drives 60-80% of Meta performance variance today; audiences and bidding are commoditized.
   - Use a dedicated ABO testing campaign. Each test cell = 1 ad set, broad audience, equal budget, running 3-7 days or until each cell reaches a decision threshold (see step 7).
   - Test **concepts before variations**: a concept = distinct angle (pain-point vs social-proof vs demo vs offer-led). Only after a concept wins do you iterate hooks, openings, and formats within it. Batch cadence: 3-5 new concepts per week at $300+/day; 2-4 per month at low budgets.
   - Apply the **3:2:2 method** for efficient batches: 3 creatives × 2 primary texts × 2 headlines in one Dynamic Creative or flexible ad set — Meta assembles combinations and reports winners.
   - Promote winners by duplicating the ad (or using "existing post" to keep social proof) into the CBO scaling campaign. Never edit a winning ad in place — edits reset learning.

6. **Set bidding and attribution.**
   - Start with **Highest Volume** (lowest cost, no cap). Add a **Cost Cap** only after 50+ conversions establish a true CPA, set at 1.1-1.3× the target — caps set at target from day one throttle delivery to near zero.
   - Attribution setting: 7-day click / 1-day view default. For considered purchases compare against 7-day click only; for impulse ecommerce under $50, 1-day click reveals true incrementality better. Note in the deliverable which setting the reported numbers use.

7. **Define kill/scale decision rules up front** (write them into the deliverable so the user isn't improvising emotionally):
   - **Kill an ad** when spend ≥ 1.5-2× target CPA with zero conversions, OR CPA > 1.5× target after 3× CPA in spend, OR CTR (link) < 0.5% after 2,000 impressions with no conversions.
   - **Keep testing** when metrics are within 20% of target — let it reach 50 conversions before judging.
   - **Scale vertically:** raise budget **~20% every 48-72 hours** on ad sets beating target for 3+ consecutive days. Larger jumps re-enter learning phase and commonly spike CPA 30-50% for several days.
   - **Scale horizontally:** duplicate winners into new campaign structures, new geos, or broaden the audience — when vertical scaling stalls (CPA creeps up 2 increments in a row).
   - **Creative fatigue signals** (check twice weekly): frequency > 3-4 on prospecting (>6-8 on retargeting), CTR down >20% from its 7-day peak, CPM up >20% with no auction-wide cause, first-time impression ratio < 60%. Response: rotate in the next tested concept — do not just raise budget into fatigue.

8. **Assemble the deliverable** (see Output format): full campaign tree with names, budgets, audiences, and settings; creative test plan; tracking verification checklist; and the scaling/kill ruleset. Walk the user through Ads Manager build order: campaign → ad set → ads, publish as Paused, review in Draft, then launch — ideally at midnight account-time so day-one budget paces over a full day.

## Frameworks & templates

### Naming convention (use throughout)

```
Campaign: [Objective]-[Funnel]-[Structure] → CONV-PROSP-CBO | CONV-TEST-ABO | CONV-RTG-ABO
Ad set:   [Audience]-[Geo]-[Placement]     → BROAD-US-ALL | LAL1-PURCH180-US | RTG-WEB30+ENG90-US
Ad:       [Concept]-[Format]-[Hook]-[Date] → PAINPOINT-VID15-SWEATYHANDS-0715
```

### Template 1: Campaign build plan (fill in the blanks)

```
ACCOUNT: __________   MONTHLY BUDGET: $__________   TARGET CPA/ROAS: __________
CONVERSION EVENT: __________   ATTRIBUTION: 7d click / 1d view   PIXEL EMQ: ___/10

CAMPAIGN 1 — CONV-PROSP-CBO ($____/day, ~60% of budget)
  Ad set 1: BROAD-[GEO]-ALL — Advantage+ audience, 18-65+, all placements
    Ads: top 3-6 proven creatives (from testing campaign only)
  Ad set 2 (optional, if LAL seed ≥1,000): LAL1-3-PURCH-[GEO]
  Exclusions on both: purchasers 180d, current customers list

CAMPAIGN 2 — CONV-TEST-ABO ($____/day, ~20% of budget)
  Ad set per concept, $____/day each (= target CPA × 50 / 7, floor $20/day)
  Audience: BROAD-[GEO] identical across cells | Duration: 3-7 days or decision threshold
  This week's concepts: 1) __________ 2) __________ 3) __________

CAMPAIGN 3 — CONV-RTG-ABO ($____/day, ~20% of budget)
  Ad set: WEB30 + ATC14 + VV75-30 + ENG90 combined, exclude purchasers 180d
  Ads: offer/objection-handling angles (social proof, guarantee, FAQ, urgency)

BID STRATEGY: Highest Volume (revisit Cost Cap at 1.2× CPA after 50 conversions)
LAUNCH: publish paused → QA links/UTMs/spelling → activate at 12:00am account time
```

### Template 2: Creative testing log (one row per test cell)

```
| Batch | Concept/Angle    | Format | Hook (first line)          | Spend | CPA  | CTR  | Thumbstop | Verdict        |
|-------|------------------|--------|----------------------------|-------|------|------|-----------|----------------|
| 0715  | Pain: sweaty grip| VID15  | "Your palms ruin your..."  | $180  | $32  | 1.4% | 28%       | SCALE          |
| 0715  | Social proof     | IMG 4:5| "12,000 climbers switched" | $180  | $61  | 0.9% | —         | KILL           |
| 0715  | Demo/how-it-works| VID30  | "Watch this hold 90kg"     | $175  | $44  | 1.1% | 22%       | ITERATE HOOK   |
Verdict rules: SCALE = CPA ≤ target & ≥5 conversions | KILL = per step-7 rules | ITERATE = CTR strong, CPA weak (hook works, body/offer doesn't)
Thumbstop = 3-sec video plays ÷ impressions; healthy prospecting range 20-35%.
```

### Benchmark reference (calibrate expectations, ranges vary by vertical)

- CTR (link click): 0.9-1.6% typical; <0.5% = creative problem
- CPM: US broad prospecting $15-40; retargeting often $25-60 (small audience premium)
- Ecommerce conversion rate from click: 1-3%; Lead gen (on-site form): 5-15%
- Landing page load: >3s mobile load can cut conversions ~30-50% — route fixes to **landing-page-cro**
- Frequency: prospecting healthy <2.5/week; retargeting <8/week

### Performance diagnosis decision tree (apply when "ads aren't working")

```
CPA too high — locate the break point in the chain:
├─ CTR < 0.8%?            → Creative/hook problem. New concepts, not new audiences.
│    └─ Thumbstop < 20%?  → First 3 seconds fail. Rework the opening frame/hook.
│    └─ Thumbstop OK but
│       CTR low?          → Hook attracts, body/offer doesn't pay off. Iterate mid-video and CTA.
├─ CTR ≥ 1% but landing
│  conversion < 1% (ecom)
│  or < 5% (lead gen)?    → Page problem, not ads. Route to landing-page-cro.
│                           Check message match: ad promise must appear above the fold.
├─ CTR and CVR both fine
│  but CPM up > 20%?      → Auction or fatigue. Check frequency and first-time impression
│                           ratio; check if it's seasonal (Q4 CPMs run 20-50% above baseline).
└─ Everything fine but
   volume too low?        → Audience or bid constraint. Remove cost cap, broaden audience,
                            or raise budget 20% — one change at a time, 72h between changes.
```

### Worked example: budget math for a $6,000/month lead-gen account

Target CPL $25. Learning-phase requirement: $25 × 50 / 7 ≈ $179/day per ad set — but total budget is only $200/day. Conclusion: run ONE broad prospecting ad set at $140/day (reaches ~39 conversions/week — accept slower learning or optimize the cheaper "Lead form view" event initially), a $40/day testing ad set rotating one concept per week, and $20/day retargeting. No lookalikes until the lead list passes 1,000. This is the consolidation logic to apply whenever budget < learning-phase math.

## Output format

Deliver a single campaign plan document containing, in order:

1. **Assumptions block** — budget, target CPA/ROAS with derivation, conversion event, attribution setting, and any defaults assumed because the user didn't know.
2. **Tracking verification checklist** — pass/fail per item from Process step 1, with fix instructions for failures. Marked "BLOCKING" if Purchase/Lead events or dedup fail.
3. **Campaign tree** — Template 1 filled in completely: every campaign, ad set, audience definition, exclusion, placement, budget, and bid strategy. No blanks.
4. **Creative brief summary** — the 3-5 launch concepts with angle, format, and hook direction per concept (full copy via **ad-copywriting**), plus spec sheet (ratios, lengths, safe zones).
5. **Testing calendar** — first 4 weeks: which batch launches when, decision dates, and the promote-to-scaling workflow.
6. **Operating rules card** — the kill/scale/fatigue thresholds from Process step 7, stated as if/then rules the user can follow without judgment calls.
7. **Week 1-4 review cadence** — what to check daily (spend pacing, disapprovals), every 72h (kill/scale decisions), weekly (fatigue signals, CPM trend, new batch).

## Quality checklist

- [ ] Conversion event chosen can realistically hit ~50 events/week per ad set at the stated budget, or the plan explicitly optimizes up-funnel with a stated migration trigger
- [ ] Every ad set budget ≥ (target CPA × 50) / 7, or the consolidation trade-off is documented
- [ ] CBO used for scaling/evergreen, ABO used for testing — never new creative tests inside the CBO scaling campaign
- [ ] Pixel + CAPI verification steps included, with `event_id` deduplication and EMQ ≥6 explicitly checked
- [ ] Purchasers/customers (180-day) excluded from all prospecting and retargeting ad sets
- [ ] No more than 3 prospecting ad sets at budgets under $500/day; audience overlap addressed
- [ ] Creative plan tests distinct concepts (not 5 variations of one concept) with named angles
- [ ] All three aspect ratios (1:1 or 4:5, and 9:16) specified for launch creatives, with Stories/Reels safe zones noted
- [ ] Kill rules, scale rules (≤20% per 48-72h), and fatigue thresholds (frequency, CTR decay, first-time impression ratio) written as numeric if/then statements
- [ ] Bid strategy starts at Highest Volume; any cost cap is 1.1-1.3× proven CPA, not aspirational CPA
- [ ] Special Ad Category status confirmed for housing/employment/credit/health/financial offers
- [ ] Naming convention applied to every campaign, ad set, and ad in the tree
- [ ] Attribution window stated once and used consistently for all targets and benchmarks
- [ ] Plan contains zero placeholder blanks — every budget, audience, and date is filled in

## Common mistakes

- **Fragmenting spend across 10+ ad sets at a $100/day budget.** Nothing exits learning; everything underperforms; the user concludes "Meta doesn't work." Consolidate until each ad set can hit 50 conversions/week.
- **Testing creatives inside the CBO scaling campaign.** CBO routes spend to proven ads, so new creatives get $3/day and are declared "failed" without a real test. Testing lives in ABO.
- **Editing a winning ad in place** (changing copy, swapping thumbnail, adjusting audience). Any material edit resets learning and vaporizes accumulated social proof. Duplicate instead, or use the existing-post ID.
- **Doubling budget overnight on a winner.** >20-30% jumps re-trigger learning; CPA typically spikes 30-50% for 2-4 days and the user panic-kills the best ad set. Scale 20% per 48-72 hours.
- **One-interest-per-ad-set "audience testing."** Interests overlap 30-70%; the split multiplies learning phases while testing nothing. Test creative concepts against broad instead.
- **Judging ads at 48 hours or 1,000 impressions.** Below the spend thresholds in step 7, differences are noise. Predefine decision thresholds and hold to them.
- **Running CAPI without event deduplication.** Reported conversions double, ROAS looks amazing, budget decisions are made on fiction. Verify the "Deduplicated" label in Events Manager before trusting any number.
- **Retargeting eating the budget.** A 40%+ retargeting share mostly harvests conversions that would have happened anyway while prospecting starves. Hold retargeting to ~10-20% and watch its frequency cap.
- **Ignoring first-time impression ratio when "scaling."** If it drops below ~60%, added budget is buying repeat impressions to the same fatigued users, not reach. Fix creative rotation before raising spend.
- **Optimizing for cheap top-funnel events forever.** Link clicks and ViewContent optimization attract clickers, not buyers. The moment Purchase/Lead volume supports it (~50/week), migrate — and expect CPA to look worse while true results improve.
- **Reading day-of ROAS with a 7-day click window.** Yesterday's cohort hasn't finished converting; performance always "looks" like it crashed this week. Compare completed cohorts or use the same lookback consistently — route deeper reporting design to **analytics-reporting**.
