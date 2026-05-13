import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root.jsx";
import Home from "./page/Home/Home.jsx";
import Product from "./page/Product/Product.jsx";
import AddProduct from "./page/AddProduct/AddProduct.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}>App</RouterProvider>;
};

export default App;
