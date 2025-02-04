// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZsJ9i071rewZW-Qop4JwFrcNk0Os4WW0",
  authDomain: "spirit-25-9fdac.firebaseapp.com",
  databaseURL: "https://spirit-25-9fdac-default-rtdb.firebaseio.com",
  projectId: "spirit-25-9fdac",
  storageBucket: "spirit-25-9fdac.firebasestorage.app",
  messagingSenderId: "118668354031",
  appId: "1:118668354031:web:84079dd1e38fca8069961a",
  measurementId: "G-2C9YVZ64Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
