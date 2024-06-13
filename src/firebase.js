// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzKB4Mmea_8romjCV6QwN7mFKN33SU3gY",
    authDomain: "vue-chat-21a4a.firebaseapp.com",
    projectId: "vue-chat-21a4a",
    storageBucket: "vue-chat-21a4a.appspot.com",
    messagingSenderId: "937661597767",
    appId: "1:937661597767:web:7257f6f6338c6f83300962",
    measurementId: "G-SN0JWZ3295"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
