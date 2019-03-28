var firebase = require('firebase')
require('../config/firebase')
var UserModel = require('../models/UserModel')

module.exports = {
  login: function (req, res, next) {
    var user = firebase.auth().currentUser
    if (user == null) {
      res.render('auth/login')
      next()
    } else {
      res.redirect('home')
    }
  },

  signup: function (req, res, next) {
    var user = firebase.auth().currentUser
    if (user == null) {
      res.render('auth/signup')
      next()
    } else {
      res.redirect('home')
    }
  },

  forgotPassword: function (req, res, next) {
    var user = firebase.auth().currentUser
    if (user == null) {
      res.render('auth/forgotPassword')
      next()
    } else {
      res.redirect('home')
    }
  },

  signupPost: function (req, res, next) {
    var password = req.body.password1
    var password2 = req.body.password2
    var email = req.body.email

    if (password === password2) {
      var User = new UserModel({
        name: req.body.name,
        email: email,
        role: req.body.role,
        googleID: req.body.googleID,
        telephone: req.body.telephone,
        avatar: req.body.avatar,
        rating: req.body.rating
      })

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message

        res.send(errorCode + errorMessage)
        // ...
      })

      User.save(function (err, User) {
        if (err) {
          return res.status(500).json({
            message: 'Error when creating User',
            error: err
          })
        }
      })
    }
  },

  loginPost: function (req, res, next) {
    var password = req.body.password
    var email = req.body.email

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        req.user = user
        res.redirect('home')
      }
    })

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message

      // res.send(errorCode + errorMessage)
      res.render('auth/login', { errorCode: errorCode, errorMessage: errorMessage })
      // ...
    })
  },

  logout: function (req, res, next) {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      res.redirect('home')
    }).catch(function (error) {
      // An error happened.
      res.send(error)
    })
  }
}
