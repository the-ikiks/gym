import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage,ref} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBIOE5wG8FeHpFBYigFATH9aCwRWJGmrfQ",
  authDomain: "spartan-hub.firebaseapp.com",
  projectId: "spartan-hub",
  storageBucket: "spartan-hub.appspot.com",
  messagingSenderId: "716526077871",
  appId: "1:716526077871:web:f8c753eeed805184ea115a",
  measurementId: "G-JG7QLS4ZR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseDB = getFirestore();
const firebaseAuth = getAuth();
const firebaseStorage = getStorage(app); 
const firebaseStorageRef = (firebaseStorage);

export {firebaseDB, firebaseAuth, firebaseStorage, firebaseStorageRef}
