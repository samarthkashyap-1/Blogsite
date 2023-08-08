import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_APIKEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE,
  messagingSenderId: import.meta.env.VITE_REACT_APP_SENDER,
  appId: import.meta.env.VITE_REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider()
