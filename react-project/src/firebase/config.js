// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh-l5xB6q5zYdCwtDqeh2CKAUOMIQ0ies",
  authDomain: "myc-shop.firebaseapp.com",
  projectId: "myc-shop",
  storageBucket: "myc-shop.firebasestorage.app",
  messagingSenderId: "113071033727",
  appId: "1:113071033727:web:6ea476fcba26ec4fab9e4a",
  measurementId: "G-RQK6YT177N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);