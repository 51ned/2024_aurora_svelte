import type { LayoutServerLoad } from './$types'


const load: LayoutServerLoad = async ({ request }) => {  
  return {
    gtmId: import.meta.env.VITE_GTM_ID,
    scheme: request.headers.get('sec-ch-prefers-color-scheme')
  }
}

const prerender = true


export { load, prerender }