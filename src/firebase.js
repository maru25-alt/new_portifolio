import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCO8UMMcRzCttxtRQteXwfPBVrdviHYCAw",
    authDomain: "blog-commets.firebaseapp.com",
    databaseURL: "https://blog-commets.firebaseio.com",
    projectId: "blog-commets",
    storageBucket: "blog-commets.appspot.com",
    messagingSenderId: "251183568945",
    appId: "1:251183568945:web:bd297f1399ba1d09a0dd10",
    measurementId: "G-F44TKCFW1H"
  };
// Initialize Firebase
 firebase.initializeApp(firebaseConfig );



const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


 export { auth, db, storage, timestamp};
export default firebase;
      
