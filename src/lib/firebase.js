// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbYnEoVd43t1n-0B8oXroL_NbK-Iynzy4",
  authDomain: "codeconnect-28d3a.firebaseapp.com",
  projectId: "codeconnect-28d3a",
  storageBucket: "codeconnect-28d3a.appspot.com",
  messagingSenderId: "420611003135",
  appId: "1:420611003135:web:535e7a075136e2b42532ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
