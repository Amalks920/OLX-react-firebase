import { firebaseConfig } from "./firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// Create a root reference
export const storage = getStorage();

const app=initializeApp(firebaseConfig)

export const db=getFirestore(app);


