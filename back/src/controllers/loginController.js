const db = require('../config/db.js');
const bcrypt = require('bcrypt');

async function login(req, res) {

    // const querySql = `SELECT * FROM usuarios WHERE email = '${req.body.email}'`
    const email = req.body.email;

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
                            res.status(200).json('Login efetuado com sucesso!!')
                        }
                    }
                }) 

            }
        })

        // if(data.length === 0) {
        //     console.log('errou')
        // } else {
        //     console.log(data)
        //     const senhaTeste = bcrypt.compare(req.body.senha, data[0].senha)

        //     if(senhaTeste) {
        //         res.send('Login efetuado com sucesso')
        //     } else {
        //         res.status(401).json('Usuario ou senha invalido')
        //     }

        // }

        // db.query(querySql, (err, data) => {
        //     if(err) {
        //         console.log(err)
        //         res.status(500).json(err)
        //     } 
        //     // else if(data.length === 0) {
        //     //     console.log('aqui')
        //     //     return res.status(401).send('Usuario ou senha invalido');
        //     // } 
        //     else {
        //         console.log(data)
        //         const senhaTeste = bcrypt.compare(req.body.senha, data[0].senha)

        //         if(senhaTeste) {
        //             res.send('Login efetuado com sucesso')
        //         } else {
        //             res.status(401).json('Usuario ou senha invalido')
        //         }

        //     }
        // })

    } catch(error) {
        console.log(error)
    }

}


module.exports = login
