import { SITE_URL } from "@/lib/site-url";

/**
 * Canonical embedded YouTube videos. Single source of truth so the visible
 * embed (components/video-embed.tsx) and the VideoObject schema can't drift
 * apart the way hardcoded literals did elsewhere.
 */
export type EmbeddedVideo = {
  /** YouTube video id. */
  id: string;
  title: string;
  description: string;
  /** ISO 8601 date the video was published on YouTube. */
  uploadDate: string;
  /** ISO 8601 duration. */
  duration: string;
};

/** Agency-facing pitch: how resellers white-label the platform (Video A). */
export const AGENCY_WHITE_LABEL_VIDEO: EmbeddedVideo = {
  id: "RIUlY6pra8I",
  title: "How Agencies Resell White-Label AI Receptionist with Fusion Calling",
  description:
    "How Fusion Calling lets agencies white-label AI voice automation: a branded client portal with your logo, colors, and custom domain; Vapi, Retell, and ElevenLabs engines under your brand; wholesale calling rates from $0.09/min; and full control over your client pricing — launched in 24 hours.",
  uploadDate: "2026-11-12",
  duration: "PT1M52S",
};

/** End-user product walkthrough: build, test, and deploy an AI agent (Video B). */
export const PRODUCT_TUTORIAL_VIDEO: EmbeddedVideo = {
  id: "CARCOmiZHMk",
  title: "How to Use Fusion Calling: Complete AI Receptionist Tutorial",
  description:
    "Step-by-step tutorial: build and customize an AI voice agent with no coding, set up 24/7 inbound call handling and automated calendar booking, launch outbound AI calling campaigns, connect your CRM, Google Calendar, GoHighLevel, and 2,200+ apps, and monitor live call transcripts, recordings, and SMS follow-ups.",
  uploadDate: "2026-11-12",
  duration: "PT10M57S",
};

/**
 * VideoObject schema node for a page that embeds the video. Spread into the
 * page's existing @graph (or wrap in a graph of its own).
 */
export function videoObjectSchema(video: EmbeddedVideo, pagePath: string) {
  return {
    "@type": "VideoObject",
    "@id": `${SITE_URL}${pagePath}#video`,
    name: video.title,
    description: video.description,
    uploadDate: video.uploadDate,
    duration: video.duration,
    thumbnailUrl: [
      `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    ],
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}
