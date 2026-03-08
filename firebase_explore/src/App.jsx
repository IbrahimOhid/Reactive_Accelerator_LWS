import React from 'react'
import SignInWithGoogle from './SignInWithGoogle/SignInWithGoogle'
import SignInWithFacebook from './SignInWithFacebook/SignInWithFacebook'
import SignInWithGithub from './SignInWithGithub/SignInWithGithub'

const App = () => {
  return (
    <div>
      {/* <SignInWithGoogle/> */}
      {/* <SignInWithFacebook/> */}
      <SignInWithGithub/>
    </div>
  )
}

export default App