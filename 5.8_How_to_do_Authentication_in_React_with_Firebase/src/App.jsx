import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Reset from './pages/Reset';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/registration',
    element: <Registration/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/reset',
    element: <Reset/>
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App