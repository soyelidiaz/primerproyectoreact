import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC2b3dTwJg4LixSPpJuYaosmIrKInxoCiE",
    authDomain: "primer-ba32c.firebaseapp.com",
    projectId: "primer-ba32c",
    storageBucket: "primer-ba32c.appspot.com",
    messagingSenderId: "242409615448",
    appId: "1:242409615448:web:5cfb625605b1fc0140da2d",
    measurementId: "G-8YPXYGFL3D"
  };
 
firebase.initializeApp(firebaseConfig)
firebase.db = firebase.firestore()
firebase.auth = firebase.auth()

export default firebase;