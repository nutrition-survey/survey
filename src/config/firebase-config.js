// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    updateDoc
} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1sIAkE-AmUzBDLXtmvyRDWZX8wYWppDA",
  authDomain: "fir-learning-24903.firebaseapp.com",
  projectId: "fir-learning-24903",
  storageBucket: "fir-learning-24903.appspot.com",
  messagingSenderId: "125607179006",
  appId: "1:125607179006:web:f2f2177fdbf88915422baf"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services
export const db = getFirestore();

