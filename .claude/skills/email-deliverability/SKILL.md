---
name: email-deliverability
description: "Diagnoses and fixes email deliverability problems and builds sending infrastructure that reliably reaches the inbox: SPF/DKIM/DMARC authentication, domain and IP warm-up schedules, list hygiene and sunset policies, spam-trigger avoidance, bounce and complaint monitoring, and blacklist recovery. Use when the user says emails are landing in spam, asks to set up SPF, DKIM, or DMARC records, needs a domain or IP warm-up plan, wants a list-cleaning or sunset policy, asks why open rates suddenly dropped, needs bounce or complaint rate benchmarks, got listed on a blacklist like Spamhaus, is preparing a new sending domain, or wants a full deliverability audit."
---

# Email Deliverability

Deliverability is the discipline of getting email into the inbox instead of the spam folder or a silent drop. It is governed by three things mailbox providers measure: authentication (can they verify who sent it), reputation (does this sender's history look trustworthy), and engagement (do recipients open, read, and reply, or delete and complain). This skill walks through diagnosing deliverability problems and building infrastructure and policies that keep inbox placement high: DNS authentication records, warm-up plans, hygiene rules, content and behavior fixes, monitoring thresholds, and blacklist recovery.

## When to use this skill

Use this skill when the user:
- Reports emails going to spam, sudden open-rate drops, or Gmail/Outlook rejections and bounces
- Needs SPF, DKIM, DMARC, or BIMI records written, validated, or debugged
- Is launching a new sending domain, subdomain, or dedicated IP and needs a warm-up schedule
- Wants a list hygiene process, sunset policy, or re-engagement rules
- Needs bounce/complaint thresholds and a monitoring plan
- Got listed on a blacklist (Spamhaus, Barracuda, SpamCop, etc.) and needs recovery steps

Do NOT use this skill for:
- Writing marketing email content, campaigns, or automation strategy — use **email-marketing**
- Newsletter content and structure — use **email-newsletters**
- Cold outreach copy, targeting, and sequencing — use **cold-email-outreach** (though its warm-up and domain-separation infrastructure lives here)
- Multi-touch follow-up cadence design — use **follow-up-sequences**
- Reporting on campaign performance beyond deliverability metrics — use **analytics-reporting**

## Inputs to gather

Ask the user for the following. When they don't know, use the default in parentheses and state the assumption in the output.

1. **Sending domain(s) and any subdomains** — e.g., `example.com`, `mail.example.com`. (Default: assume one root domain; recommend a subdomain per mail stream.)
2. **Email service provider / infrastructure** — Google Workspace, Microsoft 365, SendGrid, Mailchimp, Klaviyo, HubSpot, Postmark, Amazon SES, self-hosted, etc. (Default: assume a shared-IP ESP.)
3. **Mail streams and volume** — transactional vs. marketing vs. cold outreach; emails per day/week. (Default: marketing, under 5,000/day.)
4. **Current symptoms** — spam placement, bounces, blocks, blacklisting, or "just setting up." Ask for exact bounce messages or headers if available; they usually name the cause.
5. **Current DNS records** — if the user can run commands, have them run `dig TXT example.com +short`, `dig TXT _dmarc.example.com +short`, and `dig TXT selector._domainkey.example.com +short` (get the selector from the ESP). If you have shell access, run these yourself.
6. **List source and age** — opted-in, purchased, scraped, or dormant; when it was last mailed. (Default: opted-in but assume 10–20% decay per year of dormancy.)
7. **Engagement baseline** — open rate, click rate, bounce rate, complaint rate if known. (Defaults if unknown: treat as unmeasured and set up Google Postmaster Tools first.)
8. **IP type** — shared or dedicated. (Default: shared. Dedicated IPs only make sense above ~100,000 emails/month sustained.)

## Process

Follow the branch that matches the situation; for a full audit, run all five phases in order.

### Phase 1 — Authentication audit and setup

1. Check SPF: look up the TXT record on the root of the sending domain (the domain in the `Return-Path`/`MAIL FROM`, which may differ from the visible From). Verify:
   - Exactly one SPF record exists (two SPF records = permanent failure).
   - Total DNS lookups ≤ 10 (`include:`, `a`, `mx`, `redirect` each count; exceeding 10 returns `permerror`). Flatten or remove unused includes if over.
   - It ends in `~all` (softfail) or `-all` (hardfail) — never `+all`.
2. Check DKIM: confirm a 1024-bit minimum, 2048-bit preferred key is published at `selector._domainkey.domain`. Every ESP must sign with the user's domain, not the ESP's default (e.g., not `via sendgrid.net`). Recommend rotating keys every 6–12 months.
3. Check DMARC: a TXT record at `_dmarc.domain`. If missing, create one at `p=none` with aggregate reporting (`rua=`) so data collection starts immediately. Plan the enforcement ramp: `p=none` (2–4 weeks of report review) → `p=quarantine; pct=25` → `pct=100` → `p=reject`. Do not jump to `p=reject` on day one unless the domain sends no legitimate mail from unlisted sources.
4. Verify alignment: DMARC passes only if SPF or DKIM passes AND the passing domain aligns with the visible From domain. Misaligned ESP defaults are the most common silent failure.
5. Check compliance with Gmail/Yahoo bulk-sender rules (enforced since Feb 2024, mandatory for 5,000+ msgs/day to Gmail, best practice for everyone): SPF and DKIM both pass, DMARC published, one-click unsubscribe headers (`List-Unsubscribe` + `List-Unsubscribe-Post: List-Unsubscribe=One-Click`, RFC 8058), unsubscribe honored within 48 hours, and spam complaint rate kept below 0.3% with a target under 0.1%.
6. Decision point — mail stream separation: if the user sends more than one stream, recommend subdomains so reputations don't cross-contaminate: `mail.domain.com` (marketing), `notify.domain.com` or `t.domain.com` (transactional), and a **separate lookalike domain** (e.g., `trydomain.com`) for cold outreach — never cold-email from the primary domain. Hand copy/sequencing questions to **cold-email-outreach**.

### Phase 2 — Warm-up plan (new domain, new IP, or long-dormant sender)

7. Determine what needs warming: a brand-new domain needs 2–4 weeks minimum before real volume (mailbox providers distrust domains younger than ~30 days); a new dedicated IP needs 4–8 weeks to reach six-figure daily volume; a dormant domain (6+ months silent) needs a shortened 2-week re-warm.
8. Build the schedule using the template in Frameworks below. Rules that govern any schedule:
   - Start at 20–50 emails/day to the **most engaged** recipients (recent openers/clickers, or colleagues/known contacts for cold domains).
   - Grow volume no faster than 2x every 2–3 days; slower (1.5x) for cold-outreach domains.
   - Hold or step back one level if bounce rate exceeds 3% or complaints exceed 0.1% on any day.
   - Spread sends across the day; a single burst looks bot-like. Keep per-provider ramp in mind — Gmail, Outlook, and Yahoo each track you separately, so keep the audience mix consistent.
9. During warm-up, prioritize engagement signals: send content likely to get opens and replies (replies are the strongest positive signal). For cold-outreach domains, target 30–50/day per mailbox as the permanent ceiling, not just the warm-up cap.

### Phase 3 — List hygiene and sunset policy

10. Audit list acquisition: purchased or scraped lists are a deliverability emergency, not a marketing channel — they contain spam traps (pristine traps never opted in anywhere; recycled traps are abandoned addresses providers reactivated). Advise removal or, minimum, verification before any send.
11. Set intake hygiene: use double opt-in (or at least confirmed opt-in with immediate welcome email), validate syntax at capture, and run new lists through a verification service (ZeroBounce, NeverBounce, Kickbox, Emailable) — anything older than 6 months or of unknown origin gets verified before the first send.
12. Define the sunset policy (adapt the template below): recipients with zero opens/clicks in 90 days (ecommerce/high-frequency) or 180 days (B2B/monthly senders) enter a 2–3 email re-engagement series; non-responders are suppressed, not deleted (suppression prevents accidental re-import). Note: Apple Mail Privacy Protection inflates opens, so prefer clicks + site visits + purchases as engagement signals where tracked.
13. Set removal automation: hard bounces suppressed after 1 occurrence, soft bounces after 3–5 consecutive occurrences, complainers suppressed instantly and permanently (requires a feedback loop — confirm the ESP has FBLs registered with major providers; most do by default).

### Phase 4 — Content and sending-behavior review

14. Review content against spam heuristics — filters today are engagement-driven Bayesian systems, not keyword blocklists, but these still matter at the margin:
    - Text-to-image balance: at least 60% text by area; never a single-image email.
    - No link shorteners (bit.ly etc.), no mismatched link text vs. destination, all links on the same domain family where possible.
    - Avoid ALL-CAPS subject lines, 3+ exclamation marks, and heavy "free/act now/guarantee" density — one instance is fine, clusters are not.
    - Include a plain-text part (multipart/alternative), a physical mailing address, and a visible unsubscribe link (legal requirements under CAN-SPAM/GDPR/CASL, and filters check for them).
    - Keep HTML under ~100KB (Gmail clips at 102KB, which hides the unsubscribe link and hurts engagement).
15. Review sending behavior: consistent volume (a 10x spike from baseline triggers throttling), consistent cadence, honoring frequency expectations set at signup. If a big send is coming (e.g., Black Friday), ramp volume 25–50% per send over the preceding 2 weeks.
16. Run pre-send tests: seed-test with GlockApps, Litmus, or Inbox Insight equivalents; run one message through mail-tester.com and resolve anything below 9/10; verify rendering of the unsubscribe link on mobile.

### Phase 5 — Monitoring and incident response

17. Stand up monitoring: Google Postmaster Tools (domain + spam rate + reputation dashboards; requires DNS verification), Microsoft SNDS if on dedicated IPs, a DMARC report processor (dmarcian, Postmark's free DMARC digest, EasyDMARC), and a weekly MXToolbox blacklist scan. Set the alert thresholds from the table in Frameworks.
18. Blacklist incident response, in order:
    a. Identify the listing: run the domain and sending IPs through MXToolbox's blacklist check; note WHICH list (Spamhaus SBL/XBL/DBL, Barracuda, SpamCop, SORBS, etc.) — impact varies wildly. Spamhaus affects most of the world's mail; SORBS or UCEPROTECT Level 3 often affects almost nothing and may not be worth chasing.
    b. Find and stop the cause before requesting delisting: compromised account or form abuse, purchased list, spam-trap hits, or a volume spike. Delisting without fixing the cause leads to relisting, and repeat listings are much harder to clear.
    c. Request removal via the list's own process (each major list has a self-service lookup and delisting form). Use the delisting request template below where a human reviews requests. Spamhaus and Barracuda typically process in 24–72 hours; SpamCop auto-expires in 24 hours without new reports.
    d. If on a shared ESP IP, escalate to the ESP — the listing is theirs to fix, but the user's account may be the cause.
    e. Post-recovery: re-warm at ~50% of previous volume to engaged-only segments for 1–2 weeks.
19. Decision point — Gmail-specific spam placement with clean blacklists and passing auth: this is an engagement/reputation problem, not infrastructure. Cut send volume to the most-engaged 30–50% of the list for 3–4 weeks, fix content, and rebuild reputation; expanding volume before Postmaster domain reputation returns to Medium/High restarts the spiral.

## Frameworks & templates

### Template 1 — DNS authentication records (fill in the blanks)

```
# SPF — one TXT record on the sending domain root
Host:  @   (or the subdomain, e.g., mail)
Type:  TXT
Value: v=spf1 include:{ESP_SPF_INCLUDE} include:{SECOND_ESP_IF_ANY} ~all

# Worked example — Google Workspace + SendGrid:
v=spf1 include:_spf.google.com include:sendgrid.net ~all

# DKIM — provided by the ESP; publish at the selector they give you
Host:  {selector}._domainkey        e.g., s1._domainkey
Type:  CNAME or TXT (per ESP instructions)
Value: {ESP-provided value, 2048-bit key preferred}

# DMARC — start in monitor mode, ratchet up
Host:  _dmarc
Type:  TXT
Value: v=DMARC1; p=none; rua=mailto:dmarc-reports@{yourdomain.com}; fo=1; adkim=r; aspf=r

# Enforcement ramp (change only the policy portion):
Week 0–4:  p=none                      # collect reports, fix unaligned senders
Week 4–6:  p=quarantine; pct=25
Week 6–8:  p=quarantine; pct=100
Week 8+:   p=reject                    # only when reports show ~100% alignment
```

### Template 2 — 4-week dedicated IP / new domain warm-up schedule

Daily caps; send only to the most-engaged segment available. Hold at the current level for 2 extra days if bounce >3% or complaints >0.1%.

| Day | Marketing stream (per day) | Cold outreach domain (per mailbox/day) |
|-----|---------------------------|----------------------------------------|
| 1–2   | 50      | 10  |
| 3–4   | 100     | 15  |
| 5–7   | 200     | 20  |
| 8–10  | 500     | 25  |
| 11–13 | 1,000   | 30  |
| 14–17 | 2,500   | 35  |
| 18–21 | 5,000   | 40  |
| 22–25 | 10,000  | 45  |
| 26–28 | 20,000  | 50 (permanent ceiling) |
| 29+   | +50–100%/week toward target volume | hold at 30–50 |

For volumes above ~50,000/day, continue doubling weekly and split ramps per mailbox provider. For a re-warm after 6+ months dormant, run days 1–14 only, starting at day 5 levels.

### Template 3 — Sunset policy (fill-in)

```
SUNSET POLICY — {Company}
Engagement window: {90|180} days without an open, click, site visit, or purchase
Signals counted: clicks, conversions, site sessions (opens de-weighted due to
Apple MPP inflation)

Stage 1 — Flag: contact enters "at-risk" segment; reduce frequency to {1/month}.
Stage 2 — Re-engagement series ({2–3} emails over {14} days):
  Email 1: "Still want to hear from us?" + preference-center link
  Email 2: Best-of content or a concrete incentive ({10% off / top guide})
  Email 3: "We're removing you in 7 days" — one-click stay-subscribed button
Stage 3 — Suppress: no interaction after Email 3 → move to suppression list
  (do NOT delete; suppression must survive list re-imports).
Review: report suppression volume and list growth net of suppression {monthly}.
```

### Template 4 — Blacklist delisting request (for human-reviewed lists)

```
Subject: Delisting request — {IP or domain} — remediation completed

Listed resource: {IP address / domain}
Listing: {SBL/DBL/Barracuda/etc. + listing ID if shown}
Role: {Email administrator / owner} of {domain}, sending via {ESP/infrastructure}.

Root cause identified: {e.g., a stale imported list containing invalid
addresses was mailed on {date}, producing a bounce spike / a compromised
account sent unauthorized mail}.

Remediation completed:
- {Removed/verified the list through {verification service}; N addresses purged}
- {Enabled double opt-in on all forms / rotated credentials and enabled 2FA}
- {SPF, DKIM aligned; DMARC at p={quarantine|reject}}
- {Bounce handling now suppresses hard bounces after 1 occurrence}

Current metrics: bounce rate {X}%, complaint rate {X}% over the last {N} sends.
We request removal and will maintain these controls. Contact: {email}.
```

### Framework — Deliverability health thresholds

| Metric | Healthy | Warning | Emergency (pause sends) |
|--------|---------|---------|-------------------------|
| Hard bounce rate | <0.5% | 0.5–2% | >2% |
| Total bounce rate | <2% | 2–5% | >5% |
| Spam complaint rate | <0.05% | 0.05–0.1% | >0.3% (Gmail enforcement line) |
| Unsubscribe rate | <0.3% | 0.3–1% | >1% |
| Gmail Postmaster domain reputation | High | Medium | Low/Bad |
| Inbox placement (seed tests) | >90% | 80–90% | <80% |
| Unknown-user bounces on a new list | <1% | 1–3% | >3% (verify list before continuing) |

### Framework — The 4-layer diagnosis order

When someone says "we're going to spam," always diagnose in this order, because each layer masks the ones below: (1) **Authentication** — SPF/DKIM/DMARC pass and align? (2) **Reputation** — blacklists, Postmaster reputation, IP history? (3) **List quality** — bounce/complaint rates, list source, trap risk? (4) **Content & behavior** — spam heuristics, volume spikes, engagement decay. Do not tweak subject lines (layer 4) while DKIM is failing (layer 1).

## Output format

Deliver a **Deliverability Plan** (or **Audit Report** for diagnosis requests) as a markdown document containing:

1. **Status summary** — 3–5 bullets: what's broken/missing, severity, expected time to fix.
2. **Findings table** — each check (SPF, DKIM, DMARC, alignment, blacklists, list hygiene, content, monitoring) with pass/fail/unknown and evidence.
3. **DNS records to publish** — exact host/type/value entries, copy-pasteable, with the DMARC ramp calendar.
4. **Warm-up schedule** (if applicable) — the filled-in day-by-day table with hold/rollback rules.
5. **Hygiene & sunset policy** — the filled-in policy text ready to adopt.
6. **Monitoring setup** — which tools to connect, the thresholds table, and who gets alerted at each level.
7. **Prioritized action list** — numbered, each item with owner-ready phrasing, ordered emergency → this week → this month.
8. **Assumptions made** — every default applied where the user lacked data.

## Quality checklist

- [ ] Exactly one SPF record recommended per domain, with ≤10 DNS lookups and `~all`/`-all` termination
- [ ] DKIM guidance specifies the user's domain as the signing domain (d=), not the ESP's, at 2048-bit
- [ ] DMARC starts at `p=none` with `rua=` reporting and includes a dated ramp to `p=reject`
- [ ] Gmail/Yahoo bulk-sender requirements addressed: one-click unsubscribe (RFC 8058), <0.3% complaint ceiling, 48-hour unsubscribe honoring
- [ ] Mail streams separated by subdomain, and cold outreach assigned to a separate lookalike domain
- [ ] Warm-up schedule includes concrete daily caps, a growth rate no faster than 2x per 2–3 days, and explicit hold/rollback triggers
- [ ] Sunset policy defines the engagement window in days, the re-engagement series length, and suppression (not deletion)
- [ ] Bounce handling rules distinguish hard (suppress after 1) from soft (suppress after 3–5) bounces
- [ ] All thresholds given as numbers with a healthy/warning/emergency band, not adjectives
- [ ] Blacklist advice names the specific list, its real-world impact, and cause-first remediation before delisting
- [ ] Every DNS record in the output is copy-pasteable (host, type, value) with a worked example
- [ ] Monitoring section names at least Google Postmaster Tools plus a DMARC report processor and a blacklist scan cadence
- [ ] Assumptions section lists every default used
- [ ] No advice to buy lists, use an ESP's shared DKIM identity long-term, or jump straight to `p=reject`

## Common mistakes

- **Two SPF records.** Adding a new ESP by creating a second `v=spf1` TXT record invalidates both. Merge includes into one record.
- **SPF checked on the wrong domain.** SPF authenticates the Return-Path domain, not the visible From. An ESP using its own bounce domain can pass SPF while DMARC fails on alignment — which is why DKIM alignment is the record that usually matters.
- **`p=reject` on day one.** It feels decisive but silently kills legitimate mail from the CRM, billing system, or that one marketing tool nobody documented. Monitor at `p=none` for 2–4 weeks first.
- **Warming up with the coldest audience.** Sending warm-up volume to a dormant or purchased segment poisons the new reputation immediately. Warm-up traffic must go to the most engaged recipients available.
- **Treating a blacklist delisting as the fix.** Delisting without removing the cause produces a relisting within days, and second listings get slower, more skeptical review.
- **Deleting suppressed addresses.** Deleted complainers and hard bounces get re-imported from the CRM six months later and re-damage reputation. Suppression lists are permanent.
- **Chasing open rates post-Apple MPP.** Mail Privacy Protection auto-fires open pixels, inflating opens 20–40% for Apple Mail users. Sunset and engagement decisions keyed to opens alone keep dead addresses alive; use clicks and conversions.
- **One giant image as the email.** Image-only emails defeat content filters' ability to read the message, which filters treat as evasion. Keep ≥60% text and always include a plain-text part.
- **Volume whiplash.** Sending 5,000/week normally, then 200,000 on launch day, reads as a compromised account. Pre-ramp 25–50% per send in the two weeks before any spike.
- **Cold outreach from the primary domain.** One aggressive SDR campaign can put the domain every invoice and password reset depends on into quarantine. Cold email always gets its own lookalike domain and mailboxes — see **cold-email-outreach** for running the campaigns themselves.
- **Ignoring which blacklist it is.** Panicking over a UCEPROTECT Level 3 or SORBS listing wastes days; those lists affect almost no real inboxes. Spamhaus, on the other hand, is a genuine emergency.
- **Confusing delivery rate with deliverability.** An ESP's "99% delivered" counts spam-folder placements as delivered. Only seed tests and Postmaster data reveal inbox placement.
