import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAbXvEOW-xjdK-a42Ja3cqqCvXpKuG3C6Q",
    authDomain: "burguer-code.firebaseapp.com",
    projectId: "burguer-code",
    storageBucket: "burguer-code.appspot.com",
    messagingSenderId: "939355918488",
    appId: "1:939355918488:web:fa47023a91a487942f80ed",
    measurementId: "G-D4X42N5JYH"
  };

 firebase.initializeApp(firebaseConfig);
 
  const db = firebase.firestore();

  export default db;