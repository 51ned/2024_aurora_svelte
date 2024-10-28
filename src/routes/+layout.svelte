<script lang='ts'>
  import type { Snippet } from 'svelte'

  import { Aside, Footer, Nav } from 'views/orgs'
  import { GTM } from 'utils/.'

  import 'styles/index.css'

  interface LayoutProps {
    children: Snippet
  }

  let { children }: LayoutProps = $props()
</script>


{ @render children() }


<Nav />
<Footer />
<Aside />


{#if process.env.NODE_ENV === 'production'}
  <GTM />
{/if}