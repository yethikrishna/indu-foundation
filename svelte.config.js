import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md', '.svx'],
      highlight: {
        highlighter: async (code, lang) => {
          const { codeToHtml } = await import('shiki');
          const html = await codeToHtml(code, {
            lang: lang || 'text',
            theme: 'github-dark'
          });
          return `{@html ${JSON.stringify(html)}}`;
        }
      }
    })
  ],
  kit: {
    adapter: adapter({
      routes: {
        include: ['/*'],
        exclude: ['<all>']
      }
    }),
    alias: {
      $components: './src/lib/components',
      $stores: './src/lib/stores',
      $utils: './src/lib/utils',
      $types: './src/lib/types'
    },
    env: {
      publicPrefix: 'PUBLIC_'
    }
  }
};

export default config;
