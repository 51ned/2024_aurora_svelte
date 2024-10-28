<script lang='ts'>
  import { page } from '$app/stores'

  const gtmId = import.meta.env.VITE_GTM_ID
  const scriptTagId = 'gtm'
  const isJsEnabled = true

  const trackPageView = (url: string, gtmId: string) => {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
      gtmId: gtmId
    })
  }

  $effect(() => {
    if (typeof window !== 'undefined') {
      if (!document.getElementById(scriptTagId)) {
        const scriptTag = document.createElement('script')

        scriptTag.async = true
        scriptTag.fetchPriority = 'low'
        scriptTag.id = scriptTagId
        
        scriptTag.innerHTML = `
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

        document.head.appendChild(scriptTag)
        scriptTag.onload = () => trackPageView($page.url.pathname, gtmId)
      }
      
      else trackPageView($page.url.pathname, gtmId)
    }
  })
</script>

{#if !isJsEnabled}
  <noscript>
    <iframe
      height='0'
      src='https://www.googletagmanager.com/ns.html?id={gtmId}'
      style='display:none;visibility:hidden'
      title='gtm'
      width='0'
    >
    </iframe>
  </noscript>
{/if}
