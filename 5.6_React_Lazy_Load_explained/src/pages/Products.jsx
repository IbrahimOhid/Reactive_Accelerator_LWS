import React, { use } from "react";
import { fetchPostData } from "../api/fetchPostData";
const getProducts = fetchPostData();
const Products = () => {
  const products = use(getProducts);
 
  return <div> <div>
      {products.map((product) => (
        <div key={product.id} className="px-40 py-4 border border-amber-700 mx-20 my-10">
          <p className="w-10 h-10 px-2 py-2 text-center mx-auto bg-teal-500 text-white">{product.id}</p>
          <h1 className="font-bold">▶️ {product.title}</h1>
          <p>{product.body}</p>
        </div>
      ))}
    </div></div>;
};

export default Products;
