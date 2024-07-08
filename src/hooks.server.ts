import { setContext } from 'svelte'
import { sequence } from '@sveltejs/kit/hooks'

import type { Handle } from '@sveltejs/kit'


const setHeaders: Handle = async ({ event, resolve }) => {
	// event.setHeaders({
  //   'accept-ch': 'sec-ch-prefers-color-scheme, sec-ch-viewport-width'
  // })

  const response = await resolve(event)
  response.headers.set('accept-ch', 'sec-ch-prefers-color-scheme, sec-ch-viewport-width')

	return response

  // one way, or another - nevermind...
}

const getCookies: Handle = async ({ event, resolve }) => {
	const cookieStore = event.cookies.getAll()
	console.log(cookieStore)
  
	return resolve(event)
}

const getHeaders: Handle = async ({ event, resolve }) => {
	const scheme = event.request.headers.get('sec-ch-prefers-color-scheme')
	const vw = event.request.headers.get('sec-ch-viewport-width')
  
  console.log(`Scheme from hook: ${scheme}, VW from hook: ${vw}`)
	// setContext here... Or on client side? Hmmm...
	
	return await resolve(event)
}


export const handle: Handle = sequence(getCookies, setHeaders, getHeaders)