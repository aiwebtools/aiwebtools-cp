/**
 * Vite plugin that generates static HTML pages with tool-specific OG meta tags
 * for social media previews (Facebook, Twitter, LinkedIn, etc.).
 * 
 * Each tool gets its own static page with unique title, description, and image
 * so sharing a direct tool URL shows the correct preview thumbnail.
 */

import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

export function viteOGManifest(): Plugin {
  return {
    name: 'vite-og-manifest',
    apply: 'build',
    
    closeBundle() {
      console.log('📋 OG Manifest: Generating tool-specific social sharing pages...');
      
      try {
        const toolsDir = path.resolve(process.cwd(), 'src/data/tools');
        const toolEntries: Array<{
          title: string;
          description: string;
          imageUrl?: string;
          category?: string;
        }> = [];
        
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
          
          // Build a map of import variable names to their source paths
          const importMap: Record<string, string> = {};
          const importRegex = /import\s+(\w+)\s+from\s+["']([^"']+)["']/g;
          let importMatch;
          while ((importMatch = importRegex.exec(content)) !== null) {
            const varName = importMatch[1];
            const importPath = importMatch[2];
            // Only map asset imports
            if (importPath.includes('/assets/') || importPath.includes('lovable-uploads')) {
              importMap[varName] = importPath;
            }
          }
          
          // Faster tool extraction: search for title fields directly, then expand to the
          // nearest containing object block. This avoids a catastrophic full-file regex scan
          // across the entire tool corpus during production publish.
          const titleRegex = /title:\s*["'`]([^"'`]+)["'`]/g;

          let titleMatch;
          while ((titleMatch = titleRegex.exec(content)) !== null) {
            const title = titleMatch[1];
            const titleIndex = titleMatch.index;
            const blockStart = content.lastIndexOf('{', titleIndex);
            if (blockStart === -1) continue;

            let depth = 0;
            let blockEnd = -1;
            for (let i = blockStart; i < content.length; i++) {
              if (content[i] === '{') depth++;
              else if (content[i] === '}') {
                depth--;
                if (depth === 0) {
                  blockEnd = i;
                  break;
                }
              }
            }

            if (blockEnd === -1) continue;

            const block = content.substring(blockStart, blockEnd + 1);

            const descMatch = block.match(/description:\s*["'`]([^"'`]+)["'`]/);
            const description = descMatch ? descMatch[1] : '';

            const catMatch = block.match(/category:\s*["'`]([^"'`]+)["'`]/);
            const category = catMatch ? catMatch[1] : 'AI Tool';

            let imageUrl: string | undefined;
            const imageStringMatch = block.match(/imageUrl:\s*["'`]([^"'`]+)["'`]/);
            const imageVarMatch = block.match(/imageUrl:\s*(\w+)/);

            if (imageStringMatch) {
              imageUrl = imageStringMatch[1];
            } else if (imageVarMatch && importMap[imageVarMatch[1]]) {
              imageUrl = importMap[imageVarMatch[1]].replace('@/', '/src/');
            }

            toolEntries.push({
              title,
              description: description.substring(0, 300),
              imageUrl,
              category,
            });

            titleRegex.lastIndex = Math.max(titleRegex.lastIndex, blockEnd + 1);
          }
        }

        const dedupedToolEntries = Array.from(
          toolEntries.reduce((map, entry) => {
            const existing = map.get(entry.title);
            if (!existing) {
              map.set(entry.title, entry);
              return map;
            }

            if (!existing.imageUrl && entry.imageUrl) {
              map.set(entry.title, entry);
            }

            return map;
          }, new Map<string, { title: string; description: string; imageUrl?: string; category?: string }>())
          .values()
        );

        // Write manifest
        const distDir = path.resolve(process.cwd(), 'dist');
        if (!fs.existsSync(distDir)) {
          fs.mkdirSync(distDir, { recursive: true });
        }
        
        // Try to build a map of source asset paths to their hashed output filenames
        const assetMap: Record<string, string> = {};
        const assetsDir = path.join(distDir, 'assets');
        if (fs.existsSync(assetsDir)) {
          for (const file of fs.readdirSync(assetsDir)) {
            // Match patterns like "sora2-prompt-maker-hero-AbCdEf.jpg"
            const match = file.match(/^(.+?)-[a-zA-Z0-9]{6,12}\.(jpg|png|webp|jpeg|svg)$/);
            if (match) {
              assetMap[match[1]] = `/assets/${file}`;
            }
          }
        }
        
        fs.writeFileSync(
          path.join(distDir, 'og-manifest.json'),
          JSON.stringify(dedupedToolEntries, null, 2),
          'utf-8'
        );
        
        console.log(`📋 OG Manifest: Found ${dedupedToolEntries.length} tools.`);
        
        generateOGPages(dedupedToolEntries, distDir, assetMap);
        
      } catch (error) {
        console.error('⚠️ OG Manifest generation error:', error);
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
    .substring(0, 80);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function resolveImageUrl(
  imageUrl: string | undefined,
  assetMap: Record<string, string>,
  siteUrl: string,
  defaultImage: string
): string {
  if (!imageUrl) return defaultImage;
  
  // External URLs - use directly
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }
  
  // Lovable uploads - make absolute
  if (imageUrl.startsWith('/lovable-uploads/')) {
    return `${siteUrl}${imageUrl}`;
  }
  
  // Local asset imports - try to find hashed version in dist
  if (imageUrl.includes('/assets/tools/')) {
    const filename = imageUrl.split('/').pop() || '';
    const baseName = filename.replace(/\.(jpg|png|webp|jpeg|svg)$/, '');
    if (assetMap[baseName]) {
      return `${siteUrl}${assetMap[baseName]}`;
    }
  }
  
  return defaultImage;
}

function generateOGPages(
  tools: Array<{ title: string; description: string; imageUrl?: string; category?: string }>,
  distDir: string,
  assetMap: Record<string, string>
) {
  const SITE_URL = 'https://aitools.studio';
  const SITE_NAME = 'AIWEBTOOLS.AI - #1 AI Tools Directory';
  const DEFAULT_IMAGE = `${SITE_URL}/social-thumbnail.png`;
  
  const usedSlugs = new Set<string>();
  let generated = 0;
  let withCustomImage = 0;

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
    const indexPath = path.join(toolDir, 'index.html');
    if (fs.existsSync(indexPath)) continue;

    fs.mkdirSync(toolDir, { recursive: true });

    const pageUrl = `${SITE_URL}/${uniqueSlug}`;
    const title = `${tool.title} - AI Web Tools | AIWEBTOOLS.AI`;
    const desc = tool.description.substring(0, 160);
    const ogImage = resolveImageUrl(tool.imageUrl, assetMap, SITE_URL, DEFAULT_IMAGE);
    
    if (ogImage !== DEFAULT_IMAGE) withCustomImage++;

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
<meta property="og:image" content="${escapeHtml(ogImage)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${escapeHtml(tool.title)} - AI Tool">
<meta property="og:site_name" content="${SITE_NAME}">
<meta property="og:locale" content="en_US">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="${pageUrl}">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(desc)}">
<meta name="twitter:image" content="${escapeHtml(ogImage)}">
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
  image: ogImage,
  publisher: { "@type": "Organization", name: "AI WEB TOOLS LLC", url: SITE_URL }
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

  console.log(`✅ OG Pages: Generated ${generated} social sharing pages (${withCustomImage} with custom images).`);
}
