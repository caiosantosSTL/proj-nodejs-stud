exports.pagIndex = (req, res) => {
  res.render('index')
}

exports.pagPost = (req, res, next) => {
  res.send(req.body)
}
