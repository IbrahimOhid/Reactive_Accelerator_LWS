import React from "react";
import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

const SignInWithFacebook = () => {
  const auth = getAuth(app);
  const provider = new FacebookAuthProvider();

  const signInFacebookBtnClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log( result.user);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="text-center py-10 mx-auto">
      <button
        onClick={signInFacebookBtnClick}
        className="bg-green-600 px-4 py-2 rounded-2xl font-bold text-white"
      >
        Sign In Facebook
      </button>
    </div>
  );
};

export default SignInWithFacebook;
