import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../Product/Product'

const Home = () => {
  const products = useSelector((state)=> state.products)
  return (
    <div>
      {
        products && products.map((product)=>{
          <Product product={product}/>
        })
      }
    </div>
  )
}

export default Home