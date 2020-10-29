const mongoose = require('mongoose')
const express = require('express')
const cookieSession = require('cookie-session')

const UserRouter = require('./routes/user')
const AccountRouter = require('./routes/account')

const app = express()
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/test'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())

app.use(
  cookieSession({
    name: 'local-session',
    keys: ['spooky'],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
)

app.use('/user', UserRouter)
app.use('/account', AccountRouter)

app.listen(3000, () => {
  console.log('listening on 3000')
})