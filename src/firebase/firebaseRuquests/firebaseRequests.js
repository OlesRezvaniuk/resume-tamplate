import { collection, addDoc } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from "../firebase";
import { doc, setDoc, getDocs } from "firebase/firestore";

async function postUserData({ userId, userData }) {
  console.log("post user data");
  await setDoc(doc(firebase.db, "users", userId), userData);
}

async function getUserData({ setUserData }) {
  const querySnapshot = await getDocs(collection(firebase.db, "user"));
  querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    setUserData(doc.data());
    console.log(doc.data());
  });
}

const firebaseRequests = { postUserData, getUserData };

export default firebaseRequests;
