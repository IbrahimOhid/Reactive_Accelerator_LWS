import React, { Suspense } from 'react'
import PostSelector from './component/PostSelector'

const App = () => {
  return (
    <div>
      <h1>React Suspense and Error Boundaries</h1>
      <Suspense fallback={<h1>Loading...</h1>} > <PostSelector/></Suspense>
     
    </div>
  )
}

export default App