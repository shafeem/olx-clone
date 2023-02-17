import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-wJkuTV5xdmxQhKEJ0zh3Hd1U57M-4rU",
    authDomain: "olx-work-8c491.firebaseapp.com",
    projectId: "olx-work-8c491",
    storageBucket: "olx-work-8c491.appspot.com",
    messagingSenderId: "149956173562",
    appId: "1:149956173562:web:5b08a0fe17167ba1783343",
    measurementId: "G-NRVGS9618D"
  };

  export const Firebase= firebase.initializeApp(firebaseConfig);