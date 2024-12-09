// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCobiJBFSSJJ0xOLsP-2h-96cHaiN9ntrs",
  authDomain: "bingewatch-dd1c9.firebaseapp.com",
  projectId: "bingewatch-dd1c9",
  storageBucket: "bingewatch-dd1c9.firebasestorage.app",
  messagingSenderId: "813065527349",
  appId: "1:813065527349:web:9fe4ab73226e6f5c75117c",
  measurementId: "G-N7S9GM4QG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Wanted to keep the auth in central place so that it can be accessed anywhere from the project
export const auth = getAuth();