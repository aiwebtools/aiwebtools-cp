/**
 * Builds public/search-catalog.json (the static catalog fetched by the search worker).
 * Row shape must stay in sync with `keys` in public/global-search-worker.js:
 * [title, category, tags, directUrl, imageUrl, videoUrl, emoji, color, rating, totalVotes, isFree, description]
 *
 * Run: node scripts/build-search-catalog.mjs
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const full = JSON.parse(fs.readFileSync(path.join(root, "src/data/generated/searchCatalog.json"), "utf8"));
const compact = JSON.parse(fs.readFileSync(path.join(root, "src/data/generated/searchCatalogCompact.json"), "utf8"));

const byTitle = new Map();
for (const tool of full) {
  if (!byTitle.has(tool.title)) byTitle.set(tool.title, tool);
}

const rows = compact.map((row) => {
  const tool = byTitle.get(row[0]);
  const description = tool && tool.description ? String(tool.description).slice(0, 220) : null;
  return [...row, description];
});

const target = path.join(root, "public/search-catalog.json");
fs.writeFileSync(target, JSON.stringify(rows));
console.log(`search-catalog.json: ${rows.length} rows, ${(fs.statSync(target).size / 1e6).toFixed(2)} MB`);
