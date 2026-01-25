import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Static output für beste Performance auf Cloudflare Pages
  // Falls später SSR benötigt wird, auf 'server' ändern und adapter aktivieren
  output: 'static',
  // adapter: cloudflare(), // Nur aktivieren wenn SSR benötigt wird
  integrations: []
});
