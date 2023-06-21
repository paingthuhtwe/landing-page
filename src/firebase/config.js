import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1ac3UwARS2O7TdrZ5f7xgaDjzhql6XWM",
  authDomain: "vanilla-by-panda.firebaseapp.com",
  projectId: "vanilla-by-panda",
  storageBucket: "vanilla-by-panda.appspot.com",
  messagingSenderId: "711090939206",
  appId: "1:711090939206:web:c02358502cd0076d537147",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// setup database
let db = firebase.firestore();

let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp };
