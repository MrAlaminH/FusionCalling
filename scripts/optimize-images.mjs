// scripts/optimize-images.mjs
// Batch-optimizes raster images in /public in place (git is the rollback).
// - Resizes each image to the max dimension it can ever be displayed at.
// - Recompresses JPEG (mozjpeg) and PNG (palette quantization + max level).
// - Skips SVGs, icons already < 30 KB, and outputs that aren't smaller.
//
// Run:  node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import { join, extname, relative } from "node:path";

const ROOT = "public";

// Per-path max width (px). Keys are substrings matched against the file path.
// Anything not matched falls back to DEFAULT.
const DEFAULT_MAX = 1920;
const RULES = [
  { match: "testimonial", max: 480 }, // displayed at 40px
  { match: "tools", max: 128 }, // displayed at ~60px
  { match: "avatars", max: 0 }, // SVG only, skip
  { match: "logo.png", max: 512 }, // schema declares 512x512
  { match: "cardImage.png", max: 1200 },
  { match: "og.png", max: 1200 },
  { match: "hero-thambnail.png", max: 1600 },
  { match: "thumbnail.png", max: 1200 },
  { match: "feature2.png", max: 1600 },
  { match: "feature3.jpeg", max: 1600 },
  { match: "feature/feature1.png", max: 1200 },
  { match: "feature/feature3.png", max: 1200 },
  { match: "agent.jpg", max: 1200 },
  { match: "agent2.jpg", max: 1200 },
  { match: "alternative", max: 1200 },
  { match: "ex1.png", max: 1600 },
  { match: "ex2.png", max: 1600 },
];

const SKIP_UNDER_KB = 30; // already tiny (icons)

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

function ruleFor(relPath) {
  const norm = relPath.replace(/\\/g, "/");
  for (const r of RULES) if (norm.includes(r.match)) return r;
  return { max: DEFAULT_MAX };
}

async function optimize(file) {
  const ext = extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) return null;
  const rel = relative(ROOT, file).replace(/\\/g, "/");
  const before = (await stat(file)).size;
  if (before < SKIP_UNDER_KB * 1024) return { rel, skipped: "tiny", before };
  const rule = ruleFor(file);
  if (rule.max === 0) return { rel, skipped: "rule", before };

  const buf = await readFile(file);
  let img = sharp(buf, { failOn: "none" }).rotate(); // honor EXIF orientation
  const meta = await img.metadata();
  if (meta.width && meta.width > rule.max) {
    img = img.resize({ width: rule.max, withoutEnlargement: true });
  }

  const isJpeg = ext === ".jpg" || ext === ".jpeg";
  const out = isJpeg
    ? await img.jpeg({ quality: 78, mozjpeg: true }).toBuffer()
    : await img
        .png({
          compressionLevel: 9,
          palette: true,
          colors: 256,
          quality: 78,
          effort: 10,
        })
        .toBuffer();

  if (out.length >= before) return { rel, skipped: "no-gain", before };
  await writeFile(file, out);
  return { rel, before, after: out.length };
}

const files = (await walk(ROOT)).sort();
let totalBefore = 0;
let totalAfter = 0;
const rows = [];
for (const f of files) {
  const r = await optimize(f);
  if (!r) continue;
  if (r.after) {
    totalBefore += r.before;
    totalAfter += r.after;
    rows.push({
      file: r.rel,
      beforeKB: Math.round(r.before / 1024),
      afterKB: Math.round(r.after / 1024),
      saved: Math.round((1 - r.after / r.before) * 100) + "%",
    });
  }
}

rows
  .sort((a, b) => b.beforeKB - a.beforeKB)
  .forEach((r) =>
    console.log(
      `${String(r.beforeKB).padStart(6)} -> ${String(r.afterKB).padStart(6)} KB  (${r.saved.padStart(4)})  ${r.file}`,
    ),
  );

console.log("");
console.log(
  `Optimized ${rows.length} images: ${(totalBefore / 1024 / 1024).toFixed(2)} MB -> ${(totalAfter / 1024 / 1024).toFixed(2)} MB  (${Math.round((1 - totalAfter / totalBefore) * 100)}% smaller)`,
);
