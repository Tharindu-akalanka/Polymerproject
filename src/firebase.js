import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCisssZp6DFoehLzefdxcTnp1T-nL6Id2I",
  authDomain: "polymer-670ab.firebaseapp.com",
  projectId: "polymer-670ab",
  storageBucket: "polymer-670ab.firebasestorage.app",
  messagingSenderId: "763401826004",
  appId: "1:763401826004:web:2c79c743e80b02ad145541",
  measurementId: "G-Y7EKFVM32X"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
