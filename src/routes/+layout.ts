import type { LayoutLoad } from './$types'


const load: LayoutLoad = ({ data }) => {
  if (data.scheme !== null) {
    return data
  }

  if (typeof window !== 'undefined') {
    data.scheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    data.vw = String(window.innerWidth)
    
    return data
  }
}

const ssr = true


export { load, ssr }