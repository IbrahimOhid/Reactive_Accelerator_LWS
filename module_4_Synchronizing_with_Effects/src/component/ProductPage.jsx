import React, { useState } from "react";

const ProductPage = ({ product, addToCart }) => {
  const [notificationMsg, setNotificationMsg] = useState(null);
  const buyProduct = () => {
    addToCart(product);
    showNotification(`Added ${product.title} to the Shopping Cart`);
  };
  const handleBuyClick = () => {
    buyProduct(product);
  };
  const handleCheckoutClick = () => {
    buyProduct(product);
    navigateTo("/checkout");
  };
  const navigateTo = (url) => {
    console.log(`product Url ${url}`);
  };
  const showNotification = (msg) => {
    setNotificationMsg(msg);
  };
  return (
    <div>
      <section className=" body-font pt-12">
        <div className="container mx-auto bg-orange-300 w-1/4 px-5 py-24 md:flex-row flex-col items-center ">
          <div className=" flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
            <h1 className="title-font  text-2xl mb-4 font-medium text-gray-900">
              {product.title}
            </h1>
            <h1 className="title-font   mb-4 font-medium text-gray-900">
              {product.price.toFixed(2)}
            </h1>
            <p className="mb-8 leading-relaxed">{product.description}</p>
            <div className="flex justify-between gap-5">
              <button
                onClick={handleBuyClick}
                className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg"
              >
                Buy Now
              </button>
              <button
                onClick={handleCheckoutClick}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                CheckOut
              </button>
            </div>
          </div>
        </div>
      </section>
      {notificationMsg && (
        <p
          onClick={() => setNotificationMsg(null)}
          className="text-center text-xl py-5 bg-teal-600 "
        >
          {notificationMsg}
        </p>
      )}
    </div>
  );
};

export default ProductPage;
