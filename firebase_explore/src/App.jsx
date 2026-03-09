import React from 'react'
import SignInWithGoogle from './SignInWithGoogle/SignInWithGoogle'
import SignInWithFacebook from './SignInWithFacebook/SignInWithFacebook'
import SignInWithGithub from './SignInWithGithub/SignInWithGithub'
import PasswordAuth from './PasswordAuth/PasswordAuth'

const App = () => {
  return (
    <div>
      {/* <SignInWithGoogle/> */}
      {/* <SignInWithFacebook/> */}
      {/* <SignInWithGithub/> */}
      <PasswordAuth/>
    </div>
  )
}

export default App