const db = require('../config/db.js')
const bcrypt = require('bcrypt')

async function createUsuario(req, res) {
    const {nome, email, telefone, senha} = req.body

    console.log(req.body)

    try {
       
        const salt = 1;
        const hashPassword = await bcrypt.hash(senha, salt);
        console.log(hashPassword)

        const querySql =  `INSERT INTO usuarios(nome, email, telefone, senha)
        VALUES('${nome}', '${email}', '${telefone}', '${hashPassword}')`
        db.query(querySql, (error, data) => {
            if(error) {
                res.status(200).json(error)
            } else {
                console.log(data)
                res.status(200).json(data)
            }
        })
      
    } catch(error) {
        console.log(error)
    }
}

module.exports = createUsuario


