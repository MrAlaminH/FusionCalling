// scripts/analyze.mjs
// Runs `next build` with bundle analysis enabled (no cross-env dependency).
// Usage: npm run analyze
import { execSync } from "node:child_process";

process.env.ANALYZE = "true";
execSync("next build", { stdio: "inherit", env: process.env });
