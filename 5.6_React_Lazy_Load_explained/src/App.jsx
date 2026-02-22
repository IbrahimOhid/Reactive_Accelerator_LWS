import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import { ErrorBoundary } from "react-error-boundary";
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));
const Products = lazy(() => import("./pages/Products"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Page Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "home",
        element: (
          <Suspense fallback={<div>Home Page Data Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<div>About Page Data Loading...</div>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "service",
        element: (
          <Suspense fallback={<div>Service Page Data Loading...</div>}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "product",
        element: (
          <ErrorBoundary fallback={<div className="font-bold text-red-500">Something is Wrong!</div>}>
            <Suspense fallback={<div>Product Page Data Loading...</div>}>
              <Products />
            </Suspense>
          </ErrorBoundary>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
