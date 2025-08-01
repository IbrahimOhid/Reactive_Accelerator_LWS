import React, { useContext } from 'react'
import LastNav from './LastNav'
import { CountContext } from '../context/CountContext'

const InsideNav = () => {
    const countState2 = useContext(CountContext)
  return (
    <div>
        <LastNav/>
      <button>Inside Nav Count -{countState2}</button>
    </div>
  )
}

export default InsideNav
