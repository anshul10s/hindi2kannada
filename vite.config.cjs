const { defineConfig } = require('vite');

module.exports = defineConfig(({ command }) => ({
  // Use the repo name as base only for production builds (GitHub Pages).
  // Keep `/` as base during `vite` dev for previews and local dev server.
  base: command === 'build' ? '/hindi2kannada/' : '/',
}));
