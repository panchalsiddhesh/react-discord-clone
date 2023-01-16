import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAohlkKKt7hzL4egJAziK5ZY4OCy23OXE",
    authDomain: "react-discord-clone-7e911.firebaseapp.com",
    projectId: "react-discord-clone-7e911",
    storageBucket: "react-discord-clone-7e911.appspot.com",
    messagingSenderId: "869462126323",
    appId: "1:869462126323:web:4a2df87194fa453695d186",
    measurementId: "G-4GGV4BL07Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;