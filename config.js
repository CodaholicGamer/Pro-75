import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBPHZb4Df5pjSkqz9bZw9FFqfSI27zXO_Y",
  authDomain: "eride-89210.firebaseapp.com",
  projectId: "eride-89210",
  storageBucket: "eride-89210.appspot.com",
  messagingSenderId: "223787980609",
  appId: "1:223787980609:web:561c15c6a6c3db4dd9b3c0"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
