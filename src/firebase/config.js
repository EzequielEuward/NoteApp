// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG5hw9c7vpQM7s5515cTcG27wNjyGnIDA",
  authDomain: "react-cursos-8804e.firebaseapp.com",
  projectId: "react-cursos-8804e",
  storageBucket: "react-cursos-8804e.appspot.com",
  messagingSenderId: "732935883915",
  appId: "1:732935883915:web:f14ab4eb76dc4dbe1d588e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)