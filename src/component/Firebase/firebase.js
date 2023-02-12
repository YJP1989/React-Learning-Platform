import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBU1gyQxAoAgbTJ77Pt9EqSGQBfWC2fhks",
    authDomain: "ga-project-2-learning-app.firebaseapp.com",
    projectId: "ga-project-2-learning-app",
    storageBucket: "ga-project-2-learning-app.appspot.com",
    messagingSenderId: "516015255150",
    appId: "1:516015255150:web:bfe3c92b599583efab407f",
    measurementId: "G-RZHBM79NH9"
  };
  export const app =initializeApp(firebaseConfig);
  export const auth=getAuth();
  export const storage=getStorage();
  export const db=getFirestore();
