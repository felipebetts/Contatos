const express = require('express')

module.exports = server => {

    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../services/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/register', AuthService.register)
    openApi.post('/validateToken', AuthService.validateToken)
}