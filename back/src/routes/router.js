const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate')

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
router.post('/agendar/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.number().required()
    }
}), newAgendamento)

// alterar agendamento
router.put('/alteraragendamento/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.number().required()
    },
    [Segments.BODY]: {
        descricao: Joi.string().required().pattern(new RegExp(/^[a-zA-Z0-9\s.,!?()"'-]+$/)),
        status_agend: Joi.string().required().pattern(new RegExp(/^[a-zA-Z0-9\s.,!?()"'-]+$/)).min(3).max(10),
        data_agend: Joi.date().required()
    }
}), alterarAgendamento)

// alterar status
router.put('/alterarstatus/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.number().required()
    }
}), alterarStatus)

// historico de agendamentos
router.get('/historico/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.number().required()
    }
}),historicoAgendamentos)


router.get('/viewusers', viewController)
router.get('/', (req, res) => res.send('to vivo de novo'))

module.exports = router
