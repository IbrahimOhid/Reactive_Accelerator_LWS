const Product = ({ product }) => {
  const { id, name, image, category, price } = product;
  
  return (
    <section className="bg-white flex items-center justify-center px-4 py-16">
      <div className="flex flex-wrap items-stretch justify-center gap-5" key={id}>
        <div
          
          className="border border-zinc-200 hover:border-zinc-300 transition-colors rounded-xl p-2 flex flex-col w-46"
        >
          {/* Product Image */}
          <div className="flex items-center justify-center h-30 mb-2">
            <img
              src={image}
              alt={name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Product Name */}
          <p className="text-sm text-neutral-500 mb-2 px-2">{name}</p>

          {/* Price */}
          <div className="flex items-center justify-between gap-2 px-2">
            <span className="text-sm font-semibold text-neutral-800">
              {price}
            </span>
            <span className="text-xs  text-blue-400 underline">
              {category}
            </span>
          </div>
          <button className="bg-green-400 hover:bg-green-500 font-bold cursor-pointer px-3 mt-3 py-0.5 rounded-xl">Add To Cart</button>
        </div>
      </div>
    </section>
  );
};

export default Product;
