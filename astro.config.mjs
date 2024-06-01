import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import astroExpressiveCode from 'astro-expressive-code';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://matthewdavis.io',
  integrations: [sitemap(), svelte(), tailwind(), astroExpressiveCode({
    themes: ['dracula', 'solarized-light'],
    defaultTheme: 'solarized-light',
    defaultProps: {
      frame: 'terminal',
      wrap: true,
      preserveIndent: true
    },
    plugins: [pluginLineNumbers(), pluginCollapsibleSections()]
  }),mdx()],
  output: "static",
  adapter: vercel()
});