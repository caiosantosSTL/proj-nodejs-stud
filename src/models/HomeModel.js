const mongoose = require('mongoose')

// equivalente ao create table de sql
const HomeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: String
})

const HomeModel = mongoose.model('Home', HomeSchema)

module.exports = HomeModel
