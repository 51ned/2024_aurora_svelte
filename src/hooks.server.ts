import { sequence } from '@sveltejs/kit/hooks'
import type { Handle } from '@sveltejs/kit'


const setHeaders: Handle = async ({ event, resolve }) => {
  event.setHeaders({
    'accept-ch': 'sec-ch-prefers-color-scheme, sec-ch-viewport-width'
  })

	return await resolve (event)
}

const getScheme: Handle = async ({ event, resolve }) => {
	const scheme = event.cookies.get('scheme')

	if (scheme) {
		event.locals.scheme = scheme
	} else {
		event.locals.scheme = event.request.headers.get('sec-ch-prefers-color-scheme')
	}

	return await resolve(event)
}

const getVw: Handle = async ({ event, resolve }) => {
	event.locals.vw = event.request.headers.get('sec-ch-viewport-width')
	return await resolve(event)
}

const getGtmId: Handle = async ({ event, resolve }) => {
	event.locals.gtmId = import.meta.env.VITE_GTM_ID
	return await resolve(event)
}


export const handle: Handle = sequence(
	setHeaders,
	getScheme,
	getVw,
	getGtmId
)
