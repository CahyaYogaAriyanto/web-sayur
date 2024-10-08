import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBRle2sUJUTqvztB_rFpsN2ovw7JPEYjSY",
    authDomain: "react-firebase-d2f6c.firebaseapp.com",
    projectId: "react-firebase-d2f6c",
    storageBucket: "react-firebase-d2f6c.appspot.com",
    messagingSenderId: "158983874755",
    appId: "1:158983874755:web:0bc3a24b3a77856bd89a76",
    measurementId: "G-XSK777D923"
};


const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };