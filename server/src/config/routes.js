const express = require('express')
const auth = require('./auth')

module.exports = server => {

    const protectedApi = express.Router()
    server.use('api', protectedApi)

    protectedApi.use(auth)

    const ContactsService = require('../controllers/contacts')
    
    const openApi = express.Router()
    server.use('/oapi', openApi)
    
    const AuthService = require('../services/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/register', AuthService.register)
    openApi.post('/validateToken', AuthService.validateToken)
    
    openApi.post('/contacts', ContactsService.getContacts)
    openApi.post('/contact', ContactsService.getContact)
    openApi.post('/add_contact', ContactsService.addContact)
    openApi.post('/edit_contact', ContactsService.editContact)
    openApi.post('/delete_contact', ContactsService.deleteContact)
}