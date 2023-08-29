const db = require('../config/db.js');

function viewModel(id) {
    const querySql = `SELECT * FROM WHERE idusuario = ${id}`;

    db.query(querySql)
}