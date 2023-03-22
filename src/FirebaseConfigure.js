// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEmG4GMi7qb_SRPdqtWm6v0uNdpLMh08w",
  authDomain: "otp-acko.firebaseapp.com",
  projectId: "otp-acko",
  storageBucket: "otp-acko.appspot.com",
  messagingSenderId: "870349759972",
  appId: "1:870349759972:web:2a2b86d893ccab3d86d3f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app)