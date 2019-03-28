var UserModel = require('../models/UserModel.js')

/**
 * UserController.js
 *
 * @description :: Server-side logic for managing Users.
 */
module.exports = {

  /**
     * UserController.list()
     */
  list: function (req, res) {
    UserModel.find(function (err, Users) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting User.',
          error: err
        })
      }
      return res.json(Users)
    })
  },

  /**
     * UserController.show()
     */
  show: function (req, res) {
    var id = req.params.id
    UserModel.findOne({ _id: id }, function (err, User) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting User.',
          error: err
        })
      }
      if (!User) {
        return res.status(404).json({
          message: 'No such User'
        })
      }
      return res.json(User)
    })
  },

  /**
     * UserController.create()
     */
  create: function (req, res) {
    var User = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      googleID: req.body.googleID,
      telephone: req.body.telephone,
      avatar: req.body.avatar,
      rating: req.body.rating

    })

    User.save(function (err, User) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating User',
          error: err
        })
      }
      return res.status(201).json(User)
    })
  },

  /**
     * UserController.update()
     */
  update: function (req, res) {
    var id = req.params.id
    UserModel.findOne({ _id: id }, function (err, User) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting User',
          error: err
        })
      }
      if (!User) {
        return res.status(404).json({
          message: 'No such User'
        })
      }

      User.name = req.body.name ? req.body.name : User.name
      User.email = req.body.email ? req.body.email : User.email
      User.password = req.body.password ? req.body.password : User.password
      User.role = req.body.role ? req.body.role : User.role
      User.googleID = req.body.googleID ? req.body.googleID : User.googleID
      User.telephone = req.body.telephone ? req.body.telephone : User.telephone
      User.avatar = req.body.avatar ? req.body.avatar : User.avatar
      User.rating = req.body.rating ? req.body.rating : User.rating
      User.save(function (err, User) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating User.',
            error: err
          })
        }

        return res.json(User)
      })
    })
  },

  /**
     * UserController.remove()
     */
  remove: function (req, res) {
    var id = req.params.id
    UserModel.findByIdAndRemove(id, function (err, User) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the User.',
          error: err
        })
      }
      return res.status(204).json()
    })
  }
}
