// Experimental route used initialy for server communication reasons. 

const express = require('express')
const UserRouter = express.Router()

const User = require('../models/mainUser')

UserRouter.route('/create').post(function (req, res) {
  const user = new User(req.body)
  console.log(user)
  user.save()
    .then(user => {
      res.json('Post tweeted!')
    })
    .catch(() => {
      res.status(400).send('unable to save to db');
    })
})

module.exports = UserRouter
