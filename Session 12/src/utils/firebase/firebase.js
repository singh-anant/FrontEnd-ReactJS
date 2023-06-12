// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //start new application
import { getAuth } from "firebase/auth"; //

const firebaseConfig = {
  apiKey: "AIzaSyBVjNDfpKP_w-rDBWf38gQnizVsjlljg50",
  authDomain: "spiceup-test-9fe1d.firebaseapp.com",
  projectId: "spiceup-test-9fe1d",
  storageBucket: "spiceup-test-9fe1d.appspot.com",
  messagingSenderId: "1043462164553",
  appId: "1:1043462164553:web:d6628d4231f34708abaf98",
  measurementId: "G-FPDTWYW54J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
