// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2DOq4P1NMoSb1aUvjY0VfeWNSOZJfFX8",
  authDomain: "resume-templete.firebaseapp.com",
  projectId: "resume-templete",
  storageBucket: "resume-templete.appspot.com",
  messagingSenderId: "787948052809",
  appId: "1:787948052809:web:6ce057d92230235f687a98",
  measurementId: "G-FH5HVNSYGD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore(app);

const firebase = { analytics, provider, auth, db };

export default firebase;
