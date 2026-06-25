import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./page/Login/LoginPage";
import RegistrationPage from "./page/Registration/RegistrationPage";
import Home from "./page/Home/Home";
import Root from "./layout/Root";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoutes from "./routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // Public Routes
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "registration",
        element: <RegistrationPage />,
      },

      // Protected Routes
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "home",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
);
