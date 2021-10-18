import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDPFRdPIiBSRv8MSc3-2kdMkM96sW9Qdhc",
    authDomain: "linkedin-app-clone-64037.firebaseapp.com",
    projectId: "linkedin-app-clone-64037",
    storageBucket: "linkedin-app-clone-64037.appspot.com",
    messagingSenderId: "1066699957626",
    appId: "1:1066699957626:web:70a9009e911f2381c662c3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};