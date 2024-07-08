import type { Handle } from '@sveltejs/kit'


export const handle: Handle = async ({ event, resolve }) => {
	// event.setHeaders({
  //   'accept-ch': 'sec-ch-prefers-color-scheme, sec-ch-viewport-width'
  // })

  const response = await resolve(event)
  response.headers.set('accept-ch', 'sec-ch-prefers-color-scheme, sec-ch-viewport-width')

	return response
}
