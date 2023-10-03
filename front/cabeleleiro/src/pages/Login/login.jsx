import { useNavigate } from 'react-router-dom';
import '../../style/App.css'
import './loginStyle.css'
import LoginForm from '../../components/LoginForm';

function login() {

    const navigate = useNavigate();
    const goToRegister = () => {
        navigate('/cadastro')
    }

    return (
        <div className="loginPage">
        <div className="divForm">
            <h1>Login</h1>
        <LoginForm />
        <h3>Não possui cadastro? <button onClick={() => goToRegister()}>Cadastrar</button></h3>
        </div>
        </div>
    );
}

export const Login = login
