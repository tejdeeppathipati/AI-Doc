//src/firebase/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjfHzY-pXDLRPM8E1zSvFxQRJLKzA8gNM",
  authDomain: "hackprinceton-88d6e.firebaseapp.com",
  projectId: "hackprinceton-88d6e",
  storageBucket: "hackprinceton-88d6e.firebasestorage.app",
  messagingSenderId: "996345843829",
  appId: "1:996345843829:web:572fb01ac3d77d069a683c",
  measurementId: "G-7S1ELPVRF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); // Firestore Database
const storage = getStorage(app); 

export { app, auth, db, storage };
