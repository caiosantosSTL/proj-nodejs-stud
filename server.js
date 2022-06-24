const express = require('express')

const app = express()

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
app.listen(port, () => {
  console.log(`rodando ${port}`)
})
