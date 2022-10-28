/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAczQByv3G1c9BPaRqocGv-8MRYSt7rnDM",
  authDomain: "coursebd-d7adc.firebaseapp.com",
  projectId: "coursebd-d7adc",
  storageBucket: "coursebd-d7adc.appspot.com",
  messagingSenderId: "299016116525",
  appId: "1:299016116525:web:0f4d36d8a0533e24379ba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;