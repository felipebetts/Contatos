const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

const secret = 'ap98ryqn2479g0qmjyfbonvj8qex07v'


const passwordRegex = /((?=.*[a-z])(?=.*[A-Z]).{4,20})/
//  senha deve ter entre 4 e 20 caracteres, com letras maiusculas e minusculas

const sendErrorsFromDB = (res, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({ errors })
}

const register = (req, res) => {
    console.log('req.body: ', req.body)
    const name = req.body.name || ''
    const password = req.body.password || ''

    if (!password.match(passwordRegex)) {
        return res.status(400).send({
            errors: [
                'Senha precisa ter entre 4 e 20 caracteres, contendo letras maiúsculas e minúsculas'
            ]
        })
    }

    const salt = bcrypt.genSaltSync()
    const hashedPassword = bcrypt.hashSync(password, salt)
    
    // Verificando se já existe um usuário cadastrado com esse nome:
    User.findOne({ name }, (err, user) => {
        if (err) {
            return sendErrorsFromDB(ress, error)
        } else if (user) {
            return res.status(400).send({
                errors: [
                    'Usuário já está cadastrado'
                ]
            })
        } else {
            // agora cadastramos o usuário:

            const newUser = new User({ name, password: hashedPassword })
            newUser.save(err => {
                if (err) {
                    return sendErrorsFromDB(res, err)
                } else {
                    // se tudo der certo, logamos o usuario
                    login(req, res)
                }
            })
        }
    })
}

const login = (req, res) => {
    const name = req.body.name || ''
    const password = req.body.password || ''

    User.findOne({ name }, (err, user) => {
        if (err) {
            return sendErrorsFromDB(res, err)
        } else if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign(user.toJSON(), secret, { // process.env.AUTH_SECRET
                expiresIn: '1 day'
            })
            const { name } = user
            res.json({ name, token})
        } else {
            return res.status(400).send({
                errors: [
                    'Usuário ou senha inválidos'
                ]
            })
        }
    })
}

const validateToken = (req, res) => {
    const token = req.body.token || ''

    jwt.verify(token, process.env.AUTH_SECRET, (err, decoded) => {
        return res.status(200).send({ valid: !err })
    })
}

module.exports = { register, login, validateToken }