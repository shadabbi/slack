import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNgxmw1wTL6UXnpvW2vwk5yYecoFgMTaM",
  authDomain: "slack-17927.firebaseapp.com",
  databaseURL: "https://slack-17927.firebaseio.com",
  projectId: "slack-17927",
  storageBucket: "slack-17927.appspot.com",
  messagingSenderId: "582773934728",
  appId: "1:582773934728:web:d0707f472322291dc8ad3d",
  measurementId: "G-FRPN36D5H2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };

export default db;
