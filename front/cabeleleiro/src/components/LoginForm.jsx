import { useState } from 'react';
import { useNavigate, redirect } from 'react-router-dom';
// import { axios } from 'axios';
import axios from 'axios';

export default function LoginForm() {

    const navigate = useNavigate()
    const redirectUser = () => {    
        navigate('/agendamento')
    }
    

    const [user, setUser] = useState({
        email: "",
        senha: ""
    })


    const [res, setRes] = useState('')

    const getDataUser = (e) => {
        setUser(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    console.log(user)

    const handleSubmit = async (e) => {
        e.preventDefault()

       try {
            await axios.post('http://localhost:8080/login', user)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                redirectUser()
            })
            .catch((error) => console.log(error))

       } catch(error) {
            console.log(error)
       }
    }


    return (
        <form method='POST' onSubmit={handleSubmit}>
            <label>
            <input name="email" type="email" onChange={e => getDataUser(e)} placeholder="Seu email" />
            </label>
            <label>
            <input name="senha" type="password" onChange={e => getDataUser(e)} placeholder="Sua senha" />
            </label>
            
            <button type='submit'>Login</button>
        </form>
        
    );
}

