// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFIhBPBMUuLUX2VheTmI0nkZBkomxR64k",
  authDomain: "user-email-password-auth-e1a57.firebaseapp.com",
  projectId: "user-email-password-auth-e1a57",
  storageBucket: "user-email-password-auth-e1a57.firebasestorage.app",
  messagingSenderId: "29056728904",
  appId: "1:29056728904:web:6109dd5211e9d9cdc6bd7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;