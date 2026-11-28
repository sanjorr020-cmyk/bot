---
name: landing-page-cro
description: "Audits and optimizes landing pages for conversion: message match with traffic source, above-the-fold structure, section-by-section page anatomy, form design, proof elements, page speed, and an ICE-prioritized test backlog. Use when the user asks to improve landing page conversion rate, audit or critique a landing page, fix low conversion on paid traffic, design a landing page structure or wireframe, reduce form abandonment, write above-the-fold copy, prioritize CRO test ideas, or diagnose why ad clicks aren't converting."
---

# Landing Page CRO

Turn an underperforming landing page into a structured conversion machine. This skill covers the full workflow: diagnose message match between the traffic source and the page, rebuild the above-the-fold section with a proven formula, lay out the page section by section, cut form friction, place proof elements where doubt occurs, flag page-speed killers, and produce an ICE-scored test backlog so the user knows exactly what to change first and what to test next. The deliverable is a written CRO audit plus a page blueprint — not a live redesign.

## When to use this skill

Use when the user wants to:
- Audit an existing landing page ("why isn't my page converting?")
- Design the structure/wireframe for a new landing page before build
- Improve conversion on a specific paid campaign's destination page
- Reduce form abandonment or decide which form fields to cut
- Build and prioritize a backlog of CRO test ideas

Do NOT use for:
- Writing full copy for a multi-page marketing site → **website-copywriting**
- Designing or analyzing the statistics of an experiment → **ab-testing** (this skill generates and prioritizes ideas; that skill runs the test)
- Fixing the ads themselves (targeting, bids, ad copy) → **google-ads**, **meta-ads**, **ad-copywriting**, or **ppc-audit**
- Diagnosing drop-off across a multi-step funnel beyond the landing page → **funnel-analysis**
- Sitewide speed/crawl issues → **technical-seo**
- Post-conversion email or onboarding flows → **email-marketing**, **customer-onboarding**

## Inputs to gather

Ask for these before starting. Defaults let you proceed when the user doesn't know.

1. **The page.** URL, screenshot, or copy/paste of the page content. If the page doesn't exist yet, get the offer description and switch to blueprint mode (Process step 9).
2. **Traffic source(s) and the actual ad.** The specific ad copy, email, or post sending traffic. This is mandatory for the message-match audit — ask twice if needed. Default if unavailable: assume paid search on the page's main keyword and note the assumption.
3. **Conversion goal.** One primary action (demo request, purchase, signup, lead form, call). If the user lists several, make them pick one; a page optimizes for exactly one goal.
4. **Current metrics.** Conversion rate, monthly visitors, bounce rate, form starts vs. completions, mobile/desktop split. Defaults when unknown: assume 60/40 mobile/desktop and compare against benchmarks in Process step 1.
5. **Audience temperature.** Cold (prospecting ads), warm (retargeting, email list), or hot (branded search). Default: match to source — social ads = cold, branded search = hot, everything else = warm.
6. **Offer and objections.** What's promised, price point, and the top 2-3 reasons prospects hesitate. If the user doesn't know objections, infer from price and category (B2B SaaS: "will my team adopt it?", "implementation effort"; services: "can I trust them?", "what does it cost?"; ecommerce: "quality?", "returns?").
7. **Constraints.** CMS/page builder, brand rules, legal/compliance requirements (health, finance, and employment offers have claim restrictions), dev resources available.

## Process

1. **Establish the baseline and the gap.** Compare current conversion rate to realistic medians by context: paid search lead-gen pages 3-6% (top decile 10%+), paid social lead-gen 2-4%, ecommerce product/landing pages 2-4%, free-trial SaaS signup pages 5-10%, gated content 15-25%. If the page is below the low end of its band, structural problems are likely; if within band, expect incremental wins from testing. State which case applies.

2. **Run the message-match audit.** Place the ad and the page side by side. Score each element with the Message Match Scorecard (see Frameworks). A total below 8/12 means message match is the primary fix — repair it before anything else, because no amount of page polish converts visitors who think they clicked into the wrong place. Rule of thumb: the page headline should share its key noun phrase with the ad headline, and the offer named in the ad (price, discount, free trial length) must appear above the fold verbatim.

3. **Audit above the fold.** Check for the five required elements (formula in Frameworks): headline, supporting subhead, primary CTA, hero visual, and at least one trust signal — all visible without scrolling on a 375px-wide mobile screen. Grade the headline: does it state a specific outcome or just a category label? "Project management software" fails; "Ship projects 30% faster without status meetings" passes. Headline target: under 10 words. Subhead: 1-2 sentences, under 25 words, answering "how" or "for whom."

4. **Walk the page anatomy top to bottom.** Map the existing page against the 8-section blueprint (see Frameworks). For each section note: present/missing, in the right order or not, and whether it answers the objection a visitor has at that scroll depth. The page should follow the visitor's internal question sequence: "Am I in the right place?" → "What is this?" → "Will it work for me?" → "Can I trust you?" → "What's the risk?" → "What do I do now?"

5. **Audit the form (or CTA path).** Count fields. Each field beyond the minimum typically costs 5-10% of completions, so justify every one: does sales actually use this data on the first call? Cut anything answerable later or enrichable from the email domain (company size, industry — tools like Clearbit fill these). Targets: top-of-funnel lead magnet 1-3 fields (email, maybe first name); demo request 3-5 fields; quote request up to 6-7 if the quote genuinely requires them, using a 2-step form (easy questions on step 1, contact info on step 2 — commitment built on step 1 lifts completion 20-30% in many cases). Also check: labels above fields (not placeholder-only), inline validation, mobile keyboard types (email/tel), button text that states value ("Get my free quote," not "Submit"), and no CAPTCHA on low-spam forms.

6. **Place proof elements at points of doubt.** Inventory available proof: customer count, named logos, testimonials with full name/photo/company, star ratings with review count, case-study metrics, certifications/security badges, press mentions, guarantees. Match each to the objection it neutralizes and place it adjacent to where that objection arises — pricing objection proof next to the price, trust proof next to the form, results proof after the benefits section. A testimonial that names a specific result ("cut our close time from 14 days to 6") outperforms generic praise ("great tool, great team") — flag every generic testimonial for replacement. If proof is thin, note it and point the user to **reviews-and-testimonials** or **case-studies** to build inventory.

7. **Check page speed and technical friction.** Run PageSpeed Insights (or ask the user to paste results). Thresholds: LCP under 2.5s, INP under 200ms, CLS under 0.1. Mobile pages taking over 3s to load lose roughly half their visitors before render. Most common landing-page culprits, in order: uncompressed hero images (should be WebP/AVIF, under 200KB), render-blocking third-party scripts (chat widgets, heatmap tools, excess tags), no image lazy-loading below the fold, web fonts blocking text render. Also flag: navigation menus on paid landing pages (remove them — every nav link is an exit; keep only the logo, unlinked or linked to the page top), autoplay video with sound, and popups that fire before 50% scroll or 15 seconds.

8. **Build the ICE-scored test backlog.** Convert every finding into a test idea phrased as a hypothesis: "Because [evidence], changing [element] to [variant] will increase [metric]." Score each 1-10 on Impact, Confidence, Ease; ICE = average of the three. Sort descending. Separate "just fix it" items (broken things, message-match failures, speed issues — no test needed, deploy immediately) from genuine test candidates. Then check test feasibility: a page needs roughly 1,000+ conversions/month to run meaningful A/B tests at typical effect sizes; below ~500/month, recommend sequential before/after changes of the top ICE items instead, and hand the actual test design to **ab-testing**.

9. **Blueprint mode (new pages only).** If no page exists, skip audits and produce the 8-section blueprint filled in with draft copy direction per section, the above-the-fold copy using the formula, the recommended form spec, and a proof-element shopping list. Still deliver the ICE backlog as "things to test after launch."

10. **Deliver the audit** in the Output format below. Lead with the 3 highest-leverage changes in plain language before the detailed findings.

## Frameworks & templates

### Message Match Scorecard (score each 0-2: 0 = mismatch, 1 = partial, 2 = match)

| Element | Ad says | Page says | Score |
|---|---|---|---|
| Headline keyword/promise | | | /2 |
| Offer specifics (price, %, trial length) | | | /2 |
| Audience callout (who it's for) | | | /2 |
| Visual continuity (image/color/style) | | | /2 |
| CTA verb (ad CTA vs. page button) | | | /2 |
| Tone/temperature fit (cold traffic ≠ "Buy now") | | | /2 |
| **Total** | | | **/12** |

10-12: message match is fine, look elsewhere. 8-9: patch the weak rows. Below 8: this is the primary conversion leak.

### Above-the-Fold Formula

```
[HEADLINE] Outcome the visitor wants + specificity (number, timeframe, or mechanism). ≤10 words.
[SUBHEAD] How it works or who it's for. ≤25 words.
[CTA BUTTON] First-person value statement, 2-5 words. "Get my free audit" > "Learn more."
[HERO VISUAL] Product in use, result achieved, or the customer's "after" state. Never a generic stock handshake.
[TRUST SIGNAL] One line: "Trusted by 2,400+ clinics" / 4 logos / "4.8 stars from 900 reviews."
```

Worked example 1 (B2B payroll software, paid search ad "payroll software for restaurants"):
- Headline: "Restaurant payroll done in 15 minutes a week"
- Subhead: "Tips, split shifts, and multi-location taxes handled automatically. Built for restaurants with 10-200 staff."
- CTA: "See my payroll demo"
- Visual: dashboard screenshot showing a completed pay run with tip allocations visible
- Trust: "Runs payroll for 3,100+ restaurants" + 4 recognizable logos

Worked example 2 (local home services, Meta ad "Is your AC ready for summer? $49 tune-up this month"):
- Headline: "$49 AC tune-up — booked in 60 seconds"
- Subhead: "Licensed techs in the Phoenix metro. Same-week appointments, no upsell pressure, price locked before we arrive."
- CTA: "Book my $49 tune-up"
- Visual: photo of a uniformed technician at a residential unit (real crew, not stock)
- Trust: "4.9 stars across 1,200+ Google reviews"
Note how the $49 from the ad appears twice above the fold — offer-specific numbers from the ad must survive the click.

### CTA Button Copy Bank

Pattern: first-person possessive + verb + the thing they get. Swap by goal:
- Lead magnet: "Send me the checklist" / "Get my free template"
- Demo: "See my demo" / "Show me how it works"
- Quote: "Get my free quote" / "See my price"
- Trial: "Start my free trial" (add "No credit card required" microcopy directly beneath)
- Purchase: "Get [product] — $X" (showing price on the button reduces post-click sticker shock)
Avoid: "Submit," "Learn more," "Continue," "Click here" — all describe effort or vagueness, not value.

### Form Field Audit Template

| Field | Used by sales/ops on first touch? | Enrichable or askable later? | Verdict |
|---|---|---|---|
| Email | Yes — required to respond | No | Keep |
| First name | Yes — personalization | No | Keep |
| Company name | Partially | Yes — from email domain | Cut (enrich) |
| Company size | Routing only | Yes — enrichment | Cut (enrich) |
| Phone | Only if calling is the follow-up | Sometimes | Keep only if calls happen within 24h; make optional otherwise |
| Budget | Rarely honest | Yes — discovery call | Cut |
| "How did you hear about us?" | Marketing curiosity | Yes — post-conversion survey | Cut |

### Proof Element Hierarchy (strongest to weakest — use the best two tiers available)

1. Specific customer results with names: "Acme cut onboarding time 40%" + logo + person
2. Volume + rating: "4.8 stars from 2,300 reviews," "12,000 customers"
3. Recognizable logos (only if genuinely recognizable to this audience)
4. Third-party badges: G2/Capterra awards, SOC 2, industry certifications
5. Press mentions
6. Unattributed or generic testimonials — treat as tier to replace, not to use

### 8-Section Page Anatomy (in order)

1. **Above the fold** — the formula above. Answers "Am I in the right place, and what do I get?"
2. **Problem/agitation** — 2-4 sentences or 3 pain bullets mirroring the visitor's words. Answers "Do they get my situation?"
3. **Solution + benefits** — 3-4 benefit blocks, each: outcome-first heading, 1-2 sentence support, icon or screenshot. Features go inside benefits, never alone.
4. **How it works** — 3-step process ("Sign up → Connect your POS → First pay run Friday"). Kills "this sounds complicated."
5. **Proof block** — 2-3 specific testimonials or one mini case study with a number. Placed here because doubt peaks after claims.
6. **Objection handling** — FAQ of the top 4-6 real objections, or comparison table. Include price context if price is public.
7. **Risk reversal** — guarantee, free trial terms, "cancel anytime," security/compliance badges.
8. **Final CTA** — restate the core promise + the same CTA button. On pages over ~2 screens, repeat the CTA after sections 3 and 6 too (same goal, same wording — one goal per page).

Page length rule: match length to price and audience temperature. Cold traffic + high price = long page (all 8 sections). Hot branded traffic + free trial = short page (sections 1, 3, 5, 8).

### ICE Backlog Template

| # | Hypothesis (Because X, changing Y to Z will lift M) | Impact 1-10 | Confidence 1-10 | Ease 1-10 | ICE | Type |
|---|---|---|---|---|---|---|
| 1 | Because the ad promises "free audit" but the page never says "free," adding "free" to headline + CTA will lift form submits | 8 | 9 | 10 | 9.0 | Just fix |
| 2 | Because 7 of 9 form fields aren't used by sales, cutting to email/name/company will lift completion rate | 8 | 8 | 9 | 8.3 | Just fix |
| 3 | Because testimonials are generic, replacing with 2 metric-based quotes will lift demo requests | 6 | 6 | 7 | 6.3 | A/B test |
| 4 | Because the hero is a stock photo, swapping to a product screenshot will lift engagement + CVR | 6 | 5 | 8 | 6.3 | A/B test |
| 5 | Because there's no risk reversal, adding a "no credit card required" line at the CTA will lift clicks | 5 | 6 | 9 | 6.7 | A/B test |

Scoring guides — Impact: 9-10 touches headline/offer/form on the primary CTA path; 5-6 mid-page sections; 1-3 footer/cosmetic. Confidence: 9-10 backed by this page's own data or a message-match failure; 5-6 industry pattern; 1-3 pure hunch. Ease: 9-10 copy/settings change same-day; 5-6 needs design; 1-3 needs engineering.

### Worked "Top 3 moves" example (what the audit's opening should sound like)

> 1. **Fix the broken promise.** Your ad offers a "free 30-minute strategy call," but the page headline says "Marketing services for growing brands" and the form button says "Submit." Change the headline to "Book your free 30-minute strategy call" and the button to "Book my free call." (Message match score: 5/12.)
> 2. **Cut the form from 9 fields to 4.** Budget, revenue, and "how did you hear about us" aren't used before the first call. Keep name, email, website, and one dropdown for service interest.
> 3. **Compress the hero image.** The 4.2MB PNG puts mobile LCP at 6.8s; roughly half your ad clicks bounce before seeing anything. Export as WebP at ~150KB — this alone likely recovers more conversions than any test on the backlog.

## Output format

Deliver a single markdown document titled "Landing Page CRO Audit — [page/campaign name]" containing:

1. **Top 3 moves** — the three highest-leverage changes, one sentence each, plain language.
2. **Baseline snapshot** — current CVR vs. benchmark band, traffic source(s), primary goal, mobile/desktop split, stated assumptions.
3. **Message match scorecard** — the filled table with a one-paragraph verdict.
4. **Above-the-fold rewrite** — current vs. recommended, using the formula (actual draft copy, not descriptions).
5. **Section-by-section findings** — the 8-section anatomy as a table: section, present?, finding, recommendation.
6. **Form spec** — fields to keep/cut/defer with rationale, button copy, 1-step vs. 2-step recommendation.
7. **Proof plan** — each objection mapped to a proof element and its placement; gaps flagged.
8. **Speed & technical fixes** — Core Web Vitals status and the specific culprits, ordered by impact.
9. **ICE backlog** — the full table, "just fix" items separated from test candidates, with a note on whether traffic supports A/B testing.

For blueprint mode, replace items 3-8 with the filled 8-section blueprint plus form spec and proof shopping list.

## Quality checklist

- [ ] The actual ad/email/post driving traffic was reviewed (or its absence explicitly noted as a limitation)
- [ ] Message match scorecard is filled with quotes from the real ad and page, not paraphrases
- [ ] The page has exactly one primary conversion goal and every recommendation serves it
- [ ] Recommended headline is ≤10 words and states an outcome, not a category
- [ ] All five above-the-fold elements are specified and verified against a 375px mobile view
- [ ] Every form field is individually justified or cut; target field count stated
- [ ] CTA button copy states value in 2-5 words ("Get my quote"), never "Submit" or "Learn more"
- [ ] Each proof element is mapped to a named objection and a placement on the page
- [ ] At least one testimonial recommendation includes a specific metric or names why current ones fail
- [ ] Core Web Vitals thresholds checked (LCP <2.5s, INP <200ms, CLS <0.1) with named culprits
- [ ] Navigation removal (or retention rationale) addressed for paid-traffic pages
- [ ] ICE backlog has ≥8 items, every one phrased as a "Because X, changing Y will lift M" hypothesis
- [ ] "Just fix" items are separated from test candidates
- [ ] Test feasibility addressed: monthly conversion volume vs. the ~500-1,000/month practical floor for A/B testing
- [ ] Rewritten copy contains zero unverifiable claims the user's legal/compliance constraints would block

## Common mistakes

- **Polishing a page that fails message match.** Testing button colors on a page whose headline doesn't repeat the ad's promise is optimizing the wrong variable. Fix match first; it's the only change that routinely moves conversion by whole percentage points.
- **Optimizing for two goals.** A page with "Book a demo" and "Start free trial" as equal CTAs splits intent and depresses both. Pick the primary; demote the other to a text link or remove it.
- **Treating the fold like it's 1440px wide.** Most paid traffic is mobile. If the CTA and trust signal only appear above the fold on desktop, the audit passed a screen most visitors never see.
- **Cutting form fields sales actually needs.** Field reduction that floods sales with unqualified leads trades a conversion metric for a revenue problem. Confirm with the user which fields drive lead routing/scoring before cutting — or move them to step 2 of a 2-step form. For qualification logic itself, see **lead-qualification**.
- **Stacking proof in one "wall of logos" section.** Proof works at the moment of doubt. Six logos in a row at the bottom of the page neutralize nothing; one guarantee line beside the form can.
- **Generic testimonials.** "Great company, highly recommend!" is decoration. If no metric-bearing quotes exist, say so and recommend collecting them rather than shipping filler.
- **Recommending A/B tests the traffic can't support.** At 200 conversions/month, a test needing 1,000 per variant runs for most of a year. Recommend sequential changes and honest before/after reads instead of fake rigor.
- **Ignoring the "just fix it" bucket.** Broken mobile layouts, 6-second load times, and ad-page contradictions don't need a test — they need a deploy. Backlogs that A/B test obvious defects waste weeks.
- **Long-page dogma (or short-page dogma).** Length follows price and traffic temperature, not preference. A $15k/year product sold to cold traffic on a 300-word page under-argues; a free trial behind 3,000 words over-argues.
- **Popups and chat widgets firing on entry.** An interruption before the visitor reads the headline raises bounce, damages LCP/INP, and on paid traffic burns money per intrusion. Delay any overlay to 50% scroll or exit intent.
