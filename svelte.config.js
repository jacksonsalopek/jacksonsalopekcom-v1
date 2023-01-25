import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			strict: false
		}),
		prerender: {
			handleMissingId: 'ignore'
		}
		// Only needed if page is not hosted on custom domain!
		// paths: {
		// 	base: '/jacksonsalopekcom'
		// }
	}
}

export default config
