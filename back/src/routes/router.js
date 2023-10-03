const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate')


// middlewares
const validaHora = require('../middlewares/validaHora')
const authLogin = require('../middlewares/authLogin')


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
router.post('/cadastrar',  celebrate({
    [Segments.BODY]: {
        nome: Joi.string().required(),
        email: Joi.string().required(),
        telefone: Joi.string().required(),
        senha: Joi.string().required()
    }
}), cadastrarUsuarioController)

// agendamento
router.post('/agendar/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.number().required()
    },
    [Segments.BODY]: {
        descricao: Joi.string().required().pattern(new RegExp(/^[a-zA-Z0-9\s.,!?()"'-]+$/)),
        status: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9\s.,!?()"'-]+$/)).min(3).max(10),
        data: Joi.string(),
        hora: Joi.string().custom(validaHora, 'validation'),
        preco: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9\s.,!?()"'-]+$/)).min(2).max(10)
    }
}), newAgendamento)

// alterar agendamento
router.put('/alteraragendamento/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.number().required()
    },
    [Segments.BODY]: {
        descricao: Joi.string().required().pattern(new RegExp(/^[a-zA-Z0-9\s.,!?()"'-]+$/)),
        status_agend: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9\s.,!?()"'-]+$/)).min(3).max(10),
        data_agend: Joi.date(),
        hora_agend: Joi.string().custom(validaHora, 'validation'),
        servicos: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9\s.,!?()"'-]+$/)).min(3).max(100),
        preco: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9\s.,!?()"'-]+$/)).min(2).max(10)
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


router.get('/viewusers', authLogin, viewController)
router.get('/', (req, res) => res.send('to vivo de novo'))

module.exports = router
