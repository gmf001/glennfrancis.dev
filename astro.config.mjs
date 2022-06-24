import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import astro from 'astro-robots-txt';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://glennfrancis.dev',
  integrations: [tailwind(), astro(), sitemap()],
  experimental: {
    integrations: true
  },
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
