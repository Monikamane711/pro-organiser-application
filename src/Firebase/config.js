import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyC07A467Qg5hrJz-ARIpwoNqHS249IhP1I",
  authDomain: "pro-organiser-applicatio-1d507.firebaseapp.com",
  databaseURL: "https://pro-organiser-applicatio-1d507.firebaseio.com",
  projectId: "pro-organiser-applicatio-1d507",
  storageBucket: "pro-organiser-applicatio-1d507.appspot.com",
  messagingSenderId: "514449162776",
  appId: "1:514449162776:web:f4c330ab306f3e13fcf96d",
  measurementId: "G-V69BK32DBC"
};
  
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();