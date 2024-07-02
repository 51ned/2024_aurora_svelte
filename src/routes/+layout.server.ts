import type { LayoutServerLoad } from './$types'


export const load: LayoutServerLoad = ({ request }) => {
  return {
    gtmId: import.meta.env.VITE_GTM_ID,
    scheme: request.headers.get('sec-ch-prefers-color-scheme'),
    vw: request.headers.get('sec-ch-viewport-width')
  }
}
