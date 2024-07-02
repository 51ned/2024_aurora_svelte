<script lang='ts'>
  import type { LayoutData } from './$types'

  import {Aside, Navbar, Footer} from 'views/orgs'

  import { mediaHandle } from 'utils/media-handle.svelte'
  import { BREAKPOINTS } from '$lib/breakpoints'

  export let data: LayoutData
</script>


<main>
  <slot />

  <h2>Data from headers | window test:</h2>

  <ul>
    <li>color-scheme: { data.scheme ?? 'unknown' }</li>
    <li>viewport-width: { data.vw ?? 'unknown' }</li>
  </ul>
</main>

<Navbar />
<Footer/>
<Aside />