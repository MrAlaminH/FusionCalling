# FusionCalling — Missing Keyword Strategy & Implementation Plan

**Companion to:** `GSC-CONTENT-GAP-REPORT.md`
**Method:** Live SERP research (Sep 2026) via web search across your two priority tracks (agency/white-label + business/automation), cross-referenced against your full 12-month GSC export (486 queries) and the site's content inventory in this repo.
**Rule applied:** Every keyword below has (a) evidence of real search demand — competitors build dedicated pages for it, (b) **zero or near-zero presence in your GSC data**, and (c) direct fit with your vision: white-label AI voice platform for agencies + AI phone automation for businesses.
**Note on volumes:** No paid keyword tool was used; demand ratings (High/Med/Low) are inferred from SERP competition depth — when RingCentral, Salesforce, and 10 startups each build a dedicated page, demand is proven.

---

## Part 1 — The missing keywords (the list)

### TRACK A — Agency / Reseller (serves `/whitelabel`, your co-priority page)

| # | Keyword | Intent | Demand | Evidence from SERP research |
|---|---|---|---|---|
| A1 | **ai voice agent reseller program** | Commercial | High | insighto.ai/agency, trillet.ai comparison, centricallai explainer, viirtue MSP guide all target it |
| A2 | **white label ai receptionist** | Commercial | High | Dedicated pages: myaifrontdesk/white-label, voiceaiwrapper/uses/white-label-ai-receptionist, stammer, ringlyn guide, trillet listicle |
| A3 | **voice ai reseller** / **resell ai voice agents** | Commercial | Med-High | Covered inside all A1 pages |
| A4 | **white label ai answering service** | Commercial | Med | Frontdesk, ringlyn target; your GSC shows it at pos 61–83 with no page |
| A5 | **ai receptionist white label pricing** | Commercial | Med | Trillet ($299/mo), autocalls ($0.09/min) lead with price in title/meta |
| A6 | **missed call text back white label** | Commercial | Med (GHL niche) | GHL feature has a huge ecosystem; your GSC already shows this query @ 51 with no page |
| A7 | **start a voice ai agency** / **ai voice agency business** | Informational→Commercial | Med | Your blog post `how-to-start-a-voice-ai-agency` exists but shows **0 impressions** in GSC — keyword misalignment, not missing content |
| A8 | **white label ai voice agent platform** | Commercial | High | autocalls, famulor, byvoice, wotnot listicle; your pos ~57 (already in GSC — listed for completeness) |

### TRACK B — Business buyer / Use-case (serves `/`, `/ai-phone-call-automation`, industries)

| # | Keyword | Intent | Demand | Evidence |
|---|---|---|---|---|
| B1 | **ai receptionist** (head term) | Commercial | **Very High** | RingCentral has a dedicated `/ai-receptionist` page; whole startups (ai-receptionist.com) brand around it |
| B2 | **ai receptionist software** | Commercial | High | RingCentral, Frontdesk, Weave |
| B3 | **how much does an ai receptionist cost** | Informational→Commercial | High | Entire SERP of pricing guides: allo ($18–599), imagicle ($25–3,000), byvoice, nextphone |
| B4 | **ai receptionist pricing** | Commercial | High | Frontdesk/pricing, ai-receptionist.com/pricing |
| B5 | **ai receptionist for dental office** | Commercial | High | Entire vertical companies: Dentina, Rondah, Viva AI, Arini, TrueLark |
| B6 | **ai receptionist for real estate / hvac / plumbing / law firm / medical / salon** | Commercial | High (per-vertical) | Same vertical-product pattern as B5 |
| B7 | **ai cold calling software** | Commercial | High | Salesforce, Retell blog, Synthflow blog, Vapi dedicated page |
| B8 | **ai appointment reminder calls** | Commercial | Med-High | Dedicated landing pages: getprosper, ringlyn/automated-appointment-reminder-calls, demandforce |
| B9 | **automated appointment reminders** | Commercial | High | Demandforce, Zapier, NextLevel |
| B10 | **ai order taking for restaurants** | Commercial | Med | Part of restaurant voice SERP you rank pos 80–95 for |
| B11 | **ai lead qualification calls** / **ai sdr** | Commercial | Med | Retell/Vapi content; emerging category |
| B12 | **ai answering service for small business** | Commercial | High | Allo, Upfirst, Dialzara tier |
| B13 | **ai phone ordering system** | Commercial | Med | Restaurant vertical overlap |

### TRACK C — GEO / AI-search questions (feeds ChatGPT, AI Overviews, Perplexity)

| # | Keyword (question) | Demand | Evidence |
|---|---|---|---|
| C1 | **will ai replace receptionists** | High | Reddit, Quora, KFF Health News, johnni.ai, careerexplorer, myaifrontdesk all ranking |
| C2 | **are ai receptionists worth it** | Med | Sub-question appearing across the same SERP |
| C3 | **how do ai receptionists work** | Med | Ringlyn, imagicle guides |
| C4 | **ai receptionist vs human receptionist** | Med | Quora + brand blogs |
| C5 | **can ai answer phone calls** / **can ai make phone calls** | Med | Generic AI-answer queries, high AI-Overview presence |

### Already-ranking keywords to double-down on (from GSC, not new — but underexploited)

- `white label retell ai` (11 @ 13.0) and `retell white label` (1 click @ 11.2) → `/whitelabel/retell` **has zero GSC impressions** — indexing/consolidation issue
- `fusion white label branding` (5 @ 17.0) — only brand+commercial crossover you win
- `hotword detection` family (39 @ 8–22, 0 clicks) — CTR fix, not new content

---

## Part 2 — Implementation map (keyword → exact page → exact change)

### 2.1 NEW PAGE: `/ai-receptionist` (targets B1, B2, B12)

The single highest-leverage addition. Your homepage title already says "24/7 AI Receptionist" — Google sees the phrase but there is no page of record for it (your `glossary/ai-receptionist` ranks pos 28.7 — a glossary entry outranking nothing means the money page is missing).

**Structure:**
- Title: `AI Receptionist for Business Calls | FusionCalling` (≤60 chars, head term first)
- H1: `AI Receptionist That Answers Every Call — 24/7`
- H2s matching query language: "What is an AI receptionist?", "How it works" (you already have this pattern on `/ai-phone-call-automation`), "What it handles" (bookings, messages, SMS, transfer), "AI receptionist vs human receptionist" (captures C4, GEO), "Pricing" (link to `/pricing`), "Industries" (link to all 11 vertical pages), FAQ (FAQPage schema)
- Internal links IN: homepage nav/hero mention, glossary/ai-receptionist top-of-page link, all industries pages

**Why this works (the mechanic):** Google ranks a *page* per query cluster. Right now "ai receptionist" queries have no page to rank — so your homepage (pos 16.75 overall) is dragged into serving queries it wasn't built for. A dedicated page lets the homepage keep "call automation" while the new page takes "receptionist". This is called **intent-to-page mapping**, and its absence is the root cause of most of your 0-click clusters.

### 2.2 `/whitelabel` — additive sections, not a rebuild (targets A2, A4, A5, A8)

Your page exists and ranks ~47; it fails because 46 of 47 query phrasings have no section matching them. Add H2 sections:

- `White-Label AI Receptionist` (A2) — screenshots of the branded dialer/receptionist UI
- `Resell AI Voice Agents: How the program works` (A1/A3) — margins, sub-accounts, Stripe rebilling (content exists on the page in features form; rephrase in "reseller" vocabulary)
- `White-Label Answering Service` (A4)
- A pricing block in reseller terms: "$X/mo base + $Y/min, you set the markup" (A5) — SERP leaders all put per-minute numbers in meta copy
- FAQ additions: "Can I resell under my own brand?", "What do resellers pay per minute?" (FAQPage schema)

**Why:** an H2 that literally contains the query phrase is the strongest single on-page relevance signal. You don't need new pages for A2/A4/A5 — you need the existing page to *say the words searchers say*. Your current title "White-Label AI Voice Agents From $99/mo" covers exactly one phrasing.

### 2.3 NEW PAGE or SECTION: reseller program (targets A1, A3, A7)

Option A (preferred): new `/whitelabel/reseller-program` page — "AI Voice Agent Reseller Program | FusionCalling" with: how it works (3 steps), margin math example, who it's for (agencies, MSPs, telecom consultants — the viirtue MSP angle is an untapped sub-niche), requirements, apply CTA.
Option B: major section on `/whitelabel` if you want to consolidate authority on one URL.

Meanwhile **re-optimize `blog/how-to-start-a-voice-ai-agency`** (A7): it currently earns 0 impressions, meaning its title/copy doesn't match how people search ("start a voice ai agency", "ai voice agency business"). Add those exact phrases to title, H1, and first 100 words, and link it to the reseller page. That post is your A7 asset; it's just aimed at words nobody types.

### 2.4 NEW CONTENT: pricing/cost guide (targets B3, B4)

New blog post: **"How Much Does an AI Receptionist Cost in 2026? (Real Pricing)"** — the SERP for B3 is 100% pricing guides with number ranges in titles ($18–$599, $25–$3,000). Structure: cost table by tier, per-minute vs per-month explanation, hidden costs (setup, overage, integrations — mirroring byvoice's winning angle), where FusionCalling sits, link to `/calculator` and `/pricing`.
Also retarget `/calculator` (currently 29 impr @ 18.6): title → `AI Receptionist & Voice Agent Cost Calculator`.

**Why:** pricing-intent visitors are the closest-to-purchase non-brand traffic that exists, and cost-guide content earns citations in AI answers (GEO) because models quote concrete numbers.

### 2.5 INDUSTRIES pages — dual-keyword retargeting (targets B5, B6, B10)

Your industries pages target `ai voice for [X]`. Searchers type `ai receptionist for [X]`. Your dental page **already ranks position 7** for something — the demand-shift is one title tag away.

Per page (start with dental, restaurants, ecommerce, financial, real estate — your best pos):
- Title: `AI Receptionist for Dental Offices | FusionCalling` (keep "voice" in H1 or meta description so you don't lose existing rankings — Google blends)
- H2 added: "Your AI receptionist answers… booking, reminders, insurance questions…" using B6 phrasing
- Restaurants page: add "AI phone ordering" + "reservation taking" section (B10, B13)
- Keep existing URLs (7+ positions are assets; never create new URLs when a 301-free title rewrite works)

### 2.6 NEW USE-CASE pages (targets B7, B8, B9, B11)

Create a lightweight `/use-cases/` cluster (or `/ai-phone-call-automation/[use-case]` children — better, inherits parent authority):
- `/ai-phone-call-automation/appointment-reminders` — "Automated Appointment Reminder Calls" (B8/B9; SERP proof: ringlyn, prosper have dedicated pages; the "reduce no-shows 30–40%" stat belongs here for GEO)
- `/ai-phone-call-automation/cold-calling` — "AI Cold Calling Software" (B7; Salesforce/Retell/Synthflow all rank with content here)
- `/ai-phone-call-automation/lead-qualification` (B11)
- Optional later: order-taking, after-hours answering, survey/collection calls

Parent `/ai-phone-call-automation` links down to all of them; each child links back up and sideways to `/ai-receptionist`.

**Why hub-and-spoke:** your automation page has 1,071 impressions across 75 queries but ranks 24–65 on all — it's one page carrying five intents. Splitting intents into children is how you convert breadth into positions.

### 2.7 `/whitelabel/gohighlevel` — one section (target A6)

Add "Missed Call Text Back, white-labeled" section: explain MCTB + AI voice handling of the missed call. GSC already shows `missed call text back white label` @ pos 51 with essentially no page — that's a page-1-reachable query (weak SERP: mostly Reddit/Facebook groups and one alternative tool).

### 2.8 GEO layer across everything (Track C)

You already get cited in AI Overviews (GSC evidence: long question-queries @ pos 1–11). Systematize it:
- Each money page gets 3–5 FAQ items phrased as the C-cluster questions, with a **direct 40–60 word answer** in the first sentence of each answer (models extract quotable paragraphs, not marketing copy)
- Blog post for C1: "Will AI Replace Receptionists? What Actually Changes in 2026" — balanced answer (the SERP shows balanced/human-centric answers win: "won't replace, will automate repetitive tasks" is the consensus framing models already learned — match it, then differentiate: "here's what to automate vs keep human")
- Schema you already ship (Review snippets: 1,243 impr) + FAQPage on new pages; add `speakable` consideration later
- Put one concrete stat with a date on each new page ("answers in under 800ms", "$99/mo vs $3,000+/mo human") — quotable stats are the #1 GEO citation magnet observed across your ranking long-tails

### 2.9 Internal linking rules (applies to everything above)

1. Every new page gets ≥3 inbound internal links from existing pages with **keyword-anchored links** (e.g., glossary/ai-receptionist → "AI receptionist platform" → /ai-receptionist)
2. Glossary becomes the link farm: glossary/ai-receptionist, reseller, white-label, voip, call-analytics all point to their money pages (currently they point nowhere — that's why glossary pages rank and money pages don't)
3. Alternatives pages (your 1,237-impr cluster) get a "Switching from [X]? See the reseller program" block — passes authority to `/whitelabel`

---

## Part 3 — Why these keywords and not others (the filter, so you can repeat this)

A keyword passed only if it cleared all four:

1. **Vision fit** — white-label/agency/reseller OR AI phone automation/receptionist. (Rejected: "webrtc consulting" — 216 impr but off-product; report it in gap report, don't build.)
2. **GSC absence** — zero or <10 impressions in your 486 queries (means: unseen territory, not another fix-the-page project).
3. **Proven demand** — competitors invested dedicated pages/whole products (RingCentral's /ai-receptionist, Dentina as an entire dental-AI company).
4. **You have an unfair angle** — per-minute reseller pricing, GHL native fit, 11 industry pages already standing, existing GEO citation footprint.

**Rejected examples (so you know the discipline):** "ai assistant" (too generic, no buyer intent), "twilio ai" (integration SERP dominated by Twilio itself), "vicidial alternative" (1 impr, aging niche), all i18n queries (real but premature before English money pages rank).

---

## Part 4 — Build order and expected payoff

| Wave | What | Keywords | Why first |
|---|---|---|---|
| 1 (week 1–2) | `/whitelabel` sections + `/whitelabel/gohighlevel` MCTB section + fix `/whitelabel/vapi|retell|elevenlabs` indexing | A2, A4, A5, A6, A8 | Edits to existing indexed pages rank fastest; your co-priority page |
| 2 (week 2–4) | `/ai-receptionist` page + industries title rewrites (5 pages) | B1, B2, B5, B6, B12 | Highest demand; dental already at pos 7 |
| 3 (week 4–6) | Reseller program page + startup-agency blog re-opt + pricing guide | A1, A3, A7, B3, B4 | Commercial depth for Track A |
| 4 (week 6–10) | Use-case children + C-cluster blog + FAQ/GEO layer | B7–B11, C1–C5 | Compounding; feeds AI answers |

**Measurement:** in GSC, filter each new/edited page → watch queries tab at week 4 and week 8. Success signals: impressions on target phrases (weeks 2–4), position crossing <20 (weeks 4–8), first non-brand clicks. Your current baseline to beat: **1–2 non-brand clicks per 12 months.**

**What NOT to do:** don't create all pages in one week (index velocity + thin-interlink patterns look manufactured); don't rename `/industries/*` URLs (positions 7–53 exist there); don't stuff "ai receptionist" onto `/whitelabel` more than one H2 + meta mentions — two different intents must stay on two different pages or both stall at position ~50, which is exactly the disease this plan cures.
