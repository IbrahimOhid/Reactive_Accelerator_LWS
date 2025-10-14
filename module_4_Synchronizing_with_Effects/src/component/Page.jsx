import React, { useContext, useEffect, experimental_useEffectEvent as useEffectEvent } from 'react'
import { logVisit } from '../utils/logVist'
import { ShoppingCartContext } from '../contexts/ShoppingCart'

const Page = ({url}) => {
    const items = useContext(ShoppingCartContext);
    const numberOfItem = items.length;
    useEffect(()=>{
        logVisit(url, numberOfItem)
    },[url])
  return (
    <div>
        <h1>This IS Page</h1>
    </div>
  )
}

export default Page
