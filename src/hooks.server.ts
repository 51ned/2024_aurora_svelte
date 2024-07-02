import type { Handle } from '@sveltejs/kit'


export const handle: Handle = async ({ event, resolve }) => {
  event.setHeaders({
    'accept-ch': 'sec-ch-prefers-color-scheme, sec-ch-viewport-width'
  })

  const response = await resolve(event)
  console.log(response.headers)
  
  return response
}