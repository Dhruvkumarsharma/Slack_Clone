import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDZy-XRZRC2TyXWbq-BDMmBDfepodYpdyg",
  authDomain: "slack-clone-94f37.firebaseapp.com",
  databaseURL: "https://slack-clone-94f37-default-rtdb.firebaseio.com",
  projectId: "slack-clone-94f37",
  storageBucket: "slack-clone-94f37.appspot.com",
  messagingSenderId: "22981888110",
  appId: "1:22981888110:web:8e9433f08d988bfcc13e7f",
  measurementId: "G-JXGQ1FZ1V4"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db;