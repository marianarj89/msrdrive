// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

let firebaseConfig = {};

if (import.meta.env.MODE === "development") {
  // Use development keys
  firebaseConfig = {
    apiKey: "YOUR_DEV_API_KEY",
    authDomain: "YOUR_DEV_AUTH_DOMAIN",
    projectId: "YOUR_DEV_PROJECT_ID",
    storageBucket: "YOUR_DEV_STORAGE_BUCKET",
    messagingSenderId: "YOUR_DEV_MESSAGING_SENDER_ID",
    appId: "YOUR_DEV_APP_ID"
  };
} else {
  // Use .env variables
  firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID
  };
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; 
export default app;
