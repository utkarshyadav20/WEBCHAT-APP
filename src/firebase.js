// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwhhD_EGqVszFmvUEOS4ke1dnZUGbNP8o",
  authDomain: "webchat-b38f1.firebaseapp.com",
  projectId: "webchat-b38f1",
  storageBucket: "webchat-b38f1.appspot.com",
  messagingSenderId: "83490723759",
  appId: "1:83490723759:web:26e016f80be97fcf78c15a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth(); 
export const storage = getStorage();
export const db=getFirestore();

