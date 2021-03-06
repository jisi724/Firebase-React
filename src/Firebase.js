import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAAnUrg2A3omp70bIlbAOpSdSWe56sSQjU",
  authDomain: "fir-react-todo-77d67.firebaseapp.com",
  databaseURL: "https://fir-react-todo-77d67.firebaseio.com",
  projectId: "fir-react-todo-77d67",
  storageBucket: "fir-react-todo-77d67.appspot.com",
  messagingSenderId: "677046787602",
  appId: "1:677046787602:web:ede7101a413e2054"
};

firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();

const todoCollection = db.collection("todos");
const userCollection = db.collection("users");
const timeStamp = firebase.firestore.Timestamp;

export { auth, todoCollection, userCollection, timeStamp };

export default db;
