import type { LayoutLoad } from './$types'


export const load: LayoutLoad = async ({ data }) => {
  let { gtmId, scheme, vw } = data

  if (!scheme && typeof window !== 'undefined') {
    scheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  return { gtmId, scheme, vw }
}
