// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database"; // 👈 IMPORTAÇÃO CORRETA!

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvkSAs6E1qp_YgWnUWEhaPt1TEIl696KE",
  authDomain: "si-p2-56d29.firebaseapp.com",
  databaseURL: "https://si-p2-56d29-default-rtdb.firebaseio.com",
  projectId: "si-p2-56d29",
  storageBucket: "si-p2-56d29.firebasestorage.app",
  messagingSenderId: "486124487447",
  appId: "1:486124487447:web:a470d3b1b4adb8b768ad52",
  measurementId: "G-6C4HKY6ZV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };