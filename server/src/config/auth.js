const jwt = require('jsonwebtoken')
// const env = require('../.env')


const secret = 'ap98ryqn2479g0qmjyfbonvj8qex07v'

module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS') { // CORS preflight request
        console.log('aqui')
        next()
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization']


        if (!token) { // se o token nao estiver configurado
            return res.status(403).send({ errors: ['No token provided']})
        }

        jwt.verify(token, secret, function (err, decoded) {
            if(err) {
                return res.status(403).send({
                    errors: ['Failed to authenticate token']
                })
            } else {
                // podemos passar o token decodificado para os próximos middlewares mandando na res a expressao abaixo
                req.decoded = decoded
                console.log(`o ruim é aqui`)
                next()
            }
        })
    }
}