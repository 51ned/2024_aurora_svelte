import type { Handle } from '@sveltejs/kit'


export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event)

  console.log('Setting headers:', 'accept-ch', 'sec-ch-prefers-color-scheme, sec-ch-viewport-width')
  response.headers.set('accept-ch', 'sec-ch-prefers-color-scheme, sec-ch-viewport-width')
  console.log('Response headers:', response.headers)
  return response
}