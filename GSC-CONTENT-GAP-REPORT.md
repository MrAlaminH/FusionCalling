# FusionCalling — GSC Content-Gap Report

**Source:** Google Search Console export, Sep 4 2025 – Sep 3 2026 (Web search)
**Method:** Every query in `Queries.csv` (486 queries) was clustered, then cross-checked against the live content inventory in this repository (all routes in `app/`, plus `lib/comparisons.ts`, `lib/industries.ts`, `lib/glossary.ts`, `lib/blog-posts.ts`, `lib/whitelabel-providers.ts`). Top gap queries were spot-checked against live SERPs via web search.
**Scope:** Report only. No content or code was changed.

---

## 1. Executive summary

| Metric | Value |
|---|---|
| Total clicks / impressions | **77 / 10,995** (0.70% CTR) |
| Queries captured | 486 (query-level: 6,709 impr, 28 clicks) |
| Queries with ≥10 impressions and **0 clicks** | **~110** |
| Non-brand clicks | **~1–2 of 77** (96%+ of query clicks are brand: "fusion calling") |

**The single biggest finding:** the site is *seen* by Google across ~1,000+ distinct non-brand queries but ranks page 3+ (positions 25–95) on nearly all of them. This is not primarily a "missing pages" problem — it is a **"pages exist but don't satisfy the query intent / lack the format Google rewards"** problem, with a smaller set of genuinely missing topics.

Verified SERP checks confirm the format gap:

- **"vapi alternative"** (511 impr cluster) — top results are *listicle reviews* ("10 Best Vapi AI Alternatives — 2026 Guide" by MirrorFly, Synthflow's own listicle, Retell's comparison page, Reddit/HN threads). FusionCalling's `/alternative/vapi` does not surface.
- **"white label ai voice agent platform"** (1,175 impr cluster) — top results are dedicated `/white-label` landing pages (autocalls.ai, famulor.io, byvoice.io) plus "11 Best White Label AI Voice Agent Platforms" listicles (wotnot.io) and agency Reddit threads. `/whitelabel` ranks ~pos 47–70.

---

## 2. The two priority landing pages — cross-check

| | `/` (base) | `/whitelabel` |
|---|---|---|
| Clicks / Impr | **70 / 3,480** | **2 / 1,439** |
| CTR / Position | 2.01% / 16.75 | **0.14% / 47.16** |
| Title (repo) | "AI Phone Call Automation — 24/7 AI Receptionist" | "White-Label AI Voice Agents From $99/mo" |
| Ranking queries served | call-automation cluster (pos 23–65) | white-label cluster (pos 47–80) |
| Verdict | Working, but only for brand + mid-tail | **Failing: impressions without clicks at pos ~47** |

**Base page (`/`)** earns 91% of all page clicks. It also *absorbs* white-label-intent queries only weakly.

**White-label page (`/whitelabel`)** — your stated co-priority — accumulated 1,439 impressions at average position 47 with 2 clicks. The 47-query white-label cluster (1,175 impr, weighted avg pos **54.7**, 1 click) maps to it, but the page's thin query coverage (title targets only "white-label AI voice agents $99/mo") leaves variants unaddressed: *white label voice agent software, white label AI receptionist, white label answering service, white label cold calling, reseller voice AI, real-time phone agent white label platforms.*

**Structural note:** `/whitelabel/vapi`, `/whitelabel/retell`, `/whitelabel/elevenlabs` exist in the repo and sitemap but show **zero impressions** in this GSC export — they are either not indexed or ranking nowhere. Only `/whitelabel` and `/whitelabel/gohighlevel` appear. Legacy `/compare/*` URLs still earning impressions are correctly 301'd to `/alternative/*` (verified in `next.config.mjs:86-92`).

---

## 3. Query clusters ranked vs. content available

Impressions below are last-12-months, weighted-average position across the cluster.

| # | Cluster | Queries | Impr | W-Avg Pos | Clicks | Content that serves it today | Gap type |
|---|---|---|---|---|---|---|---|
| 1 | Brand ("fusion…") | 39 | 1,720 | 26.5 | 27 | Homepage only | Partial (see §5.6) |
| 2 | Competitor alternatives | 43 | 1,237 | 42.4 | 0 | `/alternative/[slug]` ×13 | Exists, ranks 24–56 |
| 3 | **White-label** | 47 | **1,175** | **54.7** | 1 | `/whitelabel` (+5 sub-pages) | Exists, invisible |
| 4 | **Call automation** | 75 | **1,071** | 46.0 | 0 | `/ai-phone-call-automation`, blog | Exists, ranks 23–65 |
| 5 | Generic AI voice agent | 51 | 354 | 59.7 | 0 | Homepage, glossary | Weak coverage |
| 6 | Industry verticals | 50 | 276 | 68.3 | 0 | `/industries/[slug]` ×11 | Exists, invisible |
| 7 | **WebRTC (services intent)** | 23 | **216** | 65.0 | 0 | **Only** `/glossary/webrtc` | **No page** |
| 8 | Speech recognition / hotword | 28 | 122 | 55.0 | 0 | Glossary terms | Weak + CTR leak |
| 9 | **Restaurants** | 29 | **112** | **82.8** | 0 | `/industries/ai-voice-for-restaurants-hospitality` | Exists, invisible |
| 10 | Voice API / CPaaS | 11 | 70 | 58.6 | 0 | `/docs/api-reference` only | **No marketing page** |
| 11 | Security / compliance | 14 | 70 | 31.8 | 0 | `blog/voice-ai-security-compliance` | Exists, CTR leak |

*Zero-click is the norm everywhere except brand. Clusters 3, 4, 7, 9 are the highest-leverage.*

---

## 4. Tier 1 — Queries you rank for where content EXISTS but underperforms

These are NOT missing pages. They are pages failing to rank/click. This is where the bulk of recoverable impressions sit.

### 4.1 White-label cluster → `/whitelabel` (1,175 impr, 0–1 clicks)
Top queries, all 0 clicks:

| Query | Impr | Pos |
|---|---|---|
| white label ai voice agent | 233 | 56.9 |
| ai voice agents white label | 216 | 57.7 |
| ai voice agent white label | 196 | 57.4 |
| white label voice agent | 80 | 51.2 |
| white label voice ai / …software / …phone | 130 | 48–64 |
| white label ai calling (…software/agent) | 47 | 48–58 |
| white label cold calling | 15 | 55.3 |
| reseller voice ai solution | 16 | 25.2 |
| white label voice agent for retell / white label retell ai | 24 | 13–25 |
| white label ai agent for gohighlevel | 11 | 17.7 |
| real time phone agent white label platforms | 10 | 64.6 |

**What the SERP winners have that the page doesn't:** agency-language landing pages with unlimited-subaccount/pricing-per-minute framing, plus "best white label platforms" listicles. The repo page targets one phrasing; 46 other phrasings have no dedicated H2/section/content match.

### 4.2 Alternatives cluster → `/alternative/[slug]` (1,237 impr, 0 clicks)

| Query | Impr | Pos | Repo page |
|---|---|---|---|
| vapi alternative(s) / competitors | **511** | 24–38 | `/alternative/vapi` exists — does not surface in SERP (listicles win) |
| synthflow alternative(s), "alternativas a synthflow" | 339 | 45–70 | `/alternative/synthflow` exists |
| bland ai alternative(s)/competitors | 291 | 53–69 | `/alternative/bland-ai` exists |
| air.ai alternatives | 44 | 47–56 | `/alternative/air-ai` exists |
| retell ai alternative(s) | 10 | 53–56 | `/alternative/retell` exists |
| voiceflow alternatives | 15 | 56.0 | **none** (see Tier 2) |

Note the pattern: pages with narrower competitors (`/alternative/thinkrr` pos 13–16, `/alternative/vapify` pos 8–11, `/alternative/voicerr` pos 12–31, `/alternative/aioncalls` pos 17) *do* rank — and `/alternative/thinkrr` is the only one that earned a click. The bigger-brand comparison pages lose to listicle-style roundups. `/alternative` hub: 901 impr @ 35.3, 0 clicks.

### 4.3 Call-automation cluster → `/ai-phone-call-automation` (1,071 impr, 0 clicks)

| Query | Impr | Pos |
|---|---|---|
| call automation | 237 | 42.9 |
| ai call automation | 94 | 33.7 |
| ai call handling / automated call handling | 150 | 51–62 |
| phone call automation / telephony automation | 117 | 40–42 |
| ai phone automation / ai phone call automation | 59 | 24–34 |
| automated phone calls with voice ai agents | 47 | 51.3 |
| post call automation | 21 | 65.0 |
| ai calling / what is ai calling | 51 | 36–42 |
| trusted platforms for inbound call automation | 16 | 80.4 |
| ai ivr / interactive voice response vendors | 13 | 32–85 |

The page ranks 24–65 across 75 queries — broad but shallow visibility. Sub-intents (inbound vs. outbound vs. post-call vs. IVR) have no landing sections.

### 4.4 Industry verticals → `/industries/[slug]` (276 impr, avg pos 68, 0 clicks)

| Vertical | Example query (impr @ pos) | Repo page position |
|---|---|---|
| Restaurants | ai voice agent for restaurants (18 @ 90.6), voice ai for restaurants (7 @ 80.1), ai receptionist for restaurants, restaurant call bot, ai reservation agent | `/industries/ai-voice-for-restaurants-hospitality`: 120 impr @ **82.3** |
| Ecommerce | ai voice agent for ecommerce (26 @ 87.4), ai receptionist for ecommerce (21 @ 73.5) | industries page: 101 impr @ **79.5** |
| Small business | ai voice agents for small business (17 @ 59.4), voice ai for smbs (15 @ 56.7) | `blog/ai-voice-agents-for-small-business`: 153 impr @ **67.4** |
| Financial | ai voice agent for financial services (4 @ 77.3), ai receptionist for financial advisors (3 @ 68) | industries page: 21 impr @ **79.9** |
| Education | ai voice agents for education (7 @ 90.3), ai tutor voice call (2 @ 19.5) | industries page: 17 impr @ **69.9** |
| Agencies | voice ai for marketing agencies (9 @ 70.8) | **none** (whitelabel adjacent) |
| Retail | ai voice agents for retail (11 @ 91.2) | covered only inside ecommerce page |

Verticals page for restaurants/ecommerce rank in the 70s–90s: effectively unindexed for practical purposes. (Also captured: gym, warehouse, payroll, HR/hiring, brokers, BPO — one-off queries, no vertical pages.)

### 4.5 Security & CTR leaks (content exists, clicks don't)

| Query | Impr | Pos | Issue |
|---|---|---|---|
| how is call audio typically encrypted at rest and in transit for voice ai platforms? | 18 | **10.9** | Ranking page 1, **0 clicks** — snippet/title mismatch (AI-Overview-style query; `blog/voice-ai-security-compliance` presumably serves it) |
| hotword detection / hotword technology / branded hotword / what is hotword | 39 | 8–22 | `/glossary/hotword-detection`: 112 impr @ 15.6, **0 clicks** — worst CTR leak on the site |
| voice calling api providers with gdpr compliant call analytics and retention controls | 9 | 36.4 | Long-tail AI query, weak match |

---

## 5. Tier 2 — Queries you rank for with NO matching content (true gaps)

### 5.1 WebRTC services (216 impr, 23 queries, avg pos 65)
`webrtc consulting services` (49 @ 63.3), `webrtc calls` (35 @ 52.3), `webrtc consulting` (31 @ 66.1), `webrtc services` (17 @ 84.7), `webrtc as a service` (14 @ 80.1), `webrtc consultant` (13 @ 46.0), `webrtc service providers` (13 @ 71.1), `webrtc integration services` (12 @ 73.0), plus ~15 more.
Only asset: `/glossary/webrtc` (248 impr @ 62.6) — educational, wrong intent. **No service/consulting page exists anywhere in the repo.** Decide: build a WebRTC-engineering/services page, or accept these as out-of-market.

### 5.2 Missing competitor pages (queries with impressions, no `[slug]`)
| Query | Impr | Pos | Status |
|---|---|---|---|
| birdcall ai voice agents | **55** | 53.7 | No `/alternative/birdcall` |
| voiceflow alternatives | 15 | 56.0 | No `/alternative/voiceflow` |
| voicestamp technologies | 14 | 17.3 | No page (already ranking p2 by accident) |
| voicelate | 13 | 18.6 | No page |
| famulor alternatives | 3 | 26.7 | No page |
| drop cowboy alternative | 5 | 70.0 | No page |
| verloop alternative | 8 | 49.1 | No page |
| parlance ai / squawk voice / leaping ai / vivox / vicidial / ifbyphone / tethr / calldash / fallbackai / wowcall / voiceclaw / audimee / voicedrop.ai | 1–3 each | 19–77 | No pages |

The `/alternative` engine (`lib/comparisons.ts`) makes these cheap to add. `birdcall` is the standout (55 impressions @ 53.7 with zero content).

### 5.3 White-label adjacent sub-intents (no content anywhere)
- **white label AI answering service / call answering** (9 impr @ 61–83) — no section on `/whitelabel`, no page
- **missed call text back white label** (1 @ 51) — GoHighLevel-market feature; belongs on `/whitelabel/gohighlevel`
- **white label call recording / call tracking** (5 @ 51–76)
- **white label ai receptionist** (4 @ 59.5) — intersection of your two priority clusters, served by neither
- **"real time phone agent white label platforms"** (10 @ 64.6) — listicle intent; the `/whitelabel/compare` page exists but shows 0 impressions in this export

### 5.4 Voice API / CPaaS marketing gap (70 impr)
`voice call integrations api` (26 @ 78.2), `best voice call api` (9 @ 79.6), `which cpaas has the easiest api for outbound dialing…` (5 @ 58.8), `voice api cloud`, `voice api for call centers`, `voice call api pricing`, `best tts api for enterprise…`. Only `/docs/api-reference` (developer docs) serves these — no commercial "Voice API platform" page or blog comparison. Ranking positions 33–97.

### 5.5 Brand-adjacent SERP defense ("fusion *" non-brand terms) — 700+ impr
| Query | Impr | Pos | Reality |
|---|---|---|---|
| fusion voice | 228 | **65.9** | Other telecom brands own this term; FusionCalling has no page asserting the brand for voice queries |
| fusion contact / contacts | 197 | 56 | Same |
| dial fusion / callfusion / phonefusion | 57 | 10–34 | Same |
| fusion call center / contact center / centre | 77 | 31–36 | Same |
| fusion voip / telephone / tel / communication(s) / chat / crm / inbound | 80 | 40–64 | Same |
| voicevault fusion pricing | 12 | 36.4 | Different product entirely |
| fusion white label branding | 5 | **17.0** | Your one win — maps to `/whitelabel` |

~1,490 brand-cluster impressions yielded 27 clicks, essentially all from "fusion calling" (22) / "fusion call" (3) / "call fusion" (2). Everything else is other companies' brand equity. Low priority to chase, but a brand homepage title/description tweak (currently "AI Phone Call Automation — 24/7 AI Receptionist" — doesn't contain "FusionCalling" or "voice") is the cheapest fix.

### 5.6 Minor / strategic gaps
- **i18n:** `alternativas a synthflow` (40 @ 69.9, Spanish), `robot calling ia` + affiliation variant (6, ES/FR), `pstn-liittymä` (FI), `ia` (1 @ pos 1), `iba pa` (TL). No non-English content at all.
- **AI-Overview long-tail (GEO):** the site already gets cited for question-style queries — "how is call audio typically encrypted…" @ 10.9, "does 2gocloud support voice recognition for utility engineers?" (71 @ 53.4), "what voice ai tools support interruption handling…" (3 @ 58), "how do voice agents help businesses handle peak call volumes" (1 @ 99), "types of menu modifiers voice ai must handle" (3 @ 58). These are generative-engine citations more than classic rankings — current FAQ/schema setup is working; expanding Q&A depth on high-priority pages compounds it.
- **Human + AI blending:** "ai platform for blending human and automated calls" (11 @ 42.8) — only `glossary/human-handoff` exists.
- **Post-call automation** (21 @ 65.0) — no content; natural sub-section of `/ai-phone-call-automation`.
- **Call analytics** (~47 impr @ 39–97): only `glossary/call-analytics` (53 impr @ 69.9). No real content despite "call analytics" being in the brand name.
- **Not worth pursuing:** `retellai logo` / `retell ai logo` (24 impr) — logo-asset queries for Retell, not your users.

---

## 6. Supporting evidence from other GSC dimensions

- **Search appearance:** Review snippet: 1,243 impr @ pos 36.8, 1 click (0.08%) — your star ratings appear on page-3+ comparison SERPs only. Product snippets: 30 impr, 1 click.
- **Devices:** Desktop 8,687 impr @ pos 40.0 (0.47% CTR) vs Mobile 2,256 impr @ pos 17.2 (1.60% CTR). Mobile visibility is 2.3× better — the audience finding you is mobile; page-1 desktop presence is the deficit.
- **Geo:** US = 6,260 impr (57%) @ 40.7 but only 17 clicks (0.27% CTR). Highest-CTR markets are small (Algeria 15.8%, Peru 9.5%, Chile 28.6%).
- **Trend (Chart.csv):** impressions grew from ~3–10/day (Sep 2025) to 100–230/day (Jul–Aug 2026) while average position drifted from ~8 to ~35–50. Google is showing the site for far more queries, but almost all of the new visibility is page 3+. Visibility is compounding; relevance per query is not keeping up.

---

## 7. Priority matrix (where the report points, decisions yours)

| Priority | Action (for your decision — not executed) | Recoverable impressions | Effort |
|---|---|---|---|
| P0 | Rebuild `/whitelabel` coverage: sections + copy for the 47 white-label query phrasings (voice agent software, AI receptionist, answering service, reseller, cold calling, per-minute pricing vs sub-accounts) | ~1,175 | Medium |
| P0 | Fix `/whitelabel/vapi`, `/whitelabel/retell`, `/whitelabel/elevenlabs` indexing (0 impressions despite existing + sitemapped) | compounding | Low |
| P1 | Restructure `/alternative/vapi`, `synthflow`, `bland-ai` into listicle-style "alternatives + who it's for + pricing table" format (matches winning SERP) | ~1,140 | Medium |
| P1 | Add `/alternative/birdcall` (+ voiceflow, voicestamp, voicelate, famulor, verloop, drop-cowboy via existing comparisons engine) | ~110 | Low |
| P1 | Split `/ai-phone-call-automation` intent: inbound / outbound / post-call / IVR sections; blog supports "what is ai calling" | ~1,071 | Medium |
| P2 | Fix CTR leaks: `glossary/hotword-detection` (112 impr @ 15.6, 0 clicks) and the encryption query @ 10.9 (title/snippet rewrite) | ~160 | Low |
| P2 | Restaurants + ecommerce vertical pages: rewrite for "ai voice agent for restaurants/ecommerce" (currently pos 73–92) | ~150 | Medium |
| P2 | Decide on WebRTC services page (216 impr, pure glossary today) | ~216 | High |
| P3 | Voice API/CPaaS commercial page or blog comparison | ~70 | Medium |
| P3 | Homepage title to include brand + "voice" for "fusion *" SERP defense | ~700 (defensive) | Trivial |

---

## 8. Method notes & caveats

1. Query-level totals (6,709 impr) are lower than dimension totals (10,995) — GSC anonymizes rare queries; cluster shares are computed on the visible 486 queries only.
2. "fusion *" classification includes ambiguous third-party brands (VoiceVault Fusion, Fusion Connect); those impressions are not realistically winnable — flagged, not counted as opportunity.
3. SERP verification was live for "vapi alternative" and "white label ai voice agent platform" (2026-09-06). The "fusion voice" SERP check timed out twice; §5.5 is based on GSC positions + known brand ambiguity, not a live SERP capture.
4. `/compare/*` legacy URLs: verified 301 → `/alternative/*` in `next.config.mjs`; no action needed.
5. Positions are 12-month averages; day-level variance is high (e.g., "hotword detection" spans 7–22).
