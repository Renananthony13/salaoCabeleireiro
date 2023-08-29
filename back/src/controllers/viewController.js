const db = require('../config/db.js');

function viewC(req, res) {
    const id = req.body

    const querySql = `SELECT * FROM usuarios`;

    try {
        db.query(querySql, (error, result, fields) => {
            if(error) {
                res.status(500).json(error)
            } else {
                console.log(result)
                res.status(200).json(result)
            }
        })
    } catch(error) {
        console.log(error)
    }
    
}

module.exports = viewC
