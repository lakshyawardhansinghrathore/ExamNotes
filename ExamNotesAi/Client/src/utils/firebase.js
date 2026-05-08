
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "noteforge-f3fa9.firebaseapp.com",
  projectId: "noteforge-f3fa9",
  storageBucket: "noteforge-f3fa9.firebasestorage.app",
  messagingSenderId: "48616569591",
  appId: "1:48616569591:web:068e63d9ebf970287ff1f2"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };