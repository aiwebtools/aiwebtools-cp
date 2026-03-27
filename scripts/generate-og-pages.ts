/**
 * Post-build script: Generates static HTML pages with tool-specific OG meta tags
 * for social media preview when sharing individual tool pages.
 * 
 * This runs AFTER vite build and creates lightweight HTML files in /dist
 * that social media crawlers can read without executing JavaScript.
 * 
 * Usage: node scripts/generate-og-pages.js (run after build)
 */

import fs from 'fs';
import path from 'path';

// Replicate generateToolSlug from src/utils/urlGenerator.ts
const generateToolSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 50);
};

interface ToolEntry {
  title: string;
  description: string;
  imageUrl?: string;
  directUrl?: string;
  category?: string;
  tags?: string[];
}

const SITE_URL = 'https://aitools.studio';
const SITE_NAME = 'AIWEBTOOLS.AI - #1 AI Tools Directory';
const DEFAULT_IMAGE = '/social-thumbnail.png';

function generateOGHtml(tool: ToolEntry, slug: string): string {
  const pageUrl = `${SITE_URL}/${slug}`;
  const title = `${tool.title} - AI Web Tools Directory | AIWEBTOOLS.AI`;
  const description = tool.description.substring(0, 160);
  
  // Determine the best image URL
  let imageUrl = DEFAULT_IMAGE;
  if (tool.imageUrl) {
    // If it's a relative path (local asset), make it absolute
    if (tool.imageUrl.startsWith('/') || tool.imageUrl.startsWith('./')) {
      imageUrl = `${SITE_URL}${tool.imageUrl.startsWith('.') ? tool.imageUrl.slice(1) : tool.imageUrl}`;
    } else if (tool.imageUrl.startsWith('http')) {
      imageUrl = tool.imageUrl;
    } else {
      // Likely a bundled asset import path - use default
      imageUrl = `${SITE_URL}/${DEFAULT_IMAGE}`;
    }
  }

  return `<!DOCTYPE html>
<html lang="en" prefix="og: https://ogp.me/ns#">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <title>${escapeHtml(title)}</title>
  <meta name="title" content="${escapeHtml(title)}">
  <meta name="description" content="${escapeHtml(description)}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:image" content="${escapeHtml(imageUrl)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${escapeHtml(tool.title)} - AI Tool">
  <meta property="og:site_name" content="${SITE_NAME}">
  <meta property="og:locale" content="en_US">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${pageUrl}">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${escapeHtml(imageUrl)}">
  <meta name="twitter:image:alt" content="${escapeHtml(tool.title)} - AI Tool">
  <meta name="twitter:site" content="@aiwebtools">
  <meta name="twitter:creator" content="@aiwebtools">
  
  <!-- LinkedIn -->
  <meta property="article:author" content="AI WEB TOOLS LLC">
  <meta property="article:publisher" content="https://ai-webtools.com">
  
  <!-- Canonical -->
  <link rel="canonical" href="${pageUrl}">
  
  <!-- Robots -->
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  ${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.title,
    "description": tool.description,
    "url": pageUrl,
    "applicationCategory": tool.category || "AI Tool",
    "operatingSystem": "Web Browser",
    "publisher": {
      "@type": "Organization",
      "name": "AI WEB TOOLS",
      "url": SITE_URL
    }
  }, null, 2)}
  </script>
  
  <!-- Instant redirect to SPA for real users (crawlers don't execute JS) -->
  <script>window.location.replace("${SITE_URL}/${slug}");</script>
  <noscript>
    <meta http-equiv="refresh" content="0;url=${SITE_URL}/${slug}">
  </noscript>
</head>
<body>
  <h1>${escapeHtml(tool.title)}</h1>
  <p>${escapeHtml(tool.description)}</p>
  <p><a href="${SITE_URL}/${slug}">View ${escapeHtml(tool.title)} on AIWEBTOOLS.AI</a></p>
  <p><a href="${SITE_URL}">Browse all 2195+ AI Tools at AIWEBTOOLS.AI</a></p>
</body>
</html>`;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function main() {
  const distDir = path.resolve(process.cwd(), 'dist');
  
  if (!fs.existsSync(distDir)) {
    console.log('⚠️  No dist/ directory found. Run "npm run build" first.');
    process.exit(1);
  }

  // We need to dynamically import the tools data
  // Since this is a post-build script, we'll read from a generated manifest
  const manifestPath = path.join(distDir, 'og-manifest.json');
  
  if (!fs.existsSync(manifestPath)) {
    console.log('⚠️  No og-manifest.json found in dist/. The build plugin should generate this.');
    process.exit(1);
  }

  const tools: ToolEntry[] = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  
  // Track slugs for uniqueness
  const usedSlugs = new Set<string>();
  let generated = 0;

  for (const tool of tools) {
    let slug = generateToolSlug(tool.title);
    let counter = 1;
    let uniqueSlug = slug;
    
    while (usedSlugs.has(uniqueSlug)) {
      uniqueSlug = `${slug}-${counter}`;
      counter++;
    }
    usedSlugs.add(uniqueSlug);
    
    // Create directory for this tool
    const toolDir = path.join(distDir, uniqueSlug);
    if (!fs.existsSync(toolDir)) {
      fs.mkdirSync(toolDir, { recursive: true });
    }

    // Write the OG HTML file
    const html = generateOGHtml(tool, uniqueSlug);
    fs.writeFileSync(path.join(toolDir, 'index.html'), html, 'utf-8');
    generated++;
  }

  console.log(`✅ Generated ${generated} OG preview pages for social sharing.`);
}

main().catch(console.error);
