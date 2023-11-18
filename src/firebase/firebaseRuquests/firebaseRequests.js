import { collection, addDoc } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from "../firebase";
import { doc, setDoc, getDocs } from "firebase/firestore";

async function postUserData({ userId, userData }) {
  console.log("post user data");
  await setDoc(doc(firebase.db, `user-${userId}`, "userData"), userData);
}

async function getUserData({ userId, setUserData }) {
  const querySnapshot = await getDocs(
    collection(firebase.db, `user-${userId}`)
  );
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    setUserData(doc.data());
  });
}

const firebaseRequests = { postUserData, getUserData };

export default firebaseRequests;
