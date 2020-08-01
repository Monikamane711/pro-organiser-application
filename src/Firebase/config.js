import firebase from 'firebase';
import 'firebase/auth';

 // Your web app's Firebase configuration
 
export var firebaseConfig = {
  apiKey: "AIzaSyCHQOsYXS_cJ0wFXUxJZpPRVnj06_EYe1M",
  authDomain: "pro-organiser-application.firebaseapp.com",
  databaseURL: "https://pro-organiser-application.firebaseio.com",
  projectId: "pro-organiser-application",
  storageBucket: "pro-organiser-application.appspot.com",
  messagingSenderId: "276169333157",
  appId: "1:276169333157:web:b01fe8d29bf765f5fd304c",
  measurementId: "G-35C0ZMH5BJ",
  };
  
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();