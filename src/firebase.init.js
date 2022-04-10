import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDWs70_-E-DvS4D7E6S0Krb_0tc49fNZ0U",
    authDomain: "ema-john-simple-19fef.firebaseapp.com",
    projectId: "ema-john-simple-19fef",
    storageBucket: "ema-john-simple-19fef.appspot.com",
    messagingSenderId: "865297399839",
    appId: "1:865297399839:web:08b9f9d36046a2dcf3152a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;