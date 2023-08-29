const mysql = require('mysql2');

const conection = mysql.createPool({
    host: "127.0.0.1",
    user: "",
    password: "",
    database: ""
})

conection.getConnection((error, conect) => {
    if(error) {
        console.log(error)
    } else {
        console.log(`Conexao completa ao banco.`)
    }
})


module.exports = conection



