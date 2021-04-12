import firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDFxjoYX_CPWBp2bvjSjL4J_Gs1BvxqTdc",
    authDomain: "sistema-medico-eba1a.firebaseapp.com",
    projectId: "sistema-medico-eba1a",
    storageBucket: "sistema-medico-eba1a.appspot.com",
    messagingSenderId: "571143669159",
    appId: "1:571143669159:web:57352cd8fb5964741c2282"
  };

  firebase.initializeApp(firebaseConfig);

  export const fb = firebase;
  export const db = firebase.firestore();
  export const auth = firebase.auth();
  export const storage = firebase.storage();