import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
// connect app to firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// setup firebase db
const db = firebaseApp.firestore();
// use firebase user authentication
const auth = firebase.auth();
// exports
export { db, auth };