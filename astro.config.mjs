// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    adapter: vercel(),
    markdown: {
        shikiConfig: {
            theme: 'dracula',
            wrap: true
        }
    }
});
