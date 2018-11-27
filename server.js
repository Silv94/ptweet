const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 5000

const config = require('./src/DB/db')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('DB connected') },
  err => { console.log('Can not connect to DB' + err) }
)

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(req.body.post)
})

app.listen(PORT, () => {
  console.log('Server is running on PORT: ', PORT)
})
