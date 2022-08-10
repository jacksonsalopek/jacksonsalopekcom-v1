import { sveltekit } from '@sveltejs/kit/vite'
import path from 'path'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		exclude: [...configDefaults.exclude, 'tests/routes/**/*'],
		globals: true,
		environment: 'jsdom'
	},
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src')
		}
	}
})
