---
name: competitor-analysis
description: "Runs a full competitive teardown: identifies direct, indirect, and substitute competitors, builds feature and pricing comparison matrices, gathers messaging and SEO/ads intelligence, maps positioning, produces sales battlecards, and sets a monitoring cadence. Use when the user asks to analyze competitors, compare their product against rivals, build a competitive matrix or battlecard, research a competitor's pricing or features, find out who their competitors are, understand how a rival positions or markets itself, prepare for a deal against a specific competitor, create a positioning map, or set up competitor tracking."
---

# Competitor Analysis

Produce a decision-ready competitive teardown, not a trivia dump. The goal is always one of three decisions: how to position (marketing), how to win deals (sales), or what to build (product). Every artifact in this skill — competitor lists, matrices, positioning maps, battlecards — must trace back to one of those decisions. Gather evidence from public sources, state confidence levels honestly, and separate verified facts from inference.

## When to use this skill

Use when the user wants any of: a competitor landscape scan, a head-to-head teardown of 1-5 named rivals, a feature or pricing comparison matrix, messaging/SEO/ads intelligence on competitors, a positioning map, sales battlecards, or a competitor monitoring plan.

Do NOT use this skill for:
- Sizing a market, TAM/SAM/SOM, or industry trends → use **market-research**
- Crafting the user's own positioning statement and messaging hierarchy → use **brand-messaging** (this skill supplies the competitive input to it)
- Setting the user's own price → use **pricing-strategy** (this skill supplies the competitor pricing data)
- Full launch or entry planning → use **go-to-market** or **product-launch**
- Handling a specific objection script mid-deal → use **objection-handling** (battlecards from this skill feed it)
- Deep keyword gap analysis for content planning → use **keyword-research**

## Inputs to gather

Ask the user for these before starting. If they answer "I don't know," apply the default in parentheses and say you did.

1. **Their product**: what it does, who buys it, price range, top 3 differentiators as they see them. (No default — this is required; a teardown without a reference point is just a market survey.)
2. **Deliverable purpose**: positioning, sales enablement, or product roadmap? (Default: positioning + battlecards, the most common combo.)
3. **Known competitors**: names they already track, and any they suspect. (Default: none — discover from scratch in Step 2.)
4. **Scope**: how many competitors to go deep on. (Default: 3-5 direct + 2-3 indirect/substitute. More than 7 deep profiles dilutes quality; list the rest in a "watchlist" appendix.)
5. **Geography and segment**: which market and buyer segment matters. (Default: the user's primary market; note if competitors differ by region.)
6. **Access to tools**: do they have Ahrefs/Semrush, SimilarWeb, a CRM with loss reasons, G2/Capterra reviews? (Default: assume public sources only — websites, pricing pages, review sites, LinkedIn, ad libraries, job postings.)
7. **Timeframe**: one-time snapshot or ongoing program? (Default: snapshot now + lightweight monitoring cadence in the deliverable.)

If web access or research tools are available in the session, use them to gather live data. If not, build the full framework with clearly marked `[VERIFY]` slots and give the user exact instructions for filling each one (which page to check, what to record).

## Process

1. **Frame the decision.** Write one sentence: "This analysis exists so that [team] can decide [decision] by [date/context]." Confirm it with the user. Every later cut ("do we profile competitor #6?") is answered by this sentence.

2. **Build the competitor universe.** Identify candidates across three rings:
   - **Direct**: same solution, same buyer, same job (they show up in the same deals). Sources: user's CRM loss reasons, G2/Capterra category pages, "X vs Y" and "X alternatives" search results, competitor mentions in the user's own sales calls.
   - **Indirect**: different solution, same job (e.g., an agency vs. your software; a horizontal tool used for your niche).
   - **Substitute**: the non-consumption option — spreadsheets, hiring a person, doing nothing, in-house builds. In most B2B deals "do nothing" loses to more often than any named rival; always include it.
   Aim for 10-20 candidates total, then score each 1-5 on (a) frequency in the user's deals/segment and (b) trajectory (funding, hiring, launch velocity). Profile the top 3-5 direct and 2-3 indirect/substitute; park the rest on the watchlist.

3. **Collect raw intelligence per competitor.** For each profiled competitor, gather from public sources in this order (cheapest signal first):
   - **Website + pricing page**: plans, price points, billing terms, packaging (per-seat/usage/flat), free tier/trial length, "Contact us" gates. Screenshot or archive the pricing page with a capture date — pricing pages change quietly.
   - **Homepage messaging**: exact H1, subhead, primary CTA text, the 3 benefit claims above the fold, who they name as the target buyer, social proof (logos, review badges, customer counts).
   - **Feature evidence**: docs, changelog, release notes, help center. Docs are more truthful than marketing pages — a feature with no documentation is usually vaporware or beta.
   - **Reviews**: G2/Capterra/TrustRadius — read the 10 most recent 1-3 star reviews (weakness signal) and 10 most recent 5-star reviews (strength signal). Record verbatim complaint themes.
   - **SEO**: estimated organic traffic, top 10 non-branded keywords, domain rating, top-performing content pages (Ahrefs/Semrush if available; otherwise note which head terms they rank on page 1 for via manual searches).
   - **Paid ads**: Google Ads Transparency Center and Meta Ad Library — active ad count, angles used, landing pages, how long ads have been running (ads running 90+ days are almost certainly profitable; treat their angle as validated).
   - **Company signals**: headcount and hiring trends on LinkedIn (job postings reveal roadmap — e.g., hiring "Enterprise AE" = moving upmarket; "ML engineer" = AI features coming), funding announcements, leadership changes.
   Timebox: 60-90 minutes of gathering per competitor. Log every fact with source and date.

4. **Build the feature comparison matrix.** Choose 10-20 comparison criteria that buyers actually use to decide — pull them from review-site "what do you like/dislike" themes, the user's sales objections, and RFP checklists, NOT from the user's own feature list. Use a 4-value scale, never plain checkmarks: `●` full/native, `◐` partial/via workaround or add-on, `○` absent, `?` unverified. Group criteria into 3-5 buckets (e.g., Core workflow, Integrations, Security/compliance, Support, Platform). Fill from Step 3 evidence; anything without a source stays `?`.

5. **Build the pricing comparison matrix.** For each competitor capture: pricing model (per-seat/usage/tiered/flat/custom), entry price, mid-tier price, enterprise approach (published vs. "talk to sales"), free tier/trial (length, limits), annual discount %, minimums/floors, and notable packaging gates (which features are paywalled at which tier — the SSO-only-on-enterprise pattern is the classic gate). Then compute a normalized comparison: cost for a realistic reference scenario (e.g., "10 users, 12 months, mid tier"). Note the capture date on every price.

6. **Do the messaging teardown.** For each competitor, distill from Step 3: target buyer (as claimed), category label they use, #1 claim, tone, and proof style. Then run a claims audit: list every claim your user makes; mark it **Unique** (no profiled competitor says it), **Contested** (2+ competitors say it too), or **Conceded** (a competitor says it and it's true of them, not the user). Contested claims are worthless as differentiators — flag them for **brand-messaging** to replace.

7. **Draw the positioning map.** Pick two axes that (a) buyers genuinely weigh and (b) actually spread the competitors out — e.g., price (low↔high) vs. breadth (point solution↔suite), or ease-of-use vs. depth/configurability, or SMB↔enterprise vs. self-serve↔high-touch. Avoid axes where everyone clusters in one quadrant; if that happens, pick a different second axis. Place each competitor with a one-line justification. Identify the open quadrant and state whether it's open because it's underserved (opportunity) or because nobody wants it (trap) — check whether substitutes already own it.

8. **Write battlecards** — one per direct competitor the sales team actually meets. Keep each to a single page (see template below): win/lose patterns, 3 kill points with evidence, 3 honest "where they beat us" with counters, landmine questions, and pricing talk track. Source kill points from Step 4-6 evidence and 1-3 star review verbatims; never include a claim sales can't back up when the prospect checks.

9. **Set the monitoring cadence.** A snapshot decays fast — pricing pages and homepages change without announcement. Recommend:
   - **Weekly (15 min)**: Google Alerts / mention monitoring for each profiled competitor's name + "pricing" + "launch"; skim their changelog/blog RSS.
   - **Monthly (1 hr)**: re-check pricing pages against archived screenshots; review new G2 reviews; check ad libraries for new angles; scan job postings.
   - **Quarterly (half day)**: refresh matrices and battlecards; re-run win/loss review with sales; update the positioning map; promote/demote watchlist competitors.
   - **Trigger-based**: competitor raises funding, launches a rebrand, changes pricing, or starts appearing in >20% of deals → immediate battlecard refresh.
   Assign an owner. Unowned monitoring programs die within a quarter.

10. **Assemble and sanity-check the deliverable** (see Output format), then run the Quality checklist. Present findings with a one-page executive summary that leads with the 3 decisions the analysis supports, not with the data.

## Frameworks & templates

**Three-ring competitor framework** (Step 2): Direct = same solution + same buyer; Indirect = different solution, same job-to-be-done; Substitute = non-consumption (spreadsheets, manual process, in-house, do nothing). Prioritization score = deal frequency (1-5) × trajectory (1-5); profile anything scoring ≥12, watchlist 6-11, ignore ≤5.

**Feature matrix legend**: `●` full native support (documented) · `◐` partial, add-on, or workaround · `○` not available · `?` unverified. Never use ✓/✗ — binary checkmarks hide the "technically yes, practically no" cases that decide deals.

**Feature & pricing matrix template:**

```markdown
| Criterion (grouped)        | Us   | Competitor A | Competitor B | Competitor C |
|----------------------------|------|--------------|--------------|--------------|
| **Core workflow**          |      |              |              |              |
| Real-time collaboration    | ●    | ●            | ◐ (beta)     | ○            |
| API access                 | ●    | ◐ (Ent only) | ●            | ?            |
| **Security & compliance**  |      |              |              |              |
| SSO/SAML                   | ● (all tiers) | ◐ (Ent tier) | ● | ○     |
| SOC 2 Type II              | ●    | ●            | ○            | ?            |

| Pricing                    | Us        | Competitor A | Competitor B |
|----------------------------|-----------|--------------|--------------|
| Model                      | Per-seat  | Per-seat     | Usage-based  |
| Entry price                | $29/u/mo  | $35/u/mo     | $0.10/unit   |
| Free trial                 | 14 days   | None (demo)  | Free tier    |
| Annual discount            | 17%       | 20%          | None         |
| 10 users / 12 mo scenario  | $2,900    | $3,360       | ~$2,400 est. |
| Captured                   | 2026-07-07| 2026-07-07   | 2026-07-07   |
```

**Messaging teardown row** (one per competitor): `Competitor | Category label they claim | H1 (verbatim) | Target buyer | #1 claim | Proof style (logos/data/reviews) | Claim status vs. ours (Unique/Contested/Conceded)`

**Battlecard template** (one page, ~350-500 words max — sales won't read more):

```markdown
# Battlecard: [Competitor A]                    Updated: [date] · Owner: [name]

## Snapshot
[1 sentence: what they are, who they serve, price point.]
We win when: [deal profile — segment, use case, buying trigger]
We lose when: [honest — e.g., "buyer mandates on-prem," "budget < $X"]

## Why we win (kill points — each with evidence)
1. [Claim] — Proof: [doc link / review verbatim / benchmark, dated]
2. [Claim] — Proof: [...]
3. [Claim] — Proof: [...]

## Where they beat us (and the counter)
1. They have [X]; we don't. → Counter: [reframe or roadmap-honest answer]
2. [...]

## Landmines (questions that expose their weakness — ask, don't assert)
- "Ask them how [task] works when [edge case]" → their docs show [gap].
- "Ask what's included at the $X tier" → [feature] is paywalled at [tier].

## Pricing talk track
Their model: [model + entry price]. Typical real cost at [scenario]: [$].
If prospect says "they're cheaper": [specific TCO/packaging response].

## Verbatim ammo (from their 1-3★ reviews, with dates)
- "[quote]" — G2, [date]
```

**Worked example — positioning map (project management tools, illustrative):**
Axes: ease of adoption (self-serve ↔ requires rollout) vs. process depth (lightweight ↔ heavyweight governance). Trello sits self-serve/lightweight; Jira sits rollout/heavyweight; Asana and Monday cluster mid/mid; the open quadrant is self-serve + heavyweight governance — historically a trap (buyers wanting governance expect services), which is exactly the "open because nobody wants it" check from Step 7.

**SEO/ads intelligence capture sheet** (one per competitor; fill what tools allow, mark the rest `?`):

```markdown
## [Competitor A] — search & ads snapshot (captured [date])
Organic traffic (est.): [n/mo, tool + date]      Domain rating: [n]
Top 5 non-branded keywords they rank p.1 for: [kw1, kw2, ...]
Top 3 organic pages by traffic: [URL — topic]
Branded search volume trend: [rising/flat/falling — signal of momentum]
Google Ads: [active? angles seen, e.g., "vs. us" comparison ads]
Meta ads: [active count, longest-running ad + days live, offer used]
Bidding on our brand name: [yes/no — if yes, flag for google-ads skill]
```

**Monitoring plan table** (drop into the deliverable and assign the owner):

```markdown
| Cadence   | Time   | Owner | Actions                                          |
|-----------|--------|-------|--------------------------------------------------|
| Weekly    | 15 min | [—]   | Skim alerts, changelogs, launch/pricing mentions  |
| Monthly   | 1 hr   | [—]   | Diff pricing pages vs. screenshots; new G2 reviews; ad library check; job postings |
| Quarterly | ½ day  | [—]   | Refresh matrices + battlecards; win/loss review; positioning map update; watchlist re-score |
| Trigger   | ad hoc | [—]   | Funding, rebrand, pricing change, or competitor in >20% of deals → refresh their battlecard within 1 week |
```

**Claims audit example:** User claims "fastest implementation." Competitor A's homepage says "go live in days," Competitor B says "onboard in a week" → **Contested**, replace. User claims "only tool with native X integration" and no profiled competitor documents X → **Unique**, lead with it and cite the integration docs.

## Output format

Deliver a single document (Markdown by default; offer a slide-ready or spreadsheet export if the user asks) structured as:

1. **Executive summary** (≤1 page): the framing decision, 3-5 key findings, 3 recommended actions with owners.
2. **Competitor universe**: three-ring list with prioritization scores; watchlist appendix.
3. **Competitor profiles** (½-1 page each): snapshot, pricing, messaging, momentum signals, sources with dates.
4. **Feature comparison matrix** (with legend and source notes).
5. **Pricing comparison matrix** (with normalized scenario and capture dates).
6. **Messaging teardown + claims audit** (Unique/Contested/Conceded table).
7. **Positioning map** (axes justified, open-quadrant verdict). Render as a simple 2×2 with placed labels; use an image/diagram only if the user wants a visual deliverable.
8. **Battlecards** (one per direct competitor, using the template).
9. **Monitoring plan**: cadence table (weekly/monthly/quarterly/trigger), named owner, alert setup instructions.
10. **Source log**: every fact's origin and capture date; `?` items listed with instructions to verify.

## Quality checklist

Pass every item before delivering:

- [ ] The framing decision (who decides what) is stated in one sentence and the summary's recommendations answer it.
- [ ] All three rings are represented; "do nothing / in-house / spreadsheet" appears as a substitute.
- [ ] 3-7 competitors are profiled deeply; the rest are on a watchlist, not half-profiled.
- [ ] Feature matrix uses the 4-value scale (● ◐ ○ ?) — zero plain checkmarks.
- [ ] Matrix criteria came from buyer-side sources (reviews, objections, RFPs), not just the user's feature list.
- [ ] Every price and pricing screenshot carries a capture date.
- [ ] Pricing includes a normalized like-for-like scenario, not just list prices.
- [ ] Every kill point on every battlecard cites checkable evidence (doc, review verbatim with date, or benchmark).
- [ ] Each battlecard includes at least 2 honest "where they beat us" items with counters.
- [ ] Each battlecard fits on one page (≤500 words).
- [ ] Positioning map axes spread competitors across at least 3 quadrants; the open quadrant has an opportunity-vs-trap verdict.
- [ ] Claims audit labels every user claim Unique/Contested/Conceded.
- [ ] Unverified items are marked `?` with explicit verification instructions — no silent guesses presented as fact.
- [ ] Monitoring plan has a named owner and time budgets (15 min/wk, 1 hr/mo, half-day/qtr).

## Common mistakes

- **Feature-matrix vanity**: choosing criteria the user's product wins so the matrix shows a wall of green for "Us." Buyers discount these instantly; matrices built from review-site complaints and lost-deal reasons are the ones sales actually uses.
- **Checkmark flattening**: marking a competitor's half-broken beta the same ✓ as your native feature. The ◐ tier exists because "technically yes" is where deals are lost.
- **Ignoring "do nothing."** Teams obsess over the named rival while 40-60% of stalled B2B deals end in no decision. If the analysis has no substitute ring, it misses the biggest competitor.
- **Marketing-page truth**: treating a competitor's homepage claims as capabilities. Verify in docs and changelogs; a claimed feature with no documentation gets `◐` or `?`, never `●`.
- **Stale pricing**: quoting prices without capture dates. Competitors change pricing pages silently; an undated price in a battlecard will eventually embarrass a rep mid-deal.
- **Trash-talk battlecards**: kill points that are opinions ("their UI is clunky") instead of evidence ("14 of their last 30 G2 reviews cite slow load times — quotes attached"). Prospects verify claims; unverifiable ones destroy rep credibility.
- **No "where they beat us" section**: a battlecard that says the competitor has zero strengths trains reps to be blindsided. Honest weaknesses with counters win more than denial.
- **Axis clustering on the positioning map**: picking axes (usually "quality" and "value") where every competitor lands top-right. If the map doesn't separate players, it's decoration, not analysis.
- **The 20-competitor deep dive**: profiling everyone shallowly instead of 3-5 deeply. Depth on the rivals in your actual deals beats breadth every time.
- **One-and-done teardowns**: shipping the snapshot with no owner or cadence. Six months later sales is quoting a pricing tier that no longer exists. The monitoring plan is part of the deliverable, not an optional extra.
- **Confusing this analysis with strategy**: the teardown describes the landscape; it doesn't pick the user's position or price. Hand findings to **brand-messaging** and **pricing-strategy** rather than burying strategic recommendations in appendix prose.
