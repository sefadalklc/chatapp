import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCVPSdv23-HqDRN8ftvOTWnUcR3_rwsIk8",
  authDomain: "vue-3-projeler.firebaseapp.com",
  projectId: "vue-3-projeler",
  storageBucket: "vue-3-projeler.appspot.com",
  messagingSenderId: "315486710992",
  appId: "1:315486710992:web:aef697c4ada16c2c66c2d5"
};

  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();
  const tarih=firebase.firestore.FieldValue.serverTimestamp;
  const auth=firebase.auth()

  export{db,tarih,auth}