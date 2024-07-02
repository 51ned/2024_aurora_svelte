import type { Handle } from '@sveltejs/kit'


export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event)
  console.log(response.headers)
  response.headers.append('accept-ch', 'sec-ch-prefers-color-scheme, sec-ch-viewport-width')
  console.log(response.headers)
  return response
}