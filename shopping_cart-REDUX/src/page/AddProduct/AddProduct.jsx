import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/features/products/productSlice";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(addProduct(data));
    navigate("/product");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[400px] rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all"
      >
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Add New Product</h2>
          <p className="text-sm text-slate-500">
            Fill in the details to list a new item.
          </p>
        </div>

        <div className="space-y-4">
          {/* Product Name */}
          <div>
            <label
              className="text-xs font-bold uppercase tracking-wider text-slate-500"
              htmlFor="name"
            >
              Product Name
            </label>
            <input
              id="name"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
              type="text"
              placeholder="e.g. Premium Wireless Headphones"
              {...register("name", { required: true })}
            />
          </div>

          

          {/* product image url */}
          <div>
            <label className="text-sm font-medium block text-gray-600">
              Image URL:
            </label>
            <input
              type="text"
              name="image"
              {...register("image", { required: true })}
              id="image"
              placeholder="https://"
              className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className="text-xs font-bold uppercase tracking-wider text-slate-500"
                htmlFor="price"
              >
                Price
              </label>
              <input
                id="price"
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500"
                type="number"
                placeholder="0.00"
                {...register("price", { required: true })}
              />
            </div>
            <div>
              <label
                className="text-xs font-bold uppercase tracking-wider text-slate-500"
                htmlFor="category"
              >
                Category
              </label>
              <input
                id="category"
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500"
                type="text"
                placeholder="Electronics"
                {...register("category", { required: true })}
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
