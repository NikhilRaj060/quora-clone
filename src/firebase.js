import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAZBq-Ql8kP-M0vjGk4iHngf1XCRpNRUEo",
  authDomain: "quoraforengineers.firebaseapp.com",
  projectId: "quoraforengineers",
  storageBucket: "quoraforengineers.appspot.com",
  messagingSenderId: "413443688176",
  appId: "1:413443688176:web:880e19f683475a29d8a435",
  measurementId: "G-39PLY2XYBE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
