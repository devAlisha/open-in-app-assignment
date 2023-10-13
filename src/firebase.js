// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChytVGhmgn26IgsvAJe5B8Pk1uvuyVEkQ",
    authDomain: "open-in-app-401711.firebaseapp.com",
    projectId: "open-in-app-401711",
    storageBucket: "open-in-app-401711.appspot.com",
    messagingSenderId: "1073863884315",
    appId: "1:1073863884315:web:8c8082a1bfd8083e0a42be"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
