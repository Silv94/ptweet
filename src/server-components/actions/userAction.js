//Initial action for DB manipulation usage : Post method - Not implemented.

const User = require('../models/mainUser')

async function postTweet (req, res) { 
  try {
    const body = req.body
    const newTweet = new User(body)
    const addedTweet = await newTweet.save()
    res.status(200).json ({
      data: addedTweet
    })
  } catch (err) {
    if(err.name === 'ValidationError') {
      return res.status(400).json ({
        data: err.message
      })
    }
    res.status(500).json ({
      error: err.message
    })
  }
}

module.exports = { postTweet }
