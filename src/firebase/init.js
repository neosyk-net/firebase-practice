// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzS7G0WN2TRRIKIGvBYqqNztcGeyMYMMQ",
  authDomain: "fir-practice-ad59e.firebaseapp.com",
  projectId: "fir-practice-ad59e",
  storageBucket: "fir-practice-ad59e.firebasestorage.app",
  messagingSenderId: "494533191694",
  appId: "1:494533191694:web:b34686417e61d84d21345f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();