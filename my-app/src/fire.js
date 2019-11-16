import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  // apiKey: "unreadablestuff",
  // authDomain: "your-domain-name.firebaseapp.com",
  // databaseURL: "https://your-domain-name.firebaseio.com",
  // storageBucket: "your-domain-name.appspot.com",
  // messagingSenderId: "123123123123"
  apiKey: "AIzaSyA3radnEG1LuvRPi7ltjr6FEj6xImJh9FA",
  authDomain: "evacusafe-e8133.firebaseapp.com",
  databaseURL: "https://evacusafe-e8133.firebaseio.com",
  projectId: "evacusafe-e8133",
  storageBucket: "evacusafe-e8133.appspot.com",
  messagingSenderId: "50431371885",
  appId: "1:50431371885:web:7c2a06afbff23212f96d64",
  measurementId: "G-18D716CTV9"
};
var fire = firebase.initializeApp(config);
export default fire;


