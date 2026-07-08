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
  const m = html.match(/<title>([^<]*)<\/title>/i);
  const t = m ? m[1] : "";
  if (t.length < 25 || t.length > 65) {
    console.log(rel.padEnd(45), "len=" + t.length, ":: " + t);
  }
}
