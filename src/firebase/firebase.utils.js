import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyB9D5jrvRxL6831xf2x0_s6tAEv4d9QTto",
    authDomain: "crwn-db-e028a.firebaseapp.com",
    projectId: "crwn-db-e028a",
    storageBucket: "crwn-db-e028a.appspot.com",
    messagingSenderId: "1086790401038",
    appId: "1:1086790401038:web:3fcf7e1b588fedd080905f",
    measurementId: "G-YH6P0LXC6D"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
