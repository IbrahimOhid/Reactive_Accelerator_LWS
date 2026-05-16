import { useDispatch, useSelector } from "react-redux";
import { decrementItem, incrementItem } from "../../redux/features/carts/cartSlice";

const CartProduct = () => {
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const subtotal = carts.reduce((total, product) => {
  return total + product.price * product.quantity;
}, 0);
const shipping = 12;

  const handleIncrementItem = (product) => {
    dispatch(incrementItem(product));
  };
  const handleDecrementItem = (product) => {
    dispatch(decrementItem(product))
  };
  const handelDeleteItem = () => {};

  return (
    <div className="bg-white min-h-screen">
      <div className="flex flex-col md:flex-row py-12 max-w-7xl w-full px-4 sm:px-6 mx-auto gap-8 lg:gap-12">
        {/* LEFT SIDE: PRODUCT LIST */}
        <div className="flex-1">
          <div className="flex items-baseline justify-between mb-8 border-b border-slate-100 pb-6">
            <h1 className="text-2xl font-bold text-slate-900">Shopping Cart</h1>
            <span className="text-sm font-medium text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
              {carts.length} Items
            </span>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-[3fr_1fr_1fr] text-slate-400 text-xs font-bold uppercase tracking-wider pb-4 px-2">
            <p className="text-left">Product</p>
            <p className="text-center">Subtotal</p>
            <p className="text-right">Action</p>
          </div>

          {/* Product Rows */}
          <div className="space-y-4">
            {carts.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-[3fr_1fr_1fr] items-center rounded-2xl border border-slate-100 bg-white p-2 transition-all hover:border-sky-200 hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 flex-shrink-0 bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                    <img
                      className="w-full h-full object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-bold text-slate-800 text-sm truncate">
                      {product.name}
                    </p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                      <p>
                        Price:{" "}
                        <span className="text-slate-900 font-medium">
                         ${product.price}
                        </span>
                      </p>
                      <p>
                        Category:{" "}
                        <span className="text-slate-900 font-medium">
                          {product.category}
                        </span>
                      </p>

                      <div className="flex items-center gap-1">
                        <div className="flex items-center">
                          <button
                            onClick={()=>handleDecrementItem(product)}
                            className="bg-gray-200 rounded-l-lg px-2 py-1 cursor-pointer"
                          >
                            -
                          </button>
                          <span className="mx-2 text-gray-600">
                            {product.quantity}
                          </span>
                          <button
                            onClick={() => handleIncrementItem(product)}
                            className="bg-gray-200 rounded-r-lg px-2 py-1 cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-center font-bold text-slate-900 text-sm">
                $ {product.price * product.quantity}
                </p>

                <div className="flex justify-end pr-4">
                  <button
                    onClick={handelDeleteItem}
                    className="p-2 rounded-full hover:bg-red-50 group transition-colors cursor-pointer"
                  >
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path
                        d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"
                        stroke="currentColor"
                        className="text-slate-300 group-hover:text-red-500"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="flex items-center mt-10 gap-2 text-slate-500 font-bold text-sm hover:text-sky-600 transition-colors cursor-pointer group">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Continue Shopping
          </button>
        </div>

        {/* RIGHT SIDE: ORDER SUMMARY */}
        <div className="w-full md:w-[380px]">
          <div className="sticky top-24 rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/40">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-6">
              <div className="border-t border-slate-50 pt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Subtotal</span>
                  <span className="font-bold text-slate-900">$ {subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Shipping</span>
                  <span className="font-bold text-emerald-600">{shipping}</span>
                </div>
                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-base font-bold text-slate-900">
                    Total
                  </span>
                  <span className="text-2xl font-black text-slate-900">
                    $ {subtotal + shipping}
                  </span>
                </div>
              </div>

              <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold text-sm shadow-lg shadow-slate-200 hover:bg-sky-600 hover:shadow-sky-200 transition-all active:scale-[0.98] cursor-pointer">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
