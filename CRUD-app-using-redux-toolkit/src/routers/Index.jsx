import React from 'react'
import Navbar from "../layouts/Navbar";

const index = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default index