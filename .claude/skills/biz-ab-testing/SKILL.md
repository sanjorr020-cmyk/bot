---
name: biz-ab-testing
description: "Designs, sizes, and analyzes A/B tests end-to-end: hypothesis writing, primary metric and MDE selection, sample size and runtime math, guardrail metrics, and ship/kill decisions. Use when the user says \"design an A/B test\", \"what sample size do I need\", \"how long should my test run\", \"is this result statistically significant\", \"write a test hypothesis\", \"my experiment is flat, what now\", \"should we ship this variant\", \"my test results look weird\", or asks about split testing, experiment analysis, peeking, or rollout decisions."
---

# A/B Testing

Design, size, run, and analyze randomized controlled experiments on websites, apps, emails, and ads — and turn results into defensible ship/kill decisions. The core discipline: write a falsifiable hypothesis, commit to one primary metric and a fixed sample size BEFORE launch, protect the read with guardrails, and interpret results without peeking, fishing, or post-hoc storytelling. A test that changes its rules mid-flight is not an experiment; it is a decision looking for a justification.

## When to use this skill

Use for:
- Designing a new experiment: hypothesis, variants, metrics, sample size, runtime
- Pre-registering a test plan before launch
- Analyzing finished (or in-flight) test results and recommending ship/kill/iterate
- Diagnosing broken tests: sample ratio mismatch, flat results, contradictory segments
- Choosing between fixed-horizon and sequential testing approaches

Do NOT use for — hand off instead:
- Deciding WHAT to test on a landing page (copy, layout, forms) → **landing-page-cro** generates the test ideas; this skill designs the experiment around them
- Finding WHERE the funnel leaks to prioritize testing → **funnel-analysis**
- Writing the email variants themselves → **email-marketing**; ad variants → **google-ads**, **meta-ads**, **ad-copywriting**
- Recurring reporting on experiment programs → **analytics-reporting** or **kpi-dashboard-design**
- Measuring long-term retention impact of a shipped change → **retention-cohort-analysis**

Also decline gracefully when an A/B test is the wrong tool: fewer than ~1,000 conversions/month usually means tests take months to reach power. Say so, quantify it (see Process step 4), and suggest alternatives: bigger/bolder changes with higher MDE, sequential testing, painted-door tests, or qualitative research via **customer-feedback-analysis**.

## Inputs to gather

Ask for these; assume the stated default when the user doesn't know:

| Input | Why it matters | Default if unknown |
|---|---|---|
| What's being tested and why (evidence) | Anchors the hypothesis | Ask; refuse to skip — "test the button color" with no evidence is a coin flip |
| Baseline rate of the primary metric | Drives sample size | Pull from GA4/analytics; if truly unknown, use 2–3% for e-commerce conversion, 20–30% for signup pages, 2–4% email CTR |
| Weekly traffic/users entering the test | Drives runtime | Ask; this is non-negotiable |
| Primary metric | One number decides the test | Nearest business outcome the change can plausibly move (purchase, signup, qualified lead) — not clicks |
| Minimum detectable effect (MDE) | Smallest lift worth acting on | 10% relative for most SMB sites; 2–5% relative only for high-traffic products (>100k users/week in test) |
| Significance level (alpha) | False-positive tolerance | 0.05, two-tailed |
| Statistical power | False-negative tolerance | 80% (0.8) |
| Traffic split | Allocation | 50/50 |
| Number of variants | Affects alpha correction | 1 control + 1 variant (A/B, not A/B/n) |
| Guardrail metrics | What must not degrade | Revenue/order value, bounce rate, page load time, unsubscribe rate — pick 2–4 |
| Testing platform | Constrains method | Whatever they have (Optimizely, VWO, GrowthBook, PostHog, native app framework, or manual split) |

## Process

1. **Interrogate the idea before designing the test.** Ask: what evidence suggests this change will work (analytics data, session recordings, user complaints, competitor pattern)? If the answer is "hunch," push for supporting data or flag the test as exploratory with a wide MDE. Confirm the change is big enough to plausibly move the primary metric — a button-color tweak will not move purchases 10%.

2. **Write the hypothesis** using the template in Frameworks. It must name: the evidence, the change, the population, the predicted direction and size of effect, and the single metric that adjudicates. If the user can't fill every blank, the test isn't ready.

3. **Lock ONE primary metric.** Rules:
   - It must be a ratio the tested change can causally move within the test window (conversion rate, activation rate, revenue per visitor).
   - Prefer the metric closest to money that still has enough events. If purchases are too rare to power, step one funnel stage up (add-to-cart, qualified signup) and note the proxy risk in the plan.
   - Clicks/CTR as primary is only acceptable when the click IS the outcome (ads, email). Otherwise it's a vanity proxy.
   - Everything else is secondary (directional context) or a guardrail (veto power). Write each metric into exactly one of those three buckets.

4. **Do the sample size and runtime math.** Use the quick formula (per arm, for proportions, alpha 0.05 two-tailed, power 80%):

   **n per arm ≈ 16 × p(1−p) / d²**

   where p = baseline rate and d = absolute MDE (baseline × relative MDE). Then:
   - Runtime (weeks) = (n × number of arms) ÷ weekly eligible traffic
   - Round runtime UP to whole weeks (always run full 7-day cycles — weekday/weekend behavior differs)
   - Minimum runtime: 1 full week even if powered in 2 days; recommended minimum 2 weeks
   - Maximum practical runtime: 4–6 weeks. Beyond that, cookie churn and external drift pollute the sample.
   - **Decision point:** if runtime exceeds 6 weeks, present the user three options: (a) raise the MDE (only detect bigger wins), (b) move the primary metric upstream where events are denser, (c) don't A/B test — ship with pre/post monitoring or use a sequential method.

5. **Set guardrail metrics with explicit thresholds.** For each guardrail, define the degradation that blocks a ship (e.g., "average order value drops >2%", "p75 page load time up >200ms", "unsubscribe rate up >0.1pp"). Guardrails have veto power over a winning primary metric.

6. **Pre-register the plan.** Fill in the Test Plan template (Frameworks) completely — hypothesis, metrics, sample size, runtime, stopping rule, decision rules — and get the user's sign-off BEFORE launch. The stopping rule is fixed-horizon by default: "We analyze once, when n per arm ≥ [N] and at least [W] full weeks have elapsed." If the team insists on monitoring mid-flight, specify a sequential method up front (e.g., always-valid p-values as in Optimizely's Stats Engine, GrowthBook's sequential mode, or group-sequential with O'Brien-Fleming boundaries) — never fixed-horizon math with daily peeks.

7. **Plan the launch QA.** Checklist: variant renders correctly on mobile and desktop; tracking fires for primary, secondary, and guardrail metrics in both arms; users are bucketed once and see the same arm on return visits; the test excludes internal traffic and bots; no other experiment overlaps the same audience and metric. Recommend a 1-day 5% canary before ramping to the full 50/50 when traffic allows.

8. **Check for Sample Ratio Mismatch (SRM) within 24–48 hours of launch.** With a 50/50 split, run a chi-square test on the observed counts (worked example in Frameworks). If p < 0.001, the randomization or tracking is broken — stop, fix, and restart the test. Do not "let it run and adjust later"; SRM invalidates everything downstream.

9. **Run to completion, hands off.** No peeking at significance, no adding variants, no changing traffic allocation, no editing the variant mid-test (any change restarts the clock). Monitor only for: SRM, tracking outages, and guardrail catastrophes (a guardrail breach severe enough to harm users justifies an early kill — that's the one sanctioned early stop).

10. **Analyze against the pre-registered plan.**
    - Compute lift and the 95% confidence interval on the difference, not just a p-value. Report: "Variant lifted conversion from 4.0% to 4.5% (+12.5% relative, 95% CI [+3.1%, +22.0%], p = 0.008)."
    - Check every guardrail against its threshold.
    - Check for novelty effect: compare lift in week 1 vs. subsequent weeks. If the lift decays by more than half, flag it — the "win" may be curiosity, not preference. Recommend extending 1–2 weeks or discounting the effect.
    - Segment reads (mobile/desktop, new/returning) are hypothesis-generating only. With 10 segments at alpha 0.05, ~40% chance at least one is "significant" by luck. Never ship or kill based on a segment that wasn't pre-registered; if a segment must be decision-grade, apply Bonferroni (alpha ÷ number of segments examined).
    - If testing multiple variants or multiple decision metrics, correct alpha: Bonferroni (0.05 ÷ k comparisons) or state clearly that only the single pre-registered primary comparison is confirmatory.

11. **Make the call using the decision matrix** (Frameworks), then plan rollout: significant wins ship via staged ramp (50% → 100% over a few days while watching guardrails) or straight to 100% for low-risk changes. Log every test — hypothesis, result, decision — in a shared experiment log so learnings compound. For measuring long-run impact after shipping, hand off to **retention-cohort-analysis**.

## Frameworks & templates

### Hypothesis template

> **Because we observed** [evidence: data point, user research finding, or funnel leak],
> **we believe that** [specific change] **for** [population: e.g., mobile visitors to the pricing page]
> **will cause** [predicted behavioral outcome].
> **We'll know this is true if** [primary metric] **increases by at least** [MDE, e.g., 10% relative]
> **without degrading** [guardrail metrics].

Worked example:
> Because we observed that 62% of mobile checkout abandonments happen on the shipping-cost step (GA4 funnel, May data), we believe that showing estimated shipping on the product page for mobile visitors will cause fewer surprise-driven exits. We'll know this is true if checkout completion rate increases by at least 8% relative, without degrading average order value by more than 2% or add-to-cart rate at all.

### Sample size quick reference (alpha 0.05 two-tailed, power 80%, per arm)

Formula: **n ≈ 16 × p(1−p) / d²** — p = baseline rate, d = absolute lift to detect.

| Baseline | Relative MDE | Absolute d | n per arm | Total (2 arms) |
|---|---|---|---|---|
| 2% | 20% | 0.4pp | ~19,600 | ~39,200 |
| 4% | 10% | 0.4pp | ~38,400 | ~76,800 |
| 10% | 10% | 1.0pp | ~14,400 | ~28,800 |
| 25% | 5% | 1.25pp | ~19,200 | ~38,400 |

Worked runtime example: baseline conversion 4%, relative MDE 10% → d = 0.004; n = 16 × (0.04 × 0.96) / 0.004² ≈ 38,400 per arm (~40,000 with continuity padding), ~80,000 total. At 10,000 eligible visitors/week the test needs **8 weeks — too long**. Options: raise MDE to 15% (d = 0.006 → ~17,100/arm → ~3.5 weeks) or use add-to-cart (baseline 12%) as primary. Show this trade-off to the user explicitly.

For revenue-per-visitor or other continuous metrics, use n per arm ≈ 16 × (σ/d)² where σ is the metric's standard deviation — and warn that revenue is high-variance, so it typically needs 3–10× the sample of a conversion-rate test.

### SRM chi-square check (worked example)

Planned 50/50; observed 5,240 vs. 4,760 of 10,000. Expected 5,000 each.
Chi-square = (240² / 5,000) + (240² / 5,000) = 11.52 + 11.52 = **23.04** → p < 0.0001 (df = 1). Anything with **p < 0.001 = SRM**: stop the test and audit redirects, bot filtering, and bucketing logic. (For reference: a 5,050/4,950 split gives chi-square = 1.0, p ≈ 0.32 — fine.)

### Test Plan (pre-registration) template

```
TEST NAME: [short, unique — e.g., "PDP-shipping-estimate-mobile-v1"]
OWNER / DATES: [name] | Launch [date] → Readout [date]
HYPOTHESIS: [filled-in hypothesis template]
VARIANTS: Control = [current state] | Variant B = [exact change, screenshot linked]
POPULATION: [who enters; who is excluded]
SPLIT: 50/50, bucketed by [user ID / cookie]
PRIMARY METRIC: [one metric + definition + baseline]
SECONDARY METRICS (directional only): [2–4]
GUARDRAILS (veto thresholds): [metric: threshold] × 2–4
MDE: [X% relative = Ypp absolute]
STATS: alpha 0.05 two-tailed, power 80%, fixed-horizon
SAMPLE SIZE: [n] per arm ([total]) → RUNTIME: [W] full weeks
STOPPING RULE: analyze once at n ≥ [N] per arm AND ≥ [W] weeks; early stop
  only for SRM (p < 0.001) or guardrail catastrophe
DECISION RULES: [pre-commit: what ships under win / flat / loss]
```

### Decision matrix (apply at readout)

| Primary metric result | Guardrails | Decision |
|---|---|---|
| Significant win (p < 0.05, CI excludes 0) | Clean | **Ship.** Staged ramp 50%→100%; log the win |
| Significant win | Breached | **Do not ship.** Investigate the trade-off; iterate |
| Flat (CI includes 0) | Clean | **Keep control** by default. Ship variant only if it's strictly cheaper/simpler to maintain, and say the test showed no harm — never claim a win |
| Flat, but CI is wide (underpowered) | Clean | **Inconclusive, not "no effect."** Rerun with higher MDE or more traffic, or drop the idea |
| Significant loss | Any | **Kill.** Document the learning — a clean negative is a successful experiment |
| Any | SRM detected | **Void.** Fix instrumentation, restart from zero |

### Analysis Readout — worked example

```
TEST: PDP-shipping-estimate-mobile-v1          READOUT DATE: 2026-06-30
VERDICT: SHIP (staged ramp 50% -> 100% over 3 days, watch AOV daily)

RESULTS (n = 41,180 control / 41,047 variant; 4 full weeks; SRM chi-sq 0.22, clean)
                        Control   Variant   Rel. lift   95% CI            p
Checkout completion*     4.02%     4.51%     +12.2%     [+4.0%, +20.7%]   0.003
Add-to-cart rate         11.9%     12.1%     +1.7%      [-1.8%, +5.3%]    0.34
Avg order value (guard)  $86.20    $85.55    -0.75%     within -2% gate   pass
p75 page load (guard)    2.31s     2.34s     +30ms      within 200ms gate pass
* = pre-registered primary metric

NOVELTY CHECK: week-1 lift +13.8%, weeks 2-4 lift +11.6% -> stable, no decay flag.
CAVEATS: none — no peeks, no mid-test changes, allocation held at 50/50.
SEGMENT NOTES (hypotheses only): iOS lift (+16%) > Android (+7%); not decision-grade.
NEXT: log result; follow-on test — show shipping estimate on cart page (desktop).
```

Model every readout on this structure. The verdict line comes first because stakeholders read one line; the table proves it; the caveats keep it honest.

## Output format

Deliver one or both of these, depending on where the user is in the cycle:

**Pre-launch:** the completed Test Plan template (above) with all math shown — sample size calculation spelled out with the numbers plugged in, runtime in whole weeks, and the three-option trade-off table if runtime exceeded 6 weeks. Plus the launch QA checklist tailored to their platform.

**Post-test:** an Analysis Readout containing, in order: (1) one-line verdict (Ship / Kill / Iterate / Inconclusive / Void-SRM); (2) results table — each metric with control value, variant value, relative lift, 95% CI, p-value; (3) guardrail pass/fail table; (4) SRM and novelty-effect checks; (5) caveats (peeking that occurred, mid-test changes, segment observations labeled as hypotheses); (6) recommended rollout plan or next experiment. Keep the verdict honest to the pre-registered plan even when the user hoped for a different answer.

## Quality checklist

- [ ] Hypothesis cites specific evidence, not a hunch, and names population, change, direction, and size
- [ ] Exactly ONE primary metric; every other metric labeled secondary or guardrail
- [ ] Primary metric is an outcome the change can causally move within the window (not a vanity click)
- [ ] MDE chosen deliberately and sanity-checked against the size of the change (subtle change ≠ 20% lift)
- [ ] Sample size computed with formula shown, using the user's real baseline and traffic
- [ ] Runtime is whole weeks, ≥ 1 week (ideally ≥ 2), ≤ 6 weeks, and avoids known anomalies (holidays, sales, launches)
- [ ] If runtime > 6 weeks, the three alternatives (raise MDE / upstream metric / don't test) were presented
- [ ] 2–4 guardrails with numeric veto thresholds defined before launch
- [ ] Stopping rule pre-registered; fixed-horizon by default, named sequential method if monitoring is required
- [ ] SRM check scheduled within 48h of launch, with the p < 0.001 stop rule stated
- [ ] Readout reports lift with 95% CI, not p-value alone
- [ ] Novelty-effect check (week 1 vs. later weeks) included in analysis
- [ ] Segment findings labeled hypothesis-generating, never decision-grade without correction
- [ ] Flat result with wide CI called "inconclusive," not "no difference"
- [ ] Decision follows the pre-registered decision rules and the matrix, and the test is logged

## Common mistakes

- **Peeking with fixed-horizon stats.** Checking significance daily and stopping at the first p < 0.05 inflates the real false-positive rate from 5% to 25–40%. Either analyze once at the pre-set sample size or use an always-valid sequential method — never both-ways.
- **HARKing (Hypothesizing After Results are Known).** The test was "about" checkout completion until it lost — then suddenly the story is "but engagement went up!" The primary metric written in the plan is the verdict; everything else is a future hypothesis.
- **Segment fishing.** Slicing a flat result by device × browser × geo until something glows. With 10 uncorrected looks, the chance of a spurious "win" is ~40%. Pre-register segments or Bonferroni-correct.
- **Declaring flat = equal.** A test powered to detect 10% that reads +2% [−6%, +10%] hasn't shown "no effect" — it's shown nothing. Underpowered tests produce shrugs, not conclusions.
- **Ignoring SRM.** A 52/48 split on 100,000 users is not "close enough" (chi-square ≈ 160, p ≈ 0). Bot filtering, redirect latency, or broken bucketing is corrupting one arm; the results are fiction.
- **Novelty and primacy effects.** Big flashy changes spike week-1 metrics because users notice them, not because they prefer them; regulars also temporarily underperform on unfamiliar UIs. If lift halves after week 1, don't ship on week-1 numbers.
- **CTR as primary for on-site tests.** More clicks on a shinier button that convert at a lower rate downstream is a loss wearing a win's clothes. Measure the outcome, guardrail the funnel.
- **Editing the test mid-flight.** Tweaking variant copy, shifting allocation from 50/50 to 80/20, or adding a variant in week 2 mixes populations and biases time-in-test. Any change to variants or allocation restarts the sample count at zero.
- **Testing over Black Friday, a product launch, or a PR spike** — unless that period is explicitly the target. Anomalous traffic doesn't generalize to the other 48 weeks.
- **Running A/B/C/D/E with no alpha correction.** Four variants against control at alpha 0.05 gives ~19% odds of a false winner. Correct to 0.0125 per comparison or run fewer, bolder variants.
- **Sizing the test after seeing results** ("we hit significance at day 3, so the sample was clearly enough"). Sample size is a pre-launch commitment; post-hoc power analysis is circular.
- **Treating a kill as failure.** A clean negative result on a pre-registered test saved the business from shipping a loser — log it with the same rigor as a win, or the team will retest the same bad idea next quarter.
