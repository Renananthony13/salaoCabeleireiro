const db = require('../config/db.js')
const bcrypt = require('bcrypt')

function createUsuario(req, res) {
    const {nome, email, telefone, senha} = req.body

    // se campo estiver vazio, retornar erro

    try {
        
        const salt = Math.floor(Math.random() * (16 - 10) + 10);
        const hashPassword = bcrypt.hashSync(senha, salt);

        // const querySql =  `INSERT INTO usuarios(nome, email, telefone, senha)
        // VALUES('${nome}', '${email}', '${telefone}', '${hashPassword}')`
        return db.query('INSERT INTO usuarios(nome, email, telefone, senha) VALUES(?, ?, ?, ?)', [nome, email, telefone, hashPassword], (error, data) => {
            if(error) {
                return res.status(200).json(error)
            } else {
                console.log(data)
                return res.status(201).json('cadastro ou login efetuado')
            }
        })
      
    } catch(error) {
        console.log(error)
    }
}


module.exports = createUsuario



