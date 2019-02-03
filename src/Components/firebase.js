import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyD-sO-qK9qMKuJIz-bjKcmT0D7sioY797I",
    authDomain: "lifebattery-73eac.firebaseapp.com",
    databaseURL: "https://lifebattery-73eac.firebaseio.com",
    projectId: "lifebattery-73eac",
    storageBucket: "lifebattery-73eac.appspot.com",
    messagingSenderId: "849508025074"
  };
firebase.initializeApp(config);

export default firebase