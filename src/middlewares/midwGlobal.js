module.exports = (req, res, next) => {
  console.log('passei midware global')
  req.body.nameParam && req.body.surnameParam
    ? console.log(`postou ${req.body.nameParam}`)
    : console.log('nao foi')

  next()
}
