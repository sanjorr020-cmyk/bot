---
name: website-copywriting
description: "Writes conversion-focused website copy page by page: homepage narrative (hero, problem, solution, proof, CTA), product and feature pages built as benefit-proof blocks, pricing page psychology, about pages that sell, CTAs and microcopy, and a consistent voice across the whole site. Use when the user asks to write or rewrite website copy, draft a homepage, fix a hero headline, write a product or feature page, structure a pricing page, write an about page, improve button or CTA copy, tighten microcopy, or make tone consistent across pages."
---

# Website Copywriting

Write website copy that moves a visitor from "what is this?" to "I want this" in one scroll, page by page. Every page has one job and one primary action; this skill produces the words that get that action taken. It covers the five core page types (homepage, product/feature, pricing, about, and the CTAs/microcopy that stitch them together) plus a voice system so the site reads as one author, not five.

## When to use this skill

Use it when the user asks to:
- Write or rewrite a homepage, or fix a hero section that isn't converting
- Draft product, feature, solutions, or use-case pages
- Structure or word a pricing page
- Write an about/company page
- Improve CTAs, button labels, form microcopy, error/empty states, or nav labels
- Audit a site for message clarity or voice consistency

Do NOT use it for:
- Standalone campaign landing pages and CRO experiments on them — use **landing-page-cro**
- Defining positioning, value props, or voice from scratch — use **brand-messaging** first, then return here to apply it
- Keyword targeting, title tags, meta descriptions, heading optimization for search — use **on-page-seo** and **seo-content-briefs** (this skill writes for humans first; layer SEO afterward)
- Blog posts and articles — use **blog-writing**
- Ad headlines and ad variants — use **ad-copywriting**
- Full case study pages — use **case-studies** (this skill only excerpts proof from them)
- Deciding what to charge or how to tier — use **pricing-strategy** (this skill words the page for a pricing model that already exists)

## Inputs to gather

Ask for these before writing. When the user doesn't know, use the listed default and flag the assumption in the deliverable.

1. **Product and one-sentence job**: What does it do, for whom, and what happens if they don't buy? Default: derive from any existing site/materials the user shares and confirm before drafting.
2. **Primary audience and awareness level**: Are visitors problem-aware, solution-aware, or product-aware? Default: solution-aware (they know tools like this exist and are comparing).
3. **Differentiator**: The one claim competitors can't honestly copy. Default: pick the most specific capability the user mentions and mark it "verify vs. competitors" (or point them to **competitor-analysis**).
4. **Proof assets**: Testimonials, logos, metrics, case studies, review scores, security badges. Default: write `[PROOF: description of what to insert]` slots rather than inventing proof — never fabricate numbers, names, or quotes.
5. **Conversion goal per page**: Demo, trial, purchase, waitlist, contact? Default: one primary CTA sitewide (the highest-intent action the product supports self-serve) plus one low-commitment secondary.
6. **Voice**: 3-4 adjectives plus a "we sound like X, not Y" contrast. Default: plain, confident, specific, warm; contractions on; no exclamation points in body copy.
7. **Pages in scope**: Which pages, and any required lengths/sections. Default: homepage first — it sets the message architecture every other page inherits.
8. **Pricing model** (if pricing page in scope): tiers, prices, billing periods, trial/guarantee terms. Never invent prices.
9. **Existing constraints**: Legal/compliance language, banned words, design system limits (e.g., hero headline must fit 2 lines at 40px).

## Process

1. **Write the message architecture before any page.** In 6 lines: audience, problem in their words, product category, differentiator, top 3 benefits (each mapped to a feature), primary CTA. Every page draws from this; it prevents the homepage and pricing page from telling different stories. Get user sign-off on these 6 lines before drafting — a wrong architecture wastes every downstream page.

2. **Draft the homepage using the narrative formula** (see Frameworks): Hero → Problem → Solution (3 benefit blocks) → Proof → objection handling → final CTA. Write the hero last within this step — it's the summary of everything below it, and it's easier to compress a finished argument than to expand a slogan.

3. **Apply the 5-second test to the hero.** A first-time visitor reading only headline + subhead + button must be able to answer: What is it? Who is it for? What do I do next? If any answer requires scrolling, rewrite. Keep the headline ≤10 words (~60 characters), the subhead 15-25 words, the button 2-5 words.

4. **Draft product/feature pages as benefit-proof blocks.** One page per product or major use case. Each block = benefit headline → 2-3 sentence mechanism ("how it does that") → one piece of proof → screenshot/visual note. 3-6 blocks per page, 500-900 words total. Order blocks by what the target persona cares about most (pull from **customer-personas** if available), not by internal product org chart.

5. **Draft the pricing page** using the anatomy in Frameworks: clarity header, 3-4 tiers with anchoring, per-tier "who it's for" line, verb-led feature lists, FAQ that handles the top 5 money objections. If the user has more than 4 tiers, recommend collapsing or splitting by audience — comparison paralysis measurably suppresses conversion.

6. **Draft the about page as a sales page in disguise.** Structure: the problem you saw → why existing options failed → the belief that drove you to build this → proof you can deliver → invitation (CTA). It is a founding argument for why the company exists, told in service of the customer, not a corporate timeline. 300-500 words. End with the same primary CTA as the homepage.

7. **Write CTAs and microcopy as a system.** One primary CTA repeated verbatim sitewide (same words, same styling note). Buttons complete "I want to ___" from the visitor's side ("Start my free trial", not "Submit"). Add a friction-reducer line under every primary button (e.g., "Free 14-day trial · No credit card"). Write the supporting microcopy: form labels, placeholder text, error messages (say what happened + how to fix it), empty states, confirmation messages, nav labels (nouns visitors would search for, not internal jargon like "Solutions Hub").

8. **Run the voice consistency pass across all pages.** Build the voice chart (see Frameworks) and edit every page against it in one sitting: same pronouns (default: "you" for the visitor, "we" sparingly), same contraction policy, same formality, banned words removed, benefit verbs consistent. Read all hero sections aloud back-to-back — they should sound like one person.

9. **Run the edit pass with hard rules.** Cut 20% of the draft's word count. Sentences average ≤18 words; no paragraph over 3 lines on desktop. Readability at Flesch Reading Ease 60+ (grade 6-8) unless the audience is technical buyers, then 50+. Replace every abstraction ("streamline", "empower", "seamless", "robust", "innovative") with the concrete thing it hides. Convert passive to active. Front-load every headline's first 3 words with meaning — visitors scan the left edge (F-pattern) and read only ~20-30% of words on a page.

10. **Deliver with annotations.** Ship copy in the Output format below, including per-section notes on intent, `[PROOF: ...]` slots that need real assets, and 2 alternate hero headlines for testing. If the user wants to test variants scientifically, point them to **ab-testing**; for SEO metadata on these pages, point to **on-page-seo**.

## Frameworks & templates

### Homepage narrative formula (fill-in-the-blank)

```
HERO
H1 (≤10 words): {Outcome the visitor wants} without {pain they expect}
   — or — {Category} for {specific audience} that {differentiator}
Subhead (15-25 words): {Product} helps {audience} {achieve outcome}
   by {mechanism}. {Sharpest proof point or differentiator}.
Primary CTA (2-5 words): {Verb} + {value}  → e.g., "Start free trial"
Friction reducer: {trial length / no credit card / setup time}
Trust strip: [PROOF: 4-6 customer logos or "Rated 4.x on {platform}"]

PROBLEM (2-4 sentences, visitor's words)
"You're still {painful current process}. That means {cost in time/money/risk}.
{Existing alternative} was supposed to fix this, but {why it falls short}."

SOLUTION — 3 benefit blocks, each:
Block headline (≤8 words): {Benefit as outcome}
Body (2-3 sentences): how the product does it — name the feature once
Proof line: [PROOF: metric, quote, or screenshot for this benefit]

PROOF SECTION
1 flagship testimonial (name, title, company, specific result) or
[PROOF: case study excerpt with a number] + secondary logos/ratings

OBJECTION HANDLING (pick top 2-3): security, migration effort,
price, "will my team actually use it" — one short block each

FINAL CTA
Restate the outcome in one line + primary CTA verbatim + friction reducer
```

Worked example (B2B scheduling tool):

> **H1:** Fill your calendar without the back-and-forth.
> **Subhead:** BookLoop lets clients self-schedule from your live availability, so consultants spend zero hours a week on email ping-pong.
> **CTA:** Start free trial — *Free for 14 days · No credit card*
> **Problem:** You're still trading five emails to book one call. Every reschedule costs you an hour and makes you look disorganized to the client who's about to sign.
> **Benefit block:** *Reschedules handle themselves.* When a client moves a meeting, BookLoop offers your next three openings automatically — no email from you. [PROOF: avg. 3.2 hrs/week saved, from onboarding survey]

### Benefit-proof block (product/feature pages)

```
[BENEFIT HEADLINE — outcome, ≤8 words]
[MECHANISM — 2-3 sentences: the feature, how it works, what changes for the user]
[PROOF — one of: customer quote with attribution / metric / mini-scenario]
[VISUAL NOTE — what screenshot or diagram belongs here]
```

Rule of thumb: if you delete the headline and the body still only describes the feature ("Real-time dashboard with 40+ widgets"), it's a feature block, not a benefit block — rewrite until the first line states what the visitor gets ("Know your numbers before your boss asks").

### Pricing page anatomy

```
1. Header: "Simple pricing" claims are filler — instead state the model:
   "Plans for {audience A} to {audience B}. All plans include {core value}."
2. Billing toggle: default to annual, label savings ("Save 20%").
3. Tiers (3-4): each card gets
   - Name (persona-flavored: Starter / Team / Scale, not Bronze/Silver/Gold)
   - Price + unit ("$29 /user /mo, billed annually")
   - One-line "who it's for" ("For solo consultants juggling ≤20 clients")
   - 5-8 features, verb-led ("Send unlimited invoices"), ordered by value
   - CTA per tier (same verb pattern sitewide)
4. Anchoring: highlight the middle/target tier ("Most popular"); the top
   tier exists partly to make the target tier feel reasonable.
5. De-risking row: trial terms, cancel-anytime, guarantee, security badges.
6. FAQ: 5-8 questions, each a disguised objection — "What happens after
   the trial?", "Can I change plans?", "Is my data safe?", "What counts
   as a user?", "Do you offer discounts for nonprofits/annual?"
```

Psychology to apply (word-level, since the model itself is **pricing-strategy**'s job): charm endings ($49 vs $50) for self-serve, round numbers for enterprise; per-unit framing to shrink the number ("$1.60/user/day" only if honest and the math is shown); loss framing in the FAQ ("keep your data for 90 days") over threat framing.

### About page that sells (fill-in-the-blank)

```
H1: {Belief or mission stated as a claim, not "About us"}
1. The moment: "In {year}, we were {doing the audience's job} and kept
   hitting {problem}."
2. The gap: "Everything available either {flaw A} or {flaw B}."
3. The belief: "We think {audience} deserve {standard}. So we built
   {product} to {one-sentence job}."
4. Proof we can deliver: [PROOF: traction number, notable customers,
   team credibility — 2-3 lines max]
5. Invitation: "If you're tired of {problem}, {primary CTA}."
Optional: team photos/bios AFTER the narrative, never instead of it.
```

### CTA and microcopy formulas

- Button = first person value: "Start my trial", "Get the demo", "See plans" — never "Submit", "Learn more" (as primary), or "Click here".
- Friction reducer under primary buttons: time ("2-minute setup"), cost ("Free forever plan"), or risk ("Cancel anytime") — pick the visitor's biggest fear.
- Error message = what happened + how to fix: "That card was declined. Try another card or contact your bank." Never blame the user ("Invalid input").
- Empty state = next action, not apology: "No projects yet. Create your first one — it takes about a minute."
- Form labels: always visible (not placeholder-only); ask only for fields you'll use; explain scary fields inline ("Phone — only if you'd like a call").

### Voice consistency chart (build once, apply to every page)

| Dimension | Choice | Example |
|---|---|---|
| Pronouns | "you" for visitor; "we" only when taking responsibility | "You get X" not "Users receive X" |
| Contractions | On / Off | "You're" vs "You are" |
| Formality | 1-5 scale with a sample sentence | |
| Humor | None / dry / playful — where allowed (microcopy only?) | |
| Banned words | e.g., seamless, leverage, revolutionize, solutions | |
| Signature moves | e.g., short punch sentence to end sections | |

## Output format

Deliver one markdown document per page (or one combined doc with `---` separators), each containing:

1. **Page header**: page name, primary CTA, target visitor + awareness level, target word count.
2. **Copy, section by section**, in page order, with wireframe-style labels (`HERO`, `H1:`, `Subhead:`, `CTA:`, `BLOCK 1:` ...) so a designer can place it without guessing.
3. **`[PROOF: ...]` slots** wherever real assets must be inserted, each describing exactly what's needed ("customer quote mentioning time saved, with name + company").
4. **Alternates**: 2 extra hero headline options per page with a one-line rationale each.
5. **Annotations**: 1-2 sentence intent note per major section (why this order, what objection it handles).
6. Appendix (once per project): the 6-line message architecture and the voice chart.

## Quality checklist

- [ ] Hero passes the 5-second test: what it is, who it's for, what to do next — without scrolling
- [ ] H1 is ≤10 words and specific enough that no competitor could run it unchanged
- [ ] Exactly one primary CTA per page, repeated verbatim; secondary CTA is visually and verbally subordinate
- [ ] Every button label completes "I want to ___" from the visitor's perspective
- [ ] Every benefit claim has proof attached or an explicit `[PROOF: ...]` slot — zero invented metrics, names, or quotes
- [ ] Benefit headlines lead with outcomes; features appear only inside the mechanism sentences
- [ ] Problem section uses the visitor's vocabulary, not the product's (would a customer say this sentence?)
- [ ] Pricing tiers each have a "who it's for" line, and one tier is explicitly highlighted
- [ ] Pricing FAQ answers at least 5 real money objections
- [ ] About page ends with the primary CTA and spends more words on the customer's problem than on the founders
- [ ] Voice chart exists and all pages pass it: same pronouns, contraction policy, no banned words
- [ ] Sentences average ≤18 words; no wall-of-text paragraph over 3 lines; Flesch ≥60 (≥50 for technical audiences)
- [ ] Zero filler abstractions: seamless, robust, innovative, empower, streamline, best-in-class, cutting-edge
- [ ] First 3 words of every headline carry the meaning (survives F-pattern scanning)
- [ ] Nav labels are plain nouns a stranger would understand, not internal branding

## Common mistakes

- **Writing the hero first.** The hero is the compression of the whole argument; drafted first it becomes a vague slogan ("Work smarter"). Draft the body, then compress.
- **"We" disease.** Pages that open every section with "We provide / We offer / Our platform." Flip the camera: count "you" vs "we/our" — you should win at least 2:1.
- **Clever over clear.** A pun headline that needs the subhead to explain it costs the visitor their 5 seconds. Clear wins; clever is a bonus only after clarity is secured.
- **Feature-dump product pages.** Ten features in a grid with icon + noun ("Real-time sync") and no mechanism or proof. Fewer blocks, each with benefit → mechanism → proof, converts better than exhaustive coverage.
- **CTA drift.** "Get started" on the homepage, "Book a demo" on pricing, "Contact sales" on product pages — three different asks fragment intent. One primary action, everywhere, unless page intent genuinely differs (then say why in annotations).
- **Fake social proof.** Inventing "Trusted by 10,000+ teams" or paraphrasing testimonials that don't exist. Always slot real assets; a page with two real quotes beats one with six invented ones — and fabricated claims create legal exposure.
- **Pricing page that hides the price.** "Contact us" on every tier for a self-serve product signals enterprise-only and bounces SMB buyers. If prices truly can't be shown, give an anchor ("Plans from $X").
- **About page as autobiography.** Founding dates, office photos, and a mission statement written for investors. The reader is a customer mid-evaluation; the page must argue why this company will solve *their* problem.
- **Microcopy as afterthought.** Shipping "Submit", "Invalid input", and "Error 400" on a site whose homepage was polished for weeks. Checkout and signup microcopy sits closest to the money — word it with the same care.
- **SEO-first homepage.** Stuffing the H1 with a keyword phrase nobody would say aloud ("Best Cloud-Based Scheduling Software Solution"). Write for the visitor; hand the draft to **on-page-seo** to optimize titles and metas without wrecking the message.
- **One voice per page author.** Different pages written in different sittings (or by different people) without a voice chart — the site reads like a group project. Always run step 8 as a single pass across all pages.
