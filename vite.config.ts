// ============================================================
// vite.config.ts - Vite Build & Dev Server Configuration
// ============================================================

import { defineConfig } from 'vite';

export default defineConfig({
  // Base public path for the app.
  // Use '/' for local development.
  // Change to '/your-repo-name/' when deploying to GitHub Pages.
  // Example: base: '/license-data-viewer/'
  base: '/',

  // Build output settings
  build: {
    outDir: 'dist',          // Output directory for production build
    assetsDir: 'assets',     // Sub-directory for static assets (JS, CSS, images)
    sourcemap: true,         // Generate source maps for easier debugging
  },

  // Development server settings
  server: {
    port: 3000,              // Dev server runs on http://localhost:3000
    open: true               // Automatically open browser when running `npm run dev`
  }
});