<script lang='ts'>
  import type { Snippet } from 'svelte'

  interface BlockProps {
    children: Snippet,
    container?: 'article' | 'div' | 'section',
    optStyle?: string,
    wrap?: 'div'
  }

  let {
    children,
    container,
    optStyle,
    wrap
  }: BlockProps = $props()
</script>


{#snippet WrapSnippet()}
  <div class='wrap {optStyle}'>
    { @render ContainerSnippet() }
  </div>
{/snippet}

{#snippet ContainerSnippet()}
  <svelte:element this={container} class='container'>
    { @render children() }
  </svelte:element>
{/snippet}


{#if wrap}
  { @render WrapSnippet() }
{:else}
  { @render ContainerSnippet() }
{/if}


<style>
  .wrap {
    grid-template-columns: subgrid;
  }

  .container {
    grid-column: content;
  }
</style>
