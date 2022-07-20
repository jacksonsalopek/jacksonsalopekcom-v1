import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'
import { UserConfig } from 'vite'

const config: UserConfig = {
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	},
	resolve: {
		alias: {
			src: resolve(__dirname, './src')
		}
	}
}

export default config
