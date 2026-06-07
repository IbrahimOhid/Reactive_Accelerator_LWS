import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './page/LoginPage/LoginPage.jsx';
import Home from './page/Home/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
      element: <Home />,
  
  },{
      path: "login",
      element: <LoginPage />,
    },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
