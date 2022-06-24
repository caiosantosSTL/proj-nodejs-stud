const express = require('express')
require('dotenv').config()

const app = express()
const mongoose = require('mongoose')
const conexString = process.env.CONNECTSTRING
mongoose.connect(conexString)
  .then(() => {
    console.log('Conected bd')
    app.emit('Listo')
  }).catch(e => console.log(e))

const routes = require('./routes/routes')
const mid = require('./src/middlewares/midwGlobal')
const path = require('path')

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(mid)
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'twig')

const port = 3080
app.on('Listo', () => {
  app.listen(port, () => {
    console.log(`rodando ${port}`)
  })
})
