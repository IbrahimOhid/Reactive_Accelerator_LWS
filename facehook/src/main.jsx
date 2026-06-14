import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "./page/LoginPage/LoginPage";
import Home from "./page/Home/Home";
import Root from "./layout/Root";
import AuthProvider from "./providers/AuthProvider";
import PrivateRouters from "./router/PrivateRouters";

const router = createBrowserRouter([
  {
    element: <PrivateRouters />,
    children: [
      {
        path: "/",
        element: <Root />,
        children:[
           {
        path: "home",
        element: <Home />,
      }
        ]
      },
     
    ]
  },
  {
    path: "login",
    element: <LoginPage />,
  }
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);