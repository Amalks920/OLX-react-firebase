// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCFKugMw2EKmO6URKLKHXPL1gTmNmypxY",
  authDomain: "olx-react-ffb51.firebaseapp.com",
  projectId: "olx-react-ffb51",
  storageBucket: "olx-react-ffb51.appspot.com",
  messagingSenderId: "717302810745",
  appId: "1:717302810745:web:480347ccab3698dd89eca8",
  measurementId: "G-R406WRB2NB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();