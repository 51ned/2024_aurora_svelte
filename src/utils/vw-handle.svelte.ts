import { getContext } from 'svelte'


export function vwHandle(bpWidth: number) {
  const initWidth: string = getContext('initWidth')
  
  let isTargetReached = $state(+initWidth >= bpWidth)
  let mql: MediaQueryList

  if (typeof window !== 'undefined') {
    mql = window.matchMedia(`(min-width: ${bpWidth}px)`)
    mql.addEventListener('change', e => isTargetReached = e.matches)

    isTargetReached = mql.matches
  }
  
  return isTargetReached
}
