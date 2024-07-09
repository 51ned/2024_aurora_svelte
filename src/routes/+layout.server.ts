import type { RequestEvent, ServerLoadEvent } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types'


const load = (event: ServerLoadEvent) => {
  return {
    gtmId: event.locals.gtmId,
    scheme: event.locals.scheme,
    vw: event.locals.vw
  }
}

const prerender = true


export { load, prerender }
