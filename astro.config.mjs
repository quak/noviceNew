import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap()],
  output: 'server',
  adapter: vercel({
    maxDuration: 60,
    isr: {
      // caches all pages on first request and saves for 1 day
      expiration: 60 * 60 * 24,
      exclude: [ "/", "/kategorije/[...slug]" ]
    },
  }),
  prefetch: {
    defaultStrategy: 'viewport'
  }
});