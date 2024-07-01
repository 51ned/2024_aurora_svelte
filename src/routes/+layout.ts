import type { LayoutLoad } from './$types'


export const load: LayoutLoad = async ({ data }) => {
  console.log(data.scheme)
  if (data.scheme !== null && data.scheme !== undefined) {
    return data
  }

  if (typeof window !== 'undefined') {
    data.scheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    data.vw = String(window.innerWidth)
    
    return data
  }
}
