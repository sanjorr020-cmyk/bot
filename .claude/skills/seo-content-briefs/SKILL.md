---
name: seo-content-briefs
description: "Analyzes the SERP for a target keyword and builds a writer-ready content brief: search intent summary, H2/H3 outline, entities and questions to cover, internal and external link targets, title and meta suggestions, and word count and format guidance. Use when the user asks to create a content brief, build an SEO brief for a keyword, outline an article to rank for a term, analyze the SERP or top-ranking pages for a keyword, figure out search intent, decide what word count or format a page needs, prepare instructions for a freelance writer, or turn a keyword list into article briefs."
---

# SEO Content Briefs

Turn a target keyword into a complete, writer-ready brief by reverse-engineering what Google currently rewards. The goal is a single document a writer can execute without asking follow-up questions: what intent to satisfy, what structure to use, which subtopics and questions are mandatory, where to link, what the title and meta should say, and how long and in what format the piece should be. A good brief removes 80% of the revision cycle before a word is written.

## When to use this skill

Use this skill when the user:
- Has a target keyword (or small set of keywords) and wants a brief for a writer or for themselves.
- Asks "what should this article cover to rank?" or "what's the intent behind this keyword?"
- Wants a SERP breakdown of the top-ranking pages for a term.
- Needs to convert a keyword list into a batch of briefs.

Do NOT use this skill for:
- Finding and prioritizing keywords in the first place — use **keyword-research**. This skill starts once a target keyword is chosen.
- Writing the article itself — hand the finished brief to **blog-writing**.
- Optimizing an already-published page (title rewrite, header cleanup, image alts, schema) — use **on-page-seo**.
- Planning topic clusters, editorial calendars, or pillar strategy — use **content-strategy**.
- Acquiring backlinks to the published piece — use **link-building**.
- Homepage, pricing, or product page copy — use **website-copywriting**; briefs from this skill are for search-driven content pages.

If the user hands you a keyword with no context at all ("brief for 'crm software'"), proceed with the defaults below rather than stalling — but flag any assumption you make.

## Inputs to gather

Ask for these up front. Where the user doesn't know, use the stated default and note it in the brief.

1. **Target keyword** (required) and any secondary keywords. If they give a topic instead of a keyword, ask which exact phrase they want to rank for, or pick the most natural head term and say so.
2. **Domain the content will live on** — needed for internal link targets and realistic angle. Default: write internal link suggestions as topic descriptions ("link to your pricing page") rather than URLs.
3. **Audience and sophistication level** — who searches this and what they already know. Default: infer from the keyword's specificity (e.g., "what is a CRM" = beginner; "salesforce vs hubspot api limits" = practitioner).
4. **Business goal for the page** — traffic, leads, product signups, affiliate revenue. Default: assume top-of-funnel traffic with one soft product mention.
5. **Live SERP data** — if you have web search/fetch tools, pull the SERP yourself (see Process step 2). If not, ask the user to paste the top 10 titles/URLs and any People Also Ask questions, or proceed from domain knowledge and clearly label the brief "built without live SERP verification — validate titles, word counts, and PAA before assigning."
6. **Existing content on the site** covering adjacent topics — for internal links and cannibalization checks. Default: none known.
7. **Constraints** — brand voice, banned competitor mentions, compliance review (health/finance/legal = YMYL, which raises the sourcing bar). Default: none.

## Process

1. **Confirm the keyword and check for cannibalization.** Restate the exact target phrase. Ask whether the site already ranks or has a page targeting this or a near-identical term. If yes, recommend updating that page instead of briefing a new one — two pages competing for one query usually both underperform.

2. **Capture the live SERP.** With web tools available: search the exact keyword, record for each of the top 10 organic results — URL, title tag, page type (blog post, product page, category page, tool, video, forum thread), publisher type (niche site, big media, competitor product, UGC like Reddit), and estimated depth. Also record SERP features present: featured snippet (and its format — paragraph, list, or table), People Also Ask questions, video carousel, shopping results, local pack, AI Overview. Without web tools: request pasted SERP data or proceed from knowledge with the caveat from Inputs #5.

3. **Classify search intent.** Assign one dominant intent using the four-type framework in the Frameworks section (informational, commercial investigation, transactional, navigational), based on what actually ranks — not on what the keyword "sounds like." Note mixed intent explicitly (e.g., 7 informational guides + 3 product pages = informational-dominant with commercial undertone). Decision point: if the SERP is dominated by a page type the user cannot produce (e.g., all e-commerce category pages and they run a blog), tell them this keyword is a poor fit and suggest routing back to **keyword-research** for an alternative.

4. **Determine the dominant format and angle.** From the top 5 results, identify the winning format: how-to guide, listicle ("11 best..."), comparison, definition + deep dive, template/checklist page, calculator, original research. Match the dominant format — Google is showing you what satisfies the query. Then find the angle gap: something the top results all miss (outdated data, no examples, no pricing, ignores a major sub-audience). Every brief must state one concrete differentiation angle; "make it better written" is not an angle.

5. **Set word count and structure targets.** Take the approximate word counts of the top 5 results, drop obvious outliers (a 12,000-word ultimate guide among 1,500-word posts), and set the target at the median ±20%. Typical outcomes: definitional queries 800–1,500 words; how-to guides 1,500–2,500; "best X" listicles 2,000–3,500; broad pillar terms 3,000+. Count the H2s on the top 3 results to calibrate section count — most winning posts have 5–10 H2s.

6. **Build the H2/H3 outline.** Construct the outline by union-and-prune: list every H2/H3 theme appearing in 2+ of the top 5 results (these are mandatory), add 1–3 sections serving your differentiation angle, and cut anything that pads without serving the intent. Order sections by search intent priority — answer the core query within the first 150 words and the first H2, not after a 400-word throat-clearing intro. Under each H2, write 1–3 bullet directives telling the writer exactly what the section must accomplish, including any specific claims, steps, or data to include.

7. **Compile entities and questions.** Entities: list 10–25 terms, brands, concepts, and named methods that top pages consistently mention (e.g., for "email deliverability": SPF, DKIM, DMARC, sender reputation, seed testing, Gmail/Yahoo 2024 bulk-sender rules). These signal topical completeness. Questions: pull 4–8 from People Also Ask and autocomplete; assign each to a specific outline section or a dedicated FAQ H2. If a featured snippet exists, specify the capture attempt: a 40–55 word direct-answer paragraph (or a numbered list for process queries) immediately below the H2 matching the query.

8. **Specify link targets.** Internal: 3–5 pages on the user's site, each with the destination, suggested anchor text, and which section it belongs in; always include one path toward the money page that matches funnel stage. External: 2–4 authoritative citations (research, official docs, standards bodies — never direct competitors for the same keyword); for YMYL topics require primary sources and a named expert reviewer.

9. **Draft title and meta options.** Write 3 title tag options: 50–60 characters, keyword in the first half, one with a number or year, one with a benefit/angle hook, none clickbait the page can't cash. Write 2 meta descriptions: 150–160 characters, active voice, includes the keyword and a reason to click. Suggest a URL slug: lowercase, hyphenated, 3–5 words, keyword-based, no year or stop words.

10. **Assemble and sanity-check the brief.** Fill the template in Frameworks below. Read it back asking one question: "Could a competent freelancer who has never heard of this company produce a rankable draft from this alone?" If any section would generate a clarifying email, fix it. Deliver per Output format.

## Frameworks & templates

### Search intent classification (the 4 types)

| Intent | SERP evidence | Content implication |
|---|---|---|
| Informational | Guides, wikis, PAA-heavy, featured snippet | Educational article; answer fast, go deep; soft CTA only |
| Commercial investigation | "Best/top/vs/review" listicles and comparisons | Comparison or listicle with criteria, pricing, verdicts |
| Transactional | Product/category pages, shopping ads, pricing pages | Product or landing page — usually not a blog brief; route to **landing-page-cro** or **website-copywriting** |
| Navigational | One brand dominates all positions | Don't target unless it's your brand |

Rule: the SERP outvotes intuition. "Best free invoicing software" sounds transactional but ranks listicles — that's commercial investigation, and a product page will not rank for it.

### SERP feature signals

- **Featured snippet (paragraph)** → include a 40–55 word definition/answer block under a query-matching H2.
- **Featured snippet (list/table)** → structure the core answer as numbered steps or a comparison table.
- **Video carousel** → recommend an embedded video or companion YouTube asset (see **youtube-scripts**).
- **Heavy PAA** → add an FAQ section; each question as an H3 with a 40–60 word answer.
- **AI Overview present** → prioritize unique data, expert quotes, and first-hand experience the overview can't synthesize; expect lower CTR on pure definitions.

### Angle gap taxonomy (pick one at step 4)

Every brief needs exactly one primary differentiation angle. Scan the top 5 results against these six gap types and pick the strongest:

1. **Data gap** — top results cite no numbers, or recycle the same 2019 study. Fix: original data, fresh benchmarks, or a named recent source.
2. **Recency gap** — content references deprecated tools, old UI, or pre-update rules. Fix: current-year walkthrough with what changed.
3. **Audience gap** — everything targets beginners while search volume includes practitioners (or vice versa). Fix: serve the underserved segment explicitly in the title.
4. **Format gap** — the SERP is all prose while the query begs for a table, template, checklist, or calculator. Fix: lead with the asset.
5. **Experience gap** — no top result shows first-hand use: no screenshots, no test results, no "we ran this for 90 days." Fix: documented hands-on evidence.
6. **Completeness gap** — every result covers steps 1–5 and skips the hard part (migration, edge cases, pricing). Fix: cover the skipped section deeply and say so in the meta.

If no gap exists across all six, the SERP is saturated — recommend the user pick a longer-tail variant via **keyword-research** rather than commissioning a me-too piece.

### Keyword-to-brief fit check (go/no-go before writing the brief)

Run these four gates at step 3; a "no" on any gate means flag it to the user before proceeding:

- **Page-type gate:** can the user's site plausibly produce the dominant page type? (Blog can't win a category-page SERP.)
- **Authority gate:** are 4+ of the top 5 results DR 80+ big media or government/edu domains on a YMYL topic? If so, set expectations — a new page may need 6–12 months plus links (**link-building**) to crack page 1.
- **Cannibalization gate:** does the site already have a page targeting this or a >70%-overlapping term? Update instead of duplicate.
- **Business gate:** does ranking here actually serve the stated goal? A 10k-visit informational term with zero purchase intent is a poor use of budget if the goal is pipeline.

### Content brief template (fill in every field)

```
CONTENT BRIEF — [Working title]
Target keyword: [exact phrase] | Secondary: [2–5 phrases]
Search intent: [type + one-sentence summary of what the searcher wants]
Format: [guide / listicle / comparison / etc.] | Word count: [target ± range]
Audience: [who, what they know, what job they're hiring this page for]
Differentiation angle: [the one thing top results miss that this page nails]
Business goal & CTA: [goal; CTA text and placement]

TITLE OPTIONS (50–60 chars):
1. ...  2. ...  3. ...
META DESCRIPTION (150–160 chars): [2 options]
URL SLUG: /...

OUTLINE:
H1: [title]
  [Intro directive: answer the core query in first 150 words; hook; no history lesson]
H2: ...
  - [what this section must accomplish / include]
  H3: ...
[repeat 5–10 H2s]
H2: FAQ (if PAA-heavy)
  H3: [question] — [answer directive]

MUST-COVER ENTITIES/TERMS: [10–25 comma-separated]
QUESTIONS TO ANSWER: [4–8, each mapped to a section]
FEATURED SNIPPET TARGET: [query + format + which section attempts it]

INTERNAL LINKS: [3–5: destination — anchor — section]
EXTERNAL CITATIONS: [2–4: source — what claim it supports]

TOP 5 SERP SNAPSHOT (as of [date]):
1. [URL] — [type] — [~words] — [why it ranks / weakness]
... 
DO NOT: [banned topics, competitors, claims, tone traps]
```

### Worked example (condensed)

Keyword: "how to write a cold email" — SERP: 8 how-to guides, 1 template roundup, 1 Reddit thread; paragraph featured snippet; 4 PAA questions. Intent: informational, practitioner audience.

```
Format: step-by-step guide + templates | Word count: 2,200 (top 5 median 2,150)
Angle: every top result gives templates but none shows real reply-rate data
by subject-line style — we include benchmarks from our own send data.
Title opt 1: "How to Write a Cold Email That Gets Replies (2026 Guide)" (57 chars)
H2: What makes a cold email work — 45-word snippet-bait definition first
H2: Step 1: Research the prospect (2 minutes, not 20) ...
H2: Cold email templates by scenario — 4 templates, each annotated
H2: FAQ — "How long should a cold email be?" → answer: 50–125 words, cite study
Internal: /blog/follow-up-sequences — anchor "follow-up sequence" — in Step 6
Entities: subject line, personalization, CTA, spam filters, SPF/DKIM,
follow-up cadence, reply rate, A/B testing, ...
```

## Output format

Deliver a single markdown document (or file, if the user wants one per keyword) containing, in order:

1. **Header block** — keyword, intent, format, word count, angle, goal (the top of the template above).
2. **Title/meta/slug options.**
3. **Full annotated outline** — every H2/H3 with per-section directives.
4. **Entities, questions, and snippet target.**
5. **Link plan** — internal and external tables.
6. **SERP snapshot with date** — so the brief's shelf life is visible (briefs go stale in 3–6 months).
7. **Do-not list and any assumptions made** (missing inputs, no live SERP, inferred audience).

For batch requests (multiple keywords), produce one brief per keyword plus a one-line summary table (keyword | intent | format | word count | angle) at the top. Keep each brief self-contained — writers receive them individually.

## Quality checklist

Pass every check before delivering:

1. Intent classification is justified by what ranks, not by keyword phrasing alone.
2. The format matches the dominant format of the current top 5 results.
3. Word count target derives from the top-5 median (outliers dropped), not a round number pulled from habit.
4. The brief states exactly one specific differentiation angle a writer could explain back to you.
5. Every H2/H3 has at least one directive bullet — no bare headings.
6. The core query is answered in the intro/first H2, not buried at section 6.
7. Every mandatory subtopic (appearing in 2+ top-5 results) is in the outline or consciously excluded with a reason.
8. 10–25 entities listed; a writer covering all of them cannot produce a topically thin draft.
9. 4–8 questions listed and each mapped to a specific section.
10. All 3 title options are 50–60 characters with the keyword in the first half; metas are 150–160 characters.
11. 3–5 internal links with anchors and placement; 2–4 external citations, none to direct SERP competitors.
12. Featured snippet opportunity is either targeted with format instructions or explicitly noted as absent.
13. SERP snapshot is dated; any brief built without live SERP data is labeled as such.
14. No placeholder text anywhere — a writer could start drafting within 5 minutes of receiving it.

## Common mistakes

- **Briefing from the keyword, not the SERP.** Assuming "X vs Y" needs a comparison table when the SERP ranks single-product deep dives — always let ranking pages define format.
- **The Frankenstein outline.** Copying the union of every competitor H2 with zero pruning produces a bloated 5,000-word page that satisfies no one. Mandatory sections come from overlap (2+ of top 5); everything else must earn its place.
- **Word count as the strategy.** "Write 3,000 words because competitors did" without directives per section just buys longer fluff. Depth targets belong at the section level.
- **Skyscraper-by-default angle.** "Like the #1 result but longer" is not differentiation. If you can't name a gap — data, recency, audience, format, first-hand experience — the keyword may not be worth a new page.
- **Ignoring page-type mismatch.** Briefing a blog post for a SERP full of category pages (or vice versa) wastes the entire production budget. Kill or reroute these keywords at step 3, not after publishing.
- **Entities as keyword stuffing instructions.** The entity list means "cover these concepts," not "insert these strings N times." Say so in the brief if the writer is junior.
- **Title options that overpromise.** A "(2026)" or "Ultimate" title on a 900-word post triggers pogo-sticking. Titles must match the content the outline actually produces.
- **No internal link plan.** Writers won't hunt through the site map; unlinked posts become orphans that neither pass nor receive authority. Specify destination + anchor + section every time.
- **One brief targeting three intents.** "Covers what it is, best tools, AND our product" splits the page across informational and commercial SERPs and ranks for neither. One page, one dominant intent.
- **Treating the brief as immortal.** SERPs shift; a brief older than a quarter needs its snapshot, PAA, and word count re-verified before a writer starts.
