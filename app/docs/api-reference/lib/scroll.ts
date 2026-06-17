// Client-side smooth-scroll helper with sticky-header offset.
export function scrollToId(id: string, offset = 96) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: "smooth" });
  if (window.location.hash !== `#${id}`) {
    window.history.replaceState(null, "", `#${id}`);
  }
}

export function buildPermalink(id: string): string {
  if (typeof window === "undefined") return `#${id}`;
  return `${window.location.origin}${window.location.pathname}#${id}`;
}
