const express = require('express')
const route = express.Router()

const homeController = require('../src/controllers/homeController')
const midwGlobal = require('../src/middlewares/midwGlobal')

route.get('/', homeController.pagIndex)
route.post('/', midwGlobal, homeController.pagPost)

module.exports = route
