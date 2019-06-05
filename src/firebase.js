import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBQD2KmmFOCeU8GwLAExMC49NS3UacLFLI",
    authDomain: "todo-app-3b9ac.firebaseapp.com",
    databaseURL: "https://todo-app-3b9ac.firebaseio.com",
    projectId: "todo-app-3b9ac",
    storageBucket: "todo-app-3b9ac.appspot.com",
    messagingSenderId: "164874236682",
    appId: "1:164874236682:web:f58fc3d92f8dcedd"
};

console.log(firebase)

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
