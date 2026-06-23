import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import LoginPage from "./page/Login/LoginPage";
import RegistrationPage from "./page/Registration/RegistrationPage";
import Home from "./page/Home/Home";
import Root from "./layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "registration",
        element: <RegistrationPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
