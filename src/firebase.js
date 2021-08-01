import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCpUq8bsl0VBYDKxTcfN6i4ltQUwYtEOrk",
  authDomain: "linkedin-clone-1e7e2.firebaseapp.com",
  projectId: "linkedin-clone-1e7e2",
  storageBucket: "linkedin-clone-1e7e2.appspot.com",
  messagingSenderId: "618893599950",
  appId: "1:618893599950:web:f33072637d09ef219fdc9f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};