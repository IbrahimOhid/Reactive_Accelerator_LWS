import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root.jsx";
import Home from "./page/Home/Home.jsx";
import Product from "./page/Product/Product.jsx";
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
        element: <Product />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}>App</RouterProvider>;
};

export default App;
