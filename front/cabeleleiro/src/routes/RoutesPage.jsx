
import {BrowserRouter as Router, Route, Routes, redirect} from 'react-router-dom';

import { HistoricoPage } from '../pages/Historico/historico'
import { AgendamentoPage } from '../pages/Agendamento/agendamento';
import { Login } from '../pages/Login/login';
import {Cadastro} from '../pages/Cadastro/cadastro'

import HomePage from '../pages/HomePage/HomePage';
import { useEffect, useState } from 'react';
import PrivateRoute from '../components/RouteAuth';

export default function RoutesPage() {

    const [log, setLog] = useState(false);

    console.log(localStorage.getItem('token'))

    useEffect(() => {
        if(localStorage.getItem('token')) {
            setLog(true)
        }
    })

    console.log(log)

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="Historico" element={<HistoricoPage />} 
            
            />
            <PrivateRoute 
                path="agendamento"
                component={<AgendamentoPage />}
                isAuthenticated={log}
            />
            {/* <Route path="Agendamento" element={<AgendamentoPage />} /> */}
            <Route path='home' element={<HomePage />} />

            <Route path="Login" element={<Login />} />
            <Route path="Cadastro" element={<Cadastro />} />

        </Routes>    
    )
}

