const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/contatos', { useNewUrlParser: true, useUnifiedTopology: true })