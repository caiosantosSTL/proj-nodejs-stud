// const HomeModel = require('../models/HomeModel')

/* HomeModel.create({
  title: 'The title',
  desc: 'Is desc'
}).then(data => console.log(data)).catch(e => console.log(e)) */

exports.pagIndex = (req, res) => {
  res.render('index')
}

exports.pagPost = (req, res, next) => {
  res.send(req.body)
}
