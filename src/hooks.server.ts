export async function handle({ event, resolve }) {
  const response = await resolve(event)

  response.headers.set(
    'Accept-CH', 'Sec-CH-Prefers-Color-Scheme, Sec-CH-Viewport-Width'
  )

  return response
}