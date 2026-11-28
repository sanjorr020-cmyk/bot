---
name: press-releases
description: "Writes newsroom-ready press releases: applies a newsworthiness test before drafting, structures the release in inverted pyramid form, crafts headlines and ledes, writes executive quotes that sound human, builds boilerplate, and advises on distribution timing and embargoes. Use when the user says things like: write a press release, announce our funding round, PR for our product launch, we're announcing a partnership/acquisition/new hire, draft a media announcement, is this newsworthy, review my press release, what's an embargo, when should we send this to press, or write our company boilerplate."
---

# Press Releases

This skill produces press releases that a journalist could publish with minimal editing: factual, front-loaded, AP-style, and free of marketing fluff. It covers the full workflow — deciding whether the story deserves a release at all, structuring it, writing quotes executives will actually approve, and getting the distribution mechanics (timing, embargo, wire vs. direct pitch) right. The output standard is a working reporter's, not a marketer's.

## When to use this skill

Use this skill when the user needs to:
- Draft a press release for a launch, funding round, partnership, acquisition, executive hire, award, milestone, research finding, or event
- Evaluate whether an announcement is newsworthy enough to warrant a release
- Rewrite or critique an existing press release draft
- Write or refresh company boilerplate
- Decide on embargo terms, release timing, or distribution channel (wire service vs. direct outreach vs. newsroom post)

Do NOT use this skill for:
- Pitching journalists one-to-one, building media lists, or writing pitch emails — use **media-outreach** (a release is the asset; the pitch is a different craft)
- Announcement blog posts or "launch day" content in the company's own voice — use **blog-writing** or **product-launch**
- Positioning and message hierarchy decisions — use **brand-messaging** (this skill consumes those decisions, it doesn't make them)
- Customer success stories — use **case-studies**
- Turning the release into social posts, newsletter blurbs, etc. — use **content-repurposing**

## Inputs to gather

Ask the user for these before drafting. Where they don't know, apply the default.

1. **What is being announced, in one sentence?** If they can't state it in one sentence, help them find it before anything else — that sentence becomes the lede.
2. **Why now?** The time peg (launch date, funding close, report publication, event). Default: assume "FOR IMMEDIATE RELEASE" dated the day they plan to send.
3. **The hard numbers.** Funding amount, customer count, growth percentage, price, headcount, market size — whatever quantifies the news. Push for at least one real number; a release with zero numbers is a red flag (see newsworthiness test).
4. **Who is quoted?** Names, exact titles, and — critically — what each person uniquely knows or believes. Default: one internal executive (CEO or product lead) plus one external voice (investor, customer, or partner) if available.
5. **Company facts for boilerplate:** founding year, HQ city, what the company does in plain words, notable traction, website. Default: draft boilerplate from whatever they give and flag gaps.
6. **Media contact:** name, title, email, phone. Default: leave a clearly labeled contact block for them to fill — never invent contact details.
7. **Distribution intent:** wire service, direct pitch under embargo, or just posting to the newsroom page? Default: assume direct pitch + newsroom post (right call for most companies under ~200 employees; wires cost $350–$1,200+ per release and rarely earn coverage on their own).
8. **Any constraints:** legal/regulatory review (required for public companies — Reg FD), partner approval on quotes, banned phrases.

Never fabricate facts, numbers, quotes-as-approved, or contact details. Mark anything unconfirmed with `[CONFIRM: ...]`.

## Process

1. **Run the newsworthiness test first.** Score the announcement against the five news values in the Frameworks section. If it scores 0–1, tell the user directly: this is not a press release — recommend a blog post (**blog-writing**), a customer email, or a LinkedIn post instead, and offer to help reframe (add data, tie to a trend, bundle with a bigger milestone) so it clears the bar. Do not write a release for a non-story; it burns journalist goodwill.

2. **Identify the single headline fact.** Complete this sentence: "The news is that ______." One clause, one verb, at least one specific. If the user offers two stories (e.g., funding + product launch), pick the stronger as the headline and demote the other to paragraph three — or recommend two releases spaced 2+ weeks apart.

3. **Write the headline.** Target 60–90 characters (wires truncate around 100–110; email subject lines cut near 60). Present tense, active voice, no company jargon, no exclamation points, and at least one concrete noun or number. Sentence case or title case is fine — pick one and stay consistent. Draft 3 options and show all three with a recommendation.

4. **Write the subheadline (optional but recommended).** One sentence, ~120–160 characters, adding the second-most-important fact the headline couldn't fit (the "so what" or the key number).

5. **Write the lede.** One paragraph, 25–40 words, answering who/what/when/where and the most important why or how. It must stand alone: if a journalist reads only this paragraph, they have the story. Format: `CITY, State — Month Day, Year — [Company], [6–10 word descriptor], today announced [the news], [the significance].`

6. **Build the body in inverted pyramid order.** Each paragraph less essential than the one before, so the release survives being cut from the bottom:
   - **Para 2:** Key details and numbers — the evidence for the lede's claim.
   - **Para 3:** First quote (senior internal voice) — the *why*, opinion and stakes, never facts already stated.
   - **Para 4:** Context — market problem, what changes for customers, how it works. Keep it to 2–4 sentences.
   - **Para 5:** Second quote (customer, investor, or partner) — outside validation.
   - **Para 6:** Availability/next steps — pricing, dates, where to learn more, event details.
   Body paragraphs: 2–4 sentences each. Whole release: 400–600 words (one page). Over 700 words, cut.

7. **Write quotes people would actually say.** Apply the quote test in Frameworks. Draft quotes *for* the named speaker to approve — say so to the user ("send these to [name] for sign-off; they may edit"). One quote per speaker, 1–3 sentences, 20–50 words.

8. **Write or attach boilerplate.** ~75–120 words, factual, evergreen (no "recently"), ending with the website URL. Use the template below. If the company has existing boilerplate, use it verbatim and flag anything stale.

9. **Assemble the full release** in the Output format below: release line ("FOR IMMEDIATE RELEASE" or embargo line), headline, subhead, dateline+lede, body, boilerplate ("About [Company]"), media contact block, and the `###` end mark.

10. **AP-style pass.** Numbers one–nine spelled out, 10+ as numerals (exceptions: ages, percentages, money always numerals); "$5 million" not "$5M" on first use; percent sign is fine ("25%"); job titles lowercase after a name, capitalized only directly before; no Oxford comma; state names abbreviated AP-style in datelines (Calif., N.Y.); one space after periods; spell out acronyms on first use.

11. **Advise on distribution and embargo.** Decision points:
    - **Timing:** Send Tuesday–Thursday, landing in inboxes 6–9 a.m. in the target journalists' time zone. Avoid Mondays (crowded inboxes), Fridays (news graveyard), holidays, and days with predictable big news (earnings season for your sector, major industry conferences unless you're pegging to one).
    - **Embargo:** Offer one only when the news is strong enough that reporters need prep time (funding rounds, research reports, major launches). Pitch under embargo 3–5 business days before the date; state terms explicitly in the pitch: "Embargoed until Tuesday, March 10, 6:00 a.m. ET." An embargo binds only after the journalist *agrees* — never send unsolicited embargoed material and assume it holds. For exclusives: offer to ONE outlet, give them 24–48 hours to decide, then move on.
    - **Channel:** Wire (PR Newswire, Business Wire, GlobeNewswire; $350–$1,200+ per release) when you need broad syndication, SEC/regulatory disclosure, or investor visibility. Direct pitch (see **media-outreach**) when you want actual stories written. Newsroom page post always, same-day, for SEO and reference.

12. **Run the Quality checklist** below and fix failures before delivering.

## Frameworks & templates

### The newsworthiness test (score before writing)

Give 1 point per news value the announcement genuinely hits:

| News value | Question | Example that passes |
|---|---|---|
| **Timeliness** | Is it happening now, or tied to something happening now? | Funding closed this week; report on this quarter's data |
| **Impact** | Does it materially affect a definable group beyond the company? | Price drop for 50,000 users; 200 jobs created |
| **Novelty** | Is it a first, biggest, only, or genuinely unexpected? | First FDA-cleared device in category |
| **Prominence** | Are recognizable names/brands involved? | Partnership with Shopify; ex-Google VP hired |
| **Conflict/tension** | Does it challenge a norm, competitor, or assumption? | Data contradicting industry consensus |

- **3–5 points:** Strong release; consider embargo/exclusive.
- **2 points:** Viable release; direct pitch to trade/local press, skip the wire.
- **0–1 points:** Not news. Say so. Recommend blog post or social content and how to strengthen the story.

### The executive quote test

A quote earns its place only if it passes all four:
1. **Could ONLY this person say it?** If the quote works with any name attached, rewrite it.
2. **Does it contain opinion, stakes, or intent** — not facts already in the body? Facts go in narration; quotes carry belief.
3. **Would a human say it aloud?** Read it out. If it contains "synergies," "best-in-class," "thrilled to announce," "revolutionize," or three adjectives in a row, rewrite.
4. **Is it 20–50 words?** Longer quotes get cut; journalists lift one sentence anyway.

Weak: *"We are thrilled to announce this exciting partnership, which leverages our best-in-class platform to deliver unparalleled value."*
Strong: *"Half our support tickets were about invoice errors. This integration kills that entire category of problem for our 12,000 customers."*

Quote formulas that work:
- **Stakes:** "Before X, [audience] had to [pain]. Now [concrete change]."
- **Belief:** "We think [contrarian or pointed view]. This [announcement] is our bet on that."
- **Outsider validation (customer/investor):** "We chose/backed [Company] because [specific, checkable reason]."

### Template 1: Universal press release (fill-in-the-blank)

```
FOR IMMEDIATE RELEASE
[or: EMBARGOED UNTIL {Day}, {Month Date, Year}, {Time} {TZ}]

{Headline: 60–90 chars, active verb, one concrete specific}

{Subhead: one sentence with the second-most-important fact or number}

{CITY}, {State abbr.} — {Month Day, Year} — {Company}, {6–10 word
plain-English descriptor}, today announced {the news in one clause},
{one-phrase significance or scale}.

{Para 2: The evidence. 2–4 sentences of specifics — numbers, dates,
names, what exactly is new. No adjectives doing the work of facts.}

"{Quote 1: internal executive. Opinion, stakes, or intent. 20–50
words.}" said {Full Name}, {title} of {Company}.

{Para 3: Context. The problem this addresses, how it works, or what
changes for customers. 2–4 sentences.}

"{Quote 2: customer, investor, or partner. Outside validation with a
checkable specific.}" said {Full Name}, {title} at {Organization}.

{Para 4: Availability. Pricing, launch date, geographies, where to
sign up or learn more.}

About {Company}
{Boilerplate, 75–120 words — see Template 2.}

Media Contact
{Name}
{Title}
{email} | {phone}

###
```

### Template 2: Boilerplate formula

```
{Company} is a {category in plain words} that {what it does for whom,
one sentence}. {One proof point: customers, scale, notable metric, or
flagship achievement}. Founded in {year} and headquartered in {city},
{Company} {is backed by {notable investors} / serves {N} customers in
{N} countries / one more evergreen credibility fact}. Learn more at
{website}.
```

Rules: every claim evergreen and verifiable; no "leading" or "innovative" without a rank or fact to back it; rewrite when any fact goes stale (review quarterly).

### Worked example: funding announcement (condensed)

```
FOR IMMEDIATE RELEASE

Ledgerline Raises $14 Million Series A to Automate Tax Filing
for Marketplace Sellers

Round led by Foundry Group brings total funding to $18.5 million;
company will double engineering headcount by year-end.

AUSTIN, Texas — March 10, 2026 — Ledgerline, a tax automation
platform for e-commerce marketplace sellers, today announced a
$14 million Series A led by Foundry Group, with participation
from existing investors Precursor Ventures and Backstage Capital.

The company will use the funding to expand marketplace coverage
from four platforms to 12 and to double its 22-person engineering
team by December. Ledgerline processed tax filings for more than
31,000 sellers in 2025, up 240% year over year.

"Marketplace sellers file in an average of nine states, and most
are doing it with spreadsheets and prayer," said Dana Okafor,
CEO of Ledgerline. "This round lets us cover every major
marketplace before the 2027 filing season."

[Context para: the compliance problem, 2–3 sentences.]

"Every seller we talked to in diligence named tax compliance as
a top-three operational cost," said Seth Levine, partner at
Foundry Group. "Ledgerline is the first team we've seen treat it
as an automation problem instead of a services problem."

Ledgerline plans are available today starting at $49 per month
at ledgerline.com.

About Ledgerline
[Boilerplate per Template 2.]

Media Contact
[CONFIRM: name, email, phone]

###
```

## Output format

Deliver, in this order:
1. **Newsworthiness verdict** — score out of 5 with one line of reasoning (and, if 0–1, the recommendation to not release plus alternatives).
2. **Three headline options**, character counts shown, with a recommendation.
3. **The complete release** in Template 1 structure: release/embargo line, headline, subhead, dateline + lede, body (400–600 words total), "About" boilerplate, media contact block, `###` end mark. Any unverified item flagged `[CONFIRM: ...]`.
4. **Distribution notes** — recommended send day/time with timezone, embargo terms if applicable (exact wording to use in the pitch), and channel recommendation (wire vs. direct vs. newsroom-only) with a one-line rationale. Point to **media-outreach** for the pitching itself.

## Quality checklist

Verify every item; fix failures before delivering:

1. Announcement scores ≥2 on the newsworthiness test, or the user was explicitly told it doesn't and chose to proceed.
2. Headline is 60–90 characters, active voice, contains a concrete noun or number, no exclamation point.
3. Lede is 25–40 words and answers who, what, when, and the key why/how — readable as a standalone story.
4. Dateline present and formatted: CITY (caps), AP state abbreviation, full date.
5. Inverted pyramid holds: deleting the last two paragraphs before the boilerplate loses no essential fact.
6. Total length 400–600 words (excluding boilerplate and contact block); never over 700.
7. At least one verifiable number appears in the first two paragraphs.
8. Every quote passes all four parts of the quote test; no quote contains a fact stated elsewhere in the release.
9. Zero banned phrases: "thrilled to announce," "excited to share," "best-in-class," "cutting-edge," "revolutionary," "game-changing," "unparalleled," "synergy," "industry-leading" (without a cited rank).
10. Boilerplate is 75–120 words, evergreen, ends with the URL.
11. Media contact block present; real details or `[CONFIRM]` — never invented.
12. `###` end mark on its own line after the contact block.
13. AP style pass done: number rules, "$X million" spelled out, titles lowercased after names, acronyms expanded on first use.
14. No fabricated facts, stats, partner names, or approvals; all `[CONFIRM]` flags surfaced to the user in the delivery message.
15. If an embargo is recommended, exact embargo wording (day, date, time, timezone) is provided.

## Common mistakes

- **Writing the release to please the CEO instead of the journalist.** Symptoms: company name four times in the lede, three internal quotes, zero numbers. The reader is a reporter deciding in 15 seconds whether this is a story.
- **Burying the news in paragraph three.** If the lede opens with company history or mission ("Founded in 2019 with a vision to..."), the release is upside down. The newest, biggest fact goes in sentence one.
- **Quotes that narrate instead of opine.** "We launched X, which does Y" is body copy wearing quotation marks. Quotes exist to say what only that person can say.
- **Two stories in one release.** Funding + launch + new hire in one document means journalists cover none of them. One release, one story.
- **Treating the wire as distribution strategy.** Paying $800 for syndication to 400 sites nobody reads is not coverage. Earned stories come from targeted pitching (**media-outreach**); the wire is for disclosure and SEO residue.
- **Assuming embargoes are self-enforcing.** An embargo is a mutual agreement, not a header. Sending the full story cold with "EMBARGOED" on top gives reporters a scoop they never agreed to sit on.
- **Superlatives without receipts.** "Leading," "fastest-growing," "first" — each needs a source (rank, percentile, dataset) or it gets cut, and it makes everything else in the release less credible.
- **Fake urgency on a non-story.** Releasing "Company updates website" trains journalists to delete the sender's emails. Protecting the sender's credibility is part of the job; say no to non-news.
- **Stale or bloated boilerplate.** 200-word boilerplate citing 2023 metrics signals nobody is minding the shop. Keep it under 120 words and re-verify facts quarterly.
- **Friday afternoon sends.** Unless the goal is to bury the news (that's a different playbook), Friday 4 p.m. is where releases go to die. Tuesday–Thursday, 6–9 a.m. in the journalist's timezone.
- **Forgetting the paper trail details.** Missing dateline, missing contact, missing `###` — small omissions that mark the sender as an amateur before a word is read.
