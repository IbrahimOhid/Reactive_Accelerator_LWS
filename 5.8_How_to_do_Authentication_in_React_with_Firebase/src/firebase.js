import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS2zmLuYWT0ZWbWrHAnP1jKtocVhnNLO0",
  authDomain: "guestbook-ac8ee.firebaseapp.com",
  projectId: "guestbook-ac8ee",
  storageBucket: "guestbook-ac8ee.firebasestorage.app",
  messagingSenderId: "1013316229867",
  appId: "1:1013316229867:web:7de50610c24c0225b4fcae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (error) {
     console.error(error.message);
  }
};

export const logInWithEmailAndPassword = async (auth, email, password) => {
  try {
    const res = await signInWithEmailAndPassword(email, password);
    return res;
  } catch (error) {
    console.error(error.message);
  }
};
