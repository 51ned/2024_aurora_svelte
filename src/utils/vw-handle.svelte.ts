export function vwHandle(bpWidth: number) {
  let isTargetReached = $state()
  let mql: MediaQueryList | null

  const updateTarget = (e: MediaQueryListEvent) => {
    isTargetReached = e.matches
  }
  
  if (typeof window !== 'undefined') {
    mql = window.matchMedia(`(min-width: ${bpWidth}px)`)
    mql.addEventListener('change', updateTarget)

    isTargetReached = mql.matches
  }

  return isTargetReached
}
