import { sequence } from '@sveltejs/kit/hooks'
import type { Handle } from '@sveltejs/kit'


const setHeaders: Handle = async ({ event, resolve }) => {
  const response = await resolve(event)
  response.headers.set('accept-ch', 'sec-ch-prefers-color-scheme, sec-ch-viewport-width')

	return response
}

const getScheme: Handle = async ({ event, resolve }) => {
	const scheme = event.cookies.get('scheme')

	if (scheme) {
		event.locals.scheme = scheme
	} else {
		event.locals.scheme = event.request.headers.get('sec-ch-prefers-color-scheme')

		if (!event.locals.scheme) {
			if (typeof window !== 'undefined') {
				event.locals.scheme = window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light'
			}
		}
	}

	console.log(`scheme from hooks: ${event.locals.scheme}`)
	return await resolve(event)
}

const getVw: Handle = async ({ event, resolve }) => {
	event.locals.vw = event.request.headers.get('sec-ch-viewport-width')

	if (!event.locals.vw) {
    if (typeof window !== 'undefined') {
      event.locals.vw = String(window.innerWidth)
    }
  }

	console.log(`vw from hooks: ${event.locals.vw}`)
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
