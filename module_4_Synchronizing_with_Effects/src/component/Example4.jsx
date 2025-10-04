import React, { useState } from 'react'
import ProductPage from './ProductPage';

const Example4 = () => {
    const productInitialValue = {
        title: 'IPHONE 17 PRO',
        price: 200000,
        description: 'I Have No Money',
        isCart: false
    }
    const [product, setProduct] = useState(productInitialValue);
    const handleProduct = ()=>{
        setProduct({
            ...product,
            isCart: true
        })
    }
  return (
    <div>
      <ProductPage product={product} addToCart={handleProduct}/>
    </div>
  )
}

export default Example4
