const db = require('../config/db.js')

async function historicoAgendamentos(req, res) {
    const id_user = req.params.id
    try {
        db.query('SELECT * FROM agendamentos WHERE idusuario =?', [id_user],(error, data) => {
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

module.exports = historicoAgendamentos
