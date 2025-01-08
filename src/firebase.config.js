// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSQteFm1tchBoaGHzCB7lnQDoqSjMXAjs",
  authDomain: "mobile-number-authentica-61a78.firebaseapp.com",
  projectId: "mobile-number-authentica-61a78",
  storageBucket: "mobile-number-authentica-61a78.firebasestorage.app",
  messagingSenderId: "243986508430",
  appId: "1:243986508430:web:bb7e5b514d432b291df7df",
  measurementId: "G-PVR383X1B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
