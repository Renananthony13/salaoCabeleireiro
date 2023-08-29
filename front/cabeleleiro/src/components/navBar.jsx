import {Link} from 'react-router-dom';

import '../style/App.css'

export default function NavBar() {
    // const path = window.location.pathname

    // function logarCadastrar() {

    // }


   
    return (
        <nav className="nav">
           <ul className='ulNavBar'>
                {/* <li>
                    <Link to="/" >Home</Link>
                </li> */}

                <li>
                    <Link to="Historico" >Historico</Link>
                </li>

                <li>
                    <Link to="Agendamento" >Agendamento</Link>
                </li>
            </ul>
            <div className='loginCadastro'>
                <h1><Link to="login">Login/Cadastro</Link></h1>
            </div>
        </nav>
    )
} 

