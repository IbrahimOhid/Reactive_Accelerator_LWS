import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home";
import ErrorPage from "../src/pages/ErrorPage";
import AddBooks from "./features/books/AddBooks";
import Root from "./routes/Root";
import ShowBooks from "./features/books/ShowBooks";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add_book",
        element: <AddBooks />,
      },
      { path: "show_book", element: <ShowBooks /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
