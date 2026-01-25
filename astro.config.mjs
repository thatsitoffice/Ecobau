import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Static output für beste Performance auf Cloudflare Pages
  // Falls später SSR benötigt wird, auf 'server' ändern und @astrojs/cloudflare adapter installieren
  output: 'static',
  integrations: []
});
