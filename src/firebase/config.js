import firebase from 'firebase/app';

import 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6AwHgsT8md5aLedJO39mBXQlkb8U-Ba0",
    authDomain: "blog-app-52447.firebaseapp.com",
    projectId: "blog-app-52447",
    storageBucket: "blog-app-52447.appspot.com",
    messagingSenderId: "426755574040",
    appId: "1:426755574040:web:19b1710d74271dce08b66d",
    measurementId: "G-8S3KMF9JQK"
  };

  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();
  const tarih=firebase.firestore.FieldValue.serverTimestamp;

  export{db,tarih}