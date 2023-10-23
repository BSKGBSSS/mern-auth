// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-ea526.firebaseapp.com",
  projectId: "mern-auth-ea526",
  storageBucket: "mern-auth-ea526.appspot.com",
  messagingSenderId: "647854531597",
  appId: "1:647854531597:web:eb110411a50fa99c162144"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);