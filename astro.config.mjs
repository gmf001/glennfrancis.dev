import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import astro from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), astro()],
	experimental: { integrations: true },
	vite: {
		ssr: {
			external: ['svgo']
		}
	}
});
