import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CadastroForm() {

      const [formData, setFormData] = useState({
          "nome": '',
          "email": '',
          "telefone": '',
          "senha": ''
        });
      
      const navigate = useNavigate()
      const redirectRoter = () => {
          navigate('/login')
      }
    
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

        for(let element in formData) {
            if(formData[element] === '') {
               return console.log("Todos o campos devem ser preenchidos")
               // tela de error/ ou tratamento de erros, por compos nao preechidos
            }
        }

        try {
          await axios.post('http://localhost:8080/cadastrar', formData)
            .then((response) => {
              alert("Usuario cadastrado com sucesso")
              // console.log('Resposta do servidor:', response.data)
              return redirectRoter()
            })
            .catch((error) => {
              // console.log(error)
              console.log('deu ruim ')

            })
          
          

        } catch (error) {
          // console.error(error);
          console.log('deu ruim ')
        }
      };

    return (
        <form onSubmit={handleSubmit}>
            <label>
            <input name="nome" type="text"  onChange={handleInputChange} placeholder="Seu nome"  required />
            </label>
            <label>
            <input name="email" type="email"  onChange={handleInputChange} placeholder="Seu melhor email" required />
            </label>
            <label>
            <input name="telefone" type="tel"  onChange={handleInputChange} placeholder="Seu numero" required />
            </label>
            <label>
            <input name="senha" type="password"  onChange={handleInputChange} placeholder="Uma senha forte" required />
            </label>
            
            <button type="submit">Cadastrar</button>
        </form>
    );
}