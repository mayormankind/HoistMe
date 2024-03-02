// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmwSaRV-eJ8i5bEExf3hhLKQ6Fo8_tr2w",
  authDomain: "hoistme-a2501.firebaseapp.com",
  projectId: "hoistme-a2501",
  storageBucket: "hoistme-a2501.appspot.com",
  messagingSenderId: "508612038386",
  appId: "1:508612038386:web:745aad9fbd9f7871620a6b",
  measurementId: "G-SKCFWM318F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const store = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth , provider, db, store};