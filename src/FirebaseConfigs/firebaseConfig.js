// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGstmwPvNuyrK_gtIqseAqvlq9xPrXBRo",
  authDomain: "eshop-f4426.firebaseapp.com",
  projectId: "eshop-f4426",
  storageBucket: "eshop-f4426.appspot.com",
  messagingSenderId: "249943816276",
  appId: "1:249943816276:web:b8986d7756fa18134155c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)