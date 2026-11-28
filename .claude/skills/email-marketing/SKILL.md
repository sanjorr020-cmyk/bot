---
name: email-marketing
description: "Designs lifecycle email campaigns end-to-end: welcome, nurture, promotional, cart/trial abandonment, and re-engagement sequences, including segmentation, trigger design, send timing, email anatomy, and performance benchmarks. Use when the user asks to build a welcome series, write a drip or nurture sequence, recover abandoned carts or expiring trials, win back lapsed subscribers, plan a promotional email campaign, set up email automations or triggers, segment an email list, or improve email open, click, or conversion rates."
---

# Email Marketing Campaigns

Build lifecycle email campaigns that convert: map the trigger and segment, design the sequence (number of emails, timing, escalation logic), write every email with a single job and a single CTA, and define success metrics against realistic benchmarks. The deliverable is always implementation-ready — copy plus trigger/segment specs a user can paste into Klaviyo, Mailchimp, HubSpot, Customer.io, or any ESP.

## When to use this skill

Use for:
- Automated lifecycle sequences: welcome/onboarding series, lead nurture drips, cart abandonment, browse abandonment, trial-expiry, post-purchase, win-back/re-engagement.
- One-off or multi-email promotional campaigns (launches, sales, seasonal pushes).
- Segmentation strategy, trigger/automation logic, sequence timing, and A/B priorities for email.
- Auditing an existing sequence against benchmarks.

Do NOT use for — route instead:
- Recurring editorial broadcasts (weekly digest, content roundup) → **email-newsletters**.
- Unsolicited prospecting to people who never opted in → **cold-email-outreach** (different laws, different playbook).
- Sales-rep follow-ups after calls or demos → **follow-up-sequences**.
- SPF/DKIM/DMARC, warmup, inbox placement, blocklists → **email-deliverability** (flag issues here, fix them there).
- The page the email links to → **landing-page-cro**. Test methodology depth → **ab-testing**. In-product activation flows → **customer-onboarding**. Churn-risk playbooks beyond the win-back email itself → **churn-prevention**.

## Inputs to gather

Ask for these; when the user doesn't know, state the default you're assuming and proceed:

1. **Business model and conversion goal** — ecommerce purchase, SaaS trial→paid, lead→sales call, donation? (No default; this you must get.)
2. **Campaign type** — welcome, nurture, promo, abandonment, re-engagement. If they say "email strategy," propose the 2-3 highest-ROI sequences for their model (ecommerce: welcome + cart abandonment; SaaS: welcome/onboarding + trial-expiry; services/B2B: welcome + nurture).
3. **List source and size** — how subscribers opted in, roughly how many. Default: assume opted-in list under 10k, single opt-in.
4. **ESP** — default: assume a mainstream ESP with event triggers, delays, and conditional splits; write specs generically.
5. **Offer and incentive budget** — can they discount? Default: no discount in email 1 of any sequence; discount only as escalation.
6. **Brand voice** — ask for 1-2 existing emails or site copy to match. Default: plain, direct, first-person singular from a named sender.
7. **Existing metrics** — current open/click/conversion rates if any, so you benchmark against their baseline, not just industry.
8. **Constraints** — regulated industry (finance, health), GDPR/CASL audience, existing sequences the new one must not collide with.

## Process

1. **Pick the sequence and define its one job.** Each sequence gets a single conversion goal (e.g., "first purchase within 14 days of signup"). If the user wants one sequence to do three jobs, split it into three sequences.

2. **Define the trigger.** Specify it as: *event + conditions + suppressions*. Example: "Trigger: `checkout_started` AND no `order_completed` within 60 min. Suppress: anyone who purchased in last 24h, anyone currently in the welcome series past email 2, anyone who unsubscribed." Every sequence spec must name its suppression rules — collisions between automations are the #1 way lifecycle programs annoy people.
   - Event triggers: signup, purchase, cart/checkout event, trial start, feature used, page viewed.
   - Time triggers: X days since last order, trial day N, N days of inactivity.
   - Exit conditions: always define when someone leaves the sequence early (goal completed, replied, unsubscribed).

3. **Segment before you write.** Minimum viable segmentation by lifecycle stage: new subscriber / active customer / lapsed. Layer on behavior when data exists: purchase history (first-time vs. repeat), engagement recency (opened/clicked in last 30/60/90 days), and for ecommerce, RFM (Recency, Frequency, Monetary — score each 1-5, target campaigns by tier). Rule of thumb: a segment must have ≥500 recipients to be worth separate creative; below that, personalize with merge fields instead.

4. **Map the sequence** — number of emails, timing, escalation. Use these defaults, then adjust to sales cycle length:

   | Sequence | Emails | Timing | Escalation logic |
   |---|---|---|---|
   | Welcome | 4-5 | 0 min, day 2, day 4, day 7, day 10 | Deliver promise → story/values → social proof → objection → first offer |
   | Nurture (B2B/lead) | 5-7 | Every 3-5 days over 3-4 weeks | Teach → teach → case study → teach → soft CTA → direct CTA |
   | Cart abandonment | 3 | 1-4 h, 24 h, 48-72 h | Reminder → objections/social proof → urgency or incentive |
   | Trial expiry (SaaS) | 4-5 | Day 1, mid-trial, 3 days before end, expiry day, +3 days after | Activate → value recap → upgrade CTA → deadline → grace offer |
   | Re-engagement | 3 | Day 0, +5-7 days, +7-10 days | "We miss you"/best content → incentive → sunset ("reply or we remove you") |
   | Promotional | 3-4 | Announce, +3-4 days value/proof, final 24 h, optional final 4 h | Announcement → reasons to believe → deadline urgency (real deadline only) |

   Re-engagement trigger point: 60-90 days without an open/click for ecommerce, 30-60 days of product inactivity for SaaS. After the sequence, actually suppress non-responders from regular sends — mailing dead addresses degrades deliverability (see **email-deliverability**).

5. **Write each email.** One idea, one CTA per email. Anatomy and specs:
   - **Sender name:** a person or "Person at Brand" ("Maya at Loom"). Never `noreply@`.
   - **Subject line:** 30-50 characters (mobile truncates ~35-40). Lead with the benefit or curiosity gap; no ALL CAPS, ≤1 emoji, avoid "Free!!!"-style spam patterns.
   - **Preheader:** 40-100 characters that extends — not repeats — the subject. If you skip it, the ESP shows raw header text.
   - **Body:** promotional 50-125 words; nurture/welcome 150-300 words. Hook in the first line (it's visible in some inbox previews). Short paragraphs, 1-3 sentences.
   - **CTA:** one primary CTA, repeated at most twice (mid + end). Button, first-person verb phrase: "Start my trial," "Claim my 15% off." Links to a page that continues the email's promise.
   - **PS line:** optional second-highest-read element; use it to restate the offer or add urgency.
   - **Footer:** unsubscribe link and physical mailing address (CAN-SPAM legal requirement); one-click unsubscribe header required by Gmail/Yahoo for bulk senders.

6. **Set the measurement plan.** Primary KPI is click rate or conversion rate, never open rate alone — Apple Mail Privacy Protection auto-fires opens and inflates them by 10-20 points. Benchmark targets by type (realistic ranges; measure clicks as unique clicks / delivered):

   | Type | Open rate | Click rate | Conversion |
   |---|---|---|---|
   | Welcome email 1 | 45-65% | 10-15% | 2-5% |
   | Nurture/drip | 25-35% | 3-6% | 1-2% per email |
   | Cart abandonment | 40-50% | 8-12% | 3-10% of recipients; expect to recover 5-15% of abandoned carts across the series |
   | Trial expiry | 30-45% | 6-10% | varies by price point; track trial→paid lift vs. holdout |
   | Re-engagement | 10-20% | 1-3% | 3-8% of segment reactivated |
   | Promotional | 15-25% | 1-3% | 0.5-2% |

   Health thresholds every send must stay under: unsubscribe <0.5%, spam complaint <0.1% (Gmail throttles senders above 0.1% and blocks above 0.3%), bounce <2%.

7. **Define the A/B priority.** Test one variable at a time in this order of typical impact: offer/angle → subject line → CTA copy/placement → send time → design. Require ≥1,000 recipients per variant for subject tests and ≥250 conversions total before calling a conversion-rate winner; otherwise run the test across multiple sends. Deeper methodology → **ab-testing**.

8. **Deliver the package** in the Output format below, then walk the user through the 2-3 decisions you made on defaults so they can override.

## Frameworks & templates

**Sequence design framework — TSEC:** for every automation, write down **T**rigger (event + conditions), **S**uppressions (who must never enter or must exit), **E**scalation (how each email raises the stakes: reminder → proof → urgency → incentive), **C**onversion exit (the event that pulls someone out early). A sequence spec missing any of the four is not implementable.

**Template 1 — 5-email welcome sequence (fill-in-the-blank):**

```
EMAIL 1 — Deliver + set expectations (send: immediately, within 5 min)
Subject: Your [lead magnet / welcome gift] is here
Body: Deliver [the thing they signed up for] in the first two lines with a
button. Then: "Over the next week I'll send you [N] short emails on
[topic]. If you only read one, make it the one about [best email's hook]."
CTA: Get [lead magnet]

EMAIL 2 — Origin story / point of view (day 2)
Subject: Why we built [product]
Body: The problem you saw: [status quo everyone tolerates]. The moment it
broke: [specific story, 2-3 sentences]. Your belief: "[contrarian one-liner]."
CTA: See how [product] does it differently → [link]

EMAIL 3 — Social proof (day 4)
Subject: How [customer] got [specific result]
Body: [Customer name/type] had [same problem as reader]. They [one action
with product]. Result: [number + timeframe]. One-sentence quote.
CTA: [Do the same action] → [link]

EMAIL 4 — Objection killer (day 7)
Subject: "[Top objection, in the customer's words]"
Body: Name the #1 objection ("too expensive," "no time to switch," "will it
work for [niche]?"). Answer it head-on with one proof point.
CTA: [Low-commitment next step]

EMAIL 5 — First offer (day 10)
Subject: [Offer] ends [day]
Body: Recap the transformation in 2 lines. Make the offer: [discount /
trial extension / bonus], deadline [real date, 48-72h out].
CTA: [Claim offer]. PS: restate deadline.
```

**Template 2 — 3-email cart abandonment, fully worked (ecommerce, DTC skincare):**

```
EMAIL 1 (60 min after abandonment) — no discount
Subject: You left something behind
Preheader: Your cart's saved — but not forever.
Body:
  Hi {{first_name}}, your {{product_name}} is still in your cart.
  We've saved it for you, but popular sizes sell out fast.
  [Product image + name + price]
  [BUTTON: Finish checkout]
  Questions about {{product_name}}? Just reply — a real human answers.

EMAIL 2 (24 h) — objections + proof, still no discount
Subject: Still thinking it over?
Preheader: 4,200+ five-star reviews. 60-day returns.
Body:
  Totally fair to sleep on it. Here's what other people wondered first:
  "Will it work on sensitive skin?" — Fragrance-free, derm-tested.
  "What if it's not for me?" — 60-day free returns, no questions.
  ★★★★★ "Two weeks in and my skin has never been calmer." — Dana R.
  [BUTTON: Return to my cart]

EMAIL 3 (48-72 h) — incentive OR urgency, pick one
Subject: 10% off your cart — today only
Preheader: Code SAVED10 expires at midnight.
Body:
  Last nudge, {{first_name}} — we're clearing saved carts tonight.
  Use SAVED10 for 10% off {{product_name}} before midnight.
  [BUTTON: Claim my 10% off]
  PS: Code works only on the items in your cart, only today.
```
Suppression spec for this flow: exit on `order_completed`; suppress anyone who purchased in the last 24 h or received email 3 of this flow in the last 30 days (prevents training discount-hunters).

**Template 3 — re-engagement sunset email (final of 3):**

```
Subject: Should we stop emailing you?
Preheader: One click keeps you on the list. No hard feelings either way.
Body: We noticed you haven't opened our emails in a few months. We'd rather
have a smaller list of people who want to hear from us. If you'd like to
keep getting [what they get], click below — otherwise we'll quietly remove
you in 7 days.
[BUTTON: Keep me subscribed]
No click needed to leave; we'll handle it.
```

## Output format

Deliver a single document titled **[Brand] — [Sequence name] Campaign Spec** with these sections:

1. **Goal & KPI** — one-sentence conversion goal, primary KPI, benchmark target range from the table above, health thresholds.
2. **Trigger & segment spec (TSEC)** — trigger event + conditions, suppression list, escalation summary, conversion-exit event. Written so it can be configured in an ESP verbatim.
3. **Sequence map** — table: email #, send timing, job of the email, subject line, primary CTA.
4. **Full copy per email** — sender name, subject (with character count), preheader, body, CTA button text, PS if used. Merge fields in `{{curly_braces}}`.
5. **A/B test plan** — the one variable to test first, variants, sample-size note.
6. **Assumptions & open questions** — defaults you assumed and what would change the design.

## Quality checklist

Verify every item before delivering; each is pass/fail:

- [ ] Sequence has exactly one conversion goal, and every email's CTA points toward it.
- [ ] Trigger spec includes all four TSEC parts — trigger, suppressions, escalation, conversion exit.
- [ ] Suppression rules prevent collisions with every other sequence the user mentioned.
- [ ] Every subject line is 30-50 characters; counts are shown.
- [ ] Every email has a preheader that adds information beyond the subject.
- [ ] Each email has one primary CTA, phrased as a first-person verb ("Start my trial").
- [ ] No email 1 of any sequence contains a discount.
- [ ] Promotional deadlines are real dates, and the copy never fakes scarcity.
- [ ] Body lengths within spec (promo 50-125 words; nurture/welcome 150-300).
- [ ] Sender is a person or person-at-brand address, not noreply@.
- [ ] Footer requirements noted: unsubscribe + physical address (CAN-SPAM), one-click unsubscribe for bulk senders.
- [ ] KPI is click or conversion rate, with open rate flagged as MPP-inflated.
- [ ] Benchmark targets quoted match the campaign type, not the all-email average.
- [ ] Re-engagement plan ends with suppressing non-responders, not indefinite mailing.

## Common mistakes

- **Pitching before delivering.** Welcome email 1 that sells instead of handing over the lead magnet burns the highest-open-rate email the brand will ever send (45-65% opens) on the wrong job.
- **Discounting in cart email 1.** Shoppers learn to abandon carts on purpose to farm codes. Hold incentives until email 3, and cap how often one person can receive them.
- **No suppression logic.** A customer buys, then gets "your cart misses you" and a promo the same day. Every new automation must list which existing flows it excludes and what event exits it.
- **Optimizing open rate post-MPP.** Apple Mail auto-opens inflate opens 10-20 points; a "winning" subject line measured on opens may be noise. Judge on clicks and conversions.
- **One 7-email sequence doing three jobs.** Onboard-and-nurture-and-upsell hybrids convert worse than three short single-goal flows with clean handoffs.
- **Batch-and-blast promos to the full list** including 12-month-inactive addresses — spam complaints climb toward Gmail's 0.3% enforcement line and every future send lands worse. Send promos to 90-day engaged segments; run inactive addresses through re-engagement instead.
- **Fake urgency.** "Last chance!" followed by the same sale next week trains subscribers to ignore deadlines and kills promo email 3 — usually the highest-converting send in the series — permanently.
- **Sequence emails outliving the goal.** Trial users who upgraded still getting "your trial ends tomorrow" is a missing conversion-exit event, and it reads as incompetence to your newest paying customer.
- **Three CTAs per email.** "Read the blog, follow us, and shop the sale" splits clicks and tanks all three. One job, one button.
- **Writing timing in vibes.** "Send a few days later" is not implementable. Every email gets an exact delay (e.g., "+24 h after trigger, send window 9:00-11:00 recipient local time").
