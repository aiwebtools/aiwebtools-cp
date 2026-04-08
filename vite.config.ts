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
          // Vendor chunks — keep React together with its dependents to avoid
          // "Cannot read properties of undefined (reading 'forwardRef')" when
          // a chunk that calls React.forwardRef loads before the React chunk.
          if (id.includes('node_modules/react-dom') ||
              id.includes('node_modules/react/') ||
              id.includes('node_modules/react-router') ||
              id.includes('node_modules/scheduler')) return 'vendor-react';
          if (id.includes('node_modules/@tanstack')) return 'vendor-query';

          // Keep lucide isolated from app chunks.
          // If lucide lands inside an app chunk, tool-data chunks can end up
          // importing icon symbols from that app chunk, which creates a
          // production-only initialization cycle and a black screen.
          if (id.includes('node_modules/lucide-react')) return 'vendor-icons';

          // Let Rollup keep the rest of the UI dependency graph in a safe order.
          // Forcing Radix/floating/ui-adjacent packages into one shared chunk
          // previously caused a production-only TDZ crash.
          if (id.includes('node_modules/@radix-ui') ||
              id.includes('node_modules/@floating-ui') ||
              id.includes('node_modules/class-variance-authority') ||
              id.includes('node_modules/clsx') ||
              id.includes('node_modules/cmdk') ||
              id.includes('node_modules/react-day-picker') ||
              id.includes('node_modules/sonner') ||
              id.includes('node_modules/recharts') ||
              id.includes('node_modules/react-resizable-panels') ||
              id.includes('node_modules/vaul') ||
              id.includes('node_modules/embla-carousel-react') ||
              id.includes('node_modules/input-otp') ||
              id.includes('node_modules/tailwind-merge')) {
            return;
          }

          if (id.includes('node_modules/framer-motion')) return 'vendor-motion';
          if (id.includes('node_modules')) return 'vendor-misc';

          // Split tool data into multiple chunks by pattern
          if (id.includes('/data/tools/aiWebTools')) return 'tools-gpts';
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
          // NEW: Additional tool data splits to break up tools-misc
          if (id.includes('/data/tools/additional') ||
              id.includes('/data/tools/moreReal') ||
              id.includes('/data/tools/rawUncut') ||
              id.includes('/data/tools/mindBlowing') ||
              id.includes('/data/tools/comprehensiveAI') ||
              id.includes('/data/tools/advancedAI') ||
              id.includes('/data/tools/advancedVideo') ||
              id.includes('/data/tools/newEpic')) return 'tools-expanded';
          if (id.includes('/data/tools/business') ||
              id.includes('/data/tools/ecommerce') ||
              id.includes('/data/tools/marketing') ||
              id.includes('/data/tools/email') ||
              id.includes('/data/tools/newMarketing') ||
              id.includes('/data/tools/newAffiliate')) return 'tools-biz-mktg';
          if (id.includes('/data/tools/creative') ||
              id.includes('/data/tools/design') ||
              id.includes('/data/tools/image') ||
              id.includes('/data/tools/background') ||
              id.includes('/data/tools/coreImage') ||
              id.includes('/data/tools/content')) return 'tools-design';
          if (id.includes('/data/tools/developer') ||
              id.includes('/data/tools/platform') ||
              id.includes('/data/tools/automation') ||
              id.includes('/data/tools/cloud') ||
              id.includes('/data/tools/openSource') ||
              id.includes('/data/tools/local') ||
              id.includes('/data/tools/aiInference') ||
              id.includes('/data/tools/aiTool') ||
              id.includes('/data/tools/aiHardware') ||
              id.includes('/data/tools/aiGadgets')) return 'tools-devplatforms';
          if (id.includes('/data/tools/document') ||
              id.includes('/data/tools/grammar') ||
              id.includes('/data/tools/research') ||
              id.includes('/data/tools/learning') ||
              id.includes('/data/tools/resume') ||
              id.includes('/data/tools/meeting') ||
              id.includes('/data/tools/aiNote') ||
              id.includes('/data/tools/aiPresent') ||
              id.includes('/data/tools/aiProduct') ||
              id.includes('/data/tools/aiProject') ||
              id.includes('/data/tools/aiTranslat')) return 'tools-productivity';
          if (id.includes('/data/tools/entertainment') ||
              id.includes('/data/tools/game') ||
              id.includes('/data/tools/aiGaming') ||
              id.includes('/data/tools/aiSport') ||
              id.includes('/data/tools/lifestyle') ||
              id.includes('/data/tools/news') ||
              id.includes('/data/tools/aiTravel') ||
              id.includes('/data/tools/aiInsurance') ||
              id.includes('/data/tools/aiReal') ||
              id.includes('/data/tools/legal') ||
              id.includes('/data/tools/aiPodcast') ||
              id.includes('/data/tools/aiPhoto') ||
              id.includes('/data/tools/aiConstruct') ||
              id.includes('/data/tools/aiLogistic') ||
              id.includes('/data/tools/aiShipping') ||
              id.includes('/data/tools/aiAgricul') ||
              id.includes('/data/tools/aiAutomot') ||
              id.includes('/data/tools/aiInterior') ||
              id.includes('/data/tools/aiMental') ||
              id.includes('/data/tools/aiMeeting') ||
              id.includes('/data/tools/aiRecruit') ||
              id.includes('/data/tools/aiResearch') ||
              id.includes('/data/tools/aiSecurity') ||
              id.includes('/data/tools/aiSeo') ||
              id.includes('/data/tools/aiTranscript')) return 'tools-services';
          if (id.includes('/data/tools/professional') ||
              id.includes('/data/tools/specialized') ||
              id.includes('/data/tools/emergency') ||
              id.includes('/data/tools/healthcare') ||
              id.includes('/data/tools/historical') ||
              id.includes('/data/tools/communication') ||
              id.includes('/data/tools/collaboration') ||
              id.includes('/data/tools/financial') ||
              id.includes('/data/tools/multi') ||
              id.includes('/data/tools/emerging') ||
              id.includes('/data/tools/new') ||
              id.includes('/data/tools/artAnd') ||
              id.includes('/data/tools/nameInsight') ||
              id.includes('/data/tools/topProduct') ||
              id.includes('/data/tools/topMusic') ||
              id.includes('/data/tools/utilit') ||
              id.includes('/data/tools/technicalAnd') ||
              id.includes('/data/tools/core') ||
              id.includes('/data/tools/example')) return 'tools-professional';
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
          // Do not force a separate detail chunk here.
          // In production, icon modules can get hoisted into this bucket and
          // then tool-data chunks end up importing from app code, causing a TDZ cycle.
          if (id.includes('/components/ui/')) return 'app-ui-lib';
          // NEW: Split root components into functional groups
          if (id.includes('/components/HeroSection') ||
              id.includes('/components/Header') ||
              id.includes('/components/LoadingScreen') ||
              id.includes('/components/AnimatedBackground') ||
              id.includes('/components/InteractiveMatrix') ||
              id.includes('/components/WelcomeVoice') ||
              id.includes('/components/ScrollProgress')) return 'app-hero';
          if (id.includes('/components/SpecialServices') ||
              id.includes('/components/FeaturedTools') ||
              id.includes('/components/LazyFeatured') ||
              id.includes('/components/MinimalToolCard') ||
              id.includes('/components/SimilarTools') ||
              id.includes('/components/CategoryPage') ||
              id.includes('/components/BookPromotion') ||
              id.includes('/components/EthicalAI')) return 'app-featured';
          if (id.includes('/components/CloneOffer') ||
              id.includes('/components/FloatingClone') ||
              id.includes('/components/PinnedVideo') ||
              id.includes('/components/InspirationCarousel') ||
              id.includes('/components/AgeVerification') ||
              id.includes('/components/ConsentBanner')) return 'app-popups';
          if (id.includes('/components/Search') ||
              id.includes('/components/GlobalSearch') ||
              id.includes('/components/LazySearch')) return 'app-search';
          if (id.includes('/components/SEO') ||
              id.includes('/components/AdvancedSEO') ||
              id.includes('/components/ImprovedSEO') ||
              id.includes('/components/BreadcrumbSEO') ||
              id.includes('/components/Footer') ||
              id.includes('/components/ToolDisclaimer') ||
              id.includes('/components/AIWebToolsDisclaimer')) return 'app-seo-footer';
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
