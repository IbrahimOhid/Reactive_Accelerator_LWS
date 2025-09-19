import React, { useEffect } from 'react'
import MyComponent from './component/MyComponent'
import './App.css'

const App = () => {
  useEffect(()=>{
    console.log('hello')
  })
  return (
    <div>
      <MyComponent/>
    </div>
  )
}

export default App
