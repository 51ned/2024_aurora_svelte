<script lang='ts'>
  import type { LayoutData } from './$types'

  import Nav from 'views/test-nav.svelte'
  import GTM from 'utils/gtm.svelte';
  import { vwHandle } from 'utils/vw-handle.svelte'
  import { BREAKPOINTS } from '$lib/breakpoints'
  
  export let data: LayoutData
</script>


<main>
  <slot />

  <Nav />

  <h2>Data from headers test</h2>

  <ul>
    <li>sec-ch-prefers-color-scheme: { data.scheme ?? 'unknown' }</li>
  </ul>
  
  <h2>Breakpoints test:</h2>

  <ul>
    <li>XXL: { vwHandle(BREAKPOINTS.XXL) }</li>
    <li>XL: { vwHandle(BREAKPOINTS.XL) }</li>
    <li>L: { vwHandle(BREAKPOINTS.L) }</li>
    <li>M: { vwHandle(BREAKPOINTS.M) }</li>
    <li>S: { vwHandle(BREAKPOINTS.S) }</li>
    <li>XS: { vwHandle(BREAKPOINTS.XS) }</li>
  </ul>
</main>

<GTM id={data.gtmId} />