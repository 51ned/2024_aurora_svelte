import type { Handle } from '@sveltejs/kit'


export const handle: Handle = async ({ event, resolve }) => {
  event.setHeaders({
    'x-supa': 'dupa!'
  })
  
  return await resolve(event)
}