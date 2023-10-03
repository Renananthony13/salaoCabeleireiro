import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './cadastroStyle.css'
import { useState } from 'react';

import { AgendamentoPage } from '../Agendamento/agendamento';

import CadastroForm from '../../components/CadastroForm';

function cadastro() {

    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login')
    }

    return (
        <div className="cadastroPage">
            <div className="divForm">
                <h1>Cadastrar</h1>
                <CadastroForm />
                <h3>Ja possui cadastro? <button onClick={() => goToLogin()}>login</button></h3>
            </div>
        </div>
    );
}

export const Cadastro = cadastro

