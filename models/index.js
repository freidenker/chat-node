var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/chatnode')
exports.User = mongoose.model('User', require('./user'))
