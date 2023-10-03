const db = require('../config/db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function login(req, res) {

    // const querySql = `SELECT * FROM usuarios WHERE email = '${req.body.email}'`
    const email = req.body.email;

    if(req.body.email === '' || req.body.senha === '') {
        return res.status(422).json('Algum campo esta vazio')
    }

    // console.log(querySql)

    try {
        // console.log(email)
        db.query("SELECT * FROM usuarios WHERE email=?", [email], (err, data) => {
            if(err) {
                res.status(500).json(err)
            } 
            else if(data.length === 0) {
                return res.status(401).send('Usuario ou senha invalido');
            } else {
                bcrypt.compare(req.body.senha, data[0].senha, (err, response) => {
                    if(err) {
                        console.log(err)
                    } else {
                        if(!response) {
                            return res.status(401).send('Usuario ou senha invalido');
                        } else {
                        
                            const idUser = data[0].idusuario;
                            const emailUser = data[0].email;
                            let token_ = jwt.sign({idUser, emailUser}, process.env.SECRETKEY, {expiresIn: '1hr'})

                            res.status(200).json({
                                erro: 'false',
                                mensagem: 'Login efetuado com sucesso!!',
                                token: token_
                            })

                        }
                    }
                }) 

            }
        })


    } catch(error) {
        console.log(error)
    }

}


module.exports = login
