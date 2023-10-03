const db = require('../config/db.js')


function newAgendamento(req, res) {
    const {descricao, status, hora, preco} = req.body
    const id = req.params.id
    let data = req.body.data

    const dataAtual = new Date()

    //! function verifica horario
    function validaHora(hrAtual, hr) {
        let diferenca = hr.split(':')[0] - hrAtual.split(':')[0]

        if(Math.sign(diferenca) === 0) {
            return Number(hr.split(':')[1]) >= Number(hrAtual.split(':')[1]) ? true : false
        } 
        else if(Math.sign(diferenca) > 0) {
            return true
        }
        else {
            return false
        }

    }

    const dataReq = data.split('-').reverse()
    
    if(Number(dataReq[1]) < (dataAtual.getMonth() + 1) || Number(dataReq[0]) < dataAtual.getDate()) {
        return res.status(500).send('Data nao possivel')
    } else if(Number(dataReq[0]) === dataAtual.getDate()) {
        if(validaHora(dataAtual.toLocaleTimeString('pt-br'), hora) === false) {
            return res.status(500).send('Data nao possivel')
        } 
    }


    db.query('SELECT COUNT(*) AS agendamentos_count FROM agendamentos WHERE idusuario=? AND data_agend =?', [id, data],(checkErr, checkResult) => {
        if (checkErr) {
            console.log(checkErr);
            return res.status(500).json(checkErr);
        }
        const agendamentosCount = checkResult[0].agendamentos_count;

        const querysql = 'INSERT INTO agendamentos(idusuario, descricao, status_agend, data_agend, hora_agend, preco) VALUES (?, ?, ?, ?, ?, ?)'
        try{
            db.query(querysql, [id, descricao, status, data, hora, preco], (err, data) => {
                if(err) {
                    console.log(err)
                    res.status(500).json(err)
                } else {
                    //! verifica se o usuario possui outros agendamentos na mesma data 
                    if (agendamentosCount > 0) {
                        // Enviar mensagem informando sobre agendamento anterior e perguntando se deseja agendar novamente
                        const message = `Você já tem ${agendamentosCount} agendamento(s) marcado(s) para o mesmo dia. Pode tentar agendar para o mesmo dia`;
                        return res.status(200).json({ 
                            status: 'Agendamento enviado com sucesso!',
                            mensagem: message
                         });
                    }
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
