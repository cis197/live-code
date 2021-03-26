const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')

const UserRouter = require('./routes/user')
const AccountRouter = require('./routes/account')

const app = express()
const MONGO_URI = 'mongodb://localhost:27017/test-2'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cookieSession({
  name: 'session',
  keys: ['peterisrandom'],
  // maxAge: 5000 // 5 seconds
}))

app.use(express.json())

app.use('/user', UserRouter)
app.use('/account', AccountRouter)
app.get('/', (req, res) => {
  res.send(`welcome ${req.session.username}`)
})

app.listen(3000, () => {
  console.log('mongoDB is connected')
  console.log('listening on 3000')
})