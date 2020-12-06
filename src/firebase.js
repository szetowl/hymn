import firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCzwi_MQFV8peE3At_GqPv2kDZ7z3sYgSQ",
    authDomain: "ngfire-storage.firebaseapp.com",
    databaseURL: "https://ngfire-storage.firebaseio.com",
    projectId: "ngfire-storage",
    storageBucket: "ngfire-storage.appspot.com",
    messagingSenderId: "1010393130795",
    appId: "1:1010393130795:web:0782a5d0449fc4907b076e"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

 export const songsDB = firebaseApp.firestore();

 export const storage = firebaseApp.storage();
