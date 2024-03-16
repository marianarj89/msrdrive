// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

let firebaseConfig = {};

if (import.meta.env.MODE === "development") {
  firebaseConfig = {
    apiKey: "AIzaSyCGAoX7lqmJzpKaL7QI16tbbwEC5p9KKWk",
    authDomain: "interfaces-com-react.firebaseapp.com",
    projectId: "interfaces-com-react",
    storageBucket: "interfaces-com-react.appspot.com",
    messagingSenderId: "54797346925",
    appId: "1:54797346925:web:a1e64f40105e9895f1b764"
  };
} else {
  firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_APIKEY,
    authDomain: import.meta.env.FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.FIREBASE_PROJECTID,
    storageBucket: import.meta.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.FIREBASE_MESSAGINGSENDERID,
    appId: import.meta.env.FIREBASE_APPID
  };
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; 
export default app;