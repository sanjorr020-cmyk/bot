---
name: partnership-development
description: "Builds business partnership programs end-to-end: identifies and scores potential partners, drafts outreach and proposals, selects the right partnership model (co-marketing, integration, reseller, referral), outlines deal terms, plans joint launches, and sets up ongoing governance and health reviews. Use when the user asks to find partners, evaluate a partnership opportunity, write a partner outreach email or proposal, structure a rev-share or reseller deal, plan a co-marketing campaign or integration launch, build a partner scorecard, prepare for a partner QBR, or decide whether a partnership is worth pursuing."
---

# Partnership Development

Guide the user from "we should partner with someone" to a signed, launched, and well-governed partnership. Cover the full lifecycle: sourcing and scoring candidates, choosing the right partnership model, making first contact, negotiating workable terms, executing a joint launch, and running recurring health reviews so the partnership compounds instead of quietly dying after the announcement tweet.

## When to use this skill

Use this skill when the user wants to:
- Identify and prioritize potential partners for their product or company
- Evaluate whether a specific inbound or outbound partnership is worth doing
- Choose between co-marketing, integration, reseller, or referral models
- Draft partner outreach, a partnership one-pager, or a proposal
- Structure deal terms (rev share, exclusivity, MDF, SLAs, term length)
- Plan a joint launch or co-marketing campaign with a partner
- Set up partner governance: scorecards, QBRs, escalation paths

Do NOT use this skill for:
- Paid affiliate programs with self-serve signup and tracked commissions — use **affiliate-program**
- Paying creators or individuals for sponsored content — use **influencer-marketing**
- Cold email mechanics (deliverability, sequencing, personalization at scale) — use **cold-email-outreach** or **linkedin-outreach**; this skill provides partner-specific messaging, those cover the channel craft
- Selling to a customer rather than partnering — use **sales-proposals** and **lead-qualification**
- The public announcement press release itself — use **press-releases**
- Your own product's launch plan independent of a partner — use **product-launch** or **go-to-market**

## Inputs to gather

Ask the user for these before starting. Where they don't know, apply the defaults.

1. **What they sell and to whom** — product, price point, ICP. If a personas doc exists, use it; otherwise ask for a two-sentence description. (Suggest **customer-personas** if they've never defined this.)
2. **Partnership goal** — pick ONE primary: new leads, credibility/brand, product capability (integration), new channel/geography, or retention. Default: new leads, since that's what most users actually mean.
3. **Stage** — sourcing partners, evaluating one specific partner, negotiating, launching, or managing an existing partnership. This determines which Process steps apply.
4. **Resources** — who owns partnerships (founder, marketer, dedicated partner manager?), engineering availability for integrations, and budget for co-marketing. Default: founder-led, no eng availability this quarter, $0 budget — which rules out heavy integration and paid MDF plays.
5. **Audience size assets** — email list size, social following, monthly traffic, customer count. Needed for co-marketing reciprocity math. Default if unknown: assume small (<5k list) and steer toward asymmetric value (content, product access) instead of audience swaps.
6. **Constraints** — exclusivity sensitivities, competitors they won't partner near, legal/compliance requirements (regulated industries need data processing terms early).

## Process

### Step 1 — Define the partnership thesis (30 minutes, not a strategy offsite)
Write one sentence: "We partner with [type of company] who already serve [our ICP] at [adjacent moment in the customer journey], so that [primary goal]." If the user can't fill this in, work backward from their best existing customers: ask "what tools/services did your last 10 customers already use before they found you?" Those vendors are the natural partner pool.

### Step 2 — Build the candidate list (target: 20-30 names, shortlist of 5-8)
Source candidates from four pools, in order of typical yield:
1. **Shared-customer vendors** — tools your customers already use (check integrations pages of competitors, ask customers directly).
2. **Same-ICP, different-problem companies** — sell to the same buyer, no overlap in what they solve.
3. **Upstream/downstream workflow neighbors** — customers use them immediately before or after your product.
4. **Agencies/consultants who implement in your category** — high-trust referrers with recurring client flow.
Use **competitor-analysis** output if available to see who competitors partner with — a partner of your competitor is either off-limits or highly persuadable, and it's worth knowing which.

### Step 3 — Score fit and prioritize
Run every shortlisted candidate through the Partner Fit Scorecard (see Frameworks). Score 1-5 on each of six weighted criteria. Decision rule: pursue scores ≥3.8, park 3.0-3.7 for a lighter-touch model (referral instead of integration), drop <3.0. Never pursue more than 3 new partnerships simultaneously with a founder-led team — each active negotiation consumes 2-4 hours/week.

### Step 4 — Choose the partnership model
Match the model to the goal and resource reality using the Model Selection matrix (see Frameworks). Decision points:
- No engineering time available → co-marketing or referral only.
- Partner is much bigger (10x+ audience) → don't propose an audience swap; propose something asymmetric they value (exclusive content, customer intros, product access for their team).
- Recurring revenue is the goal and the partner touches purchase decisions → referral first, reseller only after 6+ months of proven referral flow.
- Product gaps are the goal → integration, but scope a v1 that ships in <4 engineering weeks or it will never ship.
Default sequencing for a new relationship: start with one low-cost co-marketing act (webinar, guest post swap) as a trust trial, then escalate. Partnerships that skip the trial phase have a high failure rate because neither side has proven follow-through.

### Step 5 — Make contact
Find the right owner: at companies <50 people, email the CEO/founder; 50-500, look for "Partnerships," "Business Development," or "Ecosystem" titles; 500+, find the partner program page and apply through it AND email a named partner manager. Warm paths beat cold 5-10x on response rate — check for shared investors, mutual customers, or event overlap first. Draft outreach using the Partner Outreach Email template below. Partner outreach benchmarks: 15-30% reply rate for well-targeted warm-ish outreach vs. 1-5% for generic cold — if replies are under 10%, the targeting or the specific-value line is broken, not the send volume. For channel mechanics (sequencing, follow-up cadence), hand off to **cold-email-outreach**.

### Step 6 — First call and mutual discovery
Structure the 30-minute intro call: 5 min context swap, 10 min "what would a win look like for you?", 10 min explore 1-2 concrete first plays, 5 min agree next step with a date. Qualify the partner like a lead: Do they have an owner for this? Have they done partnerships before? What killed their last one? Exit the call with ONE specific proposed first action, not "let's stay in touch."

### Step 7 — Propose and agree terms
Send a one-page Partnership Proposal (template below) within 48 hours of a positive call. For anything involving money, IP, data sharing, or exclusivity, follow with a light term sheet before lawyers. Deal term guardrails:
- **Referral fees:** 10-20% of first-year contract value is standard for SaaS; 20-25% if the partner sources AND helps close. One-time or 12-month trailing, rarely perpetual.
- **Reseller margin:** 20-40% off list depending on who handles support and implementation (higher margin = partner does more).
- **Exclusivity:** default NO. If forced, cap at one named competitor exclusion, 6-12 months, with a minimum performance floor (e.g., "exclusivity lapses if fewer than N referrals/quarter").
- **Term and exit:** 12-month initial term, auto-renew, 30-60 day termination for convenience. Never sign a partnership you can't exit in under 90 days.
- **Pilot first:** for anything complex, run a 90-day pilot with 2-3 defined success metrics before signing the full agreement.
- **Data:** specify who owns leads generated jointly, and how customer data is shared (usually: it isn't — each side keeps its own).

### Step 8 — Plan the joint launch
A partnership without a launch moment produces nothing. Use the Joint Launch Plan (see Frameworks): work backward from launch date at T-6 weeks minimum for anything with content or product components, T-3 weeks for a simple co-webinar. Assign every deliverable a named owner ON EACH SIDE. The single most predictive launch success factor: both sides have the launch date on their content calendar with committed distribution slots (newsletter send, social posts) — get those commitments in writing in the plan. Coordinate announcement mechanics with **press-releases** and **product-launch** if the integration is a product event.

### Step 9 — Instrument and govern
Before launch, agree on: shared tracking (UTM scheme like `utm_source=partner&utm_campaign={partner-slug}-{play}`, unique referral links or codes), a shared doc or Slack channel, and a single named owner per side. Then run the governance cadence:
- **Monthly:** async metrics swap (leads passed, leads received, pipeline created, deals closed).
- **Quarterly:** 45-60 minute Partner Health Review using the template below — score health, review the last quarter's plays, commit the next quarter's 1-2 plays.
- **Annually:** renew/renegotiate/retire decision against the original scorecard.
Kill criteria — recommend sunsetting when: two consecutive quarters below 50% of target, the partner's owner has churned twice with no replacement, or reciprocity ratio (value sent vs. received) stays worse than 3:1 for 6 months despite escalation.

## Frameworks & templates

### Partner Fit Scorecard (weighted, score each 1-5)

| Criterion | Weight | 1 = | 5 = |
|---|---|---|---|
| Audience overlap with our ICP | 25% | <10% of their customers fit our ICP | >60% fit |
| Reach relative to ours | 15% | <0.2x our audience | 1-5x our audience (sweet spot; >10x scores 3 — hard to get attention) |
| Strategic complementarity | 20% | Vague adjacency | Customers explicitly ask for the combination |
| Competitive risk | 15% | Roadmap likely collides in 12 months | No plausible overlap |
| Ease of execution | 15% | No partner function, no APIs, slow legal | Existing partner program, docs, fast yes/no |
| Brand/values alignment | 10% | Reputation risk or quality mismatch | Association actively lifts our brand |

Weighted score = Σ(score × weight). Pursue ≥3.8, lighter model 3.0-3.7, pass <3.0.

**Worked example:** A 15-person email-marketing SaaS scoring a popular Shopify landing-page app: overlap 5 (same DTC ICP), reach 4 (3x their list), complementarity 5 (pages feed email capture), competitive risk 3 (partner could add email later), ease 4 (has a partner page), brand 4. Weighted: 5(.25)+4(.15)+5(.20)+3(.15)+4(.15)+4(.10) = 1.25+0.60+1.00+0.45+0.60+0.40 = **4.30 → pursue**, start with co-marketing, propose integration once trust is proven.

### Model selection matrix

| Model | Best when | Cost to run | Time to first value | Typical economics |
|---|---|---|---|---|
| **Co-marketing** (webinars, content swaps, bundles) | Goal is leads/brand; low trust so far; no eng time | Low (hours) | 2-6 weeks | No money changes hands; value = audience access |
| **Integration** | Customers ask for the combo; product gap; retention goal | High (2-8 eng weeks + maintenance) | 1-4 months | Usually free/mutual; sometimes marketplace rev share 10-30% |
| **Referral** | Partner talks to your buyers but won't sell for you | Low-medium | 4-8 weeks | 10-25% of first-year value per closed deal |
| **Reseller** | Partner has sales force + your buyers; you lack channel reach in their segment/geo | High (training, enablement, deal reg) | 3-6 months | 20-40% margin; expect 6-12 months before meaningful revenue |

### Template 1 — Partner Outreach Email (first touch)

Subject options (under 50 characters): `[Their company] + [Your company] idea` or `Our customers keep mentioning [Their company]`

> Hi [First name],
>
> [One-line credibility + connection: "We make [product] for [ICP] — [specific proof: customer count, notable customer, or metric]. I noticed [genuine specific observation: their recent launch, shared customer, their integration page]."]
>
> [The overlap, concretely: "Roughly [X]% of our customers already use [Their product] — they use you for [job A] and us for [job B]."]
>
> [ONE specific proposal, smallest viable: "I'd love to explore a joint webinar on [topic their audience cares about] — we'd bring [your concrete contribution: list size, speaker, data]."]
>
> Worth a 20-minute call? I'm free [two specific slots].
>
> [Name]

Rules: under 120 words, one proposal only (not a menu), name what YOU bring before what you want, no attachment on first touch, follow up twice at +4 and +10 business days then stop.

### Template 2 — One-Page Partnership Proposal

> **[Your co] × [Partner co] — Partnership Proposal**
> **Date / Prepared by / For:** [names]
> **Why this works:** [2-3 sentences: shared audience, complementary products, the specific customer problem the combination solves]
> **What we propose (Phase 1, 90 days):** [1-2 plays, e.g., "Co-hosted webinar in [month] + reciprocal newsletter features"]
> **What each side commits:**
> | | [Your co] | [Partner co] |
> |---|---|---|
> | Deliverables | [e.g., landing page, speaker, follow-up sequence] | [e.g., speaker, promotion to list] |
> | Distribution | [e.g., 2 emails to 12k list, 3 social posts] | [e.g., 1 email to 40k list, 2 posts] |
> | Owner | [name] | [name] |
> **Success metrics:** [e.g., 300 combined registrations, 50 leads each, 5 opportunities each]
> **Economics:** [None for Phase 1 / referral fee of X% on sourced deals, paid within 30 days of collection]
> **What Phase 2 could be:** [one sentence — integration, reseller, bundle]
> **Next step:** [specific action + date]

### Partner Health Review (quarterly, 45-60 min agenda)

1. **Scoreboard (10 min):** leads passed each way, pipeline $, closed $, campaign metrics vs. target. Compute reciprocity ratio.
2. **Health score (5 min):** each side rates 1-5 on: business results, ease of working together, strategic importance, executive support. Anything ≤2 gets a named action.
3. **Wins & friction (15 min):** one thing that worked, one thing that didn't, per side.
4. **Next quarter plays (15 min):** commit 1-2 plays max, with owners and dates. More than 2 = none will happen.
5. **Decisions & escalations (10 min):** anything needing exec or legal attention; confirm next review date before ending the call.

Health verdicts: **Invest** (avg ≥4 — escalate the model), **Maintain** (3-3.9), **Fix** (2-2.9 — one quarter with explicit remediation), **Sunset** (<2 or kill criteria met — exit gracefully, keep the relationship warm).

### Joint Launch Plan skeleton (T-minus schedule)

- **T-6 wks:** kickoff call; agree launch date, target metrics, and this checklist; open shared channel
- **T-5 wks:** landing page copy drafted; integration in QA (if applicable); draft announcement copy both sides
- **T-4 wks:** each side confirms distribution slots in own calendar (newsletter date, social dates); co-branded assets brief
- **T-3 wks:** assets final; tracking links/UTMs created and tested; support/sales teams briefed with a 1-page FAQ
- **T-2 wks:** partner page/directory listings live (unlisted); email drafts approved by both sides
- **T-1 wk:** dry run of demo/webinar; embargoed customer or press preview if warranted (see **media-outreach**)
- **Launch day:** publish simultaneously; both teams amplify within the first 2 hours; monitor signups/support queue
- **T+1 wk:** metrics readout vs. target; retro; agree the follow-on play while momentum exists

## Output format

Deliverables depend on stage; produce them as clearly-separated markdown sections (or separate files if the user asks):

- **Sourcing stage:** partnership thesis sentence + scored candidate table (name, category, weighted score, recommended model, suggested first play) sorted by score, with the top 3 flagged.
- **Outreach stage:** ready-to-send outreach email (personalized, under 120 words) + two follow-up variants + suggested contact/title to target.
- **Proposal stage:** completed one-page proposal + a terms summary (fees, term, exit, exclusivity, data ownership, pilot metrics) with any negotiation guardrails flagged.
- **Launch stage:** dated T-minus plan with named owners per deliverable per side, tracking/UTM scheme, and target metrics.
- **Governance stage:** filled health review agenda, health score, verdict (Invest/Maintain/Fix/Sunset), and next-quarter play commitments.

Every deliverable ends with a "Next 3 actions" list: specific, owner-assigned, dated within 2 weeks.

## Quality checklist

Verify before delivering:

- [ ] The partnership thesis names a specific partner type, shared ICP, and ONE primary goal
- [ ] Every scored candidate has all six criteria rated with the weighted total computed correctly
- [ ] The recommended model matches stated resources (no integration plays when the user said zero eng time)
- [ ] Outreach email is under 120 words, contains exactly one proposal, and states what the user offers before what they ask
- [ ] Outreach references something genuinely specific to the partner (not swappable to any company)
- [ ] Proposal includes named owners on BOTH sides for every deliverable
- [ ] Any money terms fall inside guardrail ranges (referral 10-25%, reseller margin 20-40%) or the deviation is explicitly justified
- [ ] Exclusivity, if present, is capped in scope and time with a performance floor
- [ ] Exit terms allow termination within 90 days
- [ ] Launch plan works backward from a real date with at least the T-4 distribution-slot commitment step
- [ ] Tracking scheme (UTMs/referral links) is defined before launch, not after
- [ ] Governance cadence is stated with kill criteria, not just "check in regularly"
- [ ] Success metrics are numbers, not adjectives ("50 leads each," not "strong lead flow")
- [ ] Deliverable ends with 3 dated, owner-assigned next actions

## Common mistakes

- **The logo-hunting partnership.** Pursuing a big brand for the announcement, with no defined play behind it. A partnership with no first play scheduled within 60 days of signing is a press release, not a partnership.
- **Opening with a menu.** First outreach that lists five possible collaboration types forces the partner to do your strategy work. Propose one small specific thing; expand after it works.
- **Proposing an audience swap to someone 10x your size.** Reciprocity math fails and you look naive. Offer asymmetric value: content, data, product access, or customer intros.
- **Skipping the trust trial.** Jumping straight to integration or reseller agreements with an unproven partner. Run one cheap co-marketing play first; follow-through is the real diligence.
- **Signing perpetual or auto-escalating exclusivity.** Exclusivity without a performance floor and expiry is a free option you granted for nothing. Most early partnerships need no exclusivity at all.
- **Nobody owns it on the other side.** If the partner can't name a single accountable person, every play will stall. An unowned partnership is already dead — it just hasn't been announced yet.
- **Rev share on unclosable referrals.** Paying referral fees on "leads passed" instead of closed revenue invites junk. Pay on collected revenue, define "sourced" precisely, and set a 60-90 day attribution window.
- **Launch-and-abandon.** Everything peaks on announcement day, then the shared Slack channel goes silent. The quarterly health review with kill criteria exists precisely because partnerships decay silently by default.
- **Measuring vanity reciprocity.** Counting social mentions instead of pipeline. Track leads passed, pipeline created, and revenue closed each way — a 3:1 imbalance for two quarters means renegotiate or sunset.
- **Letting legal lead.** Sending a 20-page agreement before alignment on a one-pager. Sequence: call → one-page proposal → light term sheet → contract. Reversing it kills deals that would have worked.
