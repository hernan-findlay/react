import {getFirestore} from "firebase/firesstore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCsbPrKrOJM_oXVgp5LwKZqwsHPkn2cAto",
  authDomain: "vinoteca-59cf3.firebaseapp.com",
  projectId: "vinoteca-59cf3",
  storageBucket: "vinoteca-59cf3.appspot.com",
  messagingSenderId: "925031539443",
  appId: "1:925031539443:web:24415bc38b7d03ab868d86"
};


initializeApp(firebaseConfig);
const db= getFirestore()
export default db
