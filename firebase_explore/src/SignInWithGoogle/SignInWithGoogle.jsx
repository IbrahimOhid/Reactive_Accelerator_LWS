import React, { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";


const SignInWithGoogle = () => {
  
  const provider = new GoogleAuthProvider();

  const [newUser, setNewUser] = useState(null);

  const signInBtnClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setNewUser(result.user);
    } catch (error) {
      throw new Error(error);
    }
  };

  const signOutBtnClick = async () => {
    try {
      await signOut(auth);
      setNewUser(null);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="text-center py-10 mx-auto">
      {newUser && (
        <div>
          <img src={newUser.photoURL} alt="user image" />
          <h1>{newUser.displayName}</h1>
          <h4>{newUser.email}</h4>
        </div>
      )}

      {newUser ? (
        <button
          onClick={signOutBtnClick}
          className="bg-red-600 px-4 py-2 rounded-2xl font-bold text-white"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={signInBtnClick}
          className="bg-green-400 px-4 py-2 rounded-2xl font-bold text-white"
        >
          SignInWithGoogle
        </button>
      )}
    </div>
  );
};

export default SignInWithGoogle;
