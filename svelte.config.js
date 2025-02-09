/* 
	'adapter-auto' only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
	If your environment is not supported, or you settled on a specific environment, switch out the adapter.
	See https://kit.svelte.dev/docs/adapters for more information about adapters.

	Consult https://kit.svelte.dev/docs/integrations#preprocessors
	for more information about preprocessors
*/


import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'


/** @type {import('@sveltejs/kit').Config} */


const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'routes/*': 'src/routes/*',
			'static/*': 'static/*',
      'stores/*': 'src/stores/*',
      'styles/*': 'src/styles/*',
      'views/*': 'src/views/*',
      'utils/*': 'src/utils/*'
		}
	},

	preprocess: vitePreprocess()
}


export default config
