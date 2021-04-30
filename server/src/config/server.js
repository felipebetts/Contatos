"use strict";

const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('./cors')
const bodyParser = require('body-parser')


const server = express()


// server.post('/login', (req, res) => {
//     // const username = req.body.username
// })
server.use(bodyParser.json())
server.use(bodyParser.urlencoded())
server.use(cors)

const port = 4000
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

module.exports = server