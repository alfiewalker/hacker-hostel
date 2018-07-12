const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const note = {
  id:88
}
//https://firebase.google.com/docs/firestore/query-data/get-data
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyAdVtjk5oysE7kBRzLJH6QMqyUy7XUeO18",
  authDomain: "fire-demo-85f73.firebaseapp.com",
  databaseURL: "https://fire-demo-85f73.firebaseio.com",
  projectId: "fire-demo-85f73",
  storageBucket: "fire-demo-85f73.appspot.com",
  messagingSenderId: "255444029584"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

const refNotes = db.collection('notes').doc('1000')
refNotes.set(note, { merge:true}).then(docRef => {
})

refNotes.get().then(doc => {
  console.log(doc.data())
})

const notes = db.collection('notes').where('id', '==', 0)
.get().then(querySnapshot => {
  querySnapshot.forEach(doc => {
    console.log(doc.data())
  })
})


