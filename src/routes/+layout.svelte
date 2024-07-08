<script lang='ts'>
  import { setContext } from 'svelte'
  import type { LayoutData } from './$types'

  import { Aside, Navbar, Footer } from 'views/orgs'

  export let data: LayoutData

  setContext('initWidth', data.vw)
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