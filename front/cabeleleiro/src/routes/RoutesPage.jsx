
import {BrowserRouter as Router, Route, Routes, redirect} from 'react-router-dom';

import { HistoricoPage } from '../pages/Historico/historico'
import { AgendamentoPage } from '../pages/Agendamento/agendamento';
import { Login } from '../pages/Login/login';
import {Cadastro} from '../pages/Cadastro/cadastro'

import HomePage from '../pages/HomePage/HomePage';
import { useState } from 'react';

export default function RoutesPage() {

    const [logado] = useState(false);

    console.log(localStorage.getItem('token'))

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="Historico" element={<HistoricoPage />} />
            <Route path="Agendamento" element={<AgendamentoPage />} />
            <Route path='home' element={<HomePage />} />

            <Route path="Login" element={<Login />} />
            <Route path="Cadastro" element={<Cadastro />} />

        </Routes>    
    )
}

