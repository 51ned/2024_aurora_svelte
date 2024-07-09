<script lang='ts'>
  import type { LayoutServerData } from './$types'
  import { Aside, Navbar, Footer } from 'views/orgs'

  export let data: LayoutServerData
  console.log(`scheme from layout.svelte: ${data.scheme}`)
  console.log(`vw from layout.svelte: ${data.vw}`)
</script>


<main>
  <slot />

  <h2>Well...</h2>

  <ul>
    <li>scheme from hooks: {data.scheme ?? "it's not Chromium, bitches"}</li>
    <li>vw from hooks: {data.vw ?? "it's not Chromium, bitches"}</li>
  </ul>
</main>

<Navbar />
<Footer/>
<Aside />
