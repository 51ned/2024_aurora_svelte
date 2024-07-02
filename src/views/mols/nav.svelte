<script>
// @ts-nocheck

  import { Button, List } from 'views/atoms'

  import { mediaHandle } from 'utils/media-handle.svelte'
  import { BREAKPOINTS } from '$lib/breakpoints'
</script>


{#if !mediaHandle(BREAKPOINTS.XL)}
  <Button text='Кнопка' />
{:else}
  <List />
{/if}