const db = require('../config/db.js')
const mysql = require('mysql2')

function alterarAgendamento(req, res) {
    const valuesObj = req.body;
    const idUser = req.params.id;
    let values = [];
    let updates = [];

    for(let el in valuesObj) {
        // console.log(el, valuesObj[el])
        if (valuesObj.hasOwnProperty(el)) {
            updates.push(`${el} = ?`);
            values.push(valuesObj[el]);
        }
        
    } 


    // const querySql = `UPDATE agendamentos SET ${values} WHERE idagendamento = ${mysql.escape(idUser)};`
    const sql = `UPDATE agendamentos SET ${updates} WHERE idagendamento = ${idUser}`;
  

    try{
        db.query(sql, values, (err, data) => {
            if(err) {
                console.log(err)
                res.status(500).json(err)
            } else {
                console.log(data)
                res.status(200).json('Valores alterados com sucesso!')
            }
        })
    } catch(error) {
        console.log(error)
    }
}

module.exports = alterarAgendamento



// db.query(querySql, (err, data) => {
//     const querySqlDois = `UPDATE agendamentos 
//     SET descricao = '${req.body.descricao === '' ? data.descricao : req.body.descricao}',
//     status = '${req.body.status === '' ? data.status_agend : req.body.status}',
//     data = '${req.body.data === '' ? data.data_agend : req.body.data}',
//     hora = '${req.body.hora === '' ? data.hora_agend : req.body.hora}'
//     WHERE idagendamento = ${req.params.id}`

//     if(err) {
//         console.log(err)
//         res.status(500).json(err)
//     } else {
//         console.log(data)
//         // res.status(401).send('Agendamento enviado com sucesso!')
//         db.query(querySqlDois, (error, value) => {
//             if(error) {
//                 console.log(err)
//                 res.status(500).json(err)
//             } else {
//                 console.log(value)
//                 res.status(200).send('Valores alterados')
//             }
//         })
//     }
// })



// let querySql = 'UPDATE agendamentos SET';
    // let values = [];
    // let columns = Object.keys(req.body);

    // columns.forEach((column, index) => {
    //     querySql += ` ${column} = '${req.body[column]}'`
    //     values.push(req.body[column]);

    //     if(index < columns.length - 1) {
    //         querySql += ',';
    //     }
    // });

    // querySql += ` WHERE idagendamento = ${req.params.id}`
    // values.push(req.params.id)