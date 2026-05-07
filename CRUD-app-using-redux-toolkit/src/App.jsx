import React from "react";
import Root from "./layouts/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddBook from "./features/book/AddBook";
import ShowBook from "./features/book/ShowBook";
import ErrorPage from "./pages/ErrorPage";
import EditBook from "./features/book/EditBook";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <AddBook />,
        },
        {
          path: "/show-book",
          element: <ShowBook />,
        },
        {
          path: "/edit-book",
          element: <EditBook/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
