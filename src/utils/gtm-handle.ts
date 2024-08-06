declare global {
  interface Window {
    gtag: (
      gtmId: string,
      option: string,
      options: Record<string, unknown>,
    ) => void
  }
}


const loadGTM = (gtmId: string) => {
  if (!document.getElementById('gtm')) {
    const script = document.createElement('script')

    script.async = true
    script.id = 'gtm'
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`

    document.head.appendChild(script);
  }
}

const trackEvent = ({
  action,
  category,
  label,
  value
}: Record<string, string>) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}

const trackPageView = (url: string, trackingId: string) => {
  window.gtag('config', trackingId, {
    page_path: url
  })
}


export { loadGTM, trackEvent, trackPageView }
