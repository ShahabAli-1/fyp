import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA01kOtHxAt7XtHHCFe73hTlavDm7tg32o",
  authDomain: "e-wakeel-5a1b7.firebaseapp.com",
  projectId: "e-wakeel-5a1b7",
  storageBucket: "e-wakeel-5a1b7.appspot.com",
  messagingSenderId: "395156148937",
  appId: "1:395156148937:web:198795876d833ae8b53318",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
