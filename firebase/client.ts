// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUSfZ_ZOHOTZsRSMLsk-Vw5R72Bc01CG4",
    authDomain: "prepwise-df55f.firebaseapp.com",
    projectId: "prepwise-df55f",
    storageBucket: "prepwise-df55f.firebasestorage.app",
    messagingSenderId: "457352299752",
    appId: "1:457352299752:web:f4e3f1d7d8ff2b59a3f55d",
    measurementId: "G-CX3J18LN27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);