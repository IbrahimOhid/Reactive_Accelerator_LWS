import React, { useSyncExternalStore } from 'react'

const UseOnlineStatus = () => {
    const subscribe = (callback)=>{
        // subscribe
        window.addEventListener('online', callback)
        window.addEventListener('offline', callback)
        //cleanup
        return ()=>{
            window.removeEventListener('online', callback)
            window.removeEventListener('offline', callback)
        }
    }
  return useSyncExternalStore(
    subscribe,
    ()=> navigator.onLine,
    ()=> true
  )
}

export default UseOnlineStatus
