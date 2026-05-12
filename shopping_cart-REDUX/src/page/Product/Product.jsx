import React from 'react'

const Product = ({product}) => {
  const {id, name, img, category, price} = product;
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  <div className="rounded-lg bg-white shadow-sm border hover:shadow-md transition-shadow">
    <div className="relative">
      <a href="#">
        <img
          alt="product"
          className="w-full h-48 object-cover rounded-t-lg"
          src={img}
        />
      </a>
      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors absolute top-2 right-2 bg-green-100 text-green-800">
        Active
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between mb-2">
        <a href="#">
          <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 flex-1">
            {name}
          </h3>
        </a>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[#E26038]">${price}</span>
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors text-xs">
            Cars
          </div>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Product