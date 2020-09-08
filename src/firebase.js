import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAaFmWtg8u_YOYruWTyU6XnlIGM7U6b5cQ",
  authDomain: "todolist-tut-cdd9e.firebaseapp.com",
  databaseURL: "https://todolist-tut-cdd9e.firebaseio.com",
  projectId: "todolist-tut-cdd9e",
  storageBucket: "todolist-tut-cdd9e.appspot.com",
  messagingSenderId: "402605281732",
  appId: "1:402605281732:web:92a2de982ae9e366931491"
});

export { firebaseConfig as firebase };
