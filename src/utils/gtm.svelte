<script lang='ts'>
  import { onMount } from 'svelte'
  import { get } from 'svelte/store'

  import { page } from '$app/stores'

  import * as gTag from 'utils/gtm-handle'

  // export let gtmId: string | undefined
  const { gtmId } = $props()
  const scriptId = 'gtm'

  const loadGTM = (gtmId: string) => {
    if (!document.getElementById(scriptId)) {
      const gtmScript = document.createElement('script')

      gtmScript.async = true
      gtmScript.fetchPriority = 'low'
      gtmScript.id = scriptId

      gtmScript.innerHTML = `
        (function(w,d,s,l,i){
          w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `

      document.head.appendChild(gtmScript)
      gtmScript.onload = () => gTag.pageview(get(page).url.pathname, gtmId)
    }
    else {
      gTag.pageview(get(page).url.pathname, gtmId)
    }
  }

  onMount(() => {
    if (import.meta.env.MODE === 'production' && gtmId?.length) {
      loadGTM(gtmId)
    }
  })

  $effect.pre(() => {
    if (import.meta.env.MODE === 'production' && gtmId?.length) {
      gTag.pageview(get(page).url.pathname, gtmId)
    }
  })
</script>

{#if import.meta.env.MODE !== 'development' || gtmId?.length}
  <noscript>
    <!-- svelte-ignore a11y_missing_attribute -->
    <iframe
      height='0'
      src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
      style='display: none; visibility: hidden;'
      width='0'
    ></iframe>
  </noscript>
{/if}
