// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-ZzwTB_KnMZqzlOSWzY-yZLlc9XzyrY4",
  authDomain: "slackv2-66a7b.firebaseapp.com",
  databaseURL: "https://slackv2-66a7b.firebaseio.com",
  projectId: "slackv2-66a7b",
  storageBucket: "slackv2-66a7b.appspot.com",
  messagingSenderId: "715189167085",
  appId: "1:715189167085:web:774bab7f1fb0f1ec583de4",
  measurementId: "G-FTHNQ2MBT3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
