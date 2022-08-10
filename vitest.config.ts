import { svelte } from '@sveltejs/vite-plugin-svelte'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	test: {
		include: ['tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		exclude: [...configDefaults.exclude, 'tests/routes/**/*'],
		globals: true,
		environment: 'jsdom'
	}
})
