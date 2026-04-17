// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({\n  site: 'https://ShulginHermes.github.io',\n  base: '/argus-vpn-landing',\n  vite: {\n    plugins: [tailwindcss()]\n  }\n});