// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7w0dU-Ck88GOvfRPqga0pk1qitSmEgt4",
  authDomain: "simple-firebase-authenti-11114.firebaseapp.com",
  projectId: "simple-firebase-authenti-11114",
  storageBucket: "simple-firebase-authenti-11114.firebasestorage.app",
  messagingSenderId: "131306622292",
  appId: "1:131306622292:web:c321e3db95c055899a8cc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);