import {Link, useNavigate} from 'react-router-dom';
import {styled} from 'styled-components';
import './nav.css'
// import '../../style/App.css'

export default function NavBar() {
    const navigate = useNavigate()

    const routerLogin = () => {
        const localLocation = window.location.pathname;
        const showNav = localLocation !== '/login';

        return window.location.href = '/login'
    }

    const Listyle = styled.li`
        padding: 1rem;
        list-style: none;
        color: rgba(173, 186, 199, 1);
        text-decoration: none;        
        border-radius: 1rem;
        
        /* &.focus {
            color: red;
        } */
        /* &.active {
            background-color: #555; // Estilo para a rota ativa
        } */

        a {
            color: white;
            text-decoration: none;
            font-family: 'DM Sans', sans-serif;
            font-weight: 600;
            letter-spacing: 1px;
        }

       
    `;


   
    return (
        <nav className="nav">
           <ul className='ulNavBar'>
         
                <Listyle>
                    <Link to="/Historico" >Historico</Link>
                </Listyle>

                <Listyle>
                    <Link to="/Agendamento" >Agendamento</Link>
                </Listyle>

                <button className='buttonLogin' onClick={routerLogin}>Login/cadastrar</button>

            </ul>
        </nav>
    )
} 

