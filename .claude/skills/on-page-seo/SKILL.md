---
name: on-page-seo
description: "Audits and fixes page-level SEO: title tags, meta descriptions, header hierarchy, keyword placement, image alt text, schema markup, internal links, and content freshness. Produces a prioritized audit report with rewritten elements ready to paste into a CMS. Use when the user asks to optimize a page for SEO, audit on-page SEO, rewrite title tags or meta descriptions, fix header structure, add schema or structured data, improve keyword usage on a page, write image alt text, plan internal links, refresh stale content for rankings, or asks why a specific page isn't ranking."
---

# On-Page SEO

Run page-level SEO as an audit-and-fix workflow: score every on-page element of a URL against concrete standards, then deliver rewritten replacements the user can paste directly into their CMS. The goal is never a list of vague problems — it is a before/after table where every "after" is production-ready copy or markup.

## When to use this skill

Use this skill when the user wants to improve how a specific page (or small set of pages) is optimized: titles, metas, headers, body keyword usage, alt text, schema, internal links, or refreshing dated content.

Do NOT use this skill for:
- Choosing which keywords to target in the first place → **keyword-research**
- Planning a new article before it's written → **seo-content-briefs**
- Site-wide crawlability, speed, indexation, canonicals, redirects, sitemaps → **technical-seo**
- Earning backlinks from other sites → **link-building**
- Google Business Profile, NAP citations, local pack rankings → **local-seo**
- Conversion-focused rewrites of landing pages (CTAs, forms, persuasion) → **landing-page-cro**
- Writing the article itself from scratch → **blog-writing** or **website-copywriting**

If the user asks "why doesn't my site rank," clarify whether the problem is one page (this skill), the whole site (technical-seo), or lack of authority (link-building) before proceeding.

## Inputs to gather

Ask for these up front. Where the user doesn't know, use the listed default and say so.

1. **The URL or page content.** If a live URL is provided and web tools are available, fetch it. Otherwise ask the user to paste the page's HTML or at minimum: current title tag, meta description, all headings in order, body copy, and image list.
2. **Primary keyword** — the one query this page should rank for. If unknown, infer the most plausible primary keyword from the page's H1 and content, state your assumption, and suggest running **keyword-research** to confirm.
3. **2–5 secondary keywords / variants.** Default: generate close variants and question-form keywords from the primary keyword yourself.
4. **Page type** — blog post, product page, service page, category page, homepage, comparison page. This drives schema selection and title formulas. Default: infer from content.
5. **Search intent** — informational, commercial, transactional, navigational. Default: infer from the keyword's phrasing (e.g., "how to…" = informational; "best X for Y" = commercial; "buy / pricing / near me" = transactional).
6. **Top 3 ranking competitors for the keyword** (URLs or descriptions). Default: proceed without, but flag that competitor comparison strengthens the recommendations.
7. **Site context for internal linking** — a list of other important pages/URLs on the site. Default: recommend link *types* ("link to your pricing page from the second mention of cost") rather than exact URLs.
8. **Publish/last-updated date** of the page, for the freshness check. Default: skip freshness scoring and note it as unverified.

Never block on missing inputs beyond item 1. One clarifying round maximum, then proceed on stated defaults.

## Process

1. **Establish the target.** Confirm one primary keyword and its intent. Every subsequent judgment is made against this keyword — if the page tries to target two unrelated keywords, recommend splitting into two pages and pick the better-fit keyword for this one.

2. **Audit the title tag.**
   - Length: 50–60 characters (Google truncates around 600px, roughly 60 chars). Under 30 chars wastes space; over 60 risks truncation of the keyword or brand.
   - Primary keyword present, ideally in the first half.
   - Exactly one title; no keyword repeated twice; brand suffix (" | Brand") only if it fits.
   - Differs from the H1 by at least framing (title sells the click; H1 states the topic).
   - Verdict: Pass / Fix. If Fix, write 3 candidate titles using the formulas in the Frameworks section and recommend one.

3. **Audit the meta description.**
   - Length: 140–160 characters (truncation around 920px, ~160 chars). Note: Google rewrites ~60–70% of metas, so treat this as ad copy for the ~30–40% of impressions where it shows.
   - Contains the primary keyword or close variant (bolded in SERPs), a concrete benefit or differentiator, and an implicit or explicit call to action.
   - Verdict + one rewritten replacement (not three — one strong meta is enough).

4. **Audit header hierarchy.**
   - Exactly one H1, containing the primary keyword or a close variant.
   - No skipped levels (H2 → H4 without an H3 is a fail).
   - H2s read as a table of contents for the page; at least 2–3 H2s on any page over ~600 words.
   - Secondary keywords and question-form queries appear naturally in H2/H3s (question headers also feed FAQ schema and featured snippets).
   - Output the corrected outline as an indented list.

5. **Audit keyword placement and density.**
   - Required placements: title tag, H1, first 100 words of body, at least one H2, and (if editable) the URL slug and once near the conclusion.
   - Density sanity check: primary keyword at roughly 0.5–1.5% of body words. Above ~2.5%, or any sentence that exists only to hold the keyword, is stuffing — replace repetitions with synonyms, pronouns, or related entities.
   - Coverage check: list related subtopics/entities the top-ranking pages cover that this page misses (use competitor input or general topic knowledge). Missing subtopics matter more than exact-match repetition.

6. **Audit image alt text.**
   - Every content image has alt text; decorative images get empty `alt=""`.
   - Alt text describes the image specifically in under 125 characters (screen readers often cut off there); include the keyword only where it genuinely describes the image — at most 1–2 images per page.
   - Never start with "image of" / "picture of". Flag filenames like `IMG_4032.jpg` and suggest keyword-relevant kebab-case names for future uploads.

7. **Select and draft schema markup.** Pick using the decision table in Frameworks, draft the JSON-LD, and instruct the user to validate it with Google's Rich Results Test before deploying. Only mark up content that is visibly on the page — invisible schema content violates Google's guidelines and risks a manual action.

8. **Audit internal linking.**
   - Inbound: does at least one other page on the site link here with descriptive anchor text? A page with zero internal inbound links ("orphan page") should get 2–3 inbound links from topically related pages.
   - Outbound: 3–8 contextual internal links per 1,000 words, placed in body copy (not just nav/footer), with anchors that describe the destination ("compare pricing plans", never "click here" or bare "here").
   - Recommend specific anchor text + destination pairs.

9. **Score content freshness.**
   - Flag: dated years in title/headers older than the current year, statistics older than ~2 years, dead or superseded references, screenshots of old UIs, "last updated" older than 12 months on a competitive query.
   - Recommend the refresh action: update stats and examples, add a section covering what changed, update the year in the title only if the content genuinely reflects the current year, and update the `dateModified` in schema. A refresh must change substance, not just the date — Google discounts date-only updates.

10. **Compile the deliverable.** Assemble everything into the Output format below: scorecard first, then fixes ordered by impact — (1) title, (2) H1/headers, (3) intro keyword placement, (4) meta description, (5) internal links, (6) schema, (7) alt text, (8) freshness. State expected outcome honestly: on-page fixes typically show effects in 2–8 weeks after recrawl, and cannot compensate for a page that lacks topical depth or backlinks.

## Frameworks & templates

### Title tag formulas by page type

| Page type | Formula | Example (keyword: "standing desk mats") |
|---|---|---|
| Blog / informational | [Keyword]: [N] [Promise] ([Year]) | Standing Desk Mats: 7 Picks Tested for Comfort (2026) |
| Commercial "best" | [N] Best [Keyword] for [Audience/Use] | 9 Best Standing Desk Mats for All-Day Comfort |
| Product page | [Product Name] – [Key Spec/Benefit] \| [Brand] | ErgoFlex Mat – 3/4" Anti-Fatigue Foam \| DeskCo |
| Service page | [Service] in [Location/Niche] \| [Brand] | Bookkeeping for SaaS Startups \| LedgerWorks |
| Comparison | [X] vs [Y]: [Decision criterion] | Notion vs Coda: Which Fits a 10-Person Team? |

### Meta description template

`[Hook or pain point in ≤8 words]. [What the page delivers, with keyword]. [Differentiator or proof]. [CTA verb phrase].`

Worked example (152 chars): "Sore feet by 2pm? We tested 14 standing desk mats over 30 days and ranked the 7 that actually help. See picks by budget, size, and firmness."

### Schema selection decision table

| Page type | Primary schema | Add if applicable |
|---|---|---|
| Blog post / guide | `Article` (or `BlogPosting`) | `FAQPage` (visible Q&A section), `HowTo` (step content) |
| Product page | `Product` with `Offer` | `AggregateRating` (real reviews only), `BreadcrumbList` |
| Service page | `Service` | `LocalBusiness` (physical service area → see local-seo), `FAQPage` |
| Recipe / video / event | `Recipe` / `VideoObject` / `Event` | `BreadcrumbList` |
| Homepage | `Organization` or `WebSite` | `SearchAction` (if site search exists) |

Worked JSON-LD example for a refreshed article:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Standing Desk Mats: 7 Picks Tested for Comfort",
  "author": { "@type": "Person", "name": "Jane Rivera" },
  "datePublished": "2024-03-12",
  "dateModified": "2026-07-07",
  "image": "https://example.com/images/standing-desk-mats-tested.jpg",
  "publisher": { "@type": "Organization", "name": "DeskCo" }
}
```

### On-page fix table template (use for the deliverable)

```
| # | Element | Current | Issue | Replacement (paste-ready) | Impact |
|---|---------|---------|-------|---------------------------|--------|
| 1 | Title tag | "Home - DeskCo Blog" (18 ch) | No keyword, wasted length | "Standing Desk Mats: 7 Picks Tested for Comfort (2026)" (54 ch) | High |
| 2 | H1 | "Our Favorite Mats" | Keyword missing | "The 7 Best Standing Desk Mats, Tested Over 30 Days" | High |
| 3 | Meta description | (missing) | Google auto-generates | "Sore feet by 2pm? We tested 14 standing desk mats..." (152 ch) | Medium |
```

### Worked scorecard example (deliverable section 1)

```
| Area              | Verdict | Reason                                                        |
|-------------------|---------|---------------------------------------------------------------|
| Title tag         | Fix     | 18 chars, no keyword ("Home - DeskCo Blog")                   |
| Meta description  | Fix     | Missing; Google is auto-generating from the first paragraph   |
| Header hierarchy  | Fix     | Two H1s; H2 -> H4 skip in the buying-guide section            |
| Keyword placement | Fix     | Keyword absent from first 100 words; density 0.2%             |
| Image alt text    | Fix     | 6 of 9 images missing alt; 1 alt is keyword-stuffed           |
| Schema            | Fix     | No structured data; Article + FAQPage applicable              |
| Internal links    | Pass    | 5 contextual links / ~900 words, descriptive anchors          |
| Freshness         | Fix     | Stats cite 2023 survey; screenshots show discontinued product |
```

### Freshness refresh checklist (apply during step 9)

- Replace every statistic older than 2 years or mark it with its year explicitly.
- Update product names, prices, screenshots, and version numbers.
- Add one new section answering a question that emerged since publication.
- Update internal links to newer relevant pages published since.
- Bump `dateModified` in schema and the visible "Updated" date — only after substantive edits.

## Output format

Deliver a single markdown document titled **"On-Page SEO Audit: [Page/URL] — targeting '[primary keyword]'"** containing, in order:

1. **Scorecard** — a table of the 8 audit areas (title, meta, headers, keyword placement, alt text, schema, internal links, freshness) with Pass / Fix / N/A and a one-line reason each.
2. **Priority fixes** — the fix table (template above), ordered by impact, every replacement paste-ready. Include character counts in parentheses for titles and metas.
3. **Corrected header outline** — the full H1–H3 structure as an indented list.
4. **Schema block** — complete JSON-LD in a code fence, plus the instruction to validate with Rich Results Test.
5. **Internal link plan** — table of anchor text → destination (or destination type), with the sentence or section where each link belongs.
6. **Freshness actions** — only if the page is older than 12 months or contains dated content.
7. **Next steps** — 3–5 bullets: implementation order, request reindexing via Search Console URL Inspection after deploying, recheck rankings at 4 and 8 weeks, and any handoffs (e.g., "thin content depth → seo-content-briefs", "slow page → technical-seo").

If auditing multiple pages, produce one scorecard summary table across all pages first, then a per-page fix section.

## Quality checklist

- [ ] Exactly one primary keyword is named, and every recommendation traces to it.
- [ ] Recommended title tag is 50–60 characters, keyword in the first half, character count stated.
- [ ] Recommended meta description is 140–160 characters, contains keyword + benefit + CTA, count stated.
- [ ] Header outline has exactly one H1 and no skipped heading levels.
- [ ] Primary keyword appears in the first 100 words of the recommended intro.
- [ ] Estimated keyword density of the revised copy falls between 0.5% and 1.5%.
- [ ] Every content image has specific alt text under 125 characters; keyword used in at most 2 alts.
- [ ] Schema type matches the page type per the decision table, and the JSON-LD contains no content invisible on the page.
- [ ] Internal link plan gives descriptive anchor text (no "click here") with 3–8 contextual links per 1,000 words.
- [ ] Every "Fix" verdict comes with a paste-ready replacement — no fix is described without its solution.
- [ ] Fixes are ranked by impact, not listed in page order.
- [ ] Freshness recommendations change substance (stats, sections, examples), not just the date.
- [ ] Out-of-scope findings (site speed, backlinks, keyword choice) are routed to the correct sibling skill, not solved here.
- [ ] No claim of guaranteed rankings; timeline stated as 2–8 weeks post-recrawl.

## Common mistakes

- **Optimizing one page for two unrelated keywords.** "CRM software" and "how to clean a CRM database" have different intents; one page targeting both ranks for neither. Split the page or drop one keyword.
- **Title tag = H1, verbatim.** You forfeit a free chance to test different framing — the title wins the SERP click, the H1 confirms the topic on arrival. Vary them.
- **Front-loading the brand.** "DeskCo | Blog | Best Standing Desk Mats" buries the keyword in the truncation zone. Brand goes last, and gets cut first when space runs out.
- **Treating meta description as a ranking factor.** It isn't one. Its job is click-through rate. Writing it as a keyword dump instead of ad copy wastes the one SERP element you fully control.
- **Exact-match keyword repetition instead of topic coverage.** Repeating "best standing desk mats" 15 times loses to a competitor that covers thickness, materials, sizing, and cleaning once each. Add missing subtopics before adding keyword instances.
- **Stuffing alt text.** `alt="standing desk mat best standing desk mats 2026 anti fatigue mat"` is a spam signal and useless to screen-reader users. Describe the actual image.
- **FAQ schema on questions that aren't on the page.** Schema for invisible content is a guidelines violation that can trigger a manual action. Mark up only visible content.
- **Date-bumping without substance.** Changing "(2025)" to "(2026)" and updating `dateModified` with no content changes gets discounted quickly and erodes trust if noticed. Refresh means new stats, examples, or sections.
- **Internal links only in nav and footer.** Sitewide links pass weak topical signals. The links that matter are contextual, in body copy, with descriptive anchors.
- **Fixing on-page elements when the page has no business ranking.** A 400-word post targeting a keyword where every competitor has 2,500 words of original testing won't be saved by a better title. Say so, and route to seo-content-briefs for a depth rebuild.
- **Reporting problems without replacements.** "Meta description too short" is an observation. The deliverable is the rewritten 152-character meta the user pastes in.
