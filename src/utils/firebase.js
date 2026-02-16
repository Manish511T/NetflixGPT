// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtXDTN2oW4vX8uTRB7RRs1FJ4K4Xy3-7U",
  authDomain: "gptott-cded0.firebaseapp.com",
  projectId: "gptott-cded0",
  storageBucket: "gptott-cded0.firebasestorage.app",
  messagingSenderId: "308586719804",
  appId: "1:308586719804:web:d95b288faea0e46bb37139",
  measurementId: "G-L8SQMPX2M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();