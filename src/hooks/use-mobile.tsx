
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth
      const userAgent = navigator.userAgent.toLowerCase()
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isMobileUserAgent = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
      
      // Consider it mobile if screen is small OR it's a mobile device
      const mobile = width < MOBILE_BREAKPOINT || (isTouchDevice && isMobileUserAgent)
      setIsMobile(mobile)
    }
    
    // Use passive event listeners for better performance
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Use the modern API if available, fallback to deprecated one
    if (mql.addEventListener) {
      mql.addEventListener("change", checkMobile, { passive: true })
    } else {
      // Fallback for older browsers
      mql.addListener(checkMobile)
    }
    
    checkMobile()
    
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", checkMobile)
      } else {
        // Fallback for older browsers
        mql.removeListener(checkMobile)
      }
    }
  }, [])

  return !!isMobile
}
