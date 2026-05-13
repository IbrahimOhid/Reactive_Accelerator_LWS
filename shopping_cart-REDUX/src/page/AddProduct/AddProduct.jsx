import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/features/products/ProductSlice";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  
  // Fix: Removed the empty string from useDispatch()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddProduct = (e) => {
    e.preventDefault();
    // Ensure all data is collected correctly
    const product = { id, name, imgUrl, price, category };
    dispatch(addProduct(product));
    navigate("/product");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <form 
        onSubmit={handleAddProduct} 
        className="w-full max-w-[400px] rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all"
      >
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Add New Product</h2>
          <p className="text-sm text-slate-500">Fill in the details to list a new item.</p>
        </div>

        <div className="space-y-4">

          {/* Product Name */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500" htmlFor="name">Product Name</label>
            <input
              id="name"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
              type="text"
              placeholder="e.g. Premium Wireless Headphones"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Image URL - VISIBILITY IMPROVED */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500" htmlFor="img">Product Image URL</label>
            <input
              id="img"
              className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
              type="text"
              placeholder="https://images.com/product.jpg"
              required
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500" htmlFor="price">Price</label>
              <input
                id="price"
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500"
                type="number"
                placeholder="0.00"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500" htmlFor="category">Category</label>
              <input
                id="category"
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500"
                type="text"
                placeholder="Electronics"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6">
          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-sky-600 active:scale-95 cursor-pointer shadow-lg shadow-slate-200"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;