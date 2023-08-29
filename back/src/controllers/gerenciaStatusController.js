const db = require('../config/db.js');

function alterarStatus(req, res) {

    const querySql = `UPDATE agendamentos SET status_agend = '${req.body.status}' WHERE idagendamento = ${req.params.id}`
    try{
        db.query(querySql, (err, data) => {
            if(err) {
                console.log(err)
                res.status(500).json(err)
            } else {
                console.log(data)
                res.status(200).json('Alterado com sucesso!')
            }
        })
    }catch(error) {
        console.log(error)
    }
}

module.exports = alterarStatus

