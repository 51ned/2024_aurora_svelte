import type { LayoutLoad } from './$types'


export const load: LayoutLoad = async ({ data }) => {
  console.log(`cheme from headers: ${data.scheme}`)
  if (data.scheme !== null) {
    return data
  }

  if (typeof window !== 'undefined') {
    data.scheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    data.vw = String(window.innerWidth)
    console.log(`cheme from window: ${data.scheme}`)
    return data
  }
}
