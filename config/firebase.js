var firebase = require('firebase')
require('firebase/auth')
require('firebase/database')
// Initialize Firebase for the application
var config = {
  apiKey: process.env.apiKey || 'AIzaSyAxIE_bBdfTrQsF5mBaILzkrNNRMWEB24k',
  authDomain: process.env.authDomain || 'ffges-8d8b7.firebaseapp.com',
  databaseURL: process.env.databaseURL || 'https://ffges-8d8b7.firebaseio.com',
  storageBucket: process.env.storageBucket || 'ffges-8d8b7.appspot.com',
  messagingSenderId: process.env.messagingSenderId || 757671233873
}

firebase.initializeApp(config)
