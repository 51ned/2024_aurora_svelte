<script lang='ts'>
  import type { LayoutData } from './$types'

  import Nav from 'views/test-nav.svelte'
  import { mediaHandle } from 'utils/media-handle.svelte'
  import { BREAKPOINTS } from '$lib/breakpoints'

  export let data: LayoutData
</script>


<main>
  <slot />

  <Nav />

  <h2>Data from headers test</h2>

  <ul>
    <li>color-scheme: { data.scheme ?? 'unknown' }</li>
    <li>viewport-width: { data.vw ?? 'unknown' }</li>
  </ul>
  
  <h2>Breakpoints test:</h2>

  <ul>
    <li>XXL: { mediaHandle(BREAKPOINTS.XXL) }</li>
    <li>XL: { mediaHandle(BREAKPOINTS.XL) }</li>
    <li>L: { mediaHandle(BREAKPOINTS.L) }</li>
    <li>M: { mediaHandle(BREAKPOINTS.M) }</li>
    <li>S: { mediaHandle(BREAKPOINTS.S) }</li>
    <li>XS: { mediaHandle(BREAKPOINTS.XS) }</li>
  </ul>
</main>
