// Dumps the OpenAPI spec (generated from endpoints.ts) to public/openapi.json.
// Run with:  npm run openapi:gen   (uses npx tsx — auto-installs on first run)
import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { generateOpenAPI } from "../app/docs/api-reference/lib/openapi";

const doc = generateOpenAPI();
const outPath = resolve(process.cwd(), "public", "openapi.json");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify(doc, null, 2) + "\n", "utf8");

const pathCount = Object.keys(doc.paths ?? {}).length;
console.log(`\u2713 OpenAPI spec written to ${outPath} (${pathCount} paths)`);
