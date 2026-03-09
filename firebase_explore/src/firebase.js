import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcg0Gm6K5aGRNPd2VOlCk9DhCk4QYF3Qo",
  authDomain: "fir-explore-3f597.firebaseapp.com",
  projectId: "fir-explore-3f597",
  storageBucket: "fir-explore-3f597.firebasestorage.app",
  messagingSenderId: "580122925180",
  appId: "1:580122925180:web:cb59d687b14159667c91f9",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
