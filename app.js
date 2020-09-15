const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const db = require('./db/models')

app.get('/', async (req, res) => {
  const user = await db.User.findAll()
  res.send(user)

})

app.listen(port, () => console.log('server running'))
