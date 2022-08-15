// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX5m1wpT5f9anFBFPLrS7HMSP_80u5fTk",
  authDomain: "potato-salad-82545.firebaseapp.com",
  projectId: "potato-salad-82545",
  storageBucket: "potato-salad-82545.appspot.com",
  messagingSenderId: "695160220695",
  appId: "1:695160220695:web:1ed4a1735210b4282c0052",
  measurementId: "G-P95VQK5FHN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);