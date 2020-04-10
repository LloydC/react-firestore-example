import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCmTu8JtBaEm0toIBeQafeZFzU8abGklJ8",
    authDomain: "fir-react-example-92fdc.firebaseapp.com",
    databaseURL: "https://fir-react-example-92fdc.firebaseio.com",
    projectId: "fir-react-example-92fdc",
    storageBucket: "fir-react-example-92fdc.appspot.com",
    messagingSenderId: "817971127829",
    appId: "1:817971127829:web:45173eb5bfde71917f501c"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;