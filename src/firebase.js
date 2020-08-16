import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDv6uxzUeFj1KZ3B_rltYmf9rsqzsxQS8g",
  authDomain: "messenger-clone-b80a8.firebaseapp.com",
  databaseURL: "https://messenger-clone-b80a8.firebaseio.com",
  projectId: "messenger-clone-b80a8",
  storageBucket: "messenger-clone-b80a8.appspot.com",
  messagingSenderId: "904306486851",
  appId: "1:904306486851:web:554ca83127298e690d2ef6",
  measurementId: "G-1Y1KQ1T88M",
});

const db = firebase.firestore();

export default db;
