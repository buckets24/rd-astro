// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel';
// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    partytown({
      config: {
        debug: true, // Temporarily enable debug mode to help troubleshoot
        forward: ['dataLayer.push', 'gtag'],
      },
    }),
  ],
  // Enable server endpoints
  output: "static",
  adapter: vercel()
});