import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://dahailideyizhimagua.github.io',
  base: '/personal-website',
  build: {
    assets: 'assets',
  },
  integrations: [
    tailwind(),
    vue(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
