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
    // Optimize chunk splitting for faster initial load
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks - load separately for caching
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-query': ['@tanstack/react-query'],
          'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tooltip'],
        },
      },
    },
    // Minification settings
    minify: 'esbuild',
    target: 'esnext',
    // CSS code splitting
    cssCodeSplit: true,
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 500,
  },
  // Optimize deps for faster dev server start
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query'],
  },
}));
