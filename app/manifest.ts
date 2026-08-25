import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fusion Calling — AI Phone Call Automation",
    short_name: "Fusion Calling",
    description:
      "Automate inbound & outbound calls with human-like AI voice agents. Book appointments, qualify leads, and scale your phone operations 24/7.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#ff7d00",
    icons: [
      {
        src: "/logo.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "any",
      },
    ],
  };
}
