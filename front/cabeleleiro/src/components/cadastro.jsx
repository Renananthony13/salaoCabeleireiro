import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/cadastroStyle.css'
import { useState } from 'react';

function cadastro() {

    const [formData, setFormData] = useState({
        "nome": '',
        "email": '',
        "telefone": '',
        "senha": ''
      });
      
    

      const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };

      const handleSubmit = async event => {
        event.preventDefault();
        
        console.log(formData)

        try {
          const response = await axios.post('http://localhost:8080/cadastrar', formData);
          console.log('Resposta do servidor:', response.data);
        } catch (error) {
          console.error(error);
        }
      };

    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login')
    }

    return (
        <div className="cadastroPage">
            <div className="divForm">
                <h1>Cadastrar</h1>
            <form onSubmit={handleSubmit}>
                <label>
                <input name="nome" type="text"  onChange={handleInputChange} placeholder="Seu nome" />
                </label>
                <label>
                <input name="email" type="email"  onChange={handleInputChange} placeholder="Seu melhor email" />
                </label>
                <label>
                <input name="telefone" type="tel"  onChange={handleInputChange} placeholder="Seu numero" />
                </label>
                <label>
                <input name="senha" type="password"  onChange={handleInputChange} placeholder="Uma senha forte" />
                </label>
                
                <button type="submit">Cadastrar</button>
            </form>
                <h3>Ja possui cadastro? <button onClick={() => goToLogin()}>login</button></h3>
            </div>
        </div>
    );
}

export const Cadastro = cadastro