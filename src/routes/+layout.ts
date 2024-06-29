import type { LayoutLoad } from './$types'


const load: LayoutLoad = async ({ data }) => {
  let { gtmId, scheme, vw } = data

  if (!scheme) {
    scheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  return { gtmId, scheme, vw }
}
