
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA4XXqgB5a1T3-OzaE2YYIsLZv6vyzBRdY",
  authDomain: "dtsfinalproject.firebaseapp.com",
  projectId: "dtsfinalproject",
  storageBucket: "dtsfinalproject.appspot.com",
  messagingSenderId: "239116153710",
  appId: "1:239116153710:web:2ef2a5fa9581b9a8abc77f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};