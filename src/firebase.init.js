// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzzHlrIdaSZIwav2q-IUFaGZkTiPxZy-c",
  authDomain: "car-service-cdb91.firebaseapp.com",
  projectId: "car-service-cdb91",
  storageBucket: "car-service-cdb91.appspot.com",
  messagingSenderId: "51223551165",
  appId: "1:51223551165:web:a9b5109373d2cc746b6bd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;