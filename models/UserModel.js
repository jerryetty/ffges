var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  'name': { type: String, required: true },
  'email': { type: String, required: true },
  'password': { type: String, required: false },
  'role': { type: String, required: false },
  'googleID': { type: String, required: false },
  'telephone': { type: String, required: false },
  'avatar': { type: String, required: false },
  'rating': { type: Number, required: false }
})

module.exports = mongoose.model('User', UserSchema)
