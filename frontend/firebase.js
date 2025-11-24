// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-jGI_IXmBbO3qJaoWaoqvrnacv4FhT8c",
  authDomain: "food-delivery-2c574.firebaseapp.com",
  projectId: "food-delivery-2c574",
  storageBucket: "food-delivery-2c574.firebasestorage.app",
  messagingSenderId: "733279949580",
  appId: "1:733279949580:web:be67c650b5a54522ee2f29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth};