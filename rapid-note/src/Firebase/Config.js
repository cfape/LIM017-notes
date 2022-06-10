import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqp04MiMp0DDDYyiD6TLsFGQ0GXXPkMHY",
  authDomain: "labnotes-rapidnotes.firebaseapp.com",
  projectId: "labnotes-rapidnotes",
  storageBucket: "labnotes-rapidnotes.appspot.com",
  messagingSenderId: "668443373633",
  appId: "1:668443373633:web:599ce2a957c88bf92196c0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
