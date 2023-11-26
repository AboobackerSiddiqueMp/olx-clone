import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCQcli6_xd196xZ4V8_Z5JxupP4Zy63eoA",
    authDomain: "olx-demo-1ec22.firebaseapp.com",
    projectId: "olx-demo-1ec22",
    storageBucket: "olx-demo-1ec22.appspot.com",
    messagingSenderId: "187168747855",
    appId: "1:187168747855:web:8947b2f7ed20aff15dd53a",
    measurementId: "G-34RRW9RRST"
};

const Firebase = initializeApp(firebaseConfig);
const Auth = getAuth(Firebase);
const Storage = getStorage(Firebase);

export { Auth, Storage };
export { Firebase };