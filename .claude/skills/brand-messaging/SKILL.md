---
name: brand-messaging
description: "Builds a complete brand messaging system: positioning statement, value proposition hierarchy, messaging house, voice and tone guide with do/don't examples, boilerplates at multiple lengths, and tagline options. Use when the user asks to define brand positioning, write a value proposition, create a messaging framework or messaging house, develop a brand voice or tone-of-voice guide, write a company boilerplate or about-us paragraph, brainstorm taglines or slogans, fix inconsistent copy across channels, or refresh messaging after a pivot or rebrand."
---

# Brand Messaging & Voice

Build the single source of truth a company uses to describe itself: what it is, who it serves, why it wins, and how it sounds. The deliverable is a messaging document that any writer — human or AI — can pick up and produce on-brand copy without asking the founder. Everything downstream (ads, website, sales decks, press releases) should be derivable from this document, so precision here compounds; vagueness here compounds too.

## When to use this skill

Use it when the user wants any of these:
- A positioning statement or "how do we describe ourselves" answer
- A value proposition (or a hierarchy of them for multiple audiences)
- A messaging house / messaging framework / message map
- A brand voice and tone guide, or rules for how the brand writes
- Company boilerplate copy (press footer, about page blurb, directory listings)
- Tagline or slogan exploration
- An audit of why their copy feels inconsistent across channels

Do NOT use it for:
- Writing the actual website pages — hand the finished messaging doc to **website-copywriting**
- Ad headlines and body copy — **ad-copywriting** (it consumes this doc as input)
- Segment definitions and buyer research — **customer-personas** (do that first if personas don't exist)
- Competitive landscape mapping — **competitor-analysis** (this skill only needs the top 2-3 alternatives, not a full teardown)
- Launch narratives and announcement plans — **product-launch** or **go-to-market**
- Press release drafting — **press-releases** (though the boilerplate produced here plugs directly into those)
- Visual identity (logo, color, typography) — out of scope for this library; messaging is verbal identity only

If the user asks for "branding" broadly, clarify: this skill covers the verbal system. Offer to start with positioning since everything else hangs off it.

## Inputs to gather

Ask for these before drafting. Where the user doesn't know, use the default in parentheses and flag the assumption in the deliverable.

1. **Company basics**: name, product/service in one sentence, stage (default: early-stage, pre-established brand), founding year, HQ location (needed for boilerplate).
2. **Primary audience**: who buys and who uses, job titles or life situations. If they have personas from **customer-personas**, use those. (Default: infer the most obvious buyer from the product description and state it explicitly.)
3. **Top 2-3 alternatives**: what buyers use instead — competitors, spreadsheets, agencies, doing nothing. (Default: "doing it manually" plus the category leader.)
4. **Differentiators**: 2-4 things that are true, provable, and hard to copy. Push past features to mechanisms: not "easy to use" but *why* it's easier. (Default: derive candidates from the product description and mark them "unverified — confirm.")
5. **Proof available**: metrics, customer count, notable logos, awards, funding, benchmark results. (Default: none; write pillars so proof slots can be filled later.)
6. **Existing voice signals**: 3 pieces of copy they like (theirs or anyone's) and 3 they hate. This is the fastest way to calibrate voice. (Default: derive voice from audience — e.g., developer tools skew plain and precise; consumer wellness skews warm and encouraging.)
7. **Hard constraints**: banned words, legal/regulatory language rules (common in fintech, health), naming conventions, whether they sentence-case or title-case headlines. (Default: sentence case, no unsubstantiated superlatives.)
8. **Aspiration check**: one brand they'd love to sound like and why. (Default: skip.)

If the user can answer only #1, proceed anyway: draft everything with explicit assumptions and interview-style questions embedded, so the doc doubles as a discovery worksheet.

## Process

1. **Lock positioning first.** Draft 2-3 positioning statement variants using the Moore template (below). Vary the frame of reference — the category you claim changes everything ("CRM for freelancers" vs. "client OS for solo businesses"). Present variants with a one-line rationale each; ask the user to pick or blend. Do not proceed until one is chosen — every later artifact inherits it.
   - Decision point: if the user's differentiators are generic (fast, easy, affordable), stop and dig. Ask "what would break for customers if you disappeared tomorrow?" and "what do customers say in their own words when they refer you?" Generic inputs here produce a generic system.

2. **Build the value proposition hierarchy.** One umbrella value proposition (the single sentence the CEO gives), then exactly 3 supporting pillars (2 is thin, 4+ dilutes recall). Each pillar gets: a 3-6 word headline, a 1-2 sentence explanation, and 2-3 proof points (stat, feature-as-evidence, quote, or named customer). If proof is missing, write the slot as `[Proof needed: e.g., % time saved]` — a visible gap is better than an invented claim.
   - Decision point: multiple distinct audiences (e.g., buyer vs. end user, or two verticals)? Keep one umbrella message but write an audience-specific spin of each pillar — a table with one column per audience. Only build fully separate hierarchies if the audiences buy for genuinely different reasons.

3. **Assemble the messaging house.** Roof = umbrella value prop. Pillars = the 3 from step 2 with proof points. Foundation = brand promise (the commitment behind everything) plus 3-5 reasons to believe. Render it as a diagram-style layout in markdown (template below) so it can be screenshotted into decks.

4. **Define voice, then tone.** Voice is constant; tone flexes by context.
   - Pick 3 voice attributes (never more than 4 — nobody remembers five). For each, write the "X but not Y" guardrail: *Confident but not arrogant. Playful but not silly. Expert but not academic.* The "but not" clause is what makes the guide usable; without it every attribute is unfalsifiable.
   - For each attribute, write one do/don't pair: the same message written on-voice and off-voice, with a one-line note on what changed. Real sentences from the user's actual product, not abstractions.
   - Add a tone-by-context table for at least 4 contexts (e.g., homepage, error message/support, social, legal/billing). Voice attributes stay; the dial settings change.
   - Add mechanics: 6-10 concrete rules (contractions yes/no, sentence case vs. title case, Oxford comma, emoji policy, how to write numbers, banned words list, how the company refers to itself — "we" vs. company name).

5. **Write boilerplates at three lengths.** All in third person, present tense, no marketing adjectives that a lawyer or journalist would delete:
   - **One-liner (~15 words / under 100 characters):** for directories, footers, social bios. Format: `[Company] is a [category] that [core outcome] for [audience].`
   - **Short (~50 words):** one-liner + top differentiator + one proof point. For press release footers and partner pages.
   - **Full (~100 words):** short version + how it works in one sentence + traction/proof + founding facts (year, HQ) + CTA line ("Learn more at [domain]"). Cap at 120 words; journalists cut anything longer anyway.
   - Verify all three tell the same story at different zoom levels — the short must be a strict compression of the full, not a different pitch.

6. **Explore taglines with named methods.** Generate 12-20 candidates across at least 4 of these 6 methods, labeled by method:
   - *Benefit distillation*: compress the umbrella value prop to 2-5 words ("Save hours every week" → "Your week, back").
   - *Enemy framing*: name what you're against ("Meetings are broken. We fixed the follow-up.").
   - *Customer transformation*: the after-state ("From inbox to income").
   - *Category claim*: own the category ("The client OS for solo businesses").
   - *Rhythm and device*: alliteration, rhyme, parallelism, twist on an idiom ("Ship happens. Track it.").
   - *Command*: imperative verb ("Stop guessing. Start closing.").
   Then filter to a shortlist of 3-5 using the tagline test (checklist in Frameworks). Keep taglines under 40 characters and 2-6 words; anything longer is a headline, not a tagline. Flag any shortlist candidate that needs a trademark screen before public use.

7. **Stress-test the system.** Rewrite one real artifact (a homepage hero, a LinkedIn post, or a cold email opener) using only the new doc. If you can't produce it without asking new questions, the doc has a hole — fix the doc, not the sample.

8. **Assemble and deliver** in the output format below. End with a "How to use this document" note: which sections feed **website-copywriting**, **ad-copywriting**, **press-releases**, **pitch-deck**, and **social-media-strategy**.

## Frameworks & templates

### Geoffrey Moore positioning statement (fill in the blanks)

```
For [target customer]
who [statement of need or opportunity],
[product name] is a [category / frame of reference]
that [key benefit — the compelling reason to buy].
Unlike [primary alternative],
we [primary differentiation].
```

Worked example (fictional B2B tool):

```
For agency owners with 5-30 clients
who lose billable hours to status-update emails,
Briefly is a client portal
that answers "where are we on this?" before clients ask.
Unlike shared Trello boards or weekly email updates,
we auto-generate client-readable status from the tools your team already uses.
```

This statement is internal scaffolding — never publish it verbatim. It exists so everyone compresses it the same way.

### Messaging house template

```
┌─────────────────────────────────────────────────────────┐
│ ROOF — Umbrella value proposition                       │
│ "Briefly turns your project chaos into client trust."   │
├──────────────────┬──────────────────┬───────────────────┤
│ PILLAR 1         │ PILLAR 2         │ PILLAR 3          │
│ Zero-effort      │ Clients stay     │ Fits the tools    │
│ status updates   │ calm and informed│ you already use   │
│                  │                  │                   │
│ • Auto-pulls from│ • Client portal  │ • 2-min setup,    │
│   Asana/Jira/    │   with plain-    │   no migration    │
│   Slack          │   English status │ • Syncs both ways │
│ • [Proof needed: │ • 41% fewer      │ • Works alongside │
│   hrs saved/wk]  │   status emails  │   existing PM tool│
│                  │   (beta cohort)  │                   │
├──────────────────┴──────────────────┴───────────────────┤
│ FOUNDATION — Brand promise & reasons to believe          │
│ Promise: You'll never be surprised by an unhappy client. │
│ RTB: built by ex-agency operators · SOC 2 in progress ·  │
│ 120 agencies in beta · public roadmap                    │
└─────────────────────────────────────────────────────────┘
```

### Voice attribute with do/don't pair (repeat for each of 3 attributes)

```
Attribute: Straight-talking — but not blunt
We say the hard thing plainly and offer the next step. We never
hide behind hedge words, and we never scold.

DO:    "Your trial ends Friday. Pick a plan now and your client
        portals stay live — takes about a minute."
DON'T: "We regret to inform you that your trial period is
        approaching its expiration date. Failure to select a
        subscription tier may result in service interruption."
Why: The do-version leads with the fact, gives one action, and
respects the reader's time. The don't-version hedges, passive-
voices, and threatens.
```

### Tone-by-context table (starter)

| Context | Dial setting | Example line |
|---|---|---|
| Homepage hero | Confident, vivid, short sentences | "Status updates that write themselves." |
| Error / support | Calm, concrete, apologize once, fix fast | "That upload failed — file's over 50 MB. Compress it or send us a link." |
| Social | Looser, first-person plural, one idea per post | "We rewrote our onboarding email 9 times. Version 9 was 60% shorter." |
| Billing / legal | Plain and precise, zero jokes | "Your card ending 4242 was charged $49 on July 1." |

### Tagline test (score each shortlist candidate pass/fail)

1. Under 40 characters and 6 words or fewer
2. Says or implies a benefit, enemy, or transformation — not just an adjective
3. Couldn't be swapped onto the top competitor's site without anyone noticing
4. Survives being read aloud in a sentence: "We're [Company] — [tagline]."
5. No word requires explanation to the target audience
6. Not already in use by a well-known brand (quick search before shortlisting)

## Output format

Deliver one markdown document titled **"[Company] Messaging & Voice Guide — v1.0, [date]"** with these sections in order:

1. **Positioning statement** — final Moore-format statement, plus the 1-2 rejected variants with one line on why they lost (this prevents relitigating later)
2. **Value proposition hierarchy** — umbrella statement, then 3 pillars each with headline, explanation, proof points (gaps marked `[Proof needed: …]`); audience-spin table if multiple audiences
3. **Messaging house** — the boxed diagram
4. **Voice & tone guide** — 3 attributes with "but not" guardrails and do/don't pairs; tone-by-context table (4+ rows); mechanics rules (6-10); banned words list
5. **Boilerplates** — one-liner, 50-word, 100-word, each with a word count in parentheses
6. **Tagline exploration** — full candidate list grouped by method, shortlist of 3-5 with tagline-test scores, one recommended pick with rationale
7. **Assumptions & open questions** — every default you assumed, every `[Proof needed]` slot, every claim awaiting verification
8. **How to use this document** — 4-6 bullets mapping sections to downstream skills/deliverables

Total document length: typically 700-1,500 words excluding the tagline long-list. If the user asked for only one component (e.g., just a boilerplate), deliver that component plus the positioning statement it depends on — never a component floating free of positioning.

## Quality checklist

- [ ] Positioning statement fills every Moore slot with specifics — no slot contains "businesses," "people," or "solutions" unqualified
- [ ] The "unlike" clause names a real alternative the buyer actually considers (including "do nothing"), not a strawman
- [ ] Exactly 3 value pillars, each with at least 2 proof points or explicitly marked proof gaps
- [ ] No claim in the doc is invented — every stat traces to user input or is flagged `[Proof needed]`
- [ ] Umbrella value prop is one sentence, under 20 words, and contains a benefit (not just a category)
- [ ] Each voice attribute has a "but not" guardrail AND a do/don't pair using product-specific sentences
- [ ] The don't-examples are plausible mistakes a real writer would make, not obvious parodies
- [ ] Tone table covers at least 4 contexts including one negative context (error, outage, or billing)
- [ ] Boilerplates are third person, and the 50-word version is a strict subset of the 100-word story
- [ ] One-liner works standalone in a tweet bio (under 100 characters)
- [ ] 12+ tagline candidates spanning 4+ named methods; shortlist scored against all 6 tagline tests
- [ ] Swap test passed: replacing the company name with its top competitor's makes the umbrella prop and at least 2 pillars false or obviously wrong
- [ ] Stress-test artifact (step 7) was produced and included or referenced
- [ ] Zero instances of "innovative," "seamless," "cutting-edge," "world-class," "revolutionize," or "empower" unless the user explicitly requested them

## Common mistakes

- **Positioning by category leader gravity.** Defaulting to "we're like [leader] but cheaper/easier." That positions the leader, not the client. Cheaper-and-easier is a pillar at best, never a roof.
- **Aspirational voice attributes with no teeth.** "Authentic, innovative, human" describes every brand deck ever written. If the attribute list would survive being pasted into a competitor's guide, it fails. The "but not" clause and do/don't pairs are the fix — never ship attributes without them.
- **Writing the messaging house from features.** Pillars named "Dashboard," "Integrations," "Reporting" is a product spec, not messaging. Pillars are buyer outcomes; features are proof points one level down.
- **Boilerplate bloat.** 100-word boilerplates that spend 40 words on mission-statement poetry before saying what the company does. The first sentence must contain company name, category, and audience — journalists read only that sentence.
- **Tagline-first process.** Users often want to start with the fun part. A tagline chosen before positioning is a lottery ticket; it will fight the strategy later. Do steps 1-2 first, always — tell the user why.
- **One voice, zero tones.** Guides that read beautifully but give a support agent nothing for writing a refund denial. The negative-context row in the tone table is the most-used row in practice; never omit it.
- **Proof laundering.** Turning "our beta users seem to like it" into "trusted by hundreds of teams." Every quantified claim needs a source or a `[Proof needed]` flag; a messaging doc with invented numbers poisons every downstream asset.
- **Multiple umbrella messages "to be safe."** Two roofs means no house. Multi-audience companies get one umbrella and audience-spun pillars; if that's truly impossible, the user has a portfolio-brand problem that positioning tweaks won't solve — say so.
- **Treating v1 as permanent.** Date and version the document, and recommend a review at 6 months or after any pivot, pricing change, or new competitor entry — whichever comes first.

