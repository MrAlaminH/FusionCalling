const fs = require("fs");
const path = require("path");
const SERVER = path.join(process.cwd(), ".next/server/app");
function files(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) files(f, a);
    else if (e.name.endsWith(".html")) a.push(f);
  }
  return a;
}
for (const f of files(SERVER)) {
  const html = fs.readFileSync(f, "utf8");
  let rel = path.relative(SERVER, f).replace(/\\/g, "/").replace(/\.html$/, "");
  if (rel === "index") rel = "/";
  else rel = "/" + rel;
  const ext = [...html.matchAll(/<a\s+[^>]*href="(https?:\/\/[^"]*)"/gi)]
    .map((m) => new URL(m[1]).hostname.replace(/^www\./, ""))
    .filter((h) => !h.includes("fusioncalling.com"));
  const hasFaq = /FAQPage/.test(html);
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = text.split(/\s+/).filter(Boolean).length;
  if (ext.length === 0 || words < 240) {
    console.log(rel.padEnd(42), "extCites=" + ext.length, "words=" + words, "faq=" + hasFaq);
  }
}
