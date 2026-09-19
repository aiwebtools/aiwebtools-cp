/**
 * PRE-RENDER ("static shell") GENERATOR
 * -----------------------------------------------------------------------------
 * Search engines were receiving an empty <div id="root"> for all 6,000+ routes,
 * so almost nothing was indexable. This script runs AFTER `vite build` and
 * writes a real, lean HTML document for every public route into dist/, each one
 * containing:
 *
 *   - per-page <title>, meta description, canonical, OG/Twitter tags
 *   - JSON-LD structured data
 *   - genuine visible content (headings, copy, links, image)
 *   - internal links so crawlers can walk the whole directory
 *
 * The normal SPA bundle is still loaded, so humans get the full app; the static
 * markup is simply what the crawler (and the very first paint) sees.
 *
 * Nothing is removed from the database and no route changes - this only ADDS
 * crawlable HTML files alongside the existing SPA fallback.
 */
import fs from "fs";
import path from "path";
import { allTools } from "../src/data/toolsData";
import { generateToolSlug } from "../src/utils/urlGenerator";
import { getSpotlights } from "../src/data/spotlights";
import { blogPosts } from "../src/data/blogPostContent";
import { mainCategories } from "../src/utils/mainCategoryMapping";

const BASE_URL = "https://aiwebtools.app";
const DIST = path.resolve(process.cwd(), "dist");
const SOURCE_HTML = path.join(DIST, "index.html");

if (!fs.existsSync(SOURCE_HTML)) {
  console.warn("⚠️  prerender: dist/index.html not found - skipping");
  process.exit(0);
}

const builtHtml = fs.readFileSync(SOURCE_HTML, "utf-8");

// ---------------------------------------------------------------------------
// Extract only what every page genuinely needs from the built index.html:
// the hashed asset tags plus the small inline boot/analytics scripts.
// (The 50KB matrix boot-loader markup is intentionally left out of the
// pre-rendered shells so crawlers see the real content, not an overlay.)
// ---------------------------------------------------------------------------
const assetTags = (builtHtml.match(
  /<(?:script|link)\b[^>]*(?:src|href)="\/assets\/[^"]+"[^>]*>(?:<\/script>)?/g
) || []).join("\n    ");

const inlineScripts = (builtHtml.match(/<script>[\s\S]*?<\/script>/g) || [])
  // Keep only the small analytics/ads bootstraps; the large inline boot
  // watchdog belongs to the animated loader that these lean shells skip.
  .filter((s) => /googletagmanager|adsbygoogle/.test(s) && s.length < 4000)
  .join("\n    ");

const gptEngTag = (builtHtml.match(/<script[^>]*gptengineer\.js[^>]*><\/script>/) || [""])[0];

const esc = (value: unknown) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const clean = (value?: string) => (value || "").replace(/\s+/g, " ").trim();

const truncate = (value: string, max: number) =>
  value.length <= max ? value : `${value.slice(0, max - 1).trimEnd()}…`;

interface PageInput {
  route: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown>;
  body: string;
}

const CRITICAL_CSS = `
  body{margin:0;background:#030712;color:#e8ffe8;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;-webkit-font-smoothing:antialiased}
  #root{min-height:100vh;background:#030712}
  .pr{max-width:1040px;margin:0 auto;padding:28px 20px 64px}
  .pr a{color:#4ade80;text-decoration:none}
  .pr h1{font-size:clamp(1.6rem,4vw,2.6rem);line-height:1.15;margin:.2em 0 .3em;color:#7CFFB2}
  .pr h2{font-size:clamp(1.1rem,2.4vw,1.5rem);margin:1.6em 0 .4em;color:#9df5c0}
  .pr p{line-height:1.7;color:#cfe9d6;max-width:72ch}
  .pr img{max-width:100%;height:auto;border-radius:12px;border:1px solid rgba(0,255,65,.25)}
  .pr ul{line-height:1.9;padding-left:1.1rem}
  .pr nav a{margin-right:.8rem;font-size:.9rem}
  .pr .meta{color:#79a98a;font-size:.86rem}
`;

const renderPage = (page: PageInput) => {
  const canonical = `${BASE_URL}${page.route === "/" ? "/" : page.route}`;
  const image = page.image || `${BASE_URL}/og-default.jpg`;
  const title = truncate(clean(page.title), 70);
  const description = truncate(clean(page.description), 180);

  return `<!doctype html>
<html lang="en" prefix="og: https://ogp.me/ns#">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${esc(canonical)}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
    <meta property="og:type" content="${page.type || "website"}" />
    <meta property="og:site_name" content="AI Web Tools" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${esc(canonical)}" />
    <meta property="og:image" content="${esc(image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@aiwebtools" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${esc(image)}" />
    <link rel="icon" type="image/png" href="/favicon-192.png" />
    <meta name="theme-color" content="#0891b2" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://huupailptzvcykyqdkar.supabase.co" crossorigin />
    <style>${CRITICAL_CSS}</style>
${page.jsonLd ? `    <script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script>` : ""}
    ${inlineScripts}
    ${assetTags}
  </head>
  <body>
    <div id="root"><main class="pr">${page.body}</main></div>
    ${gptEngTag}
  </body>
</html>
`;
};

const writePage = (page: PageInput) => {
  const relative = page.route === "/" ? "index.html" : path.join(page.route.replace(/^\//, ""), "index.html");
  const outPath = path.join(DIST, relative);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, renderPage(page), "utf-8");
};

const siteNav = `<nav class="meta"><a href="/">AI Web Tools</a> · <a href="/ai-tools">All AI Tools</a> · <a href="/spotlights">Tool Spotlights</a> · <a href="/rankings">Rankings</a> · <a href="/blog">Blog</a></nav>`;

// ---------------------------------------------------------------------------
// 1. Tool pages
// ---------------------------------------------------------------------------
const seen = new Set<string>();
const toolEntries: Array<{ slug: string; tool: (typeof allTools)[number] }> = [];
for (const tool of allTools) {
  if (!tool?.title) continue;
  const slug = generateToolSlug(tool.title);
  if (!slug || seen.has(slug)) continue;
  seen.add(slug);
  toolEntries.push({ slug, tool });
}

const byCategory = new Map<string, Array<{ slug: string; title: string }>>();
for (const { slug, tool } of toolEntries) {
  const category = clean(tool.category) || "AI Tools";
  if (!byCategory.has(category)) byCategory.set(category, []);
  byCategory.get(category)!.push({ slug, title: tool.title });
}

let count = 0;
for (const { slug, tool } of toolEntries) {
  const category = clean(tool.category) || "AI Tools";
  const description = clean(tool.description) || `${tool.title} on the AI Web Tools directory.`;
  const siblings = (byCategory.get(category) || []).filter((s) => s.slug !== slug).slice(0, 12);
  const tags = (tool.tags || []).slice(0, 12);

  const body = `
    ${siteNav}
    <h1>${esc(tool.title)}</h1>
    <p class="meta">Category: <a href="/category/${encodeURIComponent(category)}">${esc(category)}</a>${
      tool.isFree ? " · Free to use" : ""
    }</p>
    ${tool.imageUrl ? `<p><img src="${esc(tool.imageUrl)}" alt="${esc(tool.title)} — AI tool listed on AI Web Tools" loading="lazy" width="1200" height="675" /></p>` : ""}
    ${tool.tagline ? `<p><strong>${esc(clean(tool.tagline))}</strong></p>` : ""}
    <p>${esc(description)}</p>
    ${tool.directUrl ? `<p><a href="${esc(tool.directUrl)}" rel="nofollow noopener">Open ${esc(tool.title)} →</a></p>` : ""}
    ${tags.length ? `<h2>Tags</h2><p>${tags.map((t) => esc(t)).join(" · ")}</p>` : ""}
    <h2>Similar AI tools in ${esc(category)}</h2>
    <ul>${siblings.map((s) => `<li><a href="/${s.slug}">${esc(s.title)}</a></li>`).join("")}</ul>
  `;

  writePage({
    route: `/${slug}`,
    title: `${tool.title} — ${category} AI Tool | AI Web Tools`,
    description,
    image: tool.imageUrl,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: tool.title,
      description,
      applicationCategory: category,
      url: `${BASE_URL}/${slug}`,
      ...(tool.imageUrl ? { image: tool.imageUrl } : {}),
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    body,
  });
  count += 1;
}

// ---------------------------------------------------------------------------
// 2. Spotlight write-ups (long-form back pages)
// ---------------------------------------------------------------------------
const spotlights = getSpotlights();
for (const s of spotlights) {
  const sections = s.sections
    .map(
      (section) =>
        `<h2>${esc(section.heading)}</h2><p>${esc(clean(section.body))}</p>${
          section.bullets?.length
            ? `<ul>${section.bullets.map((b) => `<li>${esc(clean(b))}</li>`).join("")}</ul>`
            : ""
        }`
    )
    .join("");

  const faq = s.faq
    .map((item) => `<h3>${esc(item.q)}</h3><p>${esc(clean(item.a))}</p>`)
    .join("");

  const body = `
    ${siteNav}
    <h1>${esc(s.title)}</h1>
    <p class="meta">${esc(s.category)} · ${esc(s.readTime)} read · Published ${esc(s.publishDate)}</p>
    ${s.imageUrl ? `<p><img src="${esc(s.imageUrl)}" alt="${esc(s.toolTitle)} — AI Web Tools spotlight" loading="lazy" width="1200" height="675" /></p>` : ""}
    <p><strong>${esc(clean(s.answer))}</strong></p>
    <p>${esc(clean(s.intro))}</p>
    <h2>Quick facts</h2>
    <ul>${s.quickFacts.map((f) => `<li><strong>${esc(f.label)}:</strong> ${esc(f.value)}</li>`).join("")}</ul>
    <p><a href="/${s.toolSlug}">Try ${esc(s.toolTitle)} on its tool page →</a></p>
    ${sections}
    <h2>Frequently asked questions</h2>
    ${faq}
    <p><a href="/category/${encodeURIComponent(s.category)}">More ${esc(s.category)} AI tools →</a></p>
  `;

  writePage({
    route: `/spotlight/${s.slug}`,
    title: s.metaTitle,
    description: s.metaDescription,
    image: s.imageUrl,
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline: s.title,
          description: s.metaDescription,
          datePublished: s.publishDate,
          author: { "@type": "Organization", name: "AI Web Tools" },
          publisher: { "@type": "Organization", name: "AI Web Tools" },
          mainEntityOfPage: `${BASE_URL}/spotlight/${s.slug}`,
          ...(s.imageUrl ? { image: s.imageUrl } : {}),
        },
        {
          "@type": "FAQPage",
          mainEntity: s.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: clean(item.a) },
          })),
        },
      ],
    },
    body,
  });
  count += 1;
}

// ---------------------------------------------------------------------------
// 3. Blog posts
// ---------------------------------------------------------------------------
for (const post of blogPosts) {
  if (!post.slug) continue;
  const text = clean(String(post.content || "")).slice(0, 6000);
  const body = `
    ${siteNav}
    <h1>${esc(post.title)}</h1>
    <p class="meta">${esc(post.category)} · ${esc(post.readTime)} read · ${esc(post.publishDate)}</p>
    <p><strong>${esc(post.excerpt)}</strong></p>
    <p>${esc(text)}</p>
    <p><a href="/blog">All AI Web Tools articles →</a></p>
  `;
  writePage({
    route: `/blog/${post.slug}`,
    title: post.title,
    description: post.excerpt,
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishDate,
      author: { "@type": "Organization", name: "AI Web Tools" },
      mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
    },
    body,
  });
  count += 1;
}

// ---------------------------------------------------------------------------
// 4. Category pages
// ---------------------------------------------------------------------------
for (const [category, tools] of byCategory) {
  const listed = tools.slice(0, 120);
  const body = `
    ${siteNav}
    <h1>${esc(category)} AI Tools</h1>
    <p>Browse ${tools.length} ${esc(category)} AI tools in the AI Web Tools directory — free tools, custom GPTs, agents and assistants, updated continuously.</p>
    <ul>${listed.map((t) => `<li><a href="/${t.slug}">${esc(t.title)}</a></li>`).join("")}</ul>
    <p><a href="/ai-tools">Browse the full AI tools directory →</a></p>
  `;
  writePage({
    route: `/category/${encodeURIComponent(category)}`,
    title: `${category} AI Tools — ${tools.length} Tools | AI Web Tools`,
    description: `The best ${category} AI tools: ${listed
      .slice(0, 8)
      .map((t) => t.title)
      .join(", ")} and more.`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${category} AI Tools`,
      url: `${BASE_URL}/category/${encodeURIComponent(category)}`,
      numberOfItems: tools.length,
    },
    body,
  });
  count += 1;
}

for (const main of mainCategories) {
  const body = `
    ${siteNav}
    <h1>${esc(main.name)} AI Tools</h1>
    <p>${esc(clean((main as { description?: string }).description) || `Explore ${main.name} AI tools on AI Web Tools.`)}</p>
    <ul>${Array.from(byCategory.keys())
      .slice(0, 80)
      .map((c) => `<li><a href="/category/${encodeURIComponent(c)}">${esc(c)}</a></li>`)
      .join("")}</ul>
  `;
  writePage({
    route: `/main-category/${encodeURIComponent(main.name)}`,
    title: `${main.name} AI Tools | AI Web Tools`,
    description: `Discover ${main.name} AI tools, agents and custom GPTs in the AI Web Tools directory.`,
    body,
  });
  count += 1;
}

console.log(`✅ prerender: ${count} static HTML pages written into dist/`);
