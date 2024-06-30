import type { LayoutLoad } from './$types'


export const load: LayoutLoad = async ({ data }) => {
  let { gtmId, scheme } = data

  if (scheme) {
    return data
  }

  if (typeof window !== 'undefined') {
    scheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    return data
  }
}
