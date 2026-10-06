// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfiguration = {
  apiKey: "AIzaSyDroUTGiwzKdHliCmC0_It6uUrK6YjjQHc",
  authDomain: "tutorial-f2457.firebaseapp.com",
  projectId: "tutorial-f2457",
  storageBucket: "tutorial-f2457.firebasestorage.app",
  messagingSenderId: "128161318990",
  appId: "1:128161318990:web:389ec9dd79d682a4da9b1f",
  measurementId: "G-YJSJXC7KW0"
}

// Initialize Firebase
const app = initializeApp(firebaseConfiguration)
const analytics = getAnalytics(app)
export const auth = getAuth(app)