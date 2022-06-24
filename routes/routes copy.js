const express = require('express')
const route = express.Router()

const homeController = require('../src/controllers/homeController')

function myMiddleWare (req, res, next) {
  req.session = { name: 'Var', surname: 'Mivar' }
  console.log('passei midware')

  next()
}

route.get('/', myMiddleWare, homeController.pagIndex, (req, res, next) => {
  console.log('mid aqui')
  console.log(`mid ultimo - info na req de sessao ${req.session.name}`)
})
route.post('/', homeController.pagPost)

module.exports = route
