// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKYnLzMQmHi8K2lYED_gYqTm8UPPYSgxM",
  authDomain: "classhare-se.firebaseapp.com",
  projectId: "classhare-se",
  storageBucket: "classhare-se.appspot.com",
  messagingSenderId: "136864175312",
  appId: "1:136864175312:web:4cd5fec7d3e6f790f5bad5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;