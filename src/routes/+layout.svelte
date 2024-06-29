<script lang='ts'>
  import type { LayoutData } from './$types'

  import Nav from 'views/test-nav.svelte'
  
  export let data: LayoutData
</script>

<main>
  <slot />

  <Nav />

  <p>sec-ch-prefers-color-scheme: { data.scheme ?? 'unknown' }</p>
  <p>sec-ch-viewport-width: { data.vw ?? 'unknown' }</p>
</main>