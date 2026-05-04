import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home";
import ErrorPage from "../src/pages/ErrorPage";
import Navbar from "./layouts/Navbar";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Navbar/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add_book",
        
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
