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
              id.includes('/data/tools/toolifyBatch2026B1') ||
              id.includes('/data/tools/toolifyBatch2026B2') ||
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
              id.includes('/data/tools/newVerified')) return 'tools-specialty';
          if (id.includes('/data/tools/video') ||
              id.includes('/data/tools/sfx') ||
              id.includes('/data/tools/music') ||
              id.includes('/data/tools/audio')) return 'tools-media';
          if (id.includes('/data/tools/audit') ||
              id.includes('/data/tools/future') ||
              id.includes('/data/tools/trending') ||
              id.includes('/data/tools/verified') ||
              id.includes('/data/tools/missing')) return 'tools-audit';
          if (id.includes('/data/tools/aiArt') ||
              id.includes('/data/tools/aiAnimation') ||
              id.includes('/data/tools/ai3D') ||
              id.includes('/data/tools/aiGenerat') ||
              id.includes('/data/tools/threeD') ||
              id.includes('/data/tools/specializedImage') ||
              id.includes('/data/tools/topImage')) return 'tools-creative';
          if (id.includes('/data/tools/aiChat') ||
              id.includes('/data/tools/aiAssistant') ||
              id.includes('/data/tools/aiBot') ||
              id.includes('/data/tools/advancedChat') ||
              id.includes('/data/tools/aiGpt') ||
              id.includes('/data/tools/aiVoice')) return 'tools-chat';
          if (id.includes('/data/tools/aiDev') ||
              id.includes('/data/tools/aiCyber') ||
              id.includes('/data/tools/webDev') ||
              id.includes('/data/tools/aiData') ||
              id.includes('/data/tools/web3')) return 'tools-dev';
          if (id.includes('/data/tools/aiEdu') ||
              id.includes('/data/tools/aiContent') ||
              id.includes('/data/tools/writing') ||
              id.includes('/data/tools/transcription') ||
              id.includes('/data/tools/search')) return 'tools-content';
          if (id.includes('/data/tools/aiFinance') ||
              id.includes('/data/tools/aiAccount') ||
              id.includes('/data/tools/aiCrypto') ||
              id.includes('/data/tools/aiEcommerce') ||
              id.includes('/data/tools/traditional')) return 'tools-finance';
          if (id.includes('/data/tools/aiCustomer') ||
              id.includes('/data/tools/aiMarketing') ||
              id.includes('/data/tools/socialMedia') ||
              id.includes('/data/tools/aiSales') ||
              id.includes('/data/tools/aiHR') ||
              id.includes('/data/tools/aiLegal')) return 'tools-business';
          if (id.includes('/data/tools/aiFitness') ||
              id.includes('/data/tools/aiHealth') ||
              id.includes('/data/tools/health') ||
              id.includes('/data/tools/aiPet') ||
              id.includes('/data/tools/aiDating') ||
              id.includes('/data/tools/aiFashion') ||
              id.includes('/data/tools/aiFood') ||
              id.includes('/data/tools/personal') ||
              id.includes('/data/tools/spiritual') ||
              id.includes('/data/tools/timeAndHistory')) return 'tools-lifestyle';
          if (id.includes('/data/tools/ai') ||
              id.includes('/data/tools/major') ||
              id.includes('/data/tools/top')) return 'tools-platforms';
          if (id.includes('/data/tools/')) return 'tools-misc';
          if (id.includes('/data/toolsData') || id.includes('/data/toolsCollection')) return 'tools-core';

          // Split utils
          if (id.includes('/utils/')) return 'app-utils';
          // Split components - granular
          if (id.includes('/components/tools/') || id.includes('/components/category/')) return 'app-tools-ui';
          if (id.includes('/components/effects/') || id.includes('/components/seo/') || id.includes('/components/disclaimers/')) return 'app-effects-seo';
          if (id.includes('/components/search/') || id.includes('/components/navigation/') || id.includes('/components/header/')) return 'app-nav-search';
          if (id.includes('/components/footer/') || id.includes('/components/favorites/') || id.includes('/components/tool-detail/')) return 'app-detail-ui';
          if (id.includes('/components/ui/')) return 'app-ui-lib';
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
