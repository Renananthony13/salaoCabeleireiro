const express = require('express');

const router = express.Router();

// rotas controller
// login
const loginController = require('../controllers/loginController.js')
// cadastro
const cadastrarUsuarioController = require('../controllers/cadastrarUsuarioController.js')
// agendamento
const newAgendamento = require('../controllers/newAgendamentoController.js')
// alterar agendamento
const alterarAgendamento = require('../controllers/alterarAgendamentoController.js')
//alterar status
const alterarStatus = require('../controllers/gerenciaStatusController.js')
// historico de agendamentos
const historicoAgendamentos = require('../controllers/historicoAgendamentosController.js')


const viewController = require('../controllers/viewController.js')

//rotas
// login
router.post('/login', loginController)
//cadastro
router.post('/cadastrar', cadastrarUsuarioController)
// agendamento
router.post('/agendar/:id', newAgendamento)
// alterar agendamento
router.put('/alteraragendamento/:id', alterarAgendamento)
// alterar status
router.put('/alterarstatus/:id', alterarStatus)
// historico de agendamentos
router.get('/historico/:id', historicoAgendamentos)


router.get('/viewusers', viewController)
router.get('/', (req, res) => res.send('to vivo de novo'))

module.exports = router
