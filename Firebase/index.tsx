// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUMMqxZN4aFpM8k9QxwmWxuhh5tgDzMb4",
  authDomain: "travel-61d03.firebaseapp.com",
  projectId: "travel-61d03",
  storageBucket: "travel-61d03.appspot.com",
  messagingSenderId: "616120084270",
  appId: "1:616120084270:web:d2cbb685a13510feaf3cbf",
  measurementId: "G-3C8PKNBC3K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
