// Per-page content-change dates (ISO yyyy-mm-dd). Single source for the
// sitemap's lastmod and each page's JSON-LD/OG dateModified, so the two
// can't drift (the 2026-09-24 audit flagged exactly that). Pages not listed
// fall back to CONTENT_LAST_UPDATED in lib/site-url.ts — only add an entry
// here when a page's content changed later than that global date.
export const PAGE_UPDATED: Record<string, string> = {
  "/ai-phone-call-receptionist": "2026-09-24",
  "/ai-receptionist-for-small-business": "2026-09-24",
  "/ai-phone-call-automation/after-hours-answering": "2026-09-24",
  // 2026-10-06 GSC-driven content upgrades (list-intent sections, retargets)
  "/alternative": "2026-10-06",
  "/alternative/chatdash": "2026-10-06",
  "/alternative/vapify": "2026-10-06",
  "/alternative/voicerr": "2026-10-06",
  "/alternative/thinkrr": "2026-10-06",
  "/alternative/verloop": "2026-10-06",
  "/alternative/drop-cowboy": "2026-10-06",
  // 2026-10-06: ranked alternatives list added to every remaining comparison
  // page (vapi already carried one from the previous commit)
  "/alternative/voiceaiwrapper": "2026-10-06",
  "/alternative/air-ai": "2026-10-06",
  "/alternative/retell": "2026-10-06",
  "/alternative/elevenlabs": "2026-10-06",
  "/alternative/gohighlevel": "2026-10-06",
  "/alternative/aioncalls": "2026-10-06",
  "/alternative/birdcall": "2026-10-06",
  "/alternative/voiceflow": "2026-10-06",
  "/alternative/voicestamp": "2026-10-06",
  "/alternative/voicelate": "2026-10-06",
  "/alternative/famulor": "2026-10-06",
  "/industries/ai-voice-for-veterinary": "2026-10-06",
  "/ai-phone-call-automation": "2026-10-06",
  // New linkable asset: AI receptionist pricing benchmark (2026-10-06)
  "/ai-receptionist-pricing": "2026-10-06",
  // GHL sub-account deployment section (title/meta unchanged — freeze holds)
  "/whitelabel/gohighlevel": "2026-10-06",
};
