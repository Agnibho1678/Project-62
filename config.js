import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCZNkE5UMoFTJwJuqYHzkXS0qWMMQB3f1s",
    authDomain: "student-attendance-db734.firebaseapp.com",
    databaseURL: "https://student-attendance-db734-default-rtdb.firebaseio.com",
    projectId: "student-attendance-db734",
    storageBucket: "student-attendance-db734.appspot.com",
    messagingSenderId: "560587991833",
    appId: "1:560587991833:web:2159f1525517fadffc7388"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();