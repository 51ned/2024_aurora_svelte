<script>
  import { Button, List } from 'views/atoms'

  import { vwHandle } from 'utils/vw-handle.svelte'
  import { BREAKPOINTS } from '$lib/breakpoints'
</script>


{#if !vwHandle(BREAKPOINTS.XL)}
  <Button text='Кнопка' />
{:else}
  <List />
{/if}