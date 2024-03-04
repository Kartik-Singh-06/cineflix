// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtMF_la3SX-ejsjLItAKnyS3kJXwgE4_4",
  authDomain: "cineflix-ccd9e.firebaseapp.com",
  projectId: "cineflix-ccd9e",
  storageBucket: "cineflix-ccd9e.appspot.com",
  messagingSenderId: "858853969344",
  appId: "1:858853969344:web:725e1cbc40655b511f8c25",
  measurementId: "G-Z5GL4ST3ZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();