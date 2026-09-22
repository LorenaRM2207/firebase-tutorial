// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsIxH-VUGLPr2s_C-8X19UiiGr3Vzxmbw",
  authDomain: "loginfirebase3bgb-7ea62.firebaseapp.com",
  projectId: "loginfirebase3bgb-7ea62",
  storageBucket: "loginfirebase3bgb-7ea62.firebasestorage.app",
  messagingSenderId: "676557027354",
  appId: "1:676557027354:web:032dd86305ac6efebe79a3",
  measurementId: "G-BCV4TP73FD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);