/**
 * Generates public/sitemap.xml using real SEO-friendly slug URLs
 * (matches the routes rendered by ToolDetail.tsx / /:toolSlug).
 *
 * Run with: bunx vite-node scripts/generate-sitemap.ts
 */
import fs from "fs";
import path from "path";
import { allTools } from "../src/data/toolsData";
import { generateToolSlug } from "../src/utils/urlGenerator";

const BASE_URL = "https://aiwebtools.app";

const staticRoutes: Array<{ path: string; priority: string; changefreq: string }> = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/mtvai", priority: "0.9", changefreq: "weekly" },
  { path: "/best-ai-tools", priority: "0.9", changefreq: "weekly" },
  { path: "/free-ai-tools", priority: "0.9", changefreq: "weekly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
];

const used = new Set<string>();
const slugs: string[] = [];
for (const tool of allTools) {
  if (!tool?.title) continue;
  const slug = generateToolSlug(tool.title);
  if (!slug || used.has(slug)) continue;
  used.add(slug);
  slugs.push(slug);
}

const urls: string[] = [];
for (const r of staticRoutes) {
  urls.push(
    `  <url><loc>${BASE_URL}${r.path}</loc><changefreq>${r.changefreq}</changefreq><priority>${r.priority}</priority></url>`
  );
}
for (const slug of slugs) {
  urls.push(
    `  <url><loc>${BASE_URL}/${slug}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
  );
}

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.join("\n") +
  `\n</urlset>\n`;

const outPath = path.resolve(process.cwd(), "public/sitemap.xml");
fs.writeFileSync(outPath, xml, "utf-8");
console.log(`✅ sitemap.xml written with ${urls.length} URLs (${slugs.length} tool slugs)`);
