import firebase from "firebase";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyDtTYSaX3NURtISBG_uvxcfEGTPQ8ivff4",
  authDomain: "find-me-24e85.firebaseapp.com",
  projectId: "find-me-24e85",
  storageBucket: "find-me-24e85.appspot.com",
  messagingSenderId: "815847569589",
  appId: "1:815847569589:web:4fe039854691103a26a6fc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const correctPointers = {
  pointer1: {
    x: { start: 1687, end: 1735 },
    y: { start: 276, end: 338 },
  },
  pointer2: {
    x: { start: 216, end: 248 },
    y: { start: 504, end: 571 },
  },
};

export const submitScore = (nameState, timeState) => {
  db.collection("scores")
    .add({
      name: nameState,
      time: timeState,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

// db.collection("correctPointers")
//   .add({
//     pointer1: {
//       x: { start: 1687, end: 1735 },
//       y: { start: 276, end: 338 },
//     },
//     pointer2: {
//       x: { start: 216, end: 248 },
//       y: { start: 504, end: 571 },
//     },
//   })
//   .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch((error) => {
//     console.error("Error adding document: ", error);
//   });
// Add a second document with a generated ID.

export default firebase;
