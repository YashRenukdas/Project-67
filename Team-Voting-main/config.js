import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDGnqIl8kVRvpY3NRB35tkuSKEDWRignHA",
  authDomain: "react-native-projects-dd013.firebaseapp.com",
  databaseURL: "https://react-native-projects-dd013-default-rtdb.firebaseio.com",
  projectId: "react-native-projects-dd013",
  storageBucket: "react-native-projects-dd013.appspot.com",
  messagingSenderId: "514657877820",
  appId: "1:514657877820:web:e388a2b4bacb56c9336839"
};

// Initialize Firebase
if(! firebase.apps.length){

firebase.initializeApp(firebaseConfig);}

export default firebase.database();