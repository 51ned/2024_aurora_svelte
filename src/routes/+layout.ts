import type { LayoutLoad } from './$types'


export const load: LayoutLoad = async ({ data }) => {
  console.log(`scheme from headers: ${data.scheme}`)
  if (data.scheme !== null) {
    return data
  }

  if (typeof window !== 'undefined') {
    data.scheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    data.vw = String(window.innerWidth)
    console.log(`scheme from window: ${data.scheme}`)
    return data
  }
}
