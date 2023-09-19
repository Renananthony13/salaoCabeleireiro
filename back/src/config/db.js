const mysql = require('mysql2');
const dotenv = require('dotenv').config();

const conection = mysql.createPool({
    host: "127.0.0.1",
    user: process.env.DB_USERNAME,
    password:  process.env.DB_PASSWORD,
    database: "cabeleleiro"
})

conection.getConnection((error, conect) => {
    if(error) {
        console.log(error)
    } else {
        console.log(`Conexao completa ao banco.`)
    }
})


module.exports = conection




