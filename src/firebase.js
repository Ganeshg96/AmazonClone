// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBkcV0e3Yimgqeaph_KaoOMtDJfmeigOU8",
    authDomain: "challenge-dd4c8.firebaseapp.com",
    projectId: "challenge-dd4c8",
    storageBucket: "challenge-dd4c8.appspot.com",
    messagingSenderId: "205822109671",
    appId: "1:205822109671:web:489ad3dcbec2b87bef3f42",
    measurementId: "G-2VC1CF69RF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
