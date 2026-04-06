import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { viteOGManifest } from "./plugins/vite-og-manifest";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    mode === 'production' && viteOGManifest(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor chunks
          if (id.includes('node_modules/react-dom')) return 'vendor-react';
          if (id.includes('node_modules/react/')) return 'vendor-react';
          if (id.includes('node_modules/react-router')) return 'vendor-router';
          if (id.includes('node_modules/@tanstack')) return 'vendor-query';
          if (id.includes('node_modules/@radix-ui')) return 'vendor-ui';
          if (id.includes('node_modules/framer-motion')) return 'vendor-motion';
          if (id.includes('node_modules')) return 'vendor-misc';

          // Split tool data into multiple chunks by pattern
          if (id.includes('/data/tools/aiWebTools/')) return 'tools-gpts';
          if (id.includes('/data/tools/toolifyBatch2026B1') ||
              id.includes('/data/tools/toolifyBatch2026B2') ||
              id.includes('/data/tools/toolifyBatch2026B3') ||
              id.includes('/data/tools/toolifyBatch2026B4') ||
              id.includes('/data/tools/toolifyBatch2026B5') ||
              id.includes('/data/tools/toolifyBatch2026B6') ||
              id.includes('/data/tools/toolifyBatch2026B7') ||
              id.includes('/data/tools/toolifyBatch2026B8')) return 'tools-toolify-a';
          if (id.includes('/data/tools/toolifyBatch2026B9') ||
              id.includes('/data/tools/toolifyBatch2026B1') || // B10-B15
              id.includes('/data/tools/toolifyBatch2026B2') || // B20-B21
              id.includes('/data/tools/toolifyBatch2026')) return 'tools-toolify-b';
          if (id.includes('/data/tools/frontier') ||
              id.includes('/data/tools/frontierBatch') ||
              id.includes('/data/tools/frontierInfra')) return 'tools-frontier';
          if (id.includes('/data/tools/enterprise') ||
              id.includes('/data/tools/advancedAgents') ||
              id.includes('/data/tools/newAIAgents') ||
              id.includes('/data/tools/topAgent') ||
              id.includes('/data/tools/specializedAgents') ||
              id.includes('/data/tools/voiceAgents') ||
              id.includes('/data/tools/productivityAgents') ||
              id.includes('/data/tools/digitalHumans') ||
              id.includes('/data/tools/phoneAgents') ||
              id.includes('/data/tools/robotics')) return 'tools-agents';
          if (id.includes('/data/tools/apocalypse') ||
              id.includes('/data/tools/niche') ||
              id.includes('/data/tools/gameVR') ||
              id.includes('/data/tools/robotSafety') ||
              id.includes('/data/tools/preparedness') ||
              id.includes('/data/tools/civic') ||
              id.includes('/data/tools/mustHave') ||
              id.includes('/data/tools/hotNew') ||
              id.includes('/data/tools/medicus') ||
              id.includes('/data/tools/hormuz') ||
              id.includes('/data/tools/researched') ||
              id.includes('/data/tools/newVerified') ||
              id.includes('/data/tools/video')) return 'tools-specialty';
          if (id.includes('/data/tools/audit') ||
              id.includes('/data/tools/future') ||
              id.includes('/data/tools/trending') ||
              id.includes('/data/tools/verified') ||
              id.includes('/data/tools/missing')) return 'tools-audit';
          if (id.includes('/data/tools/ai') ||
              id.includes('/data/tools/major') ||
              id.includes('/data/tools/top')) return 'tools-platforms';
          if (id.includes('/data/tools/')) return 'tools-misc';
          if (id.includes('/data/toolsData') || id.includes('/data/toolsCollection')) return 'tools-core';

          // Split utils
          if (id.includes('/utils/')) return 'app-utils';
          // Split components
          if (id.includes('/components/tools/') || id.includes('/components/category/')) return 'app-tools-ui';
          if (id.includes('/components/')) return 'app-components';
          // Split pages
          if (id.includes('/pages/')) return 'app-pages';
        },
      },
    },
    minify: 'esbuild',
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 800,
    // Increase memory limit for large builds
    sourcemap: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query'],
  },
}));
