/**
 * Runs the static-page generator after the production bundle is written, so
 * every public route ships as real crawlable HTML instead of an empty SPA shell.
 */
import type { Plugin } from "vite";
import { execFileSync } from "child_process";

export function vitePrerender(): Plugin {
  return {
    name: "vite-prerender",
    apply: "build",
    closeBundle() {
      try {
        console.log("🕸️  Prerender: generating static HTML for every public route...");
        execFileSync("bunx", ["vite-node", "scripts/generate-static-pages.ts"], {
          stdio: "inherit",
          cwd: process.cwd(),
        });
      } catch (error) {
        // Never fail the build because of SEO shells.
        console.warn("⚠️  Prerender skipped:", (error as Error)?.message);
      }
    },
  };
}
