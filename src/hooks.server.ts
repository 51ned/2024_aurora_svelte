import type { Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'


const MAX_AGE = 31536000 // 1 year


const setHeaders: Handle = async ({ event, resolve }) => {
  event.setHeaders({
    'accept-ch': 'sec-ch-prefers-color-scheme, sec-ch-viewport-width',
    'cache-control': `max-age=${MAX_AGE}, immutable`
  })
	
	return await resolve(event)
}

const manageFonts: Handle = async ({ event, resolve }) => {
  const isFontCached = event.cookies.get('fontcached')

  if (!isFontCached) {
    event.cookies.set('fontcached', 'true', { path: '/', maxAge: MAX_AGE })

    const response = await resolve(event, {
      transformPageChunk: ({ html }) => html.replace(
        '<head>',
        `<head>
          <link
            as='font'
            crossOrigin='anonymous'
            href='/fonts/montserrat.woff2'
            rel='preload'
            type='font/woff2'
          />`
      )
    })

    return response
  }

  return await resolve(event)
}


export const handle: Handle = sequence(
	setHeaders,
  manageFonts
)
