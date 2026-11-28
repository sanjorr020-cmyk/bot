---
name: reviews-and-testimonials
description: "Builds review-generation and testimonial programs end-to-end: success-moment ask timing, channel selection (Google, G2, Trustpilot, app stores), ask templates, FTC-compliant incentives, NPS surveys, testimonial interviews, and negative-review responses. Use when the user says things like 'get more Google reviews', 'set up an NPS program', 'write a review request email', 'we got a 1-star review, help me respond', 'collect testimonials for our site', 'run a G2 review campaign', 'can we offer a gift card for reviews', or 'increase our app store rating'."
---

# Reviews & Testimonials

Turn happy customers into public, credible social proof — systematically, not by luck. This skill covers designing the full loop: identify success moments, ask the right customers on the right channel at the right time, stay inside FTC and platform rules on incentives, run an NPS program that feeds the review pipeline, conduct and format testimonial interviews, and respond to negative reviews in a way that wins over future readers rather than the angry reviewer.

## When to use this skill

Use it when the user wants to:
- Generate more reviews on Google, G2, Capterra, Trustpilot, Yelp, or the Apple/Google app stores
- Write or improve review request emails, in-app prompts, or SMS asks
- Stand up or fix an NPS (Net Promoter Score) program
- Check whether a review incentive is legal/allowed on a given platform
- Interview customers for testimonials and format quotes for a website, ads, or sales decks
- Draft responses to negative (or positive) public reviews

Do NOT use it for:
- Long-form customer stories with narrative and metrics → **case-studies**
- Mining survey/support data for product themes → **customer-feedback-analysis**
- Rescuing at-risk accounts surfaced by detractor scores → **churn-prevention** (this skill hands detractors off there)
- Optimizing the Google Business Profile itself (categories, photos, posts) → **local-seo**
- Paying creators for endorsements → **influencer-marketing**
- Placing testimonials on pages for conversion → **landing-page-cro** or **website-copywriting**

## Inputs to gather

Ask the user for these; assume the default when they don't know.

1. **Business type and sales motion** — B2B SaaS, local service, e-commerce, mobile app? (Determines channel: no default; this one you must get.)
2. **Target review channel(s)** — Default by type: local business → Google Business Profile; B2B SaaS → G2 + Google; e-commerce → Trustpilot or Google Seller Ratings; mobile app → App Store / Google Play native prompts.
3. **Current state** — review count, average rating, NPS if known. Default assumption: fewer than 20 reviews, no NPS program, ad-hoc asks only.
4. **Customer touchpoints available** — email list, in-app messaging, SMS, post-support CSAT, account managers. Default: email only.
5. **Success moments in the customer lifecycle** — first value delivered, milestone hit, renewal, 5-star support ticket. If unknown, help them define 2-3 in Process step 1.
6. **Volume** — monthly customers/transactions/active users. Default: assume low volume (<500/mo), which rules out heavy automation and favors personal asks.
7. **Budget/tools** — review platform subscriptions (Trustpilot paid, G2 profile), survey tool (Delighted, AskNicely, in-house). Default: no paid tools; design for manual + email.
8. **Any regulated-industry constraints** — healthcare (HIPAA: never confirm someone is a patient in a public reply), finance, legal. Default: none.

## Process

1. **Map success moments.** List 2-4 points where the customer has just experienced value and emotion is highest. Concrete defaults by type:
   - Local service: within 24 hours of job completion or 5-star CSAT.
   - B2B SaaS: 30-60 days post-onboarding after first measurable win; after a QBR with good numbers; 7 days after renewal.
   - E-commerce: 7-14 days post-delivery (product must arrive and be used first — not at checkout).
   - Mobile app: after the 3rd-5th successful core action, never on first launch, never mid-task.
   Rule: ask within 24-72 hours of the moment. Delight decays; response rates roughly halve after a week.

2. **Pick the channel deliberately.** One primary channel until it has 50+ reviews, then diversify. Decision guide:
   - **Google Business Profile**: highest local-SEO and general-trust impact; reviewer needs a Google account; no incentives allowed; owner can't turn reviews off. Use the direct review link (`g.page/r/.../review` format from the GBP dashboard) — every extra click cuts completion ~20%.
   - **G2 / Capterra**: B2B software buyers live here. G2 reviews take 10-15 minutes (multi-question form), so conversion is lower — set expectations in the ask. G2 permits gift-card incentives IF offered regardless of sentiment and disclosed (reviews get an "incentivized" badge). Typical incentive: $10-25 gift card.
   - **Trustpilot**: e-commerce trust seal; prohibits incentives entirely; prohibits cherry-picking — invitations must go to all customers or an unbiased sample, not just happy ones.
   - **Apple App Store**: only prompt via `SKStoreReviewController` — Apple caps it at 3 prompts per user per 365 days and forbids custom "rate us" gating dialogs before it.
   - **Google Play**: use the In-App Review API; quota-limited (roughly one prompt per user per month); don't ask a leading question first.

3. **Design the ask flow.** For each success moment, define: trigger → who asks (automated email, in-app, or a human) → template → one reminder (send 3-5 days later; a single reminder typically adds 30-50% more completions; more than one reminder breeds resentment and platform spam flags). Personal asks from an account manager or owner convert at 20-40%; automated email asks at 2-10%; in-app native prompts at 1-5% of prompted users. Route asks so each customer gets ONE channel — don't ask the same person for Google and G2 in the same quarter.

4. **Run the compliance check before anything ships.** Non-negotiables:
   - **No review gating.** Filtering — "happy? → public review; unhappy? → private feedback form" — violates the FTC's 2024 Rule on Consumer Reviews and Testimonials (civil penalties up to ~$51,744 per violation) and Google/Trustpilot policy. You MAY use NPS to prioritize who gets a *personal* ask, but any automated flow that suppresses negative reviewers is gating.
   - **No fake, purchased, or employee-written reviews.** Also banned: reviews from people with undisclosed material connections (employees, family, resellers).
   - **Incentives:** allowed only where the platform permits (G2 yes with disclosure; Google, Trustpilot, Yelp, app stores no), and always offered for *a* review, never for *a positive* review.
   - **Testimonials:** get written consent (see release template below); disclose if the person was compensated or received free product; never edit a quote in a way that changes its meaning; "results not typical" claims need substantiation or a typicality disclaimer.

5. **Stand up the NPS program.** One question — "How likely are you to recommend [product] to a friend or colleague?" on a 0-10 scale — plus one open follow-up: "What's the main reason for your score?" Mechanics:
   - Scoring: Promoters = 9-10, Passives = 7-8, Detractors = 0-6. NPS = %Promoters − %Detractors (range −100 to +100).
   - Cadence: relational survey quarterly to a rotating 1/90th of the base daily (avoids survey spikes), or transactional after key milestones. Never survey the same person more often than every 90 days.
   - Channels and expected response rates: in-app 20-40%, email 10-25%. Below 100 responses, treat the score as directional only (margin of error exceeds ±10 points).
   - Benchmarks: B2B SaaS median ≈ 30-40; above 50 is strong; e-commerce 40-60; telecom/ISPs often below 10. Trend matters more than the absolute number.
   - **Close the loop:** Detractors get a human reply within 48 hours (then hand to **churn-prevention**). Passives get the open-text answer mined for one fixable issue. Promoters (9-10) enter the review/testimonial pipeline within 24-72 hours — this is the engine that feeds step 3.

6. **Recruit and interview testimonial candidates.** Source from promoters, renewal customers, and unsolicited praise (support tickets, social mentions). Book 20-30 minutes, record with permission, and use the interview guide below. Aim for quotes containing a number, a timeframe, or a named alternative ("cut our close time from 9 days to 2") — specificity is what separates a testimonial from noise.

7. **Format and deploy testimonials.** Edit each interview into: one short pull quote (15-40 words), one medium quote (40-80 words), and attribution (full name, title, company, headshot). Anonymous or initials-only quotes convert measurably worse — push for full attribution; offer to let them approve final copy as the trade. Send the release form, get sign-off on the exact edited text, and log consent date. Deploy: website (pair quotes with the objection they answer), sales decks, ads (check the release covers paid media), proposal appendices. If a story has strong metrics, escalate it to **case-studies**.

8. **Respond to reviews — all of them.** Positive reviews: reply to at least the detailed ones within a week, 1-3 sentences, thank + reinforce a specific detail (helps SEO keywords on Google). Negative reviews: reply within 24-48 hours using the H.E.A.R.D. framework below. Google Play replies are capped at 350 characters — write tight. Never offer compensation publicly (it trains bad-faith reviews). After a genuine fix, it's acceptable to ask the reviewer once whether they'd consider updating their review; never demand removal.

9. **Measure and iterate monthly.** Track: reviews gained per channel, ask→review conversion by template and moment, average rating trend, NPS trend, response-time SLA on negatives. Kill the worst-performing ask template each quarter and A/B a new one (see **ab-testing** for method). Healthy targets: steady review velocity (recency matters — a profile whose newest review is 8 months old reads as dead), average rating 4.2-4.8 (a flat 5.0 with volume reads as fake to buyers and to platform fraud filters), 100% response rate on negative reviews.

## Frameworks & templates

### Template 1 — Post-success review request email (Google / Trustpilot)

> **Subject:** Quick favor, {{first_name}}? (takes 60 seconds)
>
> Hi {{first_name}},
>
> {{Personal line referencing the success moment: "Great to see the team hit {{milestone}} last week" / "Glad we could get {{job}} finished ahead of schedule."}}
>
> Would you share that experience in a quick review? It takes about a minute, and reviews are how most of our new customers find us.
>
> **[Leave a review]({{direct_review_link}})**
>
> If anything was less than great, just reply to this email — I read every one and I'd rather fix it than not know.
>
> Thanks either way,
> {{sender_name}}, {{title}}

Notes: the "reply if unhappy" line is compliant because the review link goes to everyone — it invites private feedback *in addition to*, not *instead of*, the public option. Send one reminder after 3-5 days with a changed subject line only.

### Template 2 — G2/Capterra campaign email (incentivized, compliant)

> **Subject:** 10 minutes of your expertise → $25 gift card
>
> Hi {{first_name}},
>
> Software buyers rely on G2 reviews the way you probably did when evaluating us. Would you write one about {{product}}?
>
> Honest is the only requirement — good, bad, or mixed, we want the real picture, and G2 requires it. As a thank-you for your time, G2 will send a $25 gift card once the review is published (it takes ~10 minutes; you'll need your work email or LinkedIn to verify).
>
> **[Write your review]({{g2_review_link}})**
>
> {{sender_name}}

### Template 3 — NPS survey + routing

> **Q1:** How likely are you to recommend {{product}} to a friend or colleague? (0 = not at all likely, 10 = extremely likely)
> **Q2:** What's the main reason for your score?

Routing rules:
- **9-10:** Auto-send within 24-72h: "Thanks for the 10, {{first_name}} — that made our week. Would you say that publicly? [review link]. Takes a minute." (Promoter→review-ask conversion benchmark: 10-25%.)
- **7-8:** No ask. Log Q2 verbatim for **customer-feedback-analysis**.
- **0-6:** No ask, no automation. Human replies within 48h: "You gave us a {{score}} and I want to understand why — do you have 15 minutes this week?" Then hand off to **churn-prevention**.

### Framework — Testimonial interview guide (20-30 min, record it)

1. "What was going on that made you look for a solution like ours?" (before-state)
2. "What else did you try or consider?" (alternatives — names make quotes credible)
3. "What almost stopped you from buying?" (objection material for sales)
4. "What changed after you started using it? Any numbers you can share?" (the money quote — probe for metrics, timeframes)
5. "What would you tell someone on the fence?" (natural pull-quote phrasing)
6. "Anything that could be better?" (builds trust; sometimes yields the credible 'flaw' that makes praise believable)

Close with: "Can we quote you by name and title? I'll send you the exact wording to approve before anything goes live."

### Framework — H.E.A.R.D. negative-review response

- **H**ear: name their specific complaint so it's clear a human read it.
- **E**mpathize/apologize for the experience — no excuses, no "but".
- **A**ct: state concretely what you're doing or have changed.
- **R**edirect offline: give a named person + direct contact.
- **D**on't: argue, blame the customer, reveal their account/health/purchase details, write more than ~100 words, or copy-paste the same reply on every review.

Worked example (2-star: "Waited 3 weeks for a refund and support ghosted me"):

> Hi Dana — a three-week refund wait is not okay, and I'm sorry our support team went quiet on you. I've located the ticket and issued the refund today; you should see it in 3-5 business days. We've also changed our escalation rule so refund tickets can't sit unanswered past 48 hours. If it doesn't land, email me directly: mara@acme.com. — Mara T., Support Lead

### Template 4 — Testimonial release (short form)

> I, {{name}}, grant {{company}} permission to use my statements, name, title, company name, and likeness in marketing materials, including website, advertising, and sales collateral. I confirm the statements reflect my honest opinion and experience. I understand I may revoke future use with 30 days' written notice. Compensation received (if any): {{none / description — must be disclosed alongside the testimonial if material}}.
> Signed: ______ Date: ______

### Worked example — raw interview answer → formatted testimonial

Raw transcript (Q4 answer): "Honestly it was a mess before, we were doing everything in spreadsheets and stuff fell through the cracks constantly. I'd say since we switched, proposals that used to take, what, most of a week? Nine days sometimes? Now it's like two days, maybe less. My team stopped complaining, which never happens."

Formatted pull quote (website hero, 22 words):

> "Proposals that used to take nine days now go out in two. My team stopped complaining — which never happens."
> **Priya Raman**, VP of Sales, Northgate Logistics

Formatted medium quote (pricing page, objection: "will this actually save time?", 54 words):

> "Before, everything lived in spreadsheets and deals fell through the cracks constantly. Since switching, proposals that used to take up to nine days go out in two or less. The time savings alone paid for the subscription in the first month, and my team actually stopped complaining about the process — which never happens."
> **Priya Raman**, VP of Sales, Northgate Logistics

What changed and why it's allowed: filler removed, tenses cleaned, sentences reordered — meaning preserved. Priya approved this exact wording before publication. Adding a claim she didn't make ("paid for the subscription" appears in her later Q5 answer, so it's fair; inventing it would not be) is where editing becomes fabrication.

## Output format

Deliver whichever of these the user asked for; for a full program, deliver all of them in one document:

1. **Review generation plan** (1-2 pages): success-moment map (moment → trigger → channel → owner → timing), channel priority with rationale, compliance notes specific to the chosen platforms.
2. **Ask assets**: final email/in-app/SMS copy with merge fields, subject lines, reminder copy, and the direct review link placeholder clearly marked for the user to fill.
3. **NPS spec**: question wording, scale, cadence, sample-size caveat, routing rules for 0-6 / 7-8 / 9-10 with SLA hours, and the promoter→review-ask email.
4. **Testimonial kit**: interview guide, outreach message to book the call, release form, and 2-3 formatted example quote blocks (pull quote + attribution) in the exact structure the user's site needs.
5. **Review response pack**: H.E.A.R.D. cheat-sheet plus 3-5 drafted responses to the user's actual pending reviews (get the review text from them), each within platform character limits.

Always state which platform policies were checked (Google, G2, Trustpilot, Apple, Google Play) and flag any user request that violates them instead of silently complying.

## Quality checklist

Pass every item before delivering:

- [ ] Every ask is tied to a named success moment with a specific trigger and a 24-72h send window — no "blast the whole list" asks.
- [ ] The plan names ONE primary review channel and justifies it against the business type.
- [ ] Direct review links (not "search for us on Google") are specified everywhere a link appears.
- [ ] No flow filters unhappy customers away from public review links (no gating) — verify the NPS routing only *adds* asks for promoters, it never blocks the general invitation channel.
- [ ] Any incentive is platform-legal, sentiment-neutral, and disclosed; the copy says "honest review", never "positive review" or "5-star".
- [ ] NPS question uses the standard 0-10 wording, segments are 0-6/7-8/9-10, and the plan warns that <100 responses is directional only.
- [ ] Detractor close-the-loop has a named owner and a ≤48h SLA.
- [ ] Exactly one reminder per ask sequence, sent 3-5 days after the first ask.
- [ ] Testimonial quotes include full name + title + company, at least one contains a concrete number or timeframe, and a signed release step exists before publication.
- [ ] Every negative-review draft follows H.E.A.R.D., stays under ~100 words (≤350 characters for Google Play), and moves the conversation offline with a named contact.
- [ ] No response draft confirms private customer details (order specifics, health, account status) in public.
- [ ] Mobile-app plans use only `SKStoreReviewController` / In-App Review API prompts within Apple's 3-per-year and Google's quota limits.
- [ ] Templates contain no unfilled placeholders except clearly-marked merge fields the user must supply.

## Common mistakes

- **Gating dressed up as "feedback routing."** The classic widget — thumbs-up goes to Google, thumbs-down goes to a form — is the single most common violation. It's banned by the FTC rule and by Google, and vendors selling it don't absorb your liability.
- **Asking at checkout/delivery instead of after value.** E-commerce asks sent with the shipping confirmation collect reviews about the *buying* experience from people who haven't opened the box. Wait 7-14 days.
- **One giant annual review blast.** Fifty reviews landing in one week trips platform fraud filters (Google and Yelp both suppress velocity spikes) and then the profile goes quiet for a year. Drip asks continuously.
- **Chasing 5.0.** Buyers discount perfect ratings; 4.2-4.8 with recent volume outperforms a spotless 5.0 with 12 reviews. Never suppress or "bury" honest negatives — display both.
- **Copy-paste replies to negative reviews.** Identical apologies on every 1-star tell readers nobody is home. Reference the specific complaint every time.
- **Arguing the facts in public.** Even when the reviewer is wrong, the audience is future customers, not the reviewer. Correct factual errors once, calmly, then go offline.
- **Treating NPS as the deliverable.** A score on a dashboard with no detractor follow-up and no promoter review-ask is a vanity metric. The routing IS the program.
- **Surveying too often.** Monthly NPS to the same users tanks response rates and inflates detractors out of annoyance. 90-day minimum gap per person.
- **Testimonials with no attribution or no consent.** "— J.D., satisfied customer" persuades no one, and an enthusiastic quote used without a signed release becomes a legal problem the day that customer churns angry.
- **Offering the incentive only after seeing the review is positive.** Sentiment-conditional rewards are the same violation as asking for 5 stars — the offer must be made up front, to everyone invited, regardless of what they write.
- **Custom "enjoying the app?" pre-prompts before the native rating dialog.** Apple explicitly rejects apps for gating the `SKStoreReviewController` prompt behind a sentiment question.
