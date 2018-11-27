// Initial prototype schema for previous posts.

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let User = new Schema({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', User)
