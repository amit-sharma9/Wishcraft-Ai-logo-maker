// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-logo-maker-39970.firebaseapp.com",
  projectId: "ai-logo-maker-39970",
  storageBucket: "ai-logo-maker-39970.firebasestorage.app",
  messagingSenderId: "556093910494",
  appId: "1:556093910494:web:0c4b6a8f524c8e1266814f",
  measurementId: "G-71PP79JJ0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);