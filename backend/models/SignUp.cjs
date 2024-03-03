const mongoose = require('mongoose')
const SignupScehma = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String
})

module.exports = mongoose.model('signup', SignupScehma)