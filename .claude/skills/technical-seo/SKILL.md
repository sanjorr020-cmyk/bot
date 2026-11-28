---
name: technical-seo
description: "Runs a structured technical SEO audit covering crawlability, indexation, site architecture, Core Web Vitals, duplicate content, redirects, hreflang, and structured data, then delivers a prioritized fix list with owners and effort estimates. Use when the user asks for a technical SEO audit, says pages aren't getting indexed or ranking despite good content, asks why Google isn't crawling their site, wants their robots.txt or XML sitemap reviewed, needs help with Core Web Vitals or PageSpeed scores, has duplicate content or canonical tag questions, is diagnosing a traffic drop after a site migration or redesign, needs hreflang set up or debugged for international sites, or wants structured data errors fixed."
---

# Technical SEO Audit

Guide the user through a complete technical SEO audit: verify search engines can crawl the site, diagnose why pages are or aren't indexed, evaluate architecture and page experience, find duplication and redirect problems, validate international and structured data markup, and turn every finding into a prioritized, owner-assigned fix list. The deliverable is an audit report a developer can act on without further interpretation.

## When to use this skill

Use this skill when the request is about how search engines **access, render, index, or evaluate** a site's infrastructure: crawl budget, indexation gaps, sitemaps, robots.txt, canonicals, redirects, site speed, hreflang, schema markup, migration diagnostics, or "traffic dropped and content didn't change."

Do NOT use this skill for:
- Content-level optimization (titles, headings, internal copy, keyword placement) → **on-page-seo**
- Choosing which keywords to target → **keyword-research**
- Planning what content to create → **seo-content-briefs** or **content-strategy**
- Backlink profile analysis or acquisition → **link-building**
- Google Business Profile, local pack, NAP consistency → **local-seo**
- Conversion problems on pages that already rank → **landing-page-cro**
- Paid search account problems → **ppc-audit**

If the user asks for a "full SEO audit," run this skill for the technical layer and explicitly flag that on-page and link audits are separate passes handled by the sibling skills.

## Inputs to gather

Ask for these up front. When the user can't provide something, use the stated default and note the limitation in the report.

1. **Domain and protocol** (e.g., `https://www.example.com`). Confirm the canonical host — www vs non-www.
2. **CMS / tech stack** (WordPress, Shopify, Next.js, custom). Default: infer from page source (generator meta tag, asset paths).
3. **Approximate page count** and site type (blog, ecommerce, SaaS, marketplace). Default: estimate from sitemap URL count. Ecommerce with faceted navigation changes the audit's center of gravity toward crawl budget and parameter handling.
4. **Google Search Console access** (exports or screenshots of the Pages report, Core Web Vitals report, and Sitemaps report). This is the single most valuable input. Default without it: rely on `site:` queries, live-URL checks, and PageSpeed Insights — and say confidence is reduced.
5. **Crawl data** if they have it (Screaming Frog, Sitebulb, Ahrefs Site Audit export as CSV). Default: manually spot-check 15–25 representative URLs across templates (homepage, category, product/post, paginated page, search/filter page).
6. **Recent changes**: migration, redesign, URL structure change, CMS switch, or CDN change in the last 12 months. If yes, anchor the audit around the change date.
7. **Symptom, if any**: "traffic dropped," "new pages never index," "wrong page ranks." A symptom turns the audit into a diagnosis — start with the relevant section instead of running all sections in order.
8. **International targeting**: which language/country versions exist. Default: check for hreflang tags and locale subfolders; skip the hreflang section if the site is single-locale.

## Process

Work through the sections in this order. For each finding, record: what's wrong, evidence (URL + observed behavior), impact (High/Medium/Low), and fix. You'll compile these into the prioritized fix list in step 10.

1. **Establish the baseline.**
   - Fetch the homepage and confirm it returns HTTP 200 over HTTPS. Check that `http://`, `https://`, www, and non-www variants all 301 to one canonical version in a single hop (4 test URLs).
   - Run `site:example.com` in Google and compare the result count to the known page count. A ratio far below ~70% suggests an indexation problem; a ratio far above 130% suggests index bloat (parameters, tags, search pages indexed).

2. **Audit robots.txt.**
   - Fetch `/robots.txt`. Confirm it returns 200 (a 5xx here can halt all crawling; a 404 is fine — it means "allow everything").
   - Check for accidental `Disallow: /` (common leftover from staging), blocked CSS/JS directories (breaks rendering), and blocked sections that should rank.
   - Confirm a `Sitemap:` line pointing to the sitemap's absolute URL.
   - Decision point: if robots.txt blocks a page, Google can't see a `noindex` on it. Blocking and noindexing the same URLs is a contradiction — flag it.

3. **Audit XML sitemaps.**
   - Fetch the sitemap (or sitemap index). Verify limits: ≤50,000 URLs and ≤50 MB uncompressed per file; use a sitemap index above that.
   - Spot-check 10 URLs from the sitemap: every one must be 200, indexable (no noindex), and self-canonical. Any 3xx/4xx/noindexed URL in a sitemap is a finding — sitemaps must contain only canonical, indexable URLs.
   - Check the inverse: are important sections missing from the sitemap entirely?
   - In GSC's Sitemaps report, compare "Discovered" vs actual URL count and check for processing errors.

4. **Diagnose indexation.** Use the GSC Pages report categories; each maps to a different root cause:

   | GSC status | Likely cause | Fix direction |
   |---|---|---|
   | Excluded by 'noindex' tag | Deliberate or leftover meta tag | Remove tag if page should rank |
   | Blocked by robots.txt | Disallow rule | Adjust robots.txt |
   | Duplicate without user-selected canonical | Google chose its own canonical | Strengthen canonical signals, differentiate content |
   | Duplicate, Google chose different canonical | Canonical tag ignored | Check for conflicting signals (sitemap, internal links, hreflang) |
   | Crawled — currently not indexed | Quality/thin content signal | Improve or consolidate content (hand off to on-page-seo) |
   | Discovered — currently not indexed | Crawl budget or weak internal linking | Improve architecture (step 5), reduce low-value URLs |
   | Soft 404 | Thin page returning 200 | Return real 404/410 or add substance |
   | Page with redirect | URL redirects | Expected after migrations; verify targets |

   - Without GSC: use the URL Inspection-style live test on 10–15 sample URLs (fetch each; check status code, meta robots, X-Robots-Tag header, canonical tag) and `site:example.com/path` queries per section.

5. **Evaluate site architecture and click depth.**
   - From a crawl export, check click depth: revenue-critical pages should be ≤3 clicks from the homepage; flag anything important at depth ≥5.
   - Find orphan pages: URLs in the sitemap or analytics that receive zero internal links. Orphans rarely rank.
   - For ecommerce/faceted sites: count crawlable URL permutations from filters and sort parameters. If parameters multiply URLs >10x the canonical page count, recommend a parameter-handling strategy (canonical + robots disallow on filter combinations, or rewrite filters as non-crawlable controls).
   - Check pagination: paginated pages should be self-canonical (not canonicaled to page 1) and crawlable, or the products/posts on deep pages become unreachable.

6. **Assess Core Web Vitals.** Use field data (CrUX via PageSpeed Insights or GSC's CWV report) as the verdict and lab data only for debugging. Thresholds at the 75th percentile:

   | Metric | Good | Needs improvement | Poor |
   |---|---|---|---|
   | LCP (Largest Contentful Paint) | ≤2.5 s | 2.5–4.0 s | >4.0 s |
   | INP (Interaction to Next Paint) | ≤200 ms | 200–500 ms | >500 ms |
   | CLS (Cumulative Layout Shift) | ≤0.10 | 0.10–0.25 | >0.25 |

   - Test one URL per template (homepage, category, article/product), mobile first.
   - Map failures to standard causes: LCP → slow server response (TTFB >800 ms), render-blocking CSS/JS, unoptimized hero image (recommend preloading it and serving AVIF/WebP); INP → heavy third-party scripts, long main-thread tasks; CLS → images without width/height attributes, injected banners, web fonts swapping late.
   - Keep recommendations at the diagnostic level ("hero image is 1.8 MB PNG; convert to WebP ≤150 KB and preload") — implementation belongs to the dev team.

7. **Find duplicate content and canonical problems.**
   - Standard duplication vectors to test: HTTP/HTTPS, www/non-www, trailing slash vs none, uppercase paths, URL parameters (`?utm_`, `?sort=`, `?sessionid=`), print versions, staging/dev subdomains indexed, and near-identical product variants.
   - For 10 sample pages, verify the `rel=canonical` is absolute, self-referencing on canonical pages, present exactly once, and points to a 200-status URL. Two canonical tags with different targets = Google ignores both.
   - Check for canonical/signal conflicts: page A canonicals to B, but the sitemap lists A, or internal links overwhelmingly point to A. Signals must agree.
   - Search `site:staging.example.com` and `site:example.com inurl:?` for index bloat evidence.

8. **Trace redirects and status-code hygiene.**
   - Every redirect should be a single 301 hop. Flag chains ≥3 hops (each hop leaks crawl budget and delays users; Googlebot stops following at ~10) and any loops.
   - Flag 302s used for permanent moves — they work eventually but delay canonical consolidation; use 301.
   - After migrations, sample 20 old URLs from the previous structure: each must 301 to its closest new equivalent, not blanket-redirect to the homepage (Google treats mass homepage redirects as soft 404s).
   - Check internal links that point at redirecting URLs — update them to link to the final destination directly.
   - Verify 404s return actual 404/410 status, not a 200 "not found" page (soft 404).

9. **Validate hreflang and structured data** (skip hreflang if single-locale).
   - Hreflang: codes must be ISO 639-1 language + optional ISO 3166-1 Alpha-2 region (`en-GB` valid; `en-UK` invalid). Every pair must be **reciprocal** — if A references B, B must reference A, or both are ignored. Every page must include a self-referencing hreflang and an `x-default` for the fallback. Hreflang URLs must be absolute, 200-status, and indexable.
   - Structured data: extract JSON-LD from key templates. Verify the type matches the page (Product with price/availability on product pages, Article on posts, FAQPage only where FAQs are visible on the page). Check required properties per type — missing `offers` on Product or `datePublished` on Article kills rich-result eligibility. Flag markup describing content not visible on the page (spam risk, manual action territory).

10. **Compile the prioritized fix list.** Score every finding with ICE-style triage:
    - **P0 — Blockers** (fix this week): sitewide noindex, robots.txt blocking the site, canonical host not resolving, server errors on key templates, migration redirects missing.
    - **P1 — High impact** (this month): index bloat >30% of index, CWV "Poor" on top templates, redirect chains on money pages, sitemap full of dead URLs.
    - **P2 — Meaningful** (this quarter): click depth issues, orphan pages, hreflang errors, structured data warnings.
    - **P3 — Hygiene**: 302→301 cleanups, internal links to redirects, minor markup gaps.
    - Decision rule: anything preventing crawling or indexing of revenue pages outranks anything about speed; speed outranks markup. A P2 that takes 15 minutes can jump the queue — note effort next to impact.

11. **Deliver the report** in the output format below, walk the user through the top 5 fixes verbally, and offer to draft developer tickets for each P0/P1 item.

## Frameworks & templates

### Template 1: Prioritized fix list (the core deliverable table)

```
| # | Priority | Finding                                    | Evidence                              | Impact | Effort | Owner   | Fix                                              |
|---|----------|--------------------------------------------|---------------------------------------|--------|--------|---------|--------------------------------------------------|
| 1 | P0       | robots.txt blocks /products/               | example.com/robots.txt line 4         | High   | 15 min | Dev     | Remove "Disallow: /products/"                    |
| 2 | P0       | 4,200 old URLs 404 after migration         | GSC Pages report, crawl export        | High   | 2 days | Dev     | 301-map old URLs to nearest new equivalents      |
| 3 | P1       | LCP 4.8s mobile on product template        | PSI field data, /products/blue-widget | High   | 3 days | Dev     | Convert hero to WebP ≤150KB, preload, cut 2 render-blocking scripts |
| 4 | P1       | 38k parameter URLs indexed (?sort, ?color) | site:example.com inurl:? = 38,400     | Med    | 1 day  | Dev     | Canonical to base URL + disallow filter combos   |
| 5 | P2       | Category pages at click depth 5            | Crawl export, depth column            | Med    | 1 wk   | Dev+SEO | Add category links to main nav and footer        |
```

### Template 2: Audit report skeleton

```
# Technical SEO Audit — [domain] — [date]

## Executive summary
[3-5 sentences: overall health, the 2-3 findings that matter most, expected outcome of fixing them.]
Health snapshot: Crawlability [OK/Issues/Critical] · Indexation [..] · Architecture [..] · CWV [..] · Duplication [..] · Redirects [..] · Hreflang [../N/A] · Structured data [..]

## Key numbers
- Pages in sitemap: [N] · Pages indexed: [N] ([X]% of sitemap)
- CWV (mobile, field): LCP [X]s · INP [X]ms · CLS [X]
- Redirect chains found: [N] · Orphan pages: [N] · Parameter URLs indexed: [N]

## Findings by section
[One subsection per audit area: What we checked → What we found (with evidence URLs) → Why it matters → Fix]

## Prioritized fix list
[Template 1 table]

## What we could not verify
[Missing inputs — e.g., no GSC access — and what they'd add.]

## Recheck plan
[P0 items: verify within 1 week of deploy. Indexation changes: expect movement in 2-6 weeks. CWV field data: 28-day rolling window, so recheck 4+ weeks post-fix.]
```

### Worked example: hreflang cluster done right (3 locales)

Every page in the cluster carries the identical block, including itself:

```html
<link rel="alternate" hreflang="en-us" href="https://example.com/us/widgets/" />
<link rel="alternate" hreflang="en-gb" href="https://example.com/uk/widgets/" />
<link rel="alternate" hreflang="de-de" href="https://example.com/de/widgets/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/us/widgets/" />
```

Common failure: the UK page omits the US line → the pair is non-reciprocal → Google ignores the whole relationship and may show the US page to UK users.

### Worked example: sane robots.txt for an ecommerce site

```
User-agent: *
Disallow: /cart/
Disallow: /checkout/
Disallow: /search?
Disallow: /*?sort=
Disallow: /*?sessionid=
Allow: /

Sitemap: https://www.example.com/sitemap_index.xml
```

Note what it does NOT do: it doesn't block CSS/JS, doesn't block product or category paths, and doesn't try to noindex via robots.txt (robots.txt controls crawling, not indexing — a blocked URL can still be indexed from external links, just without content).

### Framework: indexation decision tree

For any "why isn't this page indexed?" question, check in this exact order — each step gates the next:
1. Does the URL return 200? (3xx/4xx/5xx → fix the response first)
2. Is it blocked by robots.txt? (If yes, Google never sees steps 3-6)
3. Does it have noindex (meta tag or X-Robots-Tag header)?
4. Does its canonical point elsewhere? (Then the canonical target is what should be indexed)
5. Does it have internal links pointing to it? (Orphans get discovered late or never)
6. Is the content substantial and unique? (If all above pass, it's a quality call → on-page-seo)

## Output format

Deliver a single audit report following Template 2, containing:
1. **Executive summary** — max 5 sentences plus the 8-area health snapshot line.
2. **Key numbers block** — the quantified state of the site.
3. **Findings by section** — every audited area, including passing areas (one line: "Checked, no issues"). Every finding cites at least one concrete URL or data point as evidence.
4. **Prioritized fix list** — Template 1 table, sorted P0→P3, every row with impact, effort, owner, and a fix specific enough to become a dev ticket verbatim.
5. **"Could not verify" section** — honest gaps from missing access.
6. **Recheck plan** — when to re-test each fix category.

Length guide: 2–5 pages equivalent for a small site (<1,000 URLs); up to 8 for large ecommerce. If the user asked a narrow question ("check my hreflang"), deliver only that section plus a mini fix list — don't force the full report.

## Quality checklist

- [ ] Canonical host confirmed and all 4 protocol/subdomain variants tested for single-hop 301s
- [ ] robots.txt fetched and quoted directly — findings reference actual lines, not assumptions
- [ ] Sitemap URLs spot-checked: at least 10 verified as 200 + indexable + self-canonical
- [ ] Indexed-vs-sitemap ratio computed and interpreted (bloat vs gap)
- [ ] Every indexation finding mapped to a specific GSC status category or live-test evidence
- [ ] CWV verdicts based on field data at the 75th percentile, not lab scores alone; mobile checked first
- [ ] All three CWV metrics reported with numbers against the 2.5s / 200ms / 0.10 thresholds
- [ ] Canonical tags checked on ≥10 pages spanning every major template
- [ ] Redirect findings state hop counts and final status codes, not just "redirect issue"
- [ ] Hreflang checked for reciprocity, valid ISO codes, self-reference, and x-default (or marked N/A)
- [ ] Structured data findings distinguish errors (blocks rich results) from warnings (optional properties)
- [ ] Every fix-list row has priority, evidence, effort estimate, and an owner
- [ ] No finding without evidence; no evidence without a URL or data source named
- [ ] Report states what could not be verified and why

## Common mistakes

- **Auditing with lab data only.** Lighthouse scores are lab simulations; Google ranks on CrUX field data at the 75th percentile. A site can score 95 in Lighthouse and still fail CWV for real users on mid-range Android. Always report field data when it exists.
- **Recommending noindex via robots.txt.** Robots.txt blocks crawling, not indexing. Blocking a page Google already knows about leaves it indexed with a "no information available" snippet. To deindex: allow crawling, add noindex, wait for recrawl, then optionally block.
- **Treating "Crawled — currently not indexed" as a technical bug.** It's usually a quality signal. Piling on more technical fixes won't move it; content consolidation will. Route it to on-page-seo instead of chasing phantom crawl issues.
- **Mass-redirecting old URLs to the homepage after a migration.** Google treats irrelevant redirects as soft 404s and drops the equity. Map each URL to its closest equivalent; only redirect to a parent category when no equivalent exists.
- **Canonical tags as a duplication cure-all.** Canonicals are hints, not directives. If internal links, sitemaps, and hreflang all point at the "duplicate," Google overrides your canonical. Fix the conflicting signals, don't just add the tag.
- **Fixing everything at P0 urgency.** A fix list where all 40 items are "critical" gets zero developer buy-in. Be ruthless: most audits have 2–5 genuine P0s. Effort estimates buy credibility.
- **Ignoring the 28-day CWV window.** Field data is a rolling 28-day aggregate. Declaring a speed fix "didn't work" one week after deploy is premature; schedule the recheck 4+ weeks out.
- **Auditing desktop when the site's traffic is 70% mobile.** Google indexes mobile-first. Every check — rendering, CWV, content parity — runs on the mobile version first; a desktop-only audit can miss the entire problem.
- **Skipping the "no issues" sections in the report.** If you don't state that robots.txt was checked and passed, the client assumes you didn't check. Passing checks are findings too — one line each.
