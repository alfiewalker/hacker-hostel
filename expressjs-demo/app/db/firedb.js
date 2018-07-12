const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

function FireDatabase(collectionName) {
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
  
  const settings = {timestampsInSnapshots: true};
  db.settings(settings);

  const _repo = {}

  _ensureIdIsSet = id => {
    if (id === null)
      throw 'ID is required'
  }

  return {
    getName: () => collectionName,

    all: () => {
      return db.collection(collectionName)
      .get().then(snapshot => {
        const arr = []
        snapshot.forEach(doc => {
          arr.push(doc.data())
        })
        return arr;
      })
    },

    findById: id => {
      _ensureIdIsSet(id)
      return db.collection(collectionName)
      .doc(id).get().then(doc => {
        return doc.data()
      })
    },

    add: item => {
      const docRef = db.collection(collectionName).doc();
      const newItem = {
        ...item,
        id:docRef.id
      }
      return docRef.set(newItem, {merge:true})
      .then(() => {
        return newItem
      })
    },

    update: function(item) {
      _ensureIdIsSet(item.id)
      docRef = db.collection(collectionName).doc(item.id); 
      return docRef.update(item)
      .then(() => {
        return item
      })
    },

    remove: function(id) {
      _ensureIdIsSet(id)
      docRef = db.collection(collectionName).doc(id)
      return docRef.delete()
    }
  }
}

module.exports = FireDatabase 