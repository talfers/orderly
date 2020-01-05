import { useState } from 'react';

export function useOrderDrawer() {
   let mobile = false
   window.mobilecheck = function detectmob() {
     if( navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)
     ) {
        mobile = true;
      }
    return mobile
    }
  const isMobile = window.mobilecheck()

  const [orderDrawerOpen, setOrderDrawerOpen] = useState(!isMobile)

  return {
    orderDrawerOpen,
    setOrderDrawerOpen,
    isMobile
  }
}
