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

        // IMPORTANT: We intentionally do NOT emit static per-slug HTML pages here.
        // Those shadow files sat at dist/<slug>/index.html and took priority over the
        // SPA fallback, and their `location.replace('/<slug>')` bounced to themselves,
        // creating an infinite reload loop on every tool page. The SPA (React Router
        // + SEOHead) renders tool pages and their meta tags instead.
        
      } catch (error) {
        console.error('⚠️ OG Manifest generation error:', error);
        // Non-fatal - build continues without OG pages
      }
    }
  };
}
