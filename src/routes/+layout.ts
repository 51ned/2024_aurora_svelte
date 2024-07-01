import type { LayoutLoad } from './$types'


export const load: LayoutLoad = async ({ data }) => {
  // let { gtmId, scheme, vw } = data
  
  if (data.scheme) {
    return data
  }

  if (typeof window !== 'undefined') {
    data.scheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    data.vw = String(window.innerWidth)
    
    return data
  }
}
