const express = require('express')
const dotenv = require('dotenv')
const weatherCntrl = require('./controllers/weather')

dotenv.config()

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/', weatherCntrl)

app.listen(port, () => {
  console.log(`app running at ${port}`)
})
