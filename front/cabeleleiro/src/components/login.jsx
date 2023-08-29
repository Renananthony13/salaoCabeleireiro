import { useNavigate } from 'react-router-dom';
import '../style/loginStyle.css'

function login() {

    const navigate = useNavigate();
    const goToRegister = () => {
        console.log('iai')
        navigate('/cadastro')
    }

    return (
        <div className="loginPage">
        <div className="divForm">
            <h1>Login</h1>
        <form>
            <label>
            <input name="myInput" type="email" placeholder="Seu email" />
            </label>
            <label>
            <input name="myInput" type="password" placeholder="Sua senha" />
            </label>
            
            <button>Login</button>
        </form>
        <h3>Não possui cadastro? <button onClick={() => goToRegister()}>Cadastrar</button></h3>
        </div>
        </div>
    );
}

export const Login = login