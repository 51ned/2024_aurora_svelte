import type { RequestEvent } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'


const load: LayoutServerLoad = ({ locals }: RequestEvent) => {
  return {
    gtmId: locals.gtmId,
    scheme: locals.scheme,
    vw: locals.vw
  }
}

const prerender = true


export { load, prerender }
