import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBUSfZ_ZOHOTZsRSMLsk-Vw5R72Bc01CG4",
    authDomain: "prepwise-df55f.firebaseapp.com",
    projectId: "prepwise-df55f",
    storageBucket: "prepwise-df55f.firebasestorage.app",
    messagingSenderId: "457352299752",
    appId: "1:457352299752:web:f4e3f1d7d8ff2b59a3f55d",
    measurementId: "G-CX3J18LN27"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const firestore = getFirestore(app);
