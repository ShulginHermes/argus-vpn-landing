// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ShulginHermes.github.io',
  base: '/argus-vpn-landing',
  vite: {
    plugins: [tailwindcss()]
  }
});
