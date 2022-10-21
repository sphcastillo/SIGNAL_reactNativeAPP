import *  as firebase from 'firebase';
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDT_4iP8iScIgU0LblM_Ai6-GZTe65CATE",
    authDomain: "signal-clone-33795.firebaseapp.com",
    projectId: "signal-clone-33795",
    storageBucket: "signal-clone-33795.appspot.com",
    messagingSenderId: "945994309662",
    appId: "1:945994309662:web:9e87a4647358336f0cce0f"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };