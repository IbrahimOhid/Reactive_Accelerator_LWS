import React, { useContext } from 'react'
import { CountContext } from '../context/CountContext'

const LastNav = () => {
    const countState = useContext(CountContext)
  return (
    <div>
      <button type="button">Last Nav Count - {countState}</button>
    </div>
  )
}

export default LastNav
