import {Link} from 'react-router-dom';
import {styled} from 'styled-components';
import '../style/App.css'

export default function NavBar() {
    // const path = window.location.pathname

    // function logarCadastrar() {

    // }

    const liStyle = styled.li`
        padding: 1rem;
        list-style: none;
        color: rgba(173, 186, 199, 1);
        text-decoration: none;
        text-transform: uppercase;
        

        &.active {
            background-color: #555; // Estilo para a rota ativa
        }
       
    `;


   
    return (
        <nav className="nav">
           <ul className='ulNavBar'>
                {/* <li>
                    <Link to="/" >Home</Link>
                </li> */}

                <liStyle>
                    <Link to="Historico" >Historico</Link>
                </liStyle>

                <liStyle>
                    <Link to="Agendamento" >Agendamento</Link>
                </liStyle>
            </ul>
            <div className='loginCadastro'>
                <h1><Link to="login">Login/Cadastro</Link></h1>
            </div>
        </nav>
    )
} 

