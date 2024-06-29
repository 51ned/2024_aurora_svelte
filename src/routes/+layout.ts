import type { LayoutLoad } from './$types'


export const load: LayoutLoad = async ({ data }) => {
  let { gtmId, scheme, vw } = data

  if (typeof window !== 'undefined') {
    if (!scheme) {
      scheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    if (!vw) {
      vw = String(window.innerWidth)
    }
  }

  return { gtmId, scheme, vw }
}
