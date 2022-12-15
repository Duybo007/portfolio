// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByxXkAbQljULVCG27mH_-IjCgi7iY3CB8",
    authDomain: "portfolio-6fba0.firebaseapp.com",
    projectId: "portfolio-6fba0",
    storageBucket: "portfolio-6fba0.appspot.com",
    messagingSenderId: "343927500593",
    appId: "1:343927500593:web:6ab59d30d60d210dcc4a10"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app);
export {db}