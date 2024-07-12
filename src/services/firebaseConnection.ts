import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsYhp0K88vBc6f4mpJznkru_dJRpxK5Lk",
  authDomain: "reactkinks.firebaseapp.com",
  projectId: "reactkinks",
  storageBucket: "reactkinks.appspot.com",
  messagingSenderId: "968992920367",
  appId: "1:968992920367:web:49de41023b82d7fd7887da"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };