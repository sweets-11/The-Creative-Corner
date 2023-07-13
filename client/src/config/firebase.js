import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAe4UA-Z8Fp2WLfSXbtj-drGhuHwKtXSB0",
  authDomain: "blog-b6924.firebaseapp.com",
  projectId: "blog-b6924",
  storageBucket: "blog-b6924.appspot.com",
  messagingSenderId: "949725203655",
  appId: "1:949725203655:web:18d0704bf100d122e402e2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


export const db = getFirestore(app);
export const storage = getStorage(app);