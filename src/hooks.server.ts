import type { Handle } from '@sveltejs/kit'


export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event)
  response.headers.append('accept-ch', 'sec-ch-prefers-color-scheme, sec-ch-viewport-width')
  
  return response
}