import type { LayoutServerLoad } from './$types'


const load: LayoutServerLoad = async ({ setHeaders }) => { 
  setHeaders({
    'accept-ch': 'sec-ch-prefers-color-scheme, sec-ch-viewport-width'
  }) 

  return {
    // gtmId: import.meta.env.VITE_GTM_ID,
    // scheme: request.headers.get('sec-ch-prefers-color-scheme'),
    // vw: request.headers.get('sec-ch-viewport-width')
  }
}

const prerender = true
const ssr = true

export { load, prerender, ssr }