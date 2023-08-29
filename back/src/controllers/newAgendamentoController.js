const db = require('../config/db.js')


function newAgendamento(req, res) {
    const {idusuario, descricao, status, data, hora, preco} = req.body

    // const querySql = `INSERT INTO agendamentos(idusuario, descricao, status_agend, data_agend, hora_agend, preco)
    // VALUES ('${req.params.id}', '${descricao}', '${status}', '${data}', '${hora}', '${preco}')`
    // try{
    //     db.query(querySql, (err, data) => {
    //         if(err) {
    //             console.log(err)
    //             res.status(500).json(err)
    //         } else {
    //             console.log(data)
    //             res.status(201).send('Agendamento enviado com sucesso!')
    //         }
    //     })
    // } catch(error) {
    //     console.log(error)
    // }

    const checkQuery = `SELECT COUNT(*) AS agendamentos_count FROM agendamentos WHERE idusuario = '${req.params.id}' AND data_agend = '${data}'`;

    db.query(checkQuery, (checkErr, checkResult) => {
        if (checkErr) {
            console.log(checkErr);
            return res.status(500).json(checkErr);
        }
        
        const agendamentosCount = checkResult[0].agendamentos_count;
        
        if (agendamentosCount > 0) {
            // Enviar mensagem informando sobre agendamento anterior e perguntando se deseja agendar novamente
            const message = `Você já tem ${agendamentosCount} agendamento(s) marcado(s) para o mesmo dia. Pode tentar agendar para o mesmo dia`;
            return res.status(200).json({ message });

        }

        const querySql = `INSERT INTO agendamentos(idusuario, descricao, status_agend, data_agend, hora_agend, preco)
        VALUES ('${req.params.id}', '${descricao}', '${status}', '${data}', '${hora}', '${preco}')`
        try{
            db.query(querySql, (err, data) => {
                if(err) {
                    console.log(err)
                    res.status(500).json(err)
                } else {
                    console.log(data)
                    res.status(201).json('Agendamento enviado com sucesso!')
                }
            })
        } catch(error) {
            console.log(error)
        }

    })
    
}

module.exports = newAgendamento



// const querySql = `INSERT INTO agendamentos(idusuario, descricao, status_agend, data_agend, hora_agend, preco)
//     VALUES ('${req.params.id}', '${descricao}', '${status}', '${data}', '${hora}', '${preco}')`
//     try{
//         db.query(querySql, (err, data) => {
//             if(err) {
//                 console.log(err)
//                 res.status(500).json(err)
//             } else {
//                 console.log(data)
//                 res.status(401).send('Agendamento enviado com sucesso!')
//             }
//         })
//     } catch(error) {
//         console.log(error)
//     }