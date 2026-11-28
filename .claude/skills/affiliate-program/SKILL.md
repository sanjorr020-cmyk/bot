---
name: affiliate-program
description: "Designs and operates affiliate programs end-to-end: commission structures, cookie windows, abuse-proof program terms, affiliate recruitment plans, promo asset packs, tracking setup, tier/bonus systems, and health metrics. Use when the user says things like \"set up an affiliate program\", \"what commission should we pay affiliates\", \"write affiliate program terms\", \"recruit affiliates for my product\", \"affiliates are bidding on our brand name\", \"build an affiliate media kit\", \"choose an affiliate network or platform\", \"design affiliate tiers or bonuses\", or \"audit why our affiliate program isn't producing sales\"."
---

# Affiliate Programs

This skill turns Claude into an affiliate program manager: it designs economically sound commission structures, writes terms that pre-empt the standard abuse vectors (brand bidding, coupon leaks, self-referrals), builds recruitment and asset plans, specifies tracking, and defines the metrics that tell you whether the program is actually adding incremental revenue rather than paying commission on sales you would have gotten anyway.

## When to use this skill

Use it when the user wants to:
- Launch a new affiliate, referral-partner, or ambassador program (commission-per-sale model).
- Set or revise commission rates, cookie windows, payout terms, or tier structures.
- Write or tighten affiliate program terms and conditions.
- Recruit affiliates, build a promo asset pack, or pick a tracking platform/network.
- Diagnose an underperforming or fraud-riddled existing program.

Do NOT use it for:
- Flat-fee or gifted creator deals with no performance tracking — use **influencer-marketing**.
- Strategic integrations, resellers, or co-marketing deals — use **partnership-development**.
- The mechanics of writing recruitment cold emails at scale (subject lines, deliverability, sequencing) — use **cold-email-outreach**; this skill supplies the affiliate-specific pitch content.
- Earning editorial backlinks for SEO — use **link-building**.
- Setting the underlying product price or margin — use **pricing-strategy** first; commission math depends on it.

## Inputs to gather

Ask for these before designing anything. Defaults in parentheses are what to assume if the user doesn't know.

1. **Business model and AOV/ACV**: e-commerce, SaaS, digital product, or services? Average order value or annual contract value? (If unknown: ask for a rough price point; you cannot set commissions without it.)
2. **Gross margin** on the product. (Default assumptions: SaaS 80%, digital products 90%, physical goods 40%, services 50%.)
3. **Current CAC** from paid channels, if any. Affiliate payout + platform fees should land at or below blended CAC. (Default: treat 25–30% of first-order revenue as the payout ceiling for one-time sales.)
4. **Refund/return window and rate.** (Default: 30-day window, 5% rate for e-commerce, 3% for SaaS.)
5. **Target affiliate types**: content/review sites, YouTubers, newsletter writers, agencies/consultants who serve the ICP, existing customers, coupon/deal sites. (Default: content creators + customer referrers; exclude coupon sites at launch.)
6. **Platform constraints**: existing e-commerce/billing stack (Shopify, Stripe, Paddle, WooCommerce), budget for network fees. (Default: a SaaS on Stripe → Rewardful/PartnerStack/FirstPromoter; Shopify store → an app like Refersion/UpPromote or a network like ShareASale/Impact; enterprise budget → Impact or PartnerStack.)
7. **Volume goal and timeline**: e.g., "affiliate = 10% of revenue in 12 months." (Default: recruit 50 affiliates in 90 days, expect 15–25% of them to drive a sale.)
8. **Legal jurisdiction** for terms (default: US, which means FTC disclosure rules apply).

## Process

1. **Confirm the unit economics support a program.** Compute: max payout = gross margin % × revenue − fulfillment/support cost − platform fee. If a competitive commission (see benchmarks in step 2) plus a 20–30% network override fee exceeds your paid-channel CAC or eats margin below breakeven, tell the user plainly and propose alternatives (referral credits, flat bounties, or a smaller pilot). Do not design a program the math can't fund.

2. **Set the commission structure.** Pick the model, then the rate against benchmarks:
   - *One-time % of sale* (e-commerce, digital): physical goods 5–15%, digital products/courses 30–50%, marketplaces 1–8%.
   - *Recurring % of subscription* (SaaS): 20–30% of revenue for 12 months is the modal offer; "lifetime recurring" at 15–25% attracts pros but compounds liability — cap it at 12–24 months unless LTV is well understood.
   - *Flat bounty per action* (lead-gen, freemium, fintech): fixed $ per qualified signup or funded account; set it at 30–50% of your paid CPA for the same action.
   - Decision point: if AOV < $50, prefer flat bounties (percentage payouts get too small to motivate anyone).

3. **Set the cookie window and attribution rules.** Defaults: 30 days for e-commerce and SaaS (industry standard; Amazon's 24 hours is an outlier only a monopoly can get away with), 60–90 days for high-consideration/high-ACV products. Attribution: last affiliate click wins (standard); cookie is overwritten by a newer affiliate click, not extended. State explicitly whether affiliate credit survives a later direct or paid-ad click (typical answer: yes for direct, no for paid brand clicks).

4. **Set payout mechanics.** Lock period ≥ the refund window (30 days e-commerce, 30–60 days SaaS) so refunds claw back automatically. Minimum payout threshold $25–$50. Pay monthly via PayPal/Wise/bank transfer, NET-30 after lock. Collect tax forms (W-9/W-8BEN for US programs) before first payout.

5. **Draft the program terms** using the clause pack in Frameworks below. Non-negotiable clauses: brand bidding ban, coupon/discount code rules, self-referral ban, FTC disclosure requirement, cookie-stuffing/forced-click ban, spam ban, trademark-in-domain ban, termination and clawback rights, and a right to change terms with 30 days notice. Decision point: coupon/deal sites — either ban them, or admit them under a "no commission on orders using unauthorized codes; commission only on codes assigned to that affiliate" rule. Never leave this unaddressed; leaked codes are the #1 way programs pay commission on non-incremental sales.

6. **Choose and configure tracking.** Requirements checklist: unique link per affiliate (plus optional vanity coupon codes as a backup attribution method for social/video traffic where links get lost), first-party cookie + server-side postback (client-only pixels lose 15–30% of conversions to blockers/Safari ITP), refund sync from the billing system, and sub-ID support so affiliates can track their own placements. Verify the integration with 3 test orders: normal purchase, purchase after cookie expiry (should NOT track), and refund (should reverse).

7. **Build the promo asset pack.** Minimum viable kit: 10–15 pre-written blurbs (tweet-length ~200 chars, newsletter paragraph ~100 words, and a 300-word mini-review), banner set in the 5 core IAB sizes (300×250, 728×90, 160×600, 320×50, 300×600), product screenshots/lifestyle photos, logo files with usage rules, a one-page program summary (rates, cookie, payout), and 3 suggested content angles ("best X for Y" listicle, tutorial featuring the product, comparison vs. named competitor). Include the FTC disclosure text affiliates must use verbatim: "This post contains affiliate links; I may earn a commission if you purchase through them."

8. **Plan recruitment.** Prioritize in this order (highest conversion first): (a) existing customers and newsletter subscribers — announce the program, expect 1–3% to join; (b) creators already ranking/publishing for "[category] review", "best [category]", "[competitor] alternatives" — find via Google/YouTube search and Ahrefs; (c) affiliates of competitors — visible in their "partners" pages and coupon listings; (d) network marketplace listings if on ShareASale/Impact. Build a target list of 100–200 prospects with site/channel, audience estimate, and contact. For the outreach mechanics (sequencing, deliverability), hand off to **cold-email-outreach**, supplying the recruitment pitch template below. Benchmark: 5–15% of cold-recruited prospects join; 15–25% of joiners ever drive a sale — recruit accordingly.

9. **Design activation, tiers, and bonuses.** Most affiliate revenue follows a 90/10 curve (top 10% of affiliates drive ~90% of sales), so design for activation and for keeping whales:
   - *Activation*: onboarding email sequence (welcome + assets on day 0, best-performing content angles day 3, "first sale" bonus reminder day 10). Offer a $20–$50 first-sale bonus in the first 30 days.
   - *Tiers*: 2–3 levels keyed to trailing 90-day sales, e.g., Standard 20% → Silver 25% at 10 sales/quarter → Gold 30% + dedicated manager at 50 sales/quarter. Review quarterly; demote with one grace quarter.
   - *Bonuses*: seasonal cash bonuses for launches, and a newsletter with fresh angles monthly. Avoid multi-level (recruit-an-affiliate) commissions — they attract scheme-chasers, not sellers.

10. **Define health metrics and cadence.** Track monthly: active affiliate % (drove ≥1 click in 30 days; healthy = 25–40%), productive affiliate % (drove ≥1 sale in 90 days; healthy = 15–25%), EPC (earnings per 100 clicks — publish it in recruiting once it's competitive), affiliate conversion rate (clicks→sales; 1–3% typical for content traffic), reversal rate (refunds+fraud; investigate any affiliate above 10%), incrementality proxy (% of affiliate-attributed orders from coupon sites or brand-search-adjacent sources — if >40%, the program is likely cannibalizing), and program ROAS (revenue ÷ [commissions + fees + management time]; healthy mature programs run 5–10:1).

11. **Set up fraud monitoring.** Weekly checks: search Google for "[brand name] coupon" and "[brand] discount code" to catch leaks and brand bidders (also search your brand as a paid keyword and screenshot violators); flag affiliates with conversion rates >3× program average (cookie stuffing) or click patterns from a single IP range; flag same-name/same-card matches between affiliate and customer (self-referral). Enforce publicly: first violation = warning + commission reversal; second = termination with forfeiture, exactly as the terms state.

12. **Deliver the assembled program document** (see Output format), flag any assumptions made from defaults, and recommend the first 30-day action list.

## Frameworks & templates

### Commission benchmark table

| Vertical | Typical commission | Cookie window | Notes |
|---|---|---|---|
| SaaS (subscription) | 20–30% recurring, 12 mo | 30–90 days | Recurring cap protects LTV math |
| Digital products/courses | 30–50% one-time | 30–60 days | High margin funds high rates |
| Physical e-commerce | 5–15% one-time | 30 days | Scale rate to gross margin |
| Marketplaces/retail giants | 1–8% | 1–30 days | Volume compensates for rate |
| Lead-gen/fintech | $10–$150 flat bounty | 30 days | Peg to 30–50% of paid CPA |

### Template 1 — Program terms clause pack (fill in the blanks)

> **Commission & attribution.** Affiliates earn [RATE]% of [net revenue excluding tax and shipping] on sales tracked via their unique link or assigned code, last-affiliate-click attribution, [30]-day cookie. Commissions lock [30/60] days after purchase and reverse automatically on refund, chargeback, or fraud.
>
> **Brand bidding.** Affiliates may not bid on "[BRAND]", misspellings, or "[BRAND] + [coupon/discount/review/login]" in any paid search or social ad, nor use [BRAND] in display URLs or ad copy, nor direct-link paid traffic to [DOMAIN]. Violation: reversal of associated commissions and, on repeat, termination with forfeiture of unpaid balance.
>
> **Coupon & code rules.** Commission is paid only on the personal code assigned to the affiliate. Publishing, scraping, or promoting any other code — including sitewide or internal codes — voids commission on those orders. [Coupon/deal sites are not admitted to this program. / Coupon sites are admitted on request, at a reduced rate of [X]%.]
>
> **Prohibited conduct.** No self-referrals or purchases on behalf of others; no cookie stuffing, forced clicks, iframes, or auto-redirects; no unsolicited bulk email; no [BRAND] or confusingly similar terms in domain names, handles, or app names; no misrepresentation of pricing, guarantees, or affiliation ("official site", fake reviews).
>
> **Disclosure.** Affiliates must conspicuously disclose the relationship per FTC guidelines on every page, video, or post containing tracked links, before the first link.
>
> **Administration.** [COMPANY] may modify rates or terms with [30] days notice, and may terminate any affiliate at its discretion; earned, locked commissions up to $[THRESHOLD]+ are paid out on the next cycle unless forfeited for violation. Minimum payout $[25–50], paid NET-30 monthly via [PayPal/Wise/bank].

### Platform selection guide

| Stack / situation | Recommended options | Cost shape | Watch out for |
|---|---|---|---|
| SaaS on Stripe/Paddle | Rewardful, FirstPromoter, PartnerStack | $49–$500/mo flat or 15–25% override | PartnerStack doubles as a marketplace — good for recruitment, higher fees |
| Shopify store | UpPromote, Refersion, GoAffPro | $0–$200/mo app fee | Verify refund sync — many apps track sales but not returns |
| Amazon-scale retail / enterprise | Impact, CJ, Awin, Rakuten | Setup $500–$5k + ~20–30% override on commissions | Network affiliates skew coupon/cashback; set admission rules first |
| Digital courses/info products | Marketplace-native (Gumroad, Kajabi, ThriveCart) | Built-in, 0–5% | Limited terms enforcement — publish your own terms page anyway |
| Lead-gen / custom stack | Post Affiliate Pro, Tapfiliate, in-house postbacks | $99–$300/mo | You own fraud screening entirely; budget weekly review time |

Decision rule: pick the option native to the billing system before anything else — attribution bugs live at the billing seam, and native integrations sync refunds automatically.

### Template 2 — Affiliate recruitment pitch (drop into an outreach email or DM)

> Subject: [SITE/CHANNEL NAME] × [BRAND] — [RATE]% partner program
>
> Hi [NAME] — your [specific piece: "best [category] tools" post / [topic] video] is exactly the kind of content our best partners publish, and it's already reaching [their audience].
>
> We just opened the [BRAND] partner program: [RATE]% [recurring for 12 months / per sale], [30]-day cookie, [avg payout: "$X per referred customer"]. Top partners currently earn $[realistic range]/month. You'd get a ready-made asset pack, a personal discount code for your audience, and [first-sale bonus: "$50 bonus on your first referral this month"].
>
> Signup takes 2 minutes: [LINK]. Want me to set you up with a custom code first?

### Template 3 — 3-email activation sequence (send to every new affiliate)

> **Email 1 — Day 0, "Your links + everything you need"**
> Subject: You're in — your [BRAND] links, assets, and first-sale bonus
> Body: (1) Their unique link and personal code, stated in the first two lines. (2) Link to the asset pack. (3) The offer: "Earn a $[30–50] bonus on your first referral in the next 30 days." (4) One sentence on the single best-converting placement: "Our top partners' #1 earner is a '[best category tools]' listicle — here's an outline you can adapt: [LINK]." Keep under 150 words.
>
> **Email 2 — Day 3, "The 3 angles that actually convert"**
> Subject: The 3 [BRAND] angles our top partners use
> Body: three content angles, each with a 1-line hook, the target keyword or audience, and a link to a live example or swipe copy. Close with EPC or average-payout proof: "Partners earn an average $[X] per 100 clicks on these."
>
> **Email 3 — Day 10, "Bonus expires in 20 days"** (skip for affiliates who already converted)
> Subject: Your $[X] first-sale bonus expires [DATE]
> Body: restate the bonus and deadline, offer a 15-minute call or a custom discount code for their audience, and ask one direct question: "What's blocking your first post — assets, angle, or access to the product?" Replies to this email identify your promotable affiliates.

### Health dashboard spec

| Metric | Definition | Healthy range | Red flag / action |
|---|---|---|---|
| Active rate | % of affiliates with ≥1 click in 30 days | 25–40% | <15% → asset pack or activation sequence is failing |
| Productive rate | % with ≥1 sale in trailing 90 days | 15–25% | <10% → recruiting wrong affiliate types |
| EPC | Commission earned per 100 clicks | Publishable when ≥ competitors' | Falling EPC → landing page or offer problem, see landing-page-cro |
| Affiliate CVR | Clicks → sales | 1–3% (content traffic) | Any affiliate >3× program avg → audit for cookie stuffing |
| Reversal rate | % of commissions reversed | <5–8% | Any single affiliate >10% → manual order review |
| Coupon share | % of attributed orders via coupon/deal placements | <25% | >40% → cannibalization; tighten code rules |
| Program ROAS | Attributed revenue ÷ (commissions + fees + mgmt time) | 5–10:1 mature | <3:1 → re-run the economics from Process step 1 |
| Concentration | Share of revenue from top 10% of affiliates | 70–90% is normal | Plan whale retention (tiers, dedicated contact), not panic |

### Fraud enforcement ladder

1. **Detect** (weekly): brand-term SERP and paid-ad check, coupon-leak search, CVR outlier scan, self-referral name/card match, single-IP click clusters.
2. **First violation**: written warning citing the exact clause, reversal of affected commissions, 7-day deadline to remove the offending placement.
3. **Second violation**: termination, forfeiture of unpaid locked commissions, removal of all codes and links within 24 hours.
4. **Coordinated fraud** (stolen cards, fake accounts): immediate termination, report to the network/platform, chargeback documentation retained.
Log every enforcement action with screenshots and dates — networks arbitrate disputes on evidence, not assertions.

### Worked example — bootstrapped SaaS at $40/mo, 85% margin

Payout ceiling check: LTV ≈ $40 × 20 mo = $800; paid CAC = $250. Offer 25% recurring for 12 months = max $120/customer, well under CAC — approved. Cookie: 60 days (considered purchase). Lock: 30 days (matches refund window). Platform: Rewardful ($49/mo, Stripe-native, no override fee). Tiers: 25% Standard → 30% at 10 customers/quarter. First-sale bonus: $30 inside 30 days. Launch recruitment: email 4,000 existing users (expect ~60 signups at 1.5%), plus 150 cold prospects from "best [category] software" SERPs (expect ~15 joins at 10%, ~3–4 producers). Month-6 health target: 20% productive rate, EPC ≥ $150 per 100 clicks, reversal rate < 5%, program ROAS ≥ 6:1.

## Output format

Deliver a single **Affiliate Program Blueprint** document with these sections, in order:

1. **Economics summary** — commission model/rate, cookie window, lock and payout terms, and the margin/CAC math proving the payout ceiling holds (show the arithmetic).
2. **Program terms** — the full clause pack from Template 1 with every bracket filled, plus a plain-English one-paragraph summary for the signup page.
3. **Tracking spec** — chosen platform, integration steps for the user's stack, the 3 test cases to run, and coupon-code attribution setup.
4. **Asset pack manifest** — itemized list of blurbs, banners (with pixel sizes), and content angles, with the copy for at least the 3 blurbs and the mandatory disclosure line written out.
5. **Recruitment plan** — prioritized channel list, target-list criteria, the filled recruitment pitch (Template 2), and volume targets with expected conversion at each stage.
6. **Tiers, bonuses & activation** — tier table with thresholds, bonus calendar, and the 3-email activation sequence outline.
7. **Health dashboard & fraud SOP** — metric definitions with target ranges, review cadence, and the weekly fraud checklist with enforcement ladder.
8. **30-day launch checklist** — dated action items from "sign platform contract" to "first payout run".

Where the user only asked for one component (e.g., just terms, or just commission advice), deliver only that section — but always include the economics check whenever rates are being set.

## Quality checklist

- [ ] Commission rate is justified against gross margin AND compared to paid CAC, with the arithmetic shown.
- [ ] Commission model matches the business (recurring for SaaS, bounty for sub-$50 AOV, % for e-commerce).
- [ ] Recurring commissions are time-capped or the lifetime liability is explicitly acknowledged.
- [ ] Cookie window is stated in days, with the attribution rule (last affiliate click, overwrite behavior) spelled out.
- [ ] Lock period ≥ refund window, and refund clawback is automated in the tracking spec.
- [ ] Terms include all of: brand bidding ban, coupon code rule, self-referral ban, cookie-stuffing ban, FTC disclosure requirement, trademark-in-domain ban, termination/clawback rights.
- [ ] Coupon/deal site policy is an explicit yes-with-rules or no — not silent.
- [ ] Tracking spec includes server-side conversion tracking and the 3 verification test orders.
- [ ] Asset pack lists concrete deliverables with sizes/word counts, and the disclosure line is written verbatim.
- [ ] Recruitment plan names specific channels with realistic conversion assumptions (5–15% cold join rate, 15–25% producer rate).
- [ ] Tier thresholds use a trailing window (e.g., 90 days) with a stated review and demotion policy.
- [ ] Health metrics include an incrementality signal, not just attributed revenue.
- [ ] No multi-level/recruitment commissions anywhere in the design.
- [ ] Every bracket in every template is filled — zero placeholders remain in the deliverable.

## Common mistakes

- **Paying full commission on coupon-site traffic.** A customer at checkout googles "[brand] coupon", clicks a deal site, and the affiliate cookie steals attribution on a sale that was already happening. Fix with the code-only rule and by banning or rate-limiting coupon sites.
- **Setting rates by copying a big competitor.** Amazon pays 1–4% because of conversion volume and brand trust; a startup at 4% recruits nobody. Rate must sell the program to affiliates and survive your margin — both, simultaneously.
- **Lifetime recurring commissions granted casually.** A 30% lifetime rate on a customer who stays 5 years costs 30% of 60 months. Cap at 12–24 months unless you've modeled LTV and decided otherwise on purpose.
- **No brand bidding clause, then shock at CAC inflation.** Affiliates outbid you on your own brand keywords, you pay both the click premium and the commission. Ban it in writing on day one and run weekly brand-term SERP checks.
- **Lock period shorter than the refund window.** You pay commission in week 2, the customer refunds in week 4, and clawing back cash from a paid-out affiliate is a losing negotiation.
- **Launching with links only.** Video and podcast audiences don't click links; without vanity coupon codes as backup attribution you undercount those affiliates and they quit believing your tracking.
- **Recruiting 500 affiliates and onboarding none.** Signups without an activation sequence, first-sale bonus, and fresh monthly angles yields the classic dead program: 3% active, zero momentum. Activation work beats recruitment volume.
- **Measuring the program by attributed revenue alone.** Attribution ≠ incrementality. If most "affiliate" orders come from coupon and cashback placements clicked mid-checkout, the program is a discount line item wearing a growth costume. Watch the incrementality proxy from step 10.
- **Client-side-only tracking pixels.** Safari ITP and ad blockers silently drop 15–30% of conversions; affiliates notice missing sales before you do, and trust never recovers. Require server-side postbacks from day one.
- **Terms that can't change.** Omitting the modification clause means you're stuck with launch-day rates forever or forced into breach. Reserve the right to amend with 30 days notice.
