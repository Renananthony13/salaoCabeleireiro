
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { HistoricoPage } from '../src/components/historico'
import { AgendamentoPage } from '../src/components/agendamento';
import { Login } from '../src/components/login';
import {Cadastro} from '../src/components/cadastro'

import NavBar from '../src/components/navBar';

export default function RoutesPage() {
    return (
        <Router>
            <div>
                <nav className='navRouter'>
                 
                    <NavBar />

                    <Routes>
                        {/* <Route path="/" element={<Home />} /> */}
                        <Route path="Historico" element={<HistoricoPage />} />
                        <Route path="Agendamento" element={<AgendamentoPage />} />
                        <Route path="Login" element={<Login />} />
                        <Route path="Cadastro" element={<Cadastro />} />
                    </Routes>
                
                </nav>
            </div>
        </Router>
    )
}