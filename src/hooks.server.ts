import type { Handle } from '@sveltejs/kit'


export const handle: Handle = async ({ event, resolve }) => {
	event.setHeaders({
    'Accept-CH': 'Sec-CH-Prefers-Color-Scheme'
  })

	return await resolve(event)
};