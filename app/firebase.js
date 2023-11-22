// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzDX6oqa70Ip9kag7fEj1unjpFJ9vjKpU",
  authDomain: "allen-21179.firebaseapp.com",
  databaseURL: "https://allen-21179-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "allen-21179",
  storageBucket: "allen-21179.appspot.com",
  messagingSenderId: "1033508561962",
  appId: "1:1033508561962:web:6bae7cd746810224698f53",
  measurementId: "G-RFD70DSGB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);