/**
 * Vite plugin that generates an og-manifest.json during build.
 * This manifest contains minimal tool data (title, description, image, category)
 * needed by the post-build OG page generator script.
 * 
 * The manifest is written to dist/og-manifest.json and consumed by
 * scripts/generate-og-pages.ts to create static HTML files with
 * tool-specific OG meta tags for social media previews.
 */

import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

export function viteOGManifest(): Plugin {
  return {
    name: 'vite-og-manifest',
    apply: 'build',
    
    // Use generateBundle to inject a virtual module that exports tool data
    // Instead, we use a simpler approach: write a manifest from the source data
    closeBundle() {
      console.log('📋 OG Manifest: Generating tool manifest for social sharing...');
      
      try {
        // Read all tool source files to extract tool data
        const toolsDir = path.resolve(process.cwd(), 'src/data/tools');
        const toolEntries: Array<{
          title: string;
          description: string;
          imageUrl?: string;
          category?: string;
        }> = [];
        
        // Recursively find all .ts files in the tools directory
        const findToolFiles = (dir: string): string[] => {
          const files: string[] = [];
          if (!fs.existsSync(dir)) return files;
          
          for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
              files.push(...findToolFiles(fullPath));
            } else if (entry.name.endsWith('.ts') && entry.name !== 'index.ts') {
              files.push(fullPath);
            }
          }
          return files;
        };

        const toolFiles = findToolFiles(toolsDir);
        
        for (const filePath of toolFiles) {
          const content = fs.readFileSync(filePath, 'utf-8');
          
          // Extract tool objects using regex - look for title and description fields
          const toolRegex = /\{\s*(?:[^{}]*?)title:\s*["'`]([^"'`]+)["'`]\s*,\s*(?:[^{}]*?)description:\s*["'`]([^"'`]+)["'`]/gs;
          
          let match;
          while ((match = toolRegex.exec(content)) !== null) {
            const title = match[1];
            const description = match[2];
            
            // Try to find category
            const categoryMatch = content.match(new RegExp(
              title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + 
              `[\\s\\S]{0,500}category:\\s*["'\`]([^"'\`]+)["'\`]`
            ));
            
            toolEntries.push({
              title,
              description: description.substring(0, 300),
              category: categoryMatch ? categoryMatch[1] : 'AI Tool',
            });
          }
        }

        // Write manifest
        const distDir = path.resolve(process.cwd(), 'dist');
        if (!fs.existsSync(distDir)) {
          fs.mkdirSync(distDir, { recursive: true });
        }
        
        fs.writeFileSync(
          path.join(distDir, 'og-manifest.json'),
          JSON.stringify(toolEntries, null, 2),
          'utf-8'
        );
        
        console.log(`📋 OG Manifest: Found ${toolEntries.length} tools.`);
        
        // Now generate the OG pages directly
        generateOGPages(toolEntries, distDir);
        
      } catch (error) {
        console.error('⚠️ OG Manifest generation error:', error);
        // Non-fatal - build continues without OG pages
      }
    }
  };
}

function generateToolSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 50);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function generateOGPages(
  tools: Array<{ title: string; description: string; category?: string }>,
  distDir: string
) {
  const SITE_URL = 'https://aitools.studio';
  const SITE_NAME = 'AIWEBTOOLS.AI - #1 AI Tools Directory';
  const DEFAULT_IMAGE = `${SITE_URL}/social-thumbnail.png`;
  
  const usedSlugs = new Set<string>();
  let generated = 0;

  for (const tool of tools) {
    let slug = generateToolSlug(tool.title);
    if (!slug) continue;
    
    let uniqueSlug = slug;
    let counter = 1;
    while (usedSlugs.has(uniqueSlug)) {
      uniqueSlug = `${slug}-${counter}`;
      counter++;
    }
    usedSlugs.add(uniqueSlug);

    const toolDir = path.join(distDir, uniqueSlug);
    
    // Don't overwrite if SPA already created this path
    const indexPath = path.join(toolDir, 'index.html');
    if (fs.existsSync(indexPath)) {
      // Read existing and inject OG tags if missing
      continue;
    }

    fs.mkdirSync(toolDir, { recursive: true });

    const pageUrl = `${SITE_URL}/${uniqueSlug}`;
    const title = `${tool.title} - AI Web Tools | AIWEBTOOLS.AI`;
    const desc = tool.description.substring(0, 160);

    const html = `<!DOCTYPE html>
<html lang="en" prefix="og: https://ogp.me/ns#">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(desc)}">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="${pageUrl}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(desc)}">
<meta property="og:image" content="${DEFAULT_IMAGE}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${escapeHtml(tool.title)}">
<meta property="og:site_name" content="${SITE_NAME}">
<meta property="og:locale" content="en_US">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="${pageUrl}">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(desc)}">
<meta name="twitter:image" content="${DEFAULT_IMAGE}">
<meta name="twitter:site" content="@aiwebtools">

<link rel="canonical" href="${pageUrl}">
<meta name="robots" content="index,follow,max-image-preview:large">

<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: tool.title,
  description: tool.description.substring(0, 300),
  url: pageUrl,
  applicationCategory: tool.category || "AI Tool",
  operatingSystem: "Web Browser",
  publisher: { "@type": "Organization", name: "AI WEB TOOLS", url: SITE_URL }
})}
</script>

<script>window.location.replace("/${uniqueSlug}");</script>
<noscript><meta http-equiv="refresh" content="0;url=/${uniqueSlug}"></noscript>
</head>
<body>
<h1>${escapeHtml(tool.title)}</h1>
<p>${escapeHtml(tool.description.substring(0, 300))}</p>
<a href="${pageUrl}">View on AIWEBTOOLS.AI</a>
</body>
</html>`;

    fs.writeFileSync(indexPath, html, 'utf-8');
    generated++;
  }

  console.log(`✅ OG Pages: Generated ${generated} social sharing preview pages.`);
}
