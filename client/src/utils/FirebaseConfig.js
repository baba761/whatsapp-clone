import { initializeApp } from "firebase/app";
import { getauth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAvyClA8A2Bjc2zq-P3JHmzWJ7kIwDZwR4",
    authDomain: "whatsapp-clone-d1a16.firebaseapp.com",
    projectId: "whatsapp-clone-d1a16",
    storageBucket: "whatsapp-clone-d1a16.appspot.com",
    messagingSenderId: "874858062335",
    appId: "1:874858062335:web:194206f5fa9d94c9c3c7ca",
    measurementId: "G-BK2P953WZ8",
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getauth(app);
