---
name: keyword-research
description: "Runs end-to-end SEO keyword research: expands seed keywords, classifies search intent (informational, commercial, transactional, navigational), scores difficulty and priority, clusters keywords into page-level targets, maps them to funnel stages, and produces a keyword-to-content roadmap. Use when the user asks to do keyword research, find keywords to rank for, build a keyword list or keyword strategy, group or cluster keywords, identify search intent, prioritize keywords by difficulty or opportunity, find long-tail or low-competition keywords, map keywords to pages or funnel stages, or turn a keyword list into a content plan."
---

# Keyword Research

Turn a business description and a handful of seed terms into a prioritized, clustered keyword plan that tells the user exactly which pages to create, in what order, and why. The deliverable is not a raw keyword dump — it is a set of page-level keyword clusters, each with a primary keyword, intent label, funnel stage, priority score, and recommended content format, sequenced into a publishing roadmap.

## When to use this skill

Use this skill when the user wants to:
- Discover what their audience searches for and which queries are winnable
- Expand a seed list into hundreds of keyword candidates
- Classify keywords by intent and funnel stage
- Score and rank keywords by difficulty vs. opportunity
- Cluster keywords into page-level targets and avoid cannibalization
- Build a keyword-to-content roadmap for the next 3-6 months

Do NOT use this skill for:
- Writing the actual brief for a chosen keyword — use **seo-content-briefs**
- Optimizing an existing page (titles, headers, internal links) — use **on-page-seo**
- Crawlability, indexing, or site speed issues — use **technical-seo**
- "Near me" / Google Business Profile keyword work — use **local-seo**
- Paid search keyword lists, match types, and negatives — use **google-ads**
- Broad editorial strategy beyond search demand — use **content-strategy**
- Analyzing a competitor's whole business — use **competitor-analysis** (this skill only mines competitors for keyword gaps)

## Inputs to gather

Ask for these up front. If the user cannot answer, apply the default in parentheses and state the assumption in the deliverable.

1. **Business description**: what they sell, to whom, and the money pages (product/service/pricing URLs). No default — this is required.
2. **Website URL and age/authority**: domain, rough Domain Rating/Authority if known, current monthly organic traffic. (Default: assume a low-authority site, DR < 30, and bias the plan toward keywords with difficulty ≤ 30.)
3. **3-10 seed keywords**: how the user would describe their offering in 1-3 words each. (Default: derive seeds from the business description and product names.)
4. **Top 3-5 competitors**: sites that rank where the user wants to rank. (Default: infer likely competitors from the niche and say so.)
5. **Geography and language**: target market. (Default: US, English.)
6. **Available data**: exports from Ahrefs, Semrush, Google Search Console, or Google Keyword Planner. (Default: none — proceed with modifier-matrix expansion and estimated metrics, clearly labeled as estimates, and recommend the user validate volumes in a tool before committing budget.)
7. **Content capacity**: articles or pages the team can publish per month. (Default: 4/month — this sets roadmap length.)
8. **Commercial priorities**: which product line or service matters most this quarter. (Default: weight all money pages equally.)

If the user pastes a tool export (CSV of keyword, volume, KD, CPC), skip expansion and start at Step 3.

## Process

### Step 1 — Frame the demand space
1. From the business description, list the **jobs-to-be-done** the product solves, the **problems** it fixes, and the **category names** buyers use. Each becomes a seed.
2. Write down 5-15 seeds. Good seeds are 1-3 words and category-level ("invoicing software", "meal prep delivery"), not long-tail phrases.
3. Confirm the seed list with the user before expanding. A bad seed multiplies into hundreds of irrelevant keywords.

### Step 2 — Expand seeds into candidates
Generate 150-500 candidate keywords using all four expansion methods:
1. **Modifier matrix**: cross every seed with the modifier bank in Frameworks below (questions, comparisons, price, audience, use-case, quality, alternatives). A 10-seed × 25-modifier matrix yields ~250 candidates before deduplication.
2. **Competitor gap**: for each named competitor, list the page types they rank with (glossary, "X vs Y", templates, calculators, "best X for Y" lists) and generate the equivalent keywords. If the user has Ahrefs/Semrush access, ask them to export the competitors' top pages instead of guessing.
3. **SERP mining**: for the top 10-15 seeds, ask the user to paste (or fetch, if web tools are available) Google's autocomplete suggestions, "People Also Ask" questions, and "Related searches". These reflect real query demand.
4. **Voice-of-customer**: pull exact phrases from reviews, support tickets, sales calls, and community threads (Reddit, niche forums) if the user can supply them. These surface long-tail keywords tools miss.

Deduplicate near-identical variants (singular/plural, word order) now — they will merge in clustering anyway.

### Step 3 — Attach metrics
For each candidate, record: **monthly search volume**, **keyword difficulty (KD)**, and **CPC** (CPC is a commercial-intent proxy even for organic work).
- With tool data: use it directly. Note that Ahrefs and Semrush KD scales differ; do not mix scores from two tools in one column.
- Without tool data: assign volume tiers instead of fake numbers — **Head** (likely 5,000+/mo), **Mid** (500-5,000), **Long-tail** (10-500), **Micro** (<10). Estimate difficulty from proxies: keywords dominated by Wikipedia, government sites, or major publishers = High; keywords where forums, Reddit threads, or thin pages rank = Low. Label every estimated figure "(est.)".
- Flag SERP features per keyword when observable: featured snippet, AI Overview, shopping results, local pack, video carousel. Roughly 60% of Google searches now end without a click, and AI Overviews further reduce clicks on definitional queries — a 2,000-volume keyword with an AI Overview can deliver fewer visits than a 400-volume keyword with a clean blue-link SERP. Record this as a CTR risk flag.

### Step 4 — Classify intent
Label every keyword with exactly one of four intents using the modifier rules in Frameworks, then spot-check 10-15 ambiguous keywords against the live SERP — **the SERP is the ground truth**. If Google returns product pages for a keyword you labeled informational, relabel it. Decision rule for mixed SERPs: count the top 10 results; the majority result type wins. If it splits 5/5, mark the keyword "mixed" and plan a commercial page with substantial informational content.

### Step 5 — Score priority
Compute a Priority Score for every keyword using the formula in Frameworks (Relevance × Intent weight × Volume tier ÷ Difficulty tier). Sort descending. Sanity-check the top 20: every one should be a keyword the user's money pages or realistic content could actually satisfy. If a generic head term tops the list, your Relevance scores are inflated — recalibrate.

### Step 6 — Cluster into page-level targets
1. Group keywords that should be served by **one page**. The test is SERP overlap: if two keywords share **3 or more of the same top-10 URLs**, one page can rank for both. Without SERP data, use the fallback test: "would one piece of content fully satisfy both queries?" — same intent AND same specific topic.
2. Within each cluster, appoint the **primary keyword** (highest volume with matching intent) and list the rest as secondary keywords.
3. Target cluster sizes of 3-20 keywords. A 50-keyword cluster is usually two or three pages fused together — split by sub-intent. A 1-keyword cluster is fine for high-value transactional terms.
4. Assign each cluster a **page type**: blog post, comparison page, product/service page, category page, tool/calculator, glossary entry, template/download.
5. Organize clusters into hub-and-spoke topics: one pillar cluster (head term, e.g. "email marketing") supported by 5-15 spoke clusters (subtopics, e.g. "email subject line examples"). This becomes the internal-linking plan later (see **on-page-seo**).

### Step 7 — Map to funnel stage
Tag every cluster TOFU / MOFU / BOFU using the intent-to-funnel table in Frameworks. Then check the portfolio balance. Healthy targets for a site that needs revenue: roughly **20-30% BOFU, 30-40% MOFU, 30-40% TOFU** by cluster count. New or low-authority sites should invert the usual "publish top-of-funnel first" instinct: BOFU keywords are lower volume but convert at 2-5× the rate and are often less competitive than head informational terms.

### Step 8 — Build the keyword-to-content roadmap
1. Sequence clusters by: (a) Priority Score, (b) quick wins first — for existing sites, any keyword already ranking positions 5-20 in Search Console is a quick win (an on-page refresh beats a new article; hand these to **on-page-seo**), (c) BOFU before TOFU for new sites, (d) pillar pages before their spokes only when the pillar is winnable now — otherwise publish spokes first and add the pillar at month 3-4.
2. Slot clusters into months using the user's publishing capacity. A 4-posts/month capacity and 30 clusters = a ~7-month roadmap; cut the tail rather than stretching thin.
3. For each roadmap row, specify: target month, primary keyword, page type, funnel stage, working title, and the URL it maps to (new or existing). Flag any cluster that maps to an existing URL as "optimize, don't create."
4. Set expectations in the deliverable: new pages on low-authority domains typically take **3-6 months** to reach stable rankings; do not promise month-1 traffic.

### Step 9 — Deliver and validate
Present the deliverable in the Output format below. Run the Quality checklist. Offer next steps: generate an **seo-content-briefs** brief for the first roadmap item, or a **content-strategy** plan if the user wants to zoom out.

## Frameworks & templates

### Intent classification cheat sheet

| Intent | Modifier signals | SERP signals | Funnel stage | Intent weight |
|---|---|---|---|---|
| Informational | how, what, why, guide, tutorial, examples, ideas, definition, tips | Blog posts, featured snippet, PAA box, AI Overview | TOFU | 1 |
| Commercial | best, top, review, vs, alternative, comparison, for [audience] | Listicles, review sites, comparison tables | MOFU | 3 |
| Transactional | buy, pricing, cost, discount, near me, hire, [product] software/tool/service | Product pages, shopping ads, pricing pages | BOFU | 4 |
| Navigational | brand names, login, [brand] pricing, [brand] alternatives* | The brand's own site dominates | Varies | 0 (own brand) / 4 (*competitor + alternative) |

*"[Competitor] alternatives" is the exception: technically navigational, practically the highest-converting keyword pattern in B2B — always treat as BOFU commercial.

### Modifier bank for seed expansion

Cross each seed with these:
- **Question**: how to ___, what is ___, why ___, can you ___, is ___ worth it
- **Comparison**: ___ vs [competitor], best ___, top ___ 2026, ___ alternatives, ___ review
- **Price**: ___ pricing, ___ cost, cheap ___, free ___, ___ discount
- **Audience**: ___ for small business, ___ for freelancers, ___ for beginners, ___ for [industry]
- **Use-case**: ___ for [job-to-be-done], ___ template, ___ examples, ___ checklist, ___ calculator
- **Quality/spec**: fast ___, easy ___, [feature] ___, ___ without [pain point]
- **Commercial**: buy ___, ___ software, ___ tool, ___ service, ___ agency, hire ___

### Priority Score formula

```
Priority = (Relevance × Intent weight × Volume tier) / Difficulty tier

Relevance (to the business):  1 = tangential … 5 = describes exactly what we sell
Intent weight:                1 informational / 3 commercial / 4 transactional (from table above)
Volume tier:                  1 = <10/mo   2 = 10-500   3 = 500-5,000   4 = 5,000+
Difficulty tier:              1 = KD 0-20  2 = KD 21-40  3 = KD 41-60  4 = KD 61+
                              (low-authority sites: add +1 to Difficulty tier, cap at 4)
```

Scores range 0.25-80. Anything above 15 is a strong target; 5-15 is roadmap material; below 5 is backlog. The formula is deliberately biased toward relevant, transactional, winnable keywords over big vanity volumes.

### Worked example — "invoicing software for freelancers" (new SaaS, DR 15)

| Keyword | Vol (est.) | KD | Intent | Rel | Priority | Cluster |
|---|---|---|---|---|---|---|
| invoicing software | 12,000 | 74 | Transactional | 5 | (5×4×4)/4 = 20* | — deprioritized: KD 74 unwinnable at DR 15 |
| invoicing software for freelancers | 900 | 24 | Transactional | 5 | (5×4×3)/3 = 20 | Money page A |
| freelance invoice template | 6,500 | 18 | Informational† | 4 | (4×1×4)/2 = 8 | Template hub B |
| how to invoice as a freelancer | 700 | 12 | Informational | 4 | (4×1×3)/2 = 6 | Guide C |
| freshbooks alternatives | 1,800 | 31 | Commercial/BOFU | 5 | (5×4×3)/3 = 20 | Comparison D |
| what is an invoice | 22,000 | 55 | Informational | 2 | (2×1×4)/4 = 2 | Backlog — AI Overview eats clicks |

*Same raw score as row 2, but the low-authority KD adjustment pushes Difficulty to tier 4-capped and the SERP is all DR 80+ brands — annotate and defer. †SERP check: top 10 = downloadable template pages, not blog essays, so the page type is a template library, not an article.

Resulting roadmap slice (capacity 4/month):
- **Month 1**: Money page A ("Invoicing Software for Freelancers") + Comparison D ("7 FreshBooks Alternatives for Freelancers in 2026") + 2 spoke guides
- **Month 2**: Template hub B ("Free Freelance Invoice Templates — Word, PDF, Google Docs") + Guide C + 2 more spokes
- **Month 4+**: pillar "invoicing guide" once 8-10 spokes exist and link to it

### Cluster record template

```
Cluster: [name]
Primary keyword:      [keyword] — [volume]/mo, KD [n]
Secondary keywords:   [kw2] ([vol]), [kw3] ([vol]), [kw4] ([vol])
Intent:               [informational | commercial | transactional | navigational | mixed]
Funnel stage:         [TOFU | MOFU | BOFU]
Priority score:       [n]
Page type:            [blog post | comparison | product page | tool | template | category]
Maps to URL:          [new: /proposed-slug | existing: /current-url → optimize]
Working title:        [≤60 characters, primary keyword near the front]
SERP notes:           [features present, dominant result type, CTR risk flags]
Hub/spoke role:       [pillar for topic X | spoke of pillar Y]
```

## Output format

Deliver one document with four sections, in this order:

1. **Executive summary** (≤200 words): total keywords analyzed, number of clusters, portfolio split by funnel stage, top 5 opportunities with one-line rationale each, and stated assumptions (estimated volumes, assumed authority, inferred competitors).
2. **Roadmap table** — the headline deliverable: | Month | Primary keyword | Volume | KD | Intent | Funnel | Priority | Page type | New/Optimize URL | Working title |. One row per cluster, sequenced per Step 8, capped at the user's capacity.
3. **Cluster appendix**: one Cluster record (template above) per cluster, grouped under hub/pillar headings.
4. **Backlog & rejects**: keywords scored below threshold or deferred, each with a one-phrase reason ("KD 74 vs DR 15", "AI Overview SERP", "intent mismatch"). This proves coverage and prevents re-litigating the same keywords next quarter.

Format as markdown tables by default; offer CSV export of the master keyword list if the user wants to load it into a spreadsheet or tool.

## Quality checklist

Pass every item before delivering:

1. Every keyword has exactly one intent label, and at least 10 ambiguous labels were verified against live SERPs (or flagged as unverified if no SERP access).
2. Every cluster has exactly one primary keyword and one target URL — no keyword appears in two clusters.
3. No two clusters share the same intent AND 3+ overlapping top-10 SERP URLs (cannibalization check).
4. Priority scores are computed with the stated formula, not gut feel, and the top 20 all pass the "could our site genuinely satisfy this?" test.
5. Difficulty is calibrated to the user's actual authority: a DR < 30 site's month 1-3 roadmap contains no KD > 40 targets.
6. Funnel mix falls near the 20-30% BOFU / 30-40% MOFU / 30-40% TOFU bands, or the deviation is explained.
7. Estimated metrics are labeled "(est.)" everywhere they appear; no invented precise volumes.
8. SERP-feature CTR risks (AI Overview, featured snippet, local pack) are flagged on affected high-volume keywords.
9. Existing rankings (positions 5-20) were checked when Search Console data was available, and those keywords are marked "optimize" rather than "create."
10. Roadmap length matches stated publishing capacity — no 40-item roadmap for a 2-post/month team.
11. Every working title is ≤60 characters with the primary keyword in the front half.
12. Competitor-alternative keywords ("[competitor] alternatives") were generated for every named competitor.
13. The rejects section exists and gives a reason for every deprioritized keyword.
14. Branded (own-brand) keywords are excluded from the opportunity list — the user ranks for those already.

## Common mistakes

- **Chasing head terms on a weak domain.** "Invoicing software" (KD 74) is a 2-year project for a DR 15 site. The long-tail modifier version is winnable in months and converts better. Volume is vanity; ranked volume is sanity.
- **Clustering by words instead of SERPs.** "SEO tips" and "SEO tricks" look like synonyms and cluster together; "CRM" and "CRM software" look near-identical but can return different SERPs (definition vs. product listicles) and need different pages. Lexical similarity is a fallback, never the primary test.
- **Assigning intent from modifiers alone.** "Best" usually signals commercial, but "best time to send email" is informational. The SERP overrules the modifier every time.
- **Treating search volume as clicks.** A keyword with an AI Overview, featured snippet, or wall of ads can lose 30-70% of its clicks before position 1 gets any. Score opportunity on likely clicks, not raw volume.
- **One keyword = one page.** Modern pages rank for dozens to hundreds of variants. Building a separate page per keyword variant creates thin content and self-cannibalization.
- **All-TOFU roadmaps.** Fifty how-to posts and zero comparison or alternatives pages produces traffic that never converts. Ship BOFU pages first; they pay for the rest of the program.
- **Mixing difficulty scales.** Ahrefs KD 30 and Semrush KD 30 are not the same number. Pick one tool's scale per project and note which.
- **Ignoring what already ranks.** Publishing a new article targeting a keyword where an existing page sits at position 8 splits equity and often drops both. Always check current rankings before assigning "new page."
- **Static one-and-done research.** Volumes shift, SERP features appear, competitors publish. Recommend a quarterly refresh: re-pull metrics for roadmap keywords, re-check the top 20 SERPs, and re-score.
- **Skipping the assumptions section.** When volumes are estimated and competitors inferred, an unlabeled deliverable looks authoritative and misleads budget decisions. State every assumption in the executive summary.
