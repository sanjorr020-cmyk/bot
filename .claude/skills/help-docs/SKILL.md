---
name: help-docs
description: "Writes and organizes customer-facing knowledge base content: how-to guides, troubleshooting articles, FAQs, reference pages, support macros, and doc maintenance plans. Use when the user asks to write a help article, build or restructure a knowledge base, document a feature for customers, create troubleshooting guides, write FAQ pages, draft support saved replies or macros, improve help center findability, audit stale documentation, or reduce support ticket volume with self-service content."
---

# Help Docs & Support Content

Produce knowledge base content that lets customers solve their own problems in under 3 minutes, and give support teams reusable macros that keep replies consistent. Every deliverable is judged by one metric: did the reader complete the task without filing a ticket? Optimize for scannability, exact-match findability, and step-by-step precision — not prose quality.

## When to use this skill

Use for:
- Writing or rewriting individual help center articles (how-to, troubleshooting, FAQ, reference)
- Structuring a knowledge base: categories, article inventory, naming conventions
- Building a support macro / saved-reply library for tools like Zendesk, Intercom, Help Scout, or Freshdesk
- Auditing existing docs for staleness, gaps, and findability problems
- Turning a ticket-volume report into a prioritized list of articles to write

Do NOT use for — hand off instead:
- Internal process documentation for employees → **sop-writing**
- Welcome sequences, activation emails, and first-run product tours → **customer-onboarding**
- Mining tickets/surveys for product insights rather than doc topics → **customer-feedback-analysis**
- SEO-driven top-of-funnel articles targeting search keywords → **blog-writing** or **seo-content-briefs**
- Save offers and outreach to at-risk accounts → **churn-prevention**
- Marketing copy for the product's website → **website-copywriting**

## Inputs to gather

Ask for these before drafting. When the user doesn't know, use the listed default and say you did.

1. **Product and feature context.** What does the product do, and what exactly is the feature/task being documented? Ask for screenshots, UI labels, or a walkthrough of the exact clicks. Never invent button names — if the user can't supply exact UI labels, mark them as `[verify: button label]` in the draft and list them at the end.
2. **Audience skill level.** Admin vs. end user, technical vs. non-technical. Default: non-technical end user; write to an 8th-grade reading level (Hemingway score ≤ 8).
3. **Top ticket drivers.** The 5–10 most common questions or issues, ideally with monthly volumes. Default if unavailable: draft the article for the task the user names, and recommend pulling a 90-day ticket report by tag/topic before writing article #2.
4. **Help center platform.** Zendesk Guide, Intercom Articles, HelpDocs, Notion, GitBook, or plain markdown. Default: platform-agnostic markdown with an H2/H3 structure that ports anywhere.
5. **Existing docs.** Links or exports of current articles, to avoid duplicates and match voice. Default: none; establish conventions fresh.
6. **Voice constraints.** Formality, banned words, brand terms (check **brand-messaging** output if the user has it). Default: friendly-neutral, second person ("you"), contractions allowed, no exclamation marks in troubleshooting content.
7. **Localization or compliance needs.** Translated versions, regulated claims, screenshots policy. Default: English only, screenshots described as placement notes (`[Screenshot: Billing page with Upgrade button highlighted]`) since Claude can't capture them.

## Process

1. **Pick the article type first.** Match the user's request to one of the four types using the decision framework below. If the request mixes types (e.g., "how to set up SSO and what to do when it fails"), split it into separate articles and cross-link — one job per article.
2. **Write the title as a search query, not a label.** Draft 3 title options phrased the way a frustrated customer would type them. Rules: lead with the verb or the error ("Connect your Google Calendar", "Fix 'payment declined' errors"), keep to 60 characters or fewer, include the feature's exact product name, never use internal jargon ("Sync Module v2") or clever wording. Pick one with the user.
3. **Outline before drafting.** For how-to articles: prerequisites → numbered steps → expected result → troubleshooting stub → related articles. For troubleshooting: symptom → quick fix → causes ranked by frequency → escalation path. Confirm the outline covers the reader's *actual* end goal (they want the calendar synced, not the OAuth screen explained).
4. **Draft to step-writing conventions.** Apply all of these:
   - One action per numbered step. If a step contains "and then," split it.
   - Start each step with an imperative verb: Click, Select, Enter, Toggle.
   - Bold every UI element exactly as it appears on screen: Click **Settings > Billing**.
   - State the location before the action when navigating: "In the left sidebar, click **Integrations**."
   - After any step whose result isn't obvious, add a result line: "You'll see a green *Connected* badge."
   - Cap procedures at 10 steps. Longer tasks get H3-numbered phases ("Part 1: Create the API key") of ≤ 7 steps each.
   - Put warnings BEFORE the step they apply to, never after: "⚠️ This deletes all data permanently. Click **Delete workspace**."
5. **Add the findability layer.** For each article, write: a 1–2 sentence intro stating who the article is for and what they'll accomplish (this is what search previews show); 5–8 search keywords/synonyms including misspellings and competitor terms customers actually use ("cancel" AND "unsubscribe" AND "stop billing"); and 2–4 related-article links. Intro must answer "am I in the right place?" within 15 words.
6. **Structure the knowledge base (when the task is more than one article).** Use 5–8 top-level categories organized by user goal, not by internal team or product architecture ("Billing & plans", not "Payments Service"). Max 2 levels of nesting. Any category with more than 15 articles gets split. Order articles within a category by frequency of need, not alphabetically. Deliver as a category tree with each article slotted in.
7. **Build the macro library (when requested).** Pull the top 10–20 ticket types. For each, write a saved reply using the macro template below. Every macro that resolves a documented issue must link its help article — the macro answers now, the link prevents the next ticket. Name macros with a `Category :: Specific issue` convention ("Billing :: Refund request — within policy") so agents find them by typing 2–3 characters.
8. **Set up the maintenance cycle.** Deliver a maintenance plan alongside the content: review triggers (every product release touching documented UI; any article with a helpfulness rating under 70% "yes"; any article generating tickets it should prevent), a quarterly audit of the top-50-traffic articles, and an annual full-library sweep archiving anything with < 10 views/quarter. Assign each article an owner and a "last verified" date field.
9. **Verify before delivering.** Run the quality checklist below on every article. List all `[verify: ...]` flags in a block at the top of your response so the user resolves them before publishing.

## Frameworks & templates

### Article-type decision framework

| Reader's mental state | Type | Signature | Length target |
|---|---|---|---|
| "How do I do X?" — task intent | **How-to** | Numbered steps to one outcome | 150–500 words, ≤ 10 steps |
| "X is broken / showing an error" | **Troubleshooting** | Symptom-first, fixes ranked by likelihood | 200–600 words |
| "Quick question about policy/limits" | **FAQ** | One question, 1–3 sentence answer | ≤ 75 words per answer |
| "What does this field/setting mean?" | **Reference** | Tables of settings, limits, plans, API fields | As long as needed; tables over prose |

FAQ pages should hold 8–15 questions max; beyond that, promote clusters into their own how-to or reference articles. If an "FAQ answer" needs numbered steps, it's a how-to wearing a disguise — move it.

### How-to article template

```markdown
# [Verb] [object] [qualifier]           ← e.g., "Connect Slack to your workspace"

[Who this is for + outcome, 1–2 sentences. e.g., "Workspace admins can connect
Slack to get task notifications in any channel. Setup takes about 2 minutes."]

**Before you start**
- [Prerequisite 1 — plan level, role, or prior setup, with link]
- [Prerequisite 2]

## Connect [thing]
1. Go to **[Location]** and click **[Button]**.
2. [One action]. You'll see [expected result].
3. [One action].
   ⚠️ [Warning placed before the risky step, if any.]
4. Click **[Button]** to finish.

You're done when [observable success state, e.g., "the integration shows a
green Active badge"].

## Troubleshooting
- **[Most common error message]** — [1–2 sentence fix, or link to the full
  troubleshooting article].

## Related articles
- [Link 1] · [Link 2] · [Link 3]
```

### Troubleshooting article template

```markdown
# Fix "[exact error message or symptom]"

[1 sentence: what this error means in plain language.]

**Quick fix:** [The one action that resolves 60–80% of cases. Try this first.]

## If that didn't work

### 1. [Most common cause, stated as the cause]
[Why it happens, 1 sentence.]
1. [Step to check/fix]
2. [Step]

### 2. [Second most common cause]
[Same structure. Order causes by real frequency from ticket data, not by
logical elegance.]

## Still stuck?
Contact support at [channel] and include: [the 2–4 details agents always ask
for — account email, error screenshot, browser, timestamp]. This saves a
back-and-forth round trip.
```

### Support macro template + worked example

Every macro has four parts: acknowledge → answer → link → next step. Keep macros under 120 words; agents personalize the first line.

```
Name: Billing :: Refund request — within 30-day policy
---
Hi {{first_name}},

Thanks for reaching out — happy to help with this.

I've processed a refund of {{amount}} to your original payment method. You'll
see it within 5–10 business days depending on your bank.

If you canceled because something wasn't working, I'd love to know what — even
one sentence helps us fix it.

Anything else I can help with?

[Internal note: Refund in Stripe BEFORE sending. If outside the 30-day window,
use "Billing :: Refund request — outside policy" instead.]
```

Macro library starter set (build these 10 first, they cover most B2B SaaS queues): password/login reset, refund within policy, refund outside policy, "how do I cancel", bug acknowledged + escalated, feature request logged, plan/pricing question, data export request, "is it down?" status reply, angry-customer de-escalation handoff.

### Maintenance cycle (the 90-day loop)

- **On every release:** Product/CS syncs release notes against a doc-impact checklist; affected articles updated within 5 business days of ship.
- **Monthly:** Review article helpfulness votes and search terms with zero results. Zero-result searches are your article backlog, pre-prioritized by demand.
- **Quarterly:** Audit top 50 articles by traffic — verify every step against the live UI, refresh screenshots, update "last verified" date.
- **Annually:** Archive articles with < 10 views/quarter (redirect, don't 404). Consolidate near-duplicates.
- **Health benchmarks:** helpfulness rating ≥ 70% "yes"; self-service ratio (article views ÷ tickets created) trending up; a good KB deflects roughly 10–30% of would-be tickets — if the user sees < 5% deflection, findability is usually the problem, not coverage.

## Output format

Deliver in this order, in chat (or as files if the user asks):

1. **Verification flags** — bulleted list of every `[verify: ...]` item needing the user's confirmation (UI labels, policy numbers, plan limits). Omit the section if none.
2. **The article(s)** — full markdown per the templates above, each preceded by a metadata block: `Type:` / `Category:` / `Title (≤60 chars):` / `Search keywords:` / `Related articles:`.
3. **Macro library** (if requested) — each macro with its `Category :: Name`, body, and internal notes.
4. **KB structure** (if requested) — category tree with article titles slotted in, marked ✅ existing / ✍️ to write, ordered by ticket volume.
5. **Maintenance plan** — the 90-day loop customized with the user's release cadence and named owners.

## Quality checklist

Verify every item; fix failures before delivering.

- [ ] Title is ≤ 60 characters and starts with a verb (how-to) or names the exact symptom/error (troubleshooting)
- [ ] Intro states who the article is for and the outcome within the first 2 sentences
- [ ] Every step contains exactly one action and starts with an imperative verb
- [ ] Every UI element is bolded and matches the on-screen label exactly, or carries a `[verify:]` flag
- [ ] No procedure exceeds 10 steps without being split into named parts
- [ ] Warnings appear before their risky step, never after
- [ ] Article states an observable success state ("you're done when...")
- [ ] Prerequisites are listed before step 1, not discovered mid-procedure
- [ ] Reading level is ≤ grade 8; no internal jargon, codenames, or team names
- [ ] Troubleshooting causes are ordered by frequency, with a quick fix at top
- [ ] Every article links 2–4 related articles; every macro links its help article
- [ ] FAQ answers are ≤ 75 words and contain no numbered procedures
- [ ] Search keywords include at least one synonym and one common misspelling
- [ ] All `[verify:]` flags are surfaced in the deliverable's top section

## Common mistakes

- **Documenting the interface instead of the task.** "The Settings page contains six tabs..." helps nobody. Customers arrive with a job ("get invoices emailed to accounting") — write the path to that outcome and mention only the UI it touches.
- **Titles named after features, searched by problems.** An article titled "Workspace Sync Engine" gets zero finds from people typing "calendar not updating." Title with the reader's words; put the feature name in keywords.
- **The 23-step monolith.** Setup guides that chain account creation, configuration, and first use into one procedure. Readers lose their place and abandon. Split into parts of ≤ 7 steps with a checkpoint result after each part.
- **Screenshots as a substitute for written steps.** Screenshots go stale first and break screen readers and Ctrl+F. Text carries the instruction; screenshots confirm it. If the image disappeared, the article must still work.
- **Burying the fix under the explanation.** Troubleshooting articles that open with three paragraphs on why the error occurs. Lead with the quick fix; the curious can read the causes below.
- **Writing "should" steps from memory.** Docs drafted from how the author *thinks* the product works. One wrong button name destroys trust in the whole knowledge base — hence the mandatory `[verify:]` flags for any unconfirmed UI label.
- **Macros that answer without deflecting.** A saved reply that solves the ticket but never links the article guarantees the same ticket next week. Every resolvable macro carries its doc link.
- **Organizing the KB by org chart.** Categories like "Platform Team" or "Core Services" mirror internal structure. Customers think in goals: getting started, billing, integrations, account settings, troubleshooting.
- **One article, three jobs.** Cramming setup, configuration reference, and error fixes into a single page because they share a feature. Each reader intent gets its own article and its own searchable title; cross-links do the joining.
- **Publish-and-forget.** A KB with no owner, no "last verified" dates, and no release-triggered review decays to untrustworthy in 2–3 release cycles — at which point customers stop checking it and ticket volume climbs back. The maintenance plan is part of the deliverable, not an optional extra.
