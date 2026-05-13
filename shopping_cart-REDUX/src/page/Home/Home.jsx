import { useSelector } from 'react-redux'
import Product from '../Product/Product'

const Home = () => {
  const products = useSelector((state)=> state.products)

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">
    {/* 2 columns on mobile, 3 on tablet, 4-5 on desktop */}
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  </div>
</section>
  )
}

export default Home