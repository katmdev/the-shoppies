import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDoKXZV6XRUrJMv0plKso2tuY47hq36Qs",
    authDomain: "the-shoppies-f5efd.firebaseapp.com",
    databaseURL: "https://the-shoppies-f5efd.firebaseio.com",
    projectId: "the-shoppies-f5efd",
    storageBucket: "the-shoppies-f5efd.appspot.com",
    messagingSenderId: "780770630733",
    appId: "1:780770630733:web:651f1a1073ebbda8095004"
  };

let fb = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export { fb, db };