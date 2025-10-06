import React from 'react'
import UseOnlineStatus from '../hooks/UseOnlineStatus'

const Example9 = () => {
    const isOnline = UseOnlineStatus()
  return (
    <div className='text-center py-20'>
      <h1>I am <span className={`${isOnline ? 'text-green-400' : 'text-red-400'} font-bold`}>{isOnline ? 'Online' : 'Offline'}</span></h1>
    </div>
  )
}

export default Example9
