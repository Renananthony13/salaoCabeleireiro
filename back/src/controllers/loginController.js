const db = require('../config/db.js');
const bcrypt = require('bcrypt');

function login(req, res) {
    const querySql = `SELECT * FROM usuarios WHERE email = '${req.body.email}'`

    try {
        db.query(querySql, (err, data) => {
            if(err) {
                console.log(err)
                res.status(500).json(err)
            } else if(data.length === 0) {
                return res.status(401).send('Usuario ou senha invalido');
            } else {
                console.log(data)
                const senhaTeste = bcrypt.compare(req.body.senha, data[0].senha)

                if(senhaTeste) {
                    res.send('Login efetuado com sucesso')
                } else {
                    res.status(401).json('Usuario ou senha invalido')
                }

            }
        })
    } catch(error) {
        console.log(error)
    }

}


module.exports = login
